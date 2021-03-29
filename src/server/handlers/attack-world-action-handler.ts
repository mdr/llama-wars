import * as R from 'ramda'
import { WorldState } from '../../world/world-state'
import { AttackType, AttackWorldAction } from '../../world/world-actions'
import { CombatWorldEvent, PlayerDefeatedWorldEvent, WorldEvent, WorldEventId } from '../../world/world-events'
import { Unit, UnitType } from '../../world/unit'
import { PlayerId } from '../../world/player'
import { damageDistribution, rollFromDistribution } from '../DamageDistribution'
import { AttackWorldActionValidator, CombatParticipants } from './attack-world-action-validator'
import { Option } from '../../util/types'

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
    return this.buildWorldEvents(attackType, attacker, attackerDamageTaken, defender, defenderDamageTaken)
  }

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
  private validateAttack = (action: AttackWorldAction): CombatParticipants =>
    new AttackWorldActionValidator(this.worldState, this.playerId).validateAttack(action)

  private buildWorldEvents(
    attackType: AttackType,
    attacker: Unit,
    attackerDamageTaken: number,
    defender: Unit,
    defenderDamageTaken: number,
  ) {
    const combatWorldEvent = this.makeCombatWorldEvent(
      attackType,
      attacker,
      attackerDamageTaken,
      defender,
      defenderDamageTaken,
    )
    let newWorldState = this.worldState.applyEvent(combatWorldEvent)
    const events: WorldEvent[] = [combatWorldEvent]
    let nextWorldEventId = this.nextWorldEventId + 1
    if (newWorldState.isPlayerDefeated(defender.playerId)) {
      const event = this.playerDefeatedEvent(nextWorldEventId++, defender.playerId)
      events.push(event)
      newWorldState = newWorldState.applyEvent(event)
    }
    if (newWorldState.isPlayerDefeated(attacker.playerId)) {
      const event = this.playerDefeatedEvent(nextWorldEventId++, attacker.playerId)
      events.push(event)
      newWorldState = newWorldState.applyEvent(event)
    }
    const gameOverEvent = this.getGameOverEvent(newWorldState, nextWorldEventId)
    if (gameOverEvent) {
      events.push(gameOverEvent)
    }
    return events
  }

  private getGameOverEvent = (worldState: WorldState, nextWorldEventId: WorldEventId): Option<WorldEvent> => {
    const undefeatedPlayers = worldState.players.filter((player) => !player.defeated)
    if (R.isEmpty(undefeatedPlayers)) {
      return { id: nextWorldEventId, type: 'gameOver' }
    } else if (undefeatedPlayers.length === 1) {
      const victor = undefeatedPlayers[0].id
      return { id: nextWorldEventId, type: 'gameOver', victor }
    }
  }

  private playerDefeatedEvent = (id: WorldEventId, playerId: PlayerId): PlayerDefeatedWorldEvent => ({
    id,
    type: 'playerDefeated',
    playerId: playerId,
  })

  private makeCombatWorldEvent = (
    attackType: AttackType,
    attacker: Unit,
    attackerDamageTaken: number,
    defender: Unit,
    defenderDamageTaken: number,
  ): CombatWorldEvent => ({
    id: this.nextWorldEventId,
    type: 'combat',
    attackType,
    attacker: {
      playerId: attacker.playerId,
      unitId: attacker.id,
      location: attacker.location,
      damageTaken: attackerDamageTaken,
      killed: attacker.hitPoints.current === attackerDamageTaken,
    },
    defender: {
      playerId: defender.playerId,
      unitId: defender.id,
      location: defender.location,
      damageTaken: defenderDamageTaken,
      killed: defender.hitPoints.current === defenderDamageTaken,
    },
    actionPointsConsumed: 1,
  })
}
