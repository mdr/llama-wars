import assert = require('assert')

export class ActionPoints {
  readonly current: number
  readonly max: number

  constructor({ current, max }: { current: number; max: number }) {
    this.current = current
    this.max = max
    assert(max > 0)
    assert(current >= 0)
    assert(current <= max)
  }

  public reduce = (points: number): ActionPoints => this.copy({ current: this.current - points })

  public copy = ({ current = this.current, max = this.max }: { current?: number; max?: number } = {}): ActionPoints =>
    new ActionPoints({ current, max })

  public refresh = (): ActionPoints => new ActionPoints({ current: this.max, max: this.max })

  public toJson = (): object => ({ current: this.current, max: this.max })

  public static fromJson = (json: any): ActionPoints => new ActionPoints({ current: json.current, max: json.max })
}
