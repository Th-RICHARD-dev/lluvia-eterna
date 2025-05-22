<script setup>
import { useRoute } from 'vue-router'
import headerComponent from '@/components/header.vue'
import footerComponent from '@/components/footer.vue'
import CartNotification from '@/components/CartNotification.vue'

const route = useRoute()
</script>

<template>
  <headerComponent v-if="route.path !== '/contest'"/>
  <CartNotification v-if="route.path !== '/contest'"/>
  <RouterView />
  <footerComponent v-if="route.path !== '/' && route.path != '/contest' && route.path != '/quiz'" />
</template>
