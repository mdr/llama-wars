import { PlayerId, WorldState } from '../world/world-state'
import { WorldAction } from '../world/world-actions'
import { applyEvent } from '../world/world-event-evaluator'
import { WorldEvent } from '../world/world-events'
import { INITIAL_WORLD_STATE } from '../world/initial-world-state'
import { WorldActionHandler } from './world-action-handler'

export type WorldEventListener = (event: WorldEvent) => void

export class Server {
  public worldState: WorldState = INITIAL_WORLD_STATE
  private listeners: WorldEventListener[] = []

  public addListener = (listener: WorldEventListener) => this.listeners.push(listener)

  private notifyListeners = (event: WorldEvent): void => {
    for (const listener of this.listeners)
      listener(event)
  }

  public handleAction = (playerId: PlayerId, action: WorldAction): void => {
    const event = new WorldActionHandler(this.worldState, playerId).calculateWorldEvent(action)
    this.worldState = applyEvent(this.worldState, event)
    this.notifyListeners(event)
  }

}