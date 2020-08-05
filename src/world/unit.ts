import { Hex } from './hex'
import assert = require('assert')
import { PlayerId } from './world-state'

export class ActionPoints {
  readonly current: number
  readonly max: number

  constructor({ current, max }: { current: number, max: number }) {
    this.current = current
    this.max = max
    assert(max > 0)
    assert(current >= 0)
    assert(current <= max)
  }

  public reduce = (points: number): ActionPoints => this.copy({ current: this.current - points })

  public copy = ({ current = this.current, max = this.max }: { current?: number, max?: number } = {}): ActionPoints =>
    new ActionPoints({ current, max })
}

export class HitPoints {
  readonly current: number
  readonly max: number

  constructor({ current, max }: { current: number, max: number }) {
    this.current = current
    this.max = max
    assert(max > 0)
    assert(current >= 0)
    assert(current <= max)
  }

  public damage = (points: number): HitPoints => this.copy({ current: this.current - points })

  public copy = ({ current = this.current, max = this.max }: { current?: number, max?: number } = {}): HitPoints =>
    new HitPoints({ current, max })
}

export class Unit {
  readonly id: UnitId
  readonly playerId: PlayerId
  readonly name: string
  readonly location: Hex
  readonly hitPoints: HitPoints
  readonly actionPoints: ActionPoints

  constructor({
                id, playerId, name, location, hitPoints, actionPoints,
              }: { id: UnitId, playerId: PlayerId, name: string, location: Hex, hitPoints: HitPoints, actionPoints: ActionPoints }) {
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
                 }: { id?: UnitId, playerId?: PlayerId, name?: string, location?: Hex, hitPoints?: HitPoints, actionPoints?: ActionPoints } = {}): Unit =>
    new Unit({ id, playerId, name, location, hitPoints, actionPoints })

  public move = (location: Hex, actionPointsConsumed: number): Unit =>
    this.copy({ location, actionPoints: this.actionPoints.reduce(actionPointsConsumed) })

  public reduceActionPoints = (actionPointsConsumed: number): Unit =>
    this.copy({ actionPoints: this.actionPoints.reduce(actionPointsConsumed) })
}

export type UnitId = number