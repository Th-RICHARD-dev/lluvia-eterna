<template>
  <section class="h-screen flex justify-center items-end mt-[10vh] relative">
    <img :src="product.header_image" class="w-full h-full object-cover" />

    <div
      class="absolute left-1/2 -translate-x-1/2 mb-[2vh] text-center text-white flex flex-col items-center"
    >
      <div class="absolute inset-0 bg-black/20 blur-sm rounded-md -z-10"></div>

      <h3 class="text-[0.75rem] font-bold uppercase">Collection {{ product.collection }}</h3>
      <p class="text-xs font-light uppercase">Explorer</p>
    </div>
  </section>

  <section class="h-auto flex flex-col items-center relative">
    <img
      src="@/assets/ornament.svg"
      alt="ornament"
      class="w-[300px] absolute left-[30px] top-[30px]"
    />
    <h1 class="text-[1.5em] font-bold text-center uppercase mt-10 mb-30 font-[Arial]">
      Type de produit
    </h1>
    <div class="h-auto w-[85%] flex flex-row justify-center gap-20 mb-5 p-5">
      <div
        class="h-[100vh] w-[50%] bg-gradient-to-tr from-[#B59E7D] to-[#89765B] rounded-2xl flex flex-col justify-between items-center gap-2 p-5"
      >
        <h2 class="text-[1.5em] font-bold text-center uppercase">{{ product.nom }}</h2>
        <img :src="product.image" class="w-[85%] h-[100%] rounded-2xl" />
        <h2 class="text-[1.5em] font-bold text-center uppercase">{{ product.prix }}</h2>
      </div>
      <div class="flex flex-col justify-start items-center w-[40%] gap-5">
        <h2 class="text-[1.5em] font-bold uppercase">Description</h2>
        <div class="flex flex-row justify-between items-center w-full">
          <div
            v-for="(volume, index) in volumes"
            :key="index"
            class="h-[10vh] w-[20%] mb-4 bg-gradient-to-tr from-[#B59E7D] to-[#89765B] rounded-xl flex justify-center items-center cursor-pointer"
            @click="selectVolume(volume)"
          >
            <p class="text-center text-[1.25rem] font-bold uppercase text-white">{{ volume }} ml</p>
          </div>
        </div>
        <p class="uppercase text-center font-bold text-[0.95rem]">
          {{ product.description }}<br />
        </p>
      </div>
    </div>
    <img
      src="@/assets/ornament.svg"
      alt="ornament"
      class="w-[300px] absolute right-[30px] bottom-[30px] rotate-180"
    />
  </section>

  <section class="mb-30">
    <h1 class="text-[1.5em] font-bold text-center uppercase mt-10 mb-30 font-[Arial]">
      Autres Collections
    </h1>

    <Slider></Slider>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import { useProductStore } from '@/stores/products'
import Slider from '@/components/slider.vue'

const productStore = useProductStore()
const route = useRoute()
const id = computed(() => route.params.id)

const product = computed(() => productStore.parfums.find((p) => p.id === id.value))

onMounted(async () => {
  if (productStore.parfums.length === 0) {
    await productStore.fetchProducts()
  }
})
// Liste statique des volumes disponibles (tu peux remplacer cela par une donnée dynamique si nécessaire)
const volumes = [50, 100, 150] // Exemple : 50 ml, 100 ml, 150 ml

// Ajoute un ref pour suivre le volume sélectionné
const selectedVolume = ref(null)

// Fonction pour gérer la sélection d'un volume
const selectVolume = (volume) => {
  selectedVolume.value = volume
}
</script>
