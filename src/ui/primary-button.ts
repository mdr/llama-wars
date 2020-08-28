import { AudioKeys, ImageKeys } from '../scenes/asset-keys'

export class PrimaryButton {
  private readonly image: Phaser.GameObjects.Image
  private readonly text: Phaser.GameObjects.Text

  constructor(scene: Phaser.Scene, x: number, y: number, text: string, onPressed: () => void) {
    this.image = scene.add
      .image(x, y, 'blank-button')
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
      .text(x + this.image.width / 2, y + this.image.height / 2, text, {
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setFontSize(18)
      .setShadow(2, 2, '#000000')
  }

  public setVisible = (visible: boolean): this => {
    this.image.setVisible(visible)
    this.text.setVisible(visible)
    return this
  }

  public setY = (y: number): this => {
    this.image.setY(y)
    this.text.setY(y + this.image.height / 2)
    return this
  }
}
