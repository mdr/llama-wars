import { Scene } from 'phaser'
import Camera = Phaser.Cameras.Scene2D.Camera

export const UI_CAMERA = 'ui'

export const getUiCamera = (scene: Scene): Camera => {
  const camera = scene.cameras.getCamera(UI_CAMERA)
  if (camera === null) {
    throw new Error(`no camera named '${UI_CAMERA}'`)
  }
  return camera
}
