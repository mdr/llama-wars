import Tween = Phaser.Tweens.Tween

export const playTween = (tween: Tween): Promise<void> =>
  new Promise((resolve) => tween.setCallback('onComplete', resolve, []).play())
