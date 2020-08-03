import {
  findUnitById,
  findUnitInLocation,
  INITIAL_WORLD_STATE,
  isInBounds,
  PlayerId,
  WorldState,
} from '../world/world-state'
import { MoveUnitWorldAction, WorldAction } from '../world/world-actions'
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

  public handleAction = (playerId: PlayerId, action: WorldAction): void => {
    switch (action.type) {
      case 'moveUnit':
        this.handleMoveUnit(playerId, action)
    }
  }

  private handleMoveUnit = (playerId: PlayerId, action: MoveUnitWorldAction) => {
    const { unitId, to } = action
    const unit = findUnitById(unitId, this.worldState)
    if (!unit) {
      throw `No unit found with ID ${unitId}`
    }
    const from = unit.location
    if (!from.isAdjacentTo(to)) {
      throw `Invalid unit movement between non-adjacent hexes ${from} to ${to}`
    }
    if (!isInBounds(to, this.worldState.map)) {
      throw `Invalid unit movement to out-of-bounds hex ${to}`
    }
    if (findUnitInLocation(to, this.worldState)) {
      throw `Invalid unit movement to already-occupied hex`
    }
    const event: UnitMovedWorldEvent = { type: 'unitMoved', playerId: playerId, unitId, from, to }
    this.worldState = applyEvent(this.worldState, event)
    this.notifyListeners(event)
  }
}