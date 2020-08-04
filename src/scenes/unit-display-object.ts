import { Hex } from '../world/hex'
import { PlayerId } from '../world/world-state'
import { HitPoints } from '../world/unit'
import { hexCenter } from './game-scene'
import { HEALTH_BORDER_COLOUR, HEALTH_EMPTY_COLOUR, HEALTH_FULL_COLOUR } from './colours'
import { addPoints, Point } from './point'

const HEALTH_BAR_WIDTH = 50
const HEALTH_BAR_HEIGHT = 12
const HEALTH_BAR_BORDER_THICKNESS = 2
const IMAGE_OFFSET = { x: 0, y: 4 }
const HEALTH_BAR_OFFSET = { x: -25, y: -40 }

export class UnitDisplayObject {
  private readonly scene: Phaser.Scene
  private readonly image: Phaser.GameObjects.Image
  private readonly healthBarGraphics: Phaser.GameObjects.Graphics
  private hex: Hex
  private hitPoints: HitPoints
  private readonly player: PlayerId

  constructor(scene: Phaser.Scene, hex: Hex, hitPoints: HitPoints, player: PlayerId) {
    this.scene = scene
    this.hex = hex
    this.hitPoints = hitPoints
    this.player = player
    this.image = scene.add.image(0, 0, 'llama').setScale(0.8).setTint(this.player == 1 ? 0xffbbbb : 0xbbbbff)
    this.healthBarGraphics = scene.add.graphics()
  }

  private getHealthBarPosition = (point: Point): Point => addPoints(point, HEALTH_BAR_OFFSET)

  public syncScene = () => {
    const unitPoint = hexCenter(this.hex)
    this.image.setPosition(unitPoint.x + IMAGE_OFFSET.x, unitPoint.y + IMAGE_OFFSET.y)
    this.syncHealthBar(unitPoint)
  }

  private syncHealthBar = (unitPoint: Point) => {
    const healthBarPosition = this.getHealthBarPosition(unitPoint)
    this.healthBarGraphics.setPosition(healthBarPosition.x, healthBarPosition.y)
    this.healthBarGraphics.clear()
    this.healthBarGraphics.fillStyle(HEALTH_BORDER_COLOUR)
    const innerWidth = HEALTH_BAR_WIDTH - 2 * HEALTH_BAR_BORDER_THICKNESS
    const innerHeight = HEALTH_BAR_HEIGHT - 2 * HEALTH_BAR_BORDER_THICKNESS
    this.healthBarGraphics.fillRect(0, 0, HEALTH_BAR_WIDTH, HEALTH_BAR_HEIGHT)
    this.healthBarGraphics.fillStyle(HEALTH_EMPTY_COLOUR)
    this.healthBarGraphics.fillRect(HEALTH_BAR_BORDER_THICKNESS, HEALTH_BAR_BORDER_THICKNESS, innerWidth, innerHeight)
    this.healthBarGraphics.fillStyle(HEALTH_FULL_COLOUR)
    const { current, max } = this.hitPoints
    this.healthBarGraphics.fillRect(HEALTH_BAR_BORDER_THICKNESS, HEALTH_BAR_BORDER_THICKNESS, innerWidth * current / max, 8)
  }

  public setHex = (hex: Hex) => this.hex = hex
  public setHitPoints = (hitPoints: HitPoints) => this.hitPoints = hitPoints

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

