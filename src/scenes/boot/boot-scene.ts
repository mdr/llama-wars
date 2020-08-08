import { getGameWidth, getGameHeight } from '../../helpers'
import { AudioKeys } from '../asset-keys'
import FileConfig = Phaser.Types.Loader.FileConfig
import { GAME_SCENE_KEY, GameSceneData } from '../main-game/game-scene'
import { MAIN_MENU_SCENE_KEY } from '../main-menu/main-menu-scene'
import { Option } from '../../util/types'
import { openWorldEventDb } from '../../db/world-event-db'
import { Server } from '../../server/server'

export const BOOT_SCENE_KEY = 'Boot'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: BOOT_SCENE_KEY,
}

export class BootScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig)
  }

  public preload(): void {
    const halfWidth = getGameWidth(this) * 0.5
    const halfHeight = getGameHeight(this) * 0.5

    const progressBarHeight = 100
    const progressBarWidth = 400

    const progressBarContainer = this.add.rectangle(
      halfWidth,
      halfHeight,
      progressBarWidth,
      progressBarHeight,
      0x000000,
    )
    const progressBar = this.add.rectangle(
      halfWidth + 20 - progressBarContainer.width * 0.5,
      halfHeight,
      10,
      progressBarHeight - 20,
      0x888888,
    )

    const loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24)
    const percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24)
    const assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24)

    this.load.on('progress', (value: number) => {
      progressBar.width = (progressBarWidth - 30) * value

      const percent = value * 100
      percentText.setText(`${percent}%`)
    })

    this.load.on('fileprogress', (file: FileConfig) => {
      assetText.setText(file.key)
    })

    this.load.on('complete', () => {
      loadingText.destroy()
      percentText.destroy()
      assetText.destroy()
      progressBar.destroy()
      progressBarContainer.destroy()
      this.launchGame()
    })

    this.loadAssets()
  }

  private launchGame = async (): Promise<void> => {
    const gameId = getHash()
    if (gameId) {
      const worldEventDb = await openWorldEventDb()
      const isServer = await worldEventDb.hasEventsForGame(gameId)
      if (isServer) {
        const server = await Server.restoreGame(worldEventDb, gameId)
        const sceneData: GameSceneData = { server, gameId: gameId }
        this.scene.start(GAME_SCENE_KEY, sceneData)
      } else {
        const sceneData: GameSceneData = { gameId }
        this.scene.start(GAME_SCENE_KEY, sceneData)
      }
    } else {
      this.scene.start(MAIN_MENU_SCENE_KEY)
    }
  }

  private loadAssets() {
    // Source: https://opengameart.org/content/hex-tileset-pack
    this.load.image('llama', 'assets/sprites/llama_14.png')
    // https://opengameart.org/content/hourglass-icon
    this.load.image('hourglass', 'assets/sprites/Hourglass.png')

    // https://opengameart.org/content/37-hitspunches
    this.load.audio(AudioKeys.ATTACK, 'assets/audio/hit18.mp3.mp3')
    // https://opengameart.org/content/male-gruntyelling-sounds
    this.load.audio(AudioKeys.DEATH, 'assets/audio/1yell4.wav')
    // https://opengameart.org/content/grass-foot-step-sounds-yo-frankie
    this.load.audio(AudioKeys.WALK, 'assets/audio/sfx_step_grass_l.mp3')
    // https://opengameart.org/content/ui-sound-effects-pack
    this.load.audio(AudioKeys.NEW_TURN, 'assets/audio/MENU A_Select.wav')
  }
}

const getHash = (): Option<string> => {
  const hash = window.location.hash
  if (hash != '') {
    return hash.substr(1)
  }
}
