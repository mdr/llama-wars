import { WorldMap } from './world-map'
import { Unit } from './unit'
import { Hex } from './hex'
import { HitPoints } from './hit-points'
import { ActionPoints } from './action-points'
import { WorldState } from './world-state'
import { Player } from './player'

export const INITIAL_WORLD_STATE: WorldState = new WorldState({
  turn: 1,
  map: new WorldMap({ width: 10, height: 6 }),
  players: [
    new Player({
      id: 1,
      endedTurn: false,
    }),
    new Player({
      id: 2,
      endedTurn: false,
    }),
  ],
  units: [
    new Unit({
      id: 1,
      playerId: 1,
      name: 'Walter',
      location: new Hex(1, 1),
      hitPoints: new HitPoints({ current: 100, max: 100 }),
      actionPoints: new ActionPoints({ current: 2, max: 2 }),
    }),
    new Unit({
      id: 2,
      playerId: 1,
      name: 'Becky',
      location: new Hex(0, 3),
      hitPoints: new HitPoints({ current: 100, max: 100 }),
      actionPoints: new ActionPoints({ current: 2, max: 2 }),
    }),
    new Unit({
      id: 3,
      playerId: 2,
      name: 'Chewpaca',
      location: new Hex(2, 1),
      hitPoints: new HitPoints({ current: 100, max: 100 }),
      actionPoints: new ActionPoints({ current: 2, max: 2 }),
    }),
    new Unit({
      id: 4,
      playerId: 2,
      name: 'Barack O. Llama',
      location: new Hex(3, 2),
      hitPoints: new HitPoints({ current: 100, max: 100 }),
      actionPoints: new ActionPoints({ current: 2, max: 2 }),
    }),
  ],
})
