<template>
  <section class="h-screen flex justify-center items-end mt-[10vh] relative">
    <img src="../assets/giftPage_header.svg" class="w-full h-full object-cover" />
  </section>

  <section class="flex justify-center items-center">
    <div class="mt-[2vh] mb-[25vh] text-center text-[#584638] flex flex-col items-center">
      <h2 class="text-[2rem] font-semibold mb-2">Coffret cadeau</h2>
      <p class="w-[70%] text-[0.875rem] font-light">
        Les coffrets cadeaux Lluvia Eterna sont un hommage à l'art d'offrir. Chaque attention est
        une invitation à la découverte et à l’émerveillement.
      </p>
    </div>
  </section>

  <section class="flex flex-col justify-center items-center">
    <h2 class="text-[2rem] font-semibold text-[#584638] mb-6">Parfums</h2>
    <div class="grid grid-cols-3 mb-3 gap-4">
      <div
        v-for="(product, index) in products"
        :key="product.id"
        class="flex flex-col items-center mb-4 relative w-full"
      >
        <div class="relative w-full">
          <img :src="product.image" alt="Product Image" class="object-cover w-full" />
          <button
            class="absolute bottom-2 right-2 p-2 bg-white rounded-lg shadow-md hover:bg-[#B59E7D] transition"
            @click="toggleCart(product.id, 'product')"
          >
            <img
              :src="cartItems[product.id] ? checkIcon : bagIcon"
              alt="Cart Icon"
              class="w-6 h-6"
            />
          </button>
        </div>
        <h3 class="text-lg font-semibold text-[#584638] mt-2">Parfum {{ product.name }}</h3>
        <p class="w-[75%] text-sm text-gray-600 text-center">{{ product.slogan }}</p>
        <p class="text-sm font-medium text-[#584638] mt-2">{{ product.price }} €</p>
      </div>
    </div>
  </section>

  <!-- Packs -->
  <section class="mt-16 mb-16">
    <h2 class="text-[2rem] font-semibold text-[#584638] mb-6 text-center">Packs</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 mx-[15%] mb-12 gap-4">
      <div
        v-for="(pack, index) in firstTwoPacks"
        :key="'first-' + pack.id"
        class="flex flex-col items-center text-center relative"
      >
        <div class="relative w-full aspect-square overflow-hidden">
          <img :src="pack.image" alt="Pack Image" class="w-full h-full object-cover" />
          <button
            class="absolute bottom-2 right-2 p-2 bg-white rounded-lg shadow-md hover:bg-[#B59E7D] transition"
            @click="toggleCart(pack.id, 'pack')"
          >
            <img
              :src="cartItems[pack.id] ? checkIcon : bagIcon"
              alt="Cart Icon"
              class="w-6 h-6"
            />
          </button>
        </div>
        <div class="flex flex-col items-center gap-2">
          <h3 class="mt-4 text-md text-[#33383B]">Capsule d'air {{ pack.name }}</h3>
          <p class="text-sm text-[#33383B]">{{ pack.slogan }}</p>
          <p class="text-sm font-medium text-[#7C8386] mt-2">{{ pack.price }} €</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(pack, index) in remainingPacks"
        :key="'rest-' + pack.id"
        class="flex flex-col items-center text-center relative"
      >
        <div class="relative w-full aspect-square overflow-hidden">
          <img :src="pack.image" alt="Pack Image" class="w-full h-full object-cover" />
          <button
            class="absolute bottom-2 right-2 p-2 bg-white rounded-lg shadow-md hover:bg-[#B59E7D] transition"
            @click="toggleCart(pack.id, 'pack')"
          >
            <img
              :src="cartItems[pack.id] ? checkIcon : bagIcon"
              alt="Cart Icon"
              class="w-6 h-6"
            />
          </button>
        </div>
        <div class="flex flex-col items-center gap-2">
          <h3 class="mt-4 text-md  text-[#33383B]">Capsule d'air {{ pack.name }}</h3>
          <p class="text-sm text-[#33383B]">{{ pack.slogan }}</p>
          <p class="text-sm font-medium text-[#7C8386] mt-2">{{ pack.price }} €</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { supabase } from '@/lib/supabaseClient'
import { useCartStore } from '@/stores/cart'
import bagIcon from '@/assets/bag.svg'
import checkIcon from '@/assets/checkmark.svg'

export default {
  name: 'GiftView',
  data() {
    return {
      products: [],
      packs: [],
      cartItems: {},
      loading: true,
      error: null,
      bagIcon,
      checkIcon,
    }
  },
  async mounted() {
    try {
      const { data: parfums, error: parfumsError } = await supabase.from('parfums').select('*')
      if (parfumsError) throw parfumsError

      const { data: packs, error: packsError } = await supabase.from('packs').select('*')
      if (packsError) throw packsError

      this.products = parfums
      this.packs = packs
    } catch (error) {
      console.error('❌ Erreur lors du chargement des données:', error.message)
      this.error = error.message
    } finally {
      this.loading = false
    }
  },
  computed: {
    firstTwoPacks() {
      return this.packs.slice(0, 2)
    },
    remainingPacks() {
      return this.packs.slice(2)
    },
  },
  methods: {
    toggleCart(id, type) {
      const cart = useCartStore()
      if (this.cartItems[id]) {
        delete this.cartItems[id]
        cart.removeFromCart(id)
      } else {
        const item = (type === 'product' ? this.products : this.packs).find((el) => el.id === id)
        cart.addToCart({ id: item.id, nom: item.name, image: item.image, price: item.price })
        this.cartItems[id] = true
      }
    },
  },
}
</script>
