import { MenuButton } from '../ui/menu-button'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'MainMenu',
}

export interface GameSceneData {
  mode: 'start' | 'join'
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
        const data: GameSceneData = { mode: 'start' }
        this.scene.start('Game', data)
      },
    )

    new MenuButton(this, 100, 250, 'Join Game', () => {
      const data: GameSceneData = { mode: 'join' }
      this.scene.start('Game', data)
    })

  }
}
