import { PlayerId } from '../world/player'
import { Unit, UnitId, UnitType } from '../world/unit'
import { Hex } from '../world/hex'
import { randomElement } from '../util/random-util'
import * as R from 'ramda'
import { ActionPoints } from '../world/action-points'
import { CASTLE_HIT_POINTS, CRIA_HIT_POINTS, HitPoints } from '../world/hit-points'
import { WorldState } from '../world/world-state'
import { Building, BuildingId, BuildingType } from '../world/building'

const LLAMA_NAMES = [
  'Walter',
  'Dolly',
  'Chewpaca',
  'Barack O. Llama',
  'Como Se',
  'Fuzzy',
  'Jeremy',
  'Alfonso',
  'Rose',
  'Lorenzo',
  'Rita',
  'Anton',
  'Bernard',
  'Cassie',
  'Francesca',
  'Milly',
  'Carlos',
  'Ricardo',
  'Alpaca Capone',
]

export class WorldGenerator {
  private readonly worldState: WorldState
  private remainingHexes: Hex[]
  private nextUnitId: UnitId = 1
  private nextBuildingId: BuildingId = 1

  constructor(worldState: WorldState) {
    this.worldState = worldState
    this.remainingHexes = Array.from(worldState.map.getMapHexes())
  }

  public generateUnits = (): Unit[] =>
    R.chain((player) => this.generateUnitsForPlayer(player.id), this.worldState.players)

  private generateUnitsForPlayer = (playerId: PlayerId): Unit[] => [
    this.generateUnit(playerId),
    this.generateUnit(playerId),
  ]

  private generateUnit = (playerId: PlayerId): Unit => {
    const id = this.nextUnitId++
    const location = randomElement(this.remainingHexes)
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

  public generateBuildings = (): Building[] =>
    R.chain((player) => this.generateBuildingsForPlayer(player.id), this.worldState.players)

  private generateBuildingsForPlayer = (playerId: PlayerId): Building[] => [this.generateCastle(playerId)]

  private generateCastle = (playerId: PlayerId): Building => {
    const id = this.nextBuildingId++
    const location = randomElement(this.remainingHexes)
    this.remainingHexes = R.without([location], this.remainingHexes)
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

  public generateMountains = (): Hex[] => R.range(1, 10).map(this.generateMountain)
}
