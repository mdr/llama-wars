import { Hex } from '../world/hex'
import { Mode } from './main-game/mode'
import { Maybe, Option, toMaybe, toOption } from '../util/types'
import { PlayerId } from '../world/player'
import assert = require('assert')

export type Sidebar = 'log' | 'players'

export class LocalGameState {
  readonly playerId: PlayerId
  readonly mode: Mode
  readonly selectedHex: Option<Hex>
  readonly actionsOutstandingWithServer: number
  readonly sidebar: Sidebar
  readonly fullScreen: boolean

  constructor({
    playerId,
    mode,
    selectedHex,
    actionsOutstandingWithServer = 0,
    sidebar,
    fullScreen = false,
  }: {
    playerId: PlayerId
    mode: Mode
    selectedHex?: Option<Hex>
    actionsOutstandingWithServer?: number
    sidebar: Sidebar
    fullScreen?: boolean
  }) {
    this.playerId = playerId
    this.mode = mode
    this.selectedHex = selectedHex
    this.actionsOutstandingWithServer = actionsOutstandingWithServer
    this.sidebar = sidebar
    this.fullScreen = fullScreen
    assert(actionsOutstandingWithServer >= 0)
  }

  public copy = ({
    playerId = this.playerId,
    mode = this.mode,
    selectedHex = toMaybe(this.selectedHex),
    actionsOutstandingWithServer = this.actionsOutstandingWithServer,
    sidebar = this.sidebar,
    fullScreen = this.fullScreen,
  }: {
    playerId?: PlayerId
    mode?: Mode
    selectedHex?: Maybe<Hex>
    actionsOutstandingWithServer?: number
    sidebar?: Sidebar
    fullScreen?: boolean
  } = {}): LocalGameState =>
    new LocalGameState({
      playerId,
      mode,
      selectedHex: toOption(selectedHex),
      actionsOutstandingWithServer,
      sidebar,
      fullScreen,
    })

  public deselect = (): LocalGameState => this.setSelectedHex(undefined)

  public setSelectedHex = (selectedHex: Option<Hex>): LocalGameState => this.copy({ selectedHex: toMaybe(selectedHex) })

  public setMode = (mode: Mode): LocalGameState => this.copy({ mode })

  public incrementActionsOutstandingWithServer = (): LocalGameState =>
    this.copy({ actionsOutstandingWithServer: this.actionsOutstandingWithServer + 1 })

  public decrementActionsOutstandingWithServer = (): LocalGameState =>
    this.copy({ actionsOutstandingWithServer: this.actionsOutstandingWithServer - 1 })

  public toggleFullScreen = (): LocalGameState => this.copy({ fullScreen: !this.fullScreen })
}

export const INITIAL_LOCAL_GAME_STATE = new LocalGameState({
  playerId: 1,
  mode: { type: 'selectHex' },
  sidebar: 'log',
})
