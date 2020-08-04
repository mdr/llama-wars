import { Hex } from '../world/hex'
import { UnitId } from '../world/unit'

export interface MoveUnitMode {
  type: 'moveUnit'
  from: Hex
  unitId: UnitId
}

export interface AttackMode {
  type: 'attack'
  from: Hex
  unitId: UnitId
}

export interface SelectHexMode {
  type: 'selectHex'
}

export type Mode = MoveUnitMode | AttackMode | SelectHexMode
