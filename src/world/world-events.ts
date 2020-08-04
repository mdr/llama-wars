import { Hex } from './hex'
import { PlayerId, UnitId } from './world-state'

export interface UnitMovedWorldEvent {
  type: 'unitMoved'
  playerId: PlayerId,
  unitId: UnitId
  from: Hex
  to: Hex
}

export interface CombatParticipantInfo {
  playerId: PlayerId
  unitId: UnitId
  location: Hex,
  damage: number,
  killed: boolean
}

export interface CombatWorldEvent {
  type: 'combat'
  attacker: CombatParticipantInfo
  defender: CombatParticipantInfo
}

export type WorldEvent = UnitMovedWorldEvent | CombatWorldEvent