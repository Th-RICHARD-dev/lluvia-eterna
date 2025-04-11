<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from './lib/supabaseClient'
import headerComponent from '@/components/header.vue'
import footerComponent from '@/components/footer.vue'

const route = useRoute()
const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => {
  getInstruments()
})
</script>

<template>
  <headerComponent />

  <!-- Instrument list from Supabase -->
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
  </ul>

  <RouterView />

  <footerComponent v-if="route.path !== '/'" />
</template>
