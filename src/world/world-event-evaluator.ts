import { WorldState } from './world-state'
import {
  CombatWorldEvent,
  PlayerEndedTurnWorldEvent,
  UnitMovedWorldEvent,
  WorldEvent,
} from './world-events'
import { UnreachableCaseError } from '../util/unreachable-case-error'

export const applyEvent = (state: WorldState, event: WorldEvent): WorldState => {
  switch (event.type) {
    case 'unitMoved':
      return handleUnitMoved(state, event)
    case 'combat':
      return handleCombat(state, event)
    case 'playerEndedTurn':
      return handlePlayerEndedTurn(state, event)
    case 'newTurn':
      return handleNewTurn(state)
    default:
      throw new UnreachableCaseError(event)
  }
}

const handleUnitMoved = (state: WorldState, event: UnitMovedWorldEvent): WorldState => {
  const { unitId, playerId, from, to } = event
  if (!from.isAdjacentTo(to))
    throw `Invalid unit movement between non-adjacent hexes ${from} to ${to}`
  if (!state.map.isInBounds(to))
    throw `Invalid unit movement to out-of-bounds hex ${to}`
  const unit = state.findUnitById(unitId)
  if (!unit)
    throw `No unit found with ID ${unitId}`
  if (state.findUnitInLocation(from)?.id != unitId)
    throw `Invalid from location for unit movement`
  if (state.findUnitInLocation(to))
    throw `Invalid unit movement to already-occupied hex`
  if (unit.playerId != playerId)
    throw `Invalid attempt to move unit of another player`
  if (unit.actionPoints.current < event.actionPointsConsumed)
    throw `Invalid action point usage`
  return state.replaceUnit(unit.id, unit.move(to, event.actionPointsConsumed))
}

const handleCombat = (state: WorldState, event: CombatWorldEvent): WorldState => {
  const { attacker, defender } = event

  const attackerUnit = state.findUnitById(attacker.unitId)
  if (!attackerUnit)
    throw `No unit found with ID ${attacker.unitId}`
  if (attackerUnit.location != attacker.location)
    throw `Invalid location for attacker`

  const defenderUnit = state.findUnitById(defender.unitId)
  if (!defenderUnit)
    throw `No unit found with ID ${defender.unitId}`
  if (defenderUnit.location != defender.location)
    throw `Invalid location for defender`

  if (attackerUnit.playerId == defenderUnit.playerId)
    throw `Invalid combat with self`
  if (!attacker.location.isAdjacentTo(defender.location))
    throw `Invalid combat between non-adjacent hexes ${attacker.location} to ${defender.location}`
  if (attackerUnit.actionPoints.current < event.actionPointsConsumed)
    throw `Invalid action point usage`

  let newState = state

  if (attacker.killed)
    newState = newState.removeUnit(attackerUnit.id)
  else
    newState = newState.replaceUnit(attackerUnit.id, attackerUnit.damage(attacker.damage).reduceActionPoints(event.actionPointsConsumed))

  if (defender.killed)
    newState = newState.removeUnit(defenderUnit.id)
  else
    newState = newState.replaceUnit(defenderUnit.id, defenderUnit.damage(defender.damage))

  return newState
}

const handlePlayerEndedTurn = (state: WorldState, event: PlayerEndedTurnWorldEvent): WorldState => {
  const { playerId } = event
  const player = state.findPlayer(playerId)
  if (!player)
    throw `No player found with ID ${playerId}`
  return state.replacePlayer(playerId, player.copy({ endedTurn: true }))
}

const handleNewTurn = (state: WorldState): WorldState =>
  state.copy({
    turn: state.turn + 1,
    units: state.units.map(unit => unit.refreshActionPoints()),
    players: state.players.map(player => player.copy({ endedTurn: false })),
  })
