import {
  JoinedMessage,
  JoinMessage,
  RejoinedMessage,
  RejoinMessage,
  ServerToClientMessage,
  WorldActionMessage,
} from './messages'
import { GameId } from '../scenes/main-game/game-scene'
import { WorldAction } from '../world/world-actions'
import { serialiseToJson } from '../util/json-serialisation'
import { PlayerId } from '../world/player'
import { PeerClient } from './peer-client'
import { WorldState } from '../world/world-state'
import Peer = require('peerjs')

export type ServerToClientMessageListener = (message: ServerToClientMessage) => void

export class Client {
  private readonly peerClient: PeerClient
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
    for (const listener of this.listeners) listener(message)
  }

  constructor(peerClient: PeerClient) {
    this.peerClient = peerClient
    peerClient.addListener((message: any) => {
      this.notifyListeners(message)
    })
  }

  public static connect = async (gameId: GameId): Promise<Client> => {
    const peerClient = await PeerClient.connect(gameId)
    return new Client(peerClient)
  }

  public rejoin = async (playerId: PlayerId): Promise<WorldState> => {
    const rejoinRequest: RejoinMessage = { type: 'rejoin', playerId }
    const rejoinedResponse: RejoinedMessage = await this.peerClient.sendRequest(rejoinRequest)
    return WorldState.fromJson(rejoinedResponse.worldState)
  }

  public join = async (): Promise<{ playerId: PlayerId; worldState: WorldState }> => {
    const joinRequest: JoinMessage = { type: 'join' }
    const joinedResponse: JoinedMessage = await this.peerClient.sendRequest(joinRequest)
    const playerId = joinedResponse.playerId
    const worldState = WorldState.fromJson(joinedResponse.worldState)
    return { playerId, worldState }
  }

  public sendAction = async (playerId: PlayerId, action: WorldAction): Promise<void> => {
    const message: WorldActionMessage = {
      type: 'worldAction',
      action: serialiseToJson(action),
      playerId: playerId,
    }
    await this.peerClient.sendRequest(message)
  }
}

export const newPeer = (id?: string, options?: Peer.PeerJSOption): Peer => {
  const _Peer = (window as any).Peer as typeof Peer
  return new _Peer(id, options)
}
