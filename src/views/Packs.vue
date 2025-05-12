<template>
  <section class="px-4 sm:px-6 md:px-10 py-12 sm:py-14 md:py-16">
    <div v-if="packs.length" class="flex flex-col gap-16 md:gap-20">
      <PackBlock
        v-for="pack in packs"
        :key="pack.id"
        :pack="pack"
        :parfums="perfumesByPack[pack.id] || []"
      />
    </div>
    <div v-else class="text-center text-gray-500 py-20">Chargement des packs...</div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import PackBlock from '@/components/packBlock.vue'

const packs = ref([])
const allPerfumes = ref([])
const perfumesByPack = ref({})

const fetchData = async () => {
  const { data: packsData, error: packError } = await supabase.from('packs').select('*')
  const { data: perfumesData, error: perfumeError } = await supabase.from('parfums').select('*')

  if (!packError && !perfumeError) {
    packs.value = packsData
    allPerfumes.value = perfumesData

    const grouped = {}
    perfumesData.forEach((parfum) => {
      if (!grouped[parfum.id_packs]) grouped[parfum.id_packs] = []
      grouped[parfum.id_packs].push(parfum)
    })
    perfumesByPack.value = grouped
  } else {
    console.error('Erreur de chargement packs/parfums:', packError || perfumeError)
  }
}

onMounted(fetchData)
</script>