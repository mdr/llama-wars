import { Peer, PeerOptions } from 'peerjs'

// In development, use a local PeerJS server (`npm run peer`); in production, the public PeerJS cloud server.
const defaultPeerOptions: PeerOptions = import.meta.env.DEV ? { host: 'localhost', port: 9000, path: '/myapp' } : {}

export const newPeer = (id?: string, options: PeerOptions = defaultPeerOptions): Peer =>
  id === undefined ? new Peer(options) : new Peer(id, options)
