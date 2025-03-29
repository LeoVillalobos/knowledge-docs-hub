import { routesIA } from "./artificial_intelligence"
import { routesDataScience } from "./data_science"
import { routesDataScienceProjects } from "./home/data_science_projects"


export const sidebarHome = [
  // {
  //   text: 'Inicio',
  //   items: [
  //     { text: 'Temas a tratar', link: '/pages/home/index' },
  //   ]
  // },
  // {
  //   text: 'Ciencia de datos',
  //   items: [
  //     { text: 'Introduccion', link: '/pages/data_science/index' },
  //   ]
  // },
  routesDataScienceProjects
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
