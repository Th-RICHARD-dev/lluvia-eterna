<template>
  <div class="relative">
    <div
      id="top"
      style="clip-path: ellipse(75% 50% at 50% 20%)"
      class="absolute w-full h-[25vh] sm:top-[-20%] top-[-60%] z-50 bg-[url('./background.svg')] left-0"
    ></div>
    <Swiper
      :slides-per-view="3"
      :space-between="50"
      :freeMode="true"
      :loop="true"
      :modules="modules"
      :breakpoints="{
        0: { slidesPerView: 2 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
    >
      <SwiperSlide v-for="product in products" :key="product.id" class="text-center">
        <div
          v-if="isImage(product.image)"
          class="cursor-pointer"
          @click="navigateToProduct(product.id)"
        >
          <img :src="product.image" :alt="product.nom" class="w-full h-auto" />
        </div>
      </SwiperSlide>
    </Swiper>
    <div
      id="bottom"
      style="clip-path: ellipse(75% 50% at 50% 80%)"
      class="absolute w-full h-[25vh] sm:bottom-[-20%] bottom-[-60%] z-50 bg-[url('./background.svg')] left-0"
    ></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/products'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const router = useRouter()
    const productStore = useProductStore()
    const products = productStore.parfums

    if (products.length === 0) {
      productStore.fetchProducts()
    }

    const isImage = (imagePath) => {
      return imagePath && imagePath.trim() !== ''
    }

    const navigateToProduct = (id) => {
      router.push({ name: 'product', params: { id } }).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    }

    return {
      products,
      isImage,
      navigateToProduct,
      modules: [FreeMode],
    }
  },
}
</script>
