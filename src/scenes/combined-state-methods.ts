import { LocalGameState } from './local-game-state'
import { Player, PlayerId, WorldState } from '../world/world-state'
import { Option } from '../util/types'
import { Unit } from '../world/unit'
import { Mode } from './mode'
import { Hex } from '../world/hex'

export class CombinedStateMethods {

  protected readonly worldState: WorldState
  protected readonly localGameState: LocalGameState

  constructor(worldState: WorldState, localGameState: LocalGameState) {
    this.worldState = worldState
    this.localGameState = localGameState
  }

  public findSelectedUnit = (): Option<Unit> => this.selectedHex ? this.findUnitInLocation(this.selectedHex) : undefined

  public get mode(): Mode {
    return this.localGameState.mode
  }

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

  public getCurrentPlayer = (): Player => {
    const player = this.worldState.findPlayer(this.playerId)
    if (!player)
      throw `Could not find player with id ${this.playerId}`
    return player
  }

  public getUnitById = (unitId: number): Unit => {
    const unit = this.worldState.findUnitById(unitId)
    if (!unit) {
      throw `No unit found with ID ${unitId}`
    }
    return unit
  }

}