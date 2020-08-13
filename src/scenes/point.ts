export interface Point {
  readonly x: number
  readonly y: number
}

export const point = (x: number, y: number): Point => ({ x, y })

export const multiplyPoint = (point: Point, n: number): Point => ({ x: point.x * n, y: point.y * n })

export const addPoints = (point1: Point, point2: Point): Point => ({ x: point1.x + point2.x, y: point1.y + point2.y })

export const subtractPoints = (point1: Point, point2: Point): Point => ({
  x: point1.x - point2.x,
  y: point1.y - point2.y,
})

const square = (n: number): number => n * n

export const distanceBetweenPoints = (point1: Point, point2: Point): number =>
  Math.sqrt(square(point1.x - point2.x) + square(point1.y - point2.y))
