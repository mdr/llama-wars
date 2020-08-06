import { LocalGameState } from './local-game-state'
import { WorldAction } from '../world/world-actions'
import { WorldState } from '../world/world-state'
import { LocalAction } from './local-action'
import { nothing, Option } from '../util/types'
import { UnitId } from '../world/unit'
import { Hex } from '../world/hex'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { HexDirection } from '../world/hex-direction'
import { Mode } from './mode'
import { CombinedState } from './combined-state-methods'

export interface LocalActionResult {
  newLocalGameState?: LocalGameState
  worldAction?: WorldAction
}

export class LocalActionProcessor {
  private readonly worldState: WorldState
  private readonly localGameState: LocalGameState

  constructor(worldState: WorldState, localGameState: LocalGameState) {
    this.worldState = worldState
    this.localGameState = localGameState
  }

  private get combinedState(): CombinedState {
    return new CombinedState(this.worldState, this.localGameState)
  }

  public process = (action: LocalAction): Option<LocalActionResult> => {
    switch (action.type) {
      case 'go':
        return this.handleGo(action.direction)
      case 'goHex':
        return this.handleGoHex(action.hex)
      case 'selectNextUnit':
        return this.handleSelectNextUnit()
      case 'abort':
        return this.handleAbort()
      case 'endTurn':
        return this.handleEndTurn()
      case 'enterMoveMode':
        return this.handleEnterMoveMode()
      case 'enterAttackMode':
        return this.handleEnterAttackMode()
      case 'completeMove':
        return this.handleCompleteMove(action.unitId, action.hex)
      case 'completeAttack':
        return this.handleCompleteAttack(action.unitId, action.hex)
      case 'selectHex':
        return this.handleSelectHex(action.hex)
      default:
        throw new UnreachableCaseError(action)
    }
  }

  private handleSelectNextUnit = (): Option<LocalActionResult> => {
    const selectedUnit = this.combinedState.findSelectedUnit()
    const unitToSelect = selectedUnit ?
      this.combinedState.findNextUnitWithActionPoints(selectedUnit.id) :
      this.combinedState.findFirstUnitWithActionPoints()
    if (unitToSelect) {
      const newLocalGameState = this.localGameState.setSelectedHex(unitToSelect?.location).setMode({ type: 'selectHex' })
      return { newLocalGameState: newLocalGameState }
    } else {
      return undefined
    }
  }

  private handleAbort = (): Option<LocalActionResult> => {
    switch (this.localGameState.mode.type) {
      case 'selectHex':
        return { newLocalGameState: this.localGameState.copy({ selectedHex: nothing }) }
      case 'attack':
      case 'moveUnit':
        return { newLocalGameState: this.localGameState.setMode({ type: 'selectHex' }) }
      default:
        throw new UnreachableCaseError(this.localGameState.mode)
    }
  }

  private handleGo = (direction: HexDirection): Option<LocalActionResult> => {
    const selectedHex = this.localGameState.selectedHex
    if (selectedHex)
      return this.moveOrAttackHex(selectedHex.go(direction))
  }

  private handleGoHex = (hex: Hex): Option<LocalActionResult> => this.moveOrAttackHex(hex)

  private moveOrAttackHex = (hex: Hex): Option<LocalActionResult> => {
    const selectedUnit = this.combinedState.findSelectedUnit()
    if (selectedUnit) {
      if (this.combinedState.unitCanMoveToHex(selectedUnit, hex))
        return { worldAction: { type: 'moveUnit', unitId: selectedUnit.id, to: hex } }
      else if (this.combinedState.unitCanAttackHex(selectedUnit, hex))
        return { worldAction: { type: 'attack', unitId: selectedUnit.id, target: hex } }
    }
  }

  private handleEndTurn = (): Option<LocalActionResult> => {
    if (!this.combinedState.getCurrentPlayer().endedTurn) {
      return { worldAction: { type: 'endTurn' } }
    }
  }

  private handleEnterMoveMode = (): Option<LocalActionResult> => {
    const unit = this.combinedState.findSelectedUnit()
    if (unit && this.combinedState.unitCouldPotentiallyMove(unit)) {
      const newMode: Mode = { type: 'moveUnit', from: unit.location, unitId: unit.id }
      return { newLocalGameState: this.localGameState.setMode(newMode) }
    }
  }

  private handleEnterAttackMode = (): Option<LocalActionResult> => {
    const unit = this.combinedState.findSelectedUnit()
    if (unit && this.combinedState.unitCouldPotentiallyAttack(unit)) {
      const newMode: Mode = { type: 'attack', from: unit.location, unitId: unit.id }
      const newLocalGameState = this.localGameState.setMode(newMode)
      return { newLocalGameState }
    }
  }

  private handleCompleteMove = (unitId: UnitId, destination: Hex): Option<LocalActionResult> => {
    const unit = this.worldState.getUnitById(unitId)
    if (this.combinedState.unitCanMoveToHex(unit, destination))
      return { worldAction: { type: 'moveUnit', unitId: unit.id, to: destination } }
  }

  private handleCompleteAttack = (unitId: UnitId, targetHex: Hex): Option<LocalActionResult> => {
    const attacker = this.worldState.getUnitById(unitId)
    if (this.combinedState.unitCanAttackHex(attacker, targetHex))
      return { worldAction: { type: 'attack', unitId: attacker.id, target: targetHex } }
  }

  private handleSelectHex = (hex: Hex): Option<LocalActionResult> => {
    const selectedHex = this.localGameState.selectedHex
    if (!this.worldState.map.isInBounds(hex)) {
      // If click is out of bounds, deselect any selected hex
      if (selectedHex) {
        return { newLocalGameState: this.localGameState.setSelectedHex(undefined) }
      }
    } else if (selectedHex && selectedHex.equals(hex)) {
      // if selected hex is clicked, toggle selection off
      return { newLocalGameState: this.localGameState.setSelectedHex(undefined) }
    } else {
      return { newLocalGameState: this.localGameState.setSelectedHex(hex) }
    }
  }

}