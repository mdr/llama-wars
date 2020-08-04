import { Hex } from '../world/hex'
import { PlayerId } from '../world/world-state'
import { HitPoints } from '../world/unit'
import { hexCenter } from './game-scene'
import { healthBorderColour, healthEmptyColour, healthFullColour } from './colours'

export class UnitDisplayObject {
  private readonly scene: Phaser.Scene
  private readonly image: Phaser.GameObjects.Image
  private readonly healthBarGraphics: Phaser.GameObjects.Graphics
  private hex: Hex
  private hitPoints: HitPoints
  private readonly player: PlayerId

  private static IMAGE_OFFSET = 4
  private static HEALTH_BAR_OFFSET = { x: 25, y: 40 }

  constructor(scene: Phaser.Scene, hex: Hex, hitPoints: HitPoints, player: PlayerId) {
    this.scene = scene
    this.hex = hex
    this.hitPoints = hitPoints
    this.player = player
    this.image = scene.add.image(0, 0, 'llama').setScale(0.8).setTint(this.player == 1 ? 0xffbbbb : 0xbbbbff)
    this.healthBarGraphics = scene.add.graphics()
  }

  public update = () => {
    const unitPoint = hexCenter(this.hex)
    this.image.setPosition(unitPoint.x, unitPoint.y + UnitDisplayObject.IMAGE_OFFSET)
    this.healthBarGraphics.setPosition(unitPoint.x - UnitDisplayObject.HEALTH_BAR_OFFSET.x, unitPoint.y - UnitDisplayObject.HEALTH_BAR_OFFSET.y)
    this.healthBarGraphics.clear()
    this.healthBarGraphics.fillStyle(healthBorderColour)
    const barWidth = 50
    const barHeight = 12
    const borderThickness = 2
    const innerWidth = barWidth - 2 * borderThickness
    const innerHeight = barHeight - 2 * borderThickness
    this.healthBarGraphics.fillRect(0, 0, barWidth, barHeight)
    this.healthBarGraphics.fillStyle(healthEmptyColour)
    this.healthBarGraphics.fillRect(borderThickness, borderThickness, innerWidth, innerHeight)
    this.healthBarGraphics.fillStyle(healthFullColour)
    const { current, max } = this.hitPoints
    this.healthBarGraphics.fillRect(borderThickness, borderThickness, innerWidth * current / max, 8)
  }

  public setHex = (hex: Hex) => this.hex = hex
  public setHitPoints = (hitPoints: HitPoints) => this.hitPoints = hitPoints

  public move = (from: Hex, to: Hex) => {
    const beforeCoords = hexCenter(from)
    const afterCoords = hexCenter(to)
    this.image.setFlipX(afterCoords.x < beforeCoords.x)
    this.scene.tweens.add({
      targets: this.image,
      x: { from: beforeCoords.x, to: afterCoords.x },
      y: { from: beforeCoords.y + UnitDisplayObject.IMAGE_OFFSET, to: afterCoords.y + UnitDisplayObject.IMAGE_OFFSET },
      duration: 500,
      ease: 'Cubic',
    })
    this.scene.tweens.add({
      targets: this.healthBarGraphics,
      x: {
        from: beforeCoords.x - UnitDisplayObject.HEALTH_BAR_OFFSET.x,
        to: afterCoords.x - UnitDisplayObject.HEALTH_BAR_OFFSET.x,
      },
      y: {
        from: beforeCoords.y - UnitDisplayObject.HEALTH_BAR_OFFSET.y,
        to: afterCoords.y - UnitDisplayObject.HEALTH_BAR_OFFSET.y,
      },
      duration: 500,
      ease: 'Cubic',
    })
  }

  public attack = (from: Hex, to: Hex) => {

  }
}
