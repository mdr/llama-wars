import { Hex } from './hex'
import { PlayerId } from './world-state'
import { UnitId } from './unit'

export interface UnitMovedWorldEvent {
  type: 'unitMoved'
  playerId: PlayerId,
  unitId: UnitId
  actionPointsConsumed: number,
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
  actionPointsConsumed: number
}

export interface PlayerEndedTurnWorldEvent {
  type: 'playerEndedTurn'
  playerId: PlayerId
}

export interface NewTurnWorldEvent {
  type: 'newTurn'
}

export type WorldEvent = UnitMovedWorldEvent | CombatWorldEvent | PlayerEndedTurnWorldEvent | NewTurnWorldEvent