import { addPoints, multiplyPoint, Point, subtractPoints } from '../point'
import { Hex } from '../../world/hex'
import { centerPoint, fromPoint } from '../hex-geometry'
import { WorldState } from '../../world/world-state'
import {
  CombatParticipantInfo,
  CombatWorldEvent,
  GameOverWorldEvent,
  UnitMovedWorldEvent,
  WorldEvent,
} from '../../world/world-events'
import { UnitId } from '../../world/unit'
import { UnreachableCaseError } from '../../util/unreachable-case-error'
import { nothing, Option, toMaybe } from '../../util/types'
import { INITIAL_LOCAL_GAME_STATE, LocalGameState } from '../local-game-state'
import { ALL_AUDIO_KEYS, AudioKeys } from '../asset-keys'
import { mapToLocalAction } from './keyboard-mapper'
import { LocalAction } from './local-action'
import { LocalActionProcessor, LocalActionResult } from './local-action-processor'
import { CombinedState } from '../combined-state-methods'
import { WorldAction } from '../../world/world-actions'
import { INITIAL_WORLD_STATE } from '../../world/initial-world-state'
import { Client } from '../../server/client'
import { Server } from '../../server/server'
import { AnimationSpec, DisplayObjects } from './display-objects'
import { PlayerId } from '../../world/player'
import Pointer = Phaser.Input.Pointer

export const GAME_SCENE_KEY = 'Game'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: GAME_SCENE_KEY,
}

export interface GameSceneData {
  serverOrClient: Server | Client
  playerId: PlayerId
  worldState: WorldState
}

export const HEX_SIZE = 48
export const DRAWING_OFFSET = { x: 60, y: 100 }
export const hexCenter = (hex: Hex): Point => addPoints(multiplyPoint(centerPoint(hex), HEX_SIZE), DRAWING_OFFSET)

export type GameId = string

export class GameScene extends Phaser.Scene {
  private created: boolean = false
  private serverOrClient?: Server | Client

  private worldState: WorldState = INITIAL_WORLD_STATE
  private localGameState: LocalGameState = INITIAL_LOCAL_GAME_STATE

  private displayObjects?: DisplayObjects

  private get combinedState(): CombinedState {
    return new CombinedState(this.worldState, this.localGameState)
  }

  constructor() {
    super(sceneConfig)
  }

  // Create
  // ------

  public create = (sceneData: GameSceneData): void => {
    if (this.created) {
      throw new Error('Game scene has already been created')
    } else {
      this.created = true
    }
    const { serverOrClient, playerId, worldState } = sceneData
    this.setUpSound()
    this.worldState = worldState
    this.localGameState = INITIAL_LOCAL_GAME_STATE.copy({ playerId })
    this.serverOrClient = serverOrClient
    if (serverOrClient instanceof Server) {
      this.actAsServer(serverOrClient)
    } else {
      this.actAsClient(serverOrClient)
    }

    this.displayObjects = new DisplayObjects(this, this.worldState, this.localGameState, this.handleLocalAction)
    this.updateAsAtStartOfTurn()
    this.setUpInputs()
  }

  private setUpSound = (): void => {
    this.sound.pauseOnBlur = false
    ALL_AUDIO_KEYS.forEach((key) => this.sound.add(key))
  }

  public syncScene = (animation?: AnimationSpec): void =>
    this.displayObjects?.syncScene(this.worldState, this.localGameState, animation)

  // Networking
  // ----------

  private actAsClient = (client: Client): void => {
    this.serverOrClient = client
    client.addListener(this.handleWorldEvent)
  }

  private actAsServer = (server: Server): void => {
    server.addListener(this.handleWorldEvent)
    this.worldState = server.worldState
  }

  private asyncSendToServer = async (action: WorldAction): Promise<void> => {
    if (!this.serverOrClient) {
      throw `Unexpected missing serverOrClient`
    }
    if (this.serverOrClient instanceof Server) {
      this.serverOrClient.handleAction(this.playerId, action)
    } else {
      await this.serverOrClient.sendAction(this.playerId, action)
    }
  }

  // Input handlers
  // --------------

  private setUpInputs = (): void => {
    this.input.mouse.disableContextMenu()
    this.input.keyboard.on('keydown', this.handleKey)
    this.input.on('pointerdown', this.handlePointerDown)
    this.input.on('pointermove', this.handlePointerMove)
  }

  private handleKey = (event: KeyboardEvent): void => {
    const localAction = mapToLocalAction(event, this.localGameState.mode)
    if (localAction) this.handleLocalAction(localAction)
  }

  private handleLocalAction = (localAction: LocalAction): void => {
    const localActionProcessor = new LocalActionProcessor(this.worldState, this.localGameState)
    const result = localActionProcessor.process(localAction)
    if (result) {
      this.enactLocalActionResult(result)
    }
  }

  private enactLocalActionResult = (result: LocalActionResult): void => {
    if (result.newLocalGameState) {
      this.localGameState = result.newLocalGameState
      this.syncScene()
    }
    if (result.worldAction) {
      this.localGameState = this.localGameState.incrementActionsOutstandingWithServer()
      this.syncScene()

      this.asyncSendToServer(result.worldAction).finally(() => {
        this.localGameState = this.localGameState.decrementActionsOutstandingWithServer()
        this.syncScene()
      })
    }
  }

  private handlePointerMove = (pointer: Pointer): void => {
    const pointerPoint = { x: pointer.x, y: pointer.y }
    this.displayObjects?.handlePointerMove(pointerPoint)
  }

