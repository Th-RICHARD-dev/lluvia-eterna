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
<!-- Packs -->
<section class=" mt-16 mb-16">
  <h2 class="text-[2rem] font-semibold text-[#584638] mb-6 text-center">Packs</h2>

  <!-- Premiers packs (les 2 premiers) -->
  <div class="grid grid-cols-1 sm:grid-cols-2 mb-12">
    <div
      v-for="(pack, index) in firstTwoPacks"
      :key="'first-' + pack.id"
      class="flex flex-col items-center text-center "
    >
      <div class="relative w-full aspect-square overflow-hidden">
        <img :src="pack.image" alt="Pack Image" class="w-full h-full object-cover" />
      </div>
      <h3 class="mt-4 text-md font-semibold text-[#584638]">{{ pack.nom }}</h3>
      <p class="text-sm text-gray-500">slogan</p>
      <p class="text-sm font-medium text-[#584638] mt-2">{{ pack.prix }}</p>
    </div>
  </div>

  <!-- Les autres packs -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="(pack, index) in remainingPacks"
      :key="'rest-' + pack.id"
      class="flex flex-col items-center text-center"
    >
      <div class="relative w-full aspect-square overflow-hidden">
        <img :src="pack.image" alt="Pack Image" class="object-cover" />
      </div>
      <h3 class="mt-4 text-md font-semibold text-[#584638]">{{ pack.nom }}</h3>
      <p class="text-sm text-gray-500">slogan</p>
      <p class="text-sm font-medium text-[#584638] mt-2">{{ pack.prix }}</p>
    </div>
  </div>
</section>

</template>

<script>
import data from '@/data/products.json';


export default {
  name: 'GiftView',
  mounted() {
  console.log('Données reçues:', {
    parfums: this.products,
    packs: this.packs
  });

  if (this.products) {
    console.log('Parfums:', this.products); // Accède à la liste des parfums
  } else {
    console.error('Parfums non trouvés ou mauvaise structure');
  }
},

  data() {
    console.log(data.packs);
    
    return {
      products: data.parfums,
      packs: data.packs // Assign the imported products to the data property
    };
  },
  computed: {
  firstTwoPacks() {
    return this.packs.slice(0, 2)
  },
  remainingPacks() {
    return this.packs.slice(2)
  }
}
};
</script>