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