import { HexDirection } from '../world/hex-direction'

export interface GoLocalAction {
  type: 'go'
  direction: HexDirection
}

export interface EndTurnLocalAction {
  type: 'endTurn'
}

export interface SelectNextUnitLocalAction {
  type: 'selectNextUnit'
}

export interface EnterMoveModeLocalAction {
  type: 'enterMoveMode'
}

export interface EnterAttackModeLocalAction {
  type: 'enterAttackMode'
}

export interface AbortLocalAction {
  type: 'abort'
}

export type LocalAction =
  GoLocalAction
  | EndTurnLocalAction
  | SelectNextUnitLocalAction
  | EnterMoveModeLocalAction
  | EnterAttackModeLocalAction
  | AbortLocalAction
