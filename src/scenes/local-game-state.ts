import { Hex } from '../world/hex'
import { PlayerId } from '../world/world-state'
import { Mode } from './mode'
import { Maybe, nothing, Option, toMaybe, toOption } from '../util/types'

export class LocalGameState {
  readonly playerId: PlayerId
  readonly mode: Mode
  readonly selectedHex: Option<Hex>
  readonly actionOutstandingWithServer: boolean

  constructor({ playerId, mode, selectedHex, actionOutstandingWithServer = false }:
                { playerId: PlayerId, mode: Mode, selectedHex?: Option<Hex>, actionOutstandingWithServer?: boolean }) {
    this.playerId = playerId
    this.mode = mode
    this.selectedHex = selectedHex
    this.actionOutstandingWithServer = actionOutstandingWithServer
  }

  public copy = ({
                   playerId = this.playerId,
                   mode = this.mode,
                   selectedHex = toMaybe(this.selectedHex),
                   actionOutstandingWithServer = this.actionOutstandingWithServer,
                 }: { playerId?: PlayerId, mode?: Mode, selectedHex?: Maybe<Hex>, actionOutstandingWithServer?: boolean } = {}): LocalGameState =>
    new LocalGameState({ playerId, mode, selectedHex: toOption(selectedHex), actionOutstandingWithServer })

  public setSelectedHex = (selectedHex: Option<Hex>): LocalGameState =>
    this.copy({ selectedHex: toMaybe(selectedHex) })

  public setMode = (mode: Mode): LocalGameState => this.copy({ mode })

}

export const INITIAL_LOCAL_GAME_STATE = new LocalGameState({
  playerId: 1,
  mode: { type: 'selectHex' },
})
