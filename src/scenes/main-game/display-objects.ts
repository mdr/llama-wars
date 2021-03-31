import { MapDisplayObject } from './map-display-object'
import { UnitId } from '../../world/unit'
import { UnitDisplayObject } from './unit-display-object'
import { UiDisplayObjects } from './ui/ui-display-objects'
import { UnitOrBuildingId, WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { Point } from '../point'
import * as R from 'ramda'
import { UnreachableCaseError } from '../../util/unreachable-case-error'
import { Option } from '../../util/types'
import { AudioKeys } from '../asset-keys'
import { randomElement } from '../../util/random-util'
import { fireAndForget } from '../../util/async-util'
import { LLAMA_EAT, LLAMA_WALK } from '../animations'
import { AnimationSpec, CombatAnimationSpec, MatureAnimationSpec, MoveAnimationSpec } from './animation-spec'
import { LocalActionDispatcher } from './local-action'
import { BuildingDisplayObject } from './building-display-object'
import { AttackType } from '../../world/world-actions'
import { BuildingId } from '../../world/building'

export type AnimationSpeed = 'normal' | 'quick'

export class DisplayObjects {
  private readonly scene: Phaser.Scene
  private readonly mapDisplayObject: MapDisplayObject
  // Unit display objects can either be in regular mode or animated mode.
  // If animated, then they aren't included in the regular syncScene updates, but complete
  // their animation and are then synced.
  private readonly unitDisplayObjects: Map<UnitId, UnitDisplayObject> = new Map()
  private readonly animatedUnitDisplayObjects: Map<UnitId, UnitDisplayObject> = new Map()
  private readonly buildingDisplayObjects: Map<UnitId, BuildingDisplayObject> = new Map()
  private readonly animatedBuildingDisplayObjects: Map<UnitId, BuildingDisplayObject> = new Map()
  private readonly textsDisplayObject: UiDisplayObjects
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
    this.textsDisplayObject = new UiDisplayObjects(
      this.scene,
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
      this.randomlyFireEatingAnimation()
      this.scheduleEatingAnimation()
    }, delay)
  }

  private randomlyFireEatingAnimation() {
    const unitDisplayObjects = Array.from(this.unitDisplayObjects.values())
    if (unitDisplayObjects.length > 0) {
      const randomUnit = randomElement(unitDisplayObjects)
      fireAndForget(() => randomUnit.runEatAnimation())
    }
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
      this.getIdsInvolvedInAnimation(animation).forEach(this.manageUnitOrBuildingAsBeingAnimated)
      this.triggerAnimations()
    }

    this.syncUnits()
    this.syncBuildings()
  }

  private syncBuildings = (): void => {
    this.removeBuildingDisplayObjectsNoLongerNeeded()
    const buildingsToSync = this.worldState.buildings.filter(
      (building) => !this.animatedBuildingDisplayObjects.has(building.id),
    )
    for (const building of buildingsToSync) {
      let buildingDisplayObject = this.buildingDisplayObjects.get(building.id)
      if (!buildingDisplayObject) {
        buildingDisplayObject = new BuildingDisplayObject(this.scene, building)
        this.buildingDisplayObjects.set(building.id, buildingDisplayObject)
      }
      buildingDisplayObject.syncScene(building)
    }
  }

  private removeBuildingDisplayObjectsNoLongerNeeded = (): void => {
    const surplusBuildingIds = R.difference(
      Array.from(this.buildingDisplayObjects.keys()),
      this.worldState.buildings.map((building) => building.id),
    )
    for (const buildingId of surplusBuildingIds) {
      this.buildingDisplayObjects.get(buildingId)?.destroy()
      this.buildingDisplayObjects.delete(buildingId)
    }
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
      fireAndForget(this.processAnimations)
    }
  }

  // Select an initial batch of animations from the queue so that no two animations in the batch involve the same units.
  private sequenceAnimations = (): {
    animationsToPerformNow: AnimationSpec[]
    animationsToPerformLater: AnimationSpec[]
  } => {
    const idsInvolvedInEarlierAnimations = new Set<UnitOrBuildingId>()
    const animationsToPerformNow = []
    const animationsToPerformLater = []
    for (const animation of this.animations) {
      const idsInvolvedInAnimation = this.getIdsInvolvedInAnimation(animation)
      const isAffectedByEarlierAnimations = R.any(
        (id) => idsInvolvedInEarlierAnimations.has(id),
        idsInvolvedInAnimation,
      )
      if (isAffectedByEarlierAnimations) {
        animationsToPerformLater.push(animation)
      } else {
        animationsToPerformNow.push(animation)
      }
      for (const id of idsInvolvedInAnimation) {
        idsInvolvedInEarlierAnimations.add(id)
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
          this.releaseUnitsOrBuildingsFromBeingAnimatedWhereNoLongerNeeded(animation)
        }
      }
    } finally {
      this.isAnimating = false
    }
  }

  private releaseUnitsOrBuildingsFromBeingAnimatedWhereNoLongerNeeded = (animation: AnimationSpec): void => {
    const idsInAnimation = this.getIdsInvolvedInAnimation(animation)
    const idsInRemainingAnimations = this.getIdsInvolvedInAnimations()
    const idsToRelease = R.difference(idsInAnimation, idsInRemainingAnimations)
    idsToRelease.forEach(this.releaseUnitOrBuildingFromBeingAnimated)
  }

  private manageUnitOrBuildingAsBeingAnimated = (id: UnitOrBuildingId): void => {
    const unitDisplayObject = this.unitDisplayObjects.get(id)
    if (unitDisplayObject) {
      this.unitDisplayObjects.delete(id)
      this.animatedUnitDisplayObjects.set(id, unitDisplayObject)
    }
    const buildingDisplayObject = this.buildingDisplayObjects.get(id)
    if (buildingDisplayObject) {
      this.buildingDisplayObjects.delete(id)
      this.animatedBuildingDisplayObjects.set(id, buildingDisplayObject)
    }
  }

  private releaseUnitOrBuildingFromBeingAnimated = (id: UnitOrBuildingId): void => {
    const unitDisplayObject = this.animatedUnitDisplayObjects.get(id)
    if (unitDisplayObject) {
      this.releaseUnitFromBeingAnimated(id, unitDisplayObject)
    }
    const buildingDisplayObject = this.animatedBuildingDisplayObjects.get(id)
    if (buildingDisplayObject) {
      this.releaseBuildingFromBeingAnimated(id, buildingDisplayObject)
    }
    if (!unitDisplayObject && !buildingDisplayObject) {
      throw `Unexpected missing display object for unit/building ${id}`
    }
  }

  private releaseUnitFromBeingAnimated(unitId: UnitId, unitDisplayObject: UnitDisplayObject) {
    this.animatedUnitDisplayObjects.delete(unitId)
    const unit = this.worldState.findUnitById(unitId)
    if (unit) {
      unitDisplayObject.syncScene(unit)
      this.unitDisplayObjects.set(unitId, unitDisplayObject)
    } else {
      unitDisplayObject.destroy()
    }
  }

  private releaseBuildingFromBeingAnimated(buildingId: BuildingId, buildingDisplayObject: BuildingDisplayObject) {
    this.animatedBuildingDisplayObjects.delete(buildingId)
    const building = this.worldState.findBuildingById(buildingId)
    if (building) {
      buildingDisplayObject.syncScene(building)
      this.buildingDisplayObjects.set(buildingId, buildingDisplayObject)
    } else {
      buildingDisplayObject.destroy()
    }
  }

  private getIdsInvolvedInAnimations = (): UnitOrBuildingId[] =>
    R.chain(this.getIdsInvolvedInAnimation, this.animations)

  private getIdsInvolvedInAnimation = (animation: AnimationSpec): UnitOrBuildingId[] => {
    switch (animation.type) {
      case 'move':
        return [animation.unitId]
      case 'combat':
        return [animation.attacker.unitOrBuildingId, animation.defender.unitOrBuildingId]
      case 'mature':
        return [animation.unitId]
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
      case 'mature':
        await this.runMatureAnimation(animation, speed)
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

  private runMatureAnimation = async (animation: MatureAnimationSpec, speed: AnimationSpeed): Promise<void> => {
    const displayObject = this.animatedUnitDisplayObjects.get(animation.unitId)
    if (!displayObject) throw `Unexpected missing display object for unit ${animation.unitId}`
    this.scene.sound.play(AudioKeys.MATURE)
    await displayObject.runMatureAnimation(speed)
  }

  private runAttackAnimation = (
    attackerDisplayObject: UnitDisplayObject,
    animation: CombatAnimationSpec,
    speed: AnimationSpeed,
  ): Promise<void> => {
    const { attackType, attacker, defender } = animation
    switch (attackType) {
      case 'melee':
        return attackerDisplayObject.runAttackAnimation(attacker.location, defender.location, speed)
      case 'spit':
        return attackerDisplayObject.runSpitAnimation(attacker.location, defender.location, speed)
    }
  }

  private playAttackSound = (attackType: AttackType) => {
    switch (attackType) {
      case 'melee':
        this.scene.sound.play(randomElement([AudioKeys.ATTACK_1, AudioKeys.ATTACK_2, AudioKeys.ATTACK_3]))
        break
      case 'spit':
        this.scene.sound.play(AudioKeys.SPIT)
        break
    }
  }

  private playCombatSound = (animation: CombatAnimationSpec) => {
    const { attackType, attacker, defender } = animation
    this.playAttackSound(attackType)
    if (attacker.killed || defender.killed) {
      this.scene.sound.play(AudioKeys.DEATH)
    }
  }

  private runCombatAnimation = async (animation: CombatAnimationSpec, speed: AnimationSpeed): Promise<void> => {
    const { attacker, defender } = animation
    this.playCombatSound(animation)
    const attackerDisplayObject = this.animatedUnitDisplayObjects.get(attacker.unitOrBuildingId)
    if (!attackerDisplayObject) throw `Unexpected missing display object for unit ${attacker.unitOrBuildingId}`
    const defenderDisplayObject = this.getAnimatedDisplayObject(defender.unitOrBuildingId)
    const simultaneousAnimations: Promise<void>[] = []
    simultaneousAnimations.push(this.runAttackAnimation(attackerDisplayObject, animation, speed))
    if (attacker.killed) {
      simultaneousAnimations.push(attackerDisplayObject.runDeathAnimation(speed))
    }
    if (defender.killed) {
      simultaneousAnimations.push(defenderDisplayObject.runDeathAnimation(speed))
    }
    await Promise.all(simultaneousAnimations)
    if (attacker.damageTaken > 0) {
      fireAndForget(() => attackerDisplayObject.runDamageAnimation(attacker.location, attacker.damageTaken, speed))
    }
    if (defender.damageTaken > 0) {
      fireAndForget(() => defenderDisplayObject.runDamageAnimation(defender.location, defender.damageTaken, speed))
    }
  }

  private getAnimatedDisplayObject = (id: UnitOrBuildingId): UnitDisplayObject | BuildingDisplayObject => {
    const displayObject = this.animatedUnitDisplayObjects.get(id) ?? this.animatedBuildingDisplayObjects.get(id)
    if (!displayObject) {
      throw `Unexpected missing display object for unit or building ${id}`
    }
    return displayObject
  }
}
