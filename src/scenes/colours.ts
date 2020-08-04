import Color = Phaser.Display.Color

export type ColourString = string
export type ColourNumber = number

export const colourNumber = (colourString: ColourString): ColourNumber => Color.HexStringToColor(colourString).color

export const HEALTH_BORDER_COLOUR = colourNumber('#000000')
export const HEALTH_EMPTY_COLOUR = colourNumber('#ffffff')
export const HEALTH_FULL_COLOUR = colourNumber('#4df037')

export const DEFAULT_TILE_COLOUR = colourNumber('#ccffbe')
export const HOVER_DEFAULT_TILE_COLOUR = colourNumber('#dcffd1')

export const SELECTED_TILE_COLOUR = colourNumber('#fffd08')
export const HOVER_SELECTED_TILE_COLOUR = colourNumber('#fffdbf')

export const TARGETABLE_TILE_COLOUR = colourNumber('#9df1e7')
export const HOVER_TARGETABLE_TILE_COLOUR = colourNumber('#cef0eb')

export const ACTION_TEXT_COLOUR = '#cccc00'
export const HOVER_ACTION_TEXT_COLOUR = '#ffff00'

