import * as R from 'ramda'

import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { mapHeight } from '../hex-geometry'
import { getPlayerTint } from '../colours'
import { DRAWING_OFFSET, HEX_SIZE } from './game-scene'
import { point, Point } from '../point'
import { CombinedState } from '../combined-state-methods'
import { LocalAction } from './local-action'
import { HOST_PLAYER_ID, PlayerId } from '../../world/player'
import { ImageKeys } from '../asset-keys'
import { UiBorderDisplayObject } from './ui-border-display-object'
import { PrimaryButton } from '../../ui/primary-button'
import { SelectionInfoDisplayObject } from './selection-info-display-object'
import { ACTION_LINK_COLOUR, HOVER_ACTION_LINK_COLOUR } from './link-display-object'

export type LocalActionDispatcher = (action: LocalAction) => void

interface PlayerObjects {
  nameText: Phaser.GameObjects.Text
  llama: Phaser.GameObjects.Image
}

export class TextsDisplayObject {
  private readonly scene: Phaser.Scene
  private worldState: WorldState
  private localGameState: LocalGameState
  private readonly localActionDispatcher: LocalActionDispatcher

  private readonly endTurnText: Phaser.GameObjects.Text
  private readonly playerText: Phaser.GameObjects.Text
  private readonly hourglass: Phaser.GameObjects.Image
  private readonly defeatText: Phaser.GameObjects.Text
  private readonly victoryText: Phaser.GameObjects.Text
  private readonly worldLogText: Phaser.GameObjects.Text
  private readonly selectWorldLogText: Phaser.GameObjects.Text
  private readonly selectPlayersText: Phaser.GameObjects.Text
  private readonly playerObjects: Map<PlayerId, PlayerObjects> = new Map()
  private readonly hostCrown: Phaser.GameObjects.Image
  private readonly endTurnButton: PrimaryButton
  private readonly chatText: Phaser.GameObjects.Text
  private readonly selectionInfo: SelectionInfoDisplayObject

  private get combinedState(): CombinedState {
    return new CombinedState(this.worldState, this.localGameState)
  }

  constructor(
    scene: Phaser.Scene,
    worldState: WorldState,
    localGameState: LocalGameState,
    localActionDispatcher: LocalActionDispatcher,
  ) {
    this.scene = scene
    this.worldState = worldState
    this.localGameState = localGameState
    this.localActionDispatcher = localActionDispatcher
    const map = this.worldState.map
    this.selectionInfo = new SelectionInfoDisplayObject(scene, worldState, localGameState, localActionDispatcher)
    this.scene.add.image(40, 28, ImageKeys.LLAMA_2).setScale(0.6).setTint(getPlayerTint(localGameState.playerId))
    this.playerText = this.scene.add.text(70, 20, '')
    this.hourglass = this.scene.add.image(875, 30, 'hourglass').setVisible(false)

    this.endTurnText = this.scene.add
      .text(790 + 520, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y + 68 + 72, '', {
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setShadow(2, 2, '#000000')
    this.endTurnButton = new PrimaryButton(
      this.scene,
      650 + 520,
      mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y + 44 + 72,
      'End Turn',
      () => this.localActionDispatcher({ type: 'endTurn' }),
    )

    this.selectWorldLogText = this.scene.add
      .text(960, 26, 'Log', { fill: ACTION_LINK_COLOUR })
      .setInteractive()
      .on('pointerdown', () => this.localActionDispatcher({ type: 'changeSidebar', sidebar: 'log' }))
      .on('pointerover', () => this.selectWorldLogText.setFill(HOVER_ACTION_LINK_COLOUR))
      .on('pointerout', () => this.selectWorldLogText.setFill(ACTION_LINK_COLOUR))
    this.selectPlayersText = this.scene.add
      .text(1024, 26, 'Players', { fill: ACTION_LINK_COLOUR })
      .setInteractive()
      .on('pointerdown', () => this.localActionDispatcher({ type: 'changeSidebar', sidebar: 'players' }))
      .on('pointerover', () => this.selectPlayersText.setFill(HOVER_ACTION_LINK_COLOUR))
      .on('pointerout', () => this.selectPlayersText.setFill(ACTION_LINK_COLOUR))
    this.defeatText = this.scene.add
      .text(462, (mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y) / 2, 'You have been defeated!', {
        stroke: '#000000',
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setFontSize(42)
      .setVisible(false)
      .setDepth(100)
    this.victoryText = this.scene.add
      .text(462, 30, 'Victory!', {
        stroke: '#000000',
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setFontSize(42)
      .setVisible(false)
      .setDepth(100)
    this.worldLogText = this.scene.add.text(960, 50, '').setWordWrapWidth(470).setFontSize(14)
    this.chatText = this.scene.add
      .text(960, 600, 'Chat...', {
        fill: '#FFFFFF',
        fixedWidth: 478,
        backgroundColor: '#333333',
      })
      .setFontSize(18)
      .setPadding(0, 0, 0, 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.chatText.setText('')
        const plugin = this.scene.plugins.get('rexTextEdit') as any
        plugin.edit(this.chatText, {
          onClose: () => {
            this.localActionDispatcher({ type: 'chat', message: this.chatText.text })
            this.chatText.setText('Chat...')
          },
        })
      })
    this.hostCrown = this.scene.add.image(1235, 0, 'crown').setScale(0.6)
    for (const player of worldState.getSortedPlayers()) {
      const nameText = this.scene.add
        .text(1005, 0, player.name, {
          fill: '#FFFFFF',
          fixedWidth: 200,
          fontStyle: player.id === this.localGameState.playerId ? 'bold' : 'normal',
        })
        .setFontSize(18)
        .setPadding(0, 0, 0, 0)
      const llama = this.scene.add.sprite(975, 0, ImageKeys.LLAMA_EAT_1).setScale(0.6).setTint(getPlayerTint(player.id))
      const playerObjects: PlayerObjects = { nameText, llama }
      this.playerObjects.set(player.id, playerObjects)
    }
    new UiBorderDisplayObject(scene, { topLeft: point(950, 20), width: 500, height: 620 })
  }

  public hasClickHandlerFor = (point: Point): boolean => this.selectionInfo.hasClickHandlerFor(point)

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState
    const player = this.combinedState.getCurrentPlayer()
    this.hourglass.setVisible(localGameState.actionsOutstandingWithServer > 0)
    this.playerText.setText(`${player.name} - Turn ${this.worldState.turn}`)
    const canAct = worldState.canPlayerAct(player.id)
    if (canAct) {
      this.endTurnText.setText('End Turn')
    } else {
      this.endTurnText.setText('Waiting for next turn...')
    }
    this.selectionInfo.syncScene(worldState, localGameState)
    this.endTurnButton.setVisible(canAct)
    this.defeatText.setVisible(player.defeated)
    this.victoryText.setVisible(worldState.gameOverInfo?.victor === player.id)
    this.worldLogText.setText(R.takeLast(20, this.worldState.worldLog).join('\n'))
    this.worldLogText.setVisible(localGameState.sidebar === 'log')
    let y = 65
    for (const player of worldState.getSortedPlayers()) {
      if (player.id === HOST_PLAYER_ID) {
        this.hostCrown.setY(y + 5)
      }
      const { nameText, llama } = this.getPlayerObjects(player.id)
      nameText
        .setText(player.name)
        .setY(y)
        .setVisible(localGameState.sidebar === 'players')
      llama
        .setY(y + 10)
        .setVisible(localGameState.sidebar === 'players')
        .setFlipX(!this.worldState.canPlayerAct(player.id))
      y += 50
    }
    this.hostCrown.setVisible(localGameState.sidebar === 'players')
  }

  private getPlayerObjects = (playerId: PlayerId): PlayerObjects => {
    const playerObjects = this.playerObjects.get(playerId)
    if (!playerObjects) {
      throw new Error(`No player objects found for ${playerId}`)
    }
    return playerObjects
  }
}
