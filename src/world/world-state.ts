import { Hex } from './hex'
import * as R from 'ramda'
import assert = require('assert')

export class WorldMap {
  readonly width: number
  readonly height: number

  constructor({ width, height }: { width: number, height: number }) {
    assert(width > 0)
    assert(height > 0)
    this.width = width
    this.height = height
  }

  public isInBounds = (hex: Hex): boolean => {
    const q = hex.x + Math.floor(hex.y / 2)
    return 0 <= q && q < this.width && 0 <= hex.y && hex.y < this.height
  }

  public* getMapHexes(): IterableIterator<Hex> {
    for (let r = 0; r < this.height; r++) {
      for (let c = 0; c < this.width; c++) {
        const x = -Math.floor(r / 2) + c
        const hex = new Hex(x, r)
        yield hex
      }
    }
  }
}

export class HitPoints {
  readonly current: number
  readonly max: number

  constructor({ current, max }: { current: number, max: number }) {
    this.current = current
    this.max = max
    assert(max > 0)
    assert(current >= 0)
    assert(current <= max)
  }

  public damage = (points: number): HitPoints => this.copy({ current: this.current - points })

  public copy = ({ current = this.current, max = this.max }: { current?: number, max?: number } = {}): HitPoints =>
    new HitPoints({ current, max })
}

export class Unit {
  readonly id: UnitId
  readonly playerId: PlayerId
  readonly name: string
  readonly location: Hex
  readonly hitPoints: HitPoints

  constructor({
                id, playerId, name, location, hitPoints,
              }: { id: UnitId, playerId: PlayerId, name: string, location: Hex, hitPoints: HitPoints }) {
    this.id = id
    this.playerId = playerId
    this.name = name
    this.location = location
    this.hitPoints = hitPoints
  }

  public damage = (points: number): Unit => this.copy({ hitPoints: this.hitPoints.damage(points) })

  public copy = ({
                   id = this.id, playerId = this.playerId, name = this.name, location = this.location, hitPoints = this.hitPoints,
                 }: { id?: UnitId, playerId?: PlayerId, name?: string, location?: Hex, hitPoints?: HitPoints } = {}): Unit =>
    new Unit({ id, playerId, name, location, hitPoints })

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
  map: new WorldMap({ width: 10, height: 6 }),
  units: [
    new Unit({
      id: 1,
      playerId: 1,
      name: 'Walter',
      location: new Hex(1, 1),
      hitPoints: new HitPoints({ current: 73, max: 100 }),
    }),
    new Unit({
      id: 2,
      playerId: 1,
      name: 'Becky',
      location: new Hex(0, 3),
      hitPoints: new HitPoints({ current: 73, max: 100 }),
    }),
    new Unit({
      id: 3,
      playerId: 2,
      name: 'Chewpaca',
      location: new Hex(2, 1),
      hitPoints: new HitPoints({ current: 73, max: 100 }),
    }),
  ],
}

export type UnitId = number
export type PlayerId = number