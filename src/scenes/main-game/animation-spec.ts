import { UnitId } from '../../world/unit'
import { Hex } from '../../world/hex'
import { AttackType } from '../../world/world-actions'
import { UnitOrBuildingId } from '../../world/world-state'

export interface MoveAnimationSpec {
  type: 'move'
  unitId: UnitId
  from: Hex
  to: Hex
}

export interface CombatAnimationSpec {
  type: 'combat'
  attackType: AttackType
  attacker: {
    unitOrBuildingId: UnitOrBuildingId
    location: Hex
    damageTaken: number
    killed: boolean
  }
  defender: {
    unitOrBuildingId: UnitOrBuildingId
    location: Hex
    damageTaken: number
    killed: boolean
  }
}

export interface MatureAnimationSpec {
  type: 'mature'
  unitId: UnitId
}

export type AnimationSpec = MoveAnimationSpec | CombatAnimationSpec | MatureAnimationSpec
