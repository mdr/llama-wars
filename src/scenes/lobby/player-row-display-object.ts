import { Player } from '../../world/player'
import { AudioKeys, ImageKeys } from '../asset-keys'
import { getPlayerTint } from '../colours'
import { AnimationKeys } from '../animations'
import GameObjects = Phaser.GameObjects
import Scene = Phaser.Scene

export class PlayerRowDisplayObject {
  private readonly scene: Scene

  private player: Player
  private readonly isNameEditable: boolean
  private readonly canKick: boolean
  private readonly isHost: boolean

  private readonly onChangePlayerName: (name: string) => void
  private readonly onKick: () => void

  private readonly nameText: GameObjects.Text
  private readonly llama: GameObjects.Sprite
  private readonly kickButton?: GameObjects.Image
  private readonly hostCrown?: GameObjects.Image

  constructor(
    scene: Scene,
    player: Player,
    isNameEditable: boolean,
    canKick: boolean,
    isHost: boolean,
    onChangePlayerName: (name: string) => void,
    onKick: () => void,
  ) {
    this.scene = scene
    this.player = player
    this.isNameEditable = isNameEditable
    this.canKick = canKick
    this.isHost = isHost
    this.onChangePlayerName = onChangePlayerName
    this.onKick = onKick

    this.llama = this.createLlama()
    this.nameText = this.createNameText(player)
    this.kickButton = canKick ? this.createKickButton() : undefined
    this.hostCrown = isHost ? this.createHostCrown() : undefined
  }

  private createLlama = (): GameObjects.Sprite =>
    this.scene.add
      .sprite(110, 0, ImageKeys.LLAMA_EAT_1)
      .setScale(0.6)
      .setTint(getPlayerTint(this.player.id))
      .play(AnimationKeys.LLAMA_WALK)

  private createNameText = (player: Player): GameObjects.Text => {
    const nameText = this.scene.add
      .text(140, 0, player.name, {
        fill: '#FFFFFF',
        fixedWidth: 200,
        backgroundColor: this.isNameEditable ? '#333333' : '#000000',
      })
      .setFontSize(18)
      .setPadding(0, 0, 0, 0)
      .setInteractive()
    if (this.isNameEditable) {
      nameText.on('pointerdown', this.handlePlayerTextClick)
    }
    return nameText
  }

  private handlePlayerTextClick = (): void => {
    const plugin = this.scene.plugins.get('rexTextEdit') as any
    plugin.edit(this.nameText, {
      onClose: () => this.onChangePlayerName(this.nameText.text),
    })
  }

  private createKickButton = (): GameObjects.Image => {
    const kickButton = this.scene.add
      .image(370, 0, ImageKeys.DELETE_BUTTON_1)
      .setInteractive()
      .on('pointerout', () => kickButton.setTexture(ImageKeys.DELETE_BUTTON_1))
      .on('pointerover', () => kickButton.setTexture(ImageKeys.DELETE_BUTTON_2))
      .on('pointerup', this.handleKickButtonPressed)
    return kickButton
  }

  private handleKickButtonPressed = (): void => {
    this.scene.sound.play(AudioKeys.CLICK)
    this.onKick()
  }

  private createHostCrown = (): GameObjects.Image => this.scene.add.image(370, 0, 'crown').setScale(0.6)

  public destroy = (): void => {
    this.nameText.destroy()
    this.llama.destroy()
    this.kickButton?.destroy()
    this.hostCrown?.destroy()
  }

  public sync = (player: Player): void => {
    this.player = player
    this.nameText.setText(player.name)
  }

  public setY = (y: number): void => {
    this.nameText.setY(y)
    this.llama.setY(y + 10)
    this.kickButton?.setY(y + 15)
    this.hostCrown?.setY(y + 5)
  }
}
