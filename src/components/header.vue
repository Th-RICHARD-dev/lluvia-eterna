<template>
    <div :class="[isNotMenu ? 'bg-[#F1EADA] text-black' : 'text-white', 'z-100 fixed top-0 w-full flex justify-between items-center px-4 py-2 h-[10vh]']">
        <div class="flex justify-around items-center text-base w-full gap-4 px-10">
            <RouterLink to="/shop">
                <h2>BOUTIQUE</h2>
            </RouterLink>
            <RouterLink to="/contest">
                <h2>CONCOURS</h2>
            </RouterLink>
            <RouterLink to="/packs">
                <h2>PACKS</h2>
            </RouterLink>
        </div>
        <div class="flex justify-center items-center text-sm w-2/5 mx-5">
            <RouterLink to="/">
                <div v-if="isNotMenu">
                    <img class="w-24 h-auto" src="../assets/logo_black.svg" alt="black logo">
                </div>
                <div v-else>
                    <img class="w-24 h-auto" src="../assets/logo.svg">
                </div>
            </RouterLink>
        </div>
        <div class="flex justify-around items-center text-base w-full gap-4 px-10">
            <RouterLink to="/about">
                <h2>HISTOIRE</h2>
            </RouterLink>
            <RouterLink v-if="!user" to="/signup">
                <h2>SE CONNECTER</h2>
            </RouterLink>
            <RouterLink v-else to="/account">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    :class="[isNotMenu ? 'text-black' : 'text-white', 'w-5 h-5']" 
                    viewBox="0 0 24 24" 
                    fill="currentColor">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                </svg>
            </RouterLink>

            <RouterLink to="/search">
                <div v-if="isNotMenu">
                    <img src="../assets/black_search_button.svg" alt="search black">
                </div>
                <div v-else>
                    <img src="../assets/white_search_button.svg" alt="search white">
                </div>
            </RouterLink>
            <RouterLink to="/cart">
                <div v-if="isNotMenu">
                    <img src="../assets/black_basketshop.svg" alt="black basket">
                </div>
                <div v-else>
                    <img src="../assets/white_basketshop.svg" alt="white basket">
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { supabase } from '../lib/supabaseClient'

export default {
    data() {
        return {
            user: null
        }
    },
    computed: {
        isNotMenu() {
            return this.$route.path !== '/';
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