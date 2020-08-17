import { WorldState } from '../../world/world-state'
import { DRAWING_OFFSET, HEX_SIZE, hexCenter } from './game-scene'
import { multiplyPoint, point, Point, subtractPoints } from '../point'
import { fromPoint, hexCorners } from '../hex-geometry'
import { Hex } from '../../world/hex'
import {
  ColourNumber,
  DEFAULT_TILE_BORDER_COLOUR,
  HOVER_TILE_COLOUR,
  SELECTED_TILE_BORDER_COLOUR,
  TARGETABLE_TILE_BORDER_COLOUR,
} from '../colours'
import { Unit } from '../../world/unit'
import { Option } from '../../util/types'
import { LocalGameState } from '../local-game-state'
import Polygon = Phaser.GameObjects.Polygon
import { canAttackOccur } from '../../server/attack-world-action-handler'

type TileState = 'default' | 'selected' | 'targetable'

export class MapDisplayObject {
  private readonly scene: Phaser.Scene
  private worldState: WorldState
  private localGameState: LocalGameState
  private readonly hexPolygons: Map<string, Phaser.GameObjects.Polygon> = new Map<string, Phaser.GameObjects.Polygon>()
  private previousHoverHex?: Hex

  constructor(scene: Phaser.Scene, worldState: WorldState, localGameState: LocalGameState) {
    this.scene = scene
    this.worldState = worldState
    this.localGameState = localGameState
    for (const hex of this.worldState.map.getMapHexes()) {
      this.createHex(hex)
    }
  }

  private createHex = (hex: Hex): void => {
    const polygonCenter = hexCenter(hex)
    this.scene.add.image(polygonCenter.x, polygonCenter.y, 'grass').setScale(0.65).setDepth(-5)
    const polygon = this.addPolygon(polygonCenter, HEX_SIZE)
    this.hexPolygons.set(hex.toString(), polygon)
  }

  private addPolygon(center: Point, size: number): Phaser.GameObjects.Polygon {
    const vertices = [...hexCorners(point(0, 0), size)]
    return this.scene.add.polygon(center.x, center.y, vertices).setOrigin(0, 0).setFillStyle(0x00000, 0)
  }

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState
    for (const hex of this.worldState.map.getMapHexes()) {
      this.syncTile(hex)
    }
  }

  // Depths
  // -5 - image
  // -4 - default border
  // -3 - targetable border
  // -2 - selected
  // -1 - hover

  private getDepth = (tileState: TileState): number => {
    switch (tileState) {
      case 'default':
        return -4
      case 'targetable':
        return -3
      case 'selected':
        return -2
    }
  }

  private syncTile = (hex: Hex): void => {
    const tileState = this.calculateTileState(hex)
    this.getHexPolygon(hex).setStrokeStyle(3, this.getHexBorderColour(tileState)).setDepth(this.getDepth(tileState))
  }

  private getHexPolygon = (hex: Hex): Polygon => {
    const polygon = this.hexPolygons.get(hex.toString())
    if (!polygon) throw `No polygon found for ${hex}`
    return polygon
  }

  private calculateTileState = (hex: Hex): TileState => {
    const { playerId, selectedHex, mode } = this.localGameState
    if (selectedHex && selectedHex.equals(hex)) {
      return 'selected'
    }
    if (mode.type === 'moveUnit') {
      if (selectedHex && hex.isAdjacentTo(selectedHex) && !this.findUnitInLocation(hex)) {
        return 'targetable'
      }
    }
    if (mode.type === 'attack') {
      if (selectedHex && canAttackOccur(mode.attackType, hex, selectedHex)) {
        const unit = this.findUnitInLocation(hex)
        if (unit && unit.playerId !== playerId) {
          return 'targetable'
        }
      }
    }
    return 'default'
  }

  private getHexBorderColour = (tileState: TileState): ColourNumber => {
    switch (tileState) {
      case 'default':
        return DEFAULT_TILE_BORDER_COLOUR
      case 'selected':
        return SELECTED_TILE_BORDER_COLOUR
      case 'targetable':
        return TARGETABLE_TILE_BORDER_COLOUR
    }
  }

  private getHoverHexBorderColour = (tileState: TileState): ColourNumber => {
    switch (tileState) {
      case 'default':
        return HOVER_TILE_COLOUR
      case 'selected':
        return SELECTED_TILE_BORDER_COLOUR
      case 'targetable':
        return TARGETABLE_TILE_BORDER_COLOUR
    }
  }

  private findUnitInLocation = (hex: Hex): Option<Unit> => this.worldState.findUnitInLocation(hex)

  public handlePointerMove(pointerPoint: Point): void {
    const hex = fromPoint(multiplyPoint(subtractPoints(pointerPoint, DRAWING_OFFSET), 1 / HEX_SIZE))
    if (this.previousHoverHex && this.previousHoverHex.equals(hex)) return
    if (this.previousHoverHex) {
      this.syncTile(this.previousHoverHex)
      this.previousHoverHex = undefined
    }
    if (this.worldState.map.isInBounds(hex)) {
      const tileState = this.calculateTileState(hex)
      this.getHexPolygon(hex)
        .setStrokeStyle(tileState === 'default' ? 2 : 4, this.getHoverHexBorderColour(tileState))
        .setDepth(-1)
      this.previousHoverHex = hex
    }
  }
}
