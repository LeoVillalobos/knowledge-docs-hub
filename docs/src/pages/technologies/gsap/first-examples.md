# Ejemplos Prácticos de GSAP en Vue 3 + Vuetify + TypeScript

Esta documentación contiene ejemplos básicos y avanzados para usar GSAP con Vue 3, Vuetify y TypeScript. Cada ejemplo incluye el código completo de un componente, junto con explicaciones para entender mejor cómo funcionan las animaciones y los controles.

---

## Tween Básico con Control

Este ejemplo demuestra cómo crear una animación simple con GSAP (un Tween) que rota y mueve un elemento. Además, muestra cómo controlar la animación desde la interfaz con botones para reproducir, pausar o revertir la animación.

- Usamos el hook `onMounted` para crear el tween cuando el componente se monta.
- El tween se crea en estado pausado (`paused: true`) para poder controlarlo manualmente.
- Los botones disparan métodos que llaman a los métodos de control del tween: `play()`, `pause()`, y `reverse()`.

Este patrón es útil para animaciones interactivas donde quieres controlar el flujo, por ejemplo, animaciones de botones, cajas, o efectos que se activan según acciones del usuario.

'''
<template>
<v-container class="d-flex flex-column align-center justify-center" style="height: 400px;">
<div ref="box" class="box" style="width: 100px; height: 100px; background-color: #4caf50; margin-bottom: 20px;"></div>

    <v-row class="mb-6" justify="center" align="center" dense>
      <v-btn class="mx-2" color="primary" @click="playTween">Play Tween</v-btn>
      <v-btn class="mx-2" color="secondary" @click="pauseTween">Pause Tween</v-btn>
      <v-btn class="mx-2" color="error" @click="reverseTween">Reverse Tween</v-btn>
    </v-row>

  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { gsap, Tween } from 'gsap'

const box = ref<HTMLDivElement | null>(null)
let tween: Tween | null = null

onMounted(() => {
  if (box.value) {
    tween = gsap.to(box.value, {
      rotation: 360,
      x: 200,
      duration: 3,
      paused: true,
      ease: 'power1.inOut'
    })
  }
})

function playTween() {
  tween?.play()
}

function pauseTween() {
  tween?.pause()
}

function reverseTween() {
  tween?.reverse()
}
</script>

<style scoped>
.box {
  border-radius: 8px;
}
</style>

'''

---

## Timeline con Secuencia

Este ejemplo introduce el uso de un `Timeline` para organizar múltiples animaciones en secuencia y controlarlas como un solo bloque.

- Se definen tres cajas con colores diferentes que se animan una tras otra.
- La animación mueve las cajas a la derecha, cambia sus colores y rota algunos elementos.
- El timeline está pausado inicialmente para que el usuario pueda controlarlo mediante botones.
- Los métodos de control son similares al Tween: `play()`, `pause()`, y `reverse()`.
- La ventaja de Timeline es poder manejar animaciones complejas, sincronizadas y fácilmente reversibles.

Este enfoque es ideal para crear introducciones, presentaciones o animaciones con múltiples etapas que deben correr en orden.

'''
<template>
<v-container class="d-flex flex-column align-center justify-center" style="height: 400px;">
<v-row class="mb-4" justify="center" align="center" dense>
<div ref="greenBox" class="color-box green"></div>
<div ref="blueBox" class="color-box blue"></div>
<div ref="orangeBox" class="color-box orange"></div>
</v-row>

    <v-row justify="center" align="center" dense>
      <v-btn class="mx-2" color="primary" @click="playTimeline">Play Timeline</v-btn>
      <v-btn class="mx-2" color="secondary" @click="pauseTimeline">Pause Timeline</v-btn>
      <v-btn class="mx-2" color="error" @click="reverseTimeline">Reverse Timeline</v-btn>
    </v-row>

  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { gsap, Timeline } from 'gsap'

const greenBox = ref<HTMLDivElement | null>(null)
const blueBox = ref<HTMLDivElement | null>(null)
const orangeBox = ref<HTMLDivElement | null>(null)
let timeline: Timeline | null = null

onMounted(() => {
  if (greenBox.value && blueBox.value && orangeBox.value) {
    timeline = gsap.timeline({ paused: true })
    timeline.to(greenBox.value, { duration: 1, x: 300, backgroundColor: '#1b5e20' })
      .to(blueBox.value, { duration: 1.5, x: 300, rotation: 180, backgroundColor: '#0d47a1' })
      .to(orangeBox.value, { duration: 1, x: 300, rotation: 360, backgroundColor: '#ef6c00' })
  }
})

function playTimeline() {
  timeline?.play()
}

function pauseTimeline() {
  timeline?.pause()
}

function reverseTimeline() {
  timeline?.reverse()
}
</script>

<style scoped>
.color-box {
  width: 80px;
  height: 80px;
  margin: 0 10px;
  border-radius: 8px;
}

.green {
  background-color: #4caf50;
}

.blue {
  background-color: #2196f3;
}

.orange {
  background-color: #ff9800;
}
</style>

'''

---

## Próximos pasos

- Agregar ejemplos con etiquetas (labels) para posicionar animaciones dentro del timeline.
- Controlar el timeline con eventos personalizados.
- Combinar Tween y Timeline para animaciones complejas.
- Uso de `from`, `fromTo` para animaciones de entrada y salida.
- Integración con Vuetify transitions y slots para animaciones en componentes reutilizables.

---

¿Quieres que siga agregando estas secciones y ejemplos?
¿O prefieres que te prepare el archivo completo para que lo tengas como guía?
