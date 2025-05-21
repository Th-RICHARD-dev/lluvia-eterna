<template>
  <div v-if="product">
    <section class="video-section h-screen flex justify-center items-end mt-[10vh] relative">
      <video :src="product.video" class="w-full h-full object-cover" autoplay loop muted></video>

      <div
        class="absolute left-1/2 -translate-x-1/2 mb-[2vh] text-center text-white flex flex-col items-center"
      >
        <div class="absolute inset-0 bg-black/20 blur-sm rounded-md -z-10"></div>

        <h3 class="text-[0.75rem] font-bold uppercase">Collection</h3>
        <p class="text-xs font-light uppercase">Explorer</p>
      </div>
    </section>

    <section class="h-auto flex flex-col items-center relative">
      <img
        src="@/assets/ornament.svg"
        alt="ornament"
        class="md:block hidden w-[300px] absolute left-[30px] top-[30px]"
      />
      <h1 class="text-[1.5em] font-bold text-center uppercase mt-10 mb-30 font-[Arial]">
        Type de produit
      </h1>
      <div class="product-block h-auto w-[85%] flex flex-row justify-center md:gap-20 gap-5 mb-5 p-5">
        <div
          class="h-[100vh] w-[50%] bg-gradient-to-tr from-[#B59E7D] to-[#89765B] rounded-2xl flex flex-col justify-between items-center gap-2 p-5"
        >
          <h2 class="text-[1.25em] font-bold text-center uppercase">{{ product.name }}</h2>
          <img :src="product.image" class="w-[85%] h-[100%] rounded-2xl" />
          <h2 class="text-[1.5em] font-bold text-center uppercase">{{ product.price }} €</h2>
        </div>
        <div class="flex flex-col justify-start items-center w-[40%] gap-5">
          <h2 class="md:text-[1.5em] text-[1em] font-bold uppercase">Description</h2>
          <div class="flex md:flex-row flex-col md:gap-5 gap-5 justify-between items-center w-full">
            <div
              v-for="(volume, index) in volumes"
              :key="index"
              class="volume-option h-[10vh] mb:w-[25%] w-[100%] md:mb-4 mb-0 bg-gradient-to-tr from-[#B59E7D] to-[#89765B] rounded-xl flex justify-center items-center cursor-pointer"
              @click="selectVolume(volume)"
            >
              <p class="text-center md:text-[1.25rem] text-[1em] font-bold uppercase text-white">{{ volume }} ml</p>
            </div>
          </div>
          <p class="text-left md:text-[1.25rem] text-[0.75rem]">
            {{ product.description }}<br />
          </p>
          <button 
          class="add-to-cart-btn h-[7.5vh] md:w-[65%] w-[100%] bg-gradient-to-tr bg-[#B59E7D] rounded-2xl border-2 border-solid border-[#584738] flex justify-center items-center cursor-pointer md:mt-20 mt-5 group hover:bg-[#584738] hover:border-[#B59E7D] transition duration-300" 
          @click="() => { cart.addToCart({ id: product.id, nom: product.name, image: product.image, price: product.price }); handleButtonClick(); }"
        >
          <p class="text-center md:text-[1.5rem] text[1rem] text-[#584738] group-hover:text-[#B59E7D] transition-colors duration-300">{{ buttonText }}</p>
        </button>
        </div>
      </div>
      <img
        src="@/assets/ornament.svg"
        alt="ornament"
        class="md:block hidden w-[300px] absolute right-[30px] bottom-[-30px] rotate-180"
      />
    </section>

    <section class="mb-30">
      <h1 class="text-[1.5em] font-bold text-center uppercase mt-10 mb-30 font-[Arial]">
        Autres Collections
      </h1>

      <Slider />
    </section>
  </div>
  <div v-else-if="error">
    <div class="text-red-500 text-center py-20">{{ error }}</div>
  </div>
  <div v-else>
    <div class="text-center text-gray-500 py-20">Chargement du produit...</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, watch, nextTick, computed } from 'vue'
import { useProductStore } from '@/stores/products'
import Slider from '@/components/slider.vue'
import { useCartStore } from '@/stores/cart'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const buttonText = ref("Ajouter au panier")

const handleButtonClick = () => {
  buttonText.value = "Ajouté !";
};

const cart = useCartStore()
const productStore = useProductStore()
const route = useRoute()
const product = ref(null)

const loadProduct = async () => {
  if (productStore.parfums.length === 0) {
    await productStore.fetchProducts()
  }
  const found = productStore.parfums.find((p) => p.id === Number(route.params.id))
  if (!found) {
    productStore.error = "Produit introuvable."
  }
  product.value = found
}

onMounted(async () => {
  await loadProduct()
  await nextTick()

  gsap.from('.video-section', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power2.out',
  })

  gsap.from('.product-block', {
    scrollTrigger: {
      trigger: '.product-block',
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
  })

  gsap.from('.volume-option', {
    scrollTrigger: {
      trigger: '.volume-option',
      start: 'top 90%',
    },
    scale: 0.8,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6,
  })

  gsap.from('.add-to-cart-btn', {
    scrollTrigger: {
      trigger: '.add-to-cart-btn',
      start: 'top 95%',
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
  })
})

watch(() => route.params.id, loadProduct)

const volumes = [50, 100, 150]
const selectedVolume = ref(null)
const selectVolume = (volume) => {
  selectedVolume.value = volume
}

console.log('route id:', route.params.id)
console.log('parfums:', productStore.parfums)
console.log('produit trouvé:', product.value)

</script>

<style scoped>
</style>