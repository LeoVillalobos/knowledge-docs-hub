import { defineConfig } from 'vitepress'
import { sidebarHome, sidebarIA, sidebarItems } from '../src/router/index'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/knowledge-docs-hub/',
  srcDir: './src',
  lang: "es",
  title: "Knowledge Docs Hub",
  description: "Centralized repository of technical documentation for courses and technologies",
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
      { text: 'vuetify', link: '/certificates' },  // Enlace a la página del equipo
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
