<template>
    <section class="min-h-screen flex flex-col items-center mt-30 mb-10">
        <div class="max-w-3xl mx-auto p-6 bg-[#F1EADA] border border-[#584638] rounded-2xl text-[#584638] font-serif">
            <h1 class="text-center text-2xl font-bold mb-1">Trouvez votre parfum idéal ici !</h1>
            <p class="text-center text-sm mb-6">Laissez nous vous conseillez au mieux à l'aide de vos réponses !!</p>
        
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <fieldset>
                <legend class="font-semibold mb-2">Quelle est votre saison préférée ?</legend>
                <div class="grid grid-cols-2 gap-4">
                    <label v-for="season in ['Printemps', 'Eté', 'Automne', 'Hiver']" :key="season" class="border rounded-xl py-2 px-4 text-center">
                    <input type="radio" v-model="form.season" :value="season" class="mr-2 accent-[#584738]">
                    {{ season }}
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
                    <label v-for="scent in ['Fruitée', 'Sucrée', 'Boisée', 'Épicée']" :key="scent" class="border rounded-xl py-2 px-4 text-center">
                    <input type="checkbox" v-model="form.scents" :value="scent" class="mr-2 accent-[#584738]">
                    {{ scent }}
                    </label>
                </div>
                </fieldset>
        
                <fieldset>
                <legend class="font-semibold mb-2">Pour qui ?</legend>
                <div class="grid grid-cols-2 gap-4">
                    <label v-for="target in ['Un enfant', 'Un adolescent', 'Un adulte', 'Une personne âgée']" :key="target" class="border rounded-xl py-2 px-4 text-center">
                    <input type="radio" v-model="form.target" :value="target" class="mr-2 accent-[#584738]">
                    {{ target }}
                    </label>
                </div>
                </fieldset>
        
                <fieldset>
                <legend class="font-semibold mb-2">Vous l’utiliseriez ?</legend>
                <div class="grid grid-cols-2 gap-4">
                    <label v-for="use in ['Occasionnellement', 'Souvent', 'Pour un évènement', 'Pour le travail']" :key="use" class="border rounded-xl py-2 px-4 text-center">
                    <input type="radio" v-model="form.usage" :value="use" class="mr-2 accent-[#584738]">
                    {{ use }}
                    </label>
                </div>
                </fieldset>
        
                <fieldset>
                <legend class="font-semibold mb-2">Votre souvenir vous évoque le plus ?</legend>
                <div class="grid grid-cols-2 gap-4">
                    <label v-for="memory in ['Bonheur', 'Nostalgie', 'Emerveillement', 'Amusement']" :key="memory" class="border rounded-xl py-2 px-4 text-center">
                    <input type="checkbox" v-model="form.memories" :value="memory" class="mr-2 accent-[#584738]">
                    {{ memory }}
                    </label>
                </div>
                </fieldset>
        
                <fieldset>
                <legend class="font-semibold mb-2">Décrivez nous votre souvenir !!</legend>
                <textarea v-model="form.description" rows="4" class="w-full border rounded-xl p-2"></textarea>
                </fieldset>
        
                <div class="text-center">
                <button type="submit" class="border px-6 py-2 rounded-xl">Valider</button>
                </div>
            </form>
        </div>
    </section>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    season: '',
    intensity: 1,
    scents: [],
    target: '',
    usage: '',
    memories: [],
    description: ''
  })
  
  function handleSubmit() {
    console.log('Réponses envoyées :', form)
    // Navigation, API ou traitement ici
  }
  </script>
  

  