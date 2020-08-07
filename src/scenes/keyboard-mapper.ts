import { Option } from '../util/types'
import { LocalAction } from './local-action'
import { HexDirection } from '../world/hex-direction'
import { Mode } from './mode'

export const mapToLocalAction = (event: KeyboardEvent, mode: Mode): Option<LocalAction> => {
  switch (event.key) {
    case 'ArrowLeft':
    case '4':
      return { type: 'go', direction: HexDirection.WEST }
    case 'ArrowRight':
    case '6':
      return { type: 'go', direction: HexDirection.EAST }
    case '7':
      return { type: 'go', direction: HexDirection.NORTH_WEST }
    case '3':
      return { type: 'go', direction: HexDirection.SOUTH_EAST }
    case '9':
      return { type: 'go', direction: HexDirection.NORTH_EAST }
    case '1':
      return { type: 'go', direction: HexDirection.SOUTH_WEST }
    case 'Escape':
      return { type: 'abort' }
    case 'Enter':
      if (event.shiftKey) return { type: 'endTurn' }
      break
    case 'n':
      if (event.ctrlKey) return { type: 'selectNextUnit' }
      break
    case 'm':
      if (mode.type == 'selectHex') return { type: 'enterMoveMode' }
      break
    case 'a':
      if (mode.type == 'selectHex') return { type: 'enterAttackMode' }
      break
  }
}
