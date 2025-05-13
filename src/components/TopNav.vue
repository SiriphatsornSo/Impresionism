<script setup lang="ts">
import user1Profile from '@/assets/img/userProfile/user1.png'
import { computed } from 'vue';
const props = defineProps<{
  page : 'home' | 'other'
  style? : 'white' | 'dark' | 'light'
}>()

const styleClass = computed(() => {
  switch (props.style) {
    case 'white' : return 'head-white head'
    case 'dark' : return 'head-dark head'
    default: return 'head-light head'
  }
})

</script>


<template>
  <div id="top">
    <ButtonCircle  :type="page == 'home' ? 'search' : 'leftArrow'" :style="style" />
   <h :class="styleClass">Impressionism</h>
   <div :class="[style, 'profile']" > <img :class="[style, 'profile']"  :src="user1Profile" /> </div>
  </div>

</template>

<style scoped>
#top {
  background-color: none;
  display: flex;
  flex-direction : row;
  justify-content: space-between ;
  padding: 30px 30px 10px 30px;
  align-items :center ;
}
.head {
  font-size: 18px;
  font-weight: bold;
  background-color: none ;
}

@media (min-width : 768px ) {
  .head {
    font-size : 24px
  }
}

.head-white{
  color: white;
}

.head-dark{
  color: black;
}

.head-light{
  color: var(--primary);
}

.profile {
  width: auto;
  height: auto ;
  background-color: white ;
  border: none ;
  border-radius : 50% ;
  object-fit: cover;
}

.profile img {
  margin: auto;
  width: 50px ;
  height: 50px ;
  object-fit: cover ;
  border: 2px solid #fff;
  border-radius : 50% ;
}

.profile.white img {
  border-color: white;
}

.profile.dark img {
  border-color: black;
}

.profile.light img {
  border-color: var(--primary);
}

@media (min-width: 768px) {
  .profile img {
    width: 60px;
    height: 60px;
  }

}

</style>
