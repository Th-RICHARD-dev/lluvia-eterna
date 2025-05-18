<template>
    <div
        :class="[
            'text-[#584738] z-100 fixed top-0 w-full flex justify-between items-center px-4 py-2 h-[10vh]',
            isHome ? 'bg-transparent' : 'bg-[#F1EADA]'
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
            <RouterLink to="/cart">
                <div>
                    <img class="min-w-5 max-w-5" src="../assets/black_basketshop.svg" alt="black basket">
                </div>
            </RouterLink>
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

export default {
    data() {
        return {
            user: null,
            menuOpen: false
        }
    },
    computed: {
        isHome() {
            return this.$route.path === '/'
        }
    },
    methods: {
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