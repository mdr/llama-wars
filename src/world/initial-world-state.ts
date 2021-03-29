import { WorldMap } from './world-map'
import { WorldState } from './world-state'
import { HOST_PLAYER_ID, Player } from './player'

export const INITIAL_WORLD_STATE: WorldState = new WorldState({
  turn: 0,
  map: new WorldMap({ width: 12, height: 12 }),
  //map: new WorldMap({ width: 25, height: 15 }),
  players: [
    new Player({
      id: HOST_PLAYER_ID,
      name: 'Player 1',
      endedTurn: false,
    }),
  ],
  units: [],
  buildings: [],
})
