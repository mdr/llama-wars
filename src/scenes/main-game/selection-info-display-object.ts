import * as R from 'ramda'

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
import { Unit, UnitId, UnitType } from '../../world/unit'
import { AttackType } from '../../world/world-actions'
import { LinkDisplayObject } from './link-display-object'
import { colourNumber } from '../colours'
import EventData = Phaser.Types.Input.EventData
import Pointer = Phaser.Input.Pointer

const BORDER_PADDING = 12
const TEXT_SPACING = 25

export class SelectionInfoDisplayObject extends GameObjects.Container {
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
    super(scene, location.x, location.y, [])
    this.scene = scene
    this.worldState = worldState
    this.localGameState = localGameState
    this.localActionDispatcher = localActionDispatcher
    this.background = scene.add
      .rectangle(
        0,
        0,
        SelectionInfoDisplayObject.WIDTH,
        SelectionInfoDisplayObject.HEIGHT,
        colourNumber('#000000'),
        0.8,
      )
      .setOrigin(0)
      .setInteractive()
      .on('pointerdown', (pointer: Pointer, x: number, y: number, event: EventData): void => event.stopPropagation())
      .on('pointerup', (pointer: Pointer, x: number, y: number, event: EventData): void => event.stopPropagation())
    this.border = new UiBorderDisplayObject(scene, {
      topLeft: point(0, 0),
      width: SelectionInfoDisplayObject.WIDTH,
      height: SelectionInfoDisplayObject.HEIGHT,
    })
    scene.add.existing(this.border)
    const Y_OFFSET = BORDER_PADDING
    const X_OFFSET = BORDER_PADDING
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
    this.add([this.background, this.border, this.selectionText, this.actionLink1, this.actionLink2, this.actionLink3])
  }

  private get combinedState(): CombinedState {
    return new CombinedState(this.worldState, this.localGameState)
  }

  private handleUnitAction = (action: UnitAction): void => {
    switch (action) {
      case UnitAction.MOVE:
        this.localActionDispatcher({ type: 'enterMoveMode' })
        break
      case UnitAction.SPIT:
        this.localActionDispatcher({ type: 'enterAttackMode', attackType: 'spit' })
        break
      case UnitAction.ATTACK:
        this.localActionDispatcher({ type: 'enterAttackMode', attackType: 'melee' })
        break
      case UnitAction.MATURE:
        this.localActionDispatcher({ type: 'matureUnit' })
        break
    }
  }

  private handleActionLink1Click = (): void => {
    const mode = this.localGameState.mode
    switch (mode.type) {
      case 'selectHex':
        this.scene.sound.play(AudioKeys.CLICK)
        const selectedUnit = this.combinedState.findSelectedUnit()
        if (selectedUnit) {
          const action = this.getUnitActions(selectedUnit)[0]
          this.handleUnitAction(action)
        }
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
      const selectedUnit = this.combinedState.findSelectedUnit()
      if (selectedUnit) {
        const action = this.getUnitActions(selectedUnit)[1]
        this.handleUnitAction(action)
      }
    }
  }

  private handleActionLink3Click = (): void => {
    if (this.localGameState.mode.type === 'selectHex') {
      this.scene.sound.play(AudioKeys.CLICK)
      const selectedUnit = this.combinedState.findSelectedUnit()
      if (selectedUnit) {
        const action = this.getUnitActions(selectedUnit)[2]
        this.handleUnitAction(action)
      }
    }
  }

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState
    const visible = this.combinedState.findSelectedUnit() !== undefined
    this.setVisible(visible)
    this.selectionText.setText('')
    this.actionLink1.setText('')
    this.actionLink2.setText('')
    this.actionLink3.setText('')
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

  private getUnitActions = (unit: Unit): UnitAction[] => {
    const actions = []
    if (this.combinedState.unitCouldPotentiallyMove(unit)) {
      actions.push(UnitAction.MOVE)
    }
    if (this.combinedState.unitCouldPotentiallyAttack(unit)) {
      actions.push(UnitAction.ATTACK)
      actions.push(UnitAction.SPIT)
    }
    if (unit.type === UnitType.CRIA) {
      actions.push(UnitAction.MATURE)
    }
    return actions
  }

  private syncSelectHexModeText = (): void => {
    const selectedUnit = this.combinedState.findSelectedUnit()
    if (selectedUnit) {
      this.selectionText.setText(this.describeUnit(selectedUnit))
      const unitActions = this.getUnitActions(selectedUnit)
      for (const [action, actionLink] of R.zip(unitActions, [this.actionLink1, this.actionLink2, this.actionLink3])) {
        actionLink.setText(describeUnitAction(action))
      }
    }
  }

  private describeUnit = (unit: Unit): string => {
    const { name, playerId, hitPoints, actionPoints } = unit
    const playerName = this.getPlayerName(playerId)
    const type = this.getUnitType(unit)
    return `${name} - ${type} - ${playerName} - HP ${hitPoints.current}/${hitPoints.max} - actions ${actionPoints.current}/${actionPoints.max}`
  }

  private getPlayerName = (playerId: PlayerId): string => this.worldState.getPlayer(playerId).name

  private getUnitType = (unit: Unit): string => {
    switch (unit.type) {
      case UnitType.CRIA:
        return 'Cria'
      case UnitType.WARRIOR:
        return 'Llama Warrior'
    }
  }
}

enum UnitAction {
  MOVE = 'MOVE',
  SPIT = 'SPIT',
  ATTACK = 'ATTACK',
  MATURE = 'MATURE',
}

const describeUnitAction = (action: UnitAction): string => {
  switch (action) {
    case UnitAction.ATTACK:
      return 'Attack (a)'
    case UnitAction.MOVE:
      return 'Move (m)'
    case UnitAction.SPIT:
      return 'Spit (s)'
    case UnitAction.MATURE:
      return 'Mature (t)'
  }
}
