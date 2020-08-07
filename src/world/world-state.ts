import { Hex } from './hex'
import * as R from 'ramda'
import { WorldMap } from './world-map'
import { Unit, UnitId } from './unit'
import { Option } from '../util/types'
import { Player } from './player'

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

export type PlayerId = number
