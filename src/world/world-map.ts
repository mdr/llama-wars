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
    for (let row = 0; row < this.height; row++)
      for (let column = 0; column < this.width; column++) {
        const x = -Math.floor(row / 2) + column
        yield new Hex(x, row)
      }
  }

  public toJson = (): object => ({ width: this.width, height: this.height })

  public static fromJson = (json: any): WorldMap => new WorldMap({ width: json.width, height: json.height })

}