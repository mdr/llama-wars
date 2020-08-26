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
  readonly worldLog: string[]

  constructor({
    turn,
    map,
    units,
    players,
    gameOverInfo,
    worldLog = [],
  }: {
    turn: number
    map: WorldMap
    units: Unit[]
    players: Player[]
    gameOverInfo?: Option<GameOverInfo>
    worldLog?: string[]
  }) {
    this.turn = turn
    this.map = map
    this.units = units
    this.players = players
    this.gameOverInfo = gameOverInfo
    this.worldLog = worldLog
    assert(turn >= 0)
  }

  public copy = ({
    turn = this.turn,
    map = this.map,
    units = this.units,
    players = this.players,
    gameOverInfo = toMaybe(this.gameOverInfo),
    worldLog = this.worldLog,
  }: {
    turn?: number
    map?: WorldMap
    units?: Unit[]
    players?: Player[]
    gameOverInfo?: Maybe<GameOverInfo>
    worldLog?: string[]
  } = {}): WorldState => new WorldState({ turn, map, units, players, gameOverInfo: toOption(gameOverInfo), worldLog })

  public get gameHasStarted(): boolean {
    return this.turn > 0
  }

  public getPlayerIds = (): PlayerId[] => this.players.map((player) => player.id)

  public isPlayerDefeated = (playerId: PlayerId): boolean => this.getUnitsForPlayer(playerId).length === 0

  public canPlayerAct = (playerId: PlayerId): boolean => {
    const endedTurn = this.findPlayer(playerId)?.endedTurn
    return !endedTurn && R.any((unit) => unit.hasUnspentActionPoints, this.getUnitsForPlayer(playerId))
  }

  public canAnyPlayerAct = (): boolean => R.any((player) => this.canPlayerAct(player.id), this.players)

  public getUnitsForPlayer = (playerId: PlayerId): Unit[] => this.units.filter((unit) => unit.playerId === playerId)

  public findPlayer = (playerId: PlayerId): Option<Player> => R.find((player) => player.id === playerId, this.players)

  public getPlayer = (playerId: PlayerId): Player => {
    const player = this.findPlayer(playerId)
    if (!player) {
      throw `No player found with ID ${playerId}`
    }
    return player
  }

  public findUnitById = (unitId: UnitId): Option<Unit> => R.find((unit) => unit.id === unitId, this.units)

  public getUnitById = (unitId: UnitId): Unit => {
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
        R.filter((unit) => unit.id !== unitId, this.units),
      ),
    })

  public removeUnit = (unitId: UnitId): WorldState =>
    this.copy({ units: R.filter((unit) => unit.id !== unitId, this.units) })

  public updatePlayer = (playerId: PlayerId, modify: (player: Player) => Player): WorldState => {
    const player = this.findPlayer(playerId)
    if (!player) throw `No player found with ID ${playerId}`
    return this.replacePlayer(playerId, modify(player))
  }

  public setPlayerName = (playerId: PlayerId, name: string) =>
    this.updatePlayer(playerId, (player) => player.copy({ name }))

  public replacePlayer = (playerId: PlayerId, player: Player): WorldState => {
    assert(playerId === player.id)
    return this.copy({
      players: R.append(
        player,
        R.filter((player) => player.id !== playerId, this.players),
      ),
    })
  }

  public addPlayer = (player: Player): WorldState => this.copy({ players: R.append(player, this.players) })

  public removePlayer = (playerId: PlayerId): WorldState =>
    this.copy({ players: this.players.filter((player) => player.id !== playerId) })

  public toJson = (): any => ({
    turn: this.turn,
    map: this.map.toJson(),
    units: this.units.map((unit) => unit.toJson()),
    players: this.players.map((player) => player.toJson()),
    gameOverInfo: this.gameOverInfo,
    worldLog: this.worldLog,
  })

  public static fromJson = (json: any): WorldState =>
    new WorldState({
      turn: json.turn,
      map: WorldMap.fromJson(json.map),
      units: json.units.map((unit: any) => Unit.fromJson(unit)),
      players: json.players.map((unit: any) => Player.fromJson(unit)),
      gameOverInfo: json.gameOverInfo,
      worldLog: json.worldLog,
    })

  public isValidPlayerId = (playerId: PlayerId): boolean => R.any((player) => player.id === playerId, this.players)

  public gameOver = (victor: Option<PlayerId>): WorldState => this.copy({ gameOverInfo: just({ victor }) })

  public applyEvent = (event: WorldEvent): WorldState => applyEvent(this, event)

  public applyEvents = (events: WorldEvent[]): WorldState => {
    let state: WorldState = this
    for (const event of events) {
      state = state.applyEvent(event)
    }
    return state
  }

  public addWorldLog = (message: string): WorldState => this.copy({ worldLog: R.append(message, this.worldLog) })

  public updateWorldMap = (modify: (map: WorldMap) => WorldMap): WorldState => this.copy({ map: modify(this.map) })

  public newTurn = (): WorldState =>
    this.copy({
      turn: this.turn + 1,
      units: this.units.map((unit) => unit.refreshActionPoints()),
      players: this.players.map((player) => player.copy({ endedTurn: false })),
    })

  public getSortedPlayers = (): Player[] => R.sortBy((player) => player.id, this.players)
}
