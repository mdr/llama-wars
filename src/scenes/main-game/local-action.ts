import { HexDirection } from '../../world/hex-direction'
import { Hex } from '../../world/hex'
import { UnitId } from '../../world/unit'
import { AttackType } from '../../world/world-actions'
import { Sidebar } from '../local-game-state'

export interface GoLocalAction {
  type: 'go'
  direction: HexDirection
}

export interface GoHexLocalAction {
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
  attackType: AttackType
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
  attackType: AttackType
}

export interface SelectHexLocalAction {
  type: 'selectHex'
  hex: Hex
}

export interface ChangeSidebarLocalAction {
  type: 'changeSidebar'
  sidebar: Sidebar
}

export interface ChatLocalAction {
  type: 'chat'
  message: string
}

export interface MatureUnitLocalAction {
  type: 'matureUnit'
}

export interface ToggleFullScreenLocalAction {
  type: 'toggleFullScreen'
}

export interface CentreSelectionLocalAction {
  type: 'centreSelection'
}

export type LocalAction =
  | GoLocalAction
  | GoHexLocalAction
  | EndTurnLocalAction
  | SelectNextUnitLocalAction
  | EnterMoveModeLocalAction
  | EnterAttackModeLocalAction
  | AbortLocalAction
  | CompleteMoveLocalAction
  | CompleteAttackLocalAction
  | SelectHexLocalAction
  | ChangeSidebarLocalAction
  | ChatLocalAction
  | MatureUnitLocalAction
  | ToggleFullScreenLocalAction
  | CentreSelectionLocalAction

export type LocalActionDispatcher = (action: LocalAction) => void
