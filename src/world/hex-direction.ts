import { UnreachableCaseError } from '../util/unreachable-case-error'
import { Hex, HexVector } from './hex'

export enum HexDirection {
  EAST = 'EAST',
  WEST = 'WEST',
  NORTH_EAST = 'NORTH_EAST',
  SOUTH_EAST = 'SOUTH_EAST',
  NORTH_WEST = 'NORTH_WEST',
  SOUTH_WEST = 'SOUTH_WEST',
}

export const HEX_DIRECTIONS = [
  HexDirection.EAST,
  HexDirection.SOUTH_EAST,
  HexDirection.SOUTH_WEST,
  HexDirection.WEST,
  HexDirection.NORTH_WEST,
  HexDirection.NORTH_EAST,
]

export const getUnitVector = (direction: HexDirection): HexVector => {
  switch (direction) {
    case HexDirection.EAST:
      return new Hex(1, 0)
    case HexDirection.WEST:
      return new Hex(-1, 0)
    case HexDirection.NORTH_EAST:
      return new Hex(1, -1)
    case HexDirection.NORTH_WEST:
      return new Hex(0, -1)
    case HexDirection.SOUTH_EAST:
      return new Hex(0, 1)
    case HexDirection.SOUTH_WEST:
      return new Hex(-1, 1)
    default:
      throw new UnreachableCaseError(direction)
  }
}
