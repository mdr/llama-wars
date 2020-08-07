import { ClientToServerMessage, ServerToClientMessage } from './messages'
import { GameId } from '../scenes/game-scene'
import Peer = require('peerjs')

type ServerToClientMessageListener = (message: ServerToClientMessage) => void

export class Client {
  private serverConnection: Peer.DataConnection
  private listeners: ServerToClientMessageListener[] = []

  public addListener = (listener: ServerToClientMessageListener) => this.listeners.push(listener)

  private notifyListeners = (message: ServerToClientMessage): void => {
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

  public send = (message: ClientToServerMessage) => this.serverConnection.send(message)

  private static doConnect = (gameId: GameId): Promise<Peer.DataConnection> =>
    new Promise<Peer.DataConnection>((resolve) => {
      const peer = newPeer()
      peer.on('error', (err) => console.log(err))
      peer.on('open', () => {
        const connection = peer.connect(gameId)
        connection.on('open', () => {
          resolve(connection)
        })
      })
    })
}

export const newPeer = (id?: string, options?: Peer.PeerJSOption) => new (window as any).Peer(id, options) as Peer
