import * as R from 'ramda'

import { WorldState } from '../../../world/world-state'
import { LocalGameState, SidebarMode } from '../../local-game-state'
import { colourNumber, getPlayerTint } from '../../colours'
import { point } from '../../point'
import { HOST_PLAYER_ID, Player, PlayerId } from '../../../world/player'
import { ImageKeys } from '../../asset-keys'
import { UiBorderDisplayObject } from './ui-border-display-object'
import { LinkDisplayObject } from './link-display-object'
import { LocalActionDispatcher } from '../local-action'
import { Pixels } from '../../../util/types'
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

  public static readonly WIDTH = 500
  public static readonly HEIGHT = 620

  constructor(
    scene: Phaser.Scene,
    worldState: WorldState,
    localGameState: LocalGameState,
    localActionDispatcher: LocalActionDispatcher,
  ) {
    super(scene, 0, 0, [])
    this.scene = scene
    this.worldState = worldState
    this.localGameState = localGameState
    this.localActionDispatcher = localActionDispatcher

    const background = this.createBackground()
    const border = this.createBorder()
    this.add([background, border])

    this.logLink = new LinkDisplayObject(this.scene, 10, 10, 'Log', () =>
      this.localActionDispatcher({ type: 'changeSidebar', sidebar: SidebarMode.LOG }),
    )
    this.scene.add.existing(this.logLink)
    this.playersLink = new LinkDisplayObject(this.scene, 74, 10, 'Players', () =>
      this.localActionDispatcher({ type: 'changeSidebar', sidebar: SidebarMode.PLAYERS }),
    )
    this.scene.add.existing(this.playersLink)
    this.add([this.logLink, this.playersLink])

    this.worldLogText = this.scene.add.text(10, 35, '').setWordWrapWidth(470).setFontSize(14)
    this.chatText = this.scene.add
      .text(10, SidePanelDisplayObject.HEIGHT - 10, 'Chat...', {
        fill: '#FFFFFF',
        fixedWidth: SidePanelDisplayObject.WIDTH - 2 * 10,
        backgroundColor: '#333333',
      })
      .setFontSize(18)
      .setPadding(0, 0, 0, 0)
      .setInteractive()
      .setOrigin(0, 1)
      .on('pointerdown', this.handleClickChat)
    this.add([this.worldLogText, this.chatText])

    this.hostCrown = this.scene.add.image(285, 0, 'crown').setScale(0.6)
    this.add([this.hostCrown])
    for (const player of worldState.getSortedPlayers()) {
      this.createPlayerRow(player)
    }
  }

  private createPlayerRow = (player: Player): void => {
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

  private createBorder = (): UiBorderDisplayObject => {
    const border = new UiBorderDisplayObject(this.scene, {
      topLeft: point(0, 0),
      width: SidePanelDisplayObject.WIDTH,
      height: SidePanelDisplayObject.HEIGHT,
    })
    this.scene.add.existing(border)
    return border
  }

  private createBackground = (): Phaser.GameObjects.Rectangle =>
    this.scene.add
      .rectangle(0, 0, SidePanelDisplayObject.WIDTH, SidePanelDisplayObject.HEIGHT, colourNumber('#000000'), 0.8)
      .setOrigin(0)
      .setInteractive()
      .on('pointerdown', (pointer: Pointer, x: Pixels, y: Pixels, event: EventData): void => event.stopPropagation())
      .on('pointerup', (pointer: Pointer, x: Pixels, y: Pixels, event: EventData): void => event.stopPropagation())

  private handleClickChat = (): void => {
    this.chatText.setText('')
    const plugin = this.scene.plugins.get('rexTextEdit') as any
    plugin.edit(this.chatText, {
      onClose: () => {
        this.localActionDispatcher({ type: 'chat', message: this.chatText.text })
        this.chatText.setText('Chat...')
      },
    })
  }

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState

    this.worldLogText.setText(R.takeLast(20, this.worldState.worldLog).join('\n'))
    this.worldLogText.setVisible(localGameState.sidebar === SidebarMode.LOG)
    let y = 65
    for (const player of worldState.getSortedPlayers()) {
      this.syncPlayerRow(player, y)
      y += 50
    }
    this.hostCrown.setVisible(localGameState.sidebar === SidebarMode.PLAYERS)
  }

  private syncPlayerRow = (player: Player, y: Pixels): void => {
    if (player.id === HOST_PLAYER_ID) {
      this.hostCrown.setY(y + 5)
    }
    const { nameText, llama } = this.getPlayerObjects(player.id)
    nameText
      .setText(player.name)
      .setY(y)
      .setVisible(this.localGameState.sidebar === SidebarMode.PLAYERS)
    llama
      .setY(y + 10)
      .setVisible(this.localGameState.sidebar === SidebarMode.PLAYERS)
      .setFlipX(!this.worldState.canPlayerAct(player.id))
  }

  private getPlayerObjects = (playerId: PlayerId): PlayerObjects => {
    const playerObjects = this.playerObjects.get(playerId)
    if (!playerObjects) {
      throw new Error(`No player objects found for ${playerId}`)
    }
    return playerObjects
  }
}
