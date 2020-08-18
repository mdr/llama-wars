import { Client } from '../../server/client'
import { Server } from '../../server/server'
import { CreatedLobbyScene } from './created-lobby-scene'

export const LOBBY_SCENE_KEY = 'Lobby'

export interface LobbySceneData {
  serverOrClient: Server | Client
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: LOBBY_SCENE_KEY,
}

export class LobbyScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig)
  }

  public create = (sceneData: LobbySceneData): void => {
    const { serverOrClient } = sceneData
    new CreatedLobbyScene(this, serverOrClient)
  }
}
