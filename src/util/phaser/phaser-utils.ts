import * as Phaser from 'phaser'

export const getGameWidth = (scene: Phaser.Scene): number => scene.game.scale.width

export const getGameHeight = (scene: Phaser.Scene): number => scene.game.scale.height

/** Animations are global to the game, so only create one if no scene has already done so. */
export const ensureAnimation = (scene: Phaser.Scene, config: Phaser.Types.Animations.Animation): void => {
  if (config.key === undefined || !scene.anims.exists(config.key)) {
    scene.anims.create(config)
  }
}
