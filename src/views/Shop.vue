<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const router = useRouter();

        const onSwiper = (swiper) => {
            console.log(swiper);
        };

        const handleSquareClick = (id) => {
            router.push({ name: 'product', params: { id } });
        };

        return {
            modules: [Autoplay],
            handleSquareClick,
            onSwiper
        };
    },
};
</script>

<template>
    <section class="h-[75%] flex justify-center mt-[10vh] mb-[10vh] bg-[#B59E7D]">
        <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
    >
    <swiper-slide>
        <div class="flex flex-row justify-center items-center h-full gap-10">
            <img src="../assets/leather_product_big.svg" class="w-[40%] h-[75%] rounded-2xl ml-20 ">
            <div class="flex flex-col justify-start items-start mr-40">
                <h1 class="text-[2.5em] text-[#584738] font-bold">Nouveautés :</h1>
                <h1 class="text-[2.5em] text-[#584738] font-bold">Parfums d'été 2025</h1>
                <p class="text-[1.25em] text-[#584738]">
                    Découvrez toutes les nouveautés des collections automne et été. Laisser vous émerger en vous vos souvenirs préférer à travers ces nouvelles odeurs.
                </p>
                <a href="#collections"class="flex justify-center w-full mt-20">
                    <button class="bg-[#B59E7D] text-[#584738] border border-[#584738] rounded-xl px-6 py-2 text-[1.25em] hover:bg-[#584738] hover:text-white transition duration-300">
                        Découvrir
                    </button>
                </a>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="flex flex-row justify-center items-center h-full gap-10">
            <div class="w-[50%] flex flex-col justify-start items-start ml-20">
                <h1 class="text-[2.5em] text-[#584738] font-bold">De nouveau en stock :</h1>
                <h1 class="text-[2.5em] text-[#584738] font-bold">Collection été 2024</h1>
                <p class="text-[1.25em] text-[#584738]">
                    Laissez vous transporter dans le temps ! Retrouver le calme et vos souvenirs heureux de vos vacances d’été au bord de mer grâce à ces douces odeurs.
                </p>
            </div>
            <div class="w-[20%] h-[45%] bg-[#b59e7d] rounded-2xl flex flex-col items-center p-4 gap-4">
                <img src="../assets/summer_product_big.svg" class="w-[95%] h-auto rounded-2xl">
                <a @click="handleSquareClick(1)" class="w-[60%] bg-[#B59E7D] text-center text-[#584738] border border-[#584738] rounded-xl px-6 py-2 text-[1.25em] hover:bg-[#584738] hover:text-white transition duration-300">
                    <button>
                        Découvrir
                    </button>
                </a>
            </div>
            <div class="w-[20%] h-[45%] bg-[#b59e7d] rounded-2xl flex flex-col items-center p-4 gap-4">
                <img src="../assets/sea_product_big.svg" class="w-[95%] h-auto rounded-2xl">
                <a @click="handleSquareClick(7)" class="w-[60%] bg-[#B59E7D] text-center text-[#584738] border border-[#584738] rounded-xl px-6 py-2 text-[1.25em] hover:bg-[#584738] hover:text-white transition duration-300">
                    <button>
                        Découvrir
                    </button>
                </a>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
  <div class="flex flex-row justify-center items-center h-full gap-80">
    <div class="w-[75%] flex flex-col justify-start items-start ml-20">
      <h1 class="text-[2.5em] text-[#584738] font-bold">Offrez</h1>
      <h1 class="text-[2.5em] text-[#584738] font-bold">Une jolie surprise !</h1>
      <p class="text-[1.25em] text-[#584738]">
        Venez découvrir nos packs cadeaux pour offrir un beau parfum à vos proches, vos amis !
      </p>
      <div class="flex justify-center w-full mt-20">
        <a href="./Gift.vue">
            <button class="bg-[#B59E7D] text-[#584738] border border-[#584738] rounded-xl px-6 py-2 text-[1.25em] hover:bg-[#584738] hover:text-white transition duration-300">
            Découvrir
            </button>
        </a>
      </div>
    </div>

    <div class="w-[50%] h-[75%] bg-[#b59e7d] flex justify-center items-center mt-10">
      <img  src="../assets/box_winter.svg" class="w-[50%] h-[40%] rounded-2xl absolute z-10 mt-15 mr-130"/>
      <div class="relative z-5">
        <img src="../assets/winter_product_big.svg" class="w-[80%] h-[90%] rounded-2xl"/>
      </div>
    </div>
  </div>
