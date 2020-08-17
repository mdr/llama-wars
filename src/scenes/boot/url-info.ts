import { GameId } from '../main-game/game-scene'
import { PlayerId } from '../../world/player'
import { Option } from '../../util/types'

export interface UrlInfo {
  gameId: GameId
  playerId?: PlayerId
}

export const getUrlInfo = (): Option<UrlInfo> => {
  const hash = window.location.hash
  if (hash === '') {
    return
  }
  const path = hash.substr(1)
  const segments = path.split('/')
  const gameId = segments[0]
  const playerId = segments.length > 1 ? Number.parseInt(segments[1]) : undefined
  return { gameId, playerId }
}

export const setUrlInfo = (urlInfo: UrlInfo): void => {
  let hash = urlInfo.gameId
  if (urlInfo.playerId !== undefined) {
    hash += '/' + urlInfo.playerId
  }
  window.location.hash = hash
}
