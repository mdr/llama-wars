import { WorldState } from '../world/world-state'
import {
  AttackWorldAction,
  ChangePlayerNameWorldAction,
  InitialiseWorldAction,
  MoveUnitWorldAction,
  WorldAction,
} from '../world/world-actions'
import {
  CombatWorldEvent,
  GameStartedWorldEvent,
  InitialiseWorldEvent,
  PlayerAddedWorldEvent,
  PlayerChangedNameWorldEvent,
  UnitMovedWorldEvent,
  WorldEvent,
} from '../world/world-events'
import * as R from 'ramda'
import { Unit } from '../world/unit'
import { Player, PlayerId } from '../world/player'
import { ActionPoints } from '../world/action-points'
import { HitPoints } from '../world/hit-points'
import { randomElement } from '../util/random-util'
import { Hex } from '../world/hex'

const LLAMA_NAMES = ['Walter', 'Dolly', 'Chewpaca', 'Barack O. Llama', 'Como Se']

export class WorldActionHandler {
  private readonly worldState: WorldState
  private readonly playerId: PlayerId
  private readonly nextWorldEventId: number

  constructor(worldState: WorldState, playerId: PlayerId, nextWorldEventId: number) {
    this.worldState = worldState
    this.playerId = playerId
    this.nextWorldEventId = nextWorldEventId
  }

  public calculateWorldEvent = (action: WorldAction): WorldEvent => {
    switch (action.type) {
      case 'initialise':
        return this.handleInitialise(action)
      case 'addPlayer':
        return this.handleAddPlayer()
      case 'changePlayerName':
        return this.handleChangePlayerName(action)
      case 'startGame':
        return this.handleStartGame()
      case 'attack':
        return this.handleAttack(action)
      case 'moveUnit':
        return this.handleMoveUnit(action)
      case 'endTurn':
        return this.handleEndTurn()
    }
  }

  private handleInitialise = (action: InitialiseWorldAction): InitialiseWorldEvent => {
    if (this.nextWorldEventId > 0) {
      throw `Can only initialise as the first event`
    }
    return { id: this.nextWorldEventId, type: 'initialise', state: action.state }
  }

  private handleAddPlayer = (): PlayerAddedWorldEvent => {
    const existingPlayerIds = this.worldState.players.map((player) => player.id)
    const playerId = R.apply(Math.max, existingPlayerIds) + 1
    return { id: this.nextWorldEventId, type: 'playerAdded', playerId }
  }

  private handleChangePlayerName = (action: ChangePlayerNameWorldAction): PlayerChangedNameWorldEvent => {
    this.getPlayer()
    return { id: this.nextWorldEventId, type: 'playerChangedName', playerId: this.playerId, name: action.name }
  }

  private handleStartGame = (): GameStartedWorldEvent => {
    if (this.worldState.gameHasStarted) {
      throw `Cannot start an already-started game`
    }
    const units: Unit[] = []
    let remainingHexes: Hex[] = Array.from(this.worldState.map.getMapHexes())
    for (const player of this.worldState.players) {
      const generateUnit = () => {
        const location = randomElement(remainingHexes)
        remainingHexes = R.without([location], remainingHexes)
        const unit: Unit = new Unit({
          id: units.length + 1,
          playerId: player.id,
          name: randomElement(LLAMA_NAMES),
          location: location,
          actionPoints: new ActionPoints({ current: 2, max: 2 }),
          hitPoints: new HitPoints({ current: 100, max: 100 }),
        })
        units.push(unit)
      }
      generateUnit()
      generateUnit()
    }
    return { id: this.nextWorldEventId, type: 'gameStarted', units }
  }

  private handleAttack = (action: AttackWorldAction): CombatWorldEvent => {
    const attackerId = action.attacker.unitId
    const attacker = this.worldState.findUnitById(attackerId)
    if (!attacker) throw `No unit found with ID ${attackerId}`
    if (attacker.playerId != this.playerId) throw `Cannot control another player's unit: ${attacker.id}`
    if (attacker.actionPoints.current < 1) throw `Not enough action points to attack`
    if (!attacker.location.equals(action.attacker.location)) throw `Attacker not in expected location`

    const defenderId = action.defender.unitId
    const defender = this.worldState.findUnitById(defenderId)
    if (!defender) throw `No unit found with ID ${defenderId}`
    if (defender.playerId == this.playerId) throw `Cannot attack own unit`
    if (!defender.location.equals(action.defender.location)) throw `Defender not in expected location`

    if (!attacker.location.isAdjacentTo(defender.location))
      throw `Invalid unit attack between non-adjacent hexes ${attacker.location} to ${defender.location}`

    const attackerDamage = Math.min(attacker.hitPoints.current, 10)
    const defenderDamage = Math.min(defender.hitPoints.current, 20)
    return this.makeCombatWorldEvent(attacker, attackerDamage, defender, defenderDamage)
  }

  private makeCombatWorldEvent = (
    attacker: Unit,
    attackerDamage: number,
    defender: Unit,
    defenderDamage: number,
  ): CombatWorldEvent => ({
    id: this.nextWorldEventId,
    type: 'combat',
    attacker: {
      playerId: attacker.playerId,
      unitId: attacker.id,
      location: attacker.location,
      damage: attackerDamage,
      killed: attacker.hitPoints.current == attackerDamage,
    },
    defender: {
      playerId: defender.playerId,
      unitId: defender.id,
      location: defender.location,
      damage: defenderDamage,
      killed: defender.hitPoints.current == defenderDamage,
    },
    actionPointsConsumed: 1,
  })

  private handleMoveUnit = (action: MoveUnitWorldAction): UnitMovedWorldEvent => {
    const { unitId, to } = action
    const unit = this.worldState.findUnitById(unitId)
    if (!unit) throw `No unit found with ID ${unitId}`
    const from = unit.location
    if (!from.isAdjacentTo(to)) throw `Invalid unit movement between non-adjacent hexes ${from} to ${to}`
    if (!this.worldState.map.isInBounds(to)) throw `Invalid unit movement to out-of-bounds hex ${to}`
    if (this.worldState.findUnitInLocation(to)) throw `Invalid unit movement to already-occupied hex`
    if (unit.actionPoints.current < 1) throw `Not enough action points to move`
    return {
      id: this.nextWorldEventId,
      type: 'unitMoved',
      playerId: this.playerId,
      actionPointsConsumed: 1,
      unitId,
      from,
      to,
    }
  }

  private handleEndTurn = (): WorldEvent => {
    const player = this.getPlayer()
    if (!player) throw `No player with ID ${this.playerId}`
    if (player.endedTurn) throw `Player has already ended their turn`
    const playersYetToEndTheirTurn = this.worldState.players
      .filter((player) => !player.endedTurn)
      .map((player) => player.id)
    const wholeTurnEnded = R.equals(playersYetToEndTheirTurn, [this.playerId])
    if (wholeTurnEnded) {
      return { id: this.nextWorldEventId, type: 'newTurn' }
    } else {
      return { id: this.nextWorldEventId, type: 'playerEndedTurn', playerId: this.playerId }
    }
  }

  private getPlayer = (): Player => {
    const player = this.worldState.findPlayer(this.playerId)
    if (!player) throw `No player with ID ${this.playerId}`
    return player
  }
}
