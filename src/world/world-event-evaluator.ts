import {  WorldState } from './world-state'
import { CombatWorldEvent, UnitMovedWorldEvent, WorldEvent } from './world-events'

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

  const attackerUnit = state.findUnitById(attacker.unitId)
  if (!attackerUnit) {
    throw `No unit found with ID ${attacker.unitId}`
  }
  if (attackerUnit.location != attacker.location) {
    throw `Invalid location for attacker`
  }

  const defenderUnit = state.findUnitById(defender.unitId)
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
  return state
    .replaceUnit(attackerUnit.id, attackerUnit.damage(attacker.damage))
    .replaceUnit(defenderUnit.id, defenderUnit.damage(defender.damage))
}

const handleUnitMoved = (state: WorldState, event: UnitMovedWorldEvent): WorldState => {
  const { unitId, playerId, from, to } = event
  if (!from.isAdjacentTo(to)) {
    throw `Invalid unit movement between non-adjacent hexes ${from} to ${to}`
  }
  if (!state.map.isInBounds(to)) {
    throw `Invalid unit movement to out-of-bounds hex ${to}`
  }
  const unit = state.findUnitById(unitId)
  if (!unit) {
    throw `No unit found with ID ${unitId}`
  }
  if (state.findUnitInLocation(from)?.id != unitId) {
    throw `Invalid from location for unit movement`
  }
  if (state.findUnitInLocation(to)) {
    throw `Invalid unit movement to already-occupied hex`
  }
  if (unit.playerId != playerId) {
    throw `Invalid attempt to move unit of another player`
  }
  return state.replaceUnit(unit.id, unit.copy({ location: to }))
}
