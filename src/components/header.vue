<template>

    <div class="header">
        <div class="left">
            <RouterLink to="/shop"><h2>POPULAIRE</h2></RouterLink> 
            <RouterLink to="/shop"><h2>BOUTIQUE</h2></RouterLink>
            <RouterLink to="/product"><h2>PRODUCTIONS</h2></RouterLink>
            <RouterLink to="/contest"><h2>CONCOURS</h2></RouterLink>
            <RouterLink to="/shop"><h2>PACKS</h2></RouterLink>
        </div>
        <div class="title">
            <RouterLink to="/">
                <img src="../assets/parfume_logo.svg">
            </RouterLink> 
        </div>
        <div class="right">
            <RouterLink to="/about"><h2>HISTOIRE</h2></RouterLink> 
            <RouterLink to="/information"><h2>SERVICE CLIENT</h2></RouterLink>
            <RouterLink to="/login"><h2>SE CONNECTER</h2></RouterLink>
            <RouterLink to="/shop"><img class="img" src="../assets/white_search_button.svg"></RouterLink>
            <RouterLink to="/shop"><img class="img" src="../assets/white_basketshop.svg"></RouterLink>
        </div>
    </div>

</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #000000;
        color: #ffffff;
        font-family: arial;
        padding: 15px;
    }

    a {
        color: #ffffff;
    }

    .left, .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.5em;
        width: 100%;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1060px) {
        .left, .right {
            font-size: 0.35em;
        }

        .title {
            font-size: 0.5em;
        }        
    }
</style>