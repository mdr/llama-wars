import { getGameWidth, getGameHeight } from '../../helpers'
import { AudioKeys } from '../asset-keys'
import FileConfig = Phaser.Types.Loader.FileConfig
import { GAME_SCENE_KEY, GameId, GameSceneData } from '../main-game/game-scene'
import { MAIN_MENU_SCENE_KEY } from '../main-menu/main-menu-scene'
import { Option } from '../../util/types'
import { openWorldEventDb, WorldEventDb } from '../../db/world-event-db'
import { Server } from '../../server/server'
import { PlayerId } from '../../world/player'
import { Client, ServerToClientMessageListener } from '../../server/client'
import { WorldState } from '../../world/world-state'
import { ServerToClientMessage } from '../../server/messages'

export const BOOT_SCENE_KEY = 'Boot'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: BOOT_SCENE_KEY,
}

export class BootScene extends Phaser.Scene {
  private joinedListener: Option<ServerToClientMessageListener>
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
    const urlInfo = getUrlInfo()
    if (urlInfo) {
      await this.restoreGame(urlInfo)
    } else {
      this.scene.start(MAIN_MENU_SCENE_KEY)
    }
  }

  private restoreGame = async (urlInfo: UrlInfo): Promise<void> => {
    const worldEventDb = await openWorldEventDb()
    const gameId = urlInfo.gameId
    const isServer = await worldEventDb.hasEventsForGame(gameId)
    if (isServer) {
      await this.restoreServer(gameId, worldEventDb)
    } else {
      await this.restoreClient(gameId)
    }
  }

  private restoreClient = async (gameId: GameId): Promise<void> => {
    const client = await Client.connect(gameId)
    client.send({ type: 'join' })
    this.joinedListener = (message: ServerToClientMessage) => {
      if (message.type == 'joined') {
        const playerId = message.playerId
        setUrlInfo({ gameId, playerId })
        const worldState = WorldState.fromJson(message.worldState)
        const sceneData: GameSceneData = { client, playerId, worldState }
        this.scene.start(GAME_SCENE_KEY, sceneData)
        if (this.joinedListener) {
          client.removeListener(this.joinedListener)
          this.joinedListener = undefined
        }
      }
    }
    client.addListener(this.joinedListener)
  }

  private restoreServer = async (gameId: GameId, worldEventDb: WorldEventDb): Promise<void> => {
    const server = await Server.restoreGame(worldEventDb, gameId)
    const sceneData: GameSceneData = { server, worldState: server.worldState, playerId: 1 }
    this.scene.start(GAME_SCENE_KEY, sceneData)
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

interface UrlInfo {
  gameId: GameId
  playerId?: PlayerId
}

export const getUrlInfo = (): Option<UrlInfo> => {
  const hash = window.location.hash
  if (hash == '') {
    return
  }
  const path = hash.substr(1)
  const segments = path.split('/')
  const gameId = segments[0]
  const playerId = segments.length > 1 ? Number.parseInt(segments[1]) : undefined
  return { gameId, playerId }
}

export const setUrlInfo = (urlInfo: UrlInfo): void => {
  let hash = urlInfo.gameId
  if (urlInfo.playerId != undefined) {
    hash += '/' + urlInfo.playerId
  }
  window.location.hash = hash
}
