import { MapDisplayObject } from './map-display-object'
import { UnitId } from '../../world/unit'
import { UnitDisplayObject } from './unit-display-object'
import { LocalActionDispatcher, TextsDisplayObject } from './texts-display-object'
import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { Point } from '../point'
import * as R from 'ramda'
import { UnreachableCaseError } from '../../util/unreachable-case-error'
import { Option } from '../../util/types'
import { AudioKeys } from '../asset-keys'
import { randomElement } from '../../util/random-util'
import { fireAndForget } from '../../util/async-util'
import { LLAMA_EAT, LLAMA_WALK } from '../animations'
import { AnimationSpec, CombatAnimationSpec, MoveAnimationSpec } from './animation-spec'

export type AnimationSpeed = 'normal' | 'quick'

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
    this.scene.anims.create(LLAMA_WALK)
    this.scene.anims.create(LLAMA_EAT)
    this.scheduleEatingAnimation()
  }

  private scheduleEatingAnimation = (): void => {
    const times = [4000, 5000, 7000]
    const delay = randomElement(times)
    setTimeout(() => {
      const unitDisplayObjects = Array.from(this.unitDisplayObjects.values())
      if (unitDisplayObjects.length > 0) {
        const randomUnit = randomElement(unitDisplayObjects)
        fireAndForget(() => randomUnit.runEatAnimation())
      }
      this.scheduleEatingAnimation()
    }, delay)
  }

  public handlePointerMove = (point: Point): void => this.mapDisplayObject?.handlePointerMove(point)

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
      this.getUnitIdsInvolvedInAnimation(animation).forEach(this.manageUnitAsBeingAnimated)
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

  private sequenceAnimations = (): {
    animationsToPerformNow: AnimationSpec[]
    animationsToPerformLater: AnimationSpec[]
  } => {
    const unitIdsInvolvedInEarlierAnimations = new Set<UnitId>()
    const animationsToPerformNow = []
    const animationsToPerformLater = []
    for (const animation of this.animations) {
      const unitIdsInvolvedInAnimation = this.getUnitIdsInvolvedInAnimation(animation)
      const affectedByEarlierAnimations = R.any(
        (unitId) => unitIdsInvolvedInEarlierAnimations.has(unitId),
        unitIdsInvolvedInAnimation,
      )
      if (affectedByEarlierAnimations) {
        animationsToPerformLater.push(animation)
      } else {
        animationsToPerformNow.push(animation)
      }
      for (const unitId of unitIdsInvolvedInAnimation) {
        unitIdsInvolvedInEarlierAnimations.add(unitId)
      }
    }
    return { animationsToPerformNow, animationsToPerformLater }
  }

  private processAnimations = async (): Promise<void> => {
    this.isAnimating = true
    try {
      while (this.animations.length > 0) {
        const { animationsToPerformNow, animationsToPerformLater } = this.sequenceAnimations()
        this.animations = animationsToPerformLater
        const speed = animationsToPerformLater.length === 0 ? 'normal' : 'quick'
        await Promise.all(animationsToPerformNow.map((animation) => this.runAnimation(animation, speed)))
        for (const animation of animationsToPerformNow) {
          this.releaseUnitsFromBeingAnimatedWhereNoLongerNeeded(animation)
        }
      }
    } finally {
      this.isAnimating = false
    }
  }

  private releaseUnitsFromBeingAnimatedWhereNoLongerNeeded = (animation: AnimationSpec): void => {
    const unitIdsInAnimation = this.getUnitIdsInvolvedInAnimation(animation)
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

  private getUnitsInvolvedInAnimations = (): UnitId[] => R.chain(this.getUnitIdsInvolvedInAnimation, this.animations)

  private getUnitIdsInvolvedInAnimation = (animation: AnimationSpec): UnitId[] => {
    switch (animation.type) {
      case 'move':
        return [animation.unitId]
      case 'combat':
        return [animation.attacker.unitId, animation.defender.unitId]
    }
  }

  private runAnimation = async (animation: AnimationSpec, speed: AnimationSpeed): Promise<void> => {
    switch (animation.type) {
      case 'move':
        await this.runMoveAnimation(animation, speed)
        break
      case 'combat':
        await this.runCombatAnimation(animation, speed)
        break
      default:
        throw new UnreachableCaseError(animation)
    }
  }

  private runMoveAnimation = async (animation: MoveAnimationSpec, speed: AnimationSpeed): Promise<void> => {
    const displayObject = this.animatedUnitDisplayObjects.get(animation.unitId)
    if (!displayObject) throw `Unexpected missing display object for unit ${animation.unitId}`
    this.scene.sound.play(AudioKeys.WALK)
    await displayObject.runMoveAnimation(animation.from, animation.to, speed)
  }

  private runCombatAnimation = async (animation: CombatAnimationSpec, speed: AnimationSpeed): Promise<void> => {
    const { attacker, defender } = animation
    const attackerDisplayObject = this.animatedUnitDisplayObjects.get(attacker.unitId)
    if (!attackerDisplayObject) throw `Unexpected missing display object for unit ${attacker.unitId}`
    const defenderDisplayObject = this.animatedUnitDisplayObjects.get(defender.unitId)
    if (!defenderDisplayObject) throw `Unexpected missing display object for unit ${defender.unitId}`
    if (animation.attackType === 'melee') {
      this.scene.sound.play(randomElement([AudioKeys.ATTACK_1, AudioKeys.ATTACK_2, AudioKeys.ATTACK_3]))
    } else {
      this.scene.sound.play(AudioKeys.SPIT)
    }
    if (attacker.killed || defender.killed) {
      this.scene.sound.play(AudioKeys.DEATH)
    }
    const simultaneousAnimations: Promise<void>[] = []
    if (animation.attackType === 'melee') {
      simultaneousAnimations.push(attackerDisplayObject.runAttackAnimation(attacker.location, defender.location, speed))
    } else {
      simultaneousAnimations.push(attackerDisplayObject.runSpitAnimation(attacker.location, defender.location, speed))
    }
    if (attacker.killed) {
      simultaneousAnimations.push(attackerDisplayObject.runDeathAnimation(speed))
    }
    if (defender.killed) {
      simultaneousAnimations.push(defenderDisplayObject.runDeathAnimation(speed))
    }
    await Promise.all(simultaneousAnimations)
    if (attacker.damage > 0) {
      fireAndForget(() => attackerDisplayObject.runDamageAnimation(attacker.location, attacker.damage, speed))
    }
    if (defender.damage > 0) {
      fireAndForget(() => defenderDisplayObject.runDamageAnimation(defender.location, defender.damage, speed))
    }
  }
}
