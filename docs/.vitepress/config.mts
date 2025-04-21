import { defineConfig } from 'vitepress'
import { sidebarHome, sidebarIA, sidebarItems } from '../src/router/index'
import vuetify from 'vite-plugin-vuetify'
import path from 'path'
import { fileURLToPath } from 'url'
// En theme/index.ts
// import './styles/main.css'
// https://vitepress.dev/reference/site-config

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export default defineConfig({
  base: '/knowledge-docs-hub/',
  srcDir: './src',
  lang: "es",
  title: "Knowledge Docs Hub",
  description: "Centralized repository of technical documentation for courses and technologies",

  // Configuración de Vite
  vite: {
    ssr: {
      // Evita que Vuetify (y sus submódulos) se externalicen, para que se procesen internamente
      noExternal: ['vuetify'],
    },
    plugins: [
      // ignoreCss(), // añade primero el plugin para CSS
      vuetify(),
    ],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '../src/components'),
      },
    },
  },


  themeConfig: {

    // Logo del sitio para los modos claro y oscuro
    logo: {
      light: 'svgviewer-output_3.svg',  // Archivo de logo para el tema claro
      dark: 'new.svg',                  // Archivo de logo para el tema oscuro
    },

     // Título del sitio web
     siteTitle: 'Leonardo Villalobos Docs',  // Título que aparece en la barra de navegación
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Team', link: '/team' }, 
      { text: 'Certificados', link: '/certificates' },  // Enlace a la página del equipo
    ],

    sidebar: {
      '/pages/home/': sidebarHome,
      '/pages/data_science/': sidebarItems,
      '/pages/AI/': sidebarIA,
    },

     // Pie de página
     footer: {
      message: 'Released under the MIT License.',  // Mensaje sobre la licencia
      copyright: 'Copyright © 2024 Leonardo Villalobos',         // Derechos de autor
    },

    // Navegación entre páginas
    docFooter: {
      prev: 'Pagina anterior',   // Texto para la página anterior
      next: 'Proxima pagina'     // Texto para la página siguiente
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LeoVillalobos' }
    ],

    // Configuración del buscador
    search: {
      provider: 'local'  // Buscador interno/local (sin integración con servicios externos)
    }
  }
})
