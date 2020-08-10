import { v4 as uuid } from 'uuid'
import { MenuButton } from '../../ui/menu-button'
import { GAME_SCENE_KEY, GameId, GameSceneData } from '../main-game/game-scene'
import { Server } from '../../server/server'
import { openWorldEventDb } from '../../db/world-event-db'
import { INITIAL_WORLD_STATE } from '../../world/initial-world-state'

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

    new MenuButton(this, 100, 150, 'Start Game', () => this.handleStartGame())
  }

  private handleStartGame = async (): Promise<void> => {
    const worldEventDb = await openWorldEventDb()
    const gameId: GameId = uuid()
    const server = new Server(worldEventDb, gameId, INITIAL_WORLD_STATE, 1)
    window.location.hash = gameId
    const sceneData: GameSceneData = { server }
    this.scene.start(GAME_SCENE_KEY, sceneData)
  }
}
