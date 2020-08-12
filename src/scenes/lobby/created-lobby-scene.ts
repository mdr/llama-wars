import { Client, ServerToClientMessageListener } from '../../server/client'
import { Server } from '../../server/server'
import { PlayerId } from '../../world/player'
import { WorldState } from '../../world/world-state'
import { GAME_SCENE_KEY, GameSceneData } from '../main-game/game-scene'
import { ServerToClientMessage } from '../../server/messages'
import { deserialiseFromJson } from '../../util/json-serialisation'
import { WorldEvent } from '../../world/world-events'
import { AudioKeys } from '../asset-keys'
import { LobbyDisplayObjects } from './lobby-display-objects'
import { WorldAction } from '../../world/world-actions'

export class CreatedLobbyScene {
  private readonly scene: Phaser.Scene
  private worldState: WorldState
  private readonly serverOrClient: Server | Client
  private readonly playerId: PlayerId
  private readonly lobbyDisplayObjects: LobbyDisplayObjects
  private listener?: ServerToClientMessageListener

  constructor(scene: Phaser.Scene, serverOrClient: Server | Client, playerId: PlayerId, worldState: WorldState) {
    this.scene = scene
    this.serverOrClient = serverOrClient
    this.playerId = playerId
    this.worldState = worldState
    this.scene.sound.add(AudioKeys.CLICK)
    this.lobbyDisplayObjects = this.makeLobbyDisplayObjects(scene, playerId)
    if (serverOrClient instanceof Client) {
      this.actAsClient(serverOrClient)
    } else {
      this.actAsServer(serverOrClient)
    }
    this.sync()
  }

  private makeLobbyDisplayObjects = (scene: Phaser.Scene, playerId: PlayerId) =>
    new LobbyDisplayObjects(scene, playerId, this.handleStartGame, this.handleChangePlayerName)

  private actAsClient = (client: Client): void => {
    this.listener = (message: ServerToClientMessage) => this.handleServerToClientMessage(message, client)
    client.addListener(this.listener)
  }

  private handleServerToClientMessage = (message: ServerToClientMessage, client: Client): void => {
    if (message.type == 'worldEvent') {
      const event: WorldEvent = deserialiseFromJson(message.event)
      this.worldState = this.worldState.applyEvent(event)
      if (event.type == 'gameStarted') {
        if (this.listener) {
          client.removeListener(this.listener)
          this.listener = undefined
        }
        this.launchGameScene()
      }
    }
    this.sync()
  }

  private launchGameScene = (): void => {
    const sceneData: GameSceneData = {
      serverOrClient: this.serverOrClient,
      worldState: this.worldState,
      playerId: this.playerId,
    }
    this.scene.scene.start(GAME_SCENE_KEY, sceneData)
  }

  private handleChangePlayerName = (name: string): void => this.dispatchAction({ type: 'changePlayerName', name })

  private dispatchAction = (action: WorldAction): void => {
    if (this.serverOrClient instanceof Server) {
      this.serverOrClient.handleAction(this.playerId, action)
    } else {
      this.serverOrClient.sendAction(this.playerId, action)
    }
  }

  public sync = (): void => this.lobbyDisplayObjects.sync(this.worldState)

  private actAsServer = (server: Server): void =>
    server.addListener(() => {
      this.worldState = server.worldState
      this.sync()
    })

  private handleStartGame = () => {
    this.dispatchAction({ type: 'startGame' })
    this.launchGameScene()
  }
}
