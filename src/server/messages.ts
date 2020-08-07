import { PlayerId } from '../world/world-state'

export interface JoinMessage {
  type: 'join'
}

export interface JoinedMessage {
  type: 'joined'
  playerId: PlayerId
  worldState: any
}

export interface WorldEventMessage {
  type: 'worldEvent'
  event: any
}

export interface WorldActionMessage {
  type: 'worldAction'
  action: any
  playerId: PlayerId
}

export type ServerToClientMessage = JoinedMessage | WorldEventMessage
export type ClientToServerMessage = JoinMessage | WorldActionMessage