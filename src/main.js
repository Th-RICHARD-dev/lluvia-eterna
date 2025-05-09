import './assets/main.css'
import * as THREE from 'three';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(createPinia())
app.use(router)
console.log("Depuis main.js →", import.meta.env.VITE_SUPABASE_URL);
app.mount('#app')

