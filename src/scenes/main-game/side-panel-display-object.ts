import * as R from 'ramda'

import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { colourNumber, getPlayerTint } from '../colours'
import { point } from '../point'
import { HOST_PLAYER_ID, PlayerId } from '../../world/player'
import { ImageKeys } from '../asset-keys'
import { UiBorderDisplayObject } from './ui-border-display-object'
import { LinkDisplayObject } from './link-display-object'
import { LocalActionDispatcher } from './texts-display-object'
import Pointer = Phaser.Input.Pointer
import EventData = Phaser.Types.Input.EventData

interface PlayerObjects {
  nameText: Phaser.GameObjects.Text
  llama: Phaser.GameObjects.Image
}

export class SidePanelDisplayObject extends Phaser.GameObjects.Container {
  private worldState: WorldState
  private localGameState: LocalGameState
  private readonly localActionDispatcher: LocalActionDispatcher

  private readonly worldLogText: Phaser.GameObjects.Text
  private readonly logLink: Phaser.GameObjects.Text
  private readonly playersLink: Phaser.GameObjects.Text
  private readonly playerObjects: Map<PlayerId, PlayerObjects> = new Map()
  private readonly hostCrown: Phaser.GameObjects.Image
  private readonly chatText: Phaser.GameObjects.Text
  private readonly background: Phaser.GameObjects.Rectangle

  private static WIDTH = 500
  private static HEIGHT = 620

  constructor(
    scene: Phaser.Scene,
    worldState: WorldState,
    localGameState: LocalGameState,
    localActionDispatcher: LocalActionDispatcher,
  ) {
    super(scene, 950, 20, [])
    this.scene = scene
    this.worldState = worldState
    this.localGameState = localGameState
    this.localActionDispatcher = localActionDispatcher

    this.background = scene.add
      .rectangle(0, 0, SidePanelDisplayObject.WIDTH, SidePanelDisplayObject.HEIGHT, colourNumber('#000000'), 0.8)
      .setOrigin(0)
      .setInteractive()
      .on('pointerdown', (pointer: Pointer, x: number, y: number, event: EventData): void => event.stopPropagation())
      .on('pointerup', (pointer: Pointer, x: number, y: number, event: EventData): void => event.stopPropagation())

    const border = new UiBorderDisplayObject(scene, {
      topLeft: point(0, 0),
      width: SidePanelDisplayObject.WIDTH,
      height: SidePanelDisplayObject.HEIGHT,
    })
    scene.add.existing(border)

    this.logLink = new LinkDisplayObject(this.scene, 10, 6, 'Log', () =>
      this.localActionDispatcher({ type: 'changeSidebar', sidebar: 'log' }),
    )
    this.scene.add.existing(this.logLink)
    this.playersLink = new LinkDisplayObject(this.scene, 74, 6, 'Players', () =>
      this.localActionDispatcher({ type: 'changeSidebar', sidebar: 'players' }),
    )
    this.scene.add.existing(this.playersLink)
    this.worldLogText = this.scene.add.text(10, 30, '').setWordWrapWidth(470).setFontSize(14)
    this.chatText = this.scene.add
      .text(10, SidePanelDisplayObject.HEIGHT - 40, 'Chat...', {
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
    this.hostCrown = this.scene.add.image(285, 0, 'crown').setScale(0.6)
    this.add([
      this.background,
      border,
      this.worldLogText,
      this.hostCrown,
      this.logLink,
      this.playersLink,
      this.chatText,
    ])
    for (const player of worldState.getSortedPlayers()) {
      const nameText = this.scene.add
        .text(65, 0, player.name, {
          fill: '#FFFFFF',
          fixedWidth: 200,
          fontStyle: player.id === this.localGameState.playerId ? 'bold' : 'normal',
        })
        .setFontSize(18)
        .setPadding(0, 0, 0, 0)
      const llama = this.scene.add.sprite(25, 0, ImageKeys.LLAMA_EAT_1).setScale(0.6).setTint(getPlayerTint(player.id))
      const playerObjects: PlayerObjects = { nameText, llama }
      this.playerObjects.set(player.id, playerObjects)
      this.add([nameText, llama])
    }
  }

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState

    this.worldLogText.setText(R.takeLast(20, this.worldState.worldLog).join('\n'))
    this.worldLogText.setVisible(localGameState.sidebar === 'log')
    let y = 20 + 45
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
