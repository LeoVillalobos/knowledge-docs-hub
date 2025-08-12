<script setup lang="ts">

const img = '/knowledge-docs-hub/images/monkey.png';

</script>

<template>
  <div class="image-container">
    <img
      :src="img"
      alt="Monkey"
      width="30%"
    />
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
}
</style>
