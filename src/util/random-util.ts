export const randomIntInclusive = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const randomIntExclusive = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min

export const randomElement = <T>(array: T[]): T => array[randomIntExclusive(0, array.length)]
