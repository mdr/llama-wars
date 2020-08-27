import { WorldMap } from './world-map'
import { WorldState } from './world-state'
import { HOST_PLAYER_ID, Player } from './player'

export const INITIAL_WORLD_STATE: WorldState = new WorldState({
  turn: 0,
  map: new WorldMap({ width: 25, height: 20 }),
  // map: new WorldMap({ width: 10, height: 6 }),
  players: [
    new Player({
      id: HOST_PLAYER_ID,
      name: 'Player 1',
      endedTurn: false,
    }),
  ],
  units: [],
})
