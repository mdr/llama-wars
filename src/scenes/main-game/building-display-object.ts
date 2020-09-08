import { hexCenter } from './game-scene'
import { getPlayerTint } from '../colours'
import { getUiCamera } from './cameras'
import { ImageKeys } from '../asset-keys'
import { Building } from '../../world/building'
import assert = require('assert')

const IMAGE_OFFSET = { x: 0, y: 0 }
const ORDINARY_SCALE = 0.6

export class BuildingDisplayObject {
  private readonly scene: Phaser.Scene
  private building: Building
  private readonly image: Phaser.GameObjects.Sprite

  constructor(scene: Phaser.Scene, building: Building) {
    this.scene = scene
    this.building = building
    this.image = scene.add
      .sprite(0, 0, ImageKeys.CASTLE)
      .setTint(getPlayerTint(this.building.playerId))
      .setScale(ORDINARY_SCALE)
    const uiCamera = getUiCamera(this.scene)
    uiCamera.ignore(this.image)
  }

  public syncScene = (building: Building): void => {
    assert(building.id === this.building.id)
    this.building = building
    const buildingPoint = hexCenter(this.building.location)
    this.image.setPosition(buildingPoint.x + IMAGE_OFFSET.x, buildingPoint.y + IMAGE_OFFSET.y)
  }

  public destroy = (): void => {
    this.image.destroy()
  }
}
