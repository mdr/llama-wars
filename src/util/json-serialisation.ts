import { Hex } from '../world/hex'
import { WorldMap } from '../world/world-map'
import { Unit } from '../world/unit'
import { HitPoints } from '../world/hit-points'
import { ActionPoints } from '../world/action-points'
import { Player } from '../world/player'
import { WorldState } from '../world/world-state'

export const serialiseToJson = (value: any): any => {
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'undefined':
      return value
    case 'object':
      if (Array.isArray(value)) {
        return value.map(serialiseToJson)
      } else if (value instanceof Hex) {
        return { ...value.toJson(), _llamaClass: 'Hex' }
      } else if (value instanceof WorldMap) {
        return { ...value.toJson(), _llamaClass: 'WorldMap' }
      } else if (value instanceof WorldState) {
        return { ...value.toJson(), _llamaClass: 'WorldState' }
      } else if (value instanceof Unit) {
        return { ...value.toJson(), _llamaClass: 'Unit' }
      } else if (value instanceof HitPoints) {
        return { ...value.toJson(), _llamaClass: 'HitPoints' }
      } else if (value instanceof ActionPoints) {
        return { ...value.toJson(), _llamaClass: 'ActionPoints' }
      } else if (value instanceof Player) {
        return { ...value.toJson(), _llamaClass: 'Player' }
      } else {
        const newObject: any = {}
        for (const [key, val] of Object.entries(value)) {
          newObject[key] = serialiseToJson(val)
        }
        return newObject
      }
  }
}

export const deserialiseFromJson = (value: any): any => {
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'undefined':
      return value
    case 'object':
      if (Array.isArray(value)) {
        return value.map(deserialiseFromJson)
      } else if (value._llamaClass === 'Hex') {
        return Hex.fromJson(value)
      } else if (value._llamaClass === 'WorldMap') {
        return WorldMap.fromJson(value)
      } else if (value._llamaClass === 'WorldState') {
        return WorldState.fromJson(value)
      } else if (value._llamaClass === 'Unit') {
        return Unit.fromJson(value)
      } else if (value._llamaClass === 'ActionPoints') {
        return ActionPoints.fromJson(value)
      } else if (value._llamaClass === 'HitPoints') {
        return HitPoints.fromJson(value)
      } else if (value._llamaClass === 'Player') {
        return Player.fromJson(value)
      } else {
        const newObject: any = {}
        for (const [key, val] of Object.entries(value)) {
          newObject[key] = deserialiseFromJson(val)
        }
        return newObject
      }
  }
}
