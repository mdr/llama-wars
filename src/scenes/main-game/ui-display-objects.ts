import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { getPlayerTint } from '../colours'
import { CombinedState } from '../combined-state-methods'
import { LocalActionDispatcher } from './local-action'
import { ImageKeys } from '../asset-keys'
import { PrimaryButton } from '../../ui/primary-button'
import { SelectionInfoDisplayObject } from './selection-info-display-object'
import { getGameHeight, getGameWidth } from '../../util/phaser/phaser-utils'
import { SidePanelDisplayObject } from './side-panel-display-object'
import { GameObjects } from 'phaser'
import { Pixels } from '../../util/types'

export class UiDisplayObjects {
  private readonly scene: Phaser.Scene
  private worldState: WorldState
  private localGameState: LocalGameState
  private readonly localActionDispatcher: LocalActionDispatcher

  private readonly playerText: GameObjects.Text
  private readonly hourglass: GameObjects.Image
  private readonly gameEndedText: GameObjects.Text
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

    this.selectionInfo = this.createSelectionInfo()

    const playerLlamaImage = this.scene.add
      .image(40, 28, ImageKeys.LLAMA_2)
      .setScale(0.6)
      .setTint(getPlayerTint(localGameState.playerId))
    this.scene.cameras.main.ignore(playerLlamaImage)

    this.playerText = this.scene.add.text(70, 20, '').setFontSize(18).setShadow(2, 2, '#000000')
    this.scene.cameras.main.ignore(this.playerText)

    this.hourglass = this.scene.add.image(875, 30, 'hourglass').setVisible(false)
    this.scene.cameras.main.ignore(this.hourglass)

    this.gameEndedText = this.scene.add
      .text(getGameWidth(this.scene) / 2, getGameHeight(this.scene) / 2, 'You have been defeated!', {
        stroke: '#000000',
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setFontSize(42)
      .setVisible(false)
      .setDepth(200)
    this.scene.cameras.main.ignore(this.gameEndedText)

    this.sidePanel = this.createSidePanel()

    this.endTurnButton = this.createEndTurnButton()

    this.waitingForNextTurnText = this.scene.add
      .text(0, 0, 'Waiting for next turn...', { fill: '#ffffff' })
      .setFontSize(18)
      .setShadow(2, 2, '#000000')
      .setDepth(200)
    this.scene.cameras.main.ignore(this.waitingForNextTurnText)

    this.layoutUi(getGameWidth(this.scene), getGameHeight(this.scene))
    window.addEventListener('resize', () => this.layoutUi(window.innerWidth, window.innerHeight))
  }

  private createEndTurnButton = (): PrimaryButton => {
    const endTurnButton = new PrimaryButton(this.scene, 0, 0, 'End Turn', this.handleEndTurnButtonPressed)
    endTurnButton.setDepth(100)
    this.scene.add.existing(endTurnButton)
    this.scene.cameras.main.ignore(endTurnButton)
    return endTurnButton
  }

  private handleEndTurnButtonPressed = (): void => this.localActionDispatcher({ type: 'endTurn' })

  private createSidePanel = (): SidePanelDisplayObject => {
    const sidePanel = new SidePanelDisplayObject(
      this.scene,
      this.worldState,
      this.localGameState,
      this.localActionDispatcher,
    )
    sidePanel.setDepth(100)
    this.scene.add.existing(sidePanel)
    this.scene.cameras.main.ignore(sidePanel)
    return sidePanel
  }

  private createSelectionInfo = (): SelectionInfoDisplayObject => {
    const selectionInfo = new SelectionInfoDisplayObject(
      this.scene,
      this.worldState,
      this.localGameState,
      this.localActionDispatcher,
    )
    selectionInfo.setDepth(100)
    this.scene.cameras.main.ignore(selectionInfo)
    this.scene.add.existing(selectionInfo)
    return selectionInfo
  }

  private layoutUi = (width: Pixels, height: Pixels): void => {
    const endButtonBounds = this.endTurnButton.getBounds()
    this.selectionInfo.setY(height - SelectionInfoDisplayObject.HEIGHT - 10)
    this.sidePanel.setX(width - SidePanelDisplayObject.WIDTH - 10)
    const x = width - endButtonBounds.width
    const y = height - endButtonBounds.height - 10
    this.endTurnButton.setX(x)
    this.endTurnButton.setY(y)
    this.waitingForNextTurnText.setX(x)
    this.waitingForNextTurnText.setY(y + 15)
  }

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState

    this.selectionInfo.syncScene(worldState, localGameState)
    this.sidePanel.syncScene(worldState, localGameState)

    const player = this.combinedState.getCurrentPlayer()
    this.hourglass.setVisible(localGameState.actionsOutstandingWithServer > 0)
    this.playerText.setText(`${player.name} - Turn ${this.worldState.turn}`)
    const canAct = worldState.canPlayerAct(player.id)
    this.endTurnButton.setVisible(canAct)
    this.waitingForNextTurnText.setVisible(!canAct)
    if (player.defeated) {
      this.gameEndedText.setVisible(true)
      this.gameEndedText.setText('You have been defeated!')
    }
    if (worldState.gameOverInfo?.victor === player.id) {
      this.gameEndedText.setVisible(true)
      this.gameEndedText.setText('Victory!')
    }
  }
}
