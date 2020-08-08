import { PlayerId, WorldState } from '../world/world-state'
import { WorldAction } from '../world/world-actions'
import { applyEvent } from '../world/world-event-evaluator'
import { WorldEvent } from '../world/world-events'
import { WorldActionHandler } from './world-action-handler'

export type WorldEventListener = (event: WorldEvent) => void

export class WorldStateOwner {
  public worldState: WorldState
  private nextWorldEventId = 1
  private listeners: WorldEventListener[] = []

  constructor(worldState: WorldState) {
    this.worldState = worldState
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