</swiper-slide>

  </swiper>
    </section>

    <section class="h-[180vh] justify-center place-items-center">
        <div class="h-[40%] grid grid-cols-3 grid-rows-2 gap-10 w-[50%] mb-4">
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/summer_product.svg" class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(1)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/gingerbread_product.svg" class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(2)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/winter_product.svg" class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(3)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/spring_product.svg" class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(4)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/autumn_product.svg" class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(5)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/citrus_product.svg" class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(6)">
            </div>
        </div>

        <div class="text-center mb-[50px]">
            <h3 class="text-[0.85em] uppercase">Collections</h3>
            <p class="text-[0.65em] uppercase">Explorer</p>
        </div>

        <div class="h-[50%] grid grid-cols-2 gap-6 w-[60%] mb-5">
            <div class="h-[75%] relative">
                <img src="../assets/reduction_img_1.svg" class="w-full h-31/32 object-cover rounded-t-2xl rounded-b-none">
                <div class="absolute bottom-[3%] left-[50%] translate-x-[-50%] flex items-center justify-center text-white text-sm uppercase">
                    En réduction
                </div>
                <h2 class="flex flex-col justify-end uppercase text-[#584738] bg-white text-sm rounded-t-none rounded-b-2xl text-center">Découvrir</h2>
            </div>
            <div class="h-[75%] relative">
                <img src="../assets/reduction_img_2.svg" class="w-full h-31/32 object-cover rounded-t-2xl rounded-b-none">
                <div class="absolute bottom-[3%] left-[50%] translate-x-[-50%] flex items-center justify-center text-[#584738] text-sm uppercase">
                    En réduction
                </div>
                <h2 class="flex flex-col justify-end uppercase text-white bg-[#584738] text-sm rounded-t-none rounded-b-2xl text-center">Découvrir</h2>
            </div>
</div>

        <div class="h-[15%] w-[60%] grid grid-cols-3 place-items-center gap-6 mb-4">
            <div class="h-full w-[65%] bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/lavender_product.svg" class="rounded-2xl transition duration-500 hover:grayscale cursor-pointer p-1" @click="handleSquareClick(7)">
            </div>
            <div class="h-full w-[65%] bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/leather_product.svg" class="rounded-2xl transition duration-500 hover:grayscale cursor-pointer p-1" @click="handleSquareClick(8)">
            </div>
            <div class="h-full w-[65%] bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/sea_product.svg" class="rounded-2xl transition duration-500 hover:grayscale cursor-pointer p-1" @click="handleSquareClick(9)">
            </div>
        </div>
    </section>

    <section id="packs" class="relative mt-100 h-screen flex-column mb-[50px]">
        <Swiper class="h-full bg-[#AAA396]" :slides-per-view="1" @swiper="onSwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>

        <div class="absolute flex flex-col justify-end bottom-2 left-1/2 transform -translate-x-1/2 text-center z-10">
            <h3 class="text-[0.85em] uppercase">Packs</h3>
            <p class="text-[0.65em] uppercase">Explorer</p>
        </div>
    </section>

    <section id="collections" class="h-[50vh] place-items-center">
        <div class="h-[90%] grid grid-cols-4 gap-6 w-[80%] mb-[50px]">
            <div class="flex flex-col justify-center gap-[5px]" @click="handleSquareClick('1')">
                <div class="h-full bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                    <img src="../assets/box_spring.svg" class="rounded-2xl">
                </div>
                <div class="text-center uppercase">
                    <p>Printemps</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]" @click="handleSquareClick('2')">
                <div class="h-full bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                    <img src="../assets/box_summer.svg" class="rounded-2xl">
                </div>
                <div class="text-center uppercase">
                    <p>Été</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]" @click="handleSquareClick('3')">
                <div class="h-full bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                    <img src="../assets/box_autumn.svg" class="rounded-2xl">
                </div>
                <div class="text-center uppercase">
                    <p>Automne</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]" @click="handleSquareClick('4')">
                <div class="h-full bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                    <img src="../assets/box_winter.svg" class="rounded-2xl">
                </div>
                <div class="text-center uppercase">
                    <p>Hiver</p>
                </div>
            </div>
        </div>
    </section>
</template>