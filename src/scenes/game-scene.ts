import * as R from 'ramda'
import { addPoints, multiplyPoint, subtractPoints } from './point'
import { Hex } from '../world/hex'
import { centerPoint, fromPoint, hexWidth, mapHeight } from './hex-geometry'
import { INITIAL_WORLD_STATE, PlayerId, WorldState } from '../world/world-state'
import { Server } from '../server/server'
import { CombatWorldEvent, UnitMovedWorldEvent, WorldEvent } from '../world/world-events'
import { applyEvent } from '../world/world-event-evaluator'
import { WorldAction } from '../world/world-actions'
import { Unit, UnitId } from '../world/unit'
import { UnitDisplayObject } from './unit-display-object'
import { ACTION_TEXT_COLOUR, HOVER_ACTION_TEXT_COLOUR } from './colours'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { MapDisplayObject } from './map-display-object'
import { Option, toMaybe } from '../util/types'
import { INITIAL_LOCAL_GAME_STATE, LocalGameState } from './local-game-state'
import { ALL_AUDIO_KEYS, AudioKeys } from './asset-keys'
import { mapToLocalAction } from './keyboard-mapper'
import { LocalAction } from './local-action'
import { LocalActionProcessor, LocalActionResult } from './local-action-processor'
import { Mode } from './mode'
import { SceneSyncer } from './scene-syncer'
import Pointer = Phaser.Input.Pointer

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
}

export const HEX_SIZE = 48
export const DRAWING_OFFSET = { x: 60, y: 100 }
export const hexCenter = (hex: Hex) => addPoints(multiplyPoint(centerPoint(hex), HEX_SIZE), DRAWING_OFFSET)

export class GameScene extends Phaser.Scene {
  private readonly server: Server = new Server()
  private worldState: WorldState = INITIAL_WORLD_STATE
  private localGameState: LocalGameState = INITIAL_LOCAL_GAME_STATE
  private mapDisplayObject: MapDisplayObject
  private unitDisplayObjects: Map<UnitId, UnitDisplayObject> = new Map()
  private selectionText: Phaser.GameObjects.Text
  private actionText: Phaser.GameObjects.Text
  private actionText2: Phaser.GameObjects.Text
  private endTurnText: Phaser.GameObjects.Text
  private playerText: Phaser.GameObjects.Text

  constructor() {
    super(sceneConfig)
    this.server.addListener(this.handleWorldEvent)
  }

  private get mode(): Mode {
    return this.localGameState.mode
  }

  private get playerId(): PlayerId {
    return this.localGameState.playerId
  }

  public create(): void {
    ALL_AUDIO_KEYS.forEach(key => this.sound.add(key))
    this.mapDisplayObject = new MapDisplayObject(this, this.worldState, this.localGameState)
    this.worldState.units.forEach(this.createUnit)
    this.createTexts()
    this.setUpInputs()
    this.syncScene()
  }

  private setUpInputs = (): void => {
    this.input.mouse.disableContextMenu()
    this.input.keyboard.on('keydown', this.handleKey)
    this.input.on('pointerdown', this.handlePointerDown)
    this.input.on('pointermove', this.handlePointerMove)
  }

  private handleKey = (event: KeyboardEvent): void => {
    const localAction = mapToLocalAction(event, this.mode)
    if (localAction)
      this.handleLocalAction(localAction)
  }

  private handleLocalAction(localAction: LocalAction): void {
    const localActionProcessor = new LocalActionProcessor(this.worldState, this.localGameState)
    const result = localActionProcessor.process(localAction)
    if (result) {
      this.enactLocalActionResult(result)
    }
  }

  private enactLocalActionResult(result: LocalActionResult): void {
    if (result.newLocalGameState) {
      this.localGameState = result.newLocalGameState
      this.syncScene()
    }
    if (result.worldAction) {
      this.sendWorldActionToServer(result.worldAction)
    }
  }

  private createUnit = (unit: Unit) => {
    const unitDisplayObject = new UnitDisplayObject(this, unit)
    this.unitDisplayObjects.set(unit.id, unitDisplayObject)
  }

  private createTexts = () => {
    const map = this.worldState.map
    this.selectionText = this.add.text(DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y, '')
    this.actionText = this.add.text(DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y + 25, '', { fill: ACTION_TEXT_COLOUR }).setInteractive()
      .on('pointerdown', this.handleActionTextClick)
      .on('pointerover', () => this.actionText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText.setFill(ACTION_TEXT_COLOUR))
    this.actionText2 = this.add.text(DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y + 50, '', { fill: ACTION_TEXT_COLOUR }).setInteractive()
      .on('pointerdown', this.handleActionText2Click)
      .on('pointerover', () => this.actionText2.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText2.setFill(ACTION_TEXT_COLOUR))
    this.endTurnText = this.add.text(700, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y, '', { fill: ACTION_TEXT_COLOUR }).setInteractive()
      .on('pointerdown', () => this.handleLocalAction({ type: 'endTurn' }))
      .on('pointerover', () => this.endTurnText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.endTurnText.setFill(ACTION_TEXT_COLOUR))
    this.playerText = this.add.text(23, 20, '')
  }

  private handleWorldEvent = (event: WorldEvent): void => {
    this.worldState = applyEvent(this.worldState, event)
    switch (event.type) {
      case 'unitMoved':
        this.handleUnitMovedWorldEvent(event)
        break
      case 'combat':
        this.handleCombatWorldEvent(event)
        break
      case 'playerEndedTurn':
      case 'wholeTurnEnded':
        this.handleTurnEnded()
        break
      default:
        throw new UnreachableCaseError(event)
    }
  }

  private handleTurnEnded = (): void => {
    const player = R.head(R.sortBy(player => player.id, (this.worldState.players.filter(player => !player.endedTurn))))
    if (!player)
      throw `Could not find player to take next turn`
    this.localGameState = this.localGameState.copy({ playerId: player.id })
    const unitToSelect = this.findFirstUnitWithActionPoints()
    this.localGameState = this.localGameState.copy({
      mode: { type: 'selectHex' },
      selectedHex: toMaybe(unitToSelect?.location),
    })
    this.sound.play(AudioKeys.NEW_TURN)
    this.syncScene()
  }

  private findNextUnitWithActionPoints = (unitId: UnitId): Option<Unit> => {
    const candidateUnits = R.sortBy(unit => unit.id, this.worldState.units.filter(unit => unit.playerId == this.playerId && unit.actionPoints.current > 0))
    return R.head(candidateUnits.filter(unit => unit.id > unitId)) ?? R.head(candidateUnits.filter(unit => unit.id < unitId))
  }

  private findFirstUnitWithActionPoints = (): Option<Unit> => {
    const candidateUnits = R.sortBy(unit => unit.id, this.worldState.units.filter(unit => unit.playerId == this.playerId && unit.actionPoints.current > 0))
    return R.head(candidateUnits)
  }

  private handleUnitMovedWorldEvent = (event: UnitMovedWorldEvent) => {
    const { unitId, from, to } = event
    this.sound.play(AudioKeys.WALK)
    const unit = this.getUnitById(unitId)
    if (unit.playerId == this.playerId) {
      const newSelectedHex = this.calculateNewSelectedUnitAfterMoveOrAttack(unitId, to)
      this.localGameState = this.localGameState.copy({
        mode: { type: 'selectHex' },
        selectedHex: toMaybe(newSelectedHex),
      })
    }
    this.syncScene()

    this.getUnitDisplayObject(unitId).move(from, to)
  }

  private calculateNewSelectedUnitAfterMoveOrAttack = (unitId: UnitId, defaultLocation: Hex): Option<Hex> => {
    const unit = this.worldState.findUnitById(unitId)
    // Retain selection if unit still exists and we still have action points, else select next unit (or nothing if there isn't one)
    let newSelectedHex
    if (!unit || unit.actionPoints.current == 0) {
      const nextUnit = this.findNextUnitWithActionPoints(unitId)
      newSelectedHex = nextUnit?.location
    } else {
      newSelectedHex = defaultLocation
    }
    return newSelectedHex
  }

