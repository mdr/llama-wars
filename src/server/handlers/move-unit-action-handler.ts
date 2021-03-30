import { WorldState } from '../../world/world-state'
import { MoveUnitWorldAction } from '../../world/world-actions'
import { UnitMovedWorldEvent, WorldEventId } from '../../world/events/world-events'
import { PlayerId } from '../../world/player'
import { Unit } from '../../world/unit'

export class MoveUnitActionHandler {
  private readonly worldState: WorldState
  private readonly playerId: PlayerId
  private readonly nextWorldEventId: WorldEventId

  constructor(worldState: WorldState, playerId: PlayerId, nextWorldEventId: WorldEventId) {
    this.worldState = worldState
    this.playerId = playerId
    this.nextWorldEventId = nextWorldEventId
  }

  public handleMoveUnit = (action: MoveUnitWorldAction): [UnitMovedWorldEvent] => {
    const { unitId, to } = action
    const unit = this.validateMoveUnit(action)
    return [
      {
        id: this.nextWorldEventId,
        type: 'unitMoved',
        playerId: this.playerId,
        actionPointsConsumed: 1,
        unitId,
        from: unit.location,
        to,
      },
    ]
  }

  private validateMoveUnit = (action: MoveUnitWorldAction): Unit => {
    const { unitId, to } = action
    const unit = this.worldState.findUnitById(unitId)
    if (!unit) {
      throw new Error(`No unit found with ID ${unitId}`)
    }
    const from = unit.location
    if (!from.isAdjacentTo(to)) {
      throw new Error(`Invalid unit movement between non-adjacent hexes ${from} to ${to}`)
    }
    if (!this.worldState.map.isInBounds(to)) {
      throw new Error(`Invalid unit movement to out-of-bounds hex ${to}`)
    }
    if (this.worldState.findUnitInLocation(to)) {
      throw new Error(`Invalid unit movement to already-occupied hex`)
    }
    if (unit.actionPoints.current < 1) {
      throw new Error(`Not enough action points to move`)
    }
    if (unit.playerId !== this.playerId) {
      throw new Error(`Cannot move another player's unit`)
    }
    return unit
  }
}
