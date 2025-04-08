<template>
    <section class="h-screen flex justify-center items-end mt-[10vh] bg-[#aaa396]">
    </section>
    <section class="h-[180vh] flex flex-col items-center">
        <h1 class="text-[2.5em] font-bold text-center uppercase mt-10 mb-100">Type de produit</h1>
        <div class="h-[50%] w-[85%] mb-4 bg-[#d9d9d9] rounded-2xl flex flex-row gap-20 p-5">
            <!-- Golden square -->
            <div class="h-[80%] w-[50%] mt-20 ml-10 bg-[#b59e7d] rounded-2xl flex flex-col justify-between items-center gap-2 p-5">
                <h2 class="text-[1.5em] font-bold text-center uppercase">{{product.nom}}</h2>
                <img :src="product.image" class="w-[61%] h-[75%] rounded-2xl">
                <h2 class="text-[1.5em] font-bold text-center uppercase">{{product.prix}}</h2>
            </div>
            <!-- Description section -->
            <div class="flex flex-col justify-start items-center w-[37%] mt-25 gap-5">
                <h2 class="text-[1.5em] font-bold uppercase">Description</h2>
                <div class="flex flex-row justify-between items-center w-full mt-10">
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
                <p class="uppercase text-center font-bold text-[1.25rem]">
                    {{product.description}}<br>
                </p>
            </div>
        </div>
        <!-- <div>
            <Slider/>
        </div> -->
    </section>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import products from '@/assets/products.json' // importe ton JSON
import Slider from '@/components/slider.vue' 

const route = useRoute()
const id = computed(() => route.params.id)

// Trouve le bon produit
const product = computed(() =>
  products.find(p => p.id === id.value)
)
</script>
