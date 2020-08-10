export type PlayerId = number

export class Player {
  readonly id: PlayerId
  readonly name: string
  readonly endedTurn: boolean

  constructor({ id, name, endedTurn = false }: { id: PlayerId; name: string; endedTurn?: boolean }) {
    this.id = id
    this.name = name
    this.endedTurn = endedTurn
  }

  public copy = ({
    id = this.id,
    name = this.name,
    endedTurn = this.endedTurn,
  }: { id?: PlayerId; name?: string; endedTurn?: boolean } = {}): Player =>
    new Player({
      id,
      name,
      endedTurn,
    })

  public toJson = (): any => ({ id: this.id, name: this.name, endedTurn: this.endedTurn })

  public static fromJson = (json: any): Player =>
    new Player({
      id: json.id,
      name: json.name,
      endedTurn: json.endedTurn,
    })
}
