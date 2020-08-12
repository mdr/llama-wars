import * as R from 'ramda'
import { Client, ServerToClientMessageListener } from '../../server/client'
import { Server } from '../../server/server'
import { HOST_PLAYER_ID, PlayerId } from '../../world/player'
import { WorldState } from '../../world/world-state'
import { MenuButton } from '../../ui/menu-button'
import { GAME_SCENE_KEY, GameSceneData } from '../main-game/game-scene'
import { applyEvent } from '../../world/world-event-evaluator'
import { ServerToClientMessage } from '../../server/messages'
import { deserialiseFromJson } from '../../util/json-serialisation'
import { WorldEvent } from '../../world/world-events'
import { AudioKeys } from '../asset-keys'

export class CreatedLobbyScene {
  private readonly scene: Phaser.Scene
  private worldState: WorldState
  private readonly serverOrClient: Server | Client
  private readonly playerId: PlayerId
  private readonly playerNameTexts: Map<PlayerId, Phaser.GameObjects.Text> = new Map()
  private readonly startGameButton?: MenuButton
  private readonly waitingForHostText?: Phaser.GameObjects.Text
  private listener?: ServerToClientMessageListener

  constructor(scene: Phaser.Scene, serverOrClient: Server | Client, playerId: PlayerId, worldState: WorldState) {
    this.scene = scene
    this.serverOrClient = serverOrClient
    this.playerId = playerId
    this.worldState = worldState
    this.scene.sound.add(AudioKeys.CLICK)
    this.scene.add.text(100, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(24)
    if (this.playerId == HOST_PLAYER_ID) {
      this.startGameButton = new MenuButton(this.scene, 100, 0, 'Start Game', () => this.handleStartGame())
    } else {
      this.waitingForHostText = this.scene.add.text(100, 0, 'Waiting for host to start the game...')
    }
    if (serverOrClient instanceof Client) {
      this.actAsClient(serverOrClient)
    } else {
      this.actAsServer(serverOrClient)
    }
    this.sync()
  }

  private actAsClient = (client: Client): void => {
    this.listener = (message: ServerToClientMessage) => this.handleServerToClientMessage(message, client)
    client.addListener(this.listener)
  }

  private handleServerToClientMessage = (message: ServerToClientMessage, client: Client): void => {
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
          playerId: this.playerId,
        }
        this.scene.scene.start(GAME_SCENE_KEY, sceneData)
      }
    }
    this.sync()
  }

  public sync(): void {
    const requiredPlayerIds = this.worldState.getPlayerIds()
    const currentPlayerIds = Array.from(this.playerNameTexts.keys())
    const surplusPlayerIds = R.difference(currentPlayerIds, requiredPlayerIds)
    for (const playerId of surplusPlayerIds) {
      this.playerNameTexts.get(playerId)?.destroy()
    }
    const missingPlayerIds = R.difference(requiredPlayerIds, currentPlayerIds)
    for (const playerId of missingPlayerIds) {
      const player = this.worldState.getPlayer(playerId)
      const playerText = this.scene.add
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
            const plugin = this.scene.plugins.get('rexTextEdit') as any
            plugin.edit(playerText, {
              onClose: () => {
                if (this.serverOrClient) {
                  if (this.serverOrClient instanceof Server) {
                    this.serverOrClient.handleAction(playerId, { type: 'changePlayerName', name: playerText.text })
                  } else {
                    this.serverOrClient.sendAction(playerId, { type: 'changePlayerName', name: playerText.text })
                  }
                }
              },
            })
          }
        })
      this.playerNameTexts.set(playerId, playerText)
    }
    let y = 100
    const sortedPlayers = R.sortBy((player) => player.id, this.worldState.players)
    for (const player of sortedPlayers) {
      const playerText = this.playerNameTexts.get(player.id)!
      playerText.setText(player.name).setY(y)
      y += 50
    }
    if (this.startGameButton) this.startGameButton.setY(y)
    if (this.waitingForHostText) this.waitingForHostText.setY(y)
  }

  private actAsServer = (server: Server): void => {
    server.addListener(() => {
      this.worldState = server.worldState
      this.sync()
    })
  }

  private handleStartGame = () => {
    this.scene.sound.play(AudioKeys.CLICK)
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
    this.scene.scene.start(GAME_SCENE_KEY, sceneData)
  }
}
