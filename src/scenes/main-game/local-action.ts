import { HexDirection } from '../../world/hex-direction'
import { Hex } from '../../world/hex'
import { UnitId } from '../../world/unit'

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

export interface CompleteMoveLocalAction {
  type: 'completeMove'
  unitId: UnitId
  hex: Hex
}

export interface CompleteAttackLocalAction {
  type: 'completeAttack'
  unitId: UnitId
  hex: Hex
}

export interface SelectHexLocalAction {
  type: 'selectHex'
  hex: Hex
}

export type LocalAction =
  | GoLocalAction
  | GoHexAction
  | EndTurnLocalAction
  | SelectNextUnitLocalAction
  | EnterMoveModeLocalAction
  | EnterAttackModeLocalAction
  | AbortLocalAction
  | CompleteMoveLocalAction
  | CompleteAttackLocalAction
  | SelectHexLocalAction
