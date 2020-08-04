import { addPoints, multiplyPoint, point, Point, subtractPoints } from './point'
import { Hex } from '../world/hex'
import { centerPoint, fromPoint, hexCorners, hexWidth, mapHeight } from './hex-geometry'
import { INITIAL_WORLD_STATE, PlayerId, WorldState } from '../world/world-state'
import { Server } from '../server/server'
import { WorldEvent } from '../world/world-events'
import { applyEvent } from '../world/world-event-evaluator'
import { WorldAction } from '../world/world-actions'
import { Unit, UnitId } from '../world/unit'
import { UnitDisplayObject } from './unit-display-object'
import Polygon = Phaser.GameObjects.Polygon
import {
  actionTextColour,
  defaultTileColour,
  highlightedActionTextColour, hoverTargetableTileColour, hoverSelectedTileColour, hoverTileColour,
  targetableTileColour,
  selectedTileColour, ColourNumber,
} from './colours'
import { Mode } from './mode'

export class UnreachableCaseError extends Error {
  constructor(value: never) {
    super(`Unreachable case: ${value}`)
  }
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
}

type TileState = 'default' | 'selected' | 'targetable'

const hexSize = 48
const drawingOffset = { x: 60, y: 60 }
export const hexCenter = (hex: Hex) => addPoints(multiplyPoint(centerPoint(hex), hexSize), drawingOffset)

export class GameScene extends Phaser.Scene {
  private readonly server: Server = new Server()

  private worldState: WorldState = INITIAL_WORLD_STATE

  private playerId: PlayerId = 1
  private mode: Mode = { type: 'selectHex' }
  private selectedHex?: Hex

  private hexPolygons: Map<String, Phaser.GameObjects.Polygon> = new Map<String, Phaser.GameObjects.Polygon>()
  private selectionText: Phaser.GameObjects.Text
  private actionText: Phaser.GameObjects.Text
  private actionText2: Phaser.GameObjects.Text
  private endTurnText: Phaser.GameObjects.Text
  private unitDisplayObjects: Map<UnitId, UnitDisplayObject> = new Map()
  private previousHover?: Hex

  constructor() {
    super(sceneConfig)
    this.server.addListener(this.handleWorldEvent)
  }

  public create(): void {
    this.sound.add('attack')
    this.createMap()
    for (const unit of this.worldState.units) {
      const unitDisplayObject = new UnitDisplayObject(this, unit.location, unit.hitPoints, unit.playerId)
      this.unitDisplayObjects.set(unit.id, unitDisplayObject)
    }

    this.createTexts()

    this.input.mouse.disableContextMenu()
    this.input.keyboard.on('keydown-ESC', this.handleEscape)
    this.input.keyboard.on('keydown-M', this.handleMKey)
    this.input.keyboard.on('keydown-A', this.handleAKey)
    this.input.on('pointerdown', this.handlePointerDown)
    this.input.on('pointermove', this.handlePointerMove)
    this.updateScene()
  }

  private createTexts = () => {
    const map = this.worldState.map
    this.selectionText = this.add.text(drawingOffset.x - hexWidth(hexSize) / 2, mapHeight(map) * hexSize + 50, '')
    this.actionText = this.add.text(drawingOffset.x - hexWidth(hexSize) / 2, mapHeight(map) * hexSize + 75, '', { fill: actionTextColour }).setInteractive()
      .on('pointerdown', this.handleActionTextClick)
      .on('pointerover', () => this.actionText.setFill(highlightedActionTextColour))
      .on('pointerout', () => this.actionText.setFill(actionTextColour))
    this.actionText2 = this.add.text(drawingOffset.x - hexWidth(hexSize) / 2, mapHeight(map) * hexSize + 100, '', { fill: actionTextColour }).setInteractive()
      .on('pointerdown', this.handleActionText2Click)
      .on('pointerover', () => this.actionText2.setFill(highlightedActionTextColour))
      .on('pointerout', () => this.actionText2.setFill(actionTextColour))
    this.endTurnText = this.add.text(800, mapHeight(map) * hexSize + 50, 'End Turn', { fill: actionTextColour }).setInteractive()
      .on('pointerdown', this.handleEndTurn)
      .on('pointerover', () => this.endTurnText.setFill(highlightedActionTextColour))
      .on('pointerout', () => this.endTurnText.setFill(actionTextColour))
  }

