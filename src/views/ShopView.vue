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
            router.push({ name: 'ProductView', params: { id } });
        };

        return {
            handleSquareClick,
            onSwiper
        };
    },
};
</script>

<template>
    <section class="h-screen flex justify-center items-end mt-[10vh]">
        <div class="absolute left-1/2 bottom-[50px] -translate-x-1/2 text-center text-black flex flex-col items-center">
            <h3 class="text-[0.75rem] font-bold uppercase">Produit du jour</h3>
            <p class="text-xs font-light uppercase">Explorer</p>
        </div>
    </section>

    <section class="h-[180vh] place-items-center">
        <div class="h-[45%] grid grid-cols-3 grid-rows-2 gap-6 w-[60%] mb-4">
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
        </div>

        <div class="text-center mb-[50px]">
            <h3 class="text-[0.85em] uppercase">Collections</h3>
            <p class="text-[0.65em] uppercase">Explorer</p>
        </div>

        <div class="h-[25%] grid grid-cols-2 gap-6 w-[60%] mb-[50px]">
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
        </div>

        <div class="h-[15%] grid grid-cols-3 gap-6 w-[60%]">
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>
    </section>

    <section class="relative h-screen flex-column mb-[50px]">
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

    <section class="h-screen place-items-center">
        <!-- here -->
        <div class="h-[40%] grid grid-cols-4 gap-6 w-[80%] mb-[50px]">
            <div 
                class="flex flex-col justify-center gap-[5px]"
                @click="handleSquareClick('1')"
            >
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Produit 1</p>
                </div>
            </div>
            <div 
                class="flex flex-col justify-center gap-[5px]"
                @click="handleSquareClick('2')"
            >
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Produit 2</p>
                </div>
            </div>
            <div 
                class="flex flex-col justify-center gap-[5px]"
                @click="handleSquareClick('3')"
            >
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Produit 3</p>
                </div>
            </div>
            <div 
                class="flex flex-col justify-center gap-[5px]"
                @click="handleSquareClick('4')"
            >
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Produit 4</p>
                </div>
            </div>
        </div>

        <div class="text-center mb-4">
            <h2>Indécis ?</h2>
        </div>

        <div class="h-[40%] grid grid-cols-2 gap-12 mx-[250px] bg-[#999999] w-[80%] mb-4 p-6">
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>

        <div class="text-center">
            <p class="text-[0.65em] uppercase">voir plus</p>
        </div>
    </section>

    <section class="h-[30vh]">
        <div class="flex justify-around py-4 h-[80%]">
            <div class="flex flex-col justify-start items-start gap-[5px] text-[0.65em] uppercase">
                <p>Livraison</p>
                <p>France € / FR</p>
            </div>
            <div class="flex flex-col justify-start items-start gap-[5px] text-[0.65em] uppercase">
                <p>Service clients</p>
                <p>Livraisons & retours</p>
                <p>Nous contacter</p>
                <p>Suivre votre commande</p>
                <p>+33 00 00 00 00 00</p>
                <p>Retourner votre commande</p>
                <p>Prendre un rendez-vous</p>
            </div>
            <div class="flex flex-col justify-start items-start gap-[5px] text-[0.65em] uppercase">
                <p>Mentions légales</p>
                <p>Paramètres des cookies</p>
                <p>Accessibilité</p>
                <p>Carrières</p>
            </div>
            <div class="flex flex-col justify-start items-start gap-[5px] text-[0.65em] uppercase">
                <p>S'inscrire à la newsletter</p>
                <p>Photographies retouchées</p>
            </div>
        </div>
        <div class="flex justify-center space-x-6">
            <img src="../assets/socials_facebook.svg" alt="facebook">
            <img src="../assets/socials_instagram.svg" alt="instagram">
            <img src="../assets/socials_X.svg" alt="X">
            <img src="../assets/socials_tiktok.svg" alt="tiktok">
            <img src="../assets/socials_youtube.svg" alt="youtube">
        </div>
    </section>
</template>
