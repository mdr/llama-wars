import Color = Phaser.Display.Color

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

export const ACTION_TEXT_COLOUR = '#cccc00'
export const HOVER_ACTION_TEXT_COLOUR = '#ffff00'

export const PLAYER_TINTS = ['#ffbbbb', '#bbbbff', '#bbffbb', '#bbffff', '#ffffbb', '#ffbbff'].map(colourNumber)
