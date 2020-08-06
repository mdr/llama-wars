import { INITIAL_WORLD_STATE, PlayerId, WorldState } from '../world/world-state'
import { AttackWorldAction, MoveUnitWorldAction, WorldAction } from '../world/world-actions'
import { applyEvent } from '../world/world-event-evaluator'
import { CombatWorldEvent, UnitMovedWorldEvent, WorldEvent } from '../world/world-events'
import * as R from 'ramda'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { Unit } from '../world/unit'

export type WorldEventListener = (event: WorldEvent) => void

export class Server {
  private worldState: WorldState = INITIAL_WORLD_STATE
  private listeners: WorldEventListener[] = []

  public addListener = (listener: WorldEventListener) => this.listeners.push(listener)

  private notifyListeners = (event: WorldEvent): void => {
    for (const listener of this.listeners)
      listener(event)
  }

  public handleAction = (playerId: PlayerId, action: WorldAction): void => {
    switch (action.type) {
      case 'attack':
        this.handleAttack(playerId, action)
        break
      case 'moveUnit':
        this.handleMoveUnit(playerId, action)
        break
      case 'endTurn':
        this.handleEndTurn(playerId)
        break
      default:
        throw new UnreachableCaseError(action)
    }
  }

  private handleAttack = (playerId: PlayerId, action: AttackWorldAction) => {
    const attackerId = action.attacker.unitId
    const attacker = this.worldState.findUnitById(attackerId)
    if (!attacker)
      throw `No unit found with ID ${attackerId}`
    if (attacker.playerId != playerId)
      throw `Cannot control another player's unit: ${attacker.id}`
    if (attacker.actionPoints.current < 1)
      throw `Not enough action points to attack`
    if (!attacker.location.equals(action.attacker.location))
      throw `Attacker not in expected location`

    const defenderId = action.defender.unitId
    const defender = this.worldState.findUnitById(defenderId)
    if (!defender)
      throw `No unit found with ID ${defenderId}`
    if (defender.playerId == playerId)
      throw `Cannot attack own unit`
    if (!defender.location.equals(action.defender.location))
      throw `Defender not in expected location`

    if (!attacker.location.isAdjacentTo(defender.location))
      throw `Invalid unit attack between non-adjacent hexes ${attacker.location} to ${defender.location}`

    const attackerDamage = Math.min(attacker.hitPoints.current, 10)
    const defenderDamage = Math.min(defender.hitPoints.current, 20)
    const event = this.makeCombatWorldEvent(attacker, attackerDamage, defender, defenderDamage)
    this.worldState = applyEvent(this.worldState, event)
    this.notifyListeners(event)
  }

  private makeCombatWorldEvent = (attacker: Unit, attackerDamage: number, defender: Unit, defenderDamage: number): CombatWorldEvent => ({
    type: 'combat',
    attacker: {
      playerId: attacker.playerId,
      unitId: attacker.id,
      location: attacker.location,
      damage: attackerDamage,
      killed: attacker.hitPoints.current == attackerDamage,
    },
    defender: {
      playerId: defender.playerId,
      unitId: defender.id,
      location: defender.location,
      damage: defenderDamage,
      killed: defender.hitPoints.current == defenderDamage,
    },
    actionPointsConsumed: 1,
  })

  private handleMoveUnit = (playerId: PlayerId, action: MoveUnitWorldAction) => {
    const { unitId, to } = action
    const unit = this.worldState.findUnitById(unitId)
    if (!unit)
      throw `No unit found with ID ${unitId}`
    const from = unit.location
    if (!from.isAdjacentTo(to))
      throw `Invalid unit movement between non-adjacent hexes ${from} to ${to}`
    if (!this.worldState.map.isInBounds(to))
      throw `Invalid unit movement to out-of-bounds hex ${to}`
    if (this.worldState.findUnitInLocation(to))
      throw `Invalid unit movement to already-occupied hex`
    if (unit.actionPoints.current < 1)
      throw `Not enough action points to move`
    const event: UnitMovedWorldEvent = {
      type: 'unitMoved',
      playerId: playerId,
      actionPointsConsumed: 1,
      unitId,
      from,
      to,
    }
    this.worldState = applyEvent(this.worldState, event)
    this.notifyListeners(event)
  }

  private handleEndTurn(playerId: PlayerId): void {
    const player = this.worldState.findPlayer(playerId)
    if (!player)
      throw `No player with ID ${playerId}`
    if (player.endedTurn)
      throw `Player has already ended their turn`
    let playersYetToEndTheirTurn = this.worldState.players.filter(player => !player.endedTurn).map(player => player.id)
    let wholeTurnEnded = R.equals(playersYetToEndTheirTurn, [playerId])
    const event: WorldEvent = wholeTurnEnded ? { type: 'newTurn' } : { type: 'playerEndedTurn', playerId }
    this.worldState = applyEvent(this.worldState, event)
    this.notifyListeners(event)
  }
}