import { Hex } from './hex'

export interface WorldMap {
  width: number
  height: number
}

export const INITIAL_WORLD_STATE: WorldState = {
  map: { width: 10, height: 6 }, unitLocation: new Hex(1, 1),
}

export interface WorldState {
  map: WorldMap
  unitLocation: Hex
}

export const isInBounds = (hex: Hex, map: WorldMap): boolean => {
  const q = hex.x + Math.floor(hex.y / 2)
  return 0 <= q && q < map.width && 0 <= hex.y && hex.y < map.height
}

export function *getMapHexes(map: WorldMap): IterableIterator<Hex> {
  for (let r = 0; r < map.height; r++) {
    for (let c = 0; c < map.width; c++) {
      const x = -Math.floor(r / 2) + c
      const hex = new Hex(x, r)
      yield hex
    }
  }
}