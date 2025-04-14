<template>
    <section class="h-screen flex justify-center items-end mt-[10vh] relative">
  <img :src="product.header_image" class="w-full h-full object-cover">

  <div class="absolute left-1/2 -translate-x-1/2 mb-[2vh] text-center text-white flex flex-col items-center">
    <div class="absolute inset-0 bg-black/20 blur-sm rounded-md -z-10"></div>

    <h3 class="text-[0.75rem] font-bold uppercase">Collection {{ product.collection }}</h3>
    <p class="text-xs font-light uppercase">Explorer</p>
  </div>
</section>

</template>
<script>
    export default {
  name: 'GiftView',
}
</script>