  private handleEndTurn = () => {
    this.playerId = this.playerId == 1 ? 2 : 1
    this.mode = { type: 'selectHex' }
    this.selectedHex = undefined
    this.updateScene()
  }

  private createMap = () => {
    for (const hex of this.worldState.map.getMapHexes()) {
      const polygonCenter = this.hexCenter(hex)
      const polygon = this.addPolygon(polygonCenter, hexSize)
      this.hexPolygons.set(hex.toString(), polygon)
    }
  }

  private addPolygon(center: Point, size: number): Phaser.GameObjects.Polygon {
    const vertices = [...hexCorners(point(0, 0), size)]
    return this.add.polygon(center.x, center.y, vertices)
      .setOrigin(0, 0)
      .setStrokeStyle(3, 0x000000)
  }

  private updateScene = () => {
    for (const hex of this.worldState.map.getMapHexes()) {
      const polygon = this.getHexPolygon(hex)
      polygon.setFillStyle(this.calculateColour(hex))
    }
    for (const unit of this.worldState.units) {
      const unitDisplayObject = this.getUnitDisplayObject(unit.id)
      unitDisplayObject.setHex(unit.location)
      unitDisplayObject.setHitPoints(unit.hitPoints)
      unitDisplayObject.update()
    }
    this.selectionText.setText('')
    this.actionText.setText('')
    this.actionText2.setText('')
    switch (this.mode.type) {
      case 'selectHex':
        this.updateSelectHexMode()
        break
      case 'moveUnit':
        this.updateMoveUnitMode(this.mode.unitId, this.mode.from)
        break
      case 'attack':
        this.updateAttackUnitMode(this.mode.unitId, this.mode.from)
        break
      default:
        throw new UnreachableCaseError(this.mode)
    }
  }

  private updateAttackUnitMode = (unitId: UnitId, from: Hex) => {
    const unit = this.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionText.setText('Click unit to attack (or ESC to cancel)')
  }

  private describeUnit = (unit: Unit) => `${unit.name} - Llama warrior - HP ${unit.hitPoints.current}/${unit.hitPoints.max}`

  private updateMoveUnitMode = (unitId: UnitId, from: Hex) => {
    const unit = this.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionText.setText('Click tile to move to (or ESC to cancel)')
  }

  private updateSelectHexMode = () => {
    if (this.selectedHex) {
      const unit = this.findUnitInLocation(this.selectedHex)
      if (unit) {
        this.selectionText.setText(this.describeUnit(unit))
        if (unit.playerId == this.playerId) {
          this.actionText.setText('M - Move')
          this.actionText2.setText('A - Attack')
        }
      }
    }
  }

  private handleWorldEvent = (event: WorldEvent): void => {
    this.worldState = applyEvent(this.worldState, event)
    switch (event.type) {
      case 'unitMoved':
        const { unitId, from, to } = event
        this.getUnitDisplayObject(unitId).move(from, to)
        break
      case 'combat':
        this.sound.play('attack')
        this.getUnitDisplayObject(event.attacker.unitId).attack(event.attacker.location, event.defender.location)
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
    const pressedPoint = { x: pointer.x, y: pointer.y }
    const hex = fromPoint(multiplyPoint(subtractPoints(pressedPoint, drawingOffset), 1 / hexSize))
    if (this.previousHover && this.previousHover.equals(hex))
      return
    if (this.previousHover) {
      this.getHexPolygon(this.previousHover).setFillStyle(this.calculateColour(this.previousHover))
      this.previousHover = undefined
    }
    if (this.worldState.map.isInBounds(hex)) {
      this.getHexPolygon(hex).setFillStyle(this.calculateHoverColour(hex))
      this.previousHover = hex
    }
  }

  private calculateTileState = (hex: Hex): TileState => {
    if (this.selectedHex && this.selectedHex.equals(hex)) {
      return 'selected'
    }
    if (this.mode.type == 'moveUnit') {
      if (hex.isAdjacentTo(this.selectedHex!) && !this.findUnitInLocation(hex)) {
        return 'targetable'
      }
    }
    if (this.mode.type == 'attack') {
      if (hex.isAdjacentTo(this.selectedHex!)) {
        const unit = this.findUnitInLocation(hex)
        if (unit && unit.playerId != this.playerId) {
          return 'targetable'
        }
      }
    }
    return 'default'
  }

  private calculateColour = (hex: Hex): ColourNumber => {
    const tileState = this.calculateTileState(hex)
    switch (tileState) {
      case 'default':
        return defaultTileColour
      case 'selected':
        return selectedTileColour
      case 'targetable':
        return targetableTileColour
      default:
        throw new UnreachableCaseError(tileState)
    }
  }

  private calculateHoverColour = (hex: Hex): ColourNumber => {
    const tileState = this.calculateTileState(hex)
    switch (tileState) {
      case 'default':
        return hoverTileColour
      case 'selected':
        return hoverSelectedTileColour
      case 'targetable':
        return hoverTargetableTileColour
      default:
        throw new UnreachableCaseError(tileState)
    }
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
        this.selectedHex = undefined
        this.updateScene()
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
      this.mode = { type: 'selectHex' }
      this.updateScene()
    }
  }

