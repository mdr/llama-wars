import { HexDirection } from '../world/hex-direction'
import { Hex } from '../world/hex'

export interface GoLocalAction {
  type: 'go'
  direction: HexDirection
}

export interface GoHexAction {
  type: 'goHex'
  hex: Hex
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
  | GoHexAction
  | EndTurnLocalAction
  | SelectNextUnitLocalAction
  | EnterMoveModeLocalAction
  | EnterAttackModeLocalAction
  | AbortLocalAction
