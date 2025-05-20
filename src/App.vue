<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from "vue";
import liff from "@line/liff";
const user: any = ref(null);
const Liff_ID = "2007442760-5R3r74De";
import router from './router';

const initLiff = async () => {
  try {
    await liff.init({ liffId: Liff_ID });

    if (!liff.isLoggedIn()) {
      liff.login({redirectUri: window.location.href});
    } else {
      const profile = await liff.getProfile();
      console.log("User Profile:", profile);
      user.value = profile;
      localStorage.setItem('user', JSON.stringify(profile));
      const tokenLine = liff.getAccessToken()
      console.log('Token:', tokenLine)
      router.push({name : 'home'})
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
  <RouterView />
</template>

<style scoped></style>
