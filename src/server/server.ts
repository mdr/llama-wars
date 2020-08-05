import {
  INITIAL_WORLD_STATE,
  PlayerId,
  WorldState,
} from '../world/world-state'
import { AttackAction, MoveUnitWorldAction, WorldAction } from '../world/world-actions'
import { applyEvent } from '../world/world-event-evaluator'
import {
  CombatWorldEvent,
  UnitMovedWorldEvent,
  WorldEvent,
} from '../world/world-events'

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
      case 'attack':
        this.handleAttack(playerId, action)
        break
      case 'moveUnit':
        this.handleMoveUnit(playerId, action)
        break
    }
  }

  private handleAttack = (playerId: PlayerId, action: AttackAction) => {
    const { unitId, target } = action
    const attacker = this.worldState.findUnitById(unitId)
    if (!attacker) {
      throw `No unit found with ID ${unitId}`
    }
    const from = attacker.location
    if (!from.isAdjacentTo(target)) {
      throw `Invalid unit attack between non-adjacent hexes ${from} to ${target}`
    }
    const defender = this.worldState.findUnitInLocation(target)
    if (!defender) {
      throw `No target unit to attack at ${target}`
    }
    if (playerId == defender.playerId) {
      throw `Cannot attack own unit`
    }

    const attackerDamage = Math.min(attacker.hitPoints.current, 10)
    const defenderDamage = Math.min(defender.hitPoints.current, 20)
    const event: CombatWorldEvent = {
      type: 'combat',
      attacker: {
        playerId: attacker.playerId,
        unitId: attacker.id,
        location: attacker.location,
        damage: attackerDamage,
        killed: attacker.hitPoints.current == attackerDamage,
      },
      defender: {
        playerId: defender.playerId,
        unitId: defender.id,
        location: defender.location,
        damage: defenderDamage,
        killed: defender.hitPoints.current == defenderDamage,
      },
    }
    this.worldState = applyEvent(this.worldState, event)
    this.notifyListeners(event)
  }


  private handleMoveUnit = (playerId: PlayerId, action: MoveUnitWorldAction) => {
    const { unitId, to } = action
    const unit = this.worldState.findUnitById(unitId)
    if (!unit) {
      throw `No unit found with ID ${unitId}`
    }
    const from = unit.location
    if (!from.isAdjacentTo(to)) {
      throw `Invalid unit movement between non-adjacent hexes ${from} to ${to}`
    }
    if (!this.worldState.map.isInBounds(to)) {
      throw `Invalid unit movement to out-of-bounds hex ${to}`
    }
    if (this.worldState.findUnitInLocation(to)) {
      throw `Invalid unit movement to already-occupied hex`
    }
    const event: UnitMovedWorldEvent = { type: 'unitMoved', playerId: playerId, unitId, from, to }
    this.worldState = applyEvent(this.worldState, event)
    this.notifyListeners(event)
  }
}