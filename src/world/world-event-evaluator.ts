import { findUnitById, findUnitInLocation, Unit, WorldState } from './world-state'
import { CombatWorldEvent, UnitMovedWorldEvent, WorldEvent } from './world-events'
import * as R from 'ramda'

export const applyEvent = (state: WorldState, event: WorldEvent): WorldState => {
  switch (event.type) {
    case 'combat':
      return handleCombat(state, event)
    case 'unitMoved':
      return handleUnitMoved(state, event)
  }
}

const handleCombat = (state: WorldState, event: CombatWorldEvent): WorldState => {
  const { attacker, defender } = event

  const attackerUnit = findUnitById(attacker.unitId, state)
  if (!attackerUnit) {
    throw `No unit found with ID ${attacker.unitId}`
  }
  if (attackerUnit.location != attacker.location) {
    throw `Invalid location for attacker`
  }

  const defenderUnit = findUnitById(defender.unitId, state)
  if (!defenderUnit) {
    throw `No unit found with ID ${defender.unitId}`
  }
  if (defenderUnit.location != defender.location) {
    throw `Invalid location for defender`
  }

  if (attackerUnit.playerId == defenderUnit.playerId) {
    throw `Invalid combat with self`
  }
  if (!attacker.location.isAdjacentTo(defender.location)) {
    throw `Invalid combat between non-adjacent hexes ${attacker.location} to ${defender.location}`
  }

  const updatedAttackerUnit: Unit = attackerUnit.damage(attacker.damage)
  const updatedDefenderUnit: Unit = defenderUnit.damage(defender.damage)
  const filteredUnits = R.filter((unit) => unit.id != attacker.unitId && unit.id != defender.unitId, state.units)
  const updatedUnits = R.append(updatedDefenderUnit, R.append(updatedAttackerUnit, filteredUnits))
  return { ...state, units: updatedUnits }
}

const handleUnitMoved = (state: WorldState, event: UnitMovedWorldEvent): WorldState => {
  const { unitId, playerId, from, to } = event
  if (!from.isAdjacentTo(to)) {
    throw `Invalid unit movement between non-adjacent hexes ${from} to ${to}`
  }
  if (!state.map.isInBounds(to)) {
    throw `Invalid unit movement to out-of-bounds hex ${to}`
  }
  const unit = findUnitById(unitId, state)
  if (!unit) {
    throw `No unit found with ID ${unitId}`
  }
  if (findUnitInLocation(from, state)?.id != unitId) {
    throw `Invalid from location for unit movement`
  }
  if (findUnitInLocation(to, state)) {
    throw `Invalid unit movement to already-occupied hex`
  }
  if (unit.playerId != playerId) {
    throw `Invalid attempt to move unit of another player`
  }
  const updatedUnit: Unit = unit.copy({ location: to })
  const updatedUnits = R.append(updatedUnit, R.filter((unit) => unit.id != unitId, state.units))
  return { ...state, units: updatedUnits }
}
