<template>
  <Swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper">
    <SwiperSlide class="text-center">Slide 1</SwiperSlide>
    <SwiperSlide class="text-center">Slide 2</SwiperSlide>
    <SwiperSlide class="text-center">Slide 3</SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    return {
      onSwiper
    };
  },
}
</script>
