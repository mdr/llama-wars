import { PlayerId } from '../world/player'
import { Unit, UnitType } from '../world/unit'
import { Hex } from '../world/hex'
import { randomElement } from '../util/random-util'
import * as R from 'ramda'
import { ActionPoints } from '../world/action-points'
import { CASTLE_HIT_POINTS, CRIA_HIT_POINTS, HitPoints } from '../world/hit-points'
import { UnitOrBuildingId, WorldState } from '../world/world-state'
import { Building, BuildingType } from '../world/building'
import { Option } from '../util/types'
import { countWhere, maxOpt } from '../util/collection-util'
import { assertNotUndefined } from '../util/assertion-util'
import { LLAMA_NAMES } from './llama-names'
import { GeneratedWorld } from '../world/events/world-events'

const MIN_DISTANCE_BETWEEN_SPAWNS = 2
const MOUNTAIN_FRACTION = 0.12

export class WorldGenerator {
  private readonly worldState: WorldState
  private remainingHexes: Hex[]
  private nextUnitOrBuildingId: UnitOrBuildingId = 1
  private readonly spawnPoints: Map<PlayerId, Hex> = new Map()

  constructor(worldState: WorldState) {
    this.worldState = worldState
    this.remainingHexes = Array.from(worldState.map.getMapHexes())
  }

  public generateWorld = (): GeneratedWorld => {
    this.pickSpawnPoints()
    const mountains = this.generateMountains()
    const buildings = this.generateBuildings()
    const units = this.generateUnits()
    return { units, buildings, mountains }
  }

  private generateUnits = (): Unit[] =>
    R.chain((player) => this.generateUnitsForPlayer(player.id), this.worldState.players)

  private generateUnitsForPlayer = (playerId: PlayerId): Unit[] => [
    this.generateUnit(playerId),
    this.generateUnit(playerId),
  ]

  private generateUnit = (playerId: PlayerId): Unit => {
    const location = this.pickStartLocationForUnit(playerId)
    const id = this.nextUnitOrBuildingId++
    this.remainingHexes = R.without([location], this.remainingHexes)
    const name = randomElement(LLAMA_NAMES)
    return new Unit({
      id,
      playerId,
      type: UnitType.CRIA,
      name,
      location,
      actionPoints: new ActionPoints({ current: 2, max: 2 }),
      hitPoints: new HitPoints({ current: CRIA_HIT_POINTS, max: CRIA_HIT_POINTS }),
    })
  }

  private pickStartLocationForUnit = (playerId: PlayerId): Hex => {
    const spawnPoint = this.spawnPoints.get(playerId)
    assertNotUndefined(spawnPoint, 'Units only generated after spawns')
    const freeNeighbours = R.intersection(this.remainingHexes, spawnPoint.neighbours())
    return randomElement(freeNeighbours)
  }

  private pickSpawnPoints = (): void => {
    for (const player of this.worldState.players) {
      const spawnPoint = this.pickSpawnPoint()
      this.spawnPoints.set(player.id, spawnPoint)
      this.remainingHexes = R.without([spawnPoint], this.remainingHexes)
    }
  }

  private pickSpawnPoint = (): Hex => {
    const MAX_SPAWN_ATTEMPTS = 100
    for (let i = 0; i < MAX_SPAWN_ATTEMPTS; i++) {
      const spawnPoint = this.tryPickSpawnPoint()
      if (spawnPoint) {
        return spawnPoint
      }
    }
    throw new Error('Could not find free spawn point')
  }

  private tryPickSpawnPoint = (): Option<Hex> => {
    const candidateLocation = randomElement(this.remainingHexes)
    return this.isValidSpawn(candidateLocation) ? candidateLocation : undefined
  }

  private isValidSpawn = (candidateLocation: Hex): boolean =>
    this.isFarEnoughAwayFromOtherSpawns(candidateLocation) && this.hasFreeNeighbours(candidateLocation)

  private isFarEnoughAwayFromOtherSpawns = (candidateLocation: Hex): boolean => {
    const otherSpawns = Array.from(this.spawnPoints.values())
    const distancesToOtherSpawns = otherSpawns.map((location) => candidateLocation.distanceTo(location))
    const closestDistanceToAnotherSpawn = maxOpt(distancesToOtherSpawns)
    return closestDistanceToAnotherSpawn === undefined || closestDistanceToAnotherSpawn >= MIN_DISTANCE_BETWEEN_SPAWNS
  }

  private hasFreeNeighbours = (candidateLocation: Hex): boolean => {
    const isFree = (location: Hex) => R.includes(location, this.remainingHexes)
    return countWhere(candidateLocation.neighbours(), isFree) >= 2
  }

  private generateBuildings = (): Building[] =>
    R.chain((player) => this.generateBuildingsForPlayer(player.id), this.worldState.players)

  private generateBuildingsForPlayer = (playerId: PlayerId): Building[] => [this.generateCastle(playerId)]

  private generateCastle = (playerId: PlayerId): Building => {
    const id = this.nextUnitOrBuildingId++
    const location = this.spawnPoints.get(playerId)
    assertNotUndefined(location, 'Castles only generated after spawn points')
    return new Building({
      id,
      playerId,
      type: BuildingType.CASTLE,
      location,
      hitPoints: new HitPoints({ current: CASTLE_HIT_POINTS, max: CASTLE_HIT_POINTS }),
    })
  }

  private generateMountain = (): Hex => {
    const location = randomElement(this.remainingHexes)
    this.remainingHexes = R.without([location], this.remainingHexes)
    return location
  }

  public generateMountains = (): Hex[] => {
    const numberOfMountains = Math.round(this.worldState.map.hexCount() * MOUNTAIN_FRACTION)
    return R.range(1, numberOfMountains).map(this.generateMountain)
  }
}
