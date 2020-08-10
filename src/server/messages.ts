import { PlayerId } from '../world/player'

export interface JoinMessage {
  type: 'join'
}

export interface RejoinMessage {
  type: 'rejoin'
  playerId: PlayerId
}

export interface WorldActionMessage {
  type: 'worldAction'
  action: any
  playerId: PlayerId
}

export type ClientToServerMessage = JoinMessage | RejoinMessage | WorldActionMessage

export interface JoinedMessage {
  type: 'joined'
  playerId: PlayerId
  worldState: any
}

export interface RejoinedMessage {
  type: 'rejoined'
  worldState: any
}

export interface WorldEventMessage {
  type: 'worldEvent'
  event: any
}

export type ServerToClientMessage = JoinedMessage | RejoinedMessage | WorldEventMessage
