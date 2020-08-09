import { Hex } from '../../world/hex'
import { Unit } from '../../world/unit'
import { hexCenter } from './game-scene'
import { HEALTH_BORDER_COLOUR, HEALTH_EMPTY_COLOUR, HEALTH_FULL_COLOUR, PLAYER_1_TINT, PLAYER_2_TINT } from '../colours'
import { addPoints, Point } from '../point'
import assert = require('assert')
import { playTween } from '../../util/phaser/tween-utils'

const HEALTH_BAR_WIDTH = 50
const HEALTH_BAR_HEIGHT = 12
const HEALTH_BAR_BORDER_THICKNESS = 2
const IMAGE_OFFSET = { x: 0, y: 4 }
const HEALTH_BAR_OFFSET = { x: -25, y: -40 }

export class UnitDisplayObject {
  private readonly scene: Phaser.Scene
  private unit: Unit
  private readonly image: Phaser.GameObjects.Image
  private readonly healthBarGraphics: Phaser.GameObjects.Graphics

  constructor(scene: Phaser.Scene, unit: Unit) {
    this.scene = scene
    this.unit = unit
    this.image = scene.add
      .image(0, 0, 'llama')
      .setScale(0.8)
      .setTint(this.unit.playerId == 1 ? PLAYER_1_TINT : PLAYER_2_TINT)
    this.healthBarGraphics = scene.add.graphics()
  }

  private getHealthBarPosition = (point: Point): Point => addPoints(point, HEALTH_BAR_OFFSET)

  public syncScene = (unit: Unit): void => {
    assert(unit.id == this.unit.id)
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

  public runMoveAnimation = async (from: Hex, to: Hex): Promise<void> => {
    const beforeCoords = hexCenter(from)
    const afterCoords = hexCenter(to)
    this.image.setFlipX(afterCoords.x < beforeCoords.x)
    const tween1 = this.scene.tweens.create({
      targets: this.image,
      ...calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET),
      duration: 500,
      ease: 'Cubic',
    })
    const tween2 = this.scene.tweens.create({
      targets: this.healthBarGraphics,
      ...calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET),
      duration: 500,
      ease: 'Cubic',
    })
    await Promise.all([playTween(tween1), playTween(tween2)])
  }

  public runDeathAnimation = async (): Promise<void> => {
    const tween = this.scene.tweens.create({
      targets: [this.image, this.healthBarGraphics],
      alpha: { from: 1, to: 0 },
      duration: 1000,
      ease: 'Cubic',
    })
    await playTween(tween)
  }

  public runAttackAnimation = async (from: Hex, to: Hex): Promise<void> => {
    const beforeCoords = hexCenter(from)
    const afterCoords = hexCenter(to)
    this.image.setFlipX(afterCoords.x < beforeCoords.x)
    const tween1 = this.scene.tweens.create({
      targets: this.image,
      ...calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET),
      duration: 400,
      ease: 'Cubic',
      yoyo: true,
    })
    const tween2 = this.scene.tweens.create({
      targets: this.healthBarGraphics,
      ...calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET),
      duration: 400,
      ease: 'Cubic',
      yoyo: true,
    })
    await Promise.all([playTween(tween1), playTween(tween2)])
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
