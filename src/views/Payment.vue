<template>
    <section class="min-h-screen mt-40 px-10">
      <h1 class="text-2xl font-bold text-center text-[#584738] uppercase mb-10">Commander</h1>
      <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 max-w-6xl mx-auto">
        <!-- LIVRAISON -->
        <div class="space-y-10">
          <h2 class="text-lg text-center font-semibold text-[#584738] underline">LIVRAISON</h2>
          <input type="text" placeholder="Pays/Région" class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
  
          <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Prénom" class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
            <input type="text" placeholder="Nom" class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
          </div>
  
          <input type="text" placeholder="Adresse" class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
  
          <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Code postal" class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
            <input type="text" placeholder="Ville" class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
          </div>
        </div>
  
        <!-- DIVIDER -->
        <div class="hidden md:block w-px bg-[#584738] mx-10"></div>
  
        <!-- PAYEMENT -->
        <div class="space-y-10">
          <h2 class="text-lg font-semibold text-[#584738] text-center underline">PAYEMENT</h2>
          <input type="text" placeholder="Nom sur la carte" class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
          <input type="text" placeholder="Numéro de la carte" class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
  
          <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Date d’expiration" class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
            <input type="text" placeholder="CCV code" class="w-full px-4 py-2 border border-[#584738] rounded-lg bg-transparent text-[#584738] placeholder-[#B59E7D] focus:outline-none"/>
          </div>
  
          <div class="flex justify-center mt-4">
            <button class="bg-[#584738] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#3f2f21] transition">
              Commander
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>