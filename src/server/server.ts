import { WorldEventListener, WorldStateOwner } from './world-state-owner'
import { WorldEvent } from '../world/world-events'
import { ClientToServerMessage, ServerToClientMessage } from './messages'
import { deserialiseFromJson, serialiseToJson } from '../util/json-serialisation'
import { GameId } from '../scenes/main-game/game-scene'
import { newPeer } from './client'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { PlayerId } from '../world/player'
import { WorldAction } from '../world/world-actions'
import Peer = require('peerjs')

export class Server {
  private readonly worldStateOwner: WorldStateOwner = new WorldStateOwner()
  private readonly connections: Peer.DataConnection[] = []

  private listeners: WorldEventListener[] = []

  public addListener = (listener: WorldEventListener): void => {
    this.listeners.push(listener)
  }

  private notifyListeners = (event: WorldEvent): void => {
    for (const listener of this.listeners) listener(event)
  }

  constructor() {
    this.worldStateOwner.addListener((event: WorldEvent): void => {
      this.notifyListeners(event)
      for (const clientConnection of this.connections) {
        const message: ServerToClientMessage = { type: 'worldEvent', event: serialiseToJson(event) }
        clientConnection.send(message)
      }
    })
    const peer = newPeer()
    peer.on('open', (id: GameId) => (window.location.hash = id))
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
