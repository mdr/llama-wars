import { WorldState } from '../world/world-state'
import { LocalGameState } from './local-game-state'
import { hexWidth, mapHeight } from './hex-geometry'
import { ACTION_TEXT_COLOUR, HOVER_ACTION_TEXT_COLOUR } from './colours'
import { DRAWING_OFFSET, HEX_SIZE } from './game-scene'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { Point } from './point'
import { Unit, UnitId } from '../world/unit'
import { CombinedState } from './combined-state-methods'
import { LocalAction } from './local-action'

type LocalActionDispatcher = (action: LocalAction) => void

export class TextsDisplayObject {
  private readonly scene: Phaser.Scene
  private worldState: WorldState
  private localGameState: LocalGameState
  private readonly localActionDispatcher: LocalActionDispatcher

  private readonly selectionText: Phaser.GameObjects.Text
  private readonly actionText: Phaser.GameObjects.Text
  private readonly actionText2: Phaser.GameObjects.Text
  private readonly endTurnText: Phaser.GameObjects.Text
  private readonly playerText: Phaser.GameObjects.Text
  private readonly hourglass: Phaser.GameObjects.Image

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
    this.playerText = this.scene.add.text(23, 20, '')
    this.hourglass = this.scene.add.image(875, 30, 'hourglass').setVisible(false)

    this.selectionText = this.scene.add.text(
      DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2,
      mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y,
      '',
    )
    this.actionText = this.scene.add
      .text(DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y + 25, '', {
        fill: ACTION_TEXT_COLOUR,
      })
      .setInteractive()
      .on('pointerdown', this.handleActionTextClick)
      .on('pointerover', () => this.actionText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText.setFill(ACTION_TEXT_COLOUR))
    this.actionText2 = this.scene.add
      .text(DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y + 50, '', {
        fill: ACTION_TEXT_COLOUR,
      })
      .setInteractive()
      .on('pointerdown', this.handleActionText2Click)
      .on('pointerover', () => this.actionText2.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText2.setFill(ACTION_TEXT_COLOUR))
    this.endTurnText = this.scene.add
      .text(700, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y, '', { fill: ACTION_TEXT_COLOUR })
      .setInteractive()
      .on('pointerdown', () => this.localActionDispatcher({ type: 'endTurn' }))
      .on('pointerover', () => this.endTurnText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.endTurnText.setFill(ACTION_TEXT_COLOUR))
  }

  private handleActionTextClick = (): void => {
    const mode = this.localGameState.mode
    switch (mode.type) {
      case 'selectHex':
        this.localActionDispatcher({ type: 'enterMoveMode' })
        break
      case 'moveUnit':
      case 'attack':
        this.localActionDispatcher({ type: 'abort' })
        break
      default:
        throw new UnreachableCaseError(mode)
    }
  }

  private handleActionText2Click = (): void => {
    if (this.localGameState.mode.type === 'selectHex') {
      this.localActionDispatcher({ type: 'enterAttackMode' })
    }
  }

  public hasClickHandlerFor = (point: Point): boolean => {
    for (const obj of [this.endTurnText, this.actionText, this.actionText2])
      if (obj.getBounds().contains(point.x, point.y)) return true
    return false
  }

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState
    this.hourglass.setVisible(localGameState.actionOutstandingWithServer)
    this.playerText.setText(`${this.combinedState.getCurrentPlayer().name} - Turn ${this.worldState.turn}`)
    this.selectionText.setText('')
    this.actionText.setText('')
    this.actionText2.setText('')
    const mode = this.localGameState.mode
    switch (mode.type) {
      case 'selectHex':
        this.syncSelectHexModeText()
        break
      case 'moveUnit':
        this.syncMoveUnitModeText(mode.unitId)
        break
      case 'attack':
        this.syncAttackModeText(mode.unitId)
        break
      default:
        throw new UnreachableCaseError(mode)
    }
    if (this.combinedState.getCurrentPlayer().endedTurn) {
      this.endTurnText.setText('Waiting for next turn...')
    } else {
      this.endTurnText.setText('End Turn (Shift + Enter)')
    }
  }

  private syncAttackModeText = (unitId: UnitId): void => {
    const unit = this.worldState.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionText.setText('Click unit to attack (or ESC to cancel)')
  }

  private syncMoveUnitModeText = (unitId: UnitId): void => {
    const unit = this.worldState.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionText.setText('Click tile to move to (or ESC to cancel)')
  }

  private syncSelectHexModeText = (): void => {
    const selectedUnit = this.combinedState.findSelectedUnit()
    if (selectedUnit) {
      this.selectionText.setText(this.describeUnit(selectedUnit))
      if (this.combinedState.unitCouldPotentiallyMove(selectedUnit)) this.actionText.setText('Move (m)')
      if (this.combinedState.unitCouldPotentiallyAttack(selectedUnit)) this.actionText2.setText('Attack (a)')
    }
  }

  private describeUnit = (unit: Unit): string =>
    `${unit.name} - Llama warrior - HP ${unit.hitPoints.current}/${unit.hitPoints.max} - actions ${unit.actionPoints.current}/${unit.actionPoints.max}`
}
