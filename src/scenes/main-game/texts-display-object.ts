import * as R from 'ramda'

import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { colourNumber, getPlayerTint } from '../colours'
import { DRAWING_OFFSET, HEX_SIZE } from './game-scene'
import { point } from '../point'
import { CombinedState } from '../combined-state-methods'
import { LocalAction } from './local-action'
import { HOST_PLAYER_ID, PlayerId } from '../../world/player'
import { ImageKeys } from '../asset-keys'
import { UiBorderDisplayObject } from './ui-border-display-object'
import { PrimaryButton } from '../../ui/primary-button'
import { SelectionInfoDisplayObject } from './selection-info-display-object'
import { LinkDisplayObject } from './link-display-object'
import { getGameHeight } from '../../helpers'
import Pointer = Phaser.Input.Pointer
import EventData = Phaser.Types.Input.EventData

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
  private readonly logLink: Phaser.GameObjects.Text
  private readonly playersLink: Phaser.GameObjects.Text
  private readonly playerObjects: Map<PlayerId, PlayerObjects> = new Map()
  private readonly hostCrown: Phaser.GameObjects.Image
  private readonly endTurnButton: PrimaryButton
  private readonly chatText: Phaser.GameObjects.Text
  private readonly selectionInfo: SelectionInfoDisplayObject
  private background: Phaser.GameObjects.Rectangle

  private get combinedState(): CombinedState {
    return new CombinedState(this.worldState, this.localGameState)
  }

  private static WIDTH = 500
  private static HEIGHT = 620

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

    // Other stuff

    const selectionLocation = { x: 10, y: getGameHeight(this.scene) - SelectionInfoDisplayObject.HEIGHT - 10 }
    this.selectionInfo = new SelectionInfoDisplayObject(
      scene,
      worldState,
      localGameState,
      localActionDispatcher,
      selectionLocation,
    ).setDepth(100)
    this.scene.add.existing(this.selectionInfo)
    this.scene.add.image(40, 28, ImageKeys.LLAMA_2).setScale(0.6).setTint(getPlayerTint(localGameState.playerId))
    this.playerText = this.scene.add.text(70, 20, '')
    this.hourglass = this.scene.add.image(875, 30, 'hourglass').setVisible(false)

    this.endTurnText = this.scene.add
      .text(790 + 520, 9 * HEX_SIZE + DRAWING_OFFSET.y + 68 + 72, '', {
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setShadow(2, 2, '#000000')
    this.endTurnButton = new PrimaryButton(
      this.scene,
      650 + 520,
      9 * HEX_SIZE + DRAWING_OFFSET.y + 44 + 72,
      'End Turn',
      () => this.localActionDispatcher({ type: 'endTurn' }),
    ).setDepth(100)
    this.scene.add.existing(this.endTurnButton)

    this.defeatText = this.scene.add
      .text(462, (9 * HEX_SIZE + DRAWING_OFFSET.y) / 2, 'You have been defeated!', {
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

    // Side panel

    const { x, y } = { x: 950, y: 20 }
    this.background = scene.add
      .rectangle(x, y, TextsDisplayObject.WIDTH, TextsDisplayObject.HEIGHT, colourNumber('#000000'), 0.8)
      .setOrigin(0)
      .setInteractive()
      .on('pointerdown', (pointer: Pointer, x: number, y: number, event: EventData): void => event.stopPropagation())
      .on('pointerup', (pointer: Pointer, x: number, y: number, event: EventData): void => event.stopPropagation())

    const border = new UiBorderDisplayObject(scene, {
      topLeft: point(x, y),
      width: TextsDisplayObject.WIDTH,
      height: TextsDisplayObject.HEIGHT,
    })
    scene.add.existing(border)

    this.logLink = new LinkDisplayObject(this.scene, x + 10, y + 6, 'Log', () =>
      this.localActionDispatcher({ type: 'changeSidebar', sidebar: 'log' }),
    )
    this.scene.add.existing(this.logLink)
    this.playersLink = new LinkDisplayObject(this.scene, x + 74, y + 6, 'Players', () =>
      this.localActionDispatcher({ type: 'changeSidebar', sidebar: 'players' }),
    )
    this.scene.add.existing(this.playersLink)
    this.worldLogText = this.scene.add
      .text(x + 10, y + 30, '')
      .setWordWrapWidth(470)
      .setFontSize(14)
    this.chatText = this.scene.add
      .text(x + 10, y + TextsDisplayObject.HEIGHT - 40, 'Chat...', {
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
    this.hostCrown = this.scene.add.image(x + 285, 0, 'crown').setScale(0.6)
    for (const player of worldState.getSortedPlayers()) {
      const nameText = this.scene.add
        .text(950 + 65, 0, player.name, {
          fill: '#FFFFFF',
          fixedWidth: 200,
          fontStyle: player.id === this.localGameState.playerId ? 'bold' : 'normal',
        })
        .setFontSize(18)
        .setPadding(0, 0, 0, 0)
      const llama = this.scene.add
        .sprite(950 + 25, 0, ImageKeys.LLAMA_EAT_1)
        .setScale(0.6)
        .setTint(getPlayerTint(player.id))
      const playerObjects: PlayerObjects = { nameText, llama }
      this.playerObjects.set(player.id, playerObjects)
    }
  }

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

    // Side panel

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
