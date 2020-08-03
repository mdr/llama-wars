import { Hex } from './hex'
import * as R from 'ramda'

export interface WorldMap {
  width: number
  height: number
}

export const isInBounds = (hex: Hex, map: WorldMap): boolean => {
  const q = hex.x + Math.floor(hex.y / 2)
  return 0 <= q && q < map.width && 0 <= hex.y && hex.y < map.height
}

export function* getMapHexes(map: WorldMap): IterableIterator<Hex> {
  for (let r = 0; r < map.height; r++) {
    for (let c = 0; c < map.width; c++) {
      const x = -Math.floor(r / 2) + c
      const hex = new Hex(x, r)
      yield hex
    }
  }
}

export interface HitPoints {
  current: number
  max: number
}

export interface Unit {
  id: UnitId,
  player: PlayerId
  name: string,
  location: Hex
  hitPoints: HitPoints
}

export const findUnitById = (unitId: UnitId, state: WorldState): Unit | undefined =>
  R.find((unit) => unit.id == unitId, state.units)

export const findUnitInLocation = (hex: Hex, state: WorldState): Unit | undefined =>
  R.find((unit) => unit.location.equals(hex), state.units)

export interface WorldState {
  map: WorldMap
  units: Unit[]
}

export const INITIAL_WORLD_STATE: WorldState = {
  map: { width: 10, height: 6 },
  units: [
    {
      id: 1,
      player: 1,
      name: 'Walter',
      location: new Hex(1, 1),
      hitPoints: { current: 73, max: 100 },
    },
    {
      id: 2,
      player: 1,
      name: 'Becky',
      location: new Hex(0, 3),
      hitPoints: { current: 100, max: 100 },
    },
    {
      id: 3,
      player: 2,
      name: 'Chewpaca',
      location: new Hex(7, 2),
      hitPoints: { current: 100, max: 100 },
    },
  ],
}

export type UnitId = number
export type PlayerId = number