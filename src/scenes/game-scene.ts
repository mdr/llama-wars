import { addPoints, multiplyPoint, subtractPoints } from './point'
import { Hex } from '../world/hex'
import { centerPoint, fromPoint, hexWidth, mapHeight } from './hex-geometry'
import { INITIAL_WORLD_STATE, Player, WorldState } from '../world/world-state'
import { Server } from '../server/server'
import { CombatWorldEvent, UnitMovedWorldEvent, WorldEvent } from '../world/world-events'
import { applyEvent } from '../world/world-event-evaluator'
import { MoveUnitWorldAction, WorldAction } from '../world/world-actions'
import { Unit, UnitId } from '../world/unit'
import { UnitDisplayObject } from './unit-display-object'
import { ACTION_TEXT_COLOUR, HOVER_ACTION_TEXT_COLOUR } from './colours'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { MapDisplayObject } from './map-display-object'
import { nothing, Option, toMaybe } from '../util/types'
import { INITIAL_LOCAL_GAME_STATE, LocalGameState } from './local-game-state'
import { Mode } from './mode'
import * as R from 'ramda'
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

  private get mode() {
    return this.localGameState.mode
  }

  private get selectedHex() {
    return this.localGameState.selectedHex
  }

  private get playerId() {
    return this.localGameState.playerId
  }

  public create(): void {
    this.sound.add('attack')
    this.sound.add('death')
    this.sound.add('walk')
    this.sound.add('new-turn')
    this.mapDisplayObject = new MapDisplayObject(this, this.worldState, this.localGameState)
    this.worldState.units.forEach(this.createUnit)
    this.createTexts()

    this.input.mouse.disableContextMenu()
    this.input.keyboard.on('keydown-ESC', this.handleEscape)
    this.input.keyboard.on('keydown-M', this.handleMKey)
    this.input.keyboard.on('keydown-A', this.handleAKey)
    this.input.keyboard.on('keydown-N', this.handleNKey)
    this.input.keyboard.on('keydown-ENTER', this.handleEnter)
    this.input.on('pointerdown', this.handlePointerDown)
    this.input.on('pointermove', this.handlePointerMove)
    this.syncScene()
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
      .on('pointerdown', this.handleEndTurn)
      .on('pointerover', () => this.endTurnText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.endTurnText.setFill(ACTION_TEXT_COLOUR))
    this.playerText = this.add.text(23, 20, '')
  }

  private handleEndTurn = () => {
    if (!this.getCurrentPlayer().endedTurn) {
      this.sendActionToServer({ type: 'endTurn' })
    }
  }

  private syncScene = (): void => {
    this.mapDisplayObject.stateUpdated(this.worldState, this.localGameState)
    this.mapDisplayObject.syncScene()
    this.worldState.units.forEach(this.syncUnit)
    this.syncTexts()
  }

  private syncUnit = (unit: Unit): void => {
    const unitDisplayObject = this.getUnitDisplayObject(unit.id)
    unitDisplayObject.unitUpdated(unit)
    unitDisplayObject.syncScene()
  }

  private syncTexts = (): void => {
    this.playerText.setText(`Player ${this.playerId}`)
    this.selectionText.setText('')
    this.actionText.setText('')
    this.actionText2.setText('')
    switch (this.mode.type) {
      case 'selectHex':
        this.syncSelectHexModeText()
        break
      case 'moveUnit':
        this.syncMoveUnitModeText(this.mode.unitId)
        break
      case 'attack':
        this.syncAttackModeText(this.mode.unitId)
        break
      default:
        throw new UnreachableCaseError(this.mode)
    }
    if (this.getCurrentPlayer().endedTurn) {
      this.endTurnText.setText('Waiting for next turn...')
    } else {
      this.endTurnText.setText('End Turn (Shift + Enter)')
    }
  }

  private syncAttackModeText = (unitId: UnitId): void => {
    const unit = this.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionText.setText('Click unit to attack (or ESC to cancel)')
  }

  private syncMoveUnitModeText = (unitId: UnitId): void => {
    const unit = this.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionText.setText('Click tile to move to (or ESC to cancel)')
  }

  private syncSelectHexModeText = (): void => {
    if (this.selectedHex) {
      const unit = this.findUnitInLocation(this.selectedHex)
      if (unit) {
        this.selectionText.setText(this.describeUnit(unit))
        if (unit.playerId == this.playerId && unit.actionPoints.current > 0 && !this.getCurrentPlayer().endedTurn) {
          this.actionText.setText('Move (m)')
          this.actionText2.setText('Attack (a)')
        }
      }
    }
  }

  private describeUnit = (unit: Unit): string =>
    `${unit.name} - Llama warrior - HP ${unit.hitPoints.current}/${unit.hitPoints.max} - actions ${unit.actionPoints.current}/${unit.actionPoints.max}`

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
    this.localGameState = this.localGameState.copy({ selectedHex: toMaybe(unitToSelect?.location) })
    this.sound.play('new-turn')
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
    this.sound.play('walk')
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
    // Retain selection if we still have action points, else select next unit (or nothing)
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
    this.sound.play('attack')
    if (attacker.killed || defender.killed) {
      this.sound.play('death')
    }
    if (attacker.playerId == this.playerId) {
      const newSelectedHex = this.calculateNewSelectedUnitAfterMoveOrAttack(attacker.unitId, attacker.location)
      this.localGameState = this.localGameState.copy({
        mode: { type: 'selectHex' },
        selectedHex: toMaybe(newSelectedHex),
      })
    }
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
      throw 'Could not find unit with ID ' + unitId
    return unitDisplayObject
  }

  private handleMKey = () => {
    switch (this.mode.type) {
      case 'selectHex':
        this.handleStartMove()
        break
      case 'moveUnit':
      case 'attack':
        break
      default:
        throw new UnreachableCaseError(this.mode)
    }
  }

  private handleNKey = (event: KeyboardEvent) => {
    if (event.ctrlKey) {
      const selectedUnit = this.findSelectedUnit()
      const unitToSelect = selectedUnit ? this.findNextUnitWithActionPoints(selectedUnit.id) : this.findFirstUnitWithActionPoints()
      if (unitToSelect) {
        this.localGameState = this.localGameState.setSelectedHex(unitToSelect?.location)
      }
    }
  }

  private findSelectedUnit = (): Option<Unit> => this.selectedHex ? this.findUnitInLocation(this.selectedHex) : undefined

  private handleAKey = () => {
    switch (this.mode.type) {
      case 'selectHex':
        this.handleStartAttack()
        break
      case 'moveUnit':
      case 'attack':
        break
      default:
        throw new UnreachableCaseError(this.mode)
    }
  }

  private handlePointerMove = (pointer) => {
    const pointerPoint = { x: pointer.x, y: pointer.y }
    this.mapDisplayObject.handlePointerMove(pointerPoint)
  }

  private handlePointerDown = (pointer: Pointer) => {
    // Ignore clicks on these as they have their own handlers
    for (const obj of [this.endTurnText, this.actionText, this.actionText2])
      if (obj.getBounds().contains(pointer.x, pointer.y))
        return
    const pressedPoint = { x: pointer.x, y: pointer.y }
    const hex = fromPoint(multiplyPoint(subtractPoints(pressedPoint, DRAWING_OFFSET), 1 / HEX_SIZE))
    if (pointer.button == 2) {
      this.handleRightClick(hex)
    } else {
      this.handleLeftClick(hex)
    }
  }

  private handleLeftClick = (hex: Hex): void => {
    const mode = this.mode
    switch (mode.type) {
      case 'selectHex':
        this.handleSelectHex(hex)
        break
      case 'moveUnit':
        this.handleCompleteMove(hex, mode.unitId)
        break
      case 'attack':
        this.handleCompleteAttack(hex, mode.unitId)
        break
      default:
        throw new UnreachableCaseError(mode)
    }
  }

  private handleRightClick = (hex: Hex): void => {
    if (!this.selectedHex)
      return
    const unit = this.findUnitInLocation(this.selectedHex)
    if (!unit)
      return

    if (this.unitCanMoveToHex(unit, hex))
      this.dispatchMoveUnitAction(unit, hex)

    if (this.unitCanAttackHex(unit, hex))
      this.dispatchAttackAction(unit, hex)
  }

  private dispatchMoveUnitAction = (unit: Unit, hex: Hex): void => {
    const action: MoveUnitWorldAction = { type: 'moveUnit', unitId: unit.id, to: hex }
    this.sendActionToServer(action)
  }

  private setMode = (mode: Mode): void => {
    this.localGameState = this.localGameState.setMode(mode)
  }

  private unitCouldPotentiallyMove = (unit: Unit): boolean =>
    unit.playerId == this.playerId && unit.actionPoints.current > 0 && !this.getCurrentPlayer().endedTurn

  private unitCanMoveToHex = (unit: Unit, hex: Hex): boolean =>
    this.unitCouldPotentiallyMove(unit)
    && hex.isAdjacentTo(unit.location)
    && this.worldState.map.isInBounds(hex)
    && !this.findUnitInLocation(hex)

  private unitCouldPotentiallyAttack = (unit: Unit): boolean =>
    unit.playerId == this.playerId && unit.actionPoints.current > 0 && !this.getCurrentPlayer().endedTurn

  private unitCanAttackHex = (unit: Unit, location: Hex): boolean => {
    const targetUnit = this.findUnitInLocation(location)
    return this.unitCouldPotentiallyAttack(unit)
      && targetUnit != undefined
      && targetUnit.playerId != this.playerId
      && unit.location.isAdjacentTo(location)
  }

  private handleEnter = (event: KeyboardEvent): void => {
    if (!event.shiftKey)
      return
    this.handleEndTurn()
  }

  private handleEscape = (): void => {
    switch (this.mode.type) {
      case 'selectHex':
        this.localGameState = this.localGameState.copy({ selectedHex: nothing })
        this.syncScene()
        break
      case 'attack':
        this.handleAbortAttack()
        return
      case 'moveUnit':
        this.handleAbortMove()
        return
      default:
        throw new UnreachableCaseError(this.mode)
    }
  }

  private handleAbortMove = () => {
    if (this.mode.type == 'moveUnit') {
      this.setMode({ type: 'selectHex' })
      this.syncScene()
    }
  }

  private handleAbortAttack = () => {
    if (this.mode.type == 'attack') {
      this.localGameState = this.localGameState.setMode({ type: 'selectHex' })
      this.syncScene()
    }
  }

  private handleActionTextClick = () => {
    switch (this.mode.type) {
      case 'selectHex':
        this.handleStartMove()
        break
      case 'moveUnit':
        this.handleAbortMove()
        break
      case 'attack':
        this.handleAbortAttack()
        break
      default:
        throw new UnreachableCaseError(this.mode)
    }
  }


  private handleActionText2Click = () => {
    switch (this.mode.type) {
      case 'selectHex':
        this.handleStartAttack()
        break
      case 'attack':
        this.handleAbortAttack()
        break
      case 'moveUnit':
        // Shouldn't happen
        break
      default:
        throw new UnreachableCaseError(this.mode)
    }
  }

  private handleStartAttack = () => {
    if (this.selectedHex) {
      const unit = this.findUnitInLocation(this.selectedHex)
      if (unit && this.unitCouldPotentiallyAttack(unit)) {
        this.localGameState = this.localGameState.setMode({ type: 'attack', from: this.selectedHex, unitId: unit.id })
        this.syncScene()
      }
    }
  }

  private getCurrentPlayer = (): Player => {
    const player = this.worldState.findPlayer(this.playerId)
    if (!player)
      throw `Could not find player with id ${this.playerId}`
    return player
  }

  private handleStartMove = () => {
    if (this.selectedHex) {
      const unit = this.findUnitInLocation(this.selectedHex)
      if (unit && this.unitCouldPotentiallyMove(unit)) {
        const newMode: Mode = { type: 'moveUnit', from: this.selectedHex, unitId: unit.id }
        this.localGameState = this.localGameState.setMode(newMode)
        this.syncScene()
      }
    }
  }

  private getUnitById = (unitId: number): Unit => {
    const unit = this.worldState.findUnitById(unitId)
    if (!unit) {
      throw `No unit found with ID ${unitId}`
    }
    return unit
  }

  private findUnitInLocation = (hex: Hex): Option<Unit> => this.worldState.findUnitInLocation(hex)

  private handleCompleteAttack = (targetHex: Hex, unitId: UnitId) => {
    const targetUnit = this.findUnitInLocation(targetHex)
    if (targetUnit) {
      if (targetUnit.playerId == this.playerId) {
        // abort if you attack yourself
        this.localGameState = this.localGameState.setMode({ type: 'selectHex' })
        this.syncScene()
      } else {
        const action: WorldAction = { type: 'attack', unitId: unitId, target: targetHex }
        this.sendActionToServer(action)
        this.localGameState = this.localGameState.setMode({ type: 'selectHex' })
        this.syncScene()
      }
    }
  }

  private handleCompleteMove = (destination: Hex, unitId: UnitId): void => {
    const unit = this.getUnitById(unitId)
    if (this.unitCanMoveToHex(unit, destination))
      this.dispatchMoveUnitAction(unit, destination)
  }

  private handleSelectHex = (hex: Hex): void => {
    if (!this.worldState.map.isInBounds(hex)) {
      // If click is out of bounds, deselect any selected hex
      if (this.selectedHex) {
        this.localGameState = this.localGameState.setSelectedHex(undefined)
        this.syncScene()
      }
    } else if (this.selectedHex && this.selectedHex.equals(hex)) {
      // if selected hex is clicked, toggle selection off
      this.localGameState = this.localGameState.setSelectedHex(undefined)
      this.syncScene()
    } else {
      this.localGameState = this.localGameState.setSelectedHex(hex)
      this.syncScene()
    }
  }

  private dispatchAttackAction = (unit: Unit, hex: Hex): void => {
    const action: WorldAction = { type: 'attack', unitId: unit.id, target: hex }
    this.sendActionToServer(action)
  }

  private sendActionToServer = (action: WorldAction): void =>
    this.server.handleAction(this.playerId, action)

}

