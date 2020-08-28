import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { getPlayerTint } from '../colours'
import { DRAWING_OFFSET, HEX_SIZE } from './game-scene'
import { CombinedState } from '../combined-state-methods'
import { LocalAction } from './local-action'
import { ImageKeys } from '../asset-keys'
import { PrimaryButton } from '../../ui/primary-button'
import { SelectionInfoDisplayObject } from './selection-info-display-object'
import { getGameHeight } from '../../helpers'
import { SidePanelDisplayObject } from './side-panel-display-object'

export type LocalActionDispatcher = (action: LocalAction) => void

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
    this.sidePanel = new SidePanelDisplayObject(scene, worldState, localGameState, localActionDispatcher)
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
    this.sidePanel.syncScene(worldState, localGameState)
  }
}
