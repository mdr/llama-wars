import { AudioKeys, ImageKeys } from '../scenes/asset-keys'
import { GameObjects } from 'phaser'

export class PrimaryButton extends GameObjects.Container {
  private readonly image: GameObjects.Image
  private readonly text: GameObjects.Text

  constructor(scene: Phaser.Scene, x: number, y: number, text: string, onPressed: () => void) {
    super(scene, x, y, [])
    this.image = scene.add
      .image(0, 0, 'blank-button')
      .setInteractive()
      .on('pointerdown', () => this.image.setTexture(ImageKeys.BLANK_BUTTON_PRESSED))
      .on('pointerup', () => {
        this.image.setTexture(ImageKeys.BLANK_BUTTON)
        scene.sound.play(AudioKeys.CLICK)
        onPressed()
      })
      .on('pointerout', () => this.image.setTexture(ImageKeys.BLANK_BUTTON))
      .setOrigin(0, 0)
    this.text = scene.add
      .text(this.image.width / 2, this.image.height / 2, text, {
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setFontSize(18)
      .setShadow(2, 2, '#000000')
    this.add([this.image, this.text])
  }
}
