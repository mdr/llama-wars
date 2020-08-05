import { LocalGameState } from './local-game-state'
import { WorldAction } from '../world/world-actions'
import { WorldState } from '../world/world-state'
import { LocalAction } from './local-action'
import { nothing, Option } from '../util/types'
import { Unit, UnitId } from '../world/unit'
import { Hex } from '../world/hex'
import * as R from 'ramda'
import { UnreachableCaseError } from '../util/unreachable-case-error'

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

  public process = (action: LocalAction): Option<LocalActionResult> => {
    switch (action.type) {
      case 'selectNextUnit':
        return this.handleSelectNextUnit()
      case 'abort':
        return this.handleAbort()
      default:
        return
    }
  }

  private handleSelectNextUnit = (): Option<LocalActionResult> => {
    const selectedUnit = this.findSelectedUnit()
    const unitToSelect = selectedUnit ? this.findNextUnitWithActionPoints(selectedUnit.id) : this.findFirstUnitWithActionPoints()
    if (unitToSelect) {
      const newLocalGameState = this.localGameState.setSelectedHex(unitToSelect?.location).setMode({ type: 'selectHex' })
      return { newLocalGameState: newLocalGameState }
    } else {
      return undefined
    }
  }

  private findSelectedUnit = (): Option<Unit> => this.selectedHex ? this.findUnitInLocation(this.selectedHex) : undefined


  private get playerId() {
    return this.localGameState.playerId
  }

  private get mode() {
    return this.localGameState.mode
  }

  private get selectedHex() {
    return this.localGameState.selectedHex
  }

  private findUnitInLocation = (hex: Hex): Option<Unit> => this.worldState.findUnitInLocation(hex)

  private findNextUnitWithActionPoints = (unitId: UnitId): Option<Unit> => {
    const candidateUnits = R.sortBy(unit => unit.id, this.worldState.units.filter(unit => unit.playerId == this.playerId && unit.actionPoints.current > 0))
    return R.head(candidateUnits.filter(unit => unit.id > unitId)) ?? R.head(candidateUnits.filter(unit => unit.id < unitId))
  }

  private findFirstUnitWithActionPoints = (): Option<Unit> => {
    const candidateUnits = R.sortBy(unit => unit.id, this.worldState.units.filter(unit => unit.playerId == this.playerId && unit.actionPoints.current > 0))
    return R.head(candidateUnits)
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
}