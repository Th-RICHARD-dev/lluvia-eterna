<template>

    <div class="carousel">
        <div class="carousel-item"></div>
        <div class="carousel-item"></div>
        <div class="carousel-item"></div>
        <div class="carousel-item"></div>
        <div class="carousel-item"></div> 
    </div>   
</template>


<script setup>
  $(document).ready(function(){
    $('.carousel').carousel({
      padding: 200
  });
  });
</script>

<style scoped>
    body {
    margin: 0; 
    padding: 0;
    background: #021514;   
}
.carousel{
    height: 600px; 
    perspective: 400px;
    margin-top: 5%;
}
.carousel .carousel-item {
    width: 400px;
    height: 500px;
    box-shadow: 0 0 40px #61dafb, 0 0 40px #61dafb, 0 0 40px #61dafb;
    animation: animate 2s infinite alternate;
    border-radius: 15px;
}

@keyframes animate {
    to {
      box-shadow: 0 0 50px #61dafb, 0 0 50px #61dafb, 0 0 50px #61dafb;
    }
  }
</style>