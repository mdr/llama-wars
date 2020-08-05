import { addPoints, multiplyPoint, subtractPoints } from './point'
import { Hex } from '../world/hex'
import { centerPoint, fromPoint, hexWidth, mapHeight } from './hex-geometry'
import { INITIAL_WORLD_STATE, WorldState } from '../world/world-state'
import { Server } from '../server/server'
import { WorldEvent } from '../world/world-events'
import { applyEvent } from '../world/world-event-evaluator'
import { WorldAction } from '../world/world-actions'
import { Unit, UnitId } from '../world/unit'
import { UnitDisplayObject } from './unit-display-object'
import { ACTION_TEXT_COLOUR, HOVER_ACTION_TEXT_COLOUR } from './colours'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { MapDisplayObject } from './map-display-object'
import { just, nothing, Option } from '../util/types'
import { INITIAL_LOCAL_GAME_STATE, LocalGameState } from './local-game-state'
import { Mode } from './mode'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
}

export const hexSize = 48
export const drawingOffset = { x: 60, y: 60 }
export const hexCenter = (hex: Hex) => addPoints(multiplyPoint(centerPoint(hex), hexSize), drawingOffset)

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
    this.mapDisplayObject = new MapDisplayObject(this, this.worldState, this.localGameState)
    this.worldState.units.forEach(this.createUnit)
    this.createTexts()

    this.input.mouse.disableContextMenu()
    this.input.keyboard.on('keydown-ESC', this.handleEscape)
    this.input.keyboard.on('keydown-M', this.handleMKey)
    this.input.keyboard.on('keydown-A', this.handleAKey)
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
    this.selectionText = this.add.text(drawingOffset.x - hexWidth(hexSize) / 2, mapHeight(map) * hexSize + 50, '')
    this.actionText = this.add.text(drawingOffset.x - hexWidth(hexSize) / 2, mapHeight(map) * hexSize + 75, '', { fill: ACTION_TEXT_COLOUR }).setInteractive()
      .on('pointerdown', this.handleActionTextClick)
      .on('pointerover', () => this.actionText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText.setFill(ACTION_TEXT_COLOUR))
    this.actionText2 = this.add.text(drawingOffset.x - hexWidth(hexSize) / 2, mapHeight(map) * hexSize + 100, '', { fill: ACTION_TEXT_COLOUR }).setInteractive()
      .on('pointerdown', this.handleActionText2Click)
      .on('pointerover', () => this.actionText2.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText2.setFill(ACTION_TEXT_COLOUR))
    this.endTurnText = this.add.text(800, mapHeight(map) * hexSize + 50, 'End Turn', { fill: ACTION_TEXT_COLOUR }).setInteractive()
      .on('pointerdown', this.handleEndTurn)
      .on('pointerover', () => this.endTurnText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.endTurnText.setFill(ACTION_TEXT_COLOUR))
  }

  private handleEndTurn = () => {
    this.localGameState = this.localGameState.endTurn()
    this.syncScene()
  }

  private syncScene = (): void => {
    this.mapDisplayObject.stateUpdated(this.worldState, this.localGameState)
    this.mapDisplayObject.syncScene()
    this.worldState.units.forEach(this.syncUnit)
    this.syncText()
  }

  private syncUnit = (unit: Unit): void => {
    const unitDisplayObject = this.getUnitDisplayObject(unit.id)
    unitDisplayObject.unitUpdated(unit)
    unitDisplayObject.syncScene()
  }

  private syncText = (): void => {
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
        if (unit.playerId == this.playerId && unit.actionPoints.current > 0) {
          this.actionText.setText('M - Move')
          this.actionText2.setText('A - Attack')
        }
      }
    }
  }

  private describeUnit = (unit: Unit) => `${unit.name} - Llama warrior - HP ${unit.hitPoints.current}/${unit.hitPoints.max} - actions ${unit.actionPoints.current}/${unit.actionPoints.max}`

  private handleWorldEvent = (event: WorldEvent): void => {
    this.worldState = applyEvent(this.worldState, event)
    switch (event.type) {
      case 'unitMoved':
        const { unitId, from, to } = event
        this.getUnitDisplayObject(unitId).move(from, to)
        break
      case 'combat':
        const { attacker, defender } = event
        this.sound.play('attack')
        if (attacker.killed || defender.killed) {
          this.sound.play('death')
        }
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
        break
      default:
        throw new UnreachableCaseError(event)
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

  private handlePointerDown = (pointer) => {
    const pressedPoint = { x: pointer.x, y: pointer.y }
    const hex = fromPoint(multiplyPoint(subtractPoints(pressedPoint, drawingOffset), 1 / hexSize))
    const mode = this.mode
    switch (mode.type) {
      case 'selectHex':
        this.handleSelectHex(hex)
        break
      case 'moveUnit':
        this.handleMoveUnit(hex, mode.unitId)
        break
      case 'attack':
        this.handleAttack(hex, mode.unitId)
        break
      default:
        throw new UnreachableCaseError(mode)
    }
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
      this.localGameState = this.localGameState.setMode({ type: 'selectHex' })
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
      if (unit && unit.playerId == this.playerId && unit.actionPoints.current > 0) {
        this.localGameState = this.localGameState.setMode({ type: 'attack', from: this.selectedHex, unitId: unit.id })
        this.syncScene()
      }
    }
  }

  private handleStartMove = () => {
    if (this.selectedHex) {
      const unit = this.findUnitInLocation(this.selectedHex)
      if (unit && unit.playerId == this.playerId && unit.actionPoints.current > 0) {
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

  private handleAttack = (targetHex: Hex, unitId: UnitId) => {
    const targetUnit = this.findUnitInLocation(targetHex)
    if (targetUnit) {
      if (targetUnit.playerId == this.playerId) {
        // abort if you attack yourself
        this.localGameState = this.localGameState.setMode({ type: 'selectHex' })
        this.syncScene()
      } else {
        const action: WorldAction = { type: 'attack', unitId: unitId, target: targetHex }
        this.server.handleAction(this.playerId, action)
        this.localGameState = this.localGameState.setMode({ type: 'selectHex' })
        this.syncScene()
      }
    }
  }

  private handleMoveUnit = (hex: Hex, unitId: UnitId) => {
    const unitInHex = this.findUnitInLocation(hex)
    if (unitInHex) {
      if (unitInHex.id == unitId) {
        // abort if you click yourself
        this.localGameState = this.localGameState.setMode({ type: 'selectHex' })
        this.syncScene()
      } else {
        // do nothing
      }
    } else {
      const unit = this.getUnitById(unitId)
      if (hex.isAdjacentTo(unit.location) && this.worldState.map.isInBounds(hex)) {
        const action: WorldAction = { type: 'moveUnit', unitId: unit.id, to: hex }
        this.server.handleAction(this.playerId, action)
        this.localGameState = this.localGameState.copy({ mode: { type: 'selectHex' }, selectedHex: just(hex) })
        this.syncScene()
      }
    }
  }

  private handleSelectHex = (hex: Hex) => {
    if (!this.worldState.map.isInBounds(hex)) {
      // If click is out of bounds, deselect any selected hex
      if (this.selectedHex) {
        this.localGameState = this.localGameState.copy({ selectedHex: nothing })
        this.syncScene()
      }
    } else if (this.selectedHex && this.selectedHex.equals(hex)) {
      // if selected hex is clicked, toggle selection off
      this.localGameState = this.localGameState.copy({ selectedHex: nothing })
      this.syncScene()
    } else {
      this.localGameState = this.localGameState.copy({ selectedHex: just(hex) })
      this.syncScene()
    }
  }

}

