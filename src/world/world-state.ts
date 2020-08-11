import { Hex } from './hex'
import * as R from 'ramda'
import { WorldMap } from './world-map'
import { Unit, UnitId } from './unit'
import { Option } from '../util/types'
import { Player, PlayerId } from './player'
import assert = require('assert')

export class WorldState {
  readonly turn: number /* turn = 0 before the game has started */
  readonly map: WorldMap
  readonly units: Unit[]
  readonly players: Player[]

  constructor({ turn, map, units, players }: { turn: number; map: WorldMap; units: Unit[]; players: Player[] }) {
    this.turn = turn
    this.map = map
    this.units = units
    this.players = players
    assert(turn >= 0)
  }

  public copy = ({
    turn = this.turn,
    map = this.map,
    units = this.units,
    players = this.players,
  }: { turn?: number; map?: WorldMap; units?: Unit[]; players?: Player[] } = {}): WorldState =>
    new WorldState({ turn, map, units, players })

  public get gameHasStarted(): boolean {
    return this.turn > 0
  }

  public isPlayerDefeated = (playerId: PlayerId): boolean => this.getUnitsForPlayer(playerId).length == 0

  public canPlayerAct = (playerId: PlayerId): boolean => {
    const endedTurn = this.findPlayer(playerId)?.endedTurn
    return !endedTurn && R.any((unit) => unit.hasUnspentActionPoints, this.getUnitsForPlayer(playerId))
  }

  public canAnyPlayerAct = (): boolean => R.any((player) => this.canPlayerAct(player.id), this.players)

  public getUnitsForPlayer = (playerId: PlayerId): Unit[] => this.units.filter((unit) => unit.playerId === playerId)

  public findPlayer = (playerId: PlayerId): Option<Player> => R.find((player) => player.id == playerId, this.players)

  public findUnitById = (unitId: UnitId): Option<Unit> => R.find((unit) => unit.id == unitId, this.units)

  public getUnitById = (unitId: number): Unit => {
    const unit = this.findUnitById(unitId)
    if (!unit) {
      throw `No unit found with ID ${unitId}`
    }
    return unit
  }

  public findUnitInLocation = (hex: Hex): Option<Unit> => R.find((unit) => unit.location.equals(hex), this.units)

  public replaceUnit = (unitId: UnitId, unit: Unit): WorldState =>
    this.copy({
      units: R.append(
        unit,
        R.filter((unit) => unit.id != unitId, this.units),
      ),
    })

  public removeUnit = (unitId: UnitId): WorldState =>
    this.copy({ units: R.filter((unit) => unit.id != unitId, this.units) })

  public updatePlayer = (playerId: PlayerId, modify: (player: Player) => Player): WorldState => {
    const player = this.findPlayer(playerId)
    if (!player) throw `No player found with ID ${playerId}`
    return this.replacePlayer(playerId, modify(player))
  }

  public replacePlayer = (playerId: PlayerId, player: Player): WorldState => {
    assert(playerId == player.id)
    return this.copy({
      players: R.append(
        player,
        R.filter((player) => player.id != playerId, this.players),
      ),
    })
  }

  public addPlayer = (player: Player): WorldState => this.copy({ players: R.append(player, this.players) })

  public toJson = (): any => ({
    turn: this.turn,
    map: this.map.toJson(),
    units: this.units.map((unit) => unit.toJson()),
    players: this.players.map((player) => player.toJson()),
  })

  public static fromJson = (json: any): WorldState =>
    new WorldState({
      turn: json.turn,
      map: WorldMap.fromJson(json.map),
      units: json.units.map((unit: any) => Unit.fromJson(unit)),
      players: json.players.map((unit: any) => Player.fromJson(unit)),
    })

  public isValidPlayerId = (playerId: PlayerId): boolean => R.any((player) => player.id == playerId, this.players)
}
