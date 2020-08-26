import Color = Phaser.Display.Color
import { PlayerId } from '../world/player'

export type ColourString = string
export type ColourNumber = number

export const colourNumber = (colourString: ColourString): ColourNumber => Color.HexStringToColor(colourString).color

export const HEALTH_BORDER_COLOUR = colourNumber('#000000')
export const HEALTH_EMPTY_COLOUR = colourNumber('#ffffff')
export const HEALTH_FULL_COLOUR = colourNumber('#4df037')

export const DEFAULT_TILE_BORDER_COLOUR = colourNumber('#000000')
export const HOVER_TILE_COLOUR = colourNumber('#ccffbe')
export const SELECTED_TILE_BORDER_COLOUR = colourNumber('#fffd08')
export const TARGETABLE_TILE_BORDER_COLOUR = colourNumber('#9df1e7')

const PLAYER_TINTS: ColourNumber[] = [
  '#ffbbbb',
  '#bbbbff',
  '#bbffbb',
  '#bbffff',
  '#ffffbb',
  '#ffbbff',
  '#ffffff',
  '#bbbbbb',
].map(colourNumber)

export const getPlayerTint = (playerId: PlayerId): ColourNumber =>
  PLAYER_TINTS[(PLAYER_TINTS.length + playerId - 1) % PLAYER_TINTS.length]
