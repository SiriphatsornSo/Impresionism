<script setup lang="ts">
import user1Profile from '@/assets/img/userProfile/user1.png'
import { computed } from 'vue';
import { useRouter , useRoute } from 'vue-router'

const props = defineProps<{
  page: 'home' | 'other' | 'profile'
  style?: 'white' | 'dark' | 'light'
}>()

const styleClass = computed(() => {
  switch (props.style) {
    case 'white': return 'head-white head'
    case 'dark': return 'head-dark head'
    default: return 'head-light head'
  }
})


const router = useRouter()
const route = useRoute()

const goBack = () => {
  if (props.page !== 'home') {
    router.back()
  }
  if (route.meta.backTo){
    router.push({ name: 'home' })
  }
}


</script>


<template>
  <div id="top">
    <ButtonCircle @click="goBack" :type="page == 'home' ? 'search' : 'leftArrow'" :style="style" />
    <h :class="styleClass">Impressionism</h>
    <div v-if="page !== 'profile'" @click="router.push({ name: 'profile', params: { id: 7 } })"
      :class="[style, 'profile']"> <img :class="[style, 'profile']" :src="user1Profile" /> </div>
    <div class="btn-gear" v-else><font-awesome-icon :icon="'gear'" class="big-icon" /></div>
  </div>

</template>

<style scoped>
#top {
  background-color: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 30px 10px 30px;
  align-items: center;
}

.head {
  font-size: 18px;
  font-weight: bold;
  background-color: none;
}

@media (min-width : 768px) {
  .head {
    font-size: 24px
  }
}

.head-white {
  color: white;
}

.head-dark {
  color: black;
}

.head-light {
  color: var(--primary);
}

.profile {
  width: auto;
  height: auto;
  background-color: white;
  border: none;
  border-radius: 50%;
  object-fit: cover;
}

.profile img {
  margin: auto;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 2px solid #fff;
  border-radius: 50%;
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

.btn-gear {
  display: flex ;
  justify-content: center ;
  align-items: center ;
  width : 50px ;
  width : 50px ;
}

.big-icon {
  font-size: 45px;
  color: white;
}

@media (min-width: 768px) {
  .profile img {
    width: 60px;
    height: 60px;
  }
  .btn-gear {
  width : 60px ;
  width : 60px ;
}
.big-icon {
  font-size: 60px;
}

}


</style>
