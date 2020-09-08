import { addPoints, multiplyPoint, Point, subtractPoints } from '../point'
import { Hex } from '../../world/hex'
import { centerPoint, fromPoint, hexWidth, mapHeight, mapWidth } from '../hex-geometry'
import { WorldState } from '../../world/world-state'
import {
  CombatParticipantInfo,
  CombatWorldEvent,
  GameOverWorldEvent,
  UnitMaturedWorldEvent,
  UnitMovedWorldEvent,
  WorldEvent,
} from '../../world/world-events'
import { UnitId } from '../../world/unit'
import { UnreachableCaseError } from '../../util/unreachable-case-error'
import { Option } from '../../util/types'
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
import { DisplayObjects } from './display-objects'
import { PlayerId } from '../../world/player'
import Pointer = Phaser.Input.Pointer
import { AnimationSpec } from './animation-spec'
import { UI_CAMERA } from './cameras'

export const GAME_SCENE_KEY = 'Game'
const CAMERA_BOUNDS_BUFFER = 600

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: GAME_SCENE_KEY,
}

export interface GameSceneData {
  serverOrClient: Server | Client
}

export const HEX_SIZE = 48
export const DRAWING_OFFSET: Point = { x: hexWidth(HEX_SIZE / 2), y: HEX_SIZE }
export const hexCenter = (hex: Hex): Point => addPoints(multiplyPoint(centerPoint(hex), HEX_SIZE), DRAWING_OFFSET)

export type GameId = string

export class GameScene extends Phaser.Scene {
  private created: boolean = false
  private serverOrClient?: Server | Client

  private worldState: WorldState = INITIAL_WORLD_STATE
  private localGameState: LocalGameState = INITIAL_LOCAL_GAME_STATE

