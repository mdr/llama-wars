import { WorldState } from '../world/world-state'
import { WorldAction } from '../world/world-actions'
import { applyEvent } from '../world/world-event-evaluator'
import { WorldEvent, WorldEventId } from '../world/world-events'
import { WorldActionHandler } from './world-action-handler'
import { PlayerId } from '../world/player'

export type WorldEventListener = (event: WorldEvent) => void

export class WorldStateOwner {
  public worldState: WorldState
  private nextWorldEventId: WorldEventId
  private readonly listeners: WorldEventListener[] = []

  constructor(worldState: WorldState, nextWorldEventId: WorldEventId) {
    this.worldState = worldState
    this.nextWorldEventId = nextWorldEventId
  }

  public addListener = (listener: WorldEventListener): void => {
    this.listeners.push(listener)
  }

  private notifyListeners = (event: WorldEvent): void => {
    for (const listener of this.listeners) listener(event)
  }

  public handleAction = (playerId: PlayerId, action: WorldAction): void => {
    const worldActionHandler = new WorldActionHandler(this.worldState, playerId, this.nextWorldEventId)
    const event = worldActionHandler.calculateWorldEvent(action)
    this.worldState = applyEvent(this.worldState, event)
    this.nextWorldEventId++
    this.notifyListeners(event)
  }
}
