import { UnitOrBuilding, WorldState } from '../../world/world-state'
import { AttackType, AttackWorldAction } from '../../world/world-actions'
import { WorldEvent, WorldEventId } from '../../world/events/world-events'
import { Unit, UnitType } from '../../world/unit'
import { PlayerId } from '../../world/player'
import { DamageDistribution, damageDistribution, rollFromDistribution } from '../damage-distribution'
import { AttackWorldActionValidator, CombatParticipants } from './attack-world-action-validator'
import { AttackWorldEventCalculator, CombatInfo } from './attack-world-event-calculator'
import { BuildingType } from '../../world/building'

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

  private calculateDamageTakenByAttacker = (
    attackType: AttackType,
    attacker: Unit,
    defender: UnitOrBuilding,
  ): number => {
    const distribution = this.getAttackerDamageDistribution(attackType, defender)
    const rawDamageTaken = rollFromDistribution(distribution)
    return Math.min(attacker.hitPoints.current, rawDamageTaken)
  }

  private getAttackerDamageDistribution = (attackType: AttackType, defender: UnitOrBuilding): DamageDistribution => {
    switch (attackType) {
      case 'spit':
        return damageDistribution.none
      case 'melee':
        switch (defender.type) {
          case UnitType.CRIA:
            return damageDistribution.cria
          case UnitType.WARRIOR:
            return damageDistribution.default
          case BuildingType.CASTLE:
            return damageDistribution.default
        }
    }
  }

  private calculateDamageTakenByDefender = (
    attackType: AttackType,
    attacker: Unit,
    defender: UnitOrBuilding,
  ): number => {
    const distribution = this.getDefenderDamageDistribution(attackType)
    const rawDefenderDamage = rollFromDistribution(distribution)
    return Math.min(defender.hitPoints.current, rawDefenderDamage)
  }

  private getDefenderDamageDistribution = (attackType: AttackType): DamageDistribution => {
    switch (attackType) {
      case 'spit':
        return damageDistribution.spit
      case 'melee':
        return damageDistribution.warrior
    }
  }

  private calculateWorldEvents = (combatInfo: CombatInfo): WorldEvent[] =>
    new AttackWorldEventCalculator(this.worldState, this.nextWorldEventId).buildWorldEvents(combatInfo)
}
