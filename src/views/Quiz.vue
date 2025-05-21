<template>
    <section v-if="!showRecommendations" class="min-h-screen bg-[#F1EADA] mt-30 mb-10">
      <div class="max-w-3xl mx-auto p-6 border border-[#584638] rounded-2xl text-[#584638] font-serif">
        <h1 class="text-center text-2xl font-bold mb-1">Trouvez votre parfum idéal ici !</h1>
        <p class="text-center text-sm mb-6">Laissez nous vous conseillez au mieux à l'aide de vos réponses !!</p>
  
        <form @submit.prevent="handleSubmit" class="space-y-6">
                <fieldset class="mb-6">
                    <legend class="font-semibold mb-4 text-lg">Quelle est votre saison préférée ?</legend>
                    <div class="grid grid-cols-2 gap-4">
                        <label
                        v-for="season in ['Printemps', 'Eté', 'Automne', 'Hiver']"
                        :key="season"
                        class="flex items-center justify-start gap-3 border border-[#584738] rounded-xl px-4 py-3 cursor-pointer transition hover:shadow-xl">
                        <input type="radio" v-model="form.season" :value="season" class="w-6 h-6 bg-[#F1EADA] accent-[#584738] transition" />
                        <span class="text-gray-800 text-sm">{{ season }}</span>
                        </label>
                    </div>
                </fieldset>

        
                <fieldset>
                <legend class="font-semibold mb-2">Quel est votre niveau d’intensité de parfum ?</legend>
                <input type="range" v-model="form.intensity" min="0" max="3" class="w-full accent-[#584738]">
                <div class="flex justify-between text-sm mt-1">
                    <span>Léger</span><span>Doux</span><span>Discret</span><span>Fort</span>
                </div>
                </fieldset>
        
                <fieldset>
                <legend class="font-semibold mb-2">Quelles odeurs aimez vous ?</legend>
                <div class="grid grid-cols-2 gap-4">
                    <label v-for="scent in ['Fruitée', 'Sucrée', 'Boisée', 'Épicée']" :key="scent" class="flex items-center justify-start gap-3 border border-[#584738] rounded-xl px-4 py-3 cursor-pointer transition hover:shadow-xl">
                    <input type="checkbox" v-model="form.scents" :value="scent" class="w-6 h-6 bg-[#F1EADA] accent-[#584738] transition">
                    {{ scent }}
                    </label>
                </div>
                </fieldset>
        
                <fieldset>
                <legend class="font-semibold mb-2">Pour qui ?</legend>
                <div class="grid grid-cols-2 gap-4">
                    <label v-for="target in ['Un enfant', 'Un adolescent', 'Un adulte', 'Une personne âgée']" :key="target" class="flex items-center justify-start gap-3 border border-[#584738] rounded-xl px-4 py-3 cursor-pointer transition hover:shadow-xl">
                    <input type="radio" v-model="form.target" :value="target" class="w-6 h-6 bg-[#F1EADA] accent-[#584738] transition">
                    {{ target }}
                    </label>
                </div>
                </fieldset>
        
                <fieldset>
                <legend class="font-semibold mb-2">Vous l’utiliseriez ?</legend>
                <div class="grid grid-cols-2 gap-4">
                    <label v-for="use in ['Occasionnellement', 'Souvent', 'Pour un évènement', 'Pour le travail']" :key="use" class="flex items-center justify-start gap-3 border border-[#584738] rounded-xl px-4 py-3 cursor-pointer transition hover:shadow-xl">
                    <input type="radio" v-model="form.usage" :value="use" class="w-6 h-6 bg-[#F1EADA] accent-[#584738] transition">
                    {{ use }}
                    </label>
                </div>
                </fieldset>
        
                <fieldset>
                <legend class="font-semibold mb-2">Votre souvenir vous évoque le plus ?</legend>
                <div class="grid grid-cols-2 gap-4">
                    <label v-for="memory in ['Bonheur', 'Nostalgie', 'Emerveillement', 'Amusement']" :key="memory" class="flex items-center justify-start gap-3 border border-[#584738] rounded-xl px-4 py-3 cursor-pointer transition hover:shadow-xl">
                    <input type="checkbox" v-model="form.memories" :value="memory" class="w-6 h-6 bg-[#F1EADA] accent-[#584738] transition">
                    {{ memory }}
                    </label>
                </div>
                </fieldset>
        
                <fieldset>
                <legend class="font-semibold mb-2">Décrivez nous votre souvenir !!</legend>
                <textarea v-model="form.description" rows="4" class="w-full border rounded-xl p-2"></textarea>
                </fieldset>
        
                <div class="text-center">
                <button type="submit" class="border px-6 py-2 rounded-xl" @click="handleSubmit">Valider</button>
                </div>
            </form>

      </div>
    </section>
  
    <section v-if="showRecommendations" class="py-20 mt-20">
      <h2 class="text-center text-2xl text-[#584738] font-serif mb-12">Vos parfums idéaux :</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div v-for="perfume in recommended" :key="perfume.id" class="bg-[#fefaf5] border-4 border-[#B59E7D] p-6 rounded-xl text-center">
          <img :src="perfume.image" class="w-full object-cover mb-4 rounded-lg" />
          <h3 class="text-lg font-semibold text-[#584738]">Senteur {{ perfume.name }}</h3>
          <p class="text-sm text-[#584738] mt-2">{{ perfume.description }}</p>
          <button class="mt-4 border px-6 py-2 rounded-xl text-[#584738] hover:bg-[#584738] hover:text-white transition">
            Découvrir
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive, ref, onMounted } from 'vue'
  import { supabase } from '@/lib/supabaseClient'
  
  const form = reactive({
    season: '',
    intensity: 1,
    scents: [],
    target: '',
    usage: '',
    memories: [],
    description: ''
  })
  
  const allPerfumes = ref([])
  const recommended = ref([])
  const showRecommendations = ref(false)
  
  onMounted(async () => {
    const { data, error } = await supabase.from('parfums').select('*')
    if (!error) allPerfumes.value = data
  })
  
  function handleSubmit() {
    const matches = allPerfumes.value.filter(p => {
      const scentMatch = form.scents.some(scent => p.tags?.includes(scent))
      const seasonMatch = p.name.toLowerCase().includes(form.season.toLowerCase())
      const descriptionMatch = form.description && p.description?.toLowerCase().includes(form.description.toLowerCase())
      return scentMatch || seasonMatch || descriptionMatch
    })
  
    recommended.value = matches.slice(0, 3)
    showRecommendations.value = true
  }
  </script>
  
 
  