  private handlePointerDown = (pointer: Pointer): void => {
    // Ignore clicks on these as they have their own handlers
    const pressedPoint = { x: pointer.x, y: pointer.y }
    if (this.displayObjects?.hasClickHandlerFor(pressedPoint)) {
      return
    }
    const hex = fromPoint(multiplyPoint(subtractPoints(pressedPoint, DRAWING_OFFSET), 1 / HEX_SIZE))
    if (pointer.button === 2) {
      this.handleLocalAction({ type: 'goHex', hex })
    } else {
      this.handleLeftClick(hex)
    }
  }

  private getLocalActionForClickingAHex = (hex: Hex): LocalAction => {
    const mode = this.localGameState.mode
    switch (mode.type) {
      case 'selectHex':
        return { type: 'selectHex', hex }
      case 'moveUnit':
        return { type: 'completeMove', unitId: mode.unitId, hex }
      case 'attack':
        return { type: 'completeAttack', unitId: mode.unitId, hex, attackType: mode.attackType }
    }
  }

  private handleLeftClick = (hex: Hex): void => this.handleLocalAction(this.getLocalActionForClickingAHex(hex))

  // Handle world events
  // -------------------

  private handleWorldEvent = (event: WorldEvent): void => {
    const oldWorldState = this.worldState
    this.worldState = oldWorldState.applyEvent(event)

    switch (event.type) {
      case 'initialise':
      case 'playerAdded':
      case 'playerChangedName':
      case 'gameStarted':
        break
      case 'unitMoved':
        this.handleUnitMovedWorldEvent(event, oldWorldState)
        break
      case 'combat':
        this.handleCombatWorldEvent(event, oldWorldState)
        break
      case 'playerEndedTurn':
        this.handlePlayerEndedTurn()
        break
      case 'playerDefeated':
        this.handlePlayerDefeated()
        break
      case 'gameOver':
        this.handleGameOver(event)
        break
      case 'newTurn':
        this.handleNewTurn()
        break
      default:
        throw new UnreachableCaseError(event)
    }
  }

  private handleGameOver = (event: GameOverWorldEvent): void => {
    if (event.victor === this.localGameState.playerId) {
      this.sound.play(AudioKeys.VICTORY_MUSIC)
    }
    this.syncScene()
  }

  private handlePlayerEndedTurn = (): void => {
    this.syncScene()
  }

  private handlePlayerDefeated = (): void => {
    this.sound.play(AudioKeys.PLAYER_DEFEATED)
    this.syncScene()
  }

  private handleNewTurn = (): void => {
    this.sound.play(AudioKeys.NEW_TURN)
    this.updateAsAtStartOfTurn()
  }

  private updateAsAtStartOfTurn() {
    const unitToSelect = this.combinedState.findNextUnitWithUnspentActionPoints()
    this.localGameState = this.localGameState.copy({
      mode: { type: 'selectHex' },
      selectedHex: toMaybe(unitToSelect?.location),
    })
    this.syncScene()
  }

  private handleUnitMovedWorldEvent = (event: UnitMovedWorldEvent, oldWorldState: WorldState): void => {
    const { unitId, from, to } = event
    const unit = this.worldState.getUnitById(unitId)
    const wasPreviouslySelected =
      this.localGameState.selectedHex &&
      oldWorldState.findUnitInLocation(this.localGameState.selectedHex)?.id === unitId
    if (wasPreviouslySelected && unit.playerId === this.playerId) {
      const newSelectedHex = this.calculateNewSelectedUnitAfterMoveOrAttack(unitId, to)
      this.localGameState = this.localGameState.copy({
        mode: { type: 'selectHex' },
        selectedHex: toMaybe(newSelectedHex),
      })
    }
    this.syncScene({ type: 'move', unitId, from, to })
  }

  private calculateNewSelectedUnitAfterMoveOrAttack = (unitId: UnitId, defaultLocation: Hex): Option<Hex> => {
    const unit = this.worldState.findUnitById(unitId)
    // Retain selection if unit still exists and we still have action points, else select next unit (or nothing if there isn't one)
    let newSelectedHex
    if (!unit || unit.actionPoints.current === 0) {
      const nextUnit = this.combinedState.findNextUnitWithUnspentActionPoints(unitId)
      newSelectedHex = nextUnit?.location
    } else {
      newSelectedHex = defaultLocation
    }
    return newSelectedHex
  }

  private handleCombatWorldEvent = (event: CombatWorldEvent, oldWorldState: WorldState) => {
    const { attacker, defender } = event
    this.updateSelectionAfterCombat(attacker, defender, oldWorldState)
    this.syncScene({
      type: 'combat',
      attackType: event.attackType,
      attacker,
      defender,
    })
  }

  private updateSelectionAfterCombat = (
    attacker: CombatParticipantInfo,
    defender: CombatParticipantInfo,
    oldWorldState: WorldState,
  ) => {
    const previouslySelectedUnitId = new CombinedState(oldWorldState, this.localGameState).findSelectedUnit()?.id
    if (previouslySelectedUnitId === attacker.unitId && attacker.playerId === this.playerId) {
      const newSelectedHex = this.calculateNewSelectedUnitAfterMoveOrAttack(attacker.unitId, attacker.location)
      this.localGameState = this.localGameState.copy({
        mode: { type: 'selectHex' },
        selectedHex: toMaybe(newSelectedHex),
      })
    } else {
      // deselect unit killed by another player
      if (defender.killed && defender.unitId === previouslySelectedUnitId && defender.playerId === this.playerId) {
        this.localGameState = this.localGameState.copy({
          mode: { type: 'selectHex' },
          selectedHex: nothing,
        })
      }
    }
  }

  // Util queries
  // ------------

  private get playerId(): PlayerId {
    return this.localGameState.playerId
  }
}
