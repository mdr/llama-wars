export type PlayerId = number

export class Player {
  readonly id: PlayerId
  readonly name: string
  readonly endedTurn: boolean
  readonly defeated: boolean

  constructor({
    id,
    name,
    endedTurn = false,
    defeated = false,
  }: {
    id: PlayerId
    name: string
    endedTurn?: boolean
    defeated?: boolean
  }) {
    this.id = id
    this.name = name
    this.endedTurn = endedTurn
    this.defeated = defeated
  }

  public copy = ({
    id = this.id,
    name = this.name,
    endedTurn = this.endedTurn,
    defeated = this.defeated,
  }: { id?: PlayerId; name?: string; endedTurn?: boolean; defeated?: boolean } = {}): Player =>
    new Player({
      id,
      name,
      endedTurn,
      defeated,
    })

  public toJson = (): any => ({ id: this.id, name: this.name, endedTurn: this.endedTurn, defeated: this.defeated })

  public static fromJson = (json: any): Player =>
    new Player({
      id: json.id,
      name: json.name,
      endedTurn: json.endedTurn,
      defeated: json.defeated,
    })
}
