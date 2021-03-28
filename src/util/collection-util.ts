import { Option } from './types'
import * as R from 'ramda'

export const maxOpt = (items: number[]): Option<number> => (items.length === 0 ? undefined : R.apply(Math.max, items))
