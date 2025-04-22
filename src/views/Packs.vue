<template>
  <section class="bg-[#F8F8F8] px-10 py-16">
    <div v-if="packs.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div v-for="pack in packs" :key="pack.id" class="border rounded-xl overflow-hidden bg-white p-6">
        <img :src="pack.image" alt="image pack" class="w-full h-60 object-cover mb-4 rounded-lg" />
        <h2 class="text-2xl font-bold uppercase mb-2">{{ pack.name }}</h2>
        <p class="text-sm text-gray-500 mb-2">{{ pack.slogan }}</p>
        <p class="text-sm text-gray-700 mb-4">{{ pack.description }}</p>
        <div class="flex items-center justify-between mt-auto">
          <p class="text-lg font-semibold">{{ pack.price.toFixed(2) }} €</p>
          <router-link
            :to="{ name: 'packs', params: { id: pack.id } }"
            class="bg-[#584638] text-white px-4 py-2 rounded-xl uppercase text-sm font-bold"
          >
            Voir le pack
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500 py-20">Chargement des packs...</div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const packs = ref([])

const fetchPacks = async () => {
  const { data, error } = await supabase.from('packs').select('*')
  if (!error) {
    packs.value = data
  } else {
    console.error('Erreur chargement packs:', error.message)
  }
}

onMounted(fetchPacks)
</script>

