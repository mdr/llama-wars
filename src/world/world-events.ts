import { Hex } from './hex'
import { UnitId } from './world-state'

export interface UnitMovedWorldEvent {
  type: 'unitMoved'
  unitId: UnitId
  from: Hex
  to: Hex
}

export type WorldEvent = UnitMovedWorldEvent