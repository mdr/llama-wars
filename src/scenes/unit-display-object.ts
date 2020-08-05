import { Hex } from '../world/hex'
import { Unit } from '../world/unit'
import { hexCenter } from './game-scene'
import { HEALTH_BORDER_COLOUR, HEALTH_EMPTY_COLOUR, HEALTH_FULL_COLOUR, PLAYER_1_TINT, PLAYER_2_TINT } from './colours'
import { addPoints, Point } from './point'
import assert = require('assert')

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
    this.image = scene.add.image(0, 0, 'llama')
      .setScale(0.8)
      .setTint(this.unit.playerId == 1 ? PLAYER_1_TINT : PLAYER_2_TINT)
    this.healthBarGraphics = scene.add.graphics()
  }

  private getHealthBarPosition = (point: Point): Point => addPoints(point, HEALTH_BAR_OFFSET)

  public syncScene = () => {
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
    this.healthBarGraphics.fillRect(HEALTH_BAR_BORDER_THICKNESS, HEALTH_BAR_BORDER_THICKNESS, innerWidth * current / max, innerHeight)
  }

  public unitUpdated = (unit: Unit) => {
    assert(unit.id == this.unit.id)
    this.unit = unit
  }

  public move = (from: Hex, to: Hex) => {
    const beforeCoords = hexCenter(from)
    const afterCoords = hexCenter(to)
    this.image.setFlipX(afterCoords.x < beforeCoords.x)
    this.scene.tweens.add({
      targets: this.image,
      ...calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET),
      duration: 500,
      ease: 'Cubic',
    })
    this.scene.tweens.add({
      targets: this.healthBarGraphics,
      ...calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET),
      duration: 500,
      ease: 'Cubic',
    })
  }

  public attack = (from: Hex, to: Hex) => {
    const beforeCoords = hexCenter(from)
    const afterCoords = hexCenter(to)
    this.image.setFlipX(afterCoords.x < beforeCoords.x)
    this.scene.tweens.add({
      targets: this.image,
      ...calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET),
      duration: 400,
      ease: 'Cubic',
      yoyo: true,
    })
    this.scene.tweens.add({
      targets: this.healthBarGraphics,
      ...calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET),
      duration: 400,
      ease: 'Cubic',
      yoyo: true,
    })
  }

  public destroy = () => {
    this.healthBarGraphics.destroy()
    this.image.destroy()
  }
}

type TweenXY = { x: { from: number, to: number }, y: { from: number, to: number } }

const calculateTweenXY = (from: Point, to: Point, offset: Point): TweenXY =>
  ({
    x: {
      from: from.x + offset.x,
      to: to.x + offset.x,
    },
    y: {
      from: from.y + offset.y,
      to: to.y + offset.y,
    },
  })

