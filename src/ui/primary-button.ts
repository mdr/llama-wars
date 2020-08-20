import { AudioKeys, ImageKeys } from '../scenes/asset-keys'

export class PrimaryButton {
  private readonly endTurnButton: Phaser.GameObjects.Image
  private readonly endTurnText: Phaser.GameObjects.Text

  constructor(scene: Phaser.Scene, x: number, y: number, text: string, onPressed: () => void) {
    this.endTurnButton = scene.add
      .image(x, y, 'blank-button')
      .setInteractive()
      .on('pointerdown', () => this.endTurnButton.setTexture(ImageKeys.BLANK_BUTTON_PRESSED))
      .on('pointerup', () => {
        this.endTurnButton.setTexture(ImageKeys.BLANK_BUTTON)
        scene.sound.play(AudioKeys.CLICK)
        onPressed()
      })
      .on('pointerout', () => this.endTurnButton.setTexture(ImageKeys.BLANK_BUTTON))
      .setOrigin(0, 0)
    this.endTurnText = scene.add
      .text(x + this.endTurnButton.width / 2, y + this.endTurnButton.height / 2, text, {
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setFontSize(18)
      .setShadow(2, 2, '#000000')
  }

  public setVisible = (visible: boolean): void => {
    this.endTurnButton.setVisible(visible)
    this.endTurnText.setVisible(visible)
  }
}
