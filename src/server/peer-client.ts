import { v4 as uuid } from 'uuid'
import { newPeer } from './client'
import {
  BroadcastMessage2,
  PeerId,
  RequestId,
  RequestMessage2,
  ResponseMessage2,
  ServerToClientMessage2,
} from './peer-server'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { Option } from '../util/types'
import Peer = require('peerjs')

type Resolve<T> = (value?: T | PromiseLike<T>) => void

export type PeerListener = (message: any) => void

export class PeerClient {
  private readonly connection: Peer.DataConnection
  private readonly outstandingRequests: Map<RequestId, Resolve<any>> = new Map()
  private readonly listeners: PeerListener[] = []

  constructor(connection: Peer.DataConnection) {
    this.connection = connection
    connection.on('data', this.handleConnectionData)
  }

  private handleConnectionData = (message: ServerToClientMessage2): void => {
    // console.log('CLIENT: received message')
    // console.log(message)
    switch (message.type) {
      case 'response':
        this.handleResponse(message)
        break
      case 'broadcast':
        this.handleBroadcast(message)
        break
      default:
        throw new UnreachableCaseError(message)
    }
  }

  public static connect = (peerId: PeerId): Promise<PeerClient> =>
    new Promise<PeerClient>((resolve) => {
      const peer = newPeer()
      peer.on('error', (err) => console.log(err))
      peer.on('open', () => {
        // console.log('CLIENT: open')
        const connection = peer.connect(peerId, { reliable: true })
        connection.on('open', () => {
          // console.log('CLIENT: connection open')
          const client = new PeerClient(connection)
          resolve(client)
        })
      })
    })

  public sendRequest = (request: any): Promise<any> =>
    new Promise<any>((resolve: Resolve<any>) => {
      const requestMessage: RequestMessage2 = {
        type: 'request',
        id: uuid(),
        request: request,
      }
      // console.log('CLIENT: sending request')
      // console.log(requestMessage)
      this.connection.send(requestMessage)
      this.outstandingRequests.set(requestMessage.id, resolve)
    })

  private handleResponse = (message: ResponseMessage2): void => {
    const requestId = message.responseTo
    const resolve: Option<Resolve<any>> = this.outstandingRequests.get(requestId)
    if (resolve) {
      resolve(message.response)
      this.outstandingRequests.delete(requestId)
    } else {
      console.log(`CLIENT: response received for unknown request ${requestId}`)
    }
  }

  public addListener = (listener: PeerListener): void => {
    this.listeners.push(listener)
  }

  public removeListener = (listener: PeerListener): void => {
    const index = this.listeners.indexOf(listener)
    if (index > -1) {
      this.listeners.splice(index, 1)
    }
  }

  private notifyListeners = (message: any): void => {
    for (const listener of this.listeners) {
      listener(message)
    }
  }

  private handleBroadcast = (message: BroadcastMessage2): void => {
    this.notifyListeners(message.body)
  }
}
