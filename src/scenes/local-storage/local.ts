import { Option } from '../../util/types'

const PLAYER_NAME_KEY = 'playerName'

export const LocalStorage = {
  storeName: (name: string) => window.localStorage.setItem(PLAYER_NAME_KEY, name),
  findName: (): Option<string> => window.localStorage.getItem(PLAYER_NAME_KEY) ?? undefined,
}
