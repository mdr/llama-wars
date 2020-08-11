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
import { LOBBY_SCENE_KEY, LobbySceneData } from '../lobby/lobby-scene'

export const BOOT_SCENE_KEY = 'Boot'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: BOOT_SCENE_KEY,
}

export class BootScene extends Phaser.Scene {
  private rejoinedListener: Option<ServerToClientMessageListener>
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
    const client = await Client.connect(gameId)
    if (playerId) {
      this.rejoinAsClient(client, gameId, playerId)
    } else {
      this.joinAsClient(client, gameId)
    }
  }

  private joinAsClient = (client: Client, gameId: GameId): void => {
    this.rejoinedListener = (message: ServerToClientMessage) => {
      if (message.type == 'joined') {
        if (this.rejoinedListener) {
          client.removeListener(this.rejoinedListener)
          this.rejoinedListener = undefined
        }
        const playerId = message.playerId
        setUrlInfo({ gameId, playerId })
        const worldState = WorldState.fromJson(message.worldState)
        if (worldState.gameHasStarted) {
          const sceneData: GameSceneData = { serverOrClient: client, worldState, playerId }
          this.scene.start(GAME_SCENE_KEY, sceneData)
        } else {
          const sceneData: LobbySceneData = { serverOrClient: client, worldState, playerId }
          this.scene.start(LOBBY_SCENE_KEY, sceneData)
        }
      }
    }
    client.addListener(this.rejoinedListener)
    client.send({ type: 'join' })
  }

  private rejoinAsClient = (client: Client, gameId: GameId, playerId: PlayerId): void => {
    this.rejoinedListener = (message: ServerToClientMessage) => {
      if (message.type == 'rejoined') {
        if (this.rejoinedListener) {
          client.removeListener(this.rejoinedListener)
          this.rejoinedListener = undefined
        }
        const worldState = WorldState.fromJson(message.worldState)
        if (worldState.gameHasStarted) {
          const sceneData: GameSceneData = { serverOrClient: client, worldState, playerId }
          this.scene.start(GAME_SCENE_KEY, sceneData)
        } else {
          const sceneData: LobbySceneData = { serverOrClient: client, worldState, playerId }
          this.scene.start(LOBBY_SCENE_KEY, sceneData)
        }
      }
    }
    client.addListener(this.rejoinedListener)
    client.send({ type: 'rejoin', playerId })
  }

  private restoreGameAsServer = async (gameId: GameId, worldEventDb: WorldEventDb): Promise<void> => {
    const server = await Server.restoreGame(worldEventDb, gameId)
    const worldState = server.worldState
    if (worldState.gameHasStarted) {
      const sceneData: GameSceneData = { serverOrClient: server, worldState: worldState, playerId: 1 }
      this.scene.start(GAME_SCENE_KEY, sceneData)
    } else {
      const sceneData: LobbySceneData = { serverOrClient: server, worldState: worldState, playerId: 1 }
      this.scene.start(LOBBY_SCENE_KEY, sceneData)
    }
  }

  private loadAssets() {
    // Source: https://opengameart.org/content/hex-tileset-pack
    this.load.image('llama', 'assets/sprites/llama_14.png')
    // https://opengameart.org/content/hourglass-icon
    this.load.image('hourglass', 'assets/sprites/Hourglass.png')
    // https://opengameart.org/content/grass-textures-tiles
    // https://opengameart.org/content/grass-texture
    this.load.image('grass', 'assets/sprites/grass2.png')

    // https://opengameart.org/content/37-hitspunches
    this.load.audio(AudioKeys.ATTACK, 'assets/audio/hit18.mp3.mp3')
    // https://opengameart.org/content/male-gruntyelling-sounds
    this.load.audio(AudioKeys.DEATH, 'assets/audio/1yell4.wav')
    // https://opengameart.org/content/grass-foot-step-sounds-yo-frankie
    this.load.audio(AudioKeys.WALK, 'assets/audio/sfx_step_grass_l.mp3')
    // https://opengameart.org/content/ui-sound-effects-pack
    this.load.audio(AudioKeys.NEW_TURN, 'assets/audio/MENU A_Select.wav')
    this.load.audio(AudioKeys.PLAYER_DEFEATED, 'assets/audio/MESSAGE-B_Decline.wav')

    // https://opengameart.org/content/clear-skies
    this.load.audio(AudioKeys.VICTORY_MUSIC, 'assets/audio/Clear Skies.mp3')
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
