export type PlayerId = number

export class Player {
  readonly id: PlayerId
  readonly endedTurn: boolean

  constructor({ id, endedTurn }: { id: PlayerId, endedTurn: boolean }) {
    this.id = id
    this.endedTurn = endedTurn
  }

  public copy = ({ id = this.id, endedTurn = this.endedTurn }: { id?: PlayerId, endedTurn?: boolean } = {}): Player => new Player({
    id,
    endedTurn,
  })

  public toJson = (): object => ({ id: this.id, endedTurn: this.endedTurn })

  public static fromJson = (json: any): Player => new Player({ id: json.id, endedTurn: json.endedTurn })

}

