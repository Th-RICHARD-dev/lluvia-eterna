<template>
    <section class="min-h-screen mt-[15vh] px-[10%]">
      <div
        v-for="(product, index) in products"
        :key="product.id"
        class="w-full md:w-[40%] mb-16"
        :class="{ 'ml-auto': index % 2 === 0 }"
      >
        <img :src="product.image" class="h-64 bg-gray-200 mb-4" />
        <h1 class="text-2xl font-light uppercase mb-4">{{ product.nom }}</h1>
        <p class="text-lg mb-4">{{ product.light_description }}</p>
  
        <button
          @click="$router.push(`/product/${product.id}`)"
          class="mt-8 px-4 py-2 bg-black text-white uppercase text-sm hover:bg-gray-800 transition"
        >
          Voir ce produit
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  import products from '@/data/products.json'; // ✅ ton vrai fichier
  </script>
  