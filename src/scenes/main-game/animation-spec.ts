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
    damage: number
    killed: boolean
  }
  defender: {
    unitId: UnitId
    location: Hex
    damage: number
    killed: boolean
  }
}

export type AnimationSpec = MoveAnimationSpec | CombatAnimationSpec
