import { addPoints, Point } from '../point'
import { HEALTH_BORDER_COLOUR, HEALTH_EMPTY_COLOUR, HEALTH_FULL_COLOUR } from '../colours'
import { HitPoints } from '../../world/hit-points'

const HEALTH_BAR_WIDTH = 50
const HEALTH_BAR_HEIGHT = 12
const HEALTH_BAR_BORDER_THICKNESS = 2
const HEALTH_BAR_OFFSET = { x: -25, y: -40 }

export const syncHealthBar = (
  healthBarGraphics: Phaser.GameObjects.Graphics,
  location: Point,
  hitPoints: HitPoints,
) => {
  const { x, y } = addPoints(location, HEALTH_BAR_OFFSET)
  healthBarGraphics.setPosition(x, y)
  healthBarGraphics.clear()

  // Draw border
  const innerWidth = HEALTH_BAR_WIDTH - 2 * HEALTH_BAR_BORDER_THICKNESS
  const innerHeight = HEALTH_BAR_HEIGHT - 2 * HEALTH_BAR_BORDER_THICKNESS
  healthBarGraphics.fillStyle(HEALTH_BORDER_COLOUR)
  healthBarGraphics.fillRect(0, 0, HEALTH_BAR_WIDTH, HEALTH_BAR_HEIGHT)

  // Draw empty background
  healthBarGraphics.fillStyle(HEALTH_EMPTY_COLOUR)
  healthBarGraphics.fillRect(HEALTH_BAR_BORDER_THICKNESS, HEALTH_BAR_BORDER_THICKNESS, innerWidth, innerHeight)

  // Fill in bar
  healthBarGraphics.fillStyle(HEALTH_FULL_COLOUR)
  healthBarGraphics.fillRect(
    HEALTH_BAR_BORDER_THICKNESS,
    HEALTH_BAR_BORDER_THICKNESS,
    innerWidth * hitPoints.fraction(),
    innerHeight,
  )
}
