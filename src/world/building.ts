import { Hex } from './hex'
import { HitPoints } from './hit-points'
import { PlayerId } from './player'

export type BuildingId = number

export enum BuildingType {
  CASTLE = 'castle',
}

export class Building {
  readonly id: BuildingId
  readonly playerId: PlayerId
  readonly type: BuildingType
  readonly location: Hex
  readonly hitPoints: HitPoints

  constructor({
    id,
    playerId,
    type,
    location,
    hitPoints,
  }: {
    id: BuildingId
    playerId: PlayerId
    type: BuildingType
    location: Hex
    hitPoints: HitPoints
  }) {
    this.id = id
    this.playerId = playerId
    this.type = type
    this.location = location
    this.hitPoints = hitPoints
  }

  public damage = (points: number): Building => this.copy({ hitPoints: this.hitPoints.damage(points) })

  public copy = ({
    id = this.id,
    playerId = this.playerId,
    type = this.type,
    location = this.location,
    hitPoints = this.hitPoints,
  }: {
    id?: BuildingId
    playerId?: PlayerId
    type?: BuildingType
    location?: Hex
    hitPoints?: HitPoints
  } = {}): Building => new Building({ id, playerId, type, location, hitPoints })

  public toString = (): string => `Building(${JSON.stringify(this.toJson())})`

  public toJson = (): any => ({
    id: this.id,
    playerId: this.playerId,
    type: this.type,
    location: this.location.toJson(),
    hitPoints: this.hitPoints.toJson(),
  })

  public static fromJson = (json: any): Building =>
    new Building({
      id: json.id,
      playerId: json.playerId,
      type: json.type,
      location: Hex.fromJson(json.location),
      hitPoints: HitPoints.fromJson(json.hitPoints),
    })
}
