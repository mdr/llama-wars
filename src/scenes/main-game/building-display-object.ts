import { hexCenter } from './game-scene'
import { getPlayerTint } from '../colours'
import { getUiCamera } from './cameras'
import { ImageKeys } from '../asset-keys'
import { Building } from '../../world/building'
import assert = require('assert')
import { syncHealthBar } from './health-bar'
import { Hex } from '../../world/hex'
import { AnimationSpeed } from './display-objects'
import { runDamageAnimation } from './damage-animation'
import { scaleSpeed } from './animations'
import { playTween } from '../../util/phaser/tween-utils'
import { runDeathAnimation } from './death-animation'

const IMAGE_OFFSET = { x: 0, y: 0 }
const ORDINARY_SCALE = 0.6

export class BuildingDisplayObject {
  private readonly scene: Phaser.Scene
  private building: Building
  private readonly image: Phaser.GameObjects.Sprite
  private readonly healthBarGraphics: Phaser.GameObjects.Graphics

  constructor(scene: Phaser.Scene, building: Building) {
    this.scene = scene
    this.building = building
    this.image = scene.add
      .sprite(0, 0, ImageKeys.CASTLE)
      .setTint(getPlayerTint(this.building.playerId))
      .setScale(ORDINARY_SCALE)
    this.healthBarGraphics = scene.add.graphics()
    const uiCamera = getUiCamera(this.scene)
    uiCamera.ignore(this.image)
    uiCamera.ignore(this.healthBarGraphics)
  }

  public syncScene = (building: Building): void => {
    assert(building.id === this.building.id)
    this.building = building
    const buildingPoint = hexCenter(this.building.location)
    this.image.setPosition(buildingPoint.x + IMAGE_OFFSET.x, buildingPoint.y + IMAGE_OFFSET.y)
    syncHealthBar(this.healthBarGraphics, buildingPoint, this.building.hitPoints)
  }

  public runDeathAnimation = async (speed: AnimationSpeed): Promise<void> =>
    runDeathAnimation(this.scene, this.image, this.healthBarGraphics, speed)

  public runDamageAnimation = async (location: Hex, damage: number, speed: AnimationSpeed): Promise<void> =>
    runDamageAnimation(this.scene, location, damage, speed)

  public destroy = (): void => {
    this.scene.tweens.killTweensOf([this.healthBarGraphics, this.image])
    this.healthBarGraphics.destroy()
    this.image.destroy()
  }
}
