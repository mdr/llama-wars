import { ClientToServerMessage, ServerToClientMessage } from './messages'
import { GameId } from '../scenes/main-game/game-scene'
import { WorldAction } from '../world/world-actions'
import { serialiseToJson } from '../util/json-serialisation'
import { PlayerId } from '../world/player'
import Peer = require('peerjs')

export type ServerToClientMessageListener = (message: ServerToClientMessage) => void

export class Client {
  private readonly serverConnection: Peer.DataConnection
  private readonly listeners: ServerToClientMessageListener[] = []

  public addListener = (listener: ServerToClientMessageListener): void => {
    this.listeners.push(listener)
  }

  public removeListener = (listener: ServerToClientMessageListener): void => {
    const index = this.listeners.indexOf(listener)
    if (index > -1) {
      this.listeners.splice(index, 1)
    }
  }

  private notifyListeners = (message: ServerToClientMessage): void => {
    console.log(message)
    for (const listener of this.listeners) listener(message)
  }

  constructor(serverConnection: Peer.DataConnection) {
    this.serverConnection = serverConnection
    serverConnection.on('data', this.notifyListeners)
  }

  public static connect = async (gameId: GameId): Promise<Client> => {
    const serverConnection = await Client.doConnect(gameId)
    return new Client(serverConnection)
  }

  public send = (message: ClientToServerMessage): void => this.serverConnection.send(message)

  private static doConnect = (gameId: GameId): Promise<Peer.DataConnection> =>
    new Promise<Peer.DataConnection>((resolve) => {
      const peer = newPeer()
      peer.on('error', (err) => console.log(err))
      peer.on('open', () => {
        const connection = peer.connect(gameId, { reliable: true })
        connection.on('open', () => {
          resolve(connection)
        })
      })
    })

  public sendAction = (playerId: PlayerId, action: WorldAction): void =>
    this.send({
      type: 'worldAction',
      action: serialiseToJson(action),
      playerId: playerId,
    })
}

export const newPeer = (id?: string, options?: Peer.PeerJSOption): Peer => new (window as any).Peer(id, options) as Peer
