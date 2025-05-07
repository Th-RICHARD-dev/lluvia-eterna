<template>
    <div class="bg-[#fdf7ec] min-h-screen text-[#584738] font-serif px-6 lg:px-20 py-12 mt-20">
      <h1 class="text-center text-3xl lg:text-4xl font-semibold mb-6">NOUS CONTACTER</h1>
  
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
  
        <!-- Left Contact Info -->
        <div class="space-y-6 text-sm">
          <p>
            Nos Ambassadeurs vous réservent un accueil personnalisé et auront le plaisir de vous accompagner dans votre découverte de Livia Eterna et de ses produits.
          </p>
  
          <div class="space-y-4">
            <h2 class="text-lg font-semibold">📞 NOUS APPELER</h2>
            <p>Nos Ambassadeurs sont à votre écoute et vous apportent un conseil personnalisé par téléphone.</p>
            <div>
              <p class="underline">Parfums Livia Eterna</p>
              <p class="underline">La Collection Saison :</p>
              <p class="underline">Votre commande en ligne :</p>
            </div>
            <p>Service disponible du lundi au samedi de 9h à 19h.</p>
          </div>
        </div>
  
        <!-- Right Form -->
        <div class="lg:col-span-2">
          <h2 class="text-lg font-semibold mb-4">NOUS ADRESSER UN EMAIL</h2>
          <p class="text-xs italic mb-6">(*) Les champs marqués d’un astérisque sont obligatoires.</p>
  
          <form class="space-y-6">
            <!-- Personal Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label>*Civilité</label>
                <select class="border-b w-full focus:outline-none bg-transparent" required>
                  <option>M.</option>
                  <option>Mme</option>
                </select>
              </div>
              <div>
                <label>*Nom</label>
                <input type="text" class="border-b w-full bg-transparent focus:outline-none" required>
              </div>
              <div>
                <label>*Prénom</label>
                <input type="text" class="border-b w-full bg-transparent focus:outline-none" required>
              </div>
              <div>
                <label>*Langue</label>
                <select class="border-b w-full focus:outline-none bg-transparent" required>
                  <option>Français</option>
                  <option>Anglais</option>
                </select>
              </div>
              <div>
                <label>*Pays/Région</label>
                <input type="text" class="border-b w-full bg-transparent focus:outline-none" required>
              </div>
              <div>
                <label>*Téléphone mobile</label>
                <input type="tel" class="border-b w-full bg-transparent focus:outline-none" required>
              </div>
              <div class="md:col-span-2">
                <label>*E-mail</label>
                <input type="email" class="border-b w-full bg-transparent focus:outline-none" required> 
              </div>
            </div>
  
            <!-- Request -->
            <div class="space-y-4">
              <div>
                <label>*Objet</label>
                <select class="border-b w-full focus:outline-none bg-transparent" required>
                  <option>Information sur les produits</option>
                  <option>Commande</option>
                  <option>Retour</option>
                </select>
              </div>
              <div>
                <label>*Votre message</label>
                <textarea rows="4" maxlength="360" class="border-b w-full bg-transparent focus:outline-none" required></textarea>
                <p class="text-right text-xs text-gray-500">360 caractères restants</p>
              </div>
              <button type="submit" class="mt-4 bg-[#ede3d1] hover:bg-[#d8cbb6] transition text-[#584738] py-2 px-6 rounded-sm">
                ENVOYER
              </button>
            </div>
          </form>
  
          <!-- Legal Disclaimer -->
          <p class="text-xs mt-6 text-gray-600">
            Parfums Livia Eterna est le responsable du traitement de vos données... (ajoutez ici votre disclaimer RGPD si besoin).
          </p>
  
          <!-- Bottom Info -->
          <div class="mt-10 text-sm space-y-4">
            <p>
              <strong>Discuter en ligne</strong><br>
              Un ambassadeur Livia Eterna vous accompagne tout au long de votre expérience.
            </p>
            <p class="text-gray-400">Votre conseiller beauté n’est pas disponible pour le moment, veuillez réessayer plus tard.</p>
            <p>
              <strong>Échangez avec nous par Message</strong><br>
              Un ambassadeur vous répond à vos questions par message, à votre rythme tout au long de la journée.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  