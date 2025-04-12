// .vitepress/vite.config.ts
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'
// import path from 'path'

export default defineConfig({
  plugins: [
    vuetify({
      styles: 'none', // 👈 Desactiva los estilos automáticos
    }),
  ],
  // resolve: {
  //   alias: {
  //     '@components': path.resolve(__dirname, '../src/components'),
  //   },
  // },
})
