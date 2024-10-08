import { routesIA } from "./artificial_intelligence"
import { routesDataScience } from "./data_science"


export const sidebarHome = [
  {
    text: 'Inicio',
    items: [
      { text: 'Temas a tratar', link: '/pages/home/index' },
    ]
  },
  {
    text: 'Ciencia de datos',
    items: [
      { text: 'Introduccion', link: '/pages/data_science/index' },
    ]
  },
]


/**
 *
 */
export const sidebarItems = [
  routesDataScience

]

export const sidebarIA = [
  routesIA
]
