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

export interface JoinedResponse {
  type: 'joined'
  playerId: PlayerId
  worldState: any
}

export interface RejoinedResponse {
  type: 'rejoined'
  worldState: any
}

export interface WorldEventMessage {
  type: 'worldEvent'
  event: any
}
