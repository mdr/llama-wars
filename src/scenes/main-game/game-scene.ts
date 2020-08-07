import * as R from 'ramda'
import { addPoints, multiplyPoint, Point, subtractPoints } from '../point'
import { Hex } from '../../world/hex'
import { centerPoint, fromPoint } from '../hex-geometry'
import { PlayerId, WorldState } from '../../world/world-state'
import { CombatParticipantInfo, CombatWorldEvent, UnitMovedWorldEvent, WorldEvent } from '../../world/world-events'
import { applyEvent } from '../../world/world-event-evaluator'
import { UnitId } from '../../world/unit'
import { UnitDisplayObject } from './unit-display-object'
import { UnreachableCaseError } from '../../util/unreachable-case-error'
import { MapDisplayObject } from './map-display-object'
import { nothing, Option, toMaybe } from '../../util/types'
import { INITIAL_LOCAL_GAME_STATE, LocalGameState } from '../local-game-state'
import { ALL_AUDIO_KEYS, AudioKeys } from '../asset-keys'
import { mapToLocalAction } from './keyboard-mapper'
import { LocalAction } from './local-action'
import { LocalActionProcessor, LocalActionResult } from './local-action-processor'
import { TextsDisplayObject } from './texts-display-object'
import { CombinedState } from '../combined-state-methods'
import { WorldAction } from '../../world/world-actions'
import { ServerToClientMessage } from '../../server/messages'
import { GameSceneData } from '../main-menu/main-menu-scene'
import { deserialiseFromJson } from '../../util/json-serialisation'
import { INITIAL_WORLD_STATE } from '../../world/initial-world-state'
import { Client } from '../../server/client'
import { Server } from '../../server/server'
import Pointer = Phaser.Input.Pointer

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
}

export const HEX_SIZE = 48
export const DRAWING_OFFSET = { x: 60, y: 100 }
export const hexCenter = (hex: Hex): Point => addPoints(multiplyPoint(centerPoint(hex), HEX_SIZE), DRAWING_OFFSET)

export type GameId = string

export class GameScene extends Phaser.Scene {
  private serverOrClient?: Server | Client

  private client: Option<Client>

  private worldState: WorldState = INITIAL_WORLD_STATE
  private localGameState: LocalGameState = INITIAL_LOCAL_GAME_STATE

  private mapDisplayObject?: MapDisplayObject
  private unitDisplayObjects: Map<UnitId, UnitDisplayObject> = new Map()
  private textsDisplayObject?: TextsDisplayObject

  private get combinedState(): CombinedState {
    return new CombinedState(this.worldState, this.localGameState)
  }

  constructor() {
    super(sceneConfig)
  }

  // Create
  // ------

  public create = ({ gameId }: GameSceneData): void => {
    this.setUpSound()
    if (gameId) {
      this.actAsClient(gameId)
    } else {
      this.actAsServer()
    }

    this.createDisplayObjects()
    this.syncScene()
    this.setUpInputs()
  }

  private setUpSound = (): void => {
    this.sound.pauseOnBlur = false
    ALL_AUDIO_KEYS.forEach((key) => this.sound.add(key))
  }

  private actAsClient = async (gameId: GameId): Promise<void> => {
    this.client = await Client.connect(gameId)
    this.client.addListener(this.handleServerToClientMessage)
  }

  private handleServerToClientMessage = (message: ServerToClientMessage): void => {
    switch (message.type) {
      case 'joined':
        this.localGameState = this.localGameState.copy({ playerId: message.playerId })
        this.worldState = WorldState.fromJson(message.worldState)
        this.syncScene()
        break
      case 'worldEvent':
        this.handleWorldEvent(deserialiseFromJson(message.event))
        break
      default:
        throw new UnreachableCaseError(message)
    }
  }

  private actAsServer() {
    this.serverOrClient = new Server(this.handleWorldEvent)
  }

  private createDisplayObjects() {
    this.mapDisplayObject = new MapDisplayObject(this, this.worldState, this.localGameState)
    this.textsDisplayObject = new TextsDisplayObject(this, this.worldState, this.localGameState, this.handleLocalAction)
  }

  // Input handlers
  // --------------

  private setUpInputs = (): void => {
    this.input.mouse.disableContextMenu()
    this.input.keyboard.on('keydown', this.handleKey)
    this.input.on('pointerdown', this.handlePointerDown)
    this.input.on('pointermove', this.handlePointerMove)
  }

  private handleKey = (event: KeyboardEvent): void => {
    const localAction = mapToLocalAction(event, this.localGameState.mode)
    if (localAction) this.handleLocalAction(localAction)
  }

  private handleLocalAction = (localAction: LocalAction): void => {
    const localActionProcessor = new LocalActionProcessor(this.worldState, this.localGameState)
    const result = localActionProcessor.process(localAction)
    if (result) {
      this.enactLocalActionResult(result)
    }
  }

  private enactLocalActionResult = (result: LocalActionResult): void => {
    if (result.newLocalGameState) {
      this.localGameState = result.newLocalGameState
      this.syncScene()
    }
    if (result.worldAction) {
      this.localGameState = this.localGameState.copy({ actionOutstandingWithServer: true })
      this.syncScene()

      this.asyncSendToServer(result.worldAction).then(() => {
        this.localGameState = this.localGameState.copy({ actionOutstandingWithServer: false })
        this.syncScene()
      })
    }
  }

  private asyncSendToServer = async (action: WorldAction): Promise<void> => {
    if (this.serverOrClient instanceof Server) {
      this.serverOrClient.handleAction(this.playerId, action)
    } else if (this.serverOrClient instanceof Client) {
      this.client?.sendAction(this.playerId, action)
    }
  }

