import { v4 as uuid } from 'uuid'
import { MenuButton } from '../../ui/menu-button'
import { GameId } from '../main-game/game-scene'
import { Server } from '../../server/server'
import { openWorldEventDb } from '../../db/world-event-db'
import { INITIAL_WORLD_STATE } from '../../world/initial-world-state'
import { setUrlInfo } from '../boot/boot-scene'
import { LOBBY_SCENE_KEY, LobbySceneData } from '../lobby/lobby-scene'
import { AudioKeys } from '../asset-keys'

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

  public create = (): void => {
    this.add.text(100, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(24)
    this.sound.add(AudioKeys.CLICK)
    new MenuButton(this, 100, 150, 'Host Game', () => {
      this.sound.play(AudioKeys.CLICK)
      this.handleHostGame()
    })
  }

  private handleHostGame = async (): Promise<void> => {
    const worldEventDb = await openWorldEventDb()
    const gameId: GameId = uuid()
    const playerId = 1
    const server = new Server(worldEventDb, gameId, INITIAL_WORLD_STATE, 0)
    server.handleAction(playerId, { type: 'initialise', state: INITIAL_WORLD_STATE })
    setUrlInfo({ gameId })
    const sceneData: LobbySceneData = { serverOrClient: server, worldState: server.worldState, playerId: playerId }
    this.scene.start(LOBBY_SCENE_KEY, sceneData)
  }
}
