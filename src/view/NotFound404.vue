<sript setup lang="ts">

</sript>
<template>
  <div class="container-notfound">
    <div id="head-notfound" >404</div>
    <div id="text-notfound">Oops this page Not Found</div>
  </div>

</template>
<style scope>
 .container-notfound {
  position : absolute ;
  top : 50% ;
  transform: translateY(-50%);
  display : flex ;
  flex-direction : column ;
  justify-content: center ;
  align-content : center ;
  text-align: center ;
  width: 100vw;
 }
 .container-notfound > div {
  text-align: center ;
  max-width: 900px;
 }
 #head-notfound{
  font-size: 40px ;
  font-weight: bold ;
 }
  #text-notfound{
  font-size: 24px ;
  font-weight: lighter ;
 }

</style>
