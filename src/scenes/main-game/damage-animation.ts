import { Hex } from '../../world/hex'
import { AnimationSpeed } from './display-objects'
import { hexCenter } from './game-scene'
import { getUiCamera } from './cameras'
import { playTween } from '../../util/phaser/tween-utils'
import TweenBuilderConfig = Phaser.Types.Tweens.TweenBuilderConfig
import { scaleSpeed } from './animations'

export const runDamageAnimation = async (
  scene: Phaser.Scene,
  location: Hex,
  damage: number,
  speed: AnimationSpeed,
): Promise<void> => {
  const locationPoint = hexCenter(location)
  const text = scene.add
    .text(locationPoint.x, locationPoint.y, damage.toString(), {
      color: '#ff8888',
      stroke: '#000000',
      strokeThickness: 2,
    })
    .setFontSize(26)
    .setOrigin(0.5)
  getUiCamera(scene).ignore(text)
  const duration = scaleSpeed(2000, speed)
  const tween1: TweenBuilderConfig = {
    targets: text,
    y: {
      from: locationPoint.y - 50,
      to: locationPoint.y - 75,
    },
    duration,
    ease: 'Linear',
  }
  const tween2: TweenBuilderConfig = {
    targets: text,
    alpha: { from: 1, to: 0 },
    duration,
    ease: 'Cubic.in',
  }
  await Promise.all([playTween(scene, tween1), playTween(scene, tween2)])
  text.destroy()
}
