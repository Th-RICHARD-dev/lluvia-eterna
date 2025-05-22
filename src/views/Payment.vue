<template>
  <section class="min-h-screen mt-40 px-10">
    <h1 class="text-2xl font-bold text-center text-[#584738] uppercase mb-10">Commander</h1>

    <transition name="fade">
      <div v-if="!confirmed" class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 max-w-6xl mx-auto">
        <!-- LIVRAISON -->
        <div class="space-y-10">
          <h2 class="text-lg text-center font-semibold text-[#584738] underline">LIVRAISON</h2>
          <input type="text" placeholder="Pays/Région" required class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>

          <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Prénom" required class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
            <input type="text" placeholder="Nom" required class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
          </div>

          <input type="text" placeholder="Adresse" required class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>

          <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Code postal" required class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
            <input type="text" placeholder="Ville" required class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
          </div>
        </div>

        <!-- DIVIDER -->
        <div class="hidden md:block w-px bg-[#584738] mx-10"></div>

        <!-- PAYEMENT -->
        <div class="space-y-10">
          <h2 class="text-lg font-semibold text-[#584738] text-center underline">PAYEMENT</h2>
          <input type="text" placeholder="Nom sur la carte" required class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
          <input type="text" placeholder="Numéro de la carte" required class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>

          <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Date d’expiration" required class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
            <input type="text" placeholder="CCV code" required class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
          </div>

          <div class="flex justify-center mt-4">
            <button @click="handleConfirm" class="bg-[#584738] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#3f2f21] transition">
              Commander
            </button>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="confirmed" class="mt-20 text-center">
        <h2 class="text-2xl font-bold text-green-700 mb-4">✅ Merci pour votre commande !</h2>
        <p class="text-[#584738]">Nous avons bien reçu votre commande et nous la traitons avec soin.</p>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const confirmed = ref(false)

function handleConfirm() {
  confirmed.value = true
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>