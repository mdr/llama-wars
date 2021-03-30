import { WorldState } from '../world/world-state'
import { WorldAction } from '../world/world-actions'
import { WorldEvent, WorldEventId } from '../world/events/world-events'
import { WorldActionHandler } from './handlers/world-action-handler'
import { PlayerId } from '../world/player'

export type WorldEventListener = (event: WorldEvent, previousWorldState: WorldState, newWorldState: WorldState) => void

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

  private notifyListeners = (event: WorldEvent, previousWorldState: WorldState, newWorldState: WorldState): void => {
    for (const listener of this.listeners) {
      listener(event, previousWorldState, newWorldState)
    }
  }

  public handleAction = (playerId: PlayerId, action: WorldAction): WorldEvent[] => {
    const worldActionHandler = new WorldActionHandler(this.worldState, playerId, this.nextWorldEventId)
    const events = worldActionHandler.calculateWorldEvents(action)
    for (const event of events) {
      const previousWorldState = this.worldState
      const newWorldState = previousWorldState.applyEvent(event)
      this.worldState = newWorldState
      this.notifyListeners(event, previousWorldState, newWorldState)
    }
    this.nextWorldEventId += events.length
    return events
  }
}
