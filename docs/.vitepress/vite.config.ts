import { defineConfig } from 'vitepress'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  vite: {
    plugins: [
      vuetify({
        autoImport: true,
        styles: { configFile: 'docs/.vitepress/theme/settings.scss' } // <-- Esto faltaba
      }),
    ],
    ssr: {
      noExternal: ['vuetify']
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "vuetify/styles";' // <-- Y esto es necesario
        }
      }
    }
  },
  // ... resto de tu configuración
})
