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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: {
      '/pages/home/': sidebarHome,
      '/pages/data_science/': sidebarItems,
      '/pages/AI/': sidebarIA,
    },

    // Navegación entre páginas
    docFooter: {
      prev: 'Pagina anterior',   // Texto para la página anterior
      next: 'Proxima pagina'     // Texto para la página siguiente
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
