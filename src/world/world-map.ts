import { Hex } from './hex'
import assert = require('assert')

export class WorldMap {
  readonly width: number
  readonly height: number

  constructor({ width, height }: { width: number, height: number }) {
    assert(width > 0)
    assert(height > 0)
    this.width = width
    this.height = height
  }

  public isInBounds = (hex: Hex): boolean => {
    const q = hex.x + Math.floor(hex.y / 2)
    return 0 <= q && q < this.width && 0 <= hex.y && hex.y < this.height
  }

  public* getMapHexes(): IterableIterator<Hex> {
    for (let r = 0; r < this.height; r++) {
      for (let c = 0; c < this.width; c++) {
        const x = -Math.floor(r / 2) + c
        const hex = new Hex(x, r)
        yield hex
      }
    }
  }
}