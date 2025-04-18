<template>
    <section class="bg-[#F8F8F8] px-10 py-16">
      <div class="flex flex-row justify-center gap-10">
        <!-- COLONNE GAUCHE : IMAGES -->
        <div class="w-1/2 flex flex-col ">
          <!-- Image principale (boîte) -->
          <img src="@/assets/box_summer_big.svg" class="w-full " />
  
          <!-- 4 images en grille -->
          <div class="grid grid-cols-2 gap-1">
            <img src="@/assets/summer_header_img.svg" class="w-full h-full object-cover " />
            <img src="@/assets/summer_product_big.svg" class="w-full h-auto object-cover " />
            <img src="@/assets/sea_product_big.svg" class="w-full h-auto object-cover " />
            <img src="@/assets/sea_header_img.svg" class="w-full h-full object-cover " />
          </div>
        </div>
  
        <!-- COLONNE DROITE : INFOS -->
        <div class="w-1/2 flex flex-col justify-start">
          <h1 class="text-3xl font-bold uppercase mb-2">Été</h1>
          <p class="uppercase text-sm text-gray-500 mb-4">Eau de parfum mixte · notes olfactives</p>
  
          <!-- Avis étoilés -->
          <div class="flex items-center mb-4">
            <p class="text-sm mr-2">★★★★★</p>
            <span class="text-xs underline text-gray-500 cursor-pointer">112 avis</span>
          </div>
  
          <!-- Tailles -->
          <p class="mb-2 text-sm">Ce produit existe en 3 tailles :</p>
          <div class="flex gap-2 mb-4">
            <button class="px-4 py-2 border rounded-lg text-sm">50 ml</button>
            <button class="px-4 py-2 border rounded-lg text-sm">100 ml</button>
            <button class="px-4 py-2 border rounded-lg text-sm">200 ml</button>
          </div>
  
          <!-- Offres (pack) -->
          <div class="space-y-2 mb-6">
            <div class="flex items-center gap-4 border rounded-lg p-2">
              <img src="@/assets/summer_product_big.svg" class="w-10 h-10 object-cover rounded" />
              <div>
                <p class="text-sm font-semibold">parfum été</p>
                <p class="text-xs text-gray-500">Inclus</p>
              </div>
            </div>
            <div class="flex items-center gap-4 border rounded-lg p-2">
              <img src="@/assets/sea_product_big.svg" class="w-10 h-10 object-cover rounded" />
              <div>
                <p class="text-sm font-semibold">Parfum Mer</p>
                <p class="text-xs text-gray-500">Offert</p>
              </div>
            </div>
          </div>
  
          <!-- Paiement -->
          <div class="text-xs text-gray-500 mb-4">
            <img class="w-20 mb-1" />
            <p>Payer en 4x dès 29,50€ sans frais. En savoir plus.</p>
          </div>
  
          <div class="flex items-center justify-between mt-4">
            <button class="bg-[#584638] text-white px-6 py-3 rounded-xl uppercase text-sm font-bold">
              Commander
            </button>
            <p class="text-xl font-semibold">150,00 €</p>
          </div>
  
          <!-- Description -->
          <div class="mt-10 text-sm leading-6 text-[#333]">
            <h2 class="font-bold uppercase mb-2">Description</h2>
            <p class="mb-4">
              <strong>Été</strong>, LA
            </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
    export default{
        name: 'Packs',
    }
</script>