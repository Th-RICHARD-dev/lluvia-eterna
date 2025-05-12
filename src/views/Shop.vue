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

        const handlePacksClick = (id) => {
            router.push({ name: 'packs', params: { id } });
        };
        return {
            modules: [Autoplay],
            handleSquareClick,
            handlePacksClick,
            onSwiper
        };
    },
};
</script>

<template>
    <section class="h-[80vh] flex justify-center mt-[10vh] mb-[10vh] bg-[#B59E7D]">
        <swiper :spaceBetween="30" :navigation="true" :centeredSlides="true" :modules="modules" class="mySwiper">
            <swiper-slide>
                <div class="h-full flex justify-center items-center p-10 gap-10">
                    <div>
                        <img src="../assets/leather_product_big.svg" class="rounded-2xl">
                    </div>
                    <div>
                        <h1 class="md:text-[2.5em] text-[1.5em] text-[#584738] font-bold">Nouveautés :</h1>
                        <h1 class="md:text-[2.5em] text-[1.5em] text-[#584738] font-bold">Parfums d'été 2025</h1>
                        <p class="md:text-[1.25em] text-[0.75em] text-[#584738]">
                            Découvrez toutes les nouveautés des collections automne et été. Laisser vous émerger en vous
                            vos souvenirs préférer à travers ces nouvelles odeurs.
                        </p>
                        <a href="#collections">
                            <button
                                class="bg-[#B59E7D] text-[#584738] border border-[#584738] rounded-xl px-6 py-2 md:text-[1.25em] text-[0.75em] hover:bg-[#584738] hover:text-white transition duration-300">
                                Découvrir
                            </button>
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="h-full flex justify-center items-center p-10 gap-10">
                    <div>
                        <h1 class="md:text-[2.5em] text-[1.5em] text-[#584738] font-bold">De nouveau en stock :</h1>
                        <h1 class="md:text-[2.5em] text-[1.5em] text-[#584738] font-bold">Collection été 2024</h1>
                        <p class="md:text-[1.25em] text-[0.75em] text-[#584738]">
                            Laissez vous transporter dans le temps ! Retrouver le calme et vos souvenirs heureux de vos
                            vacances d’été au bord de mer grâce à ces douces odeurs.
                        </p>
                    </div>
                    <div class="h-full flex md:flex-row flex-col gap-10">
                        <div class="flex flex-col md:justify-end items-center gap-5">
                            <img src="../assets/summer_product_big.svg" class="rounded-2xl">
                            <a @click="handleSquareClick(1)"
                                class="bg-[#B59E7D] text-center text-[#584738] border border-[#584738] rounded-xl px-6 py-2 md:text-[1.25em] text-[0.75em] hover:bg-[#584738] hover:text-white transition duration-300">
                                <button>
                                    Découvrir
                                </button>
                            </a>
                        </div>
                        <div class="flex flex-col md:justify-start items-center gap-5">
                            <img src="../assets/sea_product_big.svg" class="rounded-2xl">
                            <a @click="handleSquareClick(7)"
                                class="bg-[#B59E7D] text-center text-[#584738] border border-[#584738] rounded-xl px-6 py-2 md:text-[1.25em] text-[0.75em] hover:bg-[#584738] hover:text-white transition duration-300">
                                <button>
                                    Découvrir
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="h-full flex justify-center items-center p-10 gap-10">
                    <div>
                        <h1 class="md:text-[2.5em] text-[1.5em] text-[#584738] font-bold">Offrez</h1>
                        <h1 class="md:text-[2.5em] text-[1.5em] text-[#584738] font-bold">Une jolie surprise !</h1>
                        <p class="md:text-[1.25em] text-[0.75em] text-[#584738]">
                            Venez découvrir nos packs cadeaux pour offrir un beau parfum à vos proches, vos amis !
                        </p>
                        <a href="./Gift.vue">
                            <button
                                class="mt-5 bg-[#B59E7D] text-[#584738] border border-[#584738] rounded-xl px-6 py-2 md:text-[1.25em] text-[0.75em] hover:bg-[#584738] hover:text-white transition duration-300">
                                Découvrir
                            </button>
                        </a>
                    </div>
                    <div class="h-full flex md:flex-row flex-col gap-10">
                        <div class="flex flex-col md:justify-end items-center gap-5">
                            <img src="../assets/box_winter.svg" class="rounded-2xl">
                        </div>
                        <div class="flex flex-col md:justify-start items-center gap-5">
                            <img src="../assets/winter_product_big.svg" class="rounded-2xl">
                        </div>
                    </div>
                </div>
            </swiper-slide>

        </swiper>
    </section>

    <section class="justify-center place-items-center">
        <div class="grid grid-cols-2 grid-rows-1 md:grid-cols-3 md:grid-rows-2 gap-10 w-[60%] md:w-[50%] mb-4">
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/summer_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl"
                    @click="handleSquareClick(1)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/gingerbread_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl"
                    @click="handleSquareClick(2)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/winter_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl"
                    @click="handleSquareClick(3)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/spring_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl"
                    @click="handleSquareClick(4)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/autumn_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl"
                    @click="handleSquareClick(5)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/citrus_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl"
                    @click="handleSquareClick(6)">
            </div>
        </div>

        <div class="text-center mb-[50px]">
            <h3 class="text-[0.85em] uppercase">Collections</h3>
            <p class="text-[0.65em] uppercase">Explorer</p>
        </div>

        <div class="h-[50%] grid grid-cols-2 gap-6 w-[60%] mb-5">
            <div class="h-[75%] relative">
                <img src="../assets/reduction_img_1.svg"
                    class="w-full h-31/32 object-cover rounded-t-2xl rounded-b-none">
                <div
                    class="absolute bottom-[3%] left-[50%] translate-x-[-50%] flex items-center justify-center text-white text-sm uppercase">
                    En réduction
                </div>
                <h2
                    class="flex flex-col justify-end uppercase text-[#584738] bg-white text-sm rounded-t-none rounded-b-2xl text-center">
                    Découvrir</h2>
            </div>
            <div class="h-[75%] relative">
                <img src="../assets/reduction_img_2.svg"
                    class="w-full h-31/32 object-cover rounded-t-2xl rounded-b-none">
                <div
                    class="absolute bottom-[3%] left-[50%] translate-x-[-50%] flex items-center justify-center text-[#584738] text-sm uppercase">
                    En réduction
                </div>
                <h2
                    class="flex flex-col justify-end uppercase text-white bg-[#584738] text-sm rounded-t-none rounded-b-2xl text-center">
                    Découvrir</h2>
            </div>
        </div>

        <div class="w-[60%] grid grid-cols-1 md:grid-cols-3 place-items-center gap-12 mb-4">
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/lavender_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl"
                    @click="handleSquareClick(7)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/leather_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl"
                    @click="handleSquareClick(8)">
            </div>
            <div class="bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                <img src="../assets/sea_product.svg"
                    class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl"
                    @click="handleSquareClick(9)">
            </div>
        </div>
    </section>

    <section id="packs" class="relative mt-10 h-screen flex-column mb-[50px]">
        <Swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }" :modules="modules" class="h-full">
            <SwiperSlide class="w-full h-full bg-[url('@/assets/box_total_air.svg')] bg-cover bg-center bg-no-repeat">
            </SwiperSlide>
            <SwiperSlide class="w-full h-full bg-[url('@/assets/box_summer_big.svg')] bg-cover bg-center bg-no-repeat">
            </SwiperSlide>
            <SwiperSlide class="w-full h-full bg-[url('@/assets/box_spring_big.svg')] bg-cover bg-center bg-no-repeat">
            </SwiperSlide>
        </Swiper>

        <div class="absolute flex flex-col justify-end bottom-4 left-1/2 transform -translate-x-1/2 text-center z-10">
            <div class="absolute inset-0 bg-black/30 blur-sm rounded-md -z-10"></div>
            <h3 class="text-[0.85em] uppercase text-[#584638] font-bold">Packs</h3>
            <p class="text-[0.65em] uppercase text-[#584638]">Explorer</p>
        </div>
    </section>

    <section id="collections" class="place-items-center">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-[70%] mb-[50px]">
            <div class="flex flex-col justify-center gap-[5px]" @click="handlePacksClick('1')">
                <div class="h-full bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                    <img src="../assets/box_summer.svg"
                        class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl">
                </div>
                <div class="text-center uppercase">
                    <p>Printemps</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]" @click="handlePacksClick('2')">
                <div class="h-full bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                    <img src="../assets/box_winter.svg"
                        class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl">
                </div>
                <div class="text-center uppercase">
                    <p>Été</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]" @click="handlePacksClick('3')">
                <div class="h-full bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                    <img src="../assets/box_spring.svg"
                        class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl">
                </div>
                <div class="text-center uppercase">
                    <p>Automne</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]" @click="handlePacksClick('5')">
                <div class="h-full bg-[#b59e7d] rounded-2xl flex justify-center p-2">
                    <img src="../assets/box_autumn.svg"
                        class="transition duration-500 hover:grayscale cursor-pointer object-cover rounded-xl">
                </div>
                <div class="text-center uppercase">
                    <p>Hiver</p>
                </div>
            </div>
        </div>
    </section>
</template>