import Peer = require('peerjs')
import { newPeer } from './peer-utils'

export type PeerId = string

export type RequestId = string

export interface RequestMessage {
  type: 'request'
  id: RequestId
  request: any
}

export type ClientToServerMessage = RequestMessage

export interface ResponseMessage {
  type: 'response'
  responseTo: RequestId
  response: any
}

export interface BroadcastMessage {
  type: 'broadcast'
  body: any
}

export type ServerToClientMessage = ResponseMessage | BroadcastMessage

export class PeerServer {
  private readonly peer: Peer
  private readonly connections: Peer.DataConnection[] = []
  private readonly handleMessage: (message: any) => any

  constructor(id: PeerId, handleMessage: (message: any) => any) {
    this.handleMessage = handleMessage
    this.peer = newPeer(id)
    this.peer.on('error', (err) => console.log(err))
    this.peer.on('connection', this.handleNewConnection)
  }

  private handleNewConnection = (connection: Peer.DataConnection) => {
    // console.log('SERVER: received new connection from ' + connection.peer)
    this.connections.push(connection)
    connection.on('data', this.handleConnectionData(connection))
  }

  public broadcast = (message: any): void => {
    const broadcastMessage: BroadcastMessage = { type: 'broadcast', body: message }
    for (const connection of this.connections) {
      connection.send(broadcastMessage)
    }
  }

  private handleConnectionData = (connection: Peer.DataConnection) => (message: ClientToServerMessage): void => {
    // console.log('SERVER: received new message from ' + connection.peer)
    // console.log(message)
    const response = this.handleMessage(message.request)
    const responseMessage: ResponseMessage = {
      type: 'response',
      responseTo: message.id,
      response,
    }
    connection.send(responseMessage)
  }
}
