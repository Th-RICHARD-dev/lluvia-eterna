<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import headerComponent from '@/components/header.vue'
</script>

<template>
  <headerComponent />

  <RouterView />
</template>

<style scoped></style>