  private handleAbortAttack = () => {
    if (this.mode.type == 'attack') {
      this.mode = { type: 'selectHex' }
      this.updateScene()
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
      if (unit && unit.playerId == this.playerId) {
        this.mode = { type: 'attack', from: this.selectedHex, unitId: unit.id }
        this.updateScene()
      }
    }
  }

  private handleStartMove = () => {
    if (this.selectedHex) {
      const unit = this.findUnitInLocation(this.selectedHex)
      if (unit && unit.playerId == this.playerId) {
        this.mode = { type: 'moveUnit', from: this.selectedHex, unitId: unit.id }
        this.updateScene()
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

  private findUnitInLocation = (hex: Hex): Unit | undefined => this.worldState.findUnitInLocation(hex)

  private handleAttack = (targetHex: Hex, unitId: UnitId) => {
    const targetUnit = this.findUnitInLocation(targetHex)
    if (targetUnit) {
      if (targetUnit.playerId == this.playerId) {
        // abort if you attack yourself
        this.mode = { type: 'selectHex' }
        this.updateScene()
      } else {
        const action: WorldAction = { type: 'attack', unitId: unitId, target: targetHex }
        this.server.handleAction(this.playerId, action)
        this.mode = { type: 'selectHex' }
        this.updateScene()
      }
    }
  }

  private handleMoveUnit = (hex: Hex, unitId: UnitId) => {
    const unitInHex = this.findUnitInLocation(hex)
    if (unitInHex) {
      if (unitInHex.id == unitId) {
        // abort if you click yourself
        this.mode = { type: 'selectHex' }
        this.updateScene()
      } else {
        // do nothing
      }
    } else {
      const unit = this.getUnitById(unitId)
      if (hex.isAdjacentTo(unit.location) && this.worldState.map.isInBounds(hex)) {
        const action: WorldAction = { type: 'moveUnit', unitId: unit.id, to: hex }
        this.server.handleAction(this.playerId, action)
        this.selectedHex = hex
        this.mode = { type: 'selectHex' }
        this.updateScene()
      }
    }
  }

  private handleSelectHex = (hex: Hex) => {
    if (!this.worldState.map.isInBounds(hex)) {
      // If click is out of bounds, deselect any selected hex
      if (this.selectedHex) {
        this.selectedHex = undefined
        this.updateScene()
      }
    } else if (this.selectedHex && this.selectedHex.equals(hex)) {
      // if selected hex is clicked, toggle selection off
      this.selectedHex = undefined
      this.updateScene()
    } else {
      this.selectedHex = hex
      this.updateScene()
    }
  }

  private getHexPolygon = (hex: Hex): Polygon => {
    const polygon = this.hexPolygons.get(hex.toString())
    if (!polygon) {
      throw `No polygon found for ${hex}`
    }
    return polygon
  }

  private hexCenter = (hex: Hex) => addPoints(multiplyPoint(centerPoint(hex), hexSize), drawingOffset)
}

