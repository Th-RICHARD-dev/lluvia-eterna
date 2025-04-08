<template>
  <Swiper :slides-per-view="3" :space-between="50" :freeMode="true" :loop="true" :modules="modules">
    <SwiperSlide v-for="product in products" :key="product.id" class="text-center">
      <div v-if="isImage(product.image)">
        <img :src="product.image" :alt="product.nom" />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import productsData from '../assets/products.json';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const products = productsData;

    const isImage = (imagePath) => {
      return imagePath && imagePath.trim() !== '';
    };

    return {
      products,
      isImage,
      modules: [FreeMode],
    };
  },
};
</script>
