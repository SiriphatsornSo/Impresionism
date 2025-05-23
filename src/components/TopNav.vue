<script setup lang="ts">
import { computed, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { Slide } from 'vue3-burger-menu'
import axios from 'axios';
import liff from '@line/liff';
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia';
  const storedUser = useUserStore()
  const { user } = storeToRefs(storedUser);
interface LINEProfile {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
}

console.log('store'+ user.value)

// const user = ref<LINEProfile | null>(null)

const isLoggedIn = ref(false)
const isOpen = ref(true)

const closeOnScroll = () => {
  if (isOpen.value) {
    isOpen.value = false;
  }
};

const usertest = ref({
  id: null,
  first_name: '',
  last_name: '',
  email: '',
  avatar: ''
});

const fetchUserData = async () => {
  await axios.get(`https://reqres.in/api/users/2`, {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  }).then((response) => {
    console.log('Success:', response.data);
    usertest.value = response.data.data;
    console.log(usertest.value.id)
  }).catch(error => {
    console.error('Error:', error);
  });
}

onMounted(async () => {
  console.log('f navtop' + storedUser.user)
  isLoggedIn.value = !!localStorage.getItem('token')
  window.addEventListener('scroll', closeOnScroll);
  fetchUserData()
});

onUnmounted(() => {
  window.removeEventListener('scroll', closeOnScroll);
});

const props = defineProps<{
  page?: 'home' | 'other' | 'profile'
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
  if (route.meta.backTo) {
    router.push({ name: 'home' })
  }
}

const goTo = (pathname: string) => {
  router.push({ name: pathname })
}

const Liff_ID = "2007442760-5R3r74De";
const logoutHadler = async () => {
  await liff.init({ liffId: Liff_ID });
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  if (liff.isLoggedIn()) {
    liff.logout()
    console.log('liff log out')
  }
  console.log('log out')
  if (router.currentRoute.value.name === 'home') {
    router.go(0)
  } else {
    router.push({ name: 'home' })
  }
}


const handleCloseMenu = () => {
  isOpen.value = false
}
const handleOpenMenu = () => {
  isOpen.value = true
}

</script>


<template>
  <div id="top">
    <div v-if="page === 'home' && ( user || isLoggedIn)" @click="router.push({ name: 'profile', params: { id: 2 } })"
      :class="[style, 'profile']"><img :class="[style, 'profile']" :src="user?.pictureUrl || usertest.avatar" />
    </div>
    <ButtonCircle v-else-if="page === 'home'" @click="goTo('login')" :type="'user'" :style="style" />
    <ButtonCircle v-else="page !== 'home'" @click="goBack" :type="'leftArrow'" :style="style" />

    <h1 @click="goBack" :class="styleClass">Impressionism</h1>
    <div :class="[style, 'hamburger-bar']">
      <Slide noOverlay :isOpen="isOpen" @openMenu="handleOpenMenu" @closeMenu="handleCloseMenu()" right>
        <a v-if="( user || isLoggedIn) && page !== 'profile'" id="menu-label" @click="router.push({ name: 'profile', params: { id: 2 } })">Profile</a>
        <a v-if="( user || isLoggedIn) && page === 'profile'" id="menu-label" @click="router.push({ name: 'editProfile', params: { id: 2 }})">Edit Profile</a>
        <a v-if="( user || isLoggedIn)" id="menu-label" @click="logoutHadler">Logout</a>
        <a v-else id="menu-label" @click="goTo('login')">Login</a>
        <a id="menu-label" @click="router.push('/this-path-does-not-exist')">Test 404 Page</a>
      </Slide>
    </div>

  </div>
</template>

<style scoped>
:deep(.bm-menu) {
  right: -30px;
  height: 2000px;
  background-color: var(--secondary);
}

.light :deep(.bm-burger-bars) {
  background-color: var(--primary) !important;
}

:deep(.bm-cross) {
  background-color: white !important;
  z-index: 10 !important;
}

:deep(#menu-label) {
  color: #fff;
  padding: 1rem;
  display: block;
  text-decoration: none;
}

:deep(.bm-burger-bars) {
  background-color: white !important;
}

:deep(.bm-burger-button) {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  margin: 0 auto !important;
  width: 40px !important;
  height: 30px !important;
}

.hamburger-bar {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: none;
  display: flex;
  flex-direction: row;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  width: 50px;
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
    width: 60px;
    width: 60px;
  }

  .big-icon {
    font-size: 60px;
  }

}

@media (min-width:900px) {
  :deep(.bm-menu) {
    margin-right: calc((100vw - 915px)/2);
  }
}
</style>
