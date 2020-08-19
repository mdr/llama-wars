import * as R from 'ramda'

import { WorldState } from '../../world/world-state'
import { LocalGameState } from '../local-game-state'
import { hexWidth, mapHeight } from '../hex-geometry'
import { ACTION_TEXT_COLOUR, HOVER_ACTION_TEXT_COLOUR, PLAYER_TINTS } from '../colours'
import { DRAWING_OFFSET, HEX_SIZE } from './game-scene'
import { UnreachableCaseError } from '../../util/unreachable-case-error'
import { point, Point } from '../point'
import { Unit, UnitId } from '../../world/unit'
import { CombinedState } from '../combined-state-methods'
import { LocalAction } from './local-action'
import { HOST_PLAYER_ID, PlayerId } from '../../world/player'
import { AudioKeys, ImageKeys } from '../asset-keys'
import { AttackType } from '../../world/world-actions'
import { UiBorderDisplayObject } from './ui-border-display-object'

export type LocalActionDispatcher = (action: LocalAction) => void

interface PlayerObjects {
  nameText: Phaser.GameObjects.Text
  llama: Phaser.GameObjects.Image
}

export class TextsDisplayObject {
  private readonly scene: Phaser.Scene
  private worldState: WorldState
  private localGameState: LocalGameState
  private readonly localActionDispatcher: LocalActionDispatcher

  private readonly selectionText: Phaser.GameObjects.Text
  private readonly actionText: Phaser.GameObjects.Text
  private readonly actionText2: Phaser.GameObjects.Text
  private readonly actionText3: Phaser.GameObjects.Text
  private readonly endTurnText: Phaser.GameObjects.Text
  private readonly playerText: Phaser.GameObjects.Text
  private readonly hourglass: Phaser.GameObjects.Image
  private readonly defeatText: Phaser.GameObjects.Text
  private readonly victoryText: Phaser.GameObjects.Text
  private readonly worldLogText: Phaser.GameObjects.Text
  private readonly selectWorldLogText: Phaser.GameObjects.Text
  private readonly selectPlayersText: Phaser.GameObjects.Text
  private readonly playerObjects: Map<PlayerId, PlayerObjects> = new Map()
  private readonly hostCrown: Phaser.GameObjects.Image

  private get combinedState(): CombinedState {
    return new CombinedState(this.worldState, this.localGameState)
  }

