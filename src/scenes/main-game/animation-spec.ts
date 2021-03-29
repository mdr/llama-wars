import { UnitId } from '../../world/unit'
import { Hex } from '../../world/hex'
import { AttackType } from '../../world/world-actions'

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
    unitId: UnitId
    location: Hex
    damageTaken: number
    killed: boolean
  }
  defender: {
    unitId: UnitId
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
