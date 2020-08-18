import { PlayerId } from '../world/player'
import { Unit, UnitId } from '../world/unit'
import { Hex } from '../world/hex'
import { randomElement } from '../util/random-util'
import * as R from 'ramda'
import { ActionPoints } from '../world/action-points'
import { HitPoints } from '../world/hit-points'
import { WorldState } from '../world/world-state'

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
]

export class WorldGenerator {
  private readonly worldState: WorldState
  private remainingHexes: Hex[]
  private nextUnitId: UnitId = 1

  constructor(worldState: WorldState) {
    this.worldState = worldState
    this.remainingHexes = Array.from(worldState.map.getMapHexes())
  }

  private generateUnit = (playerId: PlayerId): Unit => {
    const id = this.nextUnitId++
    const location = randomElement(this.remainingHexes)
    this.remainingHexes = R.without([location], this.remainingHexes)
    const name = randomElement(LLAMA_NAMES)
    return new Unit({
      id,
      playerId,
      name,
      location,
      actionPoints: new ActionPoints({ current: 2, max: 2 }),
      hitPoints: new HitPoints({ current: 100, max: 100 }),
    })
  }

  private generateMountain = (): Hex => {
    const location = randomElement(this.remainingHexes)
    this.remainingHexes = R.without([location], this.remainingHexes)
    return location
  }

  public generateMountains = (): Hex[] => R.range(1, 10).map(this.generateMountain)

  public generateUnits = (): Unit[] =>
    R.chain((player) => [this.generateUnit(player.id), this.generateUnit(player.id)], this.worldState.players)
}
