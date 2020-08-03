import { Hex } from './hex'
import { PlayerId, UnitId } from './world-state'

export interface UnitMovedWorldEvent {
  type: 'unitMoved'
  playerId: PlayerId,
  unitId: UnitId
  from: Hex
  to: Hex
}

export type WorldEvent = UnitMovedWorldEvent