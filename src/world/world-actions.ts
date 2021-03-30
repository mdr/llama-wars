import { Hex } from './hex'
import { UnitId, UnitType } from './unit'
import { UnitOrBuildingId, WorldState } from './world-state'
import { PlayerId } from './player'
import { Option } from '../util/types'

export interface InitialiseWorldAction {
  type: 'initialise'
  state: WorldState
}

export interface AddPlayerWorldAction {
  type: 'addPlayer'
  name: Option<string>
}

export interface ChangePlayerNameWorldAction {
  type: 'changePlayerName'
  name: string
}

export interface StartGameWorldAction {
  type: 'startGame'
}

export interface MoveUnitWorldAction {
  type: 'moveUnit'
  unitId: UnitId
  to: Hex
}

export type AttackType = 'melee' | 'spit'

export interface CombatParticipantInfo {
  id: UnitOrBuildingId
  location: Hex
}

export interface AttackWorldAction {
  type: 'attack'
  attackType: AttackType
  attacker: CombatParticipantInfo
  defender: CombatParticipantInfo
}

export interface EndTurnWorldAction {
  type: 'endTurn'
  turn: number
}

export interface ChatWorldAction {
  type: 'chat'
  message: string
}

export interface KickPlayerWorldAction {
  type: 'kickPlayer'
  playerId: PlayerId
}

export interface MatureUnitWorldAction {
  type: 'matureUnit'
  unitId: UnitId
  unitType: UnitType
}

export type WorldAction =
  | InitialiseWorldAction
  | AddPlayerWorldAction
  | ChangePlayerNameWorldAction
  | StartGameWorldAction
  | MoveUnitWorldAction
  | AttackWorldAction
  | EndTurnWorldAction
  | ChatWorldAction
  | KickPlayerWorldAction
  | MatureUnitWorldAction
