import * as R from 'ramda'
import { WorldState } from '../world/world-state'
import {
  AddPlayerWorldAction,
  AttackWorldAction,
  ChangePlayerNameWorldAction,
  ChatWorldAction,
  EndTurnWorldAction,
  InitialiseWorldAction,
  KickPlayerWorldAction,
  MatureUnitWorldAction,
  MoveUnitWorldAction,
  WorldAction,
} from '../world/world-actions'
import {
  ChatWorldEvent,
  GameStartedWorldEvent,
  InitialiseWorldEvent,
  NewTurnWorldEvent,
  PlayerAddedWorldEvent,
  PlayerChangedNameWorldEvent,
  PlayerEndedTurnWorldEvent,
  PlayerKickedWorldEvent,
  UnitMaturedWorldEvent,
  UnitMovedWorldEvent,
  WorldEvent,
  WorldEventId,
} from '../world/world-events'
import { HOST_PLAYER_ID, Player, PlayerId } from '../world/player'
import { WorldGenerator } from './world-generator'
import { AttackWorldActionHandler } from './attack-world-action-handler'
import { UnitType } from '../world/unit'
import { HitPoints, WARRIOR_HIT_POINTS } from '../world/hit-points'

export class WorldActionHandler {
  private readonly worldState: WorldState
  private readonly playerId: PlayerId
  private readonly nextWorldEventId: WorldEventId

  constructor(worldState: WorldState, playerId: PlayerId, nextWorldEventId: WorldEventId) {
    this.worldState = worldState
    this.playerId = playerId
    this.nextWorldEventId = nextWorldEventId
  }

  public calculateWorldEvents = (action: WorldAction): WorldEvent[] => {
    const events = this.calculateSpecificWorldEvents(action)
    return this.beginNewTurnIfNeeded(events)
  }

  private beginNewTurnIfNeeded(events: WorldEvent[]) {
    const lastEvent = R.last(events)
    if (lastEvent === undefined) {
      return []
    } else {
      const newWorldState = this.worldState.applyEvents(events)
      if (newWorldState.turn === 0 || newWorldState.canAnyPlayerAct() || newWorldState.units.length === 0) {
        return events
      } else {
        const nextWorldEventId = lastEvent.id + 1
        const newTurnEvent: NewTurnWorldEvent = { id: nextWorldEventId, type: 'newTurn' }
        return R.append(newTurnEvent, events)
      }
    }
  }

  private calculateSpecificWorldEvents = (action: WorldAction): WorldEvent[] => {
    switch (action.type) {
      case 'initialise':
        return this.handleInitialise(action)
      case 'addPlayer':
        return this.handleAddPlayer(action)
      case 'changePlayerName':
        return this.handleChangePlayerName(action)
      case 'startGame':
        return this.handleStartGame()
      case 'attack':
        return this.handleAttack(action)
      case 'moveUnit':
        return this.handleMoveUnit(action)
      case 'endTurn':
        return this.handleEndTurn(action)
      case 'chat':
        return this.handleChat(action)
      case 'kickPlayer':
        return this.handleKickPlayer(action)
      case 'matureUnit':
        return this.handleMatureUnit(action)
    }
  }

  private handleInitialise = (action: InitialiseWorldAction): [InitialiseWorldEvent] => {
    if (this.nextWorldEventId > 0) {
      throw new Error(`Can only initialise as the first event`)
    }
    return [{ id: this.nextWorldEventId, type: 'initialise', state: action.state }]
  }

  private handleAddPlayer = (action: AddPlayerWorldAction): [PlayerAddedWorldEvent] => {
    const existingPlayerIds = this.worldState.getPlayerIds()
    const playerId = R.apply(Math.max, existingPlayerIds) + 1
    const name = action.name ?? `Player ${playerId}`
    return [{ id: this.nextWorldEventId, type: 'playerAdded', playerId, name }]
  }

  private handleChangePlayerName = (action: ChangePlayerNameWorldAction): [PlayerChangedNameWorldEvent] => {
    this.getPlayer()
    return [{ id: this.nextWorldEventId, type: 'playerChangedName', playerId: this.playerId, name: action.name }]
  }

