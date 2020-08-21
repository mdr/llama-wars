import { HOST_PLAYER_ID, Player, PlayerId } from '../../world/player'
import * as R from 'ramda'
import { WorldState } from '../../world/world-state'
import { AudioKeys, ImageKeys } from '../asset-keys'
import { PrimaryButton } from '../../ui/primary-button'
import { getPlayerTint } from '../colours'

interface PlayerObjects {
  nameText: Phaser.GameObjects.Text
  llama: Phaser.GameObjects.Sprite
  kickButton?: Phaser.GameObjects.Image
}

export class LobbyDisplayObjects {
  private readonly scene: Phaser.Scene
  private readonly playerId: PlayerId
  private readonly onStartGame: VoidFunction
  private readonly onChangePlayerName: (name: string) => void
  private readonly onKickPlayer: (playerId: PlayerId) => void

  private readonly playerObjects: Map<PlayerId, PlayerObjects> = new Map()
  private readonly hostCrown: Phaser.GameObjects.Image
  private readonly startGameButton?: PrimaryButton
  private readonly waitingForHostText?: Phaser.GameObjects.Text

  constructor(
    scene: Phaser.Scene,
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
      this.startGameButton = new PrimaryButton(this.scene, 100, 0, 'Start Game', this.handleStartGame)
    } else {
      this.waitingForHostText = this.scene.add.text(100, 0, 'Waiting for host to start the game...')
    }
    this.scene.anims.create({
      key: 'llama-walk',
      frames: [
        { key: ImageKeys.LLAMA_1 } as any,
        { key: ImageKeys.LLAMA_2 },
        { key: ImageKeys.LLAMA_3 },
        { key: ImageKeys.LLAMA_4 },
      ],
      frameRate: 8,
      repeat: -1,
    })
    this.hostCrown = this.scene.add.image(370, 0, 'crown').setScale(0.6)
  }

  private handleStartGame = () => {
    this.scene.sound.play(AudioKeys.CLICK)
    this.onStartGame()
  }

  public sync = (worldState: WorldState): void => {
    this.createAndDestroyPlayerObjects(worldState)
    let y = 100
    const sortedPlayers = worldState.getSortedPlayers()
    for (const player of sortedPlayers) {
      if (player.id === HOST_PLAYER_ID) {
        this.hostCrown.setY(y + 5)
      }
      const { nameText, llama, kickButton } = this.getPlayerObjects(player.id)
      nameText.setText(player.name).setY(y)
      llama.setY(y + 10)
      kickButton?.setY(y + 15)
      y += 50
    }
    if (this.startGameButton) {
      this.startGameButton.setY(y)
    }
    if (this.waitingForHostText) {
      this.waitingForHostText.setY(y)
    }
  }

  private getPlayerObjects = (playerId: PlayerId): PlayerObjects => {
    const playerObjects = this.playerObjects.get(playerId)
    if (!playerObjects) {
      throw new Error(`No player objects found for ${playerId}`)
    }
    return playerObjects
  }

  private createAndDestroyPlayerObjects = (worldState: WorldState): void => {
    const requiredPlayerIds = worldState.getPlayerIds()
    const currentPlayerIds = Array.from(this.playerObjects.keys())

    const surplusPlayerIds = R.difference(currentPlayerIds, requiredPlayerIds)
    for (const playerId of surplusPlayerIds) {
      const { nameText, llama, kickButton } = this.getPlayerObjects(playerId)
      nameText.destroy()
      llama.destroy()
      kickButton?.destroy()
      this.playerObjects.delete(playerId)
    }

    const missingPlayerIds = R.difference(requiredPlayerIds, currentPlayerIds)
    for (const playerId of missingPlayerIds) {
      const player = worldState.getPlayer(playerId)
      this.createObjectsForPlayer(player)
    }
  }

  private createObjectsForPlayer = (player: Player) => {
    const nameText = this.scene.add
      .text(140, 0, player.name, {
        fill: '#FFFFFF',
        fixedWidth: 200,
        backgroundColor: player.id === this.playerId ? '#333333' : '#000000',
      })
      .setFontSize(18)
      .setPadding(0, 0, 0, 0)
      .setInteractive()
      .on('pointerdown', () => this.handlePlayerTextClick(player, nameText))
    const llama = this.scene.add
      .sprite(110, 0, ImageKeys.LLAMA_EAT_1)
      .setScale(0.6)
      .setTint(getPlayerTint(player.id))
      .play('llama-walk')

    const kickButton =
      player.id === HOST_PLAYER_ID || this.playerId !== HOST_PLAYER_ID
        ? undefined
        : this.scene.add
            .image(370, 0, ImageKeys.DELETE_BUTTON_1)
            .setInteractive()
            .on('pointerout', () => kickButton?.setTexture(ImageKeys.DELETE_BUTTON_1))
            .on('pointerover', () => kickButton?.setTexture(ImageKeys.DELETE_BUTTON_2))
            .on('pointerup', () => {
              this.scene.sound.play(AudioKeys.CLICK)
              this.onKickPlayer(player.id)
            })
    const playerObjects: PlayerObjects = { nameText, llama, kickButton }
    this.playerObjects.set(player.id, playerObjects)
  }

  private handlePlayerTextClick = (player: Player, playerText: Phaser.GameObjects.Text): void => {
    if (player.id === this.playerId) {
      const plugin = this.scene.plugins.get('rexTextEdit') as any
      plugin.edit(playerText, {
        onClose: () => this.onChangePlayerName(playerText.text),
      })
    }
  }
}
