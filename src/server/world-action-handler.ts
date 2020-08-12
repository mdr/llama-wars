import * as R from 'ramda'
import { WorldState } from '../world/world-state'
import {
  AttackWorldAction,
  ChangePlayerNameWorldAction,
  EndTurnWorldAction,
  InitialiseWorldAction,
  MoveUnitWorldAction,
  WorldAction,
} from '../world/world-actions'
import {
  GameStartedWorldEvent,
  InitialiseWorldEvent,
  PlayerAddedWorldEvent,
  PlayerChangedNameWorldEvent,
  PlayerEndedTurnWorldEvent,
  UnitMovedWorldEvent,
  WorldEvent,
} from '../world/world-events'
import { HOST_PLAYER_ID, Player, PlayerId } from '../world/player'
import { WorldGenerator } from './world-generator'
import { AttackWorldActionHandler } from './attack-world-action-handler'
import { applyEvent } from '../world/world-event-evaluator'

export class WorldActionHandler {
  private readonly worldState: WorldState
  private readonly playerId: PlayerId
  private readonly nextWorldEventId: number

  constructor(worldState: WorldState, playerId: PlayerId, nextWorldEventId: number) {
    this.worldState = worldState
    this.playerId = playerId
    this.nextWorldEventId = nextWorldEventId
  }

  public calculateWorldEvents = (action: WorldAction): WorldEvent[] => {
    switch (action.type) {
      case 'initialise':
        return this.handleInitialise(action)
      case 'addPlayer':
        return this.handleAddPlayer()
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
    }
  }

  private handleInitialise = (action: InitialiseWorldAction): [InitialiseWorldEvent] => {
    if (this.nextWorldEventId > 0) {
      throw `Can only initialise as the first event`
    }
    return [{ id: this.nextWorldEventId, type: 'initialise', state: action.state }]
  }

  private handleAddPlayer = (): [PlayerAddedWorldEvent] => {
    const existingPlayerIds = this.worldState.getPlayerIds()
    const playerId = R.apply(Math.max, existingPlayerIds) + 1
    return [{ id: this.nextWorldEventId, type: 'playerAdded', playerId }]
  }

  private handleChangePlayerName = (action: ChangePlayerNameWorldAction): [PlayerChangedNameWorldEvent] => {
    this.getPlayer()
    return [{ id: this.nextWorldEventId, type: 'playerChangedName', playerId: this.playerId, name: action.name }]
  }

  private handleStartGame = (): [GameStartedWorldEvent] => {
    if (this.worldState.gameHasStarted) {
      throw `Cannot start an already-started game`
    }
    if (this.playerId !== HOST_PLAYER_ID) {
      throw `Cannot start the game unless the host`
    }
    const units = new WorldGenerator(this.worldState).generateUnits()
    return [{ id: this.nextWorldEventId, type: 'gameStarted', units }]
  }

  private handleAttack = (action: AttackWorldAction): WorldEvent[] =>
    new AttackWorldActionHandler(this.worldState, this.playerId, this.nextWorldEventId).handleAttack(action)

  private handleMoveUnit = (action: MoveUnitWorldAction): [UnitMovedWorldEvent] => {
    const { unitId, to } = action
    const unit = this.worldState.findUnitById(unitId)
    if (!unit) throw `No unit found with ID ${unitId}`
    const from = unit.location
    if (!from.isAdjacentTo(to)) throw `Invalid unit movement between non-adjacent hexes ${from} to ${to}`
    if (!this.worldState.map.isInBounds(to)) throw `Invalid unit movement to out-of-bounds hex ${to}`
    if (this.worldState.findUnitInLocation(to)) throw `Invalid unit movement to already-occupied hex`
    if (unit.actionPoints.current < 1) throw `Not enough action points to move`
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

  private handleEndTurn = (action: EndTurnWorldAction): WorldEvent[] => {
    if (action.turn !== this.worldState.turn) {
      throw `Cannot end a turn that's not the current turn`
    }
    const player = this.getPlayer()
    if (player.endedTurn) {
      throw `Player has already ended their turn`
    }
    const playerEndedTurnAction: PlayerEndedTurnWorldEvent = {
      id: this.nextWorldEventId,
      type: 'playerEndedTurn',
      playerId: this.playerId,
    }
    const newWorldState = applyEvent(this.worldState, playerEndedTurnAction)
    if (newWorldState.canAnyPlayerAct()) {
      return [playerEndedTurnAction]
    } else {
      return [playerEndedTurnAction, { id: this.nextWorldEventId + 1, type: 'newTurn' }]
    }
  }

  private getPlayer = (): Player => {
    const player = this.worldState.findPlayer(this.playerId)
    if (!player) throw `No player with ID ${this.playerId}`
    return player
  }
}
