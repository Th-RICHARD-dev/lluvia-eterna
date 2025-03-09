<template>
    <div class="header">
        <div class="headerButton left">
            <RouterLink to="/"><h2>POPULAIRE</h2></RouterLink> 
            <RouterLink to="/shop"><h2>BOUTIQUE</h2></RouterLink>
            <RouterLink to="/product"><h2>PRODUCTIONS</h2></RouterLink>
            <RouterLink to="/"><h2>CONCOURS</h2></RouterLink>
            <RouterLink to="/"><h2>PACKS</h2></RouterLink>
        </div>
        <div class="brandTitle">
            <h1>LLUVIA</h1>
            <h1>ETERNA</h1>
        </div>
        <div class="headerButton right">
            <RouterLink to="/"><h2>HISTOIRE</h2></RouterLink> 
            <RouterLink to="/"><h2>SERVICE CLIENT</h2></RouterLink>
            <RouterLink to="/"><h2>SE CONNECTER</h2></RouterLink>
            <RouterLink to="/"><img class="img" src="../assets/white_search_button.svg"></RouterLink>
            <RouterLink to="/"><img class="img" src="../assets/white_basketshop.svg"></RouterLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: black;
        height: 10%;
        width: 100vw;
        top: 0;
        margin: 0;
        right: 0;
        padding: 0;
    }
    
    h1, h2{
        color: white;
        font-family: Arial, sans-serif;
        font-weight: lighter;
        margin: 0;
        padding: 0;
    }

    h1{
        font-size: 24px;
    }
    h2{
        font-size: 8px;
    }

    .brandTitle{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
        gap: 5px;
    }
    
    .headerButton{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 50%;
    }

    .left{
        margin-right: 390px;
    }
    .right{
        margin-left: 390px;
        margin-right: 5px;
    }

    .img{
        width: 20px;
        height: 20px;
    }
</style>