  private displayObjects?: DisplayObjects
  private controls?: Phaser.Cameras.Controls.SmoothedKeyControl

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
    const { serverOrClient } = sceneData
    this.setUpSound()
    this.worldState = serverOrClient.worldState
    this.localGameState = INITIAL_LOCAL_GAME_STATE.copy({ playerId: serverOrClient.playerId })
    this.serverOrClient = serverOrClient
    serverOrClient.addListener(this.handleWorldEvent)
    this.initialiseCameras()
    this.displayObjects = new DisplayObjects(this, this.worldState, this.localGameState, this.handleLocalAction)
    this.updateAsAtStartOfTurn()
    this.setUpInputs()
  }

  private initialiseCameras = (): void => {
    const mainCamera = this.cameras.main
    this.cameras.add(0, 0, mainCamera.width, mainCamera.height, false, UI_CAMERA)
    mainCamera.setBounds(
      0 - CAMERA_BOUNDS_BUFFER,
      0 - CAMERA_BOUNDS_BUFFER,
      DRAWING_OFFSET.x + mapWidth(this.worldState.map, HEX_SIZE) + CAMERA_BOUNDS_BUFFER * 2,
      mapHeight(this.worldState.map, HEX_SIZE) + CAMERA_BOUNDS_BUFFER * 2,
    )
  }

  private setUpSound = (): void => {
    this.sound.pauseOnBlur = false
    ALL_AUDIO_KEYS.forEach((key) => this.sound.add(key))
  }

  private syncScene = (animation?: AnimationSpec): void => {
    this.syncFullScreen()
    this.displayObjects?.syncScene(this.worldState, this.localGameState, animation)
  }

  private syncFullScreen = (): void => {
    if (this.localGameState.fullScreen && !this.scale.isFullscreen) {
      this.scale.startFullscreen()
    }
    if (!this.localGameState.fullScreen && this.scale.isFullscreen) {
      this.scale.stopFullscreen()
    }
  }

  // Networking
  // ----------

  private asyncSendToServer = async (action: WorldAction): Promise<void> => {
    if (!this.serverOrClient) {
      throw `Unexpected missing serverOrClient`
    }
    await this.serverOrClient.sendAction(this.playerId, action)
  }

  // Input handlers
  // --------------

  private setUpInputs = (): void => {
    this.input.mouse.disableContextMenu()
    this.input.keyboard.on('keydown', this.handleKey)
    this.input.on('pointerdown', this.handlePointerDown)
    this.input.on('pointermove', this.handlePointerMove)
    this.input.on('wheel', this.handleWheel)
    const cursors = this.input.keyboard.createCursorKeys()
    this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl({
      camera: this.cameras.main,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.MINUS),
      zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PLUS),
      acceleration: 0.6,
      drag: 0.005,
      maxSpeed: 1.0,
    })
  }

  private handleWheel = (pointer: Pointer, something: any[], dx: number, dy: number) => {
    if (dy < 0) {
      this.cameras.main.zoom *= 1.1
      if (this.cameras.main.zoom > 1) {
        this.cameras.main.zoom = 1
      }
    } else {
      this.cameras.main.zoom *= 1 / 1.1
      if (this.cameras.main.zoom < 0.3) {
        this.cameras.main.zoom = 0.3
      }
    }
  }

  private handleKey = (event: KeyboardEvent): void => {
    const localAction = mapToLocalAction(event, this.localGameState.mode)
    if (localAction) {
      this.handleLocalAction(localAction)
    }
  }

  private panIntoViewIfNeeded = (point: Point): void => {
    if (!this.cameras.main.worldView.contains(point.x, point.y)) {
      this.panIntoView(point)
    }
  }

  private panIntoView = (point: Point): void => {
    this.cameras.main.pan(point.x, point.y, 500, 'Cubic', true)
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
    if (result.panTo) {
      this.panIntoView(result.panTo)
    }
  }

  private handlePointerMove = (pointer: Pointer): void => {
    const pointerPoint = this.cameras.main.getWorldPoint(pointer.x, pointer.y)
    this.displayObjects?.handlePointerMove(pointerPoint)
  }

  private handlePointerDown = (pointer: Pointer): void => {
    const pressedPoint = this.cameras.main.getWorldPoint(pointer.x, pointer.y)
    const hex = fromPoint(multiplyPoint(subtractPoints(pressedPoint, DRAWING_OFFSET), 1 / HEX_SIZE))
    const isRightMouseButton = pointer.button === 2
    if (isRightMouseButton) {
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

  private handleWorldEvent = (event: WorldEvent, previousWorldState: WorldState, newWorldState: WorldState): void => {
    this.worldState = newWorldState
    switch (event.type) {
      case 'initialise':
      case 'playerAdded':
      case 'playerChangedName':
      case 'gameStarted':
      case 'chat':
      case 'playerKicked':
        this.syncScene()
        break
      case 'unitMoved':
        this.handleUnitMovedWorldEvent(event, previousWorldState)
        break
      case 'combat':
        this.handleCombatWorldEvent(event, previousWorldState)
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
      case 'unitMatured':
        this.handleUnitMatured(event)
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
    if (!this.combinedState.findSelectedUnit()) {
      const unitToSelect = this.combinedState.findNextUnitWithUnspentActionPoints()
      this.localGameState = this.localGameState
        .copy({ mode: { type: 'selectHex' } })
        .setSelectedHex(unitToSelect?.location)
    }
    if (this.localGameState.selectedHex) {
      this.panIntoView(hexCenter(this.localGameState.selectedHex))
    }
    this.syncScene()
  }

  private handleUnitMovedWorldEvent = (event: UnitMovedWorldEvent, previousWorldState: WorldState): void => {
    const { unitId, from, to } = event
    const unit = this.worldState.getUnitById(unitId)
    const wasPreviouslySelected =
      this.localGameState.selectedHex &&
      previousWorldState.findUnitInLocation(this.localGameState.selectedHex)?.id === unitId
    if (wasPreviouslySelected && unit.playerId === this.playerId) {
      const newSelectedHex = this.calculateNewSelectedUnitAfterMoveOrAttack(unitId)
      this.localGameState = this.localGameState.copy({ mode: { type: 'selectHex' } }).setSelectedHex(newSelectedHex)
      if (newSelectedHex) {
        this.panIntoViewIfNeeded(hexCenter(newSelectedHex))
      }
    }
    this.syncScene({ type: 'move', unitId, from, to })
  }

  private calculateNewSelectedUnitAfterMoveOrAttack = (unitId: UnitId): Option<Hex> => {
    const unit = this.worldState.findUnitById(unitId)
    // Retain selection if unit still exists and we still have action points, else select next unit (or nothing if there isn't one)
    if (unit && unit.actionPoints.current > 0) {
      return unit.location
    } else {
      const nextUnit = this.combinedState.findNextUnitWithUnspentActionPoints(unitId)
      return nextUnit?.location
    }
  }

  private handleUnitMatured = (event: UnitMaturedWorldEvent): void => {
    this.syncScene({ type: 'mature', unitId: event.unitId })
  }

  private handleCombatWorldEvent = (event: CombatWorldEvent, previousWorldState: WorldState): void => {
    const { attacker, defender } = event
    this.updateSelectionAfterCombat(attacker, defender, previousWorldState)
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
    previousWorldState: WorldState,
  ) => {
    const previouslySelectedUnitId = new CombinedState(previousWorldState, this.localGameState).findSelectedUnit()?.id
    if (previouslySelectedUnitId === attacker.unitId && attacker.playerId === this.playerId) {
      const newSelectedHex = this.calculateNewSelectedUnitAfterMoveOrAttack(attacker.unitId)
      this.localGameState = this.localGameState.copy({ mode: { type: 'selectHex' } }).setSelectedHex(newSelectedHex)
      if (newSelectedHex) {
        this.panIntoViewIfNeeded(hexCenter(newSelectedHex))
      }
    } else {
      // deselect unit killed by another player
      if (defender.killed && defender.unitId === previouslySelectedUnitId && defender.playerId === this.playerId) {
        this.localGameState = this.localGameState.copy({ mode: { type: 'selectHex' } }).deselect()
      }
    }
  }

  // Util queries
  // ------------

  private get playerId(): PlayerId {
    return this.localGameState.playerId
  }

  public update(time: number, delta: number): void {
    this.controls?.update(delta)
  }
}
