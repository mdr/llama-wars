import * as R from 'ramda'
import { WorldState } from './world-state'
import {
  CombatWorldEvent,
  GameOverWorldEvent,
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
import { canAttackOccur } from '../server/attack-world-action-handler'

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
  const player = new Player({ id: playerId, name: `Player ${playerId}` })
  return state.addPlayer(player)
}

const handlePlayerChangedName = (state: WorldState, event: PlayerChangedNameWorldEvent): WorldState => {
  const { playerId, name } = event
  getPlayer(state, playerId)
  return state.updatePlayer(playerId, (player) => player.copy({ name }))
}

const getPlayer = (state: WorldState, playerId: PlayerId): Player => {
  const player = state.findPlayer(playerId)
  if (!player) throw new Error(`No player found with ID ${playerId}`)
  return player
}

const handleGameStarted = (state: WorldState, event: GameStartedWorldEvent): WorldState => {
  if (state.gameHasStarted) {
    throw new Error(`Game already started`)
  }
  return state
    .copy({ turn: 1, units: event.units })
    .updateWorldMap((map) => map.copy({ mountains: event.mountains }))
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
      `Unit is not in the expected location for movement. Unit is at ${unit.location}, but was expected to be at ${from}`,
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

const handleCombat = (state: WorldState, event: CombatWorldEvent): WorldState => {
  const { attacker, defender } = event

  const attackerUnit = state.findUnitById(attacker.unitId)
  if (!attackerUnit) throw new Error(`No unit found with ID ${attacker.unitId}`)
  if (!attackerUnit.location.equals(attacker.location))
    throw new Error(
      `Invalid location for attacker. Attacking unit ${attackerUnit.id} is at location ${attackerUnit.location}, but was expected to be at ${attacker.location}`,
    )

  const defenderUnit = state.findUnitById(defender.unitId)
  if (!defenderUnit) throw new Error(`No unit found with ID ${defender.unitId}`)
  if (!defenderUnit.location.equals(defender.location))
    throw new Error(
      `Invalid location for defender. Defending unit ${defenderUnit.id} is at location ${defenderUnit.location}, but was expected to be at ${defender.location}`,
    )

  if (attackerUnit.playerId === defenderUnit.playerId) throw new Error(`Invalid combat with self`)
  if (!canAttackOccur(event.attackType, attacker.location, defender.location))
    throw new Error(
      `Invalid combat of type ${event.attackType} between hexes ${attacker.location} to ${defender.location}`,
    )
  if (attackerUnit.actionPoints.current < event.actionPointsConsumed) throw new Error(`Invalid action point usage`)

  let newState = state

  if (attacker.killed) {
    newState = newState.removeUnit(attackerUnit.id)
  } else {
    const updatedAttacker = attackerUnit.damage(attacker.damage).reduceActionPoints(event.actionPointsConsumed)
    newState = newState.replaceUnit(attackerUnit.id, updatedAttacker)
  }

  if (defender.killed) {
    newState = newState.removeUnit(defenderUnit.id)
  } else {
    newState = newState.replaceUnit(defenderUnit.id, defenderUnit.damage(defender.damage))
  }

  if (defender.killed) {
    if (attacker.killed) {
      newState = newState.addWorldLog(`${defenderUnit.name} was taken out in a suicide attack by ${attackerUnit.name}.`)
    } else {
      newState = newState.addWorldLog(`${defenderUnit.name} was brutally murdered by ${attackerUnit.name}.`)
    }
  } else if (attacker.killed) {
    newState = newState.addWorldLog(`${attackerUnit.name} died in a futile attempt to take on ${attackerUnit.name}.`)
  } else {
    const verb = event.attackType === 'melee' ? 'attacked' : 'spat at'
    const takingDamageClause = attacker.damage === 0 ? '' : ` and taking ${attacker.damage} damage`
    const message = `${attackerUnit.name} ${verb} ${defenderUnit.name}, causing ${defender.damage} damage${takingDamageClause}.`
    newState = newState.addWorldLog(message)
  }
  return newState
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
