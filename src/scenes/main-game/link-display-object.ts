import { Point } from '../point'
import { GameObjects } from 'phaser'
import Scene = Phaser.Scene

export const ACTION_LINK_COLOUR = '#cccc00'
export const HOVER_ACTION_LINK_COLOUR = '#ffff00'

export class LinkDisplayObject {
  private readonly scene: Scene
  private text: GameObjects.Text
  private readonly onClick: () => void

  constructor(scene: Phaser.Scene, x: number, y: number, text: string, onClick: () => void) {
    this.scene = scene
    this.onClick = onClick
    this.text = this.scene.add
      .text(x, y, text, { fill: ACTION_LINK_COLOUR })
      .setInteractive()
      .on('pointerup', this.onClick)
      .on('pointerdown', this.handlePointerDown)
      .on('pointerover', this.handlePointerOver)
      .on('pointerout', this.handlePointerOut)
  }

  private handlePointerOut = (): void => {
    this.text.setBackgroundColor('#00000000')
    this.text.setFill(ACTION_LINK_COLOUR)
  }

  private handlePointerDown = (): void => {
    this.text.setBackgroundColor('#333333')
  }

  private handlePointerOver = (pointer: Phaser.Input.Pointer): void => {
    this.text.setBackgroundColor(pointer.isDown ? '#333333' : '#00000000')
    this.text.setFill(HOVER_ACTION_LINK_COLOUR)
  }

  public setText = (text: string): this => {
    this.text.setText(text)
    return this
  }

  public containsPoint = (point: Point): boolean => this.text.getBounds().contains(point.x, point.y)

  public setVisible = (visible: boolean): this => {
    this.text.setVisible(visible)
    return this
  }
}
