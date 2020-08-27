import { Point } from '../point'
import { GameObjects } from 'phaser'

export const ACTION_LINK_COLOUR = '#cccc00'
export const HOVER_ACTION_LINK_COLOUR = '#ffff00'
const DEFAULT_BACKGROUND_COLOUR = '#00000000'
const PRESSED_BACKGROUND_COLOUR = '#333333'

export class LinkDisplayObject extends GameObjects.Text {
  private readonly onClick: () => void

  constructor(scene: Phaser.Scene, x: number, y: number, text: string, onClick: () => void) {
    super(scene, x, y, text, {})
    this.onClick = onClick
    this.setDefaultStyle()
      .setInteractive()
      .on('pointerup', this.onClick)
      .on('pointerdown', this.handlePointerDown)
      .on('pointerover', this.handlePointerOver)
      .on('pointerout', this.handlePointerOut)
  }

  private setDefaultStyle = (): this => this.setBackgroundColor(DEFAULT_BACKGROUND_COLOUR).setFill(ACTION_LINK_COLOUR)

  private handlePointerOut = (): void => {
    this.setDefaultStyle()
  }

  private handlePointerDown = (): void => {
    this.setBackgroundColor(PRESSED_BACKGROUND_COLOUR)
  }

  private handlePointerOver = (pointer: Phaser.Input.Pointer): void => {
    this.setBackgroundColor(pointer.isDown ? PRESSED_BACKGROUND_COLOUR : DEFAULT_BACKGROUND_COLOUR)
    this.setFill(HOVER_ACTION_LINK_COLOUR)
  }

  public containsPoint = (point: Point): boolean => this.getBounds().contains(point.x, point.y)
}
