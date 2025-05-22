<template>
    <img src="../assets/ornament-footer.svg" alt="ornament-footer" class="w-[50%] mb-15 place-self-center">

    <section>
        <div class="text-center mb-8">
            <h2>Indécis ?</h2>
        </div>

        <div
            class="md:h-[40vh] h-[90vh] w-[75%] grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-12 mx-auto bg-gradient-to-tr from-[#89765B] to-[#584738] rounded-2xl mb-4 relative">
            <div class="flex flex-col justify-center gap-[5px] absolute md:left-[10%] left-[50%] md:translate-none translate-x-[-50%] top-[-25px] md:w-[35%] w-[75%] lg:w-[30%]">
                <div
                    class="h-[200px] bg-[url('/src/assets/footer_question.svg')] object-cover bg-center rounded-xl p-5 md:p-10 flex flex-col justify-center items-center">
                    <h2 class="text-white text-center text-xm lg:text-xl">Nous vous aidons a trouver votre odeur
                        parfaite !</h2>
                    <p class="text-white text-center text-xs lg:text-xm">En seulement quelques questions !</p>
                    <RouterLink to="/quiz">
                        <button class="text-white bg-[#584738] px-2 pt-1 pb-2 rounded-xl mt-4 border-1">C’est
                            parti</button>
                    </RouterLink>
                </div>
                <div class="text-center">
                    <p class="uppercase text-[#e6cdaa]">Questionnaire</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px] absolute md:right-[10%] right-auto md:left-auto left-[50%] md:translate-none translate-x-[-50%] md:top-[-25px] top-auto md:bottom-auto bottom-[25px] md:w-[35%] w-[75%] lg:w-[30%]">
                <RouterLink to="/gift">
                    <div class="h-[200px] bg-[url('/src/assets/footer_gift.svg')] object-cover bg-center rounded-2xl">
                    </div>
                </RouterLink>
                <div class="text-center">
                    <p class="uppercase text-[#e6cdaa]">Faire un cadeau</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col text-center">
            <RouterLink to="/packs">
                <p class="text-[0.65em] uppercase">Packs</p>
            </RouterLink>
            <RouterLink to="/shop">
                <p class="text-[0.65em] uppercase">Produits</p>
            </RouterLink>
            <RouterLink to="/customer-service">
                <p class="text-[0.65em] uppercase">Service client</p>
            </RouterLink>
            <RouterLink to="/all-product">
                <p class="text-[0.65em] uppercase">Production</p>
            </RouterLink>
        </div>
    </section>

    <section class="mt-10 pb-10">
        <div class="flex md:flex-row flex-col md:items-start items-center justify-around py-4 h-auto">
            <div class="flex flex-col justify-start md:items-start gap-[5px] text-[0.65em] uppercase">
                <p>Livraison</p>
                <p>France € / FR</p>
            </div>
            <div class="flex flex-col justify-start md:items-start items-center gap-[5px] text-[0.65em] uppercase">
                <p>Service clients</p>
                <p>Livraisons & retours</p>
                <p>Nous contacter</p>
                <p>Suivre votre commande</p>
                <p>+33 00 00 00 00 00</p>
                <p>Retourner votre commande</p>
                <p>Prendre un rendez-vous</p>
            </div>
            <div class="flex flex-col justify-start md:items-start items-center gap-[5px] text-[0.65em] uppercase">
                <p>Mentions légales</p>
                <p>Paramètres des cookies</p>
                <p>Accessibilité</p>
                <p>Carrières</p>
            </div>
            <div class="flex flex-col justify-start md:items-start items-center gap-[5px] text-[0.65em] uppercase">
                <p>S'inscrire à la newsletter</p>
                <p>Photographies retouchées</p>
            </div>
        </div>
        <div class="flex justify-center space-x-6">
            <img src="../assets/socials_facebook.svg" alt="facebook">
            <img src="../assets/socials_instagram.svg" alt="instagram">
            <img src="../assets/socials_X.svg" alt="X">
            <img src="../assets/socials_tiktok.svg" alt="tiktok">
            <img src="../assets/socials_youtube.svg" alt="youtube">
        </div>
    </section>
</template>

<script>
export default {
    name: 'Footer',
}
</script>