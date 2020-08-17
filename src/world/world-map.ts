import * as R from 'ramda'
import assert = require('assert')

import { Hex } from './hex'

export class WorldMap {
  readonly width: number
  readonly height: number
  readonly mountains: Hex[]

  constructor({ width, height, mountains = [] }: { width: number; height: number; mountains?: Hex[] }) {
    assert(width > 0)
    assert(height > 0)
    this.width = width
    this.height = height
    this.mountains = mountains
  }

  public isInBounds = (hex: Hex): boolean => {
    const q = hex.x + Math.floor(hex.y / 2)
    return 0 <= q && q < this.width && 0 <= hex.y && hex.y < this.height
  }

  public *getMapHexes(): IterableIterator<Hex> {
    for (let row = 0; row < this.height; row++)
      for (let column = 0; column < this.width; column++) {
        const x = -Math.floor(row / 2) + column
        yield new Hex(x, row)
      }
  }

  public copy = ({
    width = this.width,
    height = this.height,
    mountains = this.mountains,
  }: { width?: number; height?: number; mountains?: Hex[] } = {}): WorldMap =>
    new WorldMap({ width, height, mountains })

  public toJson = (): any => ({
    width: this.width,
    height: this.height,
    mountains: this.mountains.map((mountain) => mountain.toJson()),
  })

  public static fromJson = (json: any): WorldMap =>
    new WorldMap({ width: json.width, height: json.height, mountains: json.mountains.map(Hex.fromJson) })

  public isMountain = (hex: Hex): boolean => R.contains(hex, this.mountains)
}
