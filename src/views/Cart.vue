<template>
  <div class="container mx-auto px-4 py-8 mt-[10vh]">
    <h1 class="text-2xl font-bold text-[#584738] mb-6">Mon Panier</h1>
    
    <div v-if="cart.items.length > 0" class="space-y-4">
      <div v-for="item in cart.items" :key="item.id" 
           class="flex items-center justify-between p-4 bg-white rounded-lg shadow relative">
        <div class="flex items-center gap-4">
          <img :src="item.image" class="w-16 h-16 object-cover rounded">
          <div>
            <h3 class="font-medium text-[#584738]">{{ item.nom }}</h3>
            <p class="text-sm text-gray-500">{{ item.quantity }} × {{ item.price }}€</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <p class="font-medium text-[#584738]">{{ (item.quantity * item.price).toFixed(2) }}€</p>
          <button @click="cart.removeFromCart(item.id)" 
                  class="text-red-500 hover:text-red-700 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <div class="mt-6 p-4 bg-white rounded-lg shadow">
        <div class="flex justify-between items-center mb-4">
          <span class="font-medium text-[#584738]">Total</span>
          <span class="font-medium text-[#584738]">{{ cart.totalPrice.toFixed(2) }}€</span>
        </div>
        <button class="w-full bg-[#584738] text-white py-3 rounded-lg hover:bg-[#B59E7D] transition-colors duration-300">
          Procéder au paiement
        </button>
      </div>
    </div>
    
    <div v-else class="text-center py-8 text-gray-500">
      <p>Votre panier est vide</p>
      <RouterLink to="/shop" class="text-[#584738] hover:text-[#B59E7D] mt-4 inline-block">
        Continuer mes achats
      </RouterLink>
    </div>
  </div>
</template>
  
  <script setup>
  import { useCartStore } from '@/stores/cart'
  
  const cart = useCartStore()
  
  const increase = (item) => {
    cart.updateQuantity(item.id, item.quantity + 1)
  }
  
  const decrease = (item) => {
    if (item.quantity > 1) {
      cart.updateQuantity(item.id, item.quantity - 1)
    }
  }
  </script>
  