<template>
    <div :class="['header', { 'white-header': isNotMenu }]">
        <div class="left">
            <RouterLink to="/shop">
                <h2>BOUTIQUE</h2>
            </RouterLink>
            <RouterLink to="/all-product">
                <h2>PRODUCTIONS</h2>
            </RouterLink>
            <RouterLink to="/contest">
                <h2>CONCOURS</h2>
            </RouterLink>
            <RouterLink to="/shop#packs">
                <h2>PACKS</h2>
            </RouterLink>
        </div>
        <div class="title">
            <RouterLink to="/">
                <div v-if="isNotMenu">
                    <img class="img" src="../assets/logo_black.svg" alt="black logo">
                </div>
                <div v-else>
                    <img class="img" src="../assets/logo.svg">
                </div>
            </RouterLink>
        </div>
        <div class="right">
            <RouterLink to="/about">
                <h2>HISTOIRE</h2>
            </RouterLink>
            <RouterLink to="/information">
                <h2>SERVICE CLIENT</h2>
            </RouterLink>
            
            <!-- Login button or profile icon based on auth state -->
            <RouterLink v-if="!user" to="/signup">
                <h2>SE CONNECTER</h2>
            </RouterLink>
            <RouterLink v-else to="/account">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    :class="['profile-icon', { 'black-icon': isNotMenu }]" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    width="24" 
                    height="24">
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
            <RouterLink to="/shop">
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
import { ref, onMounted } from 'vue'
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
        // Get initial user state
        const { data: { user } } = await supabase.auth.getUser()
        this.user = user

        // Listen for auth changes
        supabase.auth.onAuthStateChange((_, session) => {
            this.user = session?.user || null
        })
    }
}
</script>

<style scoped>
.header {
    z-index: 100;
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    padding: 15px;
    height: 10vh;
}

.white-header {
    background-color: #F1EADA;
    color: #000000;
}

.left,
.right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1em;
    width: 100%;
    gap: 15px;
    padding: 0 40px;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75em;
    width: 40%;
    margin: 0 20px;
}

.img {
    width: 100px;
    height: auto;
}

.profile-icon {
    color: white;
    width: 20px;
    height: 20px;
}

.black-icon {
    color: black;
}

@media screen and (max-width: 1060px) {
    .left,
    .right {
        font-size: 0.35em;
    }

    .title {
        font-size: 0.5em;
    }

    .profile-icon {
        width: 16px;
        height: 16px;
    }
}
</style>
