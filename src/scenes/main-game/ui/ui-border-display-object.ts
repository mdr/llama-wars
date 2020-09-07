import { Point } from '../../point'
import { ImageKeys } from '../../asset-keys'
import { GameObjects } from 'phaser'
import { Pixels } from '../../../util/types'

const HORIZONTAL_IMAGE_WIDTH = 74
const VERTICAL_IMAGE_HEIGHT = 59
const CORNER_WIDTH = 15
const CORNER_HEIGHT = 15
const THICKNESS = 4

interface UiBorderDisplayObjectParams {
  topLeft: Point
  width: Pixels
  height: Pixels
}

export class UiBorderDisplayObject extends GameObjects.Container {
  private readonly images: GameObjects.Image[] = []
  private readonly topLeft: Point
  private readonly _width: Pixels
  private readonly _height: Pixels

  constructor(scene: Phaser.Scene, { topLeft, width, height }: UiBorderDisplayObjectParams) {
    super(scene, topLeft.x, topLeft.y, [])
    this.topLeft = topLeft
    this._width = width
    this._height = height
    this.createCorners()
    this.createVerticalSections()
    this.createHorizontalSections()
    this.add(this.images)
  }

  private createHorizontalSections() {
    const horizontalWidth = this._width - 2 * CORNER_WIDTH
    const wholeCopies = Math.floor(horizontalWidth / HORIZONTAL_IMAGE_WIDTH)
    const excessWidth = horizontalWidth % HORIZONTAL_IMAGE_WIDTH
    for (let i = 0; i <= wholeCopies; i++) {
      const x = CORNER_WIDTH + i * HORIZONTAL_IMAGE_WIDTH
      const yTop = 0
      const yBottom = this._height - THICKNESS
      const topHorizontalImage = this.scene.add.image(x, yTop, ImageKeys.BORDER_HORIZONTAL).setOrigin(0, 0)
      const bottomHorizontalImage = this.scene.add.image(x, yBottom, ImageKeys.BORDER_HORIZONTAL).setOrigin(0, 0)
      if (i === wholeCopies) {
        topHorizontalImage.setCrop(0, 0, excessWidth, 5)
        bottomHorizontalImage.setCrop(0, 0, excessWidth, 5)
      }
      this.images.push(bottomHorizontalImage, topHorizontalImage)
    }
  }

  private createVerticalSections() {
    const verticalHeight = this._height - 2 * CORNER_HEIGHT
    const wholeCopies = Math.floor(verticalHeight / VERTICAL_IMAGE_HEIGHT)
    const excessHeight = verticalHeight % VERTICAL_IMAGE_HEIGHT
    for (let i = 0; i <= wholeCopies; i++) {
      const y = CORNER_WIDTH + i * VERTICAL_IMAGE_HEIGHT
      const xLeft = 0
      const xRight = this._width - THICKNESS
      const leftVerticalImage = this.scene.add.image(xLeft, y, ImageKeys.BORDER_VERTICAL).setOrigin(0, 0)
      const rightVerticalImage = this.scene.add.image(xRight, y, ImageKeys.BORDER_VERTICAL).setOrigin(0, 0)
      if (i === wholeCopies) {
        leftVerticalImage.setCrop(0, 0, 5, excessHeight)
        rightVerticalImage.setCrop(0, 0, 5, excessHeight)
      }
      this.images.push(leftVerticalImage, rightVerticalImage)
    }
  }

  private createCorners() {
    const x2 = this._width - CORNER_WIDTH
    const y2 = this._height - CORNER_HEIGHT
    const topLeftImage = this.scene.add.image(0, 0, ImageKeys.BORDER_TOP_LEFT).setOrigin(0, 0)
    const topRightImage = this.scene.add.image(x2, 0, ImageKeys.BORDER_TOP_RIGHT).setOrigin(0, 0)
    const bottomLeftImage = this.scene.add.image(0, y2, ImageKeys.BORDER_BOTTOM_LEFT).setOrigin(0, 0)
    const bottomRightImage = this.scene.add.image(x2, y2, ImageKeys.BORDER_BOTTOM_RIGHT).setOrigin(0, 0)
    this.images.push(topLeftImage, topRightImage, bottomLeftImage, bottomRightImage)
  }
}
