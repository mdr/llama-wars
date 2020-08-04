import { Hex } from '../world/hex'
import { PlayerId } from '../world/world-state'
import { Mode } from './mode'
import { Maybe, nothing, Option, toMaybe, toOption } from '../util/types'

export class LocalGameState {
  readonly playerId: PlayerId
  readonly mode: Mode
  readonly selectedHex: Option<Hex>

  constructor({ playerId, mode, selectedHex }: { playerId: PlayerId, mode: Mode, selectedHex: Option<Hex> }) {
    this.playerId = playerId
    this.mode = mode
    this.selectedHex = selectedHex
  }

  public copy = ({
                   playerId = this.playerId,
                   mode = this.mode,
                   selectedHex = toMaybe(this.selectedHex),
                 }: { playerId?: PlayerId, mode?: Mode, selectedHex?: Maybe<Hex> } = {}): LocalGameState =>
    new LocalGameState({ playerId, mode, selectedHex: toOption(selectedHex) })


  public endTurn = (): LocalGameState =>
    this.copy({
      playerId: this.playerId == 1 ? 2 : 1,
      mode: { type: 'selectHex' },
      selectedHex: nothing,
    })

}

export const INITIAL_LOCAL_GAME_STATE = new LocalGameState({
  playerId: 1,
  mode: { type: 'selectHex' },
  selectedHex: undefined,
})

