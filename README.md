# Llama Wars

A prototype Civ-like strategy game featuring llamas, built with [Phaser 3](https://phaser.io/) and TypeScript. Multiplayer runs peer-to-peer over [PeerJS](https://peerjs.com/), with the host's browser acting as the game server.

## Development

Tools come from the Nix flake: run `nix develop`, or let direnv load it via `.envrc`.

```sh
npm install
npm run peer   # local PeerJS signalling server on localhost:9000 (keep running)
npm run dev    # Vite dev server
```

Click "Host Game", then open the page's URL (including the `#game-id`) in another browser profile or private window to join as a second player.

Other scripts:

- `npm run build` type-checks and builds to `dist/`
- `npm run lint`, `npm run typecheck`, `npm run format`

Development builds use the local PeerJS server; production builds use the public PeerJS cloud server.

The `docs/` directory holds an older build published with GitHub Pages.
