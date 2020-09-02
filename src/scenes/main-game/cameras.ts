import { Scene } from 'phaser'
import Camera = Phaser.Cameras.Scene2D.Camera

export const UI_CAMERA = 'ui'

export const getUiCamera = (scene: Scene): Camera => scene.cameras.getCamera(UI_CAMERA)
