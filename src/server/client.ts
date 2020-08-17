import {
  JoinedResponse,
  JoinRequest,
  RejoinedResponse,
  RejoinRequest,
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
    const peerClient = await PeerClient.connect(gameId)
    return new Client(peerClient)
  }

  public rejoin = async (playerId: PlayerId): Promise<WorldState> => {
    const rejoinRequest: RejoinRequest = { type: 'rejoin', playerId }
    const rejoinedResponse: RejoinedResponse = await this.peerClient.sendRequest(rejoinRequest)
    return WorldState.fromJson(rejoinedResponse.worldState)
  }

  public join = async (): Promise<{ playerId: PlayerId; worldState: WorldState }> => {
    const joinRequest: JoinRequest = { type: 'join' }
    const joinedResponse: JoinedResponse = await this.peerClient.sendRequest(joinRequest)
    const playerId = joinedResponse.playerId
    const worldState = WorldState.fromJson(joinedResponse.worldState)
    return { playerId, worldState }
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
