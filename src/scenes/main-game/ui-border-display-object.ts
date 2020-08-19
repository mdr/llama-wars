import { Point } from '../point'
import { ImageKeys } from '../asset-keys'

const HORIZONTAL_IMAGE_WIDTH = 74
const VERTICAL_IMAGE_HEIGHT = 59
const CORNER_WIDTH = 15
const CORNER_HEIGHT = 15
const THICKNESS = 4

export class UiBorderDisplayObject {
  private readonly scene: Phaser.Scene
  private readonly topLeftImage: Phaser.GameObjects.Image
  private readonly topImages: Phaser.GameObjects.Image[] = []
  private readonly leftImages: Phaser.GameObjects.Image[] = []
  private readonly topRightImage: Phaser.GameObjects.Image
  private readonly bottomLeftImage: Phaser.GameObjects.Image
  private readonly bottomRightImage: Phaser.GameObjects.Image

  constructor(scene: Phaser.Scene, { topLeft, width, height }: { topLeft: Point; width: number; height: number }) {
    this.scene = scene
    // const img = this.scene.add.image(topLeft.x, topLeft.y, ImageKeys.BORDER_VERTICAL).setOrigin(0, 0)
    this.topLeftImage = this.scene.add.image(topLeft.x, topLeft.y, ImageKeys.BORDER_TOP_LEFT).setOrigin(0, 0)
    this.topRightImage = this.scene.add
      .image(topLeft.x + width - CORNER_WIDTH, topLeft.y, ImageKeys.BORDER_TOP_RIGHT)
      .setOrigin(0, 0)
    this.bottomLeftImage = this.scene.add
      .image(topLeft.x, topLeft.y + height - CORNER_HEIGHT, ImageKeys.BORDER_BOTTOM_LEFT)
      .setOrigin(0, 0)
    this.bottomRightImage = this.scene.add
      .image(topLeft.x + width - CORNER_WIDTH, topLeft.y + height - CORNER_HEIGHT, ImageKeys.BORDER_BOTTOM_RIGHT)
      .setOrigin(0, 0)
    {
      const verticalHeight = height - 2 * CORNER_HEIGHT
      const wholeCopies = Math.floor(verticalHeight / VERTICAL_IMAGE_HEIGHT)
      const excessHeight = verticalHeight % VERTICAL_IMAGE_HEIGHT
      for (let i = 0; i <= wholeCopies; i++) {
        const leftVerticalImage = this.scene.add
          .image(topLeft.x, topLeft.y + CORNER_WIDTH + i * VERTICAL_IMAGE_HEIGHT, ImageKeys.BORDER_VERTICAL)
          .setOrigin(0, 0)
        if (i === wholeCopies) {
          leftVerticalImage.setCrop(0, 0, 5, excessHeight)
        }
        const rightVerticalImage = this.scene.add
          .image(
            topLeft.x + width - THICKNESS,
            topLeft.y + CORNER_WIDTH + i * VERTICAL_IMAGE_HEIGHT,
            ImageKeys.BORDER_VERTICAL,
          )
          .setOrigin(0, 0)
        if (i === wholeCopies) {
          rightVerticalImage.setCrop(0, 0, 5, excessHeight)
        }
        this.leftImages.push(leftVerticalImage)
        this.leftImages.push(rightVerticalImage)
      }
    }

    {
      const horizontalWidth = width - 2 * CORNER_WIDTH
      const wholeCopies = Math.floor(horizontalWidth / HORIZONTAL_IMAGE_WIDTH)
      const excessWidth = horizontalWidth % HORIZONTAL_IMAGE_WIDTH
      for (let i = 0; i <= wholeCopies; i++) {
        const topHorizontalImage = this.scene.add
          .image(topLeft.x + CORNER_WIDTH + i * HORIZONTAL_IMAGE_WIDTH, topLeft.y, ImageKeys.BORDER_HORIZONTAL)
          .setOrigin(0, 0)
        if (i === wholeCopies) {
          topHorizontalImage.setCrop(0, 0, excessWidth, 5)
        }
        const bottomHorizontalImage = this.scene.add
          .image(
            topLeft.x + CORNER_WIDTH + i * HORIZONTAL_IMAGE_WIDTH,
            topLeft.y + height - THICKNESS,
            ImageKeys.BORDER_HORIZONTAL,
          )
          .setOrigin(0, 0)
        if (i === wholeCopies) {
          bottomHorizontalImage.setCrop(0, 0, excessWidth, 5)
        }
        this.topImages.push(bottomHorizontalImage)
        this.topImages.push(topHorizontalImage)
      }
    }
  }

  public sync = (): void => {
    return
  }
}
