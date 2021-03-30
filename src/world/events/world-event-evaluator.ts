import * as R from 'ramda'
import { UnitOrBuilding, WorldState } from '../world-state'
import {
  ChatWorldEvent,
  CombatWorldEvent,
  GameOverWorldEvent,
  GameStartedWorldEvent,
  InitialiseWorldEvent,
  PlayerAddedWorldEvent,
  PlayerChangedNameWorldEvent,
  PlayerDefeatedWorldEvent,
  PlayerEndedTurnWorldEvent,
  PlayerKickedWorldEvent,
  UnitMaturedWorldEvent,
  UnitMovedWorldEvent,
  WorldEvent,
} from './world-events'
import { UnreachableCaseError } from '../../util/unreachable-case-error'
import { HOST_PLAYER_ID, Player, PlayerId } from '../player'
import { Unit } from '../unit'
import { canAttackOccur } from '../../server/handlers/attack-world-action-validator'
import { handleCombat } from './combat-world-event-evaluator'

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
    case 'gameOver':
      return handleGameOver(state, event)
    case 'chat':
      return handleChat(state, event)
    case 'playerKicked':
      return handlePlayerKicked(state, event)
    case 'unitMatured':
      return handleUnitMatured(state, event)
    default:
      throw new UnreachableCaseError(event)
  }
}

const handleInitialise = (event: InitialiseWorldEvent): WorldState => {
  if (event.id > 0) {
    throw new Error(`Initialise must be the first event`)
  }
  return event.state
}

const handlePlayerAdded = (state: WorldState, event: PlayerAddedWorldEvent): WorldState => {
  if (R.any((player) => player.id === event.playerId, state.players)) {
    throw new Error(`Player ID already in use`)
  }
  const { playerId } = event
  const player = new Player({ id: playerId, name: event.name })
  return state.addPlayer(player)
}

const handlePlayerChangedName = (state: WorldState, event: PlayerChangedNameWorldEvent): WorldState => {
  const { playerId, name } = event
  getPlayer(state, playerId)
  return state.setPlayerName(playerId, name)
}

const getPlayer = (state: WorldState, playerId: PlayerId): Player => {
  const player = state.findPlayer(playerId)
  if (!player) {
    throw new Error(`No player found with ID ${playerId}`)
  }
  return player
}

const handleGameStarted = (state: WorldState, event: GameStartedWorldEvent): WorldState => {
  if (state.gameHasStarted) {
    throw new Error(`Game already started`)
  }
  const { units, buildings, mountains } = event.generatedWorld
  return state
    .copy({ turn: 1, units: units, buildings: buildings })
    .updateWorldMap((map) => map.copy({ mountains: mountains }))
    .addWorldLog('Let battle commence!')
}

const handleUnitMoved = (state: WorldState, event: UnitMovedWorldEvent): WorldState => {
  const { unitId, playerId, from, to } = event
  if (!from.isAdjacentTo(to)) {
    throw new Error(`Invalid unit movement between non-adjacent hexes ${from} to ${to}`)
  }
  if (!state.map.isInBounds(to)) {
    throw new Error(`Invalid unit movement to out-of-bounds hex ${to}`)
  }
  const unit = state.findUnitById(unitId)
  if (!unit) {
    throw new Error(`No unit found with ID ${unitId}`)
  }
  if (!unit.location.equals(from)) {
    throw new Error(
      `Unit "${unit}" is not in the expected location for movement. Unit is at ${unit.location}, but was expected to be at ${from}`,
    )
  }
  const toUnit = state.findUnitInLocation(to)
  if (toUnit) {
    throw new Error(`Invalid unit movement to already-occupied hex`)
  }
  if (unit.playerId !== playerId) {
    throw new Error(`Invalid attempt to move unit of another player`)
  }
  if (unit.actionPoints.current < event.actionPointsConsumed) {
    throw new Error(`Invalid action point usage`)
  }
  return state.replaceUnit(unit.id, unit.move(to, event.actionPointsConsumed))
}

const handlePlayerEndedTurn = (state: WorldState, event: PlayerEndedTurnWorldEvent): WorldState => {
  const { playerId } = event
  getPlayer(state, playerId)
  return state.updatePlayer(playerId, (player) => player.copy({ endedTurn: true }))
}

const handlePlayerDefeated = (state: WorldState, event: PlayerDefeatedWorldEvent): WorldState => {
  const { playerId } = event
  const player = getPlayer(state, playerId)
  return state
    .updatePlayer(playerId, (player) => player.copy({ defeated: true }))
    .addWorldLog(`${player.name} has been vanquished.`)
}

const handleNewTurn = (state: WorldState): WorldState =>
  state.newTurn().addWorldLog(`Turn ${state.turn + 1} has begun.`)

const handleGameOver = (state: WorldState, event: GameOverWorldEvent): WorldState => {
  const { victor } = event
  let newState = state.gameOver(victor)
  if (victor) {
    const victorPlayer = getPlayer(state, victor)
    newState = newState.addWorldLog(`🏆 ${victorPlayer.name} is victorious!`)
  } else {
    newState = newState.addWorldLog(`There are no winners in war.`)
  }
  return newState
}

const handlePlayerKicked = (state: WorldState, event: PlayerKickedWorldEvent): WorldState => {
  const { playerId } = event
  const player = state.findPlayer(playerId)
  if (!player) {
    throw new Error(`No player with ID ${playerId}`)
  }
  if (playerId === HOST_PLAYER_ID) {
    throw new Error(`Cannot kick host`)
  }
  return state.removePlayer(playerId)
}

const handleChat = (state: WorldState, event: ChatWorldEvent): WorldState =>
  state.addWorldLog(`[${state.getPlayer(event.playerId).name}] ${event.message}`)

const handleUnitMatured = (state: WorldState, event: UnitMaturedWorldEvent): WorldState =>
  state.updateUnit(event.unitId, (unit: Unit) => unit.copy({ hitPoints: event.hitPoints, type: event.unitType }))
