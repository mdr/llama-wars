import { UnitOrBuilding, WorldState } from '../world-state'
import { CombatWorldEvent } from './world-events'
import { Unit } from '../unit'
import { canAttackOccur } from '../../server/handlers/attack-world-action-validator'

export const handleCombat = (state: WorldState, event: CombatWorldEvent): WorldState => {
  const { attacker, defender } = event
  const { attackerUnit, defenderUnitOrBuilding } = validateCombat(state, event)

  let newState = state

  if (attacker.killed) {
    newState = newState.removeUnitOrBuilding(attackerUnit.id)
  } else {
    const updatedAttacker = attackerUnit.damage(attacker.damageTaken).reduceActionPoints(event.actionPointsConsumed)
    newState = newState.replaceUnitOrBuilding(attackerUnit.id, updatedAttacker)
  }

  if (defender.killed) {
    newState = newState.removeUnitOrBuilding(defenderUnitOrBuilding.id)
  } else {
    const updatedDefender = defenderUnitOrBuilding.damage(defender.damageTaken)
    newState = newState.replaceUnitOrBuilding(defenderUnitOrBuilding.id, updatedDefender)
  }

  const log = constructCombatLog(state, event, attackerUnit, defenderUnitOrBuilding)
  newState = newState.addWorldLog(log)

  return newState
}

const validateCombat = (
  state: WorldState,
  event: CombatWorldEvent,
): { attackerUnit: Unit; defenderUnitOrBuilding: UnitOrBuilding } => {
  const { attacker, defender } = event

  const attackerUnit = state.findUnitById(attacker.unitOrBuildingId)
  if (!attackerUnit) throw new Error(`No unit found with ID ${attacker.unitOrBuildingId}`)
  if (!attackerUnit.location.equals(attacker.location))
    throw new Error(
      `Invalid location for attacker. Attacking unit ${attackerUnit.id} is at location ${attackerUnit.location}, but was expected to be at ${attacker.location}`,
    )

  const defenderUnitOrBuilding = state.findUnitOrBuildingById(defender.unitOrBuildingId)
  if (!defenderUnitOrBuilding) throw new Error(`No unit found with ID ${defender.unitOrBuildingId}`)
  if (!defenderUnitOrBuilding.location.equals(defender.location))
    throw new Error(
      `Invalid location for defender. Defending unit or building ${defenderUnitOrBuilding.id} is at location ${defenderUnitOrBuilding.location}, but was expected to be at ${defender.location}`,
    )

  if (attackerUnit.playerId === defenderUnitOrBuilding.playerId) throw new Error(`Invalid combat with self`)
  if (!canAttackOccur(event.attackType, state.map, attacker.location, defender.location))
    throw new Error(
      `Invalid combat of type ${event.attackType} between hexes ${attacker.location} to ${defender.location}`,
    )
  if (attackerUnit.actionPoints.current < event.actionPointsConsumed) throw new Error(`Invalid action point usage`)
  return { attackerUnit, defenderUnitOrBuilding }
}

const constructCombatLog = (
  state: WorldState,
  event: CombatWorldEvent,
  attackerUnit: Unit,
  defenderUnitOrBuilding: UnitOrBuilding,
): string => {
  const { attacker, defender } = event
  const defenderPlayerName = state.getPlayer(defenderUnitOrBuilding.playerId).name
  const defenderName =
    defenderUnitOrBuilding instanceof Unit ? defenderUnitOrBuilding.name : `${defenderPlayerName}'s castle`
  if (defender.killed) {
    if (attacker.killed) {
      return `${defenderName} was taken out in a suicide attack by ${attackerUnit.name}.`
    } else {
      switch (defender.entityType) {
        case 'unit':
          return `${defenderName} was brutally murdered by ${attackerUnit.name}.`
        case 'building':
          return `${defenderName} was destroyed by ${attackerUnit.name}.`
      }
    }
  } else if (attacker.killed) {
    return `${attackerUnit.name} died in a futile attempt to take on ${attackerUnit.name}.`
  } else {
    const verb = event.attackType === 'melee' ? 'attacked' : 'spat at'
    const takingDamageClause = attacker.damageTaken === 0 ? '' : ` and taking ${attacker.damageTaken} damage`
    return `${attackerUnit.name} ${verb} ${defenderName}, causing ${defender.damageTaken} damage${takingDamageClause}.`
  }
}
