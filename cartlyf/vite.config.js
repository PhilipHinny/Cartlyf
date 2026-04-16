import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/about', '/services', '/portfolio', '/team', '/careers', '/contact'],
      renderer: new PuppeteerRenderer({
        maxConcurrentRoutes: 1,
        renderAfterDocumentEvent: 'render-event'
      })
    })
  ],
})
