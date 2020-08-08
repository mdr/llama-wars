import { MenuButton } from '../../ui/menu-button'
import { GAME_SCENE_KEY, GameSceneData } from '../main-game/game-scene'
import { Server } from '../../server/server'

export const MAIN_MENU_SCENE_KEY = 'MainMenu'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: MAIN_MENU_SCENE_KEY,
}

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig)
  }

  public create(): void {
    this.add.text(100, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(24)

    new MenuButton(this, 100, 150, 'Start Game', () => {
      const data: GameSceneData = {}
      this.scene.start(GAME_SCENE_KEY, data)
    })
  }
}
