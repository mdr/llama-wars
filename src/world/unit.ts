import { Hex } from './hex'
import { ActionPoints } from './action-points'
import { HitPoints } from './hit-points'
import { PlayerId } from './player'

export type UnitId = number

export class Unit {
  readonly id: UnitId
  readonly playerId: PlayerId
  readonly name: string
  readonly location: Hex
  readonly hitPoints: HitPoints
  readonly actionPoints: ActionPoints

  constructor({
    id,
    playerId,
    name,
    location,
    hitPoints,
    actionPoints,
  }: {
    id: UnitId
    playerId: PlayerId
    name: string
    location: Hex
    hitPoints: HitPoints
    actionPoints: ActionPoints
  }) {
    this.id = id
    this.playerId = playerId
    this.name = name
    this.location = location
    this.hitPoints = hitPoints
    this.actionPoints = actionPoints
  }

  public damage = (points: number): Unit => this.copy({ hitPoints: this.hitPoints.damage(points) })

  public copy = ({
    id = this.id,
    playerId = this.playerId,
    name = this.name,
    location = this.location,
    hitPoints = this.hitPoints,
    actionPoints = this.actionPoints,
  }: {
    id?: UnitId
    playerId?: PlayerId
    name?: string
    location?: Hex
    hitPoints?: HitPoints
    actionPoints?: ActionPoints
  } = {}): Unit => new Unit({ id, playerId, name, location, hitPoints, actionPoints })

  public move = (location: Hex, actionPointsConsumed: number): Unit =>
    this.copy({ location, actionPoints: this.actionPoints.reduce(actionPointsConsumed) })

  public reduceActionPoints = (actionPointsConsumed: number): Unit =>
    this.copy({ actionPoints: this.actionPoints.reduce(actionPointsConsumed) })

  public refreshActionPoints = (): Unit => this.copy({ actionPoints: this.actionPoints.refresh() })

  public get hasUnspentActionPoints() {
    return this.actionPoints.current > 0
  }

  public toJson = (): any => ({
    id: this.id,
    playerId: this.playerId,
    name: this.name,
    location: this.location.toJson(),
    hitPoints: this.hitPoints.toJson(),
    actionPoints: this.actionPoints.toJson(),
  })

  public static fromJson = (json: any): Unit =>
    new Unit({
      id: json.id,
      playerId: json.playerId,
      name: json.name,
      location: Hex.fromJson(json.location),
      hitPoints: HitPoints.fromJson(json.hitPoints),
      actionPoints: ActionPoints.fromJson(json.actionPoints),
    })
}
