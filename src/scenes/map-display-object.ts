import { WorldState } from '../world/world-state'
import { drawingOffset, hexCenter, hexSize } from './game-scene'
import { multiplyPoint, point, Point, subtractPoints } from './point'
import { fromPoint, hexCorners } from './hex-geometry'
import { Hex } from '../world/hex'
import {
  ColourNumber,
  DEFAULT_TILE_COLOUR,
  HOVER_DEFAULT_TILE_COLOUR,
  HOVER_SELECTED_TILE_COLOUR,
  HOVER_TARGETABLE_TILE_COLOUR,
  SELECTED_TILE_COLOUR,
  TARGETABLE_TILE_COLOUR,
} from './colours'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { Unit } from '../world/unit'
import { Option } from '../util/types'
import { LocalGameState } from './local-game-state'
import Polygon = Phaser.GameObjects.Polygon

type TileState = 'default' | 'selected' | 'targetable'

export class MapDisplayObject {

  private readonly scene: Phaser.Scene
  private worldState: WorldState
  private localGameState: LocalGameState
  private hexPolygons: Map<String, Phaser.GameObjects.Polygon> = new Map<String, Phaser.GameObjects.Polygon>()
  private previousHover?: Hex

  constructor(scene: Phaser.Scene, worldState: WorldState, localGameState: LocalGameState) {
    this.scene = scene
    this.worldState = worldState
    this.localGameState = localGameState
    for (const hex of this.worldState.map.getMapHexes())
      this.createHex(hex)
  }

  private createHex = (hex: Hex): void => {
    const polygonCenter = hexCenter(hex)
    const polygon = this.addPolygon(polygonCenter, hexSize)
    this.hexPolygons.set(hex.toString(), polygon)
  }

  private addPolygon(center: Point, size: number): Phaser.GameObjects.Polygon {
    const vertices = [...hexCorners(point(0, 0), size)]
    return this.scene.add.polygon(center.x, center.y, vertices)
      .setOrigin(0, 0)
      .setStrokeStyle(3, 0x000000)
  }

  public stateUpdated = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState
  }

  public syncScene = (): void => {
    for (const hex of this.worldState.map.getMapHexes()) {
      this.getHexPolygon(hex).setFillStyle(this.calculateColour(hex))
    }
  }

  private getHexPolygon = (hex: Hex): Polygon => {
    const polygon = this.hexPolygons.get(hex.toString())
    if (!polygon)
      throw `No polygon found for ${hex}`
    return polygon
  }

  private calculateTileState = (hex: Hex): TileState => {
    const { playerId,  selectedHex, mode } = this.localGameState
    if (selectedHex && selectedHex.equals(hex)) {
      return 'selected'
    }
    if (mode.type == 'moveUnit') {
      if (hex.isAdjacentTo(selectedHex!) && !this.findUnitInLocation(hex)) {
        return 'targetable'
      }
    }
    if (mode.type == 'attack') {
      if (hex.isAdjacentTo(selectedHex!)) {
        const unit = this.findUnitInLocation(hex)
        if (unit && unit.playerId != playerId) {
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

  private findUnitInLocation = (hex: Hex): Option<Unit> => this.worldState.findUnitInLocation(hex)

  public handlePointerMove(pointerPoint: Point): void {
    const hex = fromPoint(multiplyPoint(subtractPoints(pointerPoint, drawingOffset), 1 / hexSize))
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

}