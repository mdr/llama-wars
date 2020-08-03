import { addPoints, multiplyPoint, Point, subtractPoints } from './point'
import { Hex } from '../world/hex'
import { centerPoint, fromPoint, mapHeight } from './hex-geometry'
import { getMapHexes, INITIAL_WORLD_STATE, isInBounds, WorldMap, WorldState } from '../world/world-state'
import { Server } from '../server/server'
import { WorldEvent } from '../world/world-events'
import { applyEvent } from '../world/world-event-evaluator'
import Polygon = Phaser.GameObjects.Polygon
import { WorldAction } from '../world/world-actions'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
}

interface MoveUnitMode {
  type: 'moveUnit'
}

interface SelectHexMode {
  type: 'selectHex'
}

type Mode = MoveUnitMode | SelectHexMode


const point = (x: number, y: number): Point => ({ x, y })

const hexAngle = Math.PI / 3
const hexOffset = Math.PI / 6

const hexCorner = (center: Point, size: number, i: number): Point => {
  const angleRadians = hexAngle * i - hexOffset
  const x = center.x + size * Math.cos(angleRadians)
  const y = center.y + size * Math.sin(angleRadians)
  return { x, y }
}

function* hexCorners(center: Point, size: number): IterableIterator<Point> {
  for (let i = 0; i < 6; i++) {
    yield hexCorner(center, size, i)
  }
}

const selectedTileColour = 0xffff44
const defaultTileColour = 0xa1fd5e
const movableTileColour = 0xd1ff8e
const actionTextColour = '#cccc00'
const highlighedActonTextColour = '#ffff00'
const hexSize = 48
const drawingOffset = { x: 60, y: 60 }

export class GameScene extends Phaser.Scene {
  private server: Server = new Server()

  private worldState: WorldState = INITIAL_WORLD_STATE

  private mode: Mode = { type: 'selectHex' }
  private selectedHex?: Hex

  private selectionText: Phaser.GameObjects.Text
  private actionText: Phaser.GameObjects.Text
  private unitImage: Phaser.GameObjects.Image
  private hexPolygons: Map<String, Phaser.GameObjects.Polygon> = new Map<String, Phaser.GameObjects.Polygon>()

  constructor() {
    super(sceneConfig)
    this.server.addListener(this.handleWorldEvent)
  }

  private updateScene = () => {
    for (let hex of getMapHexes(this.worldState.map)) {
      const polygon = this.getHexPolygon(hex)
      if (this.selectedHex && this.selectedHex.equals(hex)) {
        polygon.setFillStyle(selectedTileColour)
      } else {
        polygon.setFillStyle(defaultTileColour)
      }
    }
    if (this.worldState.unitLocation) {
      const unitPoint = this.hexCenter(this.worldState.unitLocation)
      this.unitImage.setPosition(unitPoint.x, unitPoint.y)
    }
    switch (this.mode.type) {
      case 'selectHex':
        if (this.selectedHex && this.selectedHex.equals(this.worldState.unitLocation)) {
          this.selectionText.setText('Walter - Llama warrior')
          this.actionText.setText('M - Move')
        } else {
          this.selectionText.setText('')
          this.actionText.setText('')
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
        const beforeCoords = this.hexCenter(event.from)
        const afterCoords = this.hexCenter(event.to)
        // this.updateScene()
        this.unitImage.setFlipX(afterCoords.x < beforeCoords.x)
        this.tweens.add({
          targets: this.unitImage,
          x: { from: beforeCoords.x, to: afterCoords.x },
          y: { from: beforeCoords.y, to: afterCoords.y },
          duration: 500,
          ease: 'Cubic',
        })
        break
    }
  }

  private addPolygon(center: Point, size: number, colour: number): Phaser.GameObjects.Polygon {
    const vertices = Array.from(hexCorners(point(0, 0), size))
    return this.add.polygon(center.x, center.y, vertices, colour).setOrigin(0, 0).setStrokeStyle(3, 0x000000)
  }

  public create(): void {
    // this.scale.startFullscreen();
    const { map, unitLocation } = this.worldState
    this.createMap(map)
    const unitPoint = this.hexCenter(unitLocation)
    this.unitImage = this.add.image(unitPoint.x, unitPoint.y, 'llama').setScale(0.9)
    this.createTexts()

    this.input.mouse.disableContextMenu()
    this.input.keyboard.on('keydown-ESC', this.handleAbortMove)
    this.input.keyboard.on('keydown-M', this.handleMKey)
    this.input.on('pointerdown', this.handlePointerDown)
  }

  private createTexts = () => {
    const map = this.worldState.map
    this.selectionText = this.add.text(50, mapHeight(map) * hexSize + 50, '')
    this.actionText = this.add.text(50, mapHeight(map) * hexSize + 75, '', { fill: actionTextColour }).setInteractive()
      .on('pointerdown', () => this.handleActionTextClick())
      .on('pointerover', () => this.actionText.setFill(highlighedActonTextColour))
      .on('pointerout', () => this.actionText.setFill(actionTextColour))
  }

  private createMap = (map: WorldMap) => {
    for (let hex of getMapHexes(map)) {
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
    switch (this.mode.type) {
      case 'selectHex':
        this.handleSelectHex(hex)
        break
      case 'moveUnit':
        this.handleMoveUnit(hex)
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
    if (this.selectedHex && this.selectedHex.equals(this.worldState.unitLocation)) {
      this.mode = { type: 'moveUnit' }
      this.updateScene()
    }
  }

  private handleMoveUnit = (hex: Hex) => {
    if (hex.equals(this.worldState.unitLocation)) {
      // abort if you click yourself
      this.mode = { type: 'selectHex' }
      this.updateScene()
    } else if (hex.isAdjacentTo(this.worldState.unitLocation) && isInBounds(hex, this.worldState.map)) {
      const action: WorldAction = { type: 'moveUnit', to: hex }
      this.server.handleAction(action)
      this.selectedHex = undefined
      this.mode = { type: 'selectHex' }
      this.updateScene()
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
