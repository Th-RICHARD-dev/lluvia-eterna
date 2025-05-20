<template>
    <section class="min-h-screen px-10 py-16 mt-10">
      <h1 class="text-3xl font-bold text-center uppercase mb-10">Votre Panier</h1>
  
      <div v-if="cart.items.length" class="flex flex-col gap-8">
        <!-- Table Header -->
        <div class="grid grid-cols-5 text-center font-semibold border-b pb-4">
          <span>Produit</span>
          <span>Prix Unitaire</span>
          <span>Quantité</span>
          <span>Total</span>
        </div>
  
        <!-- Items -->
        <div v-for="item in cart.items" :key="item.id" class="grid grid-cols-5 text-center items-center py-4 border-b">
        <!-- Product image -->
        <img :src="item.image" class="w-20 h-20 object-cover mx-auto rounded-md" />
        <!-- Price -->
        <p>{{ item.price.toFixed(2) }}€</p>
        <!-- Quantity -->
         <div class="flex justify-center items-center gap-2">
          <button @click="decrease(item)" class="px-2">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increase(item)" class="px-2">+</button>
        </div>
  
          <!-- Total -->
          <p>{{ (item.price * item.quantity).toFixed(2) }}€</p>
        </div>
  
        <!-- Code Promo & Total -->
        <div class="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
          <div class="flex gap-2">
            <input type="text" placeholder="Saisissez le code promo" class="border px-4 py-2 rounded" />
            <button class="border px-4 py-2 rounded">OK</button>
          </div>
  
          <div class="flex flex-col items-end">
            <p class="border px-6 py-2 rounded font-semibold">SOMME TOTALE : {{ cart.totalPrice.toFixed(2) }}€</p>
          </div>
        </div>
  
        <!-- Valider commande -->
        <div class="flex justify-center mt-10">
          <button class="bg-[#584738] text-white px-10 py-4 rounded-xl uppercase font-bold hover:bg-[#F1EADA] hover:text-[#584738] border-[#584738] transition duration-300">
            Valider ma commande
          </button>
        </div>
      </div>
  
      <div v-else class="text-center text-gray-500 py-20">
        Votre panier est vide.
      </div>
    </section>
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
  