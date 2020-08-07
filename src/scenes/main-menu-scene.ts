import { MenuButton } from '../ui/menu-button'
import { GameId } from './game-scene'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'MainMenu',
}

export interface GameSceneData {
  id?: GameId
}

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig)
  }

  public create(): void {
    this.add
      .text(100, 50, 'Llama Wars - Main Menu', {
        fill: '#FFFFFF',
      })
      .setFontSize(24)

    new MenuButton(this, 100, 150, 'Start Game', () => {
        const data: GameSceneData = {  }
        this.scene.start('Game', data)
      },
    )

  }
}
