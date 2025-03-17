<template>
    <section class="h-screen flex justify-center items-end">
        <div class="text-center mb-6">
            <h3 class="text-[0.85em] uppercase">Produit du jour</h3>
            <p class="text-[0.65em] uppercase">Explorer</p>
        </div>
    </section>

    <section class="h-[180vh]">
        <div class="h-[45%] grid grid-cols-3 grid-rows-2 gap-6 px-[350px] mb-6">
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
        </div>

        <div class="text-center mb-6">
            <h3 class="text-[0.85em] uppercase">Collections</h3>
            <p class="text-[0.65em] uppercase">Explorer</p>
        </div>

        <div class="h-[25%] grid grid-cols-2 gap-6 px-[350px] mb-6">
            <div class="h-full bg-black"></div>
            <div class="h-full bg-black"></div>
        </div>

        <div class="h-[15%] grid grid-cols-3 gap-6 px-[350px] mb-6">
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>
    </section>

    <section class="h-screen bg-[#999999] flex justify-center items-end">
        <div class="text-center mb-6">
            <h3 class="text-[0.85em] uppercase">Packs</h3>
            <p class="text-[0.65em] uppercase">Explorer</p>
        </div>
    </section>

    <section class="h-screen">
        <div class="mt-12 h-[40%] grid grid-cols-4 gap-6 px-[250px] mb-12">
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>

        <div class="text-center mb-6">
            <h2>Indécis ?</h2>
        </div>

        <div class="h-[40%] grid grid-cols-2 gap-12 mx-[250px] p-12 bg-[#999999] mb-4">
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-[5px]">
                <div class="h-full bg-black"></div>
                <div class="text-center">
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>

        <div class="text-center mb-6">
            <p class="text-[0.65em] uppercase">voir plus</p>
        </div>
    </section>

    <section class="h-[25vh]">
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
        <div class="flex flex-row justify-around items-center mb-[5px] h-[15%] px-[475px]">
            <img src="../assets/socials_facebook.svg" alt="facebook">
            <img src="../assets/socials_instagram.svg" alt="instagram">
            <img src="../assets/socials_X.svg" alt="X">
            <img src="../assets/socials_tiktok.svg" alt="tiktok">
            <img src="../assets/socials_youtube.svg" alt="youtube">
        </div>
    </section>
</template>

<style scoped>
#popular {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: end;
}

.infos {
    text-align: center;
    margin-bottom: 25px;
}

.infos h3 {
    font-size: 0.85em;
    text-transform: uppercase;
}

.infos p {
    font-size: 0.65em;
    text-transform: uppercase;
}

#packs {
    height: 180vh;
}

#packs .pack-grid {
    height: 45%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 25px;
    padding: 0 350px;
    margin-bottom: 25px;
}

#packs .pack-item {
    height: 100%;
    background-color: #000000;
}

#packs .pack-grid-2 {
    height: 25%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1;
    gap: 25px;
    padding: 0 350px;
    margin-bottom: 25px;
}

#packs .pack-item-2 {
    height: 100%;
    background-color: #000000;
}

#packs .pack-grid-3 {
    height: 15%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1;
    gap: 25px;
    padding: 0 350px;
    margin-bottom: 25px;
}

#packs .pack-grid-3 div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
}

#packs .pack-item-3 {
    height: 100%;
    background-color: #000000;
}

#packs .pack-name-3 {
    text-align: center;
}

#packs-swiper {
    height: 100vh;
    background-color: #999999;
    display: flex;
    justify-content: center;
    align-items: end;
}

#other {
    height: 100vh;
}

#other .others div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
}

#other .others {
    margin-top: 50px;
    height: 40%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1;
    gap: 25px;
    padding: 0 250px;
    margin-bottom: 50px;
}

#other .other-item {
    height: 100%;
    background-color: #000000;
}

#other .other-name {
    text-align: center;
}

#other .choose {
    height: 40%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1;
    gap: 50px;
    margin: 0 250px;
    padding: 50px;
    background-color: #999999;
    margin-bottom: 15px;
}

#other .choose div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
}

#other .choose-item {
    height: 100%;
    background-color: #000000;
}

#other .choose-name {
    text-align: center;
}

#footer {
    height: 25vh;
}

#footer .list-wrapper {
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    height: 80%;
}

#footer .lists {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 5px;
    font-size: 0.65em;
    text-transform: uppercase;
}

#footer .socials {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5px;
    height: 15%;
    padding: 0 475px;
}
</style>