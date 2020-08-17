import { LocalGameState } from './local-game-state'
import { WorldState } from '../world/world-state'
import { Option } from '../util/types'
import { Unit, UnitId } from '../world/unit'
import { Hex } from '../world/hex'
import * as R from 'ramda'
import { Player, PlayerId } from '../world/player'
import { AttackType } from '../world/world-actions'
import { canAttackOccur } from '../server/attack-world-action-handler'

export class CombinedState {
  protected readonly worldState: WorldState
  protected readonly localGameState: LocalGameState

  constructor(worldState: WorldState, localGameState: LocalGameState) {
    this.worldState = worldState
    this.localGameState = localGameState
  }

  public findSelectedUnit = (): Option<Unit> =>
    this.selectedHex ? this.findUnitInLocation(this.selectedHex) : undefined

  public get selectedHex(): Option<Hex> {
    return this.localGameState.selectedHex
  }

  public get playerId(): PlayerId {
    return this.localGameState.playerId
  }

  public findUnitInLocation = (hex: Hex): Option<Unit> => this.worldState.findUnitInLocation(hex)

  public unitCouldPotentiallyMove = (unit: Unit): boolean =>
    unit.playerId === this.playerId && unit.hasUnspentActionPoints && !this.getCurrentPlayer().endedTurn

  public unitCouldPotentiallyAttack = (unit: Unit): boolean =>
    unit.playerId === this.playerId && unit.hasUnspentActionPoints && !this.getCurrentPlayer().endedTurn

  public unitCanMoveToHex = (unit: Unit, hex: Hex): boolean =>
    this.unitCouldPotentiallyMove(unit) &&
    hex.isAdjacentTo(unit.location) &&
    this.worldState.map.isInBounds(hex) &&
    !this.worldState.map.isMountain(hex) &&
    !this.findUnitInLocation(hex)

  /**
   * @return the unit in the hex to attack, if an attack is possible, else undefined.
   */
  public unitCanAttackHex = (unit: Unit, location: Hex, attackType: AttackType): Option<Unit> => {
    const targetUnit = this.findUnitInLocation(location)
    if (
      this.unitCouldPotentiallyAttack(unit) &&
      targetUnit !== undefined &&
      targetUnit.playerId !== this.localGameState.playerId &&
      canAttackOccur(attackType, unit.location, location)
    )
      return targetUnit
  }

  public findNextUnitWithUnspentActionPoints = (unitId?: UnitId): Option<Unit> => {
    const candidateUnits = R.sortBy(
      (unit) => unit.id,
      this.worldState.getUnitsForPlayer(this.playerId).filter((unit) => unit.hasUnspentActionPoints),
    )
    if (unitId)
      return (
        R.head(candidateUnits.filter((unit) => unit.id > unitId)) ??
        R.head(candidateUnits.filter((unit) => unit.id < unitId))
      )
    else return R.head(candidateUnits)
  }

  public getCurrentPlayer = (): Player => {
    const player = this.worldState.findPlayer(this.playerId)
    if (!player) throw `Could not find player with id ${this.playerId}`
    return player
  }
}
