import { Hex } from '../../world/hex'
import { Unit, UnitType } from '../../world/unit'
import { hexCenter } from './game-scene'
import { getPlayerTint } from '../colours'
import { distanceBetweenPoints } from '../point'
import { playTween } from '../../util/phaser/tween-utils'
import { AnimationSpeed } from './display-objects'
import { randomIntInclusive } from '../../util/random-util'
import { AnimationKeys } from '../animations'
import { getUiCamera } from './cameras'
import { ImageKeys } from '../asset-keys'
import { syncHealthBar } from './health-bar'
import { calculateTweenXY, scaleSpeed } from './animations'
import { runDamageAnimation } from './damage-animation'
import { runDeathAnimation } from './death-animation'
import assert = require('assert')

const IMAGE_OFFSET = { x: 0, y: 4 }
const HEALTH_BAR_OFFSET = { x: -25, y: -40 }

const CRIA_SCALE = 0.6
const ORDINARY_SCALE = 0.8

export class UnitDisplayObject {
  private readonly scene: Phaser.Scene
  private unit: Unit
  private readonly image: Phaser.GameObjects.Sprite
  private readonly healthBarGraphics: Phaser.GameObjects.Graphics

  constructor(scene: Phaser.Scene, unit: Unit) {
    this.scene = scene
    this.unit = unit
    this.image = scene.add.sprite(0, 0, ImageKeys.LLAMA_2).setTint(getPlayerTint(this.unit.playerId))
    this.healthBarGraphics = scene.add.graphics()
    const uiCamera = getUiCamera(this.scene)
    uiCamera.ignore(this.image)
    uiCamera.ignore(this.healthBarGraphics)
  }

  public syncScene = (unit: Unit): void => {
    assert(unit.id === this.unit.id)
    this.unit = unit
    const unitPoint = hexCenter(this.unit.location)
    this.image
      .setPosition(unitPoint.x + IMAGE_OFFSET.x, unitPoint.y + IMAGE_OFFSET.y)
      .setScale(unit.type === UnitType.CRIA ? CRIA_SCALE : ORDINARY_SCALE)
    syncHealthBar(this.healthBarGraphics, unitPoint, this.unit.hitPoints)
  }

  public runMoveAnimation = async (from: Hex, to: Hex, speed: AnimationSpeed): Promise<void> => {
    const duration = scaleSpeed(500, speed)
    const beforeCoords = hexCenter(from)
    const afterCoords = hexCenter(to)
    this.image.anims.play(AnimationKeys.LLAMA_WALK)
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

  public runMatureAnimation = async (speed: AnimationSpeed): Promise<void> => {
    const duration = scaleSpeed(1000, speed)
    const tween = this.scene.tweens.create({
      targets: [this.image],
      scale: {
        from: CRIA_SCALE,
        to: ORDINARY_SCALE,
      },
      duration,
      ease: 'Cubic',
    })
    await playTween(tween)
  }

  public runDeathAnimation = async (speed: AnimationSpeed): Promise<void> =>
    runDeathAnimation(this.scene, this.image, this.healthBarGraphics, speed)

  public runSpitAnimation = async (from: Hex, to: Hex, speed: AnimationSpeed): Promise<void> => {
    const fromPoint = hexCenter(from)
    const toPoint = hexCenter(to)
    const distance = distanceBetweenPoints(fromPoint, toPoint)
    const image = this.scene.add.image(fromPoint.x, fromPoint.y, 'spit').setScale(0.8)
    getUiCamera(this.scene).ignore(image)
    const duration = scaleSpeed(distance * 4, speed)
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

  public runDamageAnimation = async (location: Hex, damage: number, speed: AnimationSpeed): Promise<void> =>
    runDamageAnimation(this.scene, location, damage, speed)

  public runEatAnimation = async (): Promise<void> => {
    if (randomIntInclusive(1, 3) === 1) {
      this.image.toggleFlipX()
    }
    this.image.anims.play(AnimationKeys.LLAMA_EAT)
  }

  public runAttackAnimation = async (from: Hex, to: Hex, speed: AnimationSpeed): Promise<void> => {
    const beforeCoords = hexCenter(from)
    const afterCoords = hexCenter(to)
    this.image.setFlipX(afterCoords.x < beforeCoords.x)
    this.image.anims.play(AnimationKeys.LLAMA_WALK)
    const duration = scaleSpeed(400, speed)
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
