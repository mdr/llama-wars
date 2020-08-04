import { Hex } from './hex'
import * as R from 'ramda'
import { WorldMap } from './world-map'
import { HitPoints, Unit, UnitId } from './unit'
import { Option } from '../util/types'

export class WorldState {
  readonly map: WorldMap
  readonly units: Unit[]

  constructor({ map, units }: { map: WorldMap, units: Unit[] }) {
    this.map = map
    this.units = units
  }

  public copy = ({ map = this.map, units = this.units }: { map?: WorldMap, units?: Unit[] } = {}): WorldState =>
    new WorldState({ map, units })

  public findUnitById = (unitId: UnitId): Option<Unit> =>
    R.find((unit) => unit.id == unitId, this.units)

  public findUnitInLocation = (hex: Hex): Option<Unit> =>
    R.find((unit) => unit.location.equals(hex), this.units)

  public replaceUnit = (unitId: UnitId, unit: Unit): WorldState =>
    this.copy({ units: R.append(unit, R.filter((unit) => unit.id != unitId, this.units)) })

}

export const INITIAL_WORLD_STATE: WorldState = new WorldState({
  map: new WorldMap({ width: 10, height: 6 }),
  units: [
    new Unit({
      id: 1,
      playerId: 1,
      name: 'Walter',
      location: new Hex(1, 1),
      hitPoints: new HitPoints({ current: 100, max: 100 }),
    }),
    new Unit({
      id: 2,
      playerId: 1,
      name: 'Becky',
      location: new Hex(0, 3),
      hitPoints: new HitPoints({ current: 100, max: 100 }),
    }),
    new Unit({
      id: 3,
      playerId: 2,
      name: 'Chewpaca',
      location: new Hex(2, 1),
      hitPoints: new HitPoints({ current: 100, max: 100 }),
    }),
    new Unit({
      id: 4,
      playerId: 2,
      name: 'Barack O. Llama',
      location: new Hex(3, 2),
      hitPoints: new HitPoints({ current: 100, max: 100 }),
    }),
  ],
})

export type PlayerId = number