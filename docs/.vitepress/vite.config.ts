// .vitepress/vite.config.ts
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'
// import path from 'path'

export default defineConfig({
  ssr: {
    noExternal: ['vuetify'], // 👈 Esto es lo que evita el error de .css
  },
  plugins: [
    vuetify({
      autoImport: true,
      styles: {
        configFile: "sass"
      }
    }),
  ],
  // resolve: {
  //   alias: {
  //     '@components': path.resolve(__dirname, '../src/components'),
  //   },
  // },
})
