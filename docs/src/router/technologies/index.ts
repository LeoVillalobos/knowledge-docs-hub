

export const routesNginx = {
  text: 'Nginx',
  collapsed: false,
  items: [
    { text: 'Introducción', link: '/pages/technologies/nginx/index' },
    { text: '¿Que es un proxy?', link: '/pages/technologies/nginx/proxy' },
    { text: 'Servir html', link: '/pages/technologies/nginx/servir_html' },
    // { text: 'Configuración', link: '/pages/technologies/nginx/configuration' },
  ]
}

export const routesPnpm = {
  text: 'PNPM',
  collapsed: false,
  items: [
    { text: 'Introducción', link: '/pages/technologies/pnpm/index' },
    // { text: 'Instalación', link: '/pages/technologies/pnpm/intalacion' }
  ]
}

export const routesKubernetes = {
  text: 'Kubernetes',
  collapsed: false,
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
}

export const windows = {
  text: 'Software en Windows',
  collapsed: false,
  items: [
    { text: 'Chocolatey', link: '/pages/technologies/windows/chocolatey'},
  ]
}

export const routesTecnologiesInfo = {
  text: 'Technologies',
  collapsed: false,
  items: [
    // { text: 'Instroducción', link: '/pages/guide/mobile/index-mobile'},
    {
      text: 'Initial',
      link: '/pages/technologies/index'
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
      text: 'Vuetify',
      items: [
        // { text: 'Introduccion', link: '/pages/technologies/index'},
      ]
    },
  ]
}


export const routesTecnologies = [
  routesNginx,
  routesPnpm,
  routesKubernetes,
  windows
]
