import { Hex } from './hex'
import { Unit, UnitId } from './unit'
import { PlayerId } from './player'
import { WorldState } from './world-state'
import { AttackType } from './world-actions'

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
  mountains: Hex[]
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
  attackType: AttackType
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

export interface PlayerDefeatedWorldEvent {
  id: WorldEventId
  type: 'playerDefeated'
  playerId: PlayerId
}

export interface GameOverWorldEvent {
  id: WorldEventId
  type: 'gameOver'
  victor?: PlayerId
}

export interface ChatWorldEvent {
  id: WorldEventId
  type: 'chat'
  playerId: PlayerId
  message: string
}

export type WorldEvent =
  | InitialiseWorldEvent
  | PlayerAddedWorldEvent
  | PlayerChangedNameWorldEvent
  | GameStartedWorldEvent
  | UnitMovedWorldEvent
  | CombatWorldEvent
  | PlayerEndedTurnWorldEvent
  | PlayerDefeatedWorldEvent
  | NewTurnWorldEvent
  | GameOverWorldEvent
  | ChatWorldEvent
