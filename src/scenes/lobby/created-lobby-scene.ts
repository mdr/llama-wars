import { Client } from '../../server/client'
import { Server } from '../../server/server'
import { PlayerId } from '../../world/player'
import { GAME_SCENE_KEY, GameSceneData } from '../main-game/game-scene'
import { WorldEvent } from '../../world/events/world-events'
import { AudioKeys } from '../asset-keys'
import { LobbyDisplayObjects } from './lobby-display-objects'
import { WorldAction } from '../../world/world-actions'
import { WorldEventListener } from '../../server/world-state-owner'
import { fireAndForget } from '../../util/async-util'
import { LocalStorage } from '../local-storage/local'

export class CreatedLobbyScene {
  private readonly scene: Phaser.Scene
  private readonly serverOrClient: Server | Client
  private readonly playerId: PlayerId
  private readonly lobbyDisplayObjects: LobbyDisplayObjects
  private listener?: WorldEventListener

  constructor(scene: Phaser.Scene, serverOrClient: Server | Client) {
    this.scene = scene
    this.serverOrClient = serverOrClient
    this.playerId = serverOrClient.playerId
    this.scene.sound.pauseOnBlur = false
    this.scene.sound.add(AudioKeys.CLICK)
    this.scene.sound.add(AudioKeys.NEW_TURN)
    this.scene.sound.add(AudioKeys.PLAYER_JOINED_LOBBY)
    this.lobbyDisplayObjects = this.makeLobbyDisplayObjects(scene, this.playerId)
    if (serverOrClient instanceof Client) {
      this.actAsClient(serverOrClient)
    } else {
      this.actAsServer(serverOrClient)
    }
    this.sync()
  }

  private makeLobbyDisplayObjects = (scene: Phaser.Scene, playerId: PlayerId) =>
    new LobbyDisplayObjects(scene, playerId, this.handleStartGame, this.handleChangePlayerName, this.handleKickPlayer)

  private actAsClient = (client: Client): void => {
    this.listener = (event: WorldEvent) => this.handleWorldEvent(event, client)
    client.addListener(this.listener)
  }

  private handleWorldEvent = (event: WorldEvent, serverOrClient: Server | Client): void => {
    switch (event.type) {
      case 'gameStarted':
        this.scene.sound.play(AudioKeys.NEW_TURN)
        if (this.listener) {
          serverOrClient.removeListener(this.listener)
          this.listener = undefined
        }
        this.launchGameScene()
        break
      case 'playerAdded':
        this.scene.sound.play(AudioKeys.PLAYER_JOINED_LOBBY)
        this.sync()
        break
      default:
        this.sync()
    }
  }

  private launchGameScene = (): void => {
    const sceneData: GameSceneData = {
      serverOrClient: this.serverOrClient,
    }
    this.scene.scene.start(GAME_SCENE_KEY, sceneData)
  }

  private handleChangePlayerName = (name: string): void => {
    LocalStorage.storeName(name)
    this.dispatchAction({ type: 'changePlayerName', name })
  }

  private dispatchAction = (action: WorldAction): void =>
    fireAndForget(() => this.serverOrClient.sendAction(this.playerId, action))

  public sync = (): void => this.lobbyDisplayObjects.sync(this.serverOrClient.worldState)

  private actAsServer = (server: Server): void => {
    this.listener = (event) => this.handleWorldEvent(event, server)
    server.addListener(this.listener)
  }

  private handleStartGame = () => this.dispatchAction({ type: 'startGame' })

  private handleKickPlayer = (playerId: PlayerId) => {
    this.dispatchAction({ type: 'kickPlayer', playerId })
  }
}
