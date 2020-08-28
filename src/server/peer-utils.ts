import Peer = require('peerjs')

export const newPeer = (
  id?: string,
  options: Peer.PeerJSOption = { host: 'localhost', port: 9000, path: '/myapp' },
): Peer => {
  const _Peer = (window as any).Peer as typeof Peer
  return new _Peer(id, options)
}
