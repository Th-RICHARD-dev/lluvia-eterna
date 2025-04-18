<template>
  <img src="../assets/history_header_img.svg" alt="history" class="w-full h-[100vh] object-cover">
  <div class="w-full">
    <svg width="100%" height="100%" viewBox="0 0 1920 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <!-- line 1 -->
      <rect x="236.281" y="8.05591" width="65.4053" height="13" transform="rotate(90.2461 236.281 8.05591)"
        fill="#584738" />
      <rect x="236.281" y="106.056" width="65.4053" height="13" transform="rotate(90.2461 236.281 106.056)"
        fill="#584738" />
      <rect x="236.281" y="204.056" width="65.4053" height="13" transform="rotate(90.2461 236.281 204.056)"
        fill="#584738" />
      <circle cx="230" cy="282" r="30" :fill="circleColors[0]" @click="toggleCircleColor(0)" />
      <text x="230" y="340" fill="#584738" font-size="30" text-anchor="middle" alignment-baseline="middle">
        <tspan x="230" dy="20">1990 : Idées et concepts</tspan>
        <tspan x="230" dy="1.2em">sur le souvenir</tspan>
      </text>

      <!-- line 2 -->
      <rect x="757.281" y="8.05591" width="65.4053" height="13" transform="rotate(90.2461 757.281 8.05591)"
        fill="#584738" />
      <rect x="757.281" y="106.056" width="65.4053" height="13" transform="rotate(90.2461 757.281 106.056)"
        fill="#584738" />
      <circle cx="751" cy="182" r="30" :fill="circleColors[1]" @click="toggleCircleColor(1)" />
      <text x="751" y="240" fill="#584738" font-size="30" text-anchor="middle" alignment-baseline="middle">
        <tspan x="751" dy="20">1992 : Ouverture</tspan>
        <tspan x="751" dy="1.2em">officielle</tspan>
      </text>

      <!-- line 3 -->
      <rect x="1246.28" y="106.038" width="65.4053" height="13" transform="rotate(90.2461 1246.28 106.038)"
        fill="#584738" />
      <rect x="1246.28" y="8.05591" width="65.4053" height="13" transform="rotate(90.2461 1246.28 8.05591)"
        fill="#584738" />
      <rect x="1246.28" y="204.038" width="65.4053" height="13" transform="rotate(90.2461 1246.28 204.038)"
        fill="#584738" />
      <circle cx="1240" cy="288" r="30" :fill="circleColors[2]" @click="toggleCircleColor(2)" />
      <text x="1240" y="340" fill="#584738" font-size="30" text-anchor="middle" alignment-baseline="middle">
        <tspan x="1240" dy="20">2008 : augmentation</tspan>
        <tspan x="1240" dy="1.2em">des offres</tspan>
      </text>

      <!-- line 4 -->
      <rect x="1722.28" y="4.05591" width="65.4053" height="13" transform="rotate(90.2461 1722.28 4.05591)"
        fill="#584738" />
      <rect x="1722.28" y="102.056" width="65.4053" height="13" transform="rotate(90.2461 1722.28 102.056)"
        fill="#584738" />
      <circle cx="1716" cy="183" r="30" :fill="circleColors[3]" @click="toggleCircleColor(3)" />
      <text x="1716" y="240" fill="#584738" font-size="30" text-anchor="middle" alignment-baseline="middle">
        <tspan x="1716" dy="20">2016 : création du</tspan>
        <tspan x="1716" dy="1.2em">site internet</tspan>
      </text>

      <line y1="4.05566" x2="1920" y2="4.05566" stroke="#584738" stroke-width="8" />
    </svg>
  </div>
  <h3 class="text-center text-2xl mb-10 mt-[75px]">Notre histoire</h3>
  <p class="text-center mx-100">
    Lluvia Eterna : L’essence d’un instant suspendu
    Née de la rencontre entre la nature et l’émotion pure, Lluvia Eterna est bien plus qu’une marque de parfum : c’est
    une invitation à voyager dans le temps, là où chaque goutte de pluie porte en elle un souvenir indélébile.
    Inspirée par la poésie des averses éternelles et la fraîcheur de l’instant présent, Lluvia Eterna capture l’essence
    de ces moments fugaces où la pluie caresse la peau, réveille les sens et ravive les émotions enfouies. Chaque
    fragrance est une harmonie subtile entre la douceur de l’eau et la puissance des éléments, offrant une expérience
    olfactive à la fois intense et délicate.
    Nos créations sont élaborées avec les ingrédients les plus précieux, choisis avec soin pour leur pureté et leur
    authenticité. Chaque note raconte une histoire, chaque senteur évoque un souvenir, chaque flacon renferme une
    émotion.
    Lluvia Eterna, c’est la promesse d’une pluie infinie, d’un frisson intemporel et d’une élégance qui traverse les
    âges.
    Découvrez l’âme de la pluie, laissez-vous emporter par l’éternité.
  </p>
  <h3 class="text-center text-2xl mb-10 mt-10">L'équipe</h3>
  <swiper :slidesPerView="3" :spaceBetween="30" :freeMode="true" :modules="modules"
    class="mySwiper h-[50vh] gap-4 w-[90%] mb-20">
    <swiper-slide class="bg-[#D9D9D9] rounded-2xl">
      <img src="../assets/mahe_pp.svg" class="w-full h-2/3 object-cover rounded-2xl">
      <div class="absolute inset-0 flex items-center text-white text-lg font-semibold ml-3 mt-14 uppercase">
        Mahé Chetibi
      </div>
      <h3 class="ml-5 mt-5 uppercase">Designer</h3>
    </swiper-slide>
    <swiper-slide class="bg-[#D9D9D9] rounded-2xl">
      <img src="../assets/evann_pp.svg" class="w-full h-2/3 object-cover rounded-2xl">
      <div class="absolute inset-0 flex items-center text-white text-lg font-semibold ml-3 mt-14 uppercase">
        Evann Amorin
      </div>
      <h3 class="ml-5 mt-5 uppercase">Developpeur</h3>
    </swiper-slide>
    <swiper-slide class="bg-[#D9D9D9] rounded-2xl">
      <img src="../assets/basile_pp.svg" class="w-full h-2/3 object-cover rounded-2xl">
      <div class="absolute inset-0 flex items-center text-white text-lg font-semibold ml-3 mt-14 uppercase">
        Basile Duarte
      </div>
      <h3 class="ml-5 mt-5 uppercase">Developpeur</h3>
    </swiper-slide>
    <swiper-slide class="bg-[#D9D9D9] rounded-2xl">
      <img src="../assets/thomas_pp.svg" class="w-full h-2/3 object-cover rounded-2xl">
      <div class="absolute inset-0 flex items-center text-white text-lg font-semibold ml-3 mt-14 uppercase">
        Thomas Richard
      </div>
      <h3 class="ml-5 mt-5 uppercase">Developpeur</h3>
    </swiper-slide>
    <swiper-slide class="bg-[#D9D9D9] rounded-2xl">
      <img src="../assets/cecile_pp.svg" class="w-full h-2/3 object-cover rounded-2xl">
      <div class="absolute inset-0 flex items-center text-white text-lg font-semibold ml-3 mt-14 uppercase">
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
  data() {
    return {
      circleColors: ["#584738", "#584738", "#584738", "#584738"],
    };
  },
  methods: {
    toggleCircleColor(index) {
      this.circleColors[index] =
        this.circleColors[index] === "#584738" ? "#B59E7D" : "#584738";
    },
  },
};
</script>