<template>
  <div class="relative min-h-screen w-full overflow-hidden">
    <video src="../assets/home_video.mp4" autoplay loop muted
      class="absolute top-0 left-0 w-screen h-screen object-cover -z-10"></video>
    <RouterLink to="/shop"
      class="absolute left-1/2 bottom-[50px] -translate-x-1/2 text-center text-white flex flex-col items-center animate-pulse">
        <span class="text-[0.75rem] font-bold uppercase">4 saisons</span>
        <h3 class="text-xs font-light uppercase">Découvrir la collection</h3>
        <div class="w-2 h-2 rotate-45 border-r-2 border-b-2 border-white"></div>
    </RouterLink>
  </div>
</template>
