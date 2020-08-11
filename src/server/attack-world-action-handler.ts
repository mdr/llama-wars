import { WorldState } from '../world/world-state'
import { AttackWorldAction } from '../world/world-actions'
import { CombatWorldEvent } from '../world/world-events'
import { Unit } from '../world/unit'
import { PlayerId } from '../world/player'
import { randomIntInclusive } from '../util/random-util'

export class AttackWorldActionHandler {
  private readonly worldState: WorldState
  private readonly playerId: PlayerId
  private readonly nextWorldEventId: number

  constructor(worldState: WorldState, playerId: PlayerId, nextWorldEventId: number) {
    this.worldState = worldState
    this.playerId = playerId
    this.nextWorldEventId = nextWorldEventId
  }

  public handleAttack = (action: AttackWorldAction): CombatWorldEvent => {
    const { attacker, defender } = this.validateAttack(action)
    const attackerDamage = Math.min(attacker.hitPoints.current, 10) + randomIntInclusive(-2, 2)
    const defenderDamage = Math.min(defender.hitPoints.current, 20) + randomIntInclusive(-3, 3)
    return this.makeCombatWorldEvent(attacker, attackerDamage, defender, defenderDamage)
  }

  private validateAttack = (action: AttackWorldAction): { attacker: Unit; defender: Unit } => {
    const attackerId = action.attacker.unitId
    const attacker = this.worldState.findUnitById(attackerId)
    if (!attacker) throw `No unit found with ID ${attackerId}`
    if (attacker.playerId != this.playerId) throw `Cannot control another player's unit: ${attacker.id}`
    if (attacker.actionPoints.current < 1) throw `Not enough action points to attack`
    if (!attacker.location.equals(action.attacker.location)) throw `Attacker not in expected location`

    const defenderId = action.defender.unitId
    const defender = this.worldState.findUnitById(defenderId)
    if (!defender) throw `No unit found with ID ${defenderId}`
    if (defender.playerId == this.playerId) throw `Cannot attack own unit`
    if (!defender.location.equals(action.defender.location)) throw `Defender not in expected location`

    if (!attacker.location.isAdjacentTo(defender.location))
      throw `Invalid unit attack between non-adjacent hexes ${attacker.location} to ${defender.location}`
    return { attacker, defender }
  }

  private makeCombatWorldEvent = (
    attacker: Unit,
    attackerDamage: number,
    defender: Unit,
    defenderDamage: number,
  ): CombatWorldEvent => ({
    id: this.nextWorldEventId,
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
}