  private handleCombatWorldEvent = (event: CombatWorldEvent) => {
    const { attacker, defender } = event
    this.sound.play(AudioKeys.ATTACK)
    if (attacker.killed || defender.killed) {
      this.sound.play(AudioKeys.DEATH)
    }
    if (attacker.playerId == this.playerId) {
      const newSelectedHex = this.calculateNewSelectedUnitAfterMoveOrAttack(attacker.unitId, attacker.location)
      this.localGameState = this.localGameState.copy({
        mode: { type: 'selectHex' },
        selectedHex: toMaybe(newSelectedHex),
      })
    }
    // TODO: deselect unit killed by another player
    this.syncScene()
    const attackerDisplayObject = this.getUnitDisplayObject(attacker.unitId)
    const defenderDisplayObject = this.getUnitDisplayObject(defender.unitId)
    attackerDisplayObject.attack(attacker.location, defender.location)
    if (attacker.killed) {
      attackerDisplayObject.destroy()
      this.unitDisplayObjects.delete(attacker.unitId)
    }
    if (defender.killed) {
      defenderDisplayObject.destroy()
      this.unitDisplayObjects.delete(defender.unitId)
    }
  }

  private getUnitDisplayObject = (unitId: number): UnitDisplayObject => {
    const unitDisplayObject = this.unitDisplayObjects.get(unitId)
    if (!unitDisplayObject)
      throw `Could not find unit with ID ${unitId}`
    return unitDisplayObject
  }

  private handlePointerMove = (pointer: Pointer): void => {
    const pointerPoint = { x: pointer.x, y: pointer.y }
    this.mapDisplayObject.handlePointerMove(pointerPoint)
  }

  private handlePointerDown = (pointer: Pointer): void => {
    // Ignore clicks on these as they have their own handlers
    for (const obj of [this.endTurnText, this.actionText, this.actionText2])
      if (obj.getBounds().contains(pointer.x, pointer.y))
        return
    const pressedPoint = { x: pointer.x, y: pointer.y }
    const hex = fromPoint(multiplyPoint(subtractPoints(pressedPoint, DRAWING_OFFSET), 1 / HEX_SIZE))
    if (pointer.button == 2) {
      this.handleLocalAction({ type: 'goHex', hex })
    } else {
      this.handleLeftClick(hex)
    }
  }

  private handleLeftClick = (hex: Hex): void => {
    const mode = this.mode
    switch (mode.type) {
      case 'selectHex':
        this.handleLocalAction({ type: 'selectHex', hex })
        break
      case 'moveUnit':
        this.handleLocalAction({ type: 'completeMove', unitId: mode.unitId, hex })
        break
      case 'attack':
        this.handleLocalAction({ type: 'completeAttack', unitId: mode.unitId, hex })
        break
      default:
        throw new UnreachableCaseError(mode)
    }
  }

  private handleActionTextClick = (): void => {
    switch (this.mode.type) {
      case 'selectHex':
        this.handleLocalAction({ type: 'enterMoveMode' })
        break
      case 'moveUnit':
      case 'attack':
        this.handleLocalAction({ type: 'abort' })
        break
      default:
        throw new UnreachableCaseError(this.mode)
    }
  }

  private handleActionText2Click = (): void => {
    if (this.mode.type === 'selectHex') {
      this.handleLocalAction({ type: 'enterAttackMode' })
    }
  }

  private getUnitById = (unitId: number): Unit => {
    const unit = this.worldState.findUnitById(unitId)
    if (!unit) {
      throw `No unit found with ID ${unitId}`
    }
    return unit
  }

  private sendWorldActionToServer = (action: WorldAction): void =>
    this.server.handleAction(this.playerId, action)

  private syncScene = (): void => {
    const sceneSyncer = new SceneSyncer(this.worldState, this.localGameState,
      this.mapDisplayObject,
      this.unitDisplayObjects,
      this.selectionText,
      this.actionText,
      this.actionText2,
      this.endTurnText,
      this.playerText,
    )
    sceneSyncer.syncScene()
  }
}

