import { Client } from '../../server/client'
import { Server } from '../../server/server'
import { PlayerId } from '../../world/player'
import { WorldState } from '../../world/world-state'
import { CreatedLobbyScene } from './created-lobby-scene'

export const LOBBY_SCENE_KEY = 'Lobby'

export interface LobbySceneData {
  serverOrClient: Server | Client
  playerId: PlayerId
  worldState: WorldState
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
    const { serverOrClient, playerId, worldState } = sceneData
    new CreatedLobbyScene(this, serverOrClient, playerId, worldState)
  }
}
