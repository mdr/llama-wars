import { PlayerId } from '../world/player'

export interface JoinRequest {
  type: 'join'
}

export interface JoinedResponse {
  type: 'joined'
  playerId: PlayerId
  worldState: any
}

export interface UnableToJoinResponse {
  type: 'unableToJoin'
}

export type JoinResponse = JoinedResponse | UnableToJoinResponse

export interface RejoinRequest {
  type: 'rejoin'
  playerId: PlayerId
}

export interface WorldActionRequest {
  type: 'worldAction'
  action: any
  playerId: PlayerId
}

export type ClientRequest = JoinRequest | RejoinRequest | WorldActionRequest

export interface RejoinedResponse {
  type: 'rejoined'
  worldState: any
}

export interface WorldEventMessage {
  type: 'worldEvent'
  event: any
}
