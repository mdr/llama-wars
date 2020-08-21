import { Hex } from '../../world/hex'
import { Unit } from '../../world/unit'
import { hexCenter } from './game-scene'
import { getPlayerTint, HEALTH_BORDER_COLOUR, HEALTH_EMPTY_COLOUR, HEALTH_FULL_COLOUR } from '../colours'
import { addPoints, distanceBetweenPoints, Point } from '../point'
import { playTween } from '../../util/phaser/tween-utils'
import { AnimationSpeed } from './display-objects'
import { randomIntInclusive } from '../../util/random-util'
import assert = require('assert')

const HEALTH_BAR_WIDTH = 50
const HEALTH_BAR_HEIGHT = 12
const HEALTH_BAR_BORDER_THICKNESS = 2
const IMAGE_OFFSET = { x: 0, y: 4 }
const HEALTH_BAR_OFFSET = { x: -25, y: -40 }

export class UnitDisplayObject {
  private readonly scene: Phaser.Scene
  private unit: Unit
  private readonly image: Phaser.GameObjects.Sprite
  private readonly healthBarGraphics: Phaser.GameObjects.Graphics

  constructor(scene: Phaser.Scene, unit: Unit) {
    this.scene = scene
    this.unit = unit
    this.image = scene.add.sprite(0, 0, 'llama-2').setScale(0.8).setTint(getPlayerTint(this.unit.playerId))
    this.healthBarGraphics = scene.add.graphics()
  }

  private getHealthBarPosition = (point: Point): Point => addPoints(point, HEALTH_BAR_OFFSET)

  public syncScene = (unit: Unit): void => {
    assert(unit.id === this.unit.id)
    this.unit = unit
    const unitPoint = hexCenter(this.unit.location)
    this.image.setPosition(unitPoint.x + IMAGE_OFFSET.x, unitPoint.y + IMAGE_OFFSET.y)
    this.syncHealthBar(unitPoint)
  }

  private syncHealthBar = (unitPoint: Point) => {
    const healthBarPosition = this.getHealthBarPosition(unitPoint)
    this.healthBarGraphics.setPosition(healthBarPosition.x, healthBarPosition.y)
    this.healthBarGraphics.clear()

    // Draw border
    const innerWidth = HEALTH_BAR_WIDTH - 2 * HEALTH_BAR_BORDER_THICKNESS
    const innerHeight = HEALTH_BAR_HEIGHT - 2 * HEALTH_BAR_BORDER_THICKNESS
    this.healthBarGraphics.fillStyle(HEALTH_BORDER_COLOUR)
    this.healthBarGraphics.fillRect(0, 0, HEALTH_BAR_WIDTH, HEALTH_BAR_HEIGHT)

    // Draw empty background
    this.healthBarGraphics.fillStyle(HEALTH_EMPTY_COLOUR)
    this.healthBarGraphics.fillRect(HEALTH_BAR_BORDER_THICKNESS, HEALTH_BAR_BORDER_THICKNESS, innerWidth, innerHeight)

    // Fill in bar
    const { current, max } = this.unit.hitPoints
    this.healthBarGraphics.fillStyle(HEALTH_FULL_COLOUR)
    this.healthBarGraphics.fillRect(
      HEALTH_BAR_BORDER_THICKNESS,
      HEALTH_BAR_BORDER_THICKNESS,
      (innerWidth * current) / max,
      innerHeight,
    )
  }

