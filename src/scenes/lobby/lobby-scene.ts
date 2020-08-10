import * as R from 'ramda'
import { INITIAL_WORLD_STATE } from '../../world/initial-world-state'
import { Client, ServerToClientMessageListener } from '../../server/client'
import { Server } from '../../server/server'
import { PlayerId } from '../../world/player'
import { WorldState } from '../../world/world-state'
import { MenuButton } from '../../ui/menu-button'
import { GAME_SCENE_KEY, GameSceneData } from '../main-game/game-scene'
import { applyEvent } from '../../world/world-event-evaluator'
import { ServerToClientMessage } from '../../server/messages'
import { deserialiseFromJson } from '../../util/json-serialisation'
import { WorldEvent } from '../../world/world-events'

export const LOBBY_SCENE_KEY = 'Lobby'

export interface LobbySceneData {
  serverOrClient: Server | Client
  playerId: PlayerId
  worldState: WorldState
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: LOBBY_SCENE_KEY,
}

export class LobbyScene extends Phaser.Scene {
  private worldState: WorldState = INITIAL_WORLD_STATE
  private serverOrClient?: Server | Client
  private playerId?: PlayerId

  private playerNameTexts: Map<PlayerId, Phaser.GameObjects.Text> = new Map()
  private startGameButton?: MenuButton
  private waitingForHostText?: Phaser.GameObjects.Text
  private listener?: ServerToClientMessageListener

  constructor() {
    super(sceneConfig)
  }

  public sync() {
    const requiredPlayerIds = this.worldState.players.map((player) => player.id)
    const currentPlayerIds = Array.from(this.playerNameTexts.keys())
    const surplusPlayerIds = R.difference(currentPlayerIds, requiredPlayerIds)
    for (const playerId of surplusPlayerIds) {
      this.playerNameTexts.get(playerId)?.destroy()
    }
    const missingPlayerIds = R.difference(requiredPlayerIds, currentPlayerIds)
    for (const playerId of missingPlayerIds) {
      const player = this.worldState.findPlayer(playerId)!
      const playerText = this.add
        .text(100, 0, player.name, {
          fill: '#FFFFFF',
          fixedWidth: 200,
          backgroundColor: playerId == this.playerId ? '#333333' : '#000000',
        })
        .setFontSize(18)
        .setPadding(0, 0, 0, 0)
        .setInteractive()
        .on('pointerdown', () => {
          if (playerId == this.playerId) {
            const plugin = this.plugins.get('rexTextEdit') as any
            plugin.edit(playerText, {
              onClose: () => {
                return
              },
            })
          }
        })
      this.playerNameTexts.set(playerId, playerText)
    }
    let y = 100
    for (const player of this.worldState.players) {
      const playerText = this.playerNameTexts.get(player.id)!
      playerText.setText(player.name).setY(y)
      y += 50
    }
    if (this.startGameButton) this.startGameButton.setY(y)
    if (this.waitingForHostText) this.waitingForHostText.setY(y)
  }

  public create = (sceneData: LobbySceneData): void => {
    const { serverOrClient, playerId, worldState } = sceneData
    this.serverOrClient = serverOrClient
    this.playerId = playerId
    this.worldState = worldState

    if (serverOrClient instanceof Client) {
      this.actAsClient(serverOrClient, playerId)
    } else {
      this.actAServer(serverOrClient)
    }
    this.createConstantGameObjects()
    this.sync()
  }

  private actAServer = (server: Server): void => {
    server.addListener(() => {
      this.worldState = server.worldState
      this.sync()
    })
  }

  private createConstantGameObjects = (): void => {
    this.add.text(100, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(24)
    if (this.playerId == 1) {
      this.startGameButton = new MenuButton(this, 100, 0, 'Start Game', () => this.handleStartGame())
    } else {
      this.waitingForHostText = this.add.text(100, 0, 'Waiting for host to start the game...')
    }
  }

  private actAsClient = (client: Client, playerId: PlayerId): void => {
    this.listener = (message: ServerToClientMessage) => {
      this.handleServerToClientMessage(message, client, playerId)
    }
    client.addListener(this.listener)
  }

  private handleServerToClientMessage = (message: ServerToClientMessage, client: Client, playerId: PlayerId): void => {
    if (message.type == 'worldEvent') {
      const event: WorldEvent = deserialiseFromJson(message.event)
      const oldWorldState = this.worldState
      this.worldState = applyEvent(oldWorldState, event)
      if (event.type == 'gameStarted') {
        if (this.listener) {
          client.removeListener(this.listener)
          this.listener = undefined
        }
        const sceneData: GameSceneData = {
          serverOrClient: client,
          worldState: this.worldState,
          playerId: playerId,
        }
        this.scene.start(GAME_SCENE_KEY, sceneData)
      }
    }
    this.sync()
  }

  private handleStartGame = () => {
    if (!this.serverOrClient) {
      throw `Unexpected absence of serverOrClient`
    }
    if (!this.playerId) {
      throw `Unexpected absence of playerId`
    }
    if (this.serverOrClient instanceof Server) {
      this.serverOrClient.handleAction(this.playerId, { type: 'startGame' })
    }
    const sceneData: GameSceneData = {
      serverOrClient: this.serverOrClient,
      worldState: this.worldState,
      playerId: this.playerId,
    }
    this.scene.start(GAME_SCENE_KEY, sceneData)
  }
}
