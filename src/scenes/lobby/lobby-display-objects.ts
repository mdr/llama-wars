import * as R from 'ramda'

import { HOST_PLAYER_ID, Player, PlayerId } from '../../world/player'
import { WorldState } from '../../world/world-state'
import { AudioKeys } from '../asset-keys'
import { PrimaryButton } from '../../ui/primary-button'
import { LLAMA_WALK } from '../animations'
import { PlayerRowDisplayObject } from './player-row-display-object'
import GameObjects = Phaser.GameObjects
import Scene = Phaser.Scene

export class LobbyDisplayObjects {
  private readonly scene: Scene
  private readonly playerId: PlayerId
  private readonly onStartGame: VoidFunction
  private readonly onChangePlayerName: (name: string) => void
  private readonly onKickPlayer: (playerId: PlayerId) => void

  private readonly playerRows: Map<PlayerId, PlayerRowDisplayObject> = new Map()
  private readonly startGameButton?: PrimaryButton
  private readonly waitingForHostText?: GameObjects.Text

  constructor(
    scene: Scene,
    playerId: PlayerId,
    onStartGame: VoidFunction,
    onChangePlayerName: (name: string) => void,
    onKickPlayer: (playerId: PlayerId) => void,
  ) {
    this.scene = scene
    this.playerId = playerId
    this.onStartGame = onStartGame
    this.onChangePlayerName = onChangePlayerName
    this.onKickPlayer = onKickPlayer
    this.scene.add.text(155, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(26)
    if (playerId === HOST_PLAYER_ID) {
      this.startGameButton = new PrimaryButton(this.scene, 100, 0, 'Start Game', this.handleStartGameButtonPressed)
      this.scene.add.existing(this.startGameButton)
    } else {
      this.waitingForHostText = this.scene.add.text(100, 0, 'Waiting for host to start the game...')
    }
    this.scene.anims.create(LLAMA_WALK)
  }

  private handleStartGameButtonPressed = (): void => {
    this.scene.sound.play(AudioKeys.CLICK)
    this.onStartGame()
  }

  private getPlayerRow = (playerId: PlayerId): PlayerRowDisplayObject => {
    const playerRow = this.playerRows.get(playerId)
    if (!playerRow) {
      throw new Error(`No display object found for player ${playerId}`)
    }
    return playerRow
  }

  private createAndDestroyPlayerObjects = (worldState: WorldState): void => {
    const requiredPlayerIds = worldState.getPlayerIds()
    const currentPlayerIds = Array.from(this.playerRows.keys())

    const surplusPlayerIds = R.difference(currentPlayerIds, requiredPlayerIds)
    for (const playerId of surplusPlayerIds) {
      this.deletePlayerRow(playerId)
    }

    const missingPlayerIds = R.difference(requiredPlayerIds, currentPlayerIds)
    for (const playerId of missingPlayerIds) {
      const player = worldState.getPlayer(playerId)
      this.createPlayerRow(player)
    }
  }

  private deletePlayerRow = (playerId: PlayerId): void => {
    const playerRow = this.getPlayerRow(playerId)
    playerRow.destroy()
    this.playerRows.delete(playerId)
  }

  private createPlayerRow = (player: Player): void => {
    const isNameEditable = player.id === this.playerId
    const canKick = this.playerId === HOST_PLAYER_ID && player.id !== this.playerId
    const isHost = player.id === HOST_PLAYER_ID
    const playerRow = new PlayerRowDisplayObject(
      this.scene,
      player,
      isNameEditable,
      canKick,
      isHost,
      this.onChangePlayerName,
      () => this.onKickPlayer(player.id),
    )
    this.playerRows.set(player.id, playerRow)
  }

  public sync = (worldState: WorldState): void => {
    this.createAndDestroyPlayerObjects(worldState)
    let y = 100
    const sortedPlayers = worldState.getSortedPlayers()
    for (const player of sortedPlayers) {
      const playerRow = this.getPlayerRow(player.id)
      playerRow.sync(player)
      playerRow.setY(y)
      y += 50
    }
    if (this.startGameButton) {
      this.startGameButton.setY(y)
    }
    if (this.waitingForHostText) {
      this.waitingForHostText.setY(y)
    }
  }
}
