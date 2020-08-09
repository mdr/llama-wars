import * as R from 'ramda'
import Peer = require('peerjs')
import { WorldEventListener, WorldStateOwner } from './world-state-owner'
import { WorldEvent, WorldEventId } from '../world/world-events'
import { ClientToServerMessage, ServerToClientMessage } from './messages'
import { deserialiseFromJson, serialiseToJson } from '../util/json-serialisation'
import { newPeer } from './client'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { PlayerId } from '../world/player'
import { WorldAction } from '../world/world-actions'
import { WorldEventDb } from '../db/world-event-db'
import { GameId } from '../scenes/main-game/game-scene'
import { INITIAL_WORLD_STATE } from '../world/initial-world-state'
import { applyEvent } from '../world/world-event-evaluator'
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
      worldState = applyEvent(worldState, event)
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

  private handleClientToServerMessage(message: ClientToServerMessage, connection: Peer.DataConnection) {
    console.log(message)
    switch (message.type) {
      case 'join':
        connection.send({
          type: 'joined',
          playerId: 2,
          worldState: this.worldStateOwner.worldState.toJson(),
        })
        break
      case 'worldAction':
        this.worldStateOwner.handleAction(message.playerId, deserialiseFromJson(message.action))
        break
      default:
        throw new UnreachableCaseError(message)
    }
  }

  public handleAction = (playerId: PlayerId, action: WorldAction): void =>
    this.worldStateOwner.handleAction(playerId, action)
}
