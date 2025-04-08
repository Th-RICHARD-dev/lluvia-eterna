<template>
    <section class="h-screen flex justify-center items-end mt-[10vh] bg-[#aaa396]">
    </section>
    <section class="h-[180vh] flex flex-col items-center">
        <h1 class="text-[2.5em] font-bold text-center uppercase mt-10 mb-50 font-[Arial]">Type de produit</h1>
        <div class="h-[50%] w-[85%] mb-4 flex flex-row gap-20 p-5">
            <!-- Golden square -->
            <div class="h-[80%] w-[50%] mt-20 ml-10 bg-[#b59e7d] rounded-2xl flex flex-col justify-between items-center gap-2 p-5">
                <h2 class="text-[1.5em] font-bold text-center uppercase">{{product.nom}}</h2>
                <img :src="product.image" class="w-[61%] h-[75%] rounded-2xl">
                <h2 class="text-[1.5em] font-bold text-center uppercase">{{product.prix}}</h2>
            </div>
            <div class="flex flex-col justify-start items-center w-[37%] mt-25 gap-5">
                <h2 class="text-[1.5em] font-bold uppercase">Description</h2>
                <div class="flex flex-row justify-between items-center w-full mt-10">
                    <!-- Render volumes dynamically -->
                    <div 
                        v-for="(volume, index) in volumes" 
                        :key="index"
                        class="h-[7.5vh] w-[20%] mb-4 bg-[#969696] rounded-2xl flex justify-center items-center cursor-pointer"
                        @click="selectVolume(volume)"
                    >
                        <p class="text-center text-[1.25rem] font-bold uppercase text-white">
                            {{ volume }} ml
                        </p>
                    </div>
                </div>
                <p class="uppercase text-center font-bold text-[1.25rem]">
                    {{product.description}}<br>
                </p>
            </div>
        </div>

        <!-- Block to display selected volume -->
        <div class="flex flex-row justify-between items-center w-[90%] mt-10">
            <div class="h-[15vh] w-[20%] mb-4 bg-[#D9D9D9] rounded-2xl flex justify-center items-center">
                <p class="text-center text-[2.25rem] font-bold uppercase">
                    {{ selectedVolume ? selectedVolume + ' ml' : 'Sélectionner un volume' }}
                </p>
            </div>
            <div class="h-[15vh] w-[20%] mb-4 bg-[#D9D9D9] rounded-2xl flex justify-center items-center">
                <p class="text-center text-[2.25rem] font-bold uppercase ">Collection {{ product.collection }}</p>
            </div>
            <div class="h-[15vh] w-[20%] mb-4 bg-[#D9D9D9] rounded-2xl flex justify-center items-center">
                <p class="text-center text-[2.25rem] font-bold uppercase">Ajouter au panier</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

import products from '@/assets/products.json'
import Slider from '@/components/slider.vue'

const route = useRoute()
const id = computed(() => route.params.id)

const product = computed(() =>
    products.find(p => p.id === id.value)
)

// Liste statique des volumes disponibles (tu peux remplacer cela par une donnée dynamique si nécessaire)
const volumes = [50, 100, 150] // Exemple : 50 ml, 100 ml, 150 ml

// Ajoute un ref pour suivre le volume sélectionné
const selectedVolume = ref(null)

// Fonction pour gérer la sélection d'un volume
const selectVolume = (volume) => {
    selectedVolume.value = volume
}
</script>
