import { LocalGameState } from './local-game-state'
import { WorldAction } from '../world/world-actions'
import { WorldState } from '../world/world-state'
import { LocalAction } from './local-action'
import { nothing, Option } from '../util/types'
import { Unit, UnitId } from '../world/unit'
import { Hex } from '../world/hex'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { HexDirection } from '../world/hex-direction'
import { Mode } from './mode'
import { CombinedStateMethods } from './combined-state-methods'

export interface LocalActionResult {
  newLocalGameState?: LocalGameState
  worldAction?: WorldAction
}

export class LocalActionProcessor extends CombinedStateMethods {

  constructor(worldState: WorldState, localGameState: LocalGameState) {
    super(worldState, localGameState)
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
    const selectedUnit = this.findSelectedUnit()
    const unitToSelect = selectedUnit ?
      this.worldState.findNextUnitWithActionPoints(this.playerId, selectedUnit.id) :
      this.worldState.findFirstUnitWithActionPoints(this.playerId)
    if (unitToSelect) {
      const newLocalGameState = this.localGameState.setSelectedHex(unitToSelect?.location).setMode({ type: 'selectHex' })
      return { newLocalGameState: newLocalGameState }
    } else {
      return undefined
    }
  }

  private handleAbort = (): Option<LocalActionResult> => {
    switch (this.mode.type) {
      case 'selectHex':
        return { newLocalGameState: this.localGameState.copy({ selectedHex: nothing }) }
      case 'attack':
      case 'moveUnit':
        return { newLocalGameState: this.localGameState.setMode({ type: 'selectHex' }) }
      default:
        throw new UnreachableCaseError(this.mode)
    }
  }

  private handleGo = (direction: HexDirection): Option<LocalActionResult> => {
    if (this.selectedHex)
      return this.moveOrAttackHex(this.selectedHex.go(direction))
  }

  private handleGoHex = (hex: Hex): Option<LocalActionResult> => this.moveOrAttackHex(hex)

  private moveOrAttackHex = (hex: Hex): Option<LocalActionResult> => {
    const selectedUnit = this.findSelectedUnit()
    if (selectedUnit) {
      if (this.unitCanMoveToHex(selectedUnit, hex))
        return { worldAction: { type: 'moveUnit', unitId: selectedUnit.id, to: hex } }
      else if (this.unitCanAttackHex(selectedUnit, hex))
        return { worldAction: { type: 'attack', unitId: selectedUnit.id, target: hex } }
    }
  }

  private unitCanMoveToHex = (unit: Unit, hex: Hex): boolean =>
    this.unitCouldPotentiallyMove(unit)
    && hex.isAdjacentTo(unit.location)
    && this.worldState.map.isInBounds(hex)
    && !this.findUnitInLocation(hex)

  private unitCanAttackHex = (unit: Unit, location: Hex): boolean => {
    const targetUnit = this.findUnitInLocation(location)
    return this.unitCouldPotentiallyAttack(unit)
      && targetUnit != undefined
      && targetUnit.playerId != this.playerId
      && unit.location.isAdjacentTo(location)
  }

  private handleEndTurn = (): Option<LocalActionResult> => {
    if (!this.getCurrentPlayer().endedTurn) {
      return { worldAction: { type: 'endTurn' } }
    }
  }

  private handleEnterMoveMode = (): Option<LocalActionResult> => {
    const unit = this.findSelectedUnit()
    if (unit && this.unitCouldPotentiallyMove(unit)) {
      const newMode: Mode = { type: 'moveUnit', from: unit.location, unitId: unit.id }
      return { newLocalGameState: this.localGameState.setMode(newMode) }
    }
  }

  private handleEnterAttackMode = (): Option<LocalActionResult> => {
    const unit = this.findSelectedUnit()
    if (unit && this.unitCouldPotentiallyAttack(unit)) {
      const newMode: Mode = { type: 'attack', from: unit.location, unitId: unit.id }
      const newLocalGameState = this.localGameState.setMode(newMode)
      return { newLocalGameState }
    }
  }

  private handleCompleteMove = (unitId: UnitId, destination: Hex): Option<LocalActionResult> => {
    const unit = this.getUnitById(unitId)
    if (this.unitCanMoveToHex(unit, destination))
      return { worldAction: { type: 'moveUnit', unitId: unit.id, to: destination } }
  }

  private handleCompleteAttack = (unitId: UnitId, targetHex: Hex): Option<LocalActionResult> => {
    const attacker = this.getUnitById(unitId)
    if (this.unitCanAttackHex(attacker, targetHex))
      return { worldAction: { type: 'attack', unitId: attacker.id, target: targetHex } }
  }

  private handleSelectHex = (hex: Hex): Option<LocalActionResult> => {
    if (!this.worldState.map.isInBounds(hex)) {
      // If click is out of bounds, deselect any selected hex
      if (this.selectedHex) {
        return { newLocalGameState: this.localGameState.setSelectedHex(undefined) }
      }
    } else if (this.selectedHex && this.selectedHex.equals(hex)) {
      // if selected hex is clicked, toggle selection off
      return { newLocalGameState: this.localGameState.setSelectedHex(undefined) }
    } else {
      return { newLocalGameState: this.localGameState.setSelectedHex(hex) }
    }
  }

}