import {
  JoinRequest,
  JoinResponse,
  RejoinRequest,
  RejoinResponse,
  WorldActionRequest,
  WorldEventMessage,
} from './messages'
import { GameId } from '../scenes/main-game/game-scene'
import { WorldAction } from '../world/world-actions'
import { deserialiseFromJson, serialiseToJson } from '../util/json-serialisation'
import { PlayerId } from '../world/player'
import { PeerClient } from './peer-client'
import { WorldState } from '../world/world-state'
import { WorldEvent } from '../world/world-events'
import { WorldEventListener } from './world-state-owner'
import { Option } from '../util/types'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { withTimeout } from '../util/async-util'

export class Client {
  private readonly peerClient: PeerClient
  private readonly listeners: WorldEventListener[] = []

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

  constructor(peerClient: PeerClient) {
    this.peerClient = peerClient
    peerClient.addListener(this.handleWorldEventMessage)
  }

  private handleWorldEventMessage = (message: WorldEventMessage): void => {
    const event = deserialiseFromJson(message.event)
    this.notifyListeners(event)
  }

  public static connect = async (gameId: GameId): Promise<Client> => {
    const peerClient = await withTimeout(5000)(PeerClient.connect(gameId))
    return new Client(peerClient)
  }

  public rejoin = async (playerId: PlayerId): Promise<Option<WorldState>> => {
    const request: RejoinRequest = { type: 'rejoin', playerId }
    const response: RejoinResponse = await this.peerClient.sendRequest(request)
    switch (response.type) {
      case 'rejoined':
        return WorldState.fromJson(response.worldState)
      case 'unableToRejoin':
        return undefined
      default:
        throw new UnreachableCaseError(response)
    }
  }

  public join = async (): Promise<Option<{ playerId: PlayerId; worldState: WorldState }>> => {
    const request: JoinRequest = { type: 'join' }
    const response: JoinResponse = await this.peerClient.sendRequest(request)
    switch (response.type) {
      case 'joined':
        const playerId = response.playerId
        const worldState = WorldState.fromJson(response.worldState)
        return { playerId, worldState }
      case 'unableToJoin':
        return undefined
      default:
        throw new UnreachableCaseError(response)
    }
  }

  public sendAction = async (playerId: PlayerId, action: WorldAction): Promise<void> => {
    const message: WorldActionRequest = {
      type: 'worldAction',
      action: serialiseToJson(action),
      playerId: playerId,
    }
    await this.peerClient.sendRequest(message)
  }
}