  constructor(
    scene: Phaser.Scene,
    worldState: WorldState,
    localGameState: LocalGameState,
    localActionDispatcher: LocalActionDispatcher,
  ) {
    this.scene = scene
    this.worldState = worldState
    this.localGameState = localGameState
    this.localActionDispatcher = localActionDispatcher
    const map = this.worldState.map
    this.scene.add
      .image(40, 28, ImageKeys.LLAMA_2)
      .setScale(0.6)
      .setTint(PLAYER_TINTS[localGameState.playerId - 1])
    this.playerText = this.scene.add.text(70, 20, '')
    this.hourglass = this.scene.add.image(875, 30, 'hourglass').setVisible(false)

    this.selectionText = this.scene.add.text(
      DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2,
      mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y,
      '',
    )
    this.actionText = this.scene.add
      .text(DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y + 25, '', {
        fill: ACTION_TEXT_COLOUR,
      })
      .setInteractive()
      .on('pointerdown', this.handleActionTextClick)
      .on('pointerover', () => this.actionText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText.setFill(ACTION_TEXT_COLOUR))
    this.actionText2 = this.scene.add
      .text(DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y + 50, '', {
        fill: ACTION_TEXT_COLOUR,
      })
      .setInteractive()
      .on('pointerdown', this.handleActionText2Click)
      .on('pointerover', () => this.actionText2.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText2.setFill(ACTION_TEXT_COLOUR))
    this.actionText3 = this.scene.add
      .text(DRAWING_OFFSET.x - hexWidth(HEX_SIZE) / 2, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y + 75, '', {
        fill: ACTION_TEXT_COLOUR,
      })
      .setInteractive()
      .on('pointerdown', this.handleActionText3Click)
      .on('pointerover', () => this.actionText3.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.actionText3.setFill(ACTION_TEXT_COLOUR))
    this.endTurnText = this.scene.add
      .text(700, mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y, '', { fill: ACTION_TEXT_COLOUR })
      .setInteractive()
      .on('pointerdown', () => this.localActionDispatcher({ type: 'endTurn' }))
      .on('pointerover', () => this.endTurnText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.endTurnText.setFill(ACTION_TEXT_COLOUR))
    this.selectWorldLogText = this.scene.add
      .text(960, 26, 'Log', { fill: ACTION_TEXT_COLOUR })
      .setInteractive()
      .on('pointerdown', () => this.localActionDispatcher({ type: 'changeSidebar', sidebar: 'log' }))
      .on('pointerover', () => this.selectWorldLogText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.selectWorldLogText.setFill(ACTION_TEXT_COLOUR))
    this.selectPlayersText = this.scene.add
      .text(1024, 26, 'Players', { fill: ACTION_TEXT_COLOUR })
      .setInteractive()
      .on('pointerdown', () => this.localActionDispatcher({ type: 'changeSidebar', sidebar: 'players' }))
      .on('pointerover', () => this.selectPlayersText.setFill(HOVER_ACTION_TEXT_COLOUR))
      .on('pointerout', () => this.selectPlayersText.setFill(ACTION_TEXT_COLOUR))
    this.defeatText = this.scene.add
      .text(462, (mapHeight(map) * HEX_SIZE + DRAWING_OFFSET.y) / 2, 'You have been defeated!', {
        stroke: '#000000',
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setFontSize(42)
      .setVisible(false)
      .setDepth(100)
    this.victoryText = this.scene.add
      .text(462, 30, 'Victory!', {
        stroke: '#000000',
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setFontSize(42)
      .setVisible(false)
      .setDepth(100)
    this.worldLogText = this.scene.add.text(960, 50, '')
    this.hostCrown = this.scene.add.image(1235, 0, 'crown').setScale(0.6)
    for (const player of worldState.getSortedPlayers()) {
      const nameText = this.scene.add
        .text(1005, 0, player.name, {
          fill: '#FFFFFF',
          fixedWidth: 200,
          fontStyle: player.id === this.localGameState.playerId ? 'bold' : 'normal',
        })
        .setFontSize(18)
        .setPadding(0, 0, 0, 0)
      const llama = this.scene.add
        .sprite(975, 0, ImageKeys.LLAMA_EAT_1)
        .setScale(0.6)
        .setTint(PLAYER_TINTS[player.id - 1])
      const playerObjects: PlayerObjects = { nameText, llama }
      this.playerObjects.set(player.id, playerObjects)
    }
    // new UiBorderDisplayObject(scene, { topLeft: point(950, 20), width: 500, height: 600 })
    new UiBorderDisplayObject(scene, { topLeft: point(10, 46), width: 890, height: 470 })
  }

  private handleActionTextClick = (): void => {
    const mode = this.localGameState.mode
    switch (mode.type) {
      case 'selectHex':
        this.scene.sound.play(AudioKeys.CLICK)
        this.localActionDispatcher({ type: 'enterMoveMode' })
        break
      case 'moveUnit':
      case 'attack':
        this.scene.sound.play(AudioKeys.CLICK)
        this.localActionDispatcher({ type: 'abort' })
        break
      default:
        throw new UnreachableCaseError(mode)
    }
  }

  private handleActionText2Click = (): void => {
    if (this.localGameState.mode.type === 'selectHex') {
      this.scene.sound.play(AudioKeys.CLICK)
      this.localActionDispatcher({ type: 'enterAttackMode', attackType: 'melee' })
    }
  }

  private handleActionText3Click = (): void => {
    if (this.localGameState.mode.type === 'selectHex') {
      this.scene.sound.play(AudioKeys.CLICK)
      this.localActionDispatcher({ type: 'enterAttackMode', attackType: 'spit' })
    }
  }

  public hasClickHandlerFor = (point: Point): boolean => {
    for (const gameObject of [this.endTurnText, this.actionText, this.actionText2, this.actionText3])
      if (gameObject.getBounds().contains(point.x, point.y)) return true
    return false
  }

  public syncScene = (worldState: WorldState, localGameState: LocalGameState): void => {
    this.worldState = worldState
    this.localGameState = localGameState
    const player = this.combinedState.getCurrentPlayer()
    this.hourglass.setVisible(localGameState.actionsOutstandingWithServer > 0)
    this.playerText.setText(`${player.name} - Turn ${this.worldState.turn}`)
    this.selectionText.setText('')
    this.actionText.setText('')
    this.actionText2.setText('')
    this.actionText3.setText('')
    const mode = this.localGameState.mode
    switch (mode.type) {
      case 'selectHex':
        this.syncSelectHexModeText()
        break
      case 'moveUnit':
        this.syncMoveUnitModeText(mode.unitId)
        break
      case 'attack':
        this.syncAttackModeText(mode.unitId, mode.attackType)
        break
      default:
        throw new UnreachableCaseError(mode)
    }
    if (player.endedTurn) {
      this.endTurnText.setText('Waiting for next turn...')
    } else {
      this.endTurnText.setText('End Turn (Shift + Enter)')
    }
    this.defeatText.setVisible(player.defeated)
    this.victoryText.setVisible(worldState.gameOverInfo?.victor === player.id)
    this.worldLogText.setText(R.takeLast(30, this.worldState.worldLog).join('\n'))
    this.worldLogText.setVisible(localGameState.sidebar === 'log')
    let y = 65
    for (const player of worldState.getSortedPlayers()) {
      if (player.id === HOST_PLAYER_ID) {
        this.hostCrown.setY(y + 5)
      }
      const { nameText, llama } = this.getPlayerObjects(player.id)
      nameText
        .setText(player.name)
        .setY(y)
        .setVisible(localGameState.sidebar === 'players')
      llama
        .setY(y + 10)
        .setVisible(localGameState.sidebar === 'players')
        .setFlipX(!this.worldState.canPlayerAct(player.id))
      y += 50
    }
    this.hostCrown.setVisible(localGameState.sidebar === 'players')
  }

  private syncAttackModeText = (unitId: UnitId, attackType: AttackType): void => {
    const unit = this.worldState.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionText.setText(`Click unit to ${attackType === 'melee' ? 'attack' : 'spit'} (or ESC to cancel)`)
  }

  private syncMoveUnitModeText = (unitId: UnitId): void => {
    const unit = this.worldState.getUnitById(unitId)
    this.selectionText.setText(this.describeUnit(unit))
    this.actionText.setText('Click tile to move to (or ESC to cancel)')
  }

  private syncSelectHexModeText = (): void => {
    const selectedUnit = this.combinedState.findSelectedUnit()
    if (selectedUnit) {
      this.selectionText.setText(this.describeUnit(selectedUnit))
      if (this.combinedState.unitCouldPotentiallyMove(selectedUnit)) this.actionText.setText('Move (m)')
      if (this.combinedState.unitCouldPotentiallyAttack(selectedUnit)) this.actionText2.setText('Attack (a)')
      if (this.combinedState.unitCouldPotentiallyAttack(selectedUnit)) this.actionText3.setText('Spit (s)')
    }
  }

  private getPlayerName = (playerId: PlayerId): string => this.worldState.getPlayer(playerId).name

  private describeUnit = (unit: Unit): string => {
    const { name, playerId, hitPoints, actionPoints } = unit
    const playerName = this.getPlayerName(playerId)
    return `${name} - Llama warrior - ${playerName} - HP ${hitPoints.current}/${hitPoints.max} - actions ${actionPoints.current}/${actionPoints.max}`
  }

  private getPlayerObjects = (playerId: PlayerId): PlayerObjects => {
    const playerObjects = this.playerObjects.get(playerId)
    if (!playerObjects) {
      throw new Error(`No player objects found for ${playerId}`)
    }
    return playerObjects
  }
}
