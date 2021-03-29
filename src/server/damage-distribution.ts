import { randomIntInclusive } from '../util/random-util'

export interface DamageDistribution {
  baseDamage: number
  plusMinus: number
}

export const damageDistribution = {
  warrior: { baseDamage: 20, plusMinus: 3 },
  default: { baseDamage: 10, plusMinus: 2 },
  cria: { baseDamage: 7, plusMinus: 2 },
  none: { baseDamage: 0, plusMinus: 0 },
  spit: { baseDamage: 5, plusMinus: 1 },
}

export const rollFromDistribution = ({ baseDamage, plusMinus }: DamageDistribution): number =>
  randomIntInclusive(baseDamage - plusMinus, baseDamage + plusMinus)
