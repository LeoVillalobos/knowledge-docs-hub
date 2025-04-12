// .vitepress/vite.config.ts
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'
// import { fileURLToPath } from 'url'
// import path from 'path'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// Plugin para ignorar importaciones de CSS durante el build SSR
const ignoreCss = () => ({
  name: 'ignore-css',
  resolveId(id: string) {
    if (id.endsWith('.css')) return id
  },
  load(id: string) {
    if (id.endsWith('.css')) return ''  // retorna cadena vacía
  },
})

export default defineConfig({
  ssr: {
    // Evita que Vuetify (y sus submódulos) se externalicen, para que se procesen internamente
    noExternal: ['vuetify'],
  },
  plugins: [
    ignoreCss(), // añade primero el plugin para CSS
    vuetify({
      autoImport: true,
      styles: 'sass', // asegura la compilación de estilos vía Sass (asegúrate de tener instalado sass)
    }),
  ],
  // resolve: {
  //   alias: {
  //     '@components': path.resolve(__dirname, '../src/components'),
  //   },
  // },
})
