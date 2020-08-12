import { Hex } from './hex'
import { UnitId } from './unit'
import { WorldState } from './world-state'

export interface InitialiseWorldAction {
  type: 'initialise'
  state: WorldState
}

export interface AddPlayerWorldAction {
  type: 'addPlayer'
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

export interface AttackWorldAction {
  type: 'attack'
  attackType: AttackType
  attacker: {
    unitId: UnitId
    location: Hex
  }
  defender: {
    unitId: UnitId
    location: Hex
  }
}

export interface EndTurnWorldAction {
  type: 'endTurn'
  turn: number
}

export type WorldAction =
  | InitialiseWorldAction
  | AddPlayerWorldAction
  | ChangePlayerNameWorldAction
  | StartGameWorldAction
  | MoveUnitWorldAction
  | AttackWorldAction
  | EndTurnWorldAction