  private handleStartGame = (): [GameStartedWorldEvent] => {
    if (this.worldState.gameHasStarted) {
      throw new Error(`Cannot start an already-started game`)
    }
    if (this.playerId !== HOST_PLAYER_ID) {
      throw new Error(`Cannot start the game unless the host`)
    }
    const generatedWorld = new WorldGenerator(this.worldState).generateWorld()
    return [{ id: this.nextWorldEventId, type: 'gameStarted', generatedWorld }]
  }

  private handleAttack = (action: AttackWorldAction): WorldEvent[] =>
    new AttackWorldActionHandler(this.worldState, this.playerId, this.nextWorldEventId).handleAttack(action)

  private handleMoveUnit = (action: MoveUnitWorldAction): [UnitMovedWorldEvent] => {
    const { unitId, to } = action
    const unit = this.worldState.findUnitById(unitId)
    if (!unit) {
      throw new Error(`No unit found with ID ${unitId}`)
    }
    const from = unit.location
    if (!from.isAdjacentTo(to)) {
      throw new Error(`Invalid unit movement between non-adjacent hexes ${from} to ${to}`)
    }
    if (!this.worldState.map.isInBounds(to)) {
      throw new Error(`Invalid unit movement to out-of-bounds hex ${to}`)
    }
    if (this.worldState.findUnitInLocation(to)) {
      throw new Error(`Invalid unit movement to already-occupied hex`)
    }
    if (unit.actionPoints.current < 1) {
      throw new Error(`Not enough action points to move`)
    }
    if (unit.playerId !== this.playerId) {
      throw new Error(`Cannot move another player's unit`)
    }
    return [
      {
        id: this.nextWorldEventId,
        type: 'unitMoved',
        playerId: this.playerId,
        actionPointsConsumed: 1,
        unitId,
        from,
        to,
      },
    ]
  }

  private handleEndTurn = (action: EndTurnWorldAction): [PlayerEndedTurnWorldEvent] => {
    if (action.turn !== this.worldState.turn) {
      throw new Error(`Cannot end a turn that's not the current turn`)
    }
    const player = this.getPlayer()
    if (player.endedTurn) {
      throw new Error(`Player has already ended their turn`)
    }
    const playerEndedTurnAction: PlayerEndedTurnWorldEvent = {
      id: this.nextWorldEventId,
      type: 'playerEndedTurn',
      playerId: this.playerId,
    }
    return [playerEndedTurnAction]
  }

  private getPlayer = (): Player => {
    const player = this.worldState.findPlayer(this.playerId)
    if (!player) {
      throw new Error(`No player with ID ${this.playerId}`)
    }
    return player
  }

  private handleChat = (action: ChatWorldAction): [ChatWorldEvent] => [
    { id: this.nextWorldEventId, type: 'chat', playerId: this.playerId, message: action.message },
  ]

  private handleKickPlayer = (action: KickPlayerWorldAction): [PlayerKickedWorldEvent] => {
    const playerId = action.playerId
    const player = this.worldState.findPlayer(playerId)
    if (!player) {
      throw new Error(`No player with ID ${playerId}`)
    }
    if (playerId === HOST_PLAYER_ID) {
      throw new Error(`Cannot kick host`)
    }
    if (this.playerId !== HOST_PLAYER_ID) {
      throw new Error(`Only the host can kick players`)
    }
    return [{ id: this.nextWorldEventId, type: 'playerKicked', playerId }]
  }

  private handleMatureUnit = (action: MatureUnitWorldAction): [UnitMaturedWorldEvent] => {
    const { unitId, unitType } = action
    const unit = this.worldState.findUnitById(unitId)
    if (!unit) {
      throw new Error(`No unit found with ID ${unitId}`)
    }
    if (unit.playerId !== this.playerId) {
      throw new Error(`Cannot mature another player's unit`)
    }
    if (unit.type !== UnitType.CRIA) {
      throw new Error(`Can only mature a cria`)
    }
    if (unitType === UnitType.CRIA) {
      throw new Error(`Cannot mature into a cria`)
    }
    const hitPoints = new HitPoints({ current: WARRIOR_HIT_POINTS, max: WARRIOR_HIT_POINTS })
    return [{ id: this.nextWorldEventId, type: 'unitMatured', unitId, unitType, hitPoints }]
  }
}
