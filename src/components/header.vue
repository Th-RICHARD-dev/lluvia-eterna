<template>
    <div
        :class="[
            'text-[#584738] z-100 fixed top-0 w-full flex justify-between items-center px-4 py-2 h-[10vh]',
            isHome ? 'bg-gradient-to-t from-transparent to-[#F1EADA]' : 'bg-[#F1EADA]'
        ]">
        <div class="hidden md:flex justify-around items-center text-base w-full gap-4">
            <RouterLink to="/shop">
                <h2 class="text-xs">BOUTIQUE</h2>
            </RouterLink>
            <RouterLink to="/contest">
                <h2 class="text-xs">CONCOURS</h2>
            </RouterLink>
            <RouterLink to="/packs">
                <h2 class="text-xs">PACKS</h2>
            </RouterLink>
        </div>

        <RouterLink to="/" class="w-full flex justify-center items-center">
                <img class="h-16" src="../assets/logo_black.svg" alt="black logo">
        </RouterLink>

        <div class="hidden md:flex justify-around items-center text-base w-full gap-4">
            <RouterLink to="/about">
                <h2 class="text-xs">HISTOIRE</h2>
            </RouterLink>
            <RouterLink v-if="!user" to="/signup">
                <h2 class="text-xs">SE CONNECTER</h2>
            </RouterLink>
            <RouterLink v-else to="/account">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-[#584738] w-5 h-5"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clip-rule="evenodd" />
                </svg>
            </RouterLink>
            <RouterLink to="/search">
                <div>
                    <img class="min-w-5 max-w-5" src="../assets/black_search_button.svg" alt="search black">
                </div>
            </RouterLink>
            <div class="relative" 
                 @mouseover="handleCartHover(true)" 
                 @mouseleave="handleCartLeave">
                <div class="cursor-pointer">
                    <img class="min-w-5 max-w-5" src="../assets/black_basketshop.svg" alt="black basket">
                    <div v-if="cart.cartCount > 0" 
                         class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {{ cart.displayCount }}
                    </div>
                </div>
                
                <!-- Cart Preview Dropdown -->
                <div v-if="showCartPreview" 
                     @mouseover="handleCartHover(true)"
                     @mouseleave="handleCartLeave"
                     class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
                    <div class="p-4">
                        <div v-if="cart.items.length > 0">
                            <div v-for="item in cart.items" :key="item.id" class="flex items-center gap-3 mb-3 relative">
                                <img :src="item.image" class="w-12 h-12 object-cover rounded">
                                <div class="flex-1">
                                    <p class="text-sm font-medium">{{ item.nom }}</p>
                                    <p class="text-xs text-gray-500">{{ item.quantity }} × {{ item.price }}€</p>
                                </div>
                                <button @click="cart.removeFromCart(item.id)" 
                                        class="absolute top-0 right-0 text-red-500 hover:text-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div class="border-t mt-3 pt-3">
                                <p class="text-sm font-medium mb-3">Total: {{ cart.totalPrice.toFixed(2) }}€</p>
                                <RouterLink to="/cart" 
                                          class="block w-full bg-[#584738] text-white text-center py-2 rounded-lg hover:bg-[#B59E7D] transition duration-300">
                                    Voir ma commande
                                </RouterLink>
                            </div>
                        </div>
                        <div v-else class="text-center py-4 text-gray-500">
                            Votre panier est vide
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="md:hidden flex items-center">
            <button @click="toggleMenu" class="text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        <div v-if="menuOpen"
            class="bg-[#F1EADA] text-[#584738] absolute top-[10vh] left-0 w-full flex flex-col items-center gap-4 py-4 z-50">
            <RouterLink @click="toggleMenu" to="/shop">
                <h2 class="text-base">BOUTIQUE</h2>
            </RouterLink>
            <RouterLink @click="toggleMenu" to="/contest">
                <h2 class="text-base">CONCOURS</h2>
            </RouterLink>
            <RouterLink @click="toggleMenu" to="/packs">
                <h2 class="text-base">PACKS</h2>
            </RouterLink>
            <RouterLink @click="toggleMenu" to="/about">
                <h2 class="text-base">HISTOIRE</h2>
            </RouterLink>
            <RouterLink @click="toggleMenu" v-if="!user" to="/signup">
                <h2 class="text-base">SE CONNECTER</h2>
            </RouterLink>
            <RouterLink @click="toggleMenu" v-else to="/account">
                <h2 class="text-base">MON COMPTE</h2>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { supabase } from '../lib/supabaseClient'
import { useCartStore } from '@/stores/cart'

export default {
    data() {
        return {
            user: null,
            menuOpen: false,
            showCartPreview: false,
            cartTimeout: null
        }
    },
    setup() {
        const cart = useCartStore()
        return { cart }
    },
    computed: {
        isHome() {
            return this.$route.path === '/'
        }
    },
    methods: {
        handleCartHover(show) {
            if (this.cartTimeout) {
                clearTimeout(this.cartTimeout);
                this.cartTimeout = null;
            }
            this.showCartPreview = show;
        },
        handleCartLeave() {
            this.cartTimeout = setTimeout(() => {
                this.showCartPreview = false;
            }, 200);
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        }
    },
    async mounted() {
        const { data: { user } } = await supabase.auth.getUser()
        this.user = user

        supabase.auth.onAuthStateChange((_, session) => {
            this.user = session?.user || null
        })
    }
}
</script>