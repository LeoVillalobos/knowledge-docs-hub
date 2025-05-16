import { it } from "node:test";

export const routesTecnologies = {
  text: 'Technologies',
  collapsed: false,
  items: [
    // { text: 'Instroducción', link: '/pages/guide/mobile/index-mobile'},
    {
      text: 'Initial',
      link: '/pages/technologies/index'
      // items: [
      //   { text: 'Technologies', link: '/pages/technologies/index'},
      // ]
    },
    {
      text: 'Software en Windows',
      items: [
        { text: 'Chocolatey', link: '/pages/technologies/windows/chocolatey'},
      ]
    },
    {
      text: 'Kubernetes (K8s)',
      items: [
        { text: '¿Qué es Kubernetes?', link: '/pages/technologies/kubernetes/index'},
        { text: 'K8s Components', link: '/pages/technologies/kubernetes/k8s_components'},
        { text: 'Helm', link: '/pages/technologies/kubernetes/helm'},
        { text: 'Comandos', link: '/pages/technologies/kubernetes/commands'},
        {
          text: 'Tutoriales',
          items: [
            { text: 'Hello minikube', link: '/pages/technologies/kubernetes/tutorials/hello_minikube'},
            { text: 'My Hello minikube', link: '/pages/technologies/kubernetes/tutorials/my_hello_minikube'},
          ]},
      ]
    },
    {
      text: 'Vue.js',
      items: [
        // { text: 'Introduccion', link: '/pages/technologies/index'},
      ]
    },
    {
      text: 'Electron',
      items: [
        // { text: 'Introduccion', link: '/pages/technologies/index'},
      ]
    },
    {
      text: 'Node.js',
      items: [
        // { text: 'Introduccion', link: '/pages/technologies/index'},
      ]
    },
    {
      text: 'PNPM',
      items: [
        { text: 'Introduccion', link: '/pages/technologies/pnpm/index'},
      ]
    },
    {
      text: 'Vuetify',
      items: [
        // { text: 'Introduccion', link: '/pages/technologies/index'},
      ]
    },
  ]
}
