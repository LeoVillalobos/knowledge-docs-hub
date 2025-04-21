<!-- components/MyButton.vue -->
<template>
  <v-container fluid>
    <v-row
      dense
      class="py-3"
      align="stretch"
      justify="center"
      style="gap:24px"
    >
      <v-col
        v-for="(certificate, index) in certificates"
        :key="index"
        cols="12"
        sm="6"
        md="3"
        class="d-flex"
      >
        <v-card
          class="flex-grow-1 pa-4 text-center"
          elevation="0"
          color=" bg-grey-lighten-4"
          rounded="lg"
        >

          <!-- Imagen con tamaño fijo y centrada -->
          <v-img
          :src="certificate.img"
          class="ma-4 size-150"
          style="max-width: 100%; height: auto;"
          cover
        ></v-img>

          <!-- Título y descripción centrados -->
          <v-card-title class="text-h6 font-weight-medium mb-2">
            {{ certificate.name }}
          </v-card-title>
          <v-card-text class="text-body-2 mb-4">
            {{ certificate.description }}
          </v-card-text>

          <v-divider class="my-2"></v-divider>

          <!-- Botón -->
          <v-card-actions class="justify-center">
            <v-btn
              :href="certificate.url"
              target="_blank"
              rel="noopener"
              variant="text"
              color="primary"
            >
              Ver certificado
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
