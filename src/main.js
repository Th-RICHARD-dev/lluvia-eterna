import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store'
import { useCartStore } from '@/stores/cart'

const app = createApp(App)
app.use(store)
const pinia = createPinia()
app.use(pinia)
app.use(router)

// Initialize cart from localStorage after Pinia is ready
const cart = useCartStore()
cart.initializeCart()

console.log("Depuis main.js →", import.meta.env.VITE_SUPABASE_URL);
app.mount('#app')

