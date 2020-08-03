import { Hex } from './hex'
import { UnitId } from './world-state'

export interface MoveUnitWorldAction {
  type: 'moveUnit'
  unitId: UnitId
  to: Hex
}

export type WorldAction = MoveUnitWorldAction