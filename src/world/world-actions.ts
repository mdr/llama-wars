import { Hex } from './hex'
import { UnitId } from './unit'

export interface MoveUnitWorldAction {
  type: 'moveUnit'
  unitId: UnitId
  to: Hex
}

export interface AttackWorldAction {
  type: 'attack'
  attacker: {
    unitId: UnitId
    location: Hex
  }
  defender: {
    unitId: UnitId
    location: Hex
  }
}

export interface EndTurnWorldAction {
  type: 'endTurn'
}

export type WorldAction = MoveUnitWorldAction | AttackWorldAction | EndTurnWorldAction

export const worldActionToJson = (action: WorldAction): object => {
  switch (action.type) {
    case 'endTurn':
      return action
    case 'moveUnit':
      return { ...action, to: action.to.toJson() }
    case 'attack':
      const { attacker, defender } = action
      return {
        ...action,
        attacker: { ...attacker, location: attacker.location.toJson() },
        defender: { ...defender, location: defender.location.toJson() },
      }
  }
}

export const worldActionFromJson = (json: any): WorldAction => {
  switch (json.type) {
    case 'endTurn':
      return json
    case 'moveUnit':
      return { ...json, to: Hex.fromJson(json.to) }
    case 'attack':
      const { attacker, defender } = json
      return {
        ...json,
        attacker: { ...attacker, location: Hex.fromJson(attacker.location) },
        defender: { ...defender, location: Hex.fromJson(defender.location) },
      }
    default:
      throw `Unknown type: ${json.type}`
  }
}
