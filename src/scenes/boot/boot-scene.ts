import { getGameHeight, getGameWidth } from '../../helpers'
import { AudioKeys, ImageKeys } from '../asset-keys'
import { GAME_SCENE_KEY, GameId, GameSceneData } from '../main-game/game-scene'
import { MAIN_MENU_SCENE_KEY } from '../main-menu/main-menu-scene'
import { Option } from '../../util/types'
import { openWorldEventDb, WorldEventDb } from '../../db/world-event-db'
import { Server } from '../../server/server'
import { PlayerId } from '../../world/player'
import { Client } from '../../server/client'
import { LOBBY_SCENE_KEY, LobbySceneData } from '../lobby/lobby-scene'
import { getUrlInfo, setUrlInfo, UrlInfo } from './url-info'
import FileConfig = Phaser.Types.Loader.FileConfig

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

      const percent = Math.round(value * 100)
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
    const urlInfo = getUrlInfo()
    if (urlInfo) {
      await this.joinOrRestoreGame(urlInfo)
    } else {
      this.scene.start(MAIN_MENU_SCENE_KEY)
    }
  }

  private joinOrRestoreGame = async (urlInfo: UrlInfo): Promise<void> => {
    const worldEventDb = await openWorldEventDb()
    const gameId = urlInfo.gameId
    const playerId = urlInfo.playerId
    const isServer = await worldEventDb.hasEventsForGame(gameId)
    if (isServer) {
      await this.restoreGameAsServer(gameId, worldEventDb)
    } else {
      await this.joinOrRestoreClient(gameId, playerId)
    }
  }

  private joinOrRestoreClient = async (gameId: GameId, playerId: Option<PlayerId>): Promise<void> => {
    let client
    try {
      client = await Client.connect(gameId)
    } catch (e) {
      this.showMessage('Unable to join game, could not connect to server.')
      console.error(e)
      return
    }
    if (playerId) {
      this.rejoinAsClient(client, gameId, playerId)
    } else {
      this.joinAsClient(client, gameId)
    }
  }

  private joinAsClient = async (client: Client, gameId: GameId): Promise<void> => {
    const joinResult = await client.join()
    if (joinResult) {
      const { playerId } = joinResult
      setUrlInfo({ gameId, playerId })
      this.joinGame(client)
    } else {
      this.showMessage('Unable to join game as it has already started.')
    }
  }

  private showMessage = (message: string): void => {
    const { width, height } = this.game.scale.gameSize
    this.add
      .text(width / 2, height / 2, message)
      .setOrigin(0.5)
      .setFontSize(24)
  }

  private rejoinAsClient = async (client: Client, gameId: GameId, playerId: PlayerId): Promise<void> => {
    const worldState = await client.rejoin(playerId)
    if (worldState) {
      this.joinGame(client)
    } else {
      // TODO: inform client
    }
  }

  private joinGame = (client: Client) => {
    if (client.worldState.gameHasStarted) {
      const sceneData: GameSceneData = { serverOrClient: client }
      this.scene.start(GAME_SCENE_KEY, sceneData)
    } else {
      const sceneData: LobbySceneData = { serverOrClient: client }
      this.scene.start(LOBBY_SCENE_KEY, sceneData)
    }
  }

  private restoreGameAsServer = async (gameId: GameId, worldEventDb: WorldEventDb): Promise<void> => {
    const server = await Server.restoreGame(worldEventDb, gameId)
    const worldState = server.worldState
    if (worldState.gameHasStarted) {
      const sceneData: GameSceneData = { serverOrClient: server }
      this.scene.start(GAME_SCENE_KEY, sceneData)
    } else {
      const sceneData: LobbySceneData = { serverOrClient: server }
      this.scene.start(LOBBY_SCENE_KEY, sceneData)
    }
  }

  private loadAssets() {
    // Source: https://opengameart.org/content/lpc-style-farm-animals
    this.load.image(ImageKeys.LLAMA_1, 'assets/sprites/llama/llama_15.png')
    this.load.image(ImageKeys.LLAMA_2, 'assets/sprites/llama/llama_14.png')
    this.load.image(ImageKeys.LLAMA_3, 'assets/sprites/llama/llama_13.png')
    this.load.image(ImageKeys.LLAMA_4, 'assets/sprites/llama/llama_12.png')
    this.load.image(ImageKeys.LLAMA_EAT_1, 'assets/sprites/llama-eat/llama_eat_12.png')
    this.load.image(ImageKeys.LLAMA_EAT_2, 'assets/sprites/llama-eat/llama_eat_13.png')
    this.load.image(ImageKeys.LLAMA_EAT_3, 'assets/sprites/llama-eat/llama_eat_14.png')
    this.load.image(ImageKeys.LLAMA_EAT_4, 'assets/sprites/llama-eat/llama_eat_15.png')

    // https://opengameart.org/content/rpg-gui-construction-kit-v10
    this.load.image(ImageKeys.BORDER_TOP_LEFT, 'assets/sprites/border/border-top-left.png')
    this.load.image(ImageKeys.BORDER_TOP_RIGHT, 'assets/sprites/border/border-top-right.png')
    this.load.image(ImageKeys.BORDER_BOTTOM_LEFT, 'assets/sprites/border/border-bottom-left.png')
    this.load.image(ImageKeys.BORDER_BOTTOM_RIGHT, 'assets/sprites/border/border-bottom-right.png')
    this.load.image(ImageKeys.BORDER_HORIZONTAL, 'assets/sprites/border/border-horizontal.png')
    this.load.image(ImageKeys.BORDER_VERTICAL, 'assets/sprites/border/border-vertical.png')

    // https://opengameart.org/content/hourglass-icon
    this.load.image(ImageKeys.HOURGLASS, 'assets/sprites/Hourglass.png')
    // https://opengameart.org/content/grass-textures-tiles
    // https://opengameart.org/content/grass-texture
    this.load.image(ImageKeys.GRASS, 'assets/sprites/grass2.png')
    // https://opengameart.org/content/puddle-corpses
    this.load.image(ImageKeys.SPIT, 'assets/sprites/puddle_light_blue.png')
    // https://opengameart.org/content/world-map-tiles
    this.load.image(ImageKeys.MOUNTAIN, 'assets/sprites/mountains_outer.png')
    // https://opengameart.org/content/game-icons-0
    this.load.image(ImageKeys.CROWN, 'assets/sprites/crown.png')

    // https://opengameart.org/content/37-hitspunches
    this.load.audio(AudioKeys.ATTACK_1, 'assets/audio/hit14.mp3.mp3')
    this.load.audio(AudioKeys.ATTACK_2, 'assets/audio/hit17.mp3.mp3')
    this.load.audio(AudioKeys.ATTACK_3, 'assets/audio/hit18.mp3.mp3')
    // https://opengameart.org/content/male-gruntyelling-sounds
    this.load.audio(AudioKeys.DEATH, 'assets/audio/1yell4.wav')
    // https://opengameart.org/content/grass-foot-step-sounds-yo-frankie
    this.load.audio(AudioKeys.WALK, 'assets/audio/sfx_step_grass_l.mp3')
    // https://opengameart.org/content/ui-sound-effects-pack
    this.load.audio(AudioKeys.NEW_TURN, 'assets/audio/MENU A_Select.wav')
    this.load.audio(AudioKeys.PLAYER_JOINED_LOBBY, 'assets/audio/MENU B_Select.wav')
    this.load.audio(AudioKeys.PLAYER_DEFEATED, 'assets/audio/MESSAGE-B_Decline.wav')

    // https://opengameart.org/content/clear-skies
    this.load.audio(AudioKeys.VICTORY_MUSIC, 'assets/audio/Clear Skies.mp3')

    // https://opengameart.org/content/gui-sound-effects
    this.load.audio(AudioKeys.CLICK, 'assets/audio/click.wav')
    //https://freesound.org/people/tvlaudio/sounds/267897/
    this.load.audio(AudioKeys.SPIT, 'assets/audio/spit.wav')
  }
}
