import { Client } from '../../server/client'
import { Server } from '../../server/server'
import { PlayerId } from '../../world/player'
import { WorldState } from '../../world/world-state'
import { GAME_SCENE_KEY, GameSceneData } from '../main-game/game-scene'
import { WorldEvent } from '../../world/world-events'
import { AudioKeys } from '../asset-keys'
import { LobbyDisplayObjects } from './lobby-display-objects'
import { WorldAction } from '../../world/world-actions'
import { WorldEventListener } from '../../server/world-state-owner'

export class CreatedLobbyScene {
  private readonly scene: Phaser.Scene
  private worldState: WorldState
  private readonly serverOrClient: Server | Client
  private readonly playerId: PlayerId
  private readonly lobbyDisplayObjects: LobbyDisplayObjects
  private listener?: WorldEventListener

  constructor(scene: Phaser.Scene, serverOrClient: Server | Client, playerId: PlayerId, worldState: WorldState) {
    this.scene = scene
    this.serverOrClient = serverOrClient
    this.playerId = playerId
    this.worldState = worldState
    this.scene.sound.pauseOnBlur = false
    this.scene.sound.add(AudioKeys.CLICK)
    this.scene.sound.add(AudioKeys.NEW_TURN)
    this.scene.sound.add(AudioKeys.PLAYER_JOINED_LOBBY)
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
    this.listener = (event: WorldEvent) => this.handleWorldEvent(event, client)
    client.addListener(this.listener)
  }

  private handleWorldEvent = (event: WorldEvent, client: Client): void => {
    this.worldState = this.worldState.applyEvent(event)
    switch (event.type) {
      case 'gameStarted':
        this.scene.sound.play(AudioKeys.NEW_TURN)
        if (this.listener) {
          client.removeListener(this.listener)
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

  private handleWorldEvent2 = (event: WorldEvent, server: Server): void => {
    this.worldState = this.worldState.applyEvent(event)
    switch (event.type) {
      case 'gameStarted':
        this.scene.sound.play(AudioKeys.NEW_TURN)
        if (this.listener) {
          server.removeListener(this.listener)
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

  private actAsServer = (server: Server): void => server.addListener((event) => this.handleWorldEvent2(event, server))

  private handleStartGame = () => {
    this.dispatchAction({ type: 'startGame' })
    this.launchGameScene()
  }
}