  private handlePointerMove = (pointer: Pointer): void => {
    const pointerPoint = { x: pointer.x, y: pointer.y }
    this.mapDisplayObject?.handlePointerMove(pointerPoint)
  }

  private handlePointerDown = (pointer: Pointer): void => {
    // Ignore clicks on these as they have their own handlers
    const pressedPoint = { x: pointer.x, y: pointer.y }
    if (this.textsDisplayObject?.hasClickHandlerFor(pressedPoint)) return
    const hex = fromPoint(multiplyPoint(subtractPoints(pressedPoint, DRAWING_OFFSET), 1 / HEX_SIZE))
    if (pointer.button == 2) {
      this.handleLocalAction({ type: 'goHex', hex })
    } else {
      this.handleLeftClick(hex)
    }
  }

  private handleLeftClick = (hex: Hex): void => {
    const mode = this.localGameState.mode
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

  // Sync
  // ----

  public syncScene = (): void => {
    this.mapDisplayObject?.syncScene(this.worldState, this.localGameState)
    this.textsDisplayObject?.syncScene(this.worldState, this.localGameState)

    const surplusUnitIds = R.difference(
      Array.from(this.unitDisplayObjects.keys()),
      this.worldState.units.map((unit) => unit.id),
    )
    for (const unitId of surplusUnitIds) {
      const unitDisplayObject = this.unitDisplayObjects.get(unitId)
      unitDisplayObject?.destroy()
      this.unitDisplayObjects.delete(unitId)
    }

    this.worldState.units.forEach((unit) => {
      let unitDisplayObject = this.unitDisplayObjects.get(unit.id)
      if (!unitDisplayObject) {
        unitDisplayObject = new UnitDisplayObject(this, unit)
        this.unitDisplayObjects.set(unit.id, unitDisplayObject)
      }
      unitDisplayObject.syncScene(unit)
    })
  }

  // Handle world events
  // -------------------

  private handleWorldEvent = (event: WorldEvent): void => {
    const oldWorldState = this.worldState
    this.worldState = applyEvent(oldWorldState, event)
    switch (event.type) {
      case 'unitMoved':
        this.handleUnitMovedWorldEvent(event, oldWorldState)
        break
      case 'combat':
        this.handleCombatWorldEvent(event, oldWorldState)
        break
      case 'playerEndedTurn':
        this.handlePlayerEndedTurn()
        break
      case 'newTurn':
        this.handleNewTurn()
        break
      default:
        throw new UnreachableCaseError(event)
    }
  }

  private handlePlayerEndedTurn = (): void => {
    this.syncScene()
  }

  private handleNewTurn = (): void => {
    const unitToSelect = this.combinedState.findNextUnitWithActionPoints()
    this.localGameState = this.localGameState.copy({
      mode: { type: 'selectHex' },
      selectedHex: toMaybe(unitToSelect?.location),
    })
    this.syncScene()
    this.sound.play(AudioKeys.NEW_TURN)
  }

  private handleUnitMovedWorldEvent = (event: UnitMovedWorldEvent, oldWorldState: WorldState): void => {
    const { unitId, from, to } = event
    this.sound.play(AudioKeys.WALK)
    const unit = this.worldState.getUnitById(unitId)
    const wasPreviouslySelected =
      this.localGameState.selectedHex && oldWorldState.findUnitInLocation(this.localGameState.selectedHex)?.id == unitId
    if (wasPreviouslySelected && unit.playerId == this.playerId) {
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
      const nextUnit = this.combinedState.findNextUnitWithActionPoints(unitId)
      newSelectedHex = nextUnit?.location
    } else {
      newSelectedHex = defaultLocation
    }
    return newSelectedHex
  }

  private handleCombatWorldEvent = (event: CombatWorldEvent, oldWorldState: WorldState) => {
    const { attacker, defender } = event
    this.sound.play(AudioKeys.ATTACK)
    if (attacker.killed || defender.killed) {
      this.sound.play(AudioKeys.DEATH)
    }
    this.updateSelectionAfterCombat(attacker, defender, oldWorldState)
    this.syncScene()

    const attackerDisplayObject = this.unitDisplayObjects.get(attacker.unitId)
    if (attackerDisplayObject) attackerDisplayObject.attack(attacker.location, defender.location)
  }

  private updateSelectionAfterCombat = (
    attacker: CombatParticipantInfo,
    defender: CombatParticipantInfo,
    oldWorldState: WorldState,
  ) => {
    const previouslySelectedUnitId = new CombinedState(oldWorldState, this.localGameState).findSelectedUnit()?.id
    if (previouslySelectedUnitId == attacker.unitId && attacker.playerId == this.playerId) {
      const newSelectedHex = this.calculateNewSelectedUnitAfterMoveOrAttack(attacker.unitId, attacker.location)
      this.localGameState = this.localGameState.copy({
        mode: { type: 'selectHex' },
        selectedHex: toMaybe(newSelectedHex),
      })
    } else {
      // deselect unit killed by another player
      if (defender.killed && defender.unitId == previouslySelectedUnitId && defender.playerId == this.playerId) {
        this.localGameState = this.localGameState.copy({
          mode: { type: 'selectHex' },
          selectedHex: nothing,
        })
      }
    }
  }

  // Util queries
  // ------------

  private getUnitDisplayObject = (unitId: number): UnitDisplayObject => {
    const unitDisplayObject = this.unitDisplayObjects.get(unitId)
    if (!unitDisplayObject) throw `Could not find unit with ID ${unitId}`
    return unitDisplayObject
  }

  private get playerId(): PlayerId {
    return this.localGameState.playerId
  }
}