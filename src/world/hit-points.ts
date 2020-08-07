import assert = require('assert')

export class HitPoints {
  readonly current: number
  readonly max: number

  constructor({ current, max }: { current: number; max: number }) {
    this.current = current
    this.max = max
    assert(max > 0)
    assert(current >= 0)
    assert(current <= max)
  }

  public damage = (points: number): HitPoints => this.copy({ current: this.current - points })

  public copy = ({ current = this.current, max = this.max }: { current?: number; max?: number } = {}): HitPoints =>
    new HitPoints({ current, max })

  public toJson = (): any => ({ current: this.current, max: this.max })

  public static fromJson = (json: any): HitPoints => new HitPoints({ current: json.current, max: json.max })
}