import { Hex } from './hex'
import { UnitId } from './unit'

export interface MoveUnitWorldAction {
  type: 'moveUnit'
  unitId: UnitId
  to: Hex
}

export interface AttackWorldAction {
  type: 'attack'
  attacker: {
    unitId: UnitId
    location: Hex
  }
  defender: {
    unitId: UnitId
    location: Hex
  }
}

export interface EndTurnWorldAction {
  type: 'endTurn'
}

export type WorldAction = MoveUnitWorldAction | AttackWorldAction | EndTurnWorldAction

