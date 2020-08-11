import { Hex } from './hex'
import { Unit, UnitId } from './unit'
import { PlayerId } from './player'
import { WorldState } from './world-state'

export type WorldEventId = number

export interface InitialiseWorldEvent {
  id: WorldEventId
  type: 'initialise'
  state: WorldState
}

export interface PlayerAddedWorldEvent {
  id: WorldEventId
  type: 'playerAdded'
  playerId: PlayerId
}

export interface PlayerChangedNameWorldEvent {
  id: WorldEventId
  type: 'playerChangedName'
  playerId: PlayerId
  name: string
}

export interface PlayerAddedWorldEvent {
  id: WorldEventId
  type: 'playerAdded'
  playerId: PlayerId
}

export interface GameStartedWorldEvent {
  id: WorldEventId
  type: 'gameStarted'
  units: Unit[]
}

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

export type WorldEvent =
  | InitialiseWorldEvent
  | PlayerAddedWorldEvent
  | PlayerChangedNameWorldEvent
  | GameStartedWorldEvent
  | UnitMovedWorldEvent
  | CombatWorldEvent
  | PlayerEndedTurnWorldEvent
  | NewTurnWorldEvent
