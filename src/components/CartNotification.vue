<template>
    <Transition name="fade">
        <div v-if="cart.showNotification" 
             class="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            Produit ajouté au panier !
        </div>
    </Transition>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>