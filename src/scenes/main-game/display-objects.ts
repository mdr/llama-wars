import { MapDisplayObject } from './map-display-object'
import { UnitId } from '../../world/unit'
import { UnitDisplayObject } from './unit-display-object'
import { LocalActionDispatcher, TextsDisplayObject } from './texts-display-object'
import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { Point } from '../point'
import * as R from 'ramda'
import { Hex } from '../../world/hex'
import { UnreachableCaseError } from '../../util/unreachable-case-error'
import { Option } from '../../util/types'
import { AudioKeys } from '../asset-keys'

export interface MoveAnimationSpec {
  type: 'move'
  unitId: UnitId
  from: Hex
  to: Hex
}

export interface CombatAnimationSpec {
  type: 'combat'
  attacker: {
    unitId: UnitId
    location: Hex
    killed: boolean
  }
  defender: {
    unitId: UnitId
    location: Hex
    killed: boolean
  }
}

export type AnimationSpec = MoveAnimationSpec | CombatAnimationSpec

export class DisplayObjects {
  private readonly scene: Phaser.Scene
  private readonly mapDisplayObject: MapDisplayObject
  private readonly unitDisplayObjects: Map<UnitId, UnitDisplayObject> = new Map()
  private readonly animatedUnitDisplayObjects: Map<UnitId, UnitDisplayObject> = new Map()
  private readonly textsDisplayObject: TextsDisplayObject
  private readonly localActionDispatcher: LocalActionDispatcher
  private isAnimating: boolean = false
  private worldState: WorldState
  private localGameState: LocalGameState
  private animations: AnimationSpec[] = []

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

  public syncScene = (
    worldState: WorldState,
    localGameState: LocalGameState,
    animation: Option<AnimationSpec>,
  ): void => {
    this.worldState = worldState
    this.localGameState = localGameState
    this.mapDisplayObject?.syncScene(this.worldState, this.localGameState)
    this.textsDisplayObject?.syncScene(this.worldState, this.localGameState)

    if (animation) {
      this.animations = R.append(animation)(this.animations)
      this.getUnitsInvolvedInAnimation(animation).forEach(this.manageUnitAsBeingAnimated)
      this.triggerAnimations()
    }

    this.syncUnits()
  }

  private syncUnits = (): void => {
    this.removeUnitDisplayObjectsNoLongerNeeded()
    const unitsToSync = this.worldState.units.filter((unit) => !this.animatedUnitDisplayObjects.has(unit.id))
    for (const unit of unitsToSync) {
      let unitDisplayObject = this.unitDisplayObjects.get(unit.id)
      if (!unitDisplayObject) {
        unitDisplayObject = new UnitDisplayObject(this.scene, unit)
        this.unitDisplayObjects.set(unit.id, unitDisplayObject)
      }
      unitDisplayObject.syncScene(unit)
    }
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

  private triggerAnimations = (): void => {
    if (this.isAnimating) {
      return
    } else {
      this.processAnimations()
    }
  }

  private processAnimations = async (): Promise<void> => {
    this.isAnimating = true
    try {
      while (this.animations.length > 0) {
        const animation = R.head(this.animations)
        if (animation) {
          this.animations = R.tail(this.animations)
          await this.runAnimation(animation)
          this.releaseUnitsFromBeingAnimatedWhereNoLongerNeeded(animation)
        }
      }
    } finally {
      this.isAnimating = false
    }
  }

  private releaseUnitsFromBeingAnimatedWhereNoLongerNeeded = (animation: AnimationSpec): void => {
    const unitIdsInAnimation = this.getUnitsInvolvedInAnimation(animation)
    const unitIdsInRemainingAnimations = this.getUnitsInvolvedInAnimations()
    const unitIdsToRelease = R.difference(unitIdsInAnimation, unitIdsInRemainingAnimations)
    unitIdsToRelease.forEach(this.releaseUnitFromBeingAnimated)
  }

  private manageUnitAsBeingAnimated = (unitId: UnitId): void => {
    const displayObject = this.unitDisplayObjects.get(unitId)
    if (displayObject) {
      this.unitDisplayObjects.delete(unitId)
      this.animatedUnitDisplayObjects.set(unitId, displayObject)
    }
  }

  private releaseUnitFromBeingAnimated = (unitId: UnitId): void => {
    const displayObject = this.animatedUnitDisplayObjects.get(unitId)
    if (!displayObject) throw `Unexpected missing display object for unit ${unitId}`
    this.animatedUnitDisplayObjects.delete(unitId)
    const unit = this.worldState.findUnitById(unitId)
    if (unit) {
      displayObject.syncScene(unit)
      this.unitDisplayObjects.set(unitId, displayObject)
    } else {
      displayObject.destroy()
    }
  }

  private getUnitsInvolvedInAnimations = (): UnitId[] => R.chain(this.getUnitsInvolvedInAnimation, this.animations)

  private getUnitsInvolvedInAnimation = (animation: AnimationSpec): UnitId[] => {
    switch (animation.type) {
      case 'move':
        return [animation.unitId]
      case 'combat':
        return [animation.attacker.unitId, animation.defender.unitId]
    }
  }

  private runAnimation = async (animation: AnimationSpec): Promise<void> => {
    switch (animation.type) {
      case 'move':
        const displayObject = this.animatedUnitDisplayObjects.get(animation.unitId)
        if (!displayObject) throw `Unexpected missing display object for unit ${animation.unitId}`
        this.scene.sound.play(AudioKeys.WALK)
        await displayObject.runMoveAnimation(animation.from, animation.to)
        break
      case 'combat':
        const { attacker, defender } = animation
        const attackerDisplayObject = this.animatedUnitDisplayObjects.get(attacker.unitId)
        if (!attackerDisplayObject) throw `Unexpected missing display object for unit ${attacker.unitId}`
        const defenderDisplayObject = this.animatedUnitDisplayObjects.get(defender.unitId)
        if (!defenderDisplayObject) throw `Unexpected missing display object for unit ${defender.unitId}`
        this.scene.sound.play(AudioKeys.ATTACK)
        if (attacker.killed || defender.killed) {
          this.scene.sound.play(AudioKeys.DEATH)
        }
        const simultaneousAnimations = []
        simultaneousAnimations.push(attackerDisplayObject.runAttackAnimation(attacker.location, defender.location))
        if (attacker.killed) {
          simultaneousAnimations.push(attackerDisplayObject.runDeathAnimation())
        }
        if (defender.killed) {
          simultaneousAnimations.push(defenderDisplayObject.runDeathAnimation())
        }
        await Promise.all(simultaneousAnimations)
        break
      default:
        throw new UnreachableCaseError(animation)
    }
  }
}
