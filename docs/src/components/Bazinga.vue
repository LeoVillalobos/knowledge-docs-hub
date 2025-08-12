<script setup lang="ts">

const img = '/knowledge-docs-hub/images/monkey.png';

</script>

<template>
  <div class="image-container">
    <img
      :src="img"
      alt="Monkey"
    />
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
}

.image-container img {
  max-width: 90vw;   /* ancho máximo 90% de viewport width */
  height: auto;      /* que mantenga proporción */
}
</style>
