import { PlayerId, WorldState } from '../world/world-state'
import { drawingOffset, hexCenter, hexSize, TileState } from './game-scene'
import { multiplyPoint, point, Point, subtractPoints } from './point'
import { fromPoint, hexCorners } from './hex-geometry'
import { Hex } from '../world/hex'
import Polygon = Phaser.GameObjects.Polygon
import {
  ColourNumber,
  DEFAULT_TILE_COLOUR,
  HOVER_DEFAULT_TILE_COLOUR, HOVER_SELECTED_TILE_COLOUR, HOVER_TARGETABLE_TILE_COLOUR,
  SELECTED_TILE_COLOUR,
  TARGETABLE_TILE_COLOUR,
} from './colours'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { Mode } from './mode'
import { Unit } from '../world/unit'

export class MapDisplayObject {

  private readonly scene: Phaser.Scene
  private state: WorldState
  private hexPolygons: Map<String, Phaser.GameObjects.Polygon> = new Map<String, Phaser.GameObjects.Polygon>()
  private playerId: PlayerId = 1
  private selectedHex?: Hex
  private mode: Mode = { type: 'selectHex' }
  private previousHover?: Hex

  constructor(scene: Phaser.Scene, state: WorldState) {
    this.scene = scene
    this.state = state
    for (const hex of this.state.map.getMapHexes()) {
      const polygonCenter = hexCenter(hex)
      const polygon = this.addPolygon(polygonCenter, hexSize)
      this.hexPolygons.set(hex.toString(), polygon)
    }
  }

  private addPolygon(center: Point, size: number): Phaser.GameObjects.Polygon {
    const vertices = [...hexCorners(point(0, 0), size)]
    return this.scene.add.polygon(center.x, center.y, vertices)
      .setOrigin(0, 0)
      .setStrokeStyle(3, 0x000000)
  }


  public stateUpdated = (state: WorldState, playerId: PlayerId, selectedHex: Hex | undefined, mode: Mode): void => {
    this.state = state
    this.playerId = playerId
    this.selectedHex = selectedHex
    this.mode = mode
  }

  public syncScene = (): void => {
    for (const hex of this.state.map.getMapHexes()) {
      const polygon = this.getHexPolygon(hex)
      polygon.setFillStyle(this.calculateColour(hex))
    }

  }

  private getHexPolygon = (hex: Hex): Polygon => {
    const polygon = this.hexPolygons.get(hex.toString())
    if (!polygon)
      throw `No polygon found for ${hex}`
    return polygon
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
        return DEFAULT_TILE_COLOUR
      case 'selected':
        return SELECTED_TILE_COLOUR
      case 'targetable':
        return TARGETABLE_TILE_COLOUR
      default:
        throw new UnreachableCaseError(tileState)
    }
  }

  private calculateHoverColour = (hex: Hex): ColourNumber => {
    const tileState = this.calculateTileState(hex)
    switch (tileState) {
      case 'default':
        return HOVER_DEFAULT_TILE_COLOUR
      case 'selected':
        return HOVER_SELECTED_TILE_COLOUR
      case 'targetable':
        return HOVER_TARGETABLE_TILE_COLOUR
      default:
        throw new UnreachableCaseError(tileState)
    }
  }

  private findUnitInLocation = (hex: Hex): Unit | undefined => this.state.findUnitInLocation(hex)

  public handlePointerMove(pointerPoint: Point): void {
    const hex = fromPoint(multiplyPoint(subtractPoints(pointerPoint, drawingOffset), 1 / hexSize))
    if (this.previousHover && this.previousHover.equals(hex))
      return
    if (this.previousHover) {
      this.getHexPolygon(this.previousHover).setFillStyle(this.calculateColour(this.previousHover))
      this.previousHover = undefined
    }
    if (this.state.map.isInBounds(hex)) {
      this.getHexPolygon(hex).setFillStyle(this.calculateHoverColour(hex))
      this.previousHover = hex
    }
  }

}