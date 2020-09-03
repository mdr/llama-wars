import { Pixels } from '../util/types'

export interface Point {
  readonly x: Pixels
  readonly y: Pixels
}

export const point = (x: Pixels, y: Pixels): Point => ({ x, y })

export const multiplyPoint = (point: Point, n: number): Point => ({ x: point.x * n, y: point.y * n })

export const addPoints = (point1: Point, point2: Point): Point => ({ x: point1.x + point2.x, y: point1.y + point2.y })

export const subtractPoints = (point1: Point, point2: Point): Point => ({
  x: point1.x - point2.x,
  y: point1.y - point2.y,
})

const square = (n: number): number => n * n

export const distanceBetweenPoints = (point1: Point, point2: Point): Pixels =>
  Math.sqrt(square(point1.x - point2.x) + square(point1.y - point2.y))
