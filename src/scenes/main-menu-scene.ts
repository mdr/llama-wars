import { MenuButton } from '../ui/menu-button';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'MainMenu',
};

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create(): void {
    this.add
      .text(100, 50, 'Llama Wars - Main Menu', {
        fill: '#FFFFFF',
      })
      .setFontSize(24);

    new MenuButton(this, 100, 150, 'Join Local Game', () => {
      this.scene.start('Game');
    });

    new MenuButton(this, 100, 250, 'Run Server', () => console.log('settings button clicked'));

  }
}
