import { Point } from '../point'
import { ImageKeys } from '../asset-keys'

const HORIZONTAL_IMAGE_WIDTH = 74
const VERTICAL_IMAGE_HEIGHT = 59
const CORNER_WIDTH = 15
const CORNER_HEIGHT = 15
const THICKNESS = 4

export class UiBorderDisplayObject {
  private readonly scene: Phaser.Scene
  private readonly images: Phaser.GameObjects.Image[] = []
  private readonly topLeft: Point
  private readonly width: number
  private readonly height: number

  constructor(scene: Phaser.Scene, { topLeft, width, height }: { topLeft: Point; width: number; height: number }) {
    this.scene = scene
    this.topLeft = topLeft
    this.width = width
    this.height = height
    this.createCorners()
    this.createVerticalSections()
    this.createHorizontalSections()
  }

  private createHorizontalSections() {
    const horizontalWidth = this.width - 2 * CORNER_WIDTH
    const wholeCopies = Math.floor(horizontalWidth / HORIZONTAL_IMAGE_WIDTH)
    const excessWidth = horizontalWidth % HORIZONTAL_IMAGE_WIDTH
    for (let i = 0; i <= wholeCopies; i++) {
      const x = this.topLeft.x + CORNER_WIDTH + i * HORIZONTAL_IMAGE_WIDTH
      const yTop = this.topLeft.y
      const yBottom = this.topLeft.y + this.height - THICKNESS
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
    const verticalHeight = this.height - 2 * CORNER_HEIGHT
    const wholeCopies = Math.floor(verticalHeight / VERTICAL_IMAGE_HEIGHT)
    const excessHeight = verticalHeight % VERTICAL_IMAGE_HEIGHT
    for (let i = 0; i <= wholeCopies; i++) {
      const y = this.topLeft.y + CORNER_WIDTH + i * VERTICAL_IMAGE_HEIGHT
      const xLeft = this.topLeft.x
      const xRight = this.topLeft.x + this.width - THICKNESS
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
    const { x, y } = this.topLeft
    const x2 = x + this.width - CORNER_WIDTH
    const y2 = y + this.height - CORNER_HEIGHT
    const topLeftImage = this.scene.add.image(x, y, ImageKeys.BORDER_TOP_LEFT).setOrigin(0, 0)
    const topRightImage = this.scene.add.image(x2, y, ImageKeys.BORDER_TOP_RIGHT).setOrigin(0, 0)
    const bottomLeftImage = this.scene.add.image(x, y2, ImageKeys.BORDER_BOTTOM_LEFT).setOrigin(0, 0)
    const bottomRightImage = this.scene.add.image(x2, y2, ImageKeys.BORDER_BOTTOM_RIGHT).setOrigin(0, 0)
    this.images.push(topLeftImage, topRightImage, bottomLeftImage, bottomRightImage)
  }

  public setVisible = (visible: boolean): this => {
    for (const image of this.images) {
      image.setVisible(visible)
    }
    return this
  }
}
