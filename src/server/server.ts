import { INITIAL_WORLD_STATE, isInBounds, WorldState } from '../world/world-state'
import { WorldAction } from '../world/world-actions'
import { applyEvent } from '../world/world-event-evaluator'
import { UnitMovedWorldEvent, WorldEvent } from '../world/world-events'

export type WorldEventListener = (event: WorldEvent) => void

export class Server {
  private worldState: WorldState = INITIAL_WORLD_STATE
  private listeners: WorldEventListener[] = []

  public addListener = (listener: WorldEventListener) => {
    this.listeners.push(listener)
  }

  private notifyListeners = (event: WorldEvent): void => {
    for (const listener of this.listeners) {
      listener(event)
    }
  }

  public handleAction = (action: WorldAction): void => {
    switch (action.type) {
      case 'moveUnit':
        const from = this.worldState.unitLocation
        const to = action.to
        if (!from.isAdjacentTo(to)) {
          throw `Invalid unit movement between non-adjacent hexes ${from} to ${to}`
        }
        if (!isInBounds(to, this.worldState.map)) {
          throw `Invalid unit movement to out-of-bounds hex ${to}`
        }
        const event: UnitMovedWorldEvent = { type: 'unitMoved', from, to }
        this.worldState = applyEvent(this.worldState, event)
        this.notifyListeners(event)
    }
  }

}