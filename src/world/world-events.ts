import { Hex } from './hex'
import { UnitId } from './unit'
import { PlayerId } from './player'

export type WorldEventId = number

export interface UnitMovedWorldEvent {
  id: WorldEventId
  type: 'unitMoved'
  playerId: PlayerId
  unitId: UnitId
  actionPointsConsumed: number
  from: Hex
  to: Hex
}

export interface CombatParticipantInfo {
  playerId: PlayerId
  unitId: UnitId
  location: Hex
  damage: number
  killed: boolean
}

export interface CombatWorldEvent {
  id: WorldEventId
  type: 'combat'
  attacker: CombatParticipantInfo
  defender: CombatParticipantInfo
  actionPointsConsumed: number
}

export interface PlayerEndedTurnWorldEvent {
  id: WorldEventId
  type: 'playerEndedTurn'
  playerId: PlayerId
}

export interface NewTurnWorldEvent {
  id: WorldEventId
  type: 'newTurn'
}

export type WorldEvent = UnitMovedWorldEvent | CombatWorldEvent | PlayerEndedTurnWorldEvent | NewTurnWorldEvent
