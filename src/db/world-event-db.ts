import Dexie from 'dexie'
import { GameId } from '../scenes/main-game/game-scene'
import { WorldEvent } from '../world/world-events'
import { serialiseToJson } from '../util/json-serialisation'

export interface WorldEventRecord {
  gameId: GameId
  event: WorldEvent
}

export class LlamaDexie extends Dexie {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  worldEvents: Dexie.Table<WorldEventRecord, string>
}

export const openWorldEventDb = async (): Promise<WorldEventDb> => {
  const dexie = new Dexie('llama-wars')
  dexie.version(1).stores({
    worldEvents: 'gameId',
  })
  await dexie.open()
  return new WorldEventDb(<LlamaDexie>dexie)
}

export class WorldEventDb {
  private readonly dexie: LlamaDexie

  constructor(dexie: LlamaDexie) {
    this.dexie = dexie
  }

  public store = async (gameId: GameId, event: WorldEvent): Promise<void> => {
    await this.dexie.worldEvents.add({
      gameId,
      event: serialiseToJson(event),
    })
  }
}
