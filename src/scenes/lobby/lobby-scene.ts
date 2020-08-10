import { INITIAL_WORLD_STATE } from '../../world/initial-world-state'

export const LOBBY_SCENE_KEY = 'Lobby'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: LOBBY_SCENE_KEY,
}

export class LobbyScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig)
  }

  public create = (): void => {
    this.add.text(100, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(24)
    const worldState = INITIAL_WORLD_STATE
    let y = 100
    for (const player of worldState.players) {
      const playerText = this.add
        .text(100, y, player.name, { fill: '#FFFFFF', fixedWidth: 200, backgroundColor: '#333333' })
        .setFontSize(18)
        .setPadding(0, 0, 0, 0)
        .setInteractive()
        .on('pointerdown', () => {
          const plugin = this.plugins.get('rexTextEdit') as any
          const editor = plugin.edit(playerText, {
            onClose: () => {
              return
            },
          })
        })
      y += 50
    }
  }
}
