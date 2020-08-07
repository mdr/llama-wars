import { MapDisplayObject } from './map-display-object'
import { UnitId } from '../../world/unit'
import { UnitDisplayObject } from './unit-display-object'
import { LocalActionDispatcher, TextsDisplayObject } from './texts-display-object'
import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { Point } from '../point'
import * as R from 'ramda'
import { Hex } from '../../world/hex'

export class DisplayObjects {
  private readonly scene: Phaser.Scene
  private readonly mapDisplayObject: MapDisplayObject
  private readonly unitDisplayObjects: Map<UnitId, UnitDisplayObject> = new Map()
  private readonly textsDisplayObject: TextsDisplayObject
  private readonly localActionDispatcher: LocalActionDispatcher

  private worldState: WorldState
  private localGameState: LocalGameState

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
    this.mapDisplayObject = new MapDisplayObject(scene, this.worldState, this.localGameState)
    this.textsDisplayObject = new TextsDisplayObject(
      scene,
      this.worldState,
      this.localGameState,
      this.localActionDispatcher,
    )
  }

  public handlePointerMove = (point: Point): void => this.mapDisplayObject?.handlePointerMove(point)

  public hasClickHandlerFor = (point: Point): boolean => this.textsDisplayObject.hasClickHandlerFor(point)

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState
    this.mapDisplayObject?.syncScene(this.worldState, this.localGameState)
    this.textsDisplayObject?.syncScene(this.worldState, this.localGameState)
    this.removeUnitDisplayObjectsNoLongerNeeded()

    this.worldState.units.forEach((unit) => {
      let unitDisplayObject = this.unitDisplayObjects.get(unit.id)
      if (!unitDisplayObject) {
        unitDisplayObject = new UnitDisplayObject(this.scene, unit)
        this.unitDisplayObjects.set(unit.id, unitDisplayObject)
      }
      unitDisplayObject.syncScene(unit)
    })
  }

  private removeUnitDisplayObjectsNoLongerNeeded = (): void => {
    const surplusUnitIds = R.difference(
      Array.from(this.unitDisplayObjects.keys()),
      this.worldState.units.map((unit) => unit.id),
    )
    for (const unitId of surplusUnitIds) {
      this.unitDisplayObjects.get(unitId)?.destroy()
      this.unitDisplayObjects.delete(unitId)
    }
  }

  public runAttackAnimation = (unitId: UnitId, from: Hex, to: Hex): void =>
    this.unitDisplayObjects.get(unitId)?.runAttackAnimation(from, to)

  public runMoveAnimation = (unitId: number, from: Hex, to: Hex): void =>
    this.unitDisplayObjects.get(unitId)?.runMoveAnimation(from, to)
}
