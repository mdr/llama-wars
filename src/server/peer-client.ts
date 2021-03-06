import { v4 as uuid } from 'uuid'
import {
  BroadcastMessage,
  ErrorResponseMessage,
  PeerId,
  RequestId,
  RequestMessage,
  ResponseMessage,
  ServerToClientMessage,
} from './peer-server'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { Option } from '../util/types'
import Peer = require('peerjs')
import { newPeer } from './peer-utils'
import { Reject, Resolve } from '../util/async-util'

interface ResolveAndReject<T> {
  resolve: Resolve<T>
  reject: Reject
}

export type PeerListener = (message: any) => void

export class PeerClient {
  private readonly connection: Peer.DataConnection
  private readonly outstandingRequests: Map<RequestId, ResolveAndReject<any>> = new Map()
  private readonly listeners: PeerListener[] = []

  constructor(connection: Peer.DataConnection) {
    this.connection = connection
    connection.on('data', this.handleConnectionData)
  }

  private handleConnectionData = (message: ServerToClientMessage): void => {
    // console.log('CLIENT: received message')
    // console.log(message)
    switch (message.type) {
      case 'response':
        this.handleResponse(message)
        break
      case 'errorResponse':
        this.handleErrorResponse(message)
        break
      case 'broadcast':
        this.handleBroadcast(message)
        break
      default:
        throw new UnreachableCaseError(message)
    }
  }

  public static connect = (peerId: PeerId): Promise<PeerClient> =>
    new Promise<PeerClient>((resolve: Resolve<any>, reject: Reject) => {
      const peer = newPeer()
      let resolved = false
      peer.on('error', (err) => {
        console.log(err)
        if (!resolved) {
          reject(err)
        }
      })
      peer.on('open', () => {
        // console.log('CLIENT: open')
        const connection = peer.connect(peerId, { reliable: true })
        connection.on('open', () => {
          // console.log('CLIENT: connection open')
          const client = new PeerClient(connection)
          resolve(client)
          resolved = true
        })
      })
    })

  public sendRequest = (request: any): Promise<any> =>
    new Promise<any>((resolve: Resolve<any>, reject: Reject) => {
      const requestMessage: RequestMessage = {
        type: 'request',
        id: uuid(),
        request: request,
      }
      // console.log('CLIENT: sending request')
      // console.log(requestMessage)
      this.connection.send(requestMessage)
      this.outstandingRequests.set(requestMessage.id, { resolve, reject })
    })

  private handleResponse = (message: ResponseMessage): void => {
    const requestId = message.responseTo
    const resolveAndReject: Option<ResolveAndReject<any>> = this.outstandingRequests.get(requestId)
    if (resolveAndReject) {
      resolveAndReject.resolve(message.response)
      this.outstandingRequests.delete(requestId)
    } else {
      console.log(`CLIENT: response received for unknown request ${requestId}`)
    }
  }

  private handleErrorResponse = (message: ErrorResponseMessage): void => {
    const requestId = message.responseTo
    const resolveAndReject: Option<ResolveAndReject<any>> = this.outstandingRequests.get(requestId)
    if (resolveAndReject) {
      resolveAndReject.reject('Error received from server')
      this.outstandingRequests.delete(requestId)
    } else {
      console.log(`CLIENT: error response received for unknown request ${requestId}`)
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

  private handleBroadcast = (message: BroadcastMessage): void => {
    this.notifyListeners(message.body)
  }
}
