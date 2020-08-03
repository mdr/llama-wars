import { addPoints, multiplyPoint, Point, subtractPoints } from './point'
import { Hex } from '../world/hex'
import { centerPoint, fromPoint, hexCorners, mapHeight } from './hex-geometry'
import { getMapHexes, HitPoints, INITIAL_WORLD_STATE, isInBounds, Unit, UnitId, WorldState } from '../world/world-state'
import { Server } from '../server/server'
import { WorldEvent } from '../world/world-events'
import { applyEvent } from '../world/world-event-evaluator'
import Polygon = Phaser.GameObjects.Polygon
import { WorldAction } from '../world/world-actions'
import Color = Phaser.Display.Color
import * as R from 'ramda'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
}

interface MoveUnitMode {
  type: 'moveUnit'
  unitId: UnitId
}

interface SelectHexMode {
  type: 'selectHex'
}

type Mode = MoveUnitMode | SelectHexMode

const point = (x: number, y: number): Point => ({ x, y })

const colourNumber = (colourString: string): number => Color.HexStringToColor(colourString).color

const defaultTileColour = colourNumber('#ccffbe')
const selectedTileColour = colourNumber('#fffd08')
const movableTileColour = colourNumber('#dcffd1')
const actionTextColour = '#cccc00'
const highlightedActionTextColour = '#ffff00'
const healthBorderColour = colourNumber('#000000')
const healthEmptyColour = colourNumber('#ffffff')
const healthFullColour = colourNumber('#4df037')

const hexSize = 48
const drawingOffset = { x: 60, y: 60 }
const hexCenter = (hex: Hex) => addPoints(multiplyPoint(centerPoint(hex), hexSize), drawingOffset)

class UnitDisplayObject {
  private readonly scene: Phaser.Scene
  private readonly image: Phaser.GameObjects.Image
  private readonly healthBarGraphics: Phaser.GameObjects.Graphics
  private hex: Hex
  private hitPoints: HitPoints

  private static IMAGE_OFFSET = 4
  private static HEALTH_BAR_OFFSET = { x: 25, y: 40 }

  constructor(scene: Phaser.Scene, hex: Hex, hitPoints: HitPoints) {
    this.scene = scene
    this.hex = hex
    this.hitPoints = hitPoints
    this.image = scene.add.image(0, 0, 'llama').setScale(0.8).setTint(0xffbbbb)
    this.healthBarGraphics = scene.add.graphics()
  }

  public update = () => {
    const unitPoint = hexCenter(this.hex)
    this.image.setPosition(unitPoint.x, unitPoint.y + UnitDisplayObject.IMAGE_OFFSET)
    this.healthBarGraphics.setPosition(unitPoint.x - UnitDisplayObject.HEALTH_BAR_OFFSET.x, unitPoint.y - UnitDisplayObject.HEALTH_BAR_OFFSET.y)
    this.healthBarGraphics.clear()
    this.healthBarGraphics.fillStyle(healthBorderColour)
    const barWidth = 50
    const barHeight = 12
    const borderThickness = 2
    const innerWidth = barWidth - 2 * borderThickness
    let innerHeight = barHeight - 2 * borderThickness
    this.healthBarGraphics.fillRect(0, 0, barWidth, barHeight)
    this.healthBarGraphics.fillStyle(healthEmptyColour)
    this.healthBarGraphics.fillRect(borderThickness, borderThickness, innerWidth, innerHeight)
    this.healthBarGraphics.fillStyle(healthFullColour)
    const { current, max } = this.hitPoints
    this.healthBarGraphics.fillRect(borderThickness, borderThickness, innerWidth * current / max, 8)
  }

  public setHex = (hex: Hex) => this.hex = hex

  public move = (from: Hex, to: Hex) => {
    const beforeCoords = hexCenter(from)
    const afterCoords = hexCenter(to)
    this.image.setFlipX(afterCoords.x < beforeCoords.x)
    this.scene.tweens.add({
      targets: this.image,
      x: { from: beforeCoords.x, to: afterCoords.x },
      y: { from: beforeCoords.y + UnitDisplayObject.IMAGE_OFFSET, to: afterCoords.y + UnitDisplayObject.IMAGE_OFFSET },
      duration: 500,
      ease: 'Cubic',
    })
    this.scene.tweens.add({
      targets: this.healthBarGraphics,
      x: {
        from: beforeCoords.x - UnitDisplayObject.HEALTH_BAR_OFFSET.x,
        to: afterCoords.x - UnitDisplayObject.HEALTH_BAR_OFFSET.x,
      },
      y: {
        from: beforeCoords.y - UnitDisplayObject.HEALTH_BAR_OFFSET.y,
        to: afterCoords.y - UnitDisplayObject.HEALTH_BAR_OFFSET.y,
      },
      duration: 500,
      ease: 'Cubic',
    })
  }

}

export class GameScene extends Phaser.Scene {
  private server: Server = new Server()

  private worldState: WorldState = INITIAL_WORLD_STATE

  private mode: Mode = { type: 'selectHex' }
  private selectedHex?: Hex

  private hexPolygons: Map<String, Phaser.GameObjects.Polygon> = new Map<String, Phaser.GameObjects.Polygon>()
  private selectionText: Phaser.GameObjects.Text
  private actionText: Phaser.GameObjects.Text
  private unitDisplayObjects: Map<UnitId, UnitDisplayObject> = new Map()

  constructor() {
    super(sceneConfig)
    this.server.addListener(this.handleWorldEvent)
  }

  private updateScene = () => {
    for (const hex of getMapHexes(this.worldState.map)) {
      const polygon = this.getHexPolygon(hex)
      if (this.selectedHex && this.selectedHex.equals(hex)) {
        polygon.setFillStyle(selectedTileColour)
      } else {
        polygon.setFillStyle(defaultTileColour)
      }
    }
    for (const unit of this.worldState.units) {
      const unitDisplayObject = this.unitDisplayObjects.get(unit.id)!
      unitDisplayObject.setHex(unit.location)
      unitDisplayObject.update()
    }
    switch (this.mode.type) {
      case 'selectHex':
        this.selectionText.setText('')
        this.actionText.setText('')
        if (this.selectedHex) {
          const unit = this.findUnitInLocation(this.selectedHex)
          if (unit) {
            this.selectionText.setText('Walter - Llama warrior')
            this.actionText.setText('M - Move')
          }
        }
        break
      case 'moveUnit':
        this.selectionText.setText('Walter - Llama warrior')
        this.actionText.setText('Click tile to move to (or ESC to cancel)')
        for (const neighbour of this.selectedHex!.neighbours()) {
          if (isInBounds(neighbour, this.worldState.map)) {
            const polygon = this.getHexPolygon(neighbour)
            polygon.setFillStyle(movableTileColour)
          }
        }
        break
    }
  }

  private handleWorldEvent = (event: WorldEvent) => {
    this.worldState = applyEvent(this.worldState, event)
    switch (event.type) {
      case 'unitMoved':
        const { unitId, from, to } = event
        const unitDisplayObject = this.unitDisplayObjects.get(unitId)
        if (!unitDisplayObject)
          throw 'Could not find unit with ID ' + unitId
        unitDisplayObject.move(from, to)
        break
    }
  }


  private addPolygon(center: Point, size: number, colour: number): Phaser.GameObjects.Polygon {
    const vertices = [...hexCorners(point(0, 0), size)]
    return this.add.polygon(center.x, center.y, vertices, colour).setOrigin(0, 0).setStrokeStyle(3, 0x000000)
  }

  public create(): void {
    // this.scale.startFullscreen();
    this.createMap()
    for (const unit of this.worldState.units) {
      const unitDisplayObject = new UnitDisplayObject(this, unit.location, unit.hitPoints)
      this.unitDisplayObjects.set(unit.id, unitDisplayObject)
    }

    this.createTexts()

    this.input.mouse.disableContextMenu()
    this.input.keyboard.on('keydown-ESC', this.handleAbortMove)
    this.input.keyboard.on('keydown-M', this.handleMKey)
    this.input.on('pointerdown', this.handlePointerDown)
    this.updateScene()
  }

  private createTexts = () => {
    const map = this.worldState.map
    this.selectionText = this.add.text(50, mapHeight(map) * hexSize + 50, '')
    this.actionText = this.add.text(50, mapHeight(map) * hexSize + 75, '', { fill: actionTextColour }).setInteractive()
      .on('pointerdown', () => this.handleActionTextClick())
      .on('pointerover', () => this.actionText.setFill(highlightedActionTextColour))
      .on('pointerout', () => this.actionText.setFill(actionTextColour))
  }

  private createMap = () => {
    for (const hex of getMapHexes(this.worldState.map)) {
      const polygonCenter = this.hexCenter(hex)
      const polygon = this.addPolygon(polygonCenter, hexSize, defaultTileColour)
      this.hexPolygons.set(hex.toString(), polygon)
    }
  }

  private handleMKey = () => {
    switch (this.mode.type) {
      case 'selectHex':
        this.handleStartMove()
        break
      default:
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
    }
  }

  private handleAbortMove = () => {
    if (this.mode.type == 'moveUnit') {
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
    }
  }

  private handleStartMove = () => {
    if (this.selectedHex) {
      const unit = this.findUnitInLocation(this.selectedHex)
      if (unit) {
        this.mode = { type: 'moveUnit', unitId: unit.id }
        this.updateScene()
      }
    }
  }

  private findUnitById = (unitId: number): Unit | undefined =>
    R.find((unit) => unit.id == unitId, this.worldState.units)

  private findUnitInLocation = (hex: Hex): Unit | undefined =>
    R.find((unit) => unit.location.equals(hex), this.worldState.units)

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
      const unit = this.findUnitById(unitId)!
      if (hex.isAdjacentTo(unit.location) && isInBounds(hex, this.worldState.map)) {
        const action: WorldAction = { type: 'moveUnit', unitId: unit.id, to: hex }
        this.server.handleAction(action)
        this.selectedHex = undefined
        this.mode = { type: 'selectHex' }
        this.updateScene()
      }
    }
  }

  private handleSelectHex = (hex: Hex) => {
    if (!isInBounds(hex, this.worldState.map)) {
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
      throw 'No polygon found for ' + hex
    } else {
      return polygon
    }
  }

  private hexCenter = (hex: Hex) => addPoints(multiplyPoint(centerPoint(hex), hexSize), drawingOffset)

  public update(): void {

  }
}

