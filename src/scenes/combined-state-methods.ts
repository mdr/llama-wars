import { LocalGameState } from './local-game-state'
import { Player, PlayerId, WorldState } from '../world/world-state'
import { Option } from '../util/types'
import { Unit, UnitId } from '../world/unit'
import { Hex } from '../world/hex'
import * as R from 'ramda'

export class CombinedState {

  protected readonly worldState: WorldState
  protected readonly localGameState: LocalGameState

  constructor(worldState: WorldState, localGameState: LocalGameState) {
    this.worldState = worldState
    this.localGameState = localGameState
  }

  public findSelectedUnit = (): Option<Unit> => this.selectedHex ? this.findUnitInLocation(this.selectedHex) : undefined

  public get selectedHex(): Option<Hex> {
    return this.localGameState.selectedHex
  }

  public get playerId(): PlayerId {
    return this.localGameState.playerId
  }

  public findUnitInLocation = (hex: Hex): Option<Unit> => this.worldState.findUnitInLocation(hex)

  public unitCouldPotentiallyMove = (unit: Unit): boolean =>
    unit.playerId == this.playerId && unit.actionPoints.current > 0 && !this.getCurrentPlayer().endedTurn

  public unitCouldPotentiallyAttack = (unit: Unit): boolean =>
    unit.playerId == this.playerId && unit.actionPoints.current > 0 && !this.getCurrentPlayer().endedTurn

  public unitCanMoveToHex = (unit: Unit, hex: Hex): boolean =>
    this.unitCouldPotentiallyMove(unit)
    && hex.isAdjacentTo(unit.location)
    && this.worldState.map.isInBounds(hex)
    && !this.findUnitInLocation(hex)

  public unitCanAttackHex = (unit: Unit, location: Hex): boolean => {
    const targetUnit = this.findUnitInLocation(location)
    return this.unitCouldPotentiallyAttack(unit)
      && targetUnit != undefined
      && targetUnit.playerId != this.localGameState.playerId
      && unit.location.isAdjacentTo(location)
  }

  public findFirstUnitWithActionPoints = (): Option<Unit> => {
    const candidateUnits = R.sortBy(unit => unit.id, this.worldState.units.filter(unit => unit.playerId == this.playerId && unit.actionPoints.current > 0))
    return R.head(candidateUnits)
  }

  public findNextUnitWithActionPoints = (unitId: UnitId): Option<Unit> => {
    const candidateUnits = R.sortBy(unit => unit.id, this.worldState.units.filter(unit => unit.playerId == this.playerId && unit.actionPoints.current > 0))
    return R.head(candidateUnits.filter(unit => unit.id > unitId)) ?? R.head(candidateUnits.filter(unit => unit.id < unitId))
  }

  public getCurrentPlayer = (): Player => {
    const player = this.worldState.findPlayer(this.playerId)
    if (!player)
      throw `Could not find player with id ${this.playerId}`
    return player
  }

}