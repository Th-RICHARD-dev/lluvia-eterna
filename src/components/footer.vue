<template>
    <img src="../assets/ornament-footer.svg" alt="ornament-footer" class="w-[50%] mb-15 place-self-center">

    <section>
        <div class="text-center mb-4">
            <h2>Indécis ?</h2>
        </div>

        <div class="h-[40%] grid grid-cols-2 gap-12 mx-auto bg-[#999999] w-[80%] mb-4 p-6">
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-[150px] bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-[150px] bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>

        <div class="text-center">
            <p class="text-[0.65em] uppercase">voir plus</p>
        </div>
    </section>

    <section class="h-[30vh] mt-10">
        <div class="flex justify-around py-4 h-[80%]">
            <div class="flex flex-col justify-start items-start gap-[5px] text-[0.65em] uppercase">
                <p>Livraison</p>
                <p>France € / FR</p>
            </div>
            <div class="flex flex-col justify-start items-start gap-[5px] text-[0.65em] uppercase">
                <p>Service clients</p>
                <p>Livraisons & retours</p>
                <p>Nous contacter</p>
                <p>Suivre votre commande</p>
                <p>+33 00 00 00 00 00</p>
                <p>Retourner votre commande</p>
                <p>Prendre un rendez-vous</p>
            </div>
            <div class="flex flex-col justify-start items-start gap-[5px] text-[0.65em] uppercase">
                <p>Mentions légales</p>
                <p>Paramètres des cookies</p>
                <p>Accessibilité</p>
                <p>Carrières</p>
            </div>
            <div class="flex flex-col justify-start items-start gap-[5px] text-[0.65em] uppercase">
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