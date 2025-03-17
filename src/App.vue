<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import headerComponent from '@/components/header.vue';

const route = useRoute();

onMounted(() => {
  updateBodyClass(route.path);
});

watch(() => route.path, (newPath) => {
  updateBodyClass(newPath);
});

function updateBodyClass(path) {
  if (path === '/') {
    document.body.classList.add('black-body');
    document.body.classList.remove('white-body');
  } else {
    document.body.classList.add('white-body');
    document.body.classList.remove('black-body');
  }
}
</script>

<template>
  <headerComponent />
  
  <RouterView />
</template>

<style>
  .white-body {
    background-color: white;
    color: black;
  }
  .black-body {
    background-color: black;
    color: white;
  }
</style>