  public runMoveAnimation = async (from: Hex, to: Hex, speed: AnimationSpeed): Promise<void> => {
    const duration = this.scaleSpeed(500, speed)
    const beforeCoords = hexCenter(from)
    const afterCoords = hexCenter(to)
    this.image.anims.play('llama-walk')
    this.image.setFlipX(afterCoords.x < beforeCoords.x)
    const tween1 = this.scene.tweens.create({
      targets: this.image,
      ...calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET),
      duration: duration,
      ease: 'Cubic',
    })
    const tween2 = this.scene.tweens.create({
      targets: this.healthBarGraphics,
      ...calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET),
      duration: duration,
      ease: 'Cubic',
    })
    await Promise.all([playTween(tween1), playTween(tween2)])
    const frame = this.image.anims.currentAnim.frames[1]
    this.image.anims.stopOnFrame(frame)
  }

  private scaleSpeed = (duration: number, speed: AnimationSpeed) => (speed === 'normal' ? duration : duration / 4)

  public runDeathAnimation = async (speed: AnimationSpeed): Promise<void> => {
    const duration = this.scaleSpeed(1000, speed)
    const tween = this.scene.tweens.create({
      targets: [this.image, this.healthBarGraphics],
      alpha: { from: 1, to: 0 },
      duration,
      ease: 'Cubic',
    })
    await playTween(tween)
  }

  public runSpitAnimation = async (from: Hex, to: Hex, speed: AnimationSpeed): Promise<void> => {
    const fromPoint = hexCenter(from)
    const toPoint = hexCenter(to)
    const distance = distanceBetweenPoints(fromPoint, toPoint)
    const image = this.scene.add.image(fromPoint.x, fromPoint.y, 'spit').setScale(0.8)
    const duration = this.scaleSpeed(distance * 4, speed)
    const tween = this.scene.tweens.create({
      targets: image,
      x: {
        from: fromPoint.x,
        to: toPoint.x,
      },
      y: {
        from: fromPoint.y,
        to: toPoint.y,
      },
      duration: duration,
      ease: 'Quad',
    })
    await playTween(tween)
    image.destroy()
  }

  public runDamageAnimation = async (location: Hex, damage: number, speed: AnimationSpeed): Promise<void> => {
    const locationPoint = hexCenter(location)
    const text = this.scene.add
      .text(locationPoint.x, locationPoint.y, damage.toString(), {
        color: '#ff8888',
        stroke: '#000000',
        strokeThickness: 2,
      })
      .setFontSize(26)
      .setOrigin(0.5)
    const duration = this.scaleSpeed(2000, speed)
    const tween1 = this.scene.tweens.create({
      targets: text,
      y: {
        from: locationPoint.y - 50,
        to: locationPoint.y - 75,
      },
      duration,
      ease: 'Linear',
    })
    const tween2 = this.scene.tweens.create({
      targets: text,
      alpha: { from: 1, to: 0 },
      duration,
      ease: 'Cubic.in',
    })
    await Promise.all([playTween(tween1), playTween(tween2)])
    text.destroy()
  }

  public runEatAnimation = async (): Promise<void> => {
    if (randomIntInclusive(1, 3) === 1) {
      this.image.toggleFlipX()
    }
    this.image.anims.play('llama-eat')
  }

  public runAttackAnimation = async (from: Hex, to: Hex, speed: AnimationSpeed): Promise<void> => {
    const beforeCoords = hexCenter(from)
    const afterCoords = hexCenter(to)
    this.image.setFlipX(afterCoords.x < beforeCoords.x)
    this.image.anims.play('llama-walk')
    const duration = this.scaleSpeed(400, speed)
    const tween1 = this.scene.tweens.create({
      targets: this.image,
      ...calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET),
      duration,
      ease: 'Cubic',
      yoyo: true,
    })
    const tween2 = this.scene.tweens.create({
      targets: this.healthBarGraphics,
      ...calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET),
      duration,
      ease: 'Cubic',
      yoyo: true,
    })
    await Promise.all([playTween(tween1), playTween(tween2)])
    const frame = this.image.anims.currentAnim.frames[1]
    this.image.anims.stopOnFrame(frame)
  }

  public destroy = (): void => {
    this.scene.tweens.killTweensOf([this.healthBarGraphics, this.image])
    this.healthBarGraphics.destroy()
    this.image.destroy()
  }
}

type TweenXY = { x: { from: number; to: number }; y: { from: number; to: number } }

const calculateTweenXY = (from: Point, to: Point, offset: Point): TweenXY => ({
  x: {
    from: from.x + offset.x,
    to: to.x + offset.x,
  },
  y: {
    from: from.y + offset.y,
    to: to.y + offset.y,
  },
})
