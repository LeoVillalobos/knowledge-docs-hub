import { defineConfig } from 'vitepress'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  vite: {
    plugins: [
      vuetify({ autoImport: true }), // Habilita auto-importación
    ],
    ssr: {
      noExternal: ['vuetify'], // Necesario para SSR
    }
  },
  // ... resto de tu configuración
})
