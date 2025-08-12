import { defineConfig } from 'vitepress'
import { sidebarCourses, sidebarHome, sidebarIA, sidebarItems, sidebarProgrammingLanguages, sidebarTecnologies } from '../src/router/index'
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

  head: [
    ['link', { rel: 'icon', href: '/knowledge-docs-hub/favicon.ico' }],  // Icono de la pestaña del navegador
    ['meta', { name: 'keywords', content: 'Knowledge Docs Hub, documentación de desarrollador, cursos de programación, portafolio de desarrollo, Vue, React, Node.js, Django, VitePress, API REST, TypeScript, Firebase, Rust, Express, desarrollo web, proyectos personales, aprendizaje continuo, guía para desarrolladores, documentación técnica' }],
    ['meta', { name: 'author', content: 'Brallan Leonardo Sanchez Villalobos' }],
    ['meta', { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
    ['meta', { name: 'google-site-verification', content: 'R6oSkIcH1Ebu0gTYxujTM5_qtQiz6JWMrGVAlkfCmdc' }],
    ['link', { rel: 'canonical', href: 'https://leovillalobos.github.io/knowledge-docs-hub/' }],

    // Open Graph
    ['meta', { property: 'og:title', content: 'Knowledge Docs Hub' }],
    ['meta', { property: 'og:description', content: 'Knowledge Docs Hub, documentación de desarrollador, cursos de programación, portafolio de desarrollo, Vue, React, Node.js, Django, VitePress, API REST, TypeScript, Firebase, Rust, Express, desarrollo web, proyectos personales, aprendizaje continuo, guía para desarrolladores, documentación técnica' }],
    ['meta', { property: 'og:image', content: 'https://leovillalobos.github.io/knowledge-docs-hub/knowledge-docs-hub.png' }],
    ['meta', { property: 'og:url', content: 'https://leovillalobos.github.io/knowledge-docs-hub/' }],
    ['meta', { property: 'og:type', content: 'website' }],

  ],
  lastUpdated: true,  // Muestra la fecha de la última actualización en la parte inferior de cada página

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
      { text: 'C.V.', link: '/pdf' },
      { text: '', link: '/info' },
    ],

    sidebar: {
      // '/pages/home/': sidebarHome,
      // '/pages/data_science/': sidebarItems,
      // '/pages/AI/': sidebarIA,
      '/pages/courses/': sidebarCourses,
      '/pages/technologies/': sidebarTecnologies,
      '/pages/programming_languages/': sidebarProgrammingLanguages,
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
