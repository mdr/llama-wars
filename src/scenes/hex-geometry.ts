import { Hex } from '../world/hex'
import { Point } from './point'
import { WorldMap } from '../world/world-map'

export const centerPoint = (hex: Hex): Point =>
  ({
    x: hex.x * Math.sqrt(3) + hex.y * Math.sqrt(3) / 2,
    y: hex.y * 3 / 2,
  })

export const fromPoint = (point: Point): Hex => {
  const x = point.x * Math.sqrt(3) / 3 - point.y / 3
  const y = 2 * point.y / 3
  return round(new Hex(x, y));
}

const round = (hex: Hex): Hex => {
  const rx = Math.round(hex.x)
  const ry = Math.round(hex.y)
  const rz = Math.round(hex.z)

  const xDiff = Math.abs(rx - hex.x)
  const yDiff = Math.abs(ry - hex.y)
  const zDiff = Math.abs(rz - hex.y)

  if (xDiff > yDiff && xDiff > zDiff)
    return new Hex(-ry - rz, ry)
  else if (yDiff > zDiff)
    return new Hex(rx, -rx - rz)
  else
    return new Hex(rx, ry)
}

const hexAngle = Math.PI / 3
const hexOffset = Math.PI / 6

const hexCorner = (center: Point, size: number, i: number): Point => {
  const angleRadians = hexAngle * i - hexOffset
  const x = center.x + size * Math.cos(angleRadians)
  const y = center.y + size * Math.sin(angleRadians)
  return { x, y }
}

export function* hexCorners(center: Point, size: number): IterableIterator<Point> {
  for (let i = 0; i < 6; i++) {
    yield hexCorner(center, size, i)
  }
}

export const mapHeight = (map: WorldMap): number => map.height * 3 / 2

export const hexWidth = (hexSize: number): number => hexSize * Math.sqrt(3)

