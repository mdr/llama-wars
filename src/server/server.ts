import * as R from 'ramda'
import Peer = require('peerjs')
import { WorldEventListener, WorldStateOwner } from './world-state-owner'
import { PlayerAddedWorldEvent, WorldEvent, WorldEventId } from '../world/world-events'
import { ClientToServerMessage, RejoinMessage, ServerToClientMessage } from './messages'
import { deserialiseFromJson, serialiseToJson } from '../util/json-serialisation'
import { newPeer } from './client'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { PlayerId } from '../world/player'
import { AddPlayerWorldAction, WorldAction } from '../world/world-actions'
import { WorldEventDb } from '../db/world-event-db'
import { GameId } from '../scenes/main-game/game-scene'
import { INITIAL_WORLD_STATE } from '../world/initial-world-state'
import { WorldState } from '../world/world-state'

export class Server {
  private readonly worldStateOwner: WorldStateOwner
  private readonly connections: Peer.DataConnection[] = []
  private readonly worldEventDb: WorldEventDb
  private readonly gameId: GameId

  private readonly listeners: WorldEventListener[] = []

  public get worldState(): WorldState {
    return this.worldStateOwner.worldState
  }

  public static restoreGame = async (worldEventDb: WorldEventDb, gameId: GameId): Promise<Server> => {
    const events = await worldEventDb.getEventsForGame(gameId)
    let worldState = INITIAL_WORLD_STATE
    for (const event of R.sortBy((event) => event.id, events)) {
      worldState = worldState.applyEvent(event)
    }
    return new Server(worldEventDb, gameId, worldState, events.length + 1)
  }

  public addListener = (listener: WorldEventListener): void => {
    this.listeners.push(listener)
  }

  private notifyListeners = (event: WorldEvent): void => {
    for (const listener of this.listeners) listener(event)
  }

  constructor(worldEventDb: WorldEventDb, gameId: GameId, worldState: WorldState, nextWorldEventId: WorldEventId) {
    this.worldEventDb = worldEventDb
    this.gameId = gameId
    this.worldStateOwner = new WorldStateOwner(worldState, nextWorldEventId)
    this.worldStateOwner.addListener((event: WorldEvent): void => {
      this.notifyListeners(event)
      this.worldEventDb.store(this.gameId, event)
      for (const clientConnection of this.connections) {
        const message: ServerToClientMessage = { type: 'worldEvent', event: serialiseToJson(event) }
        clientConnection.send(message)
      }
    })
    const peer = newPeer(this.gameId)
    peer.on('error', (err) => console.log(err))
    peer.on('connection', (connection) => {
      this.connections.push(connection)
      connection.on('data', (message: ClientToServerMessage) => this.handleClientToServerMessage(message, connection))
    })
  }

  private handleClientJoin = (connection: Peer.DataConnection): void => {
    if (this.worldState.gameHasStarted) {
      // TODO: tell the client "bad luck"
    } else {
      const addPlayerAction: AddPlayerWorldAction = { type: 'addPlayer' }
      const playerAddedEvent = <PlayerAddedWorldEvent>this.handleAction(1, addPlayerAction)[0]
      connection.send({
        type: 'joined',
        playerId: playerAddedEvent.playerId,
        worldState: this.worldState.toJson(),
      })
    }
  }

  private handleClientRejoin = (message: RejoinMessage, connection: Peer.DataConnection): void => {
    const worldState = this.worldState
    if (worldState.isValidPlayerId(message.playerId))
      connection.send({
        type: 'rejoined',
        worldState: worldState.toJson(),
      })
    else {
      // TODO: tell the client no
    }
  }

  private handleClientToServerMessage = (message: ClientToServerMessage, connection: Peer.DataConnection): void => {
    console.log(message)
    switch (message.type) {
      case 'join':
        this.handleClientJoin(connection)
        break
      case 'rejoin':
        this.handleClientRejoin(message, connection)
        break
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
