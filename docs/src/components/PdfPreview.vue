
<template>
  <div class="pdf-preview">
    <iframe
      :src="pdfUrl"
      width="100%"
      height="700px"
      style="border: none;"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
const pdfUrl = '/knowledge-docs-hub/documents/Brallan Leonardo Sachez Villalobos.pdf'
</script>
