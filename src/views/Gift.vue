<template>
  <section class="h-screen flex justify-center items-end mt-[10vh] relative">
    <img src="../assets/giftPage_header.svg" class="w-full h-full object-cover">
  </section>
  <section class="flex justify-center items-center">
    <div class="mt-[2vh] mb-[25vh] text-center text-[#584638] flex flex-col items-center">
      <h2 class="text-[2rem] font-semibold mb-2">Coffret cadeau</h2>
      <p class="w-[70%] text-[0.875rem] font-light">Les coffrets cadeaux Lluvia Eterna sont un hommage à l'art d'offrir. Chaque attention est une invitation à la découverte et à l’émerveillement.</p>
    </div>
  </section>
  <section class="flex flex-col justify-center items-center">
    <h2 class="text-[2rem] font-semibold text-[#584638] mb-6">Parfums</h2>
    <div class="grid grid-cols-3 mb-3">
      <div v-for="(product, index) in products"
           :key="product.id"
           class="flex flex-col items-center mb-4"
      >
        <img :src="product.image" alt="Product Image" class="object-cover " />
        <h3 class="text-lg font-semibold text-[#584638]">Parfum {{ product.nom }}</h3>
        <p class="text-sm text-gray-600">Slogan</p>
        <p class="text-sm font-medium text-[#584638] mt-2">{{ product.prix }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import products from '/src/data/products.json';

export default {
  name: 'GiftView',
  data() {
    return {
      products, // Assign the imported products to the data property
    };
  },
};
</script>