import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
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
import { LinkDisplayObject } from './link-display-object'
import Scene = Phaser.Scene
import { colourNumber } from '../colours'

const BORDER_PADDING = 12
const TEXT_SPACING = 25

export class SelectionInfoDisplayObject {
  private readonly scene: Scene

  private worldState: WorldState
  private localGameState: LocalGameState
  private readonly localActionDispatcher: LocalActionDispatcher

  private readonly background: GameObjects.Rectangle
  private readonly border: UiBorderDisplayObject
  private readonly selectionText: GameObjects.Text
  private readonly actionLink1: LinkDisplayObject
  private readonly actionLink2: LinkDisplayObject
  private readonly actionLink3: LinkDisplayObject

  public static HEIGHT = 120
  public static WIDTH = 930

  constructor(
    scene: Phaser.Scene,
    worldState: WorldState,
    localGameState: LocalGameState,
    localActionDispatcher: LocalActionDispatcher,
    location: Point,
  ) {
    this.scene = scene
    this.worldState = worldState
    this.localGameState = localGameState
    this.localActionDispatcher = localActionDispatcher
    const { x, y } = location
    this.background = scene.add
      .rectangle(
        x,
        y,
        SelectionInfoDisplayObject.WIDTH,
        SelectionInfoDisplayObject.HEIGHT,
        colourNumber('#000000'),
        0.8,
      )
      .setOrigin(0)
    this.border = new UiBorderDisplayObject(scene, {
      topLeft: point(x, y),
      width: SelectionInfoDisplayObject.WIDTH,
      height: SelectionInfoDisplayObject.HEIGHT,
    })
    const Y_OFFSET = y + BORDER_PADDING
    const X_OFFSET = x + BORDER_PADDING
    this.selectionText = this.scene.add.text(X_OFFSET, Y_OFFSET, '')
    this.actionLink1 = new LinkDisplayObject(scene, X_OFFSET, Y_OFFSET + TEXT_SPACING, '', this.handleActionLink1Click)
    this.actionLink2 = new LinkDisplayObject(
      scene,
      X_OFFSET,
      Y_OFFSET + TEXT_SPACING * 2,
      '',
      this.handleActionLink2Click,
    )
    this.actionLink3 = new LinkDisplayObject(
      scene,
      X_OFFSET,
      Y_OFFSET + TEXT_SPACING * 3,
      '',
      this.handleActionLink3Click,
    )
    this.scene.add.existing(this.actionLink1)
    this.scene.add.existing(this.actionLink2)
    this.scene.add.existing(this.actionLink3)
  }

  private get combinedState(): CombinedState {
    return new CombinedState(this.worldState, this.localGameState)
  }

  private handleActionLink1Click = (): void => {
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

  private handleActionLink2Click = (): void => {
    if (this.localGameState.mode.type === 'selectHex') {
      this.scene.sound.play(AudioKeys.CLICK)
      this.localActionDispatcher({ type: 'enterAttackMode', attackType: 'melee' })
    }
  }

  private handleActionLink3Click = (): void => {
    if (this.localGameState.mode.type === 'selectHex') {
      this.scene.sound.play(AudioKeys.CLICK)
      this.localActionDispatcher({ type: 'enterAttackMode', attackType: 'spit' })
    }
  }

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState
    const visible = this.combinedState.findSelectedUnit() !== undefined
    this.background.setVisible(visible)
    this.border.setVisible(visible)
    this.selectionText.setText('').setVisible(visible)
    this.actionLink1.setText('').setVisible(visible)
    this.actionLink2.setText('').setVisible(visible)
    this.actionLink3.setText('').setVisible(visible)
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
    this.actionLink1.setText(`Click unit to ${attackType === 'melee' ? 'attack' : 'spit at'} (or ESC to cancel)`)
  }

  private syncMoveUnitModeText = (unitId: UnitId): void => {
    const unit = this.worldState.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionLink1.setText('Click tile to move to (or ESC to cancel)')
  }

  private syncSelectHexModeText = (): void => {
    const selectedUnit = this.combinedState.findSelectedUnit()
    if (selectedUnit) {
      this.selectionText.setText(this.describeUnit(selectedUnit))
      if (this.combinedState.unitCouldPotentiallyMove(selectedUnit)) {
        this.actionLink1.setText('Move (m)')
      }
      if (this.combinedState.unitCouldPotentiallyAttack(selectedUnit)) {
        this.actionLink2.setText('Attack (a)')
      }
      if (this.combinedState.unitCouldPotentiallyAttack(selectedUnit)) {
        this.actionLink3.setText('Spit (s)')
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
    for (const gameObject of [this.actionLink1, this.actionLink2, this.actionLink3])
      if (gameObject.containsPoint(point)) return true
    return false
  }
}
