<script setup lanf="ts">
import bgHead from '@/assets/img/painting/paintingA11.jpg'

</script>
<template>
  <div id="background-relative">
    <img class="bgHead" :src="bgHead" />
    <TopNav class="topnav" :style="'white'" :page="'home'"/>
    <div class="text-bg"></div>
    <div class="text-content">
      <div id="impression">Impressionism (n.)</div>
      <div id="impression-meaning">a style or movement in painting originating in France in the 1860s, characterized by
        a concern with depicting
        the visual impression of the moment, especially in terms of the shifting effect of light and color.</div>
    </div>
  </div>
</template>

<style scope>
.background-relative {
  width: auto;
  height: 500px;
  overflow: hidden;
  border-radius: 0px;
  position: relative;
  z-index: 1;
  margin-bottom: 0px;
}

.bgHead {
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: top;
}

.topnav {
  width: 100%;
  position: absolute !important;
  top: 0px;
  z-index: 12;
  max-width: 900px;
}

.text-bg {
  width: calc(100% - 50px);
  height: 150px;
  position: absolute;
  top: 300px;
  background-color: var(--secondary);
  z-index: 2;
  opacity: 40%;
  max-width: 850px;
}

.text-content {
  text-align: left;
  font-size: 12px;
  padding: 16px;
  width: calc(100% - 50px);
  height: 150px;
  position: absolute;
  top: 300px;
  background-color: var(--secondary);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 850px;
}

#impression {
  font-size: 16px;
  color: var(--accent);
  font-weight: bold;
}

#impression-meaning {
  font-size: 12px;
  color: white;
  font-weight: lighter;
}
</style>
