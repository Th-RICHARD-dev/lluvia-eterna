<!--<template>
    svg width="100%" height="1000vh" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100%" height="1000vh" fill="rgba(255,255,255,0.8199)" />

      <rect x="0" y="0" width="100%" height="200" fill="lightgray" />
      <rect x="0" y="10" width="100%" height="5" fill="gray" />
      <rect x="0" y="20" width="100%" height="5" fill="gray" />
  
      <g v-for="(item, index) in suspensions" :key="index">
        <line 
          :x1="item.x" :y1="30" 
          :x2="item.x" :y2="item.y" 
          stroke="gray" stroke-dasharray="5,5" 
          stroke-width="2"
        />
        <circle 
          :cx="item.x" :cy="item.y" 
          :r="30" 
          :fill="item.color" 
          @click="toggleColor(index)" 
          style="cursor: pointer;" 
        />
      </g>
    </svg>-->
  <!--</template>
  
  <script>-->
  <!--export default {
    data() {
      return {
        suspensions: [
          { x: 100, y: 150, color: "gray" },
          { x: 750, y: 150, color: "gray" },
          { x: 1250, y: 170, color: "gray" },
          { x: 1750, y: 150, color: "gray" }
        ]
      };
    },
    methods: {
      toggleColor(index) {
        this.suspensions[index].color = this.suspensions[index].color === "gray" ? "red" : "gray";
      }
    }
  };
  </script>

<style scoped>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>-->


<template>
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :freeMode="true"
      :modules="modules"
      class="mySwiper mt-42 h-[50vh] gap-4 w-[90%] mb-4"
    >
      <swiper-slide class="bg-[#D9D9D9] rounded-2xl">
        <img src="../assets/mahe_pp.svg" class="w-full h-2/3 object-cover rounded-2xl">
        <div class="absolute inset-0 flex items-center text-white text-lg font-semibold ml-3 mt-10 uppercase">
          Mahé Chetibi
        </div>
        <h3 class="ml-5 mt-5 uppercase">Designer</h3>
      </swiper-slide>
      <swiper-slide class="bg-[#D9D9D9] rounded-2xl">
        <img src="../assets/evann_pp.svg" class="w-full h-2/3 object-cover rounded-2xl">
        <div class="absolute inset-0 flex items-center text-white text-lg font-semibold ml-3 mt-10 uppercase">
          Evann Amorin
        </div>
        <h3 class="ml-5 mt-5 uppercase">Developpeur</h3>
      </swiper-slide>
      <swiper-slide class="bg-[#D9D9D9] rounded-2xl">
        <img src="../assets/basile_pp.svg" class="w-full h-2/3 object-cover rounded-2xl">
        <div class="absolute inset-0 flex items-center text-white text-lg font-semibold ml-3 mt-10 uppercase">
          Basile Duarte
        </div>
        <h3 class="ml-5 mt-5 uppercase">Developpeur</h3>
      </swiper-slide>
      <swiper-slide class="bg-[#D9D9D9] rounded-2xl">
        <img src="../assets/thomas_pp.svg" class="w-full h-2/3 object-cover rounded-2xl">
        <div class="absolute inset-0 flex items-center text-white text-lg font-semibold ml-3 mt-10 uppercase">
          Thomas Richard
        </div>
        <h3 class="ml-5 mt-5 uppercase">Developpeur</h3>
      </swiper-slide>
      <swiper-slide class="bg-[#D9D9D9] rounded-2xl">
        <img src="../assets/cecile_pp.svg" class="w-full h-2/3 object-cover rounded-2xl">
        <div class="absolute inset-0 flex items-center text-white text-lg font-semibold ml-3 mt-10 uppercase">
          Cécile Guibet
        </div>
        <h3 class="ml-5 mt-5 uppercase">Designer</h3>
      </swiper-slide>
    </swiper>
  </template>
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    import 'swiper/css';
  
    import 'swiper/css/free-mode';
    import 'swiper/css/pagination';
  
  
    import { FreeMode, Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [FreeMode, Pagination],
        };
      },
    };
  </script>