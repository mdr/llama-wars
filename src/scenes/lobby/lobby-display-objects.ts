import { HOST_PLAYER_ID, PlayerId } from '../../world/player'
import { MenuButton } from '../../ui/menu-button'
import * as R from 'ramda'
import { WorldState } from '../../world/world-state'
import { AudioKeys } from '../asset-keys'

export class LobbyDisplayObjects {
  private readonly scene: Phaser.Scene
  private readonly playerId: PlayerId
  private readonly onStartGame: VoidFunction
  private readonly onChangePlayerName: (name: string) => void

  private readonly playerNameTexts: Map<PlayerId, Phaser.GameObjects.Text> = new Map()
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
  }

  private handleStartGame = () => {
    this.scene.sound.play(AudioKeys.CLICK)
    this.onStartGame()
  }

  public sync = (worldState: WorldState): void => {
    const requiredPlayerIds = worldState.getPlayerIds()
    const currentPlayerIds = Array.from(this.playerNameTexts.keys())
    const surplusPlayerIds = R.difference(currentPlayerIds, requiredPlayerIds)
    for (const playerId of surplusPlayerIds) {
      this.playerNameTexts.get(playerId)?.destroy()
    }
    const missingPlayerIds = R.difference(requiredPlayerIds, currentPlayerIds)
    for (const playerId of missingPlayerIds) {
      const player = worldState.getPlayer(playerId)
      const playerText = this.scene.add
        .text(100, 0, player.name, {
          fill: '#FFFFFF',
          fixedWidth: 200,
          backgroundColor: playerId === this.playerId ? '#333333' : '#000000',
        })
        .setFontSize(18)
        .setPadding(0, 0, 0, 0)
        .setInteractive()
        .on('pointerdown', () => {
          if (playerId === this.playerId) {
            const plugin = this.scene.plugins.get('rexTextEdit') as any
            plugin.edit(playerText, {
              onClose: () => this.onChangePlayerName(playerText.text),
            })
          }
        })
      this.playerNameTexts.set(playerId, playerText)
    }
    let y = 100
    const sortedPlayers = R.sortBy((player) => player.id, worldState.players)
    for (const player of sortedPlayers) {
      const playerText = this.playerNameTexts.get(player.id)
      playerText?.setText(player.name).setY(y)
      y += 50
    }
    if (this.startGameButton) this.startGameButton.setY(y)
    if (this.waitingForHostText) this.waitingForHostText.setY(y)
  }
}
