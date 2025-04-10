<script setup>
import { useRoute } from 'vue-router';
import headerComponent from '@/components/header.vue';
import footerComponent from '@/components/footer.vue';

const route = useRoute();
</script>

<template>
  <headerComponent />
  
  <RouterView />


  <footerComponent v-if="route.path !== '/'" />
</template>
