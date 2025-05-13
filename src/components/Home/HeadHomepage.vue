<script setup lanf="ts">

</script>
<template>
  <div id="background">
    <TopNav :page="'home'" :style="'white'" />
    <div class="relative"></div>
    <div class="absolute">
      <h>Impressionism (n.)</h>
      <p>a style or movement in painting originating in France in the 1860s, characterized by a concern with depicting
        the visual impression of the moment, especially in terms of the shifting effect of light and color.</p>
    </div>
  </div>
</template>

<style scope>
#background {
  height: 560px;
  background-color: var(--p1);
}

div.absolute {
  width : 350px ;
  position: absolute;
  top : 330px ;
  background-color: none;
  padding: 15px;
  backdrop-filter: 5%;
}

div.relative {
  width : 350px ;
  height: 200px;
  margin: 240px 30px 40px 0px;
  position: relative;
  background-color: var(--secondary);
  opacity: 75%;
}

</style>
