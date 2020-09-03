import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { getPlayerTint } from '../colours'
import { CombinedState } from '../combined-state-methods'
import { LocalAction } from './local-action'
import { ImageKeys } from '../asset-keys'
import { PrimaryButton } from '../../ui/primary-button'
import { SelectionInfoDisplayObject } from './selection-info-display-object'
import { getGameHeight, getGameWidth } from '../../util/phaser/phaser-utils'
import { SidePanelDisplayObject } from './side-panel-display-object'
import { GameObjects } from 'phaser'

export type LocalActionDispatcher = (action: LocalAction) => void

export class TextsDisplayObject {
  private readonly scene: Phaser.Scene
  private worldState: WorldState
  private localGameState: LocalGameState
  private readonly localActionDispatcher: LocalActionDispatcher

  private readonly playerText: GameObjects.Text
  private readonly hourglass: GameObjects.Image
  private readonly defeatText: GameObjects.Text
  private readonly victoryText: GameObjects.Text
  private readonly waitingForNextTurnText: GameObjects.Text
  private readonly endTurnButton: PrimaryButton
  private readonly selectionInfo: SelectionInfoDisplayObject
  private readonly sidePanel: SidePanelDisplayObject

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

    const selectionLocation = { x: 10, y: getGameHeight(this.scene) - SelectionInfoDisplayObject.HEIGHT - 10 }
    this.selectionInfo = new SelectionInfoDisplayObject(
      scene,
      worldState,
      localGameState,
      localActionDispatcher,
      selectionLocation,
    ).setDepth(100)
    this.scene.cameras.main.ignore(this.selectionInfo)
    this.scene.add.existing(this.selectionInfo)
    const playerLlamaImage = this.scene.add
      .image(40, 28, ImageKeys.LLAMA_2)
      .setScale(0.6)
      .setTint(getPlayerTint(localGameState.playerId))
    this.scene.cameras.main.ignore(playerLlamaImage)
    this.playerText = this.scene.add.text(70, 20, '').setFontSize(18).setShadow(2, 2, '#000000')

    this.hourglass = this.scene.add.image(875, 30, 'hourglass').setVisible(false)
    this.scene.cameras.main.ignore(this.playerText)
    this.scene.cameras.main.ignore(this.hourglass)

    this.defeatText = this.scene.add
      .text(getGameWidth(this.scene) / 2, getGameHeight(this.scene) / 2, 'You have been defeated!', {
        stroke: '#000000',
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setFontSize(42)
      .setVisible(false)
      .setDepth(200)
    this.scene.cameras.main.ignore(this.defeatText)

    this.victoryText = this.scene.add
      .text(getGameWidth(this.scene) / 2, getGameHeight(this.scene) / 2, 'Victory!', {
        stroke: '#000000',
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setFontSize(42)
      .setVisible(false)
      .setDepth(200)
    this.scene.cameras.main.ignore(this.victoryText)

    const sidePanelLocation = { x: getGameWidth(this.scene) - SidePanelDisplayObject.WIDTH - 10, y: 20 }
    this.sidePanel = new SidePanelDisplayObject(
      scene,
      worldState,
      localGameState,
      localActionDispatcher,
      sidePanelLocation,
    ).setDepth(100)
    scene.add.existing(this.sidePanel)
    this.scene.cameras.main.ignore(this.sidePanel)

    this.endTurnButton = new PrimaryButton(this.scene, 0, 0, 'End Turn', () =>
      this.localActionDispatcher({ type: 'endTurn' }),
    ).setDepth(100)
    const endButtonBounds = this.endTurnButton.getBounds()
    const x = getGameWidth(this.scene) - endButtonBounds.width
    const y = getGameHeight(this.scene) - endButtonBounds.height - 10
    this.endTurnButton.setX(x)
    this.endTurnButton.setY(y)
    this.scene.add.existing(this.endTurnButton)
    this.scene.cameras.main.ignore(this.endTurnButton)

    this.waitingForNextTurnText = this.scene.add
      .text(x, y + 15, 'Waiting for next turn...', {
        fill: '#ffffff',
      })
      .setFontSize(18)
      .setShadow(2, 2, '#000000')
      .setDepth(200)
    this.scene.cameras.main.ignore(this.waitingForNextTurnText)

    window.addEventListener('resize', () => {
      this.selectionInfo.setY(window.innerHeight - SelectionInfoDisplayObject.HEIGHT - 10)
      this.sidePanel.setX(window.innerWidth - SidePanelDisplayObject.WIDTH - 10)
      const x = window.innerWidth - endButtonBounds.width
      const y = window.innerHeight - endButtonBounds.height - 10
      this.endTurnButton.setX(x)
      this.endTurnButton.setY(y)
    })
  }

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState
    const player = this.combinedState.getCurrentPlayer()
    this.hourglass.setVisible(localGameState.actionsOutstandingWithServer > 0)
    this.playerText.setText(`${player.name} - Turn ${this.worldState.turn}`)
    const canAct = worldState.canPlayerAct(player.id)
    this.selectionInfo.syncScene(worldState, localGameState)
    this.endTurnButton.setVisible(canAct)
    this.waitingForNextTurnText.setVisible(!canAct)
    this.defeatText.setVisible(player.defeated)
    this.victoryText.setVisible(worldState.gameOverInfo?.victor === player.id)
    this.sidePanel.syncScene(worldState, localGameState)
  }
}
