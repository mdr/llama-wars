import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { hexWidth } from '../hex-geometry'
import { ACTION_TEXT_COLOUR, HOVER_ACTION_TEXT_COLOUR } from '../colours'
import { DRAWING_OFFSET, HEX_SIZE } from './game-scene'
import { UnreachableCaseError } from '../../util/unreachable-case-error'
import { Point, point } from '../point'
import { CombinedState } from '../combined-state-methods'
import { AudioKeys } from '../asset-keys'
import { UiBorderDisplayObject } from './ui-border-display-object'
import { GameObjects } from 'phaser'
import { LocalActionDispatcher } from './texts-display-object'
import { PlayerId } from '../../world/player'
import { Unit, UnitId } from '../../world/unit'
import { AttackType } from '../../world/world-actions'
import Scene = Phaser.Scene

export const TMP_Y_OFFSET = 9

export class SelectionInfoDisplayObject {
  private readonly scene: Scene

  private worldState: WorldState
  private localGameState: LocalGameState
  private readonly localActionDispatcher: LocalActionDispatcher

  private readonly border: UiBorderDisplayObject
  private readonly selectionText: GameObjects.Text
  private readonly actionText: GameObjects.Text
  private readonly actionText2: GameObjects.Text
  private readonly actionText3: GameObjects.Text

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
    this.border = new UiBorderDisplayObject(scene, { topLeft: point(10, 520), width: 930, height: 120 })
    this.selectionText = this.scene.add.text(
      DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2,
      TMP_Y_OFFSET * HEX_SIZE + DRAWING_OFFSET.y,
      '',
    )
    this.actionText = this.scene.add
      .text(DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2, TMP_Y_OFFSET * HEX_SIZE + DRAWING_OFFSET.y + 25, '', {
        fill: ACTION_TEXT_COLOUR,
      })
      .setInteractive()
      .on('pointerup', this.handleActionTextClick)
      .on('pointerover', () => this.actionText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText.setFill(ACTION_TEXT_COLOUR))
    this.actionText2 = this.scene.add
      .text(DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2, TMP_Y_OFFSET * HEX_SIZE + DRAWING_OFFSET.y + 50, '', {
        fill: ACTION_TEXT_COLOUR,
      })
      .setInteractive()
      .on('pointerup', this.handleActionText2Click)
      .on('pointerover', () => this.actionText2.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText2.setFill(ACTION_TEXT_COLOUR))
    this.actionText3 = this.scene.add
      .text(DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2, TMP_Y_OFFSET * HEX_SIZE + DRAWING_OFFSET.y + 75, '', {
        fill: ACTION_TEXT_COLOUR,
      })
      .setInteractive()
      .on('pointerup', this.handleActionText3Click)
      .on('pointerover', () => this.actionText3.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText3.setFill(ACTION_TEXT_COLOUR))
  }

  private get combinedState(): CombinedState {
    return new CombinedState(this.worldState, this.localGameState)
  }

  private handleActionTextClick = (): void => {
    const mode = this.localGameState.mode
    switch (mode.type) {
      case 'selectHex':
        this.scene.sound.play(AudioKeys.CLICK)
        this.localActionDispatcher({ type: 'enterMoveMode' })
        break
      case 'moveUnit':
      case 'attack':
        this.scene.sound.play(AudioKeys.CLICK)
        this.localActionDispatcher({ type: 'abort' })
        break
      default:
        throw new UnreachableCaseError(mode)
    }
  }

  private handleActionText2Click = (): void => {
    if (this.localGameState.mode.type === 'selectHex') {
      this.scene.sound.play(AudioKeys.CLICK)
      this.localActionDispatcher({ type: 'enterAttackMode', attackType: 'melee' })
    }
  }

  private handleActionText3Click = (): void => {
    if (this.localGameState.mode.type === 'selectHex') {
      this.scene.sound.play(AudioKeys.CLICK)
      this.localActionDispatcher({ type: 'enterAttackMode', attackType: 'spit' })
    }
  }

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState
    this.selectionText.setText('')
    this.actionText.setText('')
    this.actionText2.setText('')
    this.actionText3.setText('')
    const mode = this.localGameState.mode
    switch (mode.type) {
      case 'selectHex':
        this.syncSelectHexModeText()
        break
      case 'moveUnit':
        this.syncMoveUnitModeText(mode.unitId)
        break
      case 'attack':
        this.syncAttackModeText(mode.unitId, mode.attackType)
        break
      default:
        throw new UnreachableCaseError(mode)
    }
  }

  private syncAttackModeText = (unitId: UnitId, attackType: AttackType): void => {
    const unit = this.worldState.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionText.setText(`Click unit to ${attackType === 'melee' ? 'attack' : 'spit at'} (or ESC to cancel)`)
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
      if (this.combinedState.unitCouldPotentiallyMove(selectedUnit)) {
        this.actionText.setText('Move (m)')
      }
      if (this.combinedState.unitCouldPotentiallyAttack(selectedUnit)) {
        this.actionText2.setText('Attack (a)')
      }
      if (this.combinedState.unitCouldPotentiallyAttack(selectedUnit)) {
        this.actionText3.setText('Spit (s)')
      }
    }
  }
  private describeUnit = (unit: Unit): string => {
    const { name, playerId, hitPoints, actionPoints } = unit
    const playerName = this.getPlayerName(playerId)
    return `${name} - Llama warrior - ${playerName} - HP ${hitPoints.current}/${hitPoints.max} - actions ${actionPoints.current}/${actionPoints.max}`
  }

  private getPlayerName = (playerId: PlayerId): string => this.worldState.getPlayer(playerId).name

  public hasClickHandlerFor = (point: Point): boolean => {
    for (const gameObject of [this.actionText, this.actionText2, this.actionText3])
      if (gameObject.getBounds().contains(point.x, point.y)) return true
    return false
  }
}
