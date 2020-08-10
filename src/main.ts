import * as Phaser from 'phaser'
import Scenes from './scenes'
import TextEditPlugin from 'phaser3-rex-plugins/plugins/textedit-plugin.js'

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Llama Wars',

  type: Phaser.AUTO,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },

  scene: Scenes,

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  parent: 'game',
  dom: {
    createContainer: true,
  },
  backgroundColor: '#000000',
  plugins: {
    global: [
      {
        key: 'rexTextEdit',
        plugin: TextEditPlugin,
        start: true,
      },
    ],
  },
}

export const game = new Phaser.Game(gameConfig)

window.addEventListener('resize', () => {
  game.scale.setGameSize(window.innerWidth, window.innerHeight)
  game.scale.refresh()
})
