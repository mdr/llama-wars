import { AnimationSpeed } from './display-objects'
import { scaleSpeed } from './animations'
import { playTween } from '../../util/phaser/tween-utils'

export const runDeathAnimation = async (
  scene: Phaser.Scene,
  image: Phaser.GameObjects.Sprite,
  healthBarGraphics: Phaser.GameObjects.Graphics,
  speed: AnimationSpeed,
): Promise<void> => {
  const duration = scaleSpeed(1000, speed)
  const tween = scene.tweens.create({
    targets: [image, healthBarGraphics],
    alpha: { from: 1, to: 0 },
    duration,
    ease: 'Cubic',
  })
  await playTween(tween)
}
