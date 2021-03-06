import { v4 as uuid } from 'uuid'
import { GameId } from '../main-game/game-scene'
import { Server } from '../../server/server'
import { openWorldEventDb } from '../../db/world-event-db'
import { INITIAL_WORLD_STATE } from '../../world/initial-world-state'
import { LOBBY_SCENE_KEY, LobbySceneData } from '../lobby/lobby-scene'
import { AudioKeys } from '../asset-keys'
import { HOST_PLAYER_ID } from '../../world/player'
import { setUrlInfo } from '../boot/url-info'
import { PrimaryButton } from '../../ui/primary-button'
import { LocalStorage } from '../local-storage/local'

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
    this.add.text(155, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(26)
    this.sound.pauseOnBlur = false
    this.sound.add(AudioKeys.CLICK)
    const hostGameButton = new PrimaryButton(this, 100, 120, 'Host Game', this.handleHostGame)
    this.add.existing(hostGameButton)
  }

  private handleHostGame = async (): Promise<void> => {
    const worldEventDb = await openWorldEventDb()
    const gameId: GameId = uuid()
    const playerId = HOST_PLAYER_ID
    let worldState = INITIAL_WORLD_STATE
    const name = LocalStorage.findName()
    if (name) {
      worldState = worldState.setPlayerName(playerId, name)
    }
    const server = new Server(worldEventDb, gameId, worldState, 0)
    server.handleAction(playerId, { type: 'initialise', state: worldState })
    setUrlInfo({ gameId })
    const sceneData: LobbySceneData = { serverOrClient: server }
    this.scene.start(LOBBY_SCENE_KEY, sceneData)
  }
}
