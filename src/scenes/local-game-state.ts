import { Hex } from '../world/hex'
import { Mode } from './main-game/mode'
import { Maybe, Option, toMaybe, toOption } from '../util/types'
import { PlayerId } from '../world/player'
import assert = require('assert')

export class LocalGameState {
  readonly playerId: PlayerId
  readonly mode: Mode
  readonly selectedHex: Option<Hex>
  readonly actionsOutstandingWithServer: number

  constructor({
    playerId,
    mode,
    selectedHex,
    actionsOutstandingWithServer = 0,
  }: {
    playerId: PlayerId
    mode: Mode
    selectedHex?: Option<Hex>
    actionsOutstandingWithServer?: number
  }) {
    this.playerId = playerId
    this.mode = mode
    this.selectedHex = selectedHex
    this.actionsOutstandingWithServer = actionsOutstandingWithServer
    assert(actionsOutstandingWithServer >= 0)
  }

  public copy = ({
    playerId = this.playerId,
    mode = this.mode,
    selectedHex = toMaybe(this.selectedHex),
    actionsOutstandingWithServer = this.actionsOutstandingWithServer,
  }: {
    playerId?: PlayerId
    mode?: Mode
    selectedHex?: Maybe<Hex>
    actionsOutstandingWithServer?: number
  } = {}): LocalGameState =>
    new LocalGameState({ playerId, mode, selectedHex: toOption(selectedHex), actionsOutstandingWithServer })

  public deselect = (): LocalGameState => this.setSelectedHex(undefined)

  public setSelectedHex = (selectedHex: Option<Hex>): LocalGameState => this.copy({ selectedHex: toMaybe(selectedHex) })

  public setMode = (mode: Mode): LocalGameState => this.copy({ mode })

  public incrementActionsOutstandingWithServer = (): LocalGameState =>
    this.copy({ actionsOutstandingWithServer: this.actionsOutstandingWithServer + 1 })

  public decrementActionsOutstandingWithServer = (): LocalGameState =>
    this.copy({ actionsOutstandingWithServer: this.actionsOutstandingWithServer - 1 })
}

export const INITIAL_LOCAL_GAME_STATE = new LocalGameState({
  playerId: 1,
  mode: { type: 'selectHex' },
})
