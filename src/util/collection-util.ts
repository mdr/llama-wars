import { Option } from './types'
import * as R from 'ramda'

export const maxOpt = (items: number[]): Option<number> => (items.length === 0 ? undefined : R.apply(Math.max, items))

export const countWhere = <T>(items: T[], predicate: (item: T) => boolean): number =>
  items.reduce((n, item) => n + (predicate(item) ? 1 : 0), 0)
