import { HOST_PLAYER_ID, Player, PlayerId } from '../../world/player'
import { MenuButton } from '../../ui/menu-button'
import * as R from 'ramda'
import { WorldState } from '../../world/world-state'
import { AudioKeys } from '../asset-keys'
import { PLAYER_TINTS } from '../colours'

interface PlayerObjects {
  nameText: Phaser.GameObjects.Text
  llama: Phaser.GameObjects.Sprite
}

export class LobbyDisplayObjects {
  private readonly scene: Phaser.Scene
  private readonly playerId: PlayerId
  private readonly onStartGame: VoidFunction
  private readonly onChangePlayerName: (name: string) => void

  private readonly playerObjects: Map<PlayerId, PlayerObjects> = new Map()
  private readonly hostCrown: Phaser.GameObjects.Image
  private readonly startGameButton?: MenuButton
  private readonly waitingForHostText?: Phaser.GameObjects.Text

  constructor(
    scene: Phaser.Scene,
    playerId: PlayerId,
    onStartGame: VoidFunction,
    onChangePlayerName: (name: string) => void,
  ) {
    this.scene = scene
    this.playerId = playerId
    this.onStartGame = onStartGame
    this.onChangePlayerName = onChangePlayerName
    this.scene.add.text(100, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(24)
    if (playerId === HOST_PLAYER_ID) {
      this.startGameButton = new MenuButton(this.scene, 100, 0, 'Start Game', this.handleStartGame)
    } else {
      this.waitingForHostText = this.scene.add.text(100, 0, 'Waiting for host to start the game...')
    }
    this.scene.anims.create({
      key: 'llama-walk',
      frames: [{ key: 'llama-1' } as any, { key: 'llama-2' }, { key: 'llama-3' }, { key: 'llama-4' }],
      frameRate: 8,
      repeat: -1,
    })
    this.hostCrown = this.scene.add.image(330, 0, 'crown').setScale(0.6)
  }

  private handleStartGame = () => {
    this.scene.sound.play(AudioKeys.CLICK)
    this.onStartGame()
  }

  public sync = (worldState: WorldState): void => {
    this.createAndDestroyPlayerObjects(worldState)
    let y = 100
    const sortedPlayers = R.sortBy((player) => player.id, worldState.players)
    for (const player of sortedPlayers) {
      if (player.id === HOST_PLAYER_ID) {
        this.hostCrown.setY(y + 5)
      }
      const { nameText, llama } = this.getPlayerObjects(player.id)
      nameText.setText(player.name).setY(y)
      llama.setY(y + 10)
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
      const { nameText, llama } = this.getPlayerObjects(playerId)
      nameText.destroy()
      llama.destroy()
      this.playerObjects.delete(playerId)
    }

    const missingPlayerIds = R.difference(requiredPlayerIds, currentPlayerIds)
    for (const playerId of missingPlayerIds) {
      const player = worldState.getPlayer(playerId)
      this.createObjectsForPlayer(player)
    }
  }

  private createObjectsForPlayer(player: Player) {
    const nameText = this.scene.add
      .text(100, 0, player.name, {
        fill: '#FFFFFF',
        fixedWidth: 200,
        backgroundColor: player.id === this.playerId ? '#333333' : '#000000',
      })
      .setFontSize(18)
      .setPadding(0, 0, 0, 0)
      .setInteractive()
      .on('pointerdown', () => this.handlePlayerTextClick(player, nameText))
    const llama = this.scene.add
      .sprite(70, 0, 'llama-1')
      .setScale(0.6)
      .setTint(PLAYER_TINTS[player.id - 1])
      .play('llama-walk')
    const playerObjects: PlayerObjects = { nameText, llama }
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
