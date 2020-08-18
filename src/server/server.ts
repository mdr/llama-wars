import * as R from 'ramda'
import { WorldEventListener, WorldStateOwner } from './world-state-owner'
import { PlayerAddedWorldEvent, WorldEvent, WorldEventId } from '../world/world-events'
import { ClientRequest, JoinResponse, RejoinRequest, RejoinResponse, WorldEventMessage } from './messages'
import { deserialiseFromJson, serialiseToJson } from '../util/json-serialisation'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { HOST_PLAYER_ID, PlayerId } from '../world/player'
import { AddPlayerWorldAction, WorldAction } from '../world/world-actions'
import { WorldEventDb } from '../db/world-event-db'
import { GameId } from '../scenes/main-game/game-scene'
import { INITIAL_WORLD_STATE } from '../world/initial-world-state'
import { WorldState } from '../world/world-state'
import { PeerServer } from './peer-server'

export class Server {
  private readonly worldStateOwner: WorldStateOwner
  private readonly worldEventDb: WorldEventDb
  private readonly gameId: GameId

  private readonly listeners: WorldEventListener[] = []
  private readonly peerServer: PeerServer

  public get playerId(): PlayerId {
    return HOST_PLAYER_ID
  }

  public get worldState(): WorldState {
    return this.worldStateOwner.worldState
  }

  public static restoreGame = async (worldEventDb: WorldEventDb, gameId: GameId): Promise<Server> => {
    const events = await worldEventDb.getEventsForGame(gameId)
    const sortedEvents = R.sortBy((event) => event.id, events)
    const worldState = INITIAL_WORLD_STATE.applyEvents(sortedEvents)
    return new Server(worldEventDb, gameId, worldState, events.length + 1)
  }

  public addListener = (listener: WorldEventListener): void => {
    this.listeners.push(listener)
  }

  public removeListener = (listener: WorldEventListener): void => {
    const index = this.listeners.indexOf(listener)
    if (index > -1) {
      this.listeners.splice(index, 1)
    }
  }

  private notifyListeners = (event: WorldEvent): void => {
    for (const listener of this.listeners) {
      listener(event)
    }
  }

  constructor(worldEventDb: WorldEventDb, gameId: GameId, worldState: WorldState, nextWorldEventId: WorldEventId) {
    this.worldEventDb = worldEventDb
    this.gameId = gameId
    this.peerServer = new PeerServer(this.gameId, this.handleClientToServerMessage)
    this.worldStateOwner = new WorldStateOwner(worldState, nextWorldEventId)
    this.worldStateOwner.addListener((event: WorldEvent): void => {
      this.notifyListeners(event)
      this.worldEventDb.store(this.gameId, event)
      const message: WorldEventMessage = { type: 'worldEvent', event: serialiseToJson(event) }
      this.peerServer.broadcast(message)
    })
  }

  private handleClientJoin = (): JoinResponse => {
    if (this.worldState.gameHasStarted) {
      return { type: 'unableToJoin' }
    } else {
      const addPlayerAction: AddPlayerWorldAction = { type: 'addPlayer' }
      const playerAddedEvent = <PlayerAddedWorldEvent>this.handleAction(this.playerId, addPlayerAction)[0]
      return {
        type: 'joined',
        playerId: playerAddedEvent.playerId,
        worldState: this.worldState.toJson(),
      }
    }
  }

  private handleClientRejoin = (message: RejoinRequest): RejoinResponse => {
    const worldState = this.worldState
    if (worldState.isValidPlayerId(message.playerId)) {
      return { type: 'rejoined', worldState: worldState.toJson() }
    } else {
      return { type: 'unableToRejoin' }
    }
  }

  private handleClientToServerMessage = (message: ClientRequest): any => {
    console.log(message)
    switch (message.type) {
      case 'join':
        return this.handleClientJoin()
      case 'rejoin':
        return this.handleClientRejoin(message)
      case 'worldAction':
        this.worldStateOwner.handleAction(message.playerId, deserialiseFromJson(message.action))
        break
      default:
        throw new UnreachableCaseError(message)
    }
  }

  public handleAction = (playerId: PlayerId, action: WorldAction): WorldEvent[] =>
    this.worldStateOwner.handleAction(playerId, action)
}
