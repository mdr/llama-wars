import * as R from 'ramda'
import { WorldState } from '../world/world-state'
import { AttackType, AttackWorldAction } from '../world/world-actions'
import { CombatWorldEvent, PlayerDefeatedWorldEvent, WorldEvent, WorldEventId } from '../world/world-events'
import { Unit, UnitType } from '../world/unit'
import { PlayerId } from '../world/player'
import { randomIntInclusive } from '../util/random-util'
import { Hex } from '../world/hex'
import { WorldMap } from '../world/world-map'

interface DamageDistribution {
  baseDamage: number
  plusMinus: number
}

const damageDistribution = {
  warrior: { baseDamage: 20, plusMinus: 3 },
  default: { baseDamage: 10, plusMinus: 2 },
  cria: { baseDamage: 7, plusMinus: 2 },
  none: { baseDamage: 0, plusMinus: 0 },
  spit: { baseDamage: 0, plusMinus: 0 },
}

const rollDamage = ({ baseDamage, plusMinus }: DamageDistribution): number =>
  randomIntInclusive(baseDamage - plusMinus, baseDamage + plusMinus)

export const canAttackOccur = (attackType: AttackType, map: WorldMap, from: Hex, to: Hex): boolean => {
  switch (attackType) {
    case 'melee':
      return from.isAdjacentTo(to)
    case 'spit':
      const blockedByMountains = R.all(map.isMountain, R.intersection(from.neighbours(), to.neighbours()))
      return !blockedByMountains && from.distanceTo(to) <= 2
  }
}

export class AttackWorldActionHandler {
  private readonly worldState: WorldState
  private readonly playerId: PlayerId
  private readonly nextWorldEventId: WorldEventId

  constructor(worldState: WorldState, playerId: PlayerId, nextWorldEventId: WorldEventId) {
    this.worldState = worldState
    this.playerId = playerId
    this.nextWorldEventId = nextWorldEventId
  }

  private calculateAttackerDamage = (attackType: AttackType, attacker: Unit, defender: Unit): number => {
    const attackerDamageDistribution =
      attackType === 'melee'
        ? defender.type === UnitType.CRIA
          ? damageDistribution.cria
          : damageDistribution.default
        : damageDistribution.none
    const rawAttackerDamage = rollDamage(attackerDamageDistribution)
    return Math.min(attacker.hitPoints.current, rawAttackerDamage)
  }

  private calculateDefenderDamage = (attackType: AttackType, attacker: Unit, defender: Unit): number => {
    const defenderDamageDistribution = attackType === 'melee' ? damageDistribution.warrior : damageDistribution.spit
    const rawDefenderDamage = rollDamage(defenderDamageDistribution)
    return Math.min(defender.hitPoints.current, rawDefenderDamage)
  }

  public handleAttack = (action: AttackWorldAction): WorldEvent[] => {
    const { attacker, defender } = this.validateAttack(action)
    const { attackType } = action
    const attackerDamage = this.calculateAttackerDamage(attackType, attacker, defender)
    const defenderDamage = this.calculateDefenderDamage(attackType, attacker, defender)
    return this.buildWorldEvents(attackType, attacker, attackerDamage, defender, defenderDamage)
  }

  private buildWorldEvents(
    attackType: AttackType,
    attacker: Unit,
    attackerDamage: number,
    defender: Unit,
    defenderDamage: number,
  ) {
    const combatWorldEvent = this.makeCombatWorldEvent(attackType, attacker, attackerDamage, defender, defenderDamage)
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
    const undefeatedPlayers = newWorldState.players.filter((player) => !player.defeated)
    if (R.isEmpty(undefeatedPlayers)) {
      events.push({ id: nextWorldEventId++, type: 'gameOver' })
    } else if (undefeatedPlayers.length === 1) {
      const victor = undefeatedPlayers[0].id
      events.push({ id: nextWorldEventId++, type: 'gameOver', victor })
    }
    return events
  }

  private playerDefeatedEvent = (id: WorldEventId, playerId: PlayerId): PlayerDefeatedWorldEvent => ({
    id,
    type: 'playerDefeated',
    playerId: playerId,
  })

  private validateAttack = (action: AttackWorldAction): { attacker: Unit; defender: Unit } => {
    const attackerId = action.attacker.unitId
    const attacker = this.worldState.findUnitById(attackerId)
    if (!attacker) {
      throw new Error(`No unit found with ID ${attackerId}`)
    }
    if (attacker.playerId !== this.playerId) {
      throw new Error(`Cannot control another player's unit: ${attacker.id}`)
    }
    if (attacker.actionPoints.current < 1) {
      throw new Error(`Not enough action points to attack`)
    }
    if (!attacker.location.equals(action.attacker.location)) {
      throw new Error(`Attacker not in expected location`)
    }
    if (attacker.type === UnitType.CRIA) {
      throw new Error(`Crias may not attack`)
    }

    const defenderId = action.defender.unitId
    const defender = this.worldState.findUnitById(defenderId)
    if (!defender) {
      throw new Error(`No unit found with ID ${defenderId}`)
    }
    if (defender.playerId === this.playerId) {
      throw new Error(`Cannot attack own unit`)
    }
    if (!defender.location.equals(action.defender.location)) {
      throw new Error(`Defender not in expected location`)
    }

    if (!canAttackOccur(action.attackType, this.worldState.map, attacker.location, defender.location)) {
      throw new Error(
        `Invalid unit attack of type ${action.attackType} between hexes ${attacker.location} to ${defender.location} too far apart`,
      )
    }
    return { attacker, defender }
  }

  private makeCombatWorldEvent = (
    attackType: AttackType,
    attacker: Unit,
    attackerDamage: number,
    defender: Unit,
    defenderDamage: number,
  ): CombatWorldEvent => ({
    id: this.nextWorldEventId,
    type: 'combat',
    attackType,
    attacker: {
      playerId: attacker.playerId,
      unitId: attacker.id,
      location: attacker.location,
      damage: attackerDamage,
      killed: attacker.hitPoints.current === attackerDamage,
    },
    defender: {
      playerId: defender.playerId,
      unitId: defender.id,
      location: defender.location,
      damage: defenderDamage,
      killed: defender.hitPoints.current === defenderDamage,
    },
    actionPointsConsumed: 1,
  })
}
