<template>
  <div class="relative">
    <div id="top" style="clip-path: ellipse(75% 50% at 50% 20%);"
      class="absolute w-full h-[25vh] top-[-20%] z-50 bg-[url('./background.svg')] left-0"></div>
    <Swiper :slides-per-view="3" :space-between="50" :freeMode="true" :loop="true" :modules="modules">
      <SwiperSlide v-for="product in products" :key="product.id" class="text-center">
        <div v-if="isImage(product.image)" class="cursor-pointer" @click="navigateToProduct(product.id)">
          <img :src="product.image" :alt="product.nom" class="w-full h-auto" />
        </div>
      </SwiperSlide>
    </Swiper>
    <div id="bottom" style="clip-path: ellipse(75% 50% at 50% 80%);"
      class="absolute w-full h-[25vh] bottom-[-20%] z-50 bg-[url('./background.svg')] left-0"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { useRouter } from 'vue-router';
import productsData from '../data/products.json';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const router = useRouter();
    const products = productsData;

    const isImage = (imagePath) => {
      return imagePath && imagePath.trim() !== '';
    };

    const navigateToProduct = (id) => {
      router.push({ name: 'product', params: { id } }).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    };

    return {
      products,
      isImage,
      navigateToProduct,
      modules: [FreeMode],
    };
  },
};
</script>
