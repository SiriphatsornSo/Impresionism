<script setup lang="ts">
import userTestPinia from '@/assets/img/painting/paintingA13.jpg'
import { RouterView } from 'vue-router'
import { nextTick, onMounted, ref, watch } from "vue";
import liff from "@line/liff";
const Liff_ID = "2007442760-5R3r74De";
import router from './router';
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia';
const store = useUserStore()
const { user } = storeToRefs(store)

interface LINEProfile {
  userId: string
  displayName: string
  pictureUrl: string
  statusMessage?: string
}

const testUserPinia: any = {
  userId: '2',
  displayName: 'testPinia',
  pictureUrl: userTestPinia,
  statusMessage: 'Hello',
}

// const store = useUserStore()

// const initLiff = async () => {
//   try {
//     await liff.init({ liffId: Liff_ID });
//     if (!liff.isLoggedIn()) {
//       await liff.login();
//       return;
//     }
//     const profile = await liff.getProfile();
//     console.log("User Profile:", profile);
//     user.value = profile;
//     store.setUser(profile)
//     const tokenLine = liff.getAccessToken();
//     if (tokenLine) {
//       localStorage.setItem("token", tokenLine);
//     } else {
//       console.warn("Access token is null");
//     }

//     await nextTick();
//     console.log('home')
//     router.push({ name: "home" });

//   } catch (err) {
//     console.error("LIFF init error:", err);
//   }

const initLiff = async () => {
  try {
    await liff.init({ liffId: Liff_ID });
    if (!liff.isLoggedIn()) {
      router.push({ name: 'login' })
    } else {
      const profile = await liff.getProfile();
      console.log("User Profile:", profile);
      await store.setUser(profile)
      console.log('after set :' , store.user?.displayName)
      const tokenLine = liff.getAccessToken()
      console.log('Token:', tokenLine)
      await nextTick()
      if (tokenLine) {
        localStorage.setItem('token', tokenLine);
      } else {
        console.warn('Access token is null');
      }
    }
  } catch (err) {
    console.error("LIFF init error:", err);
  }
};

onMounted(async () => {
  await initLiff();
});

</script>

<template>
  <RouterView :key="user?.userId || 'no-user'" />
</template>

<style scoped></style>
