import { Hex } from './hex'
import { UnitId } from './unit'

export interface MoveUnitWorldAction {
  type: 'moveUnit'
  unitId: UnitId
  to: Hex
}

export interface AttackAction {
  type: 'attack'
  unitId: UnitId
  target: Hex
}

export interface EndTurnAction {
  type: 'endTurn'
}

export type WorldAction = MoveUnitWorldAction | AttackAction | EndTurnAction