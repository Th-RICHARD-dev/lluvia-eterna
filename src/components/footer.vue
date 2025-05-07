<template>
    <img src="../assets/ornament-footer.svg" alt="ornament-footer" class="w-[50%] mb-15 place-self-center">

    <section>
        <div class="text-center mb-4">
            <h2>Indécis ?</h2>
        </div>

        <div class="h-[40vh] w-[75%] grid grid-cols-2 gap-12 mx-auto bg-gradient-to-tr from-[#89765B] to-[#584738] rounded-2xl mb-4 relative">
            <div class="flex flex-col justify-center gap-[5px] absolute left-[10%] top-[-25px] w-[30%]">
                <div class="h-[200px] bg-[url('/src/assets/footer_question.svg')] object-cover bg-center rounded-xl p-10 flex flex-col justify-center items-center">
                    <h2 class="text-white text-center text-xl">Nous vous aidons a trouver votre odeur parfaite !</h2>
                    <p class="text-white text-center">En seulement quelques questions !</p>
                    <RouterLink to="/quiz">
                        <button class="text-white bg-[#584738] px-2 pt-1 pb-2 rounded-xl mt-4 border-1">C’est parti</button>
                    </RouterLink>
                </div>
                <div class="text-center">
                    <p class="uppercase text-[#B59E7D]">Questionnaire</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px] absolute right-[10%] top-[-25px] w-[30%]">
                <RouterLink to="/gift">
                    <div class="h-[200px] bg-[url('/src/assets/footer_gift.svg')] object-cover bg-center rounded-2xl"></div>
                </RouterLink>
                <div class="text-center">
                    <p class="uppercase text-[#B59E7D]">Faire un cadeau</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col text-center">
            <RouterLink to="/packs"><p class="text-[0.65em] uppercase">Packs</p></RouterLink>
            <RouterLink to="/shop"><p class="text-[0.65em] uppercase">Produits</p></RouterLink>
            <RouterLink to="/customer-service"><p class="text-[0.65em] uppercase">Service client</p></RouterLink>
            <RouterLink to="/all-product"><p class="text-[0.65em] uppercase">Production</p></RouterLink>
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