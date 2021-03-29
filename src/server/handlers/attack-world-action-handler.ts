import { WorldState } from '../../world/world-state'
import { AttackType, AttackWorldAction } from '../../world/world-actions'
import { WorldEvent, WorldEventId } from '../../world/world-events'
import { Unit, UnitType } from '../../world/unit'
import { PlayerId } from '../../world/player'
import { damageDistribution, rollFromDistribution } from '../DamageDistribution'
import { AttackWorldActionValidator, CombatParticipants } from './attack-world-action-validator'
import { AttackWorldEventCalculator, CombatInfo } from './attack-world-event-calculator'

export class AttackWorldActionHandler {
  private readonly worldState: WorldState
  private readonly playerId: PlayerId
  private readonly nextWorldEventId: WorldEventId

  constructor(worldState: WorldState, playerId: PlayerId, nextWorldEventId: WorldEventId) {
    this.worldState = worldState
    this.playerId = playerId
    this.nextWorldEventId = nextWorldEventId
  }

  public handleAttack = (action: AttackWorldAction): WorldEvent[] => {
    const { attacker, defender } = this.validateAttack(action)
    const { attackType } = action
    const attackerDamageTaken = this.calculateDamageTakenByAttacker(attackType, attacker, defender)
    const defenderDamageTaken = this.calculateDamageTakenByDefender(attackType, attacker, defender)
    const combatInfo = { attackType, attacker, attackerDamageTaken, defender, defenderDamageTaken }
    return this.calculateWorldEvents(combatInfo)
  }

  private validateAttack = (action: AttackWorldAction): CombatParticipants =>
    new AttackWorldActionValidator(this.worldState, this.playerId).validateAttack(action)

  private calculateDamageTakenByAttacker = (attackType: AttackType, attacker: Unit, defender: Unit): number => {
    const distribution =
      attackType === 'melee'
        ? defender.type === UnitType.CRIA
          ? damageDistribution.cria
          : damageDistribution.default
        : damageDistribution.none
    const rawDamageTaken = rollFromDistribution(distribution)
    return Math.min(attacker.hitPoints.current, rawDamageTaken)
  }

  private calculateDamageTakenByDefender = (attackType: AttackType, attacker: Unit, defender: Unit): number => {
    const distribution = attackType === 'melee' ? damageDistribution.warrior : damageDistribution.spit
    const rawDefenderDamage = rollFromDistribution(distribution)
    return Math.min(defender.hitPoints.current, rawDefenderDamage)
  }

  private calculateWorldEvents = (combatInfo: CombatInfo): WorldEvent[] =>
    new AttackWorldEventCalculator(this.worldState, this.nextWorldEventId).buildWorldEvents(combatInfo)
}
