import { PlayerId } from '../world/world-state'

type ClientId = number

export  interface JoinMessage {
  type: 'join'
  clientId: ClientId
}

export interface JoinedMessage {
  type: 'joined'
  clientId: ClientId
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

export type Message = JoinMessage | JoinedMessage | WorldEventMessage | WorldActionMessage