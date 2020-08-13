import * as R from 'ramda'
import { WorldState } from '../world/world-state'
import { AttackType, AttackWorldAction } from '../world/world-actions'
import { CombatWorldEvent, PlayerDefeatedWorldEvent, WorldEvent, WorldEventId } from '../world/world-events'
import { Unit } from '../world/unit'
import { PlayerId } from '../world/player'
import { randomIntInclusive } from '../util/random-util'
import { Hex } from '../world/hex'

export const canAttackOccur = (attackType: AttackType, from: Hex, to: Hex): boolean => {
  switch (attackType) {
    case 'melee':
      return from.isAdjacentTo(to)
    case 'spit':
      return from.distanceTo(to) <= 2
  }
}

export class AttackWorldActionHandler {
  private readonly worldState: WorldState
  private readonly playerId: PlayerId
  private readonly nextWorldEventId: number

  constructor(worldState: WorldState, playerId: PlayerId, nextWorldEventId: number) {
    this.worldState = worldState
    this.playerId = playerId
    this.nextWorldEventId = nextWorldEventId
  }

  public handleAttack = (action: AttackWorldAction): WorldEvent[] => {
    const { attacker, defender } = this.validateAttack(action)
    const { attackType } = action
    const rawAttackerDamage = attackType === 'melee' ? randomIntInclusive(8, 12) : 0
    const rawDefenderDamage = attackType === 'melee' ? randomIntInclusive(17, 23) : randomIntInclusive(4, 6)
    const attackerDamage = Math.min(attacker.hitPoints.current, rawAttackerDamage)
    const defenderDamage = Math.min(defender.hitPoints.current, rawDefenderDamage)
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
    } else if (undefeatedPlayers.length == 1) {
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
    if (!attacker) throw `No unit found with ID ${attackerId}`
    if (attacker.playerId != this.playerId) throw `Cannot control another player's unit: ${attacker.id}`
    if (attacker.actionPoints.current < 1) throw `Not enough action points to attack`
    if (!attacker.location.equals(action.attacker.location)) throw `Attacker not in expected location`

    const defenderId = action.defender.unitId
    const defender = this.worldState.findUnitById(defenderId)
    if (!defender) throw `No unit found with ID ${defenderId}`
    if (defender.playerId == this.playerId) throw `Cannot attack own unit`
    if (!defender.location.equals(action.defender.location)) throw `Defender not in expected location`

    if (!canAttackOccur(action.attackType, attacker.location, defender.location))
      throw `Invalid unit attack of type ${action.attackType} between hexes ${attacker.location} to ${defender.location} too far apart`
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
