import Color = Phaser.Display.Color

export type ColourString = string
export type ColourNumber = number

export const colourNumber = (colourString: ColourString): ColourNumber => Color.HexStringToColor(colourString).color

export const healthBorderColour = colourNumber('#000000')
export const healthEmptyColour = colourNumber('#ffffff')
export const healthFullColour = colourNumber('#4df037')

export const defaultTileColour = colourNumber('#ccffbe')
export const selectedTileColour = colourNumber('#fffd08')
export const hoverSelectedTileColour = colourNumber('#fffdbf')
export const targetableTileColour = colourNumber('#9df1e7')
export const hoverTargetableTileColour = colourNumber('#cef0eb')
export const hoverTileColour = colourNumber('#dcffd1')

export const actionTextColour = '#cccc00'
export const highlightedActionTextColour = '#ffff00'

