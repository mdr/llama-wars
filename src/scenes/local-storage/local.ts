import { Option } from '../../util/types'

export const storeName = (name: string) => window.localStorage.setItem('playerName', name)

export const findName = (): Option<string> => window.localStorage.getItem('playerName') ?? undefined
