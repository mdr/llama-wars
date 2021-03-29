import { WorldState } from '../../world/world-state'
import { AttackType, AttackWorldAction } from '../../world/world-actions'
import { Unit, UnitType } from '../../world/unit'
import { PlayerId } from '../../world/player'
import { WorldMap } from '../../world/world-map'
import { Hex } from '../../world/hex'
import * as R from 'ramda'

export const canAttackOccur = (attackType: AttackType, map: WorldMap, from: Hex, to: Hex): boolean => {
  switch (attackType) {
    case 'melee':
      return from.isAdjacentTo(to)
    case 'spit':
      const blockedByMountains = R.all(map.isMountain, R.intersection(from.neighbours(), to.neighbours()))
      return !blockedByMountains && from.distanceTo(to) <= 2
  }
}

export interface CombatParticipants {
  attacker: Unit
  defender: Unit
}

export class AttackWorldActionValidator {
  private readonly worldState: WorldState
  private readonly playerId: PlayerId

  constructor(worldState: WorldState, playerId: PlayerId) {
    this.worldState = worldState
    this.playerId = playerId
  }

  public validateAttack = (action: AttackWorldAction): CombatParticipants => {
    const attacker = this.validateAttacker(action)
    const defender = this.validateDefender(action)
    if (!canAttackOccur(action.attackType, this.worldState.map, attacker.location, defender.location)) {
      throw new Error(
        `Invalid unit attack of type ${action.attackType} between hexes ${attacker.location} to ${defender.location} too far apart`,
      )
    }
    return { attacker, defender }
  }

  private validateDefender(action: AttackWorldAction) {
    const defenderId = action.defender.id
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
    return defender
  }

  private validateAttacker(action: AttackWorldAction) {
    const attackerId = action.attacker.id
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
    return attacker
  }
}
