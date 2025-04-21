<!-- components/MyButton.vue -->
<template>
 <div>
  <v-container>
    <v-row>
      <v-col v-for="(certificate, index) in certificates" :key="index" cols="12" md="3">
        <v-card
          class="mx-auto my-12"
          height="530"
          max-width="500"
        >

        <v-img
          :src="certificate.img"
          class="ma-4 size-150"
          style="max-width: 100%; height: auto;"
          cover
        ></v-img>

        <v-card-item>
          <v-card-title>{{certificate.name}}</v-card-title>

          <v-card-subtitle>
            <span class="me-1">Local Favorite</span>

            <v-icon
              color="error"
              icon="mdi-fire-circle"
              size="small"
            ></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
            ></v-rating>

          </v-row>

          <!-- <v-divider class="mx-4 mb-1"></v-divider> -->

          <div>{{certificate.description}}</div>

        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-actions>
          <v-btn
            :href="certificate.url"
            target="_blank"
            rel="noopener"
            color="deep-purple-accent-4"
            variant="text"
          >
            Learn More
          </v-btn>
        </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
 </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
// no extra logic needed

interface ICertificate {
  name: string;
  img: string;
  description: string;
  url: string;
}

const certificates: ICertificate[] = [
  {
    name: 'Scrum fundamentals',
    img: '/knowledge-docs-hub/images/cert/scrum.png',
    description: 'Certificado de fundamentos de Scrum, metodología ágil para la gestión de proyectos.',
    url: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-Leonardosanchez-820307.pdf'
  },
  {
    name: 'Vue',
    img: '/knowledge-docs-hub/images/cert/vues.png',
    description: 'Certificado de desarrollo de aplicaciones con Vue.js.',
    url: 'https://platzi.com/p/villalobosleonardo41394/curso/1752-course/diploma/detalle/'
  },
  {
    name: 'Pinea',
    img: '/knowledge-docs-hub/images/cert/programacion basica.png',
    description: 'Certificado de fundamentos de programación básica.',
    url: 'https://platzi.com/p/villalobosleonardo41394/curso/3229-course/diploma/detalle/'
  },
  {
    name: 'Flutter',
    img: '/knowledge-docs-hub/images/cert/flutter.png',
    description: 'Certificado de desarrollo de aplicaciones móviles con Flutter.',
    url: 'https://platzi.com/p/villalobosleonardo41394/curso/1386-course/diploma/detalle/'
  },
  {
    name: 'Componentes y composition api',
    img: '/knowledge-docs-hub/images/cert/componentes y composition api.png',
    description: 'Certificado sobre el uso de componentes y la Composition API en Vue.js.',
    url: 'https://platzi.com/p/villalobosleonardo41394/curso/2820-course/diploma/detalle/'
  },
  {
    name: 'Laravel',
    img: '/knowledge-docs-hub/images/cert/laravel.png',
    description: 'Certificado de desarrollo web con el framework Laravel.',
    url: 'https://platzi.com/p/villalobosleonardo41394/curso/2183-course/diploma/detalle/'
  },
  {
    name: 'Curso docker',
    img: '/knowledge-docs-hub/images/cert/curso docker.png',
    description: 'Certificado de uso y manejo de contenedores con Docker.',
    url: 'https://platzi.com/p/villalobosleonardo41394/curso/2066-course/diploma/detalle/'
  },
  {
    name: 'Prework',
    img: '/knowledge-docs-hub/images/cert/prework.png',
    description: 'Certificado de preparación y configuración de entorno de desarrollo.',
    url: 'https://platzi.com/p/villalobosleonardo41394/curso/2042-course/diploma/detalle/'
  },
  {
    name: 'Programacion basica',
    img: '/knowledge-docs-hub/images/cert/programacion basica.png',
    description: 'Certificado de fundamentos de programación básica.',
    url: 'https://platzi.com/p/villalobosleonardo41394/curso/1050-course/diploma/detalle/'
  }

];
</script>
