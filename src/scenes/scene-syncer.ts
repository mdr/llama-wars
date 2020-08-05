import { Unit, UnitId } from '../world/unit'
import { UnreachableCaseError } from '../util/unreachable-case-error'
import { CombinedStateMethods } from './combined-state-methods'
import { WorldState } from '../world/world-state'
import { LocalGameState } from './local-game-state'
import { MapDisplayObject } from './map-display-object'
import { UnitDisplayObject } from './unit-display-object'

export class SceneSyncer extends CombinedStateMethods {
  private readonly mapDisplayObject: MapDisplayObject
  private readonly unitDisplayObjects: Map<UnitId, UnitDisplayObject>
  private readonly selectionText: Phaser.GameObjects.Text
  private readonly actionText: Phaser.GameObjects.Text
  private readonly actionText2: Phaser.GameObjects.Text
  private readonly endTurnText: Phaser.GameObjects.Text
  private readonly playerText: Phaser.GameObjects.Text

  constructor(worldState: WorldState, localGameState: LocalGameState,
              mapDisplayObject: MapDisplayObject,
              unitDisplayObjects: Map<UnitId, UnitDisplayObject>,
              selectionText: Phaser.GameObjects.Text,
              actionText: Phaser.GameObjects.Text,
              actionText2: Phaser.GameObjects.Text,
              endTurnText: Phaser.GameObjects.Text,
              playerText: Phaser.GameObjects.Text) {
    super(worldState, localGameState)
    this.mapDisplayObject = mapDisplayObject
    this.unitDisplayObjects = unitDisplayObjects
    this.selectionText = selectionText
    this.actionText = actionText
    this.actionText2 = actionText2
    this.endTurnText = endTurnText
    this.playerText = playerText
  }

  public syncScene = (): void => {
    this.mapDisplayObject.stateUpdated(this.worldState, this.localGameState)
    this.mapDisplayObject.syncScene()
    this.worldState.units.forEach(this.syncUnit)
    this.syncTexts()
  }

  private syncUnit = (unit: Unit): void => {
    const unitDisplayObject = this.getUnitDisplayObject(unit.id)
    unitDisplayObject.unitUpdated(unit)
    unitDisplayObject.syncScene()
  }

  private syncTexts = (): void => {
    this.playerText.setText(`Player ${this.playerId}`)
    this.selectionText.setText('')
    this.actionText.setText('')
    this.actionText2.setText('')
    switch (this.mode.type) {
      case 'selectHex':
        this.syncSelectHexModeText()
        break
      case 'moveUnit':
        this.syncMoveUnitModeText(this.mode.unitId)
        break
      case 'attack':
        this.syncAttackModeText(this.mode.unitId)
        break
      default:
        throw new UnreachableCaseError(this.mode)
    }
    if (this.getCurrentPlayer().endedTurn) {
      this.endTurnText.setText('Waiting for next turn...')
    } else {
      this.endTurnText.setText('End Turn (Shift + Enter)')
    }
  }

  private syncAttackModeText = (unitId: UnitId): void => {
    const unit = this.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionText.setText('Click unit to attack (or ESC to cancel)')
  }

  private syncMoveUnitModeText = (unitId: UnitId): void => {
    const unit = this.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionText.setText('Click tile to move to (or ESC to cancel)')
  }

  private syncSelectHexModeText = (): void => {
    const selectedUnit = this.findSelectedUnit()
    if (selectedUnit) {
      this.selectionText.setText(this.describeUnit(selectedUnit))
      if (this.unitCouldPotentiallyMove(selectedUnit))
        this.actionText.setText('Move (m)')
      if (this.unitCouldPotentiallyAttack(selectedUnit))
        this.actionText2.setText('Attack (a)')
    }
  }

  private describeUnit = (unit: Unit): string =>
    `${unit.name} - Llama warrior - HP ${unit.hitPoints.current}/${unit.hitPoints.max} - actions ${unit.actionPoints.current}/${unit.actionPoints.max}`

  private getUnitDisplayObject = (unitId: number): UnitDisplayObject => {
    const unitDisplayObject = this.unitDisplayObjects.get(unitId)
    if (!unitDisplayObject)
      throw `Could not find unit with ID ${unitId}`
    return unitDisplayObject
  }

}