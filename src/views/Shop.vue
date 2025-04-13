<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';

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
            handleSquareClick,
            onSwiper
        };
    },
};
</script>

<template>
    <section class="h-screen flex justify-center items-end mt-[10vh] mb-[10vh] bg-[#aaa396]">
        <div
            class="absolute left-1/2 bottom-[50px] -translate-x-1/2 text-center text-black flex flex-col items-center ">
            <h3 class="text-[0.75rem] font-bold uppercase">Produit du jour</h3>
            <p class="text-xs font-light uppercase">Explorer</p>
        </div>
    </section>

    <section class="h-[180vh] justify-center place-items-center">
        <div class="h-[40%] grid grid-cols-3 grid-rows-2 gap-10 w-[40%] mb-4">
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-5">
                <img src="../assets/summer_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(1)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-5">
                <img src="../assets/gingerbread_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(2)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-5">
                <img src="../assets/winter_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(3)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-5">
                <img src="../assets/spring_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(4)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-5">
                <img src="../assets/autumn_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(5)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-5">
                <img src="../assets/citrus_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer" @click="handleSquareClick(6)">
            </div>
        </div>

        <div class="text-center mb-[50px]">
            <h3 class="text-[0.85em] uppercase">Collections</h3>
            <p class="text-[0.65em] uppercase">Explorer</p>
        </div>

        <div class="h-[50%] grid grid-cols-2 gap-6 w-[60%] mb-[10%]">
            <div class="h-full bg-white rounded-2xl relative">
                <img src="../assets/reduction_img_1.svg" class="w-full h-31/32 object-cover rounded-2xl">
                <div class="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold mt-125 uppercase">
                    En réduction
                </div>
                <h2 class="flex justify-center uppercase text-sm">Découvrir</h2>
            </div>
            <div class="h-full bg-[#584738] rounded-2xl relative">
                <img src="../assets/reduction_img_2.svg" class="w-full h-31/32 object-cover rounded-2xl">
                <div class="absolute inset-0 flex items-center justify-center text-[#584738] text-sm font-semibold mt-125 uppercase">
                    En réduction
                </div>
                <h2 class="flex justify-center uppercase text-white text-sm">Découvrir</h2>
            </div>
</div>

        <div class="h-[15%] grid grid-cols-3 place-items-center gap-6 w-[60%] mb-4">
            <div class="h-full w-[65%] bg-[#b59e7d] rounded-2xl flex justify-center mx-8 p-4">
                <img src="../assets/lavender_product.svg"
                    class="rounded-2xl transition duration-500 hover:grayscale cursor-pointer"
                    @click="handleSquareClick(7)">
            </div>
            <div class="h-full w-[65%] bg-[#b59e7d] rounded-2xl flex justify-center mx-8 p-4">
                <img src="../assets/leather_product.svg"
                    class="rounded-2xl transition duration-500 hover:grayscale cursor-pointer"
                    @click="handleSquareClick(8)">
            </div>
            <div class="h-full w-[65%] bg-[#b59e7d] rounded-2xl flex justify-center mx-8 p-4">
                <img src="../assets/sea_product.svg"
                    class="rounded-2xl transition duration-500 hover:grayscale cursor-pointer"
                    @click="handleSquareClick(9)">
            </div>
        </div>
    </section>

    <section id="packs" class="mt-150 h-screen flex-column mb-[50px]">
        <Swiper class="h-full bg-[#999999]" :slides-per-view="1" @swiper="onSwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>

        <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center z-10">
            <h3 class="text-[0.85em] uppercase">Packs</h3>
            <p class="text-[0.65em] uppercase">Explorer</p>
        </div>
    </section>

    <section class="h-[50vh] place-items-center">
        <div class="h-[90%] grid grid-cols-4 gap-6 w-[80%] mb-[50px]">
            <div class="flex flex-col justify-center gap-[5px]" @click="handleSquareClick('1')">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Produit 1</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]" @click="handleSquareClick('2')">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Produit 2</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]" @click="handleSquareClick('3')">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Produit 3</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]" @click="handleSquareClick('4')">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Produit 4</p>
                </div>
            </div>
        </div>
    </section>
</template>
