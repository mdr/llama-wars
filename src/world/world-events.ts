import { Hex } from './hex'

export interface UnitMovedWorldEvent {
  type: 'unitMoved'
  from: Hex
  to: Hex
}

export type WorldEvent = UnitMovedWorldEvent