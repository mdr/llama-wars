import { Hex } from './hex'

export interface MoveUnitWorldAction {
  type: 'moveUnit'
  to: Hex
}

export type WorldAction = MoveUnitWorldAction