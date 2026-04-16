import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from 'vite-plugin-prerender'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      // The directory where the built site is located.
      staticDir: path.join(__dirname, 'dist'),
      // The routes to render.
      routes: ['/', '/about', '/services', '/portfolio', '/team', '/careers', '/contact'],
      // Options for the renderer.
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterDocumentEvent: 'render-event'
      }
    })
  ],
})
