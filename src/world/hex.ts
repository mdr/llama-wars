import * as R from 'ramda'

export class Hex {
  readonly x: number
  readonly y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  get z(): number {
    return -this.x - this.y
  }

  public plus = (that: Hex) => new Hex(this.x + that.x, this.y + that.y)

  public neighbours = (): Hex[] => Hex.NEIGHBOURS.map(this.plus)

  public isAdjacentTo = (that: Hex): boolean => R.includes(that, this.neighbours())

  private static NEIGHBOURS: Hex[] = [
    new Hex(0, 1),
    new Hex(1, 0),
    new Hex(1, -1),
    new Hex(0, -1),
    new Hex(-1, 0),
    new Hex(-1, 1),
  ]

  public equals = (that: Hex): boolean => this.x == that.x && this.y == that.y

  public toString = (): string => `Hex(${this.x}, ${this.y})`

  public goLeft = (): Hex => new Hex(this.x - 1, this.y)
  public goRight = (): Hex => new Hex(this.x + 1, this.y)

  public goNorthWest = (): Hex => new Hex(this.x, this.y - 1)
  public goSouthEast = (): Hex => new Hex(this.x, this.y + 1)
  public goNorthEast = (): Hex => new Hex(this.x + 1, this.y - 1)
  public goSouthWest = (): Hex => new Hex(this.x - 1, this.y + 1)
}
