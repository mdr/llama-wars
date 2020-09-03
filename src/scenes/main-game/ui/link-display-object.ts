import { GameObjects } from 'phaser'
import EventData = Phaser.Types.Input.EventData
import Pointer = Phaser.Input.Pointer
import { Pixels } from '../../../util/types'
import { AudioKeys } from '../../asset-keys'

export const ACTION_LINK_COLOUR = '#cccc00'
export const HOVER_ACTION_LINK_COLOUR = '#ffff00'
const DEFAULT_BACKGROUND_COLOUR = '#00000000'
const PRESSED_BACKGROUND_COLOUR = '#333333'

export class LinkDisplayObject extends GameObjects.Text {
  private readonly onClick: () => void

  constructor(scene: Phaser.Scene, x: Pixels, y: Pixels, text: string, onClick: () => void) {
    super(scene, x, y, text, {})
    this.onClick = onClick
    this.setDefaultStyle()
      .setInteractive()
      .on('pointerup', this.handlePointerUp)
      .on('pointerdown', this.handlePointerDown)
      .on('pointerover', this.handlePointerOver)
      .on('pointerout', this.handlePointerOut)
  }

  private setDefaultStyle = (): this => this.setBackgroundColor(DEFAULT_BACKGROUND_COLOUR).setFill(ACTION_LINK_COLOUR)

  private handlePointerOut = (): void => {
    this.setDefaultStyle()
  }

  private handlePointerDown = (pointer: Pointer, x: Pixels, y: Pixels, event: EventData): void => {
    this.setBackgroundColor(PRESSED_BACKGROUND_COLOUR)
    event.stopPropagation()
  }

  private handlePointerOver = (pointer: Pointer): void => {
    this.setBackgroundColor(pointer.isDown ? PRESSED_BACKGROUND_COLOUR : DEFAULT_BACKGROUND_COLOUR)
    this.setFill(HOVER_ACTION_LINK_COLOUR)
  }

  private handlePointerUp = (pointer: Pointer, x: Pixels, y: Pixels, event: EventData) => {
    this.scene.sound.play(AudioKeys.CLICK)
    this.onClick()
    event.stopPropagation()
  }
}
