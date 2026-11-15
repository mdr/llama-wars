import { defineConfig } from 'vite'

export default defineConfig({
  // Relative asset URLs, so the build works from a sub-path such as GitHub Pages.
  base: './',
  build: {
    // Keep bundles separate from the game's own files in public/assets.
    assetsDir: 'bundle',
    // Phaser alone is well over Vite's default 500 kB warning threshold.
    chunkSizeWarningLimit: 2000,
  },
  server: {
    open: true,
  },
  define: {
    'typeof CANVAS_RENDERER': JSON.stringify(true),
    'typeof WEBGL_RENDERER': JSON.stringify(true),
  },
})
