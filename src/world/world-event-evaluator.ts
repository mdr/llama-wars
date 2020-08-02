import { WorldMap, WorldState } from './world-state'
import { WorldEvent } from './world-events'
import { Hex } from './hex'

export const applyEvent = (state: WorldState, event: WorldEvent): WorldState => {
  switch (event.type) {
    case 'unitMoved':
      if (!event.from.isAdjacentTo(event.to)) {
        throw `Invalid unit movement between non-adjacent hexes ${event.from} to ${event.to}`
      }
      if (!isInBounds(event.to, state.map)) {
        throw `Invalid unit movement to out-of-bounds hex ${event.to}`
      }
      return { ...state, unitLocation: event.to }
  }
}

export const isInBounds = (hex: Hex, map: WorldMap): boolean =>
  hex.x >= 0 && hex.y >= 0 && hex.x < map.width && hex.y < map.height