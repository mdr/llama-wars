import { Hex } from './hex'
import * as R from 'ramda'
import { WorldMap } from './world-map'
import { Unit, UnitId } from './unit'
import { just, Maybe, Option, toMaybe, toOption } from '../util/types'
import { Player, PlayerId } from './player'
import assert = require('assert')
import { applyEvent } from './world-event-evaluator'
import { WorldEvent } from './world-events'

interface GameOverInfo {
  victor: Option<PlayerId>
}

export class WorldState {
  readonly turn: number /* turn = 0 before the game has started */
  readonly map: WorldMap
  readonly units: Unit[]
  readonly players: Player[]
  readonly gameOverInfo?: GameOverInfo

  constructor({
    turn,
    map,
    units,
    players,
    gameOverInfo,
  }: {
    turn: number
    map: WorldMap
    units: Unit[]
    players: Player[]
    gameOverInfo?: Option<GameOverInfo>
  }) {
    this.turn = turn
    this.map = map
    this.units = units
    this.players = players
    this.gameOverInfo = gameOverInfo
    assert(turn >= 0)
  }

  public copy = ({
    turn = this.turn,
    map = this.map,
    units = this.units,
    players = this.players,
    gameOverInfo = toMaybe(this.gameOverInfo),
  }: {
    turn?: number
    map?: WorldMap
    units?: Unit[]
    players?: Player[]
    gameOverInfo?: Maybe<GameOverInfo>
  } = {}): WorldState => new WorldState({ turn, map, units, players, gameOverInfo: toOption(gameOverInfo) })

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
    gameOverInfo: this.gameOverInfo,
  })

  public static fromJson = (json: any): WorldState =>
    new WorldState({
      turn: json.turn,
      map: WorldMap.fromJson(json.map),
      units: json.units.map((unit: any) => Unit.fromJson(unit)),
      players: json.players.map((unit: any) => Player.fromJson(unit)),
      gameOverInfo: json.gameOverInfo,
    })

  public isValidPlayerId = (playerId: PlayerId): boolean => R.any((player) => player.id == playerId, this.players)

  public gameOver = (victor: Option<number>): WorldState => this.copy({ gameOverInfo: just({ victor }) })

  public applyEvent = (event: WorldEvent): WorldState => applyEvent(this, event)
}
