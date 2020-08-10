import { WorldMap } from './world-map'
import { WorldState } from './world-state'
import { Player } from './player'

export const INITIAL_WORLD_STATE: WorldState = new WorldState({
  turn: 0,
  map: new WorldMap({ width: 10, height: 6 }),
  players: [
    new Player({
      id: 1,
      name: 'Player 1',
      endedTurn: false,
    }),
  ],
  units: [],
})
