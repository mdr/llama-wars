import * as R from 'ramda'

import { Hex } from './hex'
import { WorldMap } from './world-map'
import { Unit, UnitId } from './unit'
import { just, Maybe, Option, toMaybe, toOption } from '../util/types'
import { Player, PlayerId } from './player'
import assert = require('assert')
import { applyEvent } from './events/world-event-evaluator'
import { WorldEvent } from './events/world-events'
import { Building, BuildingId } from './building'

interface GameOverInfo {
  victor: Option<PlayerId>
}

export type UnitOrBuilding = Unit | Building

export type UnitOrBuildingId = UnitId | BuildingId

export class WorldState {
  readonly turn: number /* turn = 0 before the game has started */
  readonly map: WorldMap
  readonly units: Unit[]
  readonly buildings: Building[]
  readonly players: Player[]
  readonly gameOverInfo?: GameOverInfo
  readonly worldLog: string[]

  constructor({
    turn,
    map,
    units,
    buildings,
    players,
    gameOverInfo,
    worldLog = [],
  }: {
    turn: number
    map: WorldMap
    units: Unit[]
    buildings: Building[]
    players: Player[]
    gameOverInfo?: Option<GameOverInfo>
    worldLog?: string[]
  }) {
    this.turn = turn
    this.map = map
    this.units = units
    this.buildings = buildings
    this.players = players
    this.gameOverInfo = gameOverInfo
    this.worldLog = worldLog
    assert(turn >= 0)
  }

  public copy = ({
    turn = this.turn,
    map = this.map,
    units = this.units,
    buildings = this.buildings,
    players = this.players,
    gameOverInfo = toMaybe(this.gameOverInfo),
    worldLog = this.worldLog,
  }: {
    turn?: number
    map?: WorldMap
    units?: Unit[]
    buildings?: Building[]
    players?: Player[]
    gameOverInfo?: Maybe<GameOverInfo>
    worldLog?: string[]
  } = {}): WorldState =>
    new WorldState({ turn, map, units, buildings, players, gameOverInfo: toOption(gameOverInfo), worldLog })

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

  public addUnit = (unit: Unit): WorldState => {
    if (this.findUnitOrBuildingById(unit.id)) {
      throw new Error(`Unit already present with id ${unit.id}`)
    } else {
      return this.copy({ units: R.append(unit, this.units) })
    }
  }

  public removeUnit = (unitId: UnitId): WorldState =>
    this.copy({ units: R.filter((unit) => unit.id !== unitId, this.units) })

  public replaceUnit = (unitId: UnitId, unit: Unit): WorldState => this.removeUnit(unitId).addUnit(unit)

  public updateUnit = (unitId: UnitId, modify: (player: Unit) => Unit): WorldState => {
    const unit = this.getUnitById(unitId)
    return this.replaceUnit(unitId, modify(unit))
  }

  public addBuilding = (building: Building): WorldState => {
    if (this.findUnitOrBuildingById(building.id)) {
      throw new Error(`Building already present with id ${building.id}`)
    } else {
      return this.copy({ buildings: R.append(building, this.buildings) })
    }
  }

  public removeBuilding = (buildingId: BuildingId): WorldState =>
    this.copy({ buildings: R.filter((building) => building.id !== buildingId, this.buildings) })

  public replaceBuilding = (buildingId: BuildingId, building: Building): WorldState =>
    this.removeUnit(buildingId).addBuilding(building)

  public addUnitOrBuilding = (unitOrBuilding: UnitOrBuilding): WorldState =>
    unitOrBuilding instanceof Unit ? this.addUnit(unitOrBuilding) : this.addBuilding(unitOrBuilding)

  public replaceUnitOrBuilding = (id: UnitOrBuildingId, replacement: UnitOrBuilding): WorldState =>
    this.removeUnitOrBuilding(id).addUnitOrBuilding(replacement)

  public removeUnitOrBuilding = (id: UnitOrBuildingId): WorldState => this.removeUnit(id).removeBuilding(id)

  public findBuildingById = (buildingId: BuildingId): Option<Building> =>
    R.find((building) => building.id === buildingId, this.buildings)

  public findBuildingInLocation = (hex: Hex): Option<Building> =>
    R.find((building) => building.location.equals(hex), this.buildings)

  public findUnitOrBuildingById = (id: UnitOrBuildingId): Option<UnitOrBuilding> =>
    this.findUnitById(id) ?? this.findBuildingById(id)

  public updatePlayer = (playerId: PlayerId, modify: (player: Player) => Player): WorldState => {
    const player = this.findPlayer(playerId)
    if (!player) {
      throw `No player found with ID ${playerId}`
    }
    return this.replacePlayer(playerId, modify(player))
  }

  public setPlayerName = (playerId: PlayerId, name: string): WorldState =>
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
    buildings: this.buildings.map((building) => building.toJson()),
    players: this.players.map((player) => player.toJson()),
    gameOverInfo: this.gameOverInfo,
    worldLog: this.worldLog,
  })

  public static fromJson = (json: any): WorldState =>
    new WorldState({
      turn: json.turn,
      map: WorldMap.fromJson(json.map),
      units: json.units.map((unit: any) => Unit.fromJson(unit)),
      buildings: json.buildings.map((building: any) => Building.fromJson(building)),
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
