<template>
    <section id="popular">
        <div class="infos">
            <h3>Produit du jour</h3>
            <p>Explorer</p>
        </div>
    </section>

    <section id="packs">
        <div class="pack-grid">
            <div class="pack-item"></div>
            <div class="pack-item"></div>
            <div class="pack-item"></div>
            <div class="pack-item"></div>
            <div class="pack-item"></div>
            <div class="pack-item"></div>
        </div>

        <div class="infos">
            <h3>Collections</h3>
            <p>Explorer</p>
        </div>

        <div class="pack-grid-2">
            <div class="pack-item-2"></div>
            <div class="pack-item-2"></div>
        </div>

        <div class="pack-grid-3">
            <div>
                <div class="pack-item-3"></div>
                <div class="pack-name-3">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div>
                <div class="pack-item-3"></div>
                <div class="pack-name-3">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div>
                <div class="pack-item-3"></div>
                <div class="pack-name-3">
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>
    </section>

    <section id="packs-swiper">
        <div class="infos">
            <h3>Packs</h3>
            <p>Explorer</p>
        </div>
    </section>

    <section id="other">
        <div class="others">
            <div>
                <div class="other-item"></div>
                <div class="other-name">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div>
                <div class="other-item"></div>
                <div class="other-name">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div>
                <div class="other-item"></div>
                <div class="other-name">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div>
                <div class="other-item"></div>
                <div class="other-name">
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>

        <div class="infos">
            <h2>Indécis ?</h2>
        </div>

        <div class="choose">
            <div>
                <div class="choose-item"></div>
                <div class="choose-name">
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div>
                <div class="choose-item"></div>
                <div class="choose-name">
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>

        <div class="infos">
            <p>voir plus</p>
        </div>
    </section>

    <section id="footer">
        <div class="list-wrapper">
            <div class="lists list-1">
                <p>Livraison</p>
                <p>France € / FR</p>
            </div>
            <div class="lists list-2">
                <p>Service clients</p>
                <p>Livraisons & retours</p>
                <p>Nous contacter</p>
                <p>Suivre votre commande</p>
                <p>+33 00 00 00 00 00</p>
                <p>Retourner votre commande</p>
                <p>Prendre un rendez-vous</p>
            </div>
            <div class="lists list-3">
                <p>Mentions légales</p>
                <p>Paramètres des cookies</p>
                <p>Accessibilité</p>
                <p>Carrières</p>
            </div>
            <div class="lists list-4">
                <p>S'inscrire à la newsletter</p>
                <p>Photographies retouchées</p>
            </div>
        </div>
        <div class="socials">
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