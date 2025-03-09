<template>
    <div class="textBlock">
      <span class="span">4 SAISONS</span>
      <h3 class="subTitle">DECOUVRIR LA COLLECTION</h3>
      <div class="arrow"></div>
    </div>
</template>

<style scoped>


.textBlock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  height: 100%;
  color: white;
  margin-top:35%;
}

.span {
  font-size: 0.75rem;
  font-weight: bold;
  margin-bottom: 0;
}

.subTitle {
  font-weight: lighter;
  font-size: 0.75rem;
  margin-top: 0;
}

.arrow {
  border: solid rgb(255, 255, 255);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-top: 5px
}



</style>