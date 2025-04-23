<template>
    <div class="flex flex-col lg:flex-row gap-8 bg-[#F8F8F8] p-10 shadow-sm">
        <div class="w-full lg:w-1/2 flex flex-col gap-4">
            <img :src="pack.image" class="w-full h-full object-cover" />
    
            <div class="grid grid-cols-2 gap-2">
            <img v-for="(img, i) in pack.images" :key="i" :src="img" class="h-full object-cover w-full" />
            </div>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col justify-between items-center">
            <div class="flex flex-col justify-center items-center">
                <h1 class="text-3xl mb-2">{{ pack.name }}</h1>
                <p class="uppercase text-sm text-gray-500 mb-4">Eau de parfum mixte · notes olfactives</p>
            
                <div class="flex items-center gap-2 mb-4">
                    <p class="text-sm">★★★★★</p>
                    <span class="text-xs underline text-gray-500 cursor-pointer">112 avis</span>
                </div>

                <p class="mb-2 text-sm text-[#7C8386]">Ce produit existe en 3 tailles</p>
                <div class="flex gap-2 mb-10">
                    <button v-for="size in [50, 100, 200]" :key="size" class="px-4 py-2 border rounded-lg text-sm hover:bg-[#B59E7D]">{{ size }} ml</button>
                </div>
            
                <div class="flex flex-col justify-center items-center space-y-2 mb-6">
                    <div
                    v-for="parfum in parfums"
                    :key="parfum.id"
                    class="w-[75%] flex items-center gap-4 shadow-xl rounded-lg p-2 bg-white"
                    >
                    <img :src="parfum.image" class="w-12 h-12 object-cover rounded" />
                    <div class="flex flex-row items-center">
                        <p class="text-sm font-semibold text-black">Parfum {{ parfum.name }}</p>
                    </div>
                    </div>
                </div>

                <div class="text-xs text-gray-500 mb-4">
                    <p>Payer en 4x dès {{ (pack.price / 4).toFixed(2) }}€ sans frais. En savoir plus.</p>
                </div>
                <button class="w-full flex flex-row justify-center items-center bg-[#89755C] text-white px-6 py-3 rounded-xl text-sm font-bold gap-[45%]">
                    Commander
                    <p class="text-sm font-semibold">{{ pack.price.toFixed(2) }} €</p>
                </button>       
            </div>
            
            <div class="flex-flex-col mt-10 text-sm leading-6 text-[#333]">
                <h2>Description</h2>
                <hr class="mb-4">
                <p class="text-gray-500 mb-20 whitespace-pre-line">{{ pack.description }}</p>
                <h2 class="mt-6">Le Mot du Parfumeur</h2>
                <hr class="mb-4">
                <p class="text-gray-500 italic whitespace-pre-line">{{ pack.perfumeMan_word }}</p>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    pack: Object,
    parfums: Array
  })
  </script>
  
  