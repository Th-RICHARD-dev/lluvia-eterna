<template>
    <!-- Routes qui renvoie sur chaque page -->
    <div :class="['header', { 'white-header': isNotMenu }]">
        <div class="left">
            <RouterLink to="/shop">
                <h2>POPULAIRE</h2>
            </RouterLink>
            <RouterLink to="/shop">
                <h2>BOUTIQUE</h2>
            </RouterLink>
            <RouterLink to="/all-product">
                <h2>PRODUCTIONS</h2>
            </RouterLink>
            <RouterLink to="/contest">
                <h2>CONCOURS</h2>
            </RouterLink>
            <RouterLink to="/shop">
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
            <RouterLink to="/login">
                <h2>SE CONNECTER</h2>
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
// Renvoie la classe "white-header" si la route n'est pas "/"
    export default {
        computed: {
            isNotMenu() {
                return this.$route.path !== '/';
            }
        }
    }
</script>

<style scoped>
.header {
    z-index: 100;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-family: arial;
    padding: 15px;
    height: 10vh;
}

.img {
    width: 100px;
}

.white-header {
    background-color: #F1EADA;
    color: #000000;
}

.logo {
    width: 100px;
}

a {
    color: inherit;
}

.left,
.right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1em;
    width: 100%;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75em;
    width: 100%;
}

@media screen and (max-width: 1060px) {

    .left,
    .right {
        font-size: 0.35em;
    }

    .title {
        font-size: 0.5em;
    }
}
</style>
