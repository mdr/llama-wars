import { Hex } from './hex'
import * as R from 'ramda'
import { WorldMap } from './world-map'
import { ActionPoints, HitPoints, Unit, UnitId } from './unit'
import { Option } from '../util/types'

export class Player {
  readonly id: PlayerId
  readonly endedTurn: boolean

  constructor({ id, endedTurn }: { id: PlayerId, endedTurn: boolean }) {
    this.id = id
    this.endedTurn = endedTurn
  }

  public copy = ({ id = this.id, endedTurn = this.endedTurn }: { id?: PlayerId, endedTurn?: boolean } = {}): Player => new Player({
    id,
    endedTurn,
  })

  public toJson = (): object => ({ id: this.id, endedTurn: this.endedTurn })

  public static fromJson = (json: any): Player => new Player({ id: json.id, endedTurn: json.endedTurn })

}

export class WorldState {
  readonly turn: number
  readonly map: WorldMap
  readonly units: Unit[]
  readonly players: Player[]

  constructor({ turn, map, units, players }: { turn: number, map: WorldMap, units: Unit[], players: Player[] }) {
    this.turn = turn
    this.map = map
    this.units = units
    this.players = players
  }

  public copy = ({ turn = this.turn, map = this.map, units = this.units, players = this.players }:
                   { turn?: number, map?: WorldMap, units?: Unit[], players?: Player[] } = {}): WorldState =>
    new WorldState({ turn, map, units, players })

  public findPlayer = (playerId: PlayerId): Option<Player> =>
    R.find((player) => player.id == playerId, this.players)

  public findUnitById = (unitId: UnitId): Option<Unit> =>
    R.find((unit) => unit.id == unitId, this.units)

  public getUnitById = (unitId: number): Unit => {
    const unit = this.findUnitById(unitId)
    if (!unit) {
      throw `No unit found with ID ${unitId}`
    }
    return unit
  }

  public findUnitInLocation = (hex: Hex): Option<Unit> =>
    R.find((unit) => unit.location.equals(hex), this.units)

  public replaceUnit = (unitId: UnitId, unit: Unit): WorldState =>
    this.copy({ units: R.append(unit, R.filter((unit) => unit.id != unitId, this.units)) })

  public removeUnit = (unitId: UnitId): WorldState =>
    this.copy({ units: R.filter((unit) => unit.id != unitId, this.units) })

  public replacePlayer = (playerId: PlayerId, player: Player): WorldState =>
    this.copy({ players: R.append(player, R.filter((player) => player.id != playerId, this.players)) })

  public toJson = (): object => ({
    turn: this.turn,
    map: this.map.toJson(),
    units: this.units.map(unit => unit.toJson()),
    players: this.players.map(player => player.toJson()),
  })

  public static fromJson = (json: any): WorldState => new WorldState({
    turn: json.turn,
    map: WorldMap.fromJson(json.map),
    units: json.units.map(unit => Unit.fromJson(unit)),
    players: json.players.map(unit => Player.fromJson(unit)),
  })

}

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

export type PlayerId = number