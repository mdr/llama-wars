import * as R from 'ramda'
import { UnitOrBuilding, WorldState } from '../../world/world-state'
import { AttackType } from '../../world/world-actions'
import { CombatWorldEvent, PlayerDefeatedWorldEvent, WorldEvent, WorldEventId } from '../../world/events/world-events'
import { Unit } from '../../world/unit'
import { PlayerId } from '../../world/player'
import { Option } from '../../util/types'

export interface CombatInfo {
  attackType: AttackType
  attacker: Unit
  attackerDamageTaken: number
  defender: UnitOrBuilding
  defenderDamageTaken: number
}

export class AttackWorldEventCalculator {
  private worldState: WorldState
  private nextWorldEventId: WorldEventId
  private readonly events: WorldEvent[] = []

  constructor(worldState: WorldState, nextWorldEventId: WorldEventId) {
    this.worldState = worldState
    this.nextWorldEventId = nextWorldEventId
  }

  public buildWorldEvents(combatInfo: CombatInfo): WorldEvent[] {
    const { attacker, defender } = combatInfo
    const combatEvent = this.makeCombatWorldEvent(combatInfo)
    this.collectEvent(combatEvent)
    if (this.worldState.isPlayerDefeated(defender.playerId)) {
      const event = this.playerDefeatedEvent(defender.playerId)
      this.collectEvent(event)
    }
    if (this.worldState.isPlayerDefeated(attacker.playerId)) {
      const event = this.playerDefeatedEvent(attacker.playerId)
      this.collectEvent(event)
    }
    const gameOverEvent = this.maybeGameOverEvent()
    if (gameOverEvent) {
      this.collectEvent(gameOverEvent)
    }
    return this.events
  }

  private collectEvent = (event: WorldEvent) => {
    this.worldState = this.worldState.applyEvent(event)
    this.nextWorldEventId++
    this.events.push(event)
  }

  private makeCombatWorldEvent = (combatInfo: CombatInfo): CombatWorldEvent => {
    const { attackType, attacker, defender, attackerDamageTaken, defenderDamageTaken } = combatInfo
    return {
      id: this.nextWorldEventId,
      type: 'combat',
      attackType,
      attacker: {
        playerId: attacker.playerId,
        unitOrBuildingId: attacker.id,
        location: attacker.location,
        damageTaken: attackerDamageTaken,
        killed: attacker.hitPoints.current === attackerDamageTaken,
      },
      defender: {
        playerId: defender.playerId,
        unitOrBuildingId: defender.id,
        location: defender.location,
        damageTaken: defenderDamageTaken,
        killed: defender.hitPoints.current === defenderDamageTaken,
      },
      actionPointsConsumed: 1,
    }
  }

  private playerDefeatedEvent = (playerId: PlayerId): PlayerDefeatedWorldEvent => ({
    id: this.nextWorldEventId,
    type: 'playerDefeated',
    playerId: playerId,
  })

  private maybeGameOverEvent = (): Option<WorldEvent> => {
    const undefeatedPlayers = this.worldState.players.filter((player) => !player.defeated)
    if (R.isEmpty(undefeatedPlayers)) {
      return { id: this.nextWorldEventId, type: 'gameOver' }
    } else if (undefeatedPlayers.length === 1) {
      const victor = undefeatedPlayers[0].id
      return { id: this.nextWorldEventId, type: 'gameOver', victor }
    }
  }
}
