<template>
    <section class="h-screen flex justify-center items-end mt-[10vh] mb-[10vh] bg-[#aaa396]">
        <div class="absolute left-1/2 bottom-[50px] -translate-x-1/2 text-center text-black flex flex-col items-center">
            <h3 class="text-[0.75rem] font-bold uppercase">Produit du jour</h3>
            <p class="text-xs font-light uppercase">Explorer</p>
        </div>
    </section>
    <section class="h-[180vh] flex flex-col justify-center items-center">
        <div class="h-[50%] w-[85%] mb-4 bg-[#d9d9d9] rounded-2xl flex flex-row gap-10 p-5">
            <div
                class="h-[80%] w-[50%] mt-20 ml-10 bg-[#b59e7d] rounded-2xl flex flex-col justify-between items-center gap-2 p-5">
                <h2 class="text-[1.5em] font-bold text-center uppercase">{{ product.nom }}</h2>
                <img :src="product.image" class="w-[61%] h-[75%] rounded-2xl">
                <h2 class="text-[1.5em] font-bold text-center uppercase">69.99€</h2>
            </div>
            <div class="flex flex-col justify-start items-center w-[37%] mt-25 gap-5">
                <h2 class="text-[1.5em] font-bold uppercase">Description</h2>
                <p class="uppercase">
                    {{ product.description }}<br>
                </p>
                <div class="flex flex-row justify-between items-center w-full mt-20">
                    <div class="h-[7.5vh] w-[20%] mb-4 bg-[#969696] rounded-2xl flex justify-center items-center">
                        <p class="text-center text-[1.25rem] font-bold uppercase text-white">50 ml</p>
                    </div>
                    <div class="h-[7.5vh] w-[20%] mb-4 bg-[#969696] rounded-2xl flex justify-center items-center">
                        <p class="text-center text-[1.25rem] font-bold uppercase text-white">100 ml</p>
                    </div>
                    <div class="h-[7.5vh] w-[20%] mb-4 bg-[#969696] rounded-2xl flex justify-center items-center">
                        <p class="text-center text-[1.25rem] font-bold uppercase text-white">150 ml</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[100%]">
            <Slider />
        </div>

    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import products from '@/assets/products.json'
import Slider from '@/components/slider.vue'

const route = useRoute()
const id = computed(() => route.params.id)

const product = computed(() =>
    products.find(p => p.id === id.value)
)
</script>
