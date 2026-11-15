import Scene = Phaser.Scene
import TweenBuilderConfig = Phaser.Types.Tweens.TweenBuilderConfig

export const playTween = (scene: Scene, config: TweenBuilderConfig): Promise<void> =>
  new Promise((resolve) => {
    scene.tweens.add({ ...config, onComplete: () => resolve() })
  })
