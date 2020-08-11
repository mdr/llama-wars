import * as R from 'ramda'
import { WorldState } from './world-state'
import {
  CombatWorldEvent,
  GameStartedWorldEvent,
  InitialiseWorldEvent,
  PlayerAddedWorldEvent,
  PlayerChangedNameWorldEvent,
  PlayerDefeatedWorldEvent,
  PlayerEndedTurnWorldEvent,
  UnitMovedWorldEvent,
  WorldEvent,
} from './world-events'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { Player, PlayerId } from './player'

export const applyEvent = (state: WorldState, event: WorldEvent): WorldState => {
  switch (event.type) {
    case 'initialise':
      return handleInitialise(event)
    case 'playerAdded':
      return handlePlayerAdded(state, event)
    case 'playerChangedName':
      return handlePlayerChangedName(state, event)
    case 'gameStarted':
      return handleGameStarted(state, event)
    case 'unitMoved':
      return handleUnitMoved(state, event)
    case 'combat':
      return handleCombat(state, event)
    case 'playerEndedTurn':
      return handlePlayerEndedTurn(state, event)
    case 'playerDefeated':
      return handlePlayerDefeated(state, event)
    case 'newTurn':
      return handleNewTurn(state)
    default:
      throw new UnreachableCaseError(event)
  }
}

const handleInitialise = (event: InitialiseWorldEvent): WorldState => {
  if (event.id > 0) {
    throw `Initialise must be the first event`
  }
  return event.state
}

const handlePlayerAdded = (state: WorldState, event: PlayerAddedWorldEvent): WorldState => {
  if (R.any((player) => player.id == event.playerId, state.players)) {
    throw `Player ID already in use`
  }
  const { playerId } = event
  const player = new Player({ id: playerId, name: `Player ${playerId}` })
  return state.addPlayer(player)
}

const handlePlayerChangedName = (state: WorldState, event: PlayerChangedNameWorldEvent): WorldState => {
  const { playerId, name } = event
  validatePlayerId(state, playerId)
  return state.updatePlayer(playerId, (player) => player.copy({ name }))
}

const validatePlayerId = (state: WorldState, playerId: PlayerId): void => {
  const player = state.findPlayer(playerId)
  if (!player) throw `No player found with ID ${playerId}`
}

const handleGameStarted = (state: WorldState, event: GameStartedWorldEvent): WorldState => {
  if (state.gameHasStarted) {
    throw `Game already started`
  }
  return state.copy({ turn: 1, units: event.units })
}

const handleUnitMoved = (state: WorldState, event: UnitMovedWorldEvent): WorldState => {
  const { unitId, playerId, from, to } = event
  if (!from.isAdjacentTo(to)) throw `Invalid unit movement between non-adjacent hexes ${from} to ${to}`
  if (!state.map.isInBounds(to)) throw `Invalid unit movement to out-of-bounds hex ${to}`
  const unit = state.findUnitById(unitId)
  if (!unit) throw `No unit found with ID ${unitId}`
  const fromUnit = state.findUnitInLocation(from)
  if (fromUnit?.id != unitId) {
    throw `Invalid from location for unit movement. Unit at ${from} is ${fromUnit?.id}, but was expected to be ${unitId}`
  }
  const toUnit = state.findUnitInLocation(to)
  if (toUnit) throw `Invalid unit movement to already-occupied hex`
  if (unit.playerId != playerId) throw `Invalid attempt to move unit of another player`
  if (unit.actionPoints.current < event.actionPointsConsumed) throw `Invalid action point usage`
  return state.replaceUnit(unit.id, unit.move(to, event.actionPointsConsumed))
}

const handleCombat = (state: WorldState, event: CombatWorldEvent): WorldState => {
  const { attacker, defender } = event

  const attackerUnit = state.findUnitById(attacker.unitId)
  if (!attackerUnit) throw `No unit found with ID ${attacker.unitId}`
  if (!attackerUnit.location.equals(attacker.location))
    throw `Invalid location for attacker. Attacking unit ${attackerUnit.id} is at location ${attackerUnit.location}, but was expected to be at ${attacker.location}`

  const defenderUnit = state.findUnitById(defender.unitId)
  if (!defenderUnit) throw `No unit found with ID ${defender.unitId}`
  if (!defenderUnit.location.equals(defender.location))
    throw `Invalid location for defender. Defending unit ${defenderUnit.id} is at location ${defenderUnit.location}, but was expected to be at ${defender.location}`

  if (attackerUnit.playerId == defenderUnit.playerId) throw `Invalid combat with self`
  if (!attacker.location.isAdjacentTo(defender.location))
    throw `Invalid combat between non-adjacent hexes ${attacker.location} to ${defender.location}`
  if (attackerUnit.actionPoints.current < event.actionPointsConsumed) throw `Invalid action point usage`

  let newState = state

  if (attacker.killed) newState = newState.removeUnit(attackerUnit.id)
  else
    newState = newState.replaceUnit(
      attackerUnit.id,
      attackerUnit.damage(attacker.damage).reduceActionPoints(event.actionPointsConsumed),
    )

  if (defender.killed) newState = newState.removeUnit(defenderUnit.id)
  else newState = newState.replaceUnit(defenderUnit.id, defenderUnit.damage(defender.damage))

  return newState
}

const handlePlayerEndedTurn = (state: WorldState, event: PlayerEndedTurnWorldEvent): WorldState => {
  const { playerId } = event
  validatePlayerId(state, playerId)
  return state.updatePlayer(playerId, (player) => player.copy({ endedTurn: true }))
}

const handlePlayerDefeated = (state: WorldState, event: PlayerDefeatedWorldEvent): WorldState => {
  const { playerId } = event
  validatePlayerId(state, playerId)
  return state.updatePlayer(playerId, (player) => player.copy({ defeated: true }))
}

const handleNewTurn = (state: WorldState): WorldState =>
  state.copy({
    turn: state.turn + 1,
    units: state.units.map((unit) => unit.refreshActionPoints()),
    players: state.players.map((player) => player.copy({ endedTurn: false })),
  })
