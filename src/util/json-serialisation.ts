import { Hex } from '../world/hex'

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
      } else {
        const newObject = {}
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
      } else if (value._llamaClass == 'Hex') {
        return Hex.fromJson(value)
      } else {
        const newObject = {}
        for (const [key, val] of Object.entries(value)) {
          newObject[key] = deserialiseFromJson(val)
        }
        return newObject
      }
  }
}