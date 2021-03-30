import { Point } from '../point'
import { AnimationSpeed } from './display-objects'

export type TweenXY = { x: { from: number; to: number }; y: { from: number; to: number } }

export const calculateTweenXY = (from: Point, to: Point, offset: Point): TweenXY => ({
  x: {
    from: from.x + offset.x,
    to: to.x + offset.x,
  },
  y: {
    from: from.y + offset.y,
    to: to.y + offset.y,
  },
})

export const scaleSpeed = (duration: number, speed: AnimationSpeed): number =>
  speed === 'normal' ? duration : duration / 4
