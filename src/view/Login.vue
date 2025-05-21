<script setup lang="ts">
import axios from 'axios';
import { nextTick, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const formRef = ref<HTMLFormElement | null>(null)
const email = ref('')
const password = ref('')
const router = useRouter()

const user: any = ref(null);
const Liff_ID = "2007442760-5R3r74De";
import { provide } from 'vue'
import liff from '@line/liff';
provide('user', user)

const initLiff = async () => {
  try {
    await liff.init({ liffId: Liff_ID });

    if (!liff.isLoggedIn()) {
      await liff.login();
      return;
    }

    const profile = await liff.getProfile();
    console.log("User Profile:", profile);
    user.value = profile;

    const tokenLine = liff.getAccessToken();
    if (tokenLine) {
      localStorage.setItem("token", tokenLine);
    } else {
      console.warn("Access token is null");
    }

    await nextTick();
    console.log('home')
    router.push({ name: "home" });

  } catch (err) {
    console.error("LIFF init error:", err);
  }
};

const loginPost = async () => {
  await axios.post('https://reqres.in/api/login', {
    "email": email.value,
    "password": password.value
  }, {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  }).then(response => {
    console.log('Success:', response.data.id, response.data.token);
    localStorage.setItem('token', response.data.token)
  }).catch(error => {
    console.error('Error:', error);
  });
}

const submitForm = async () => {
  if (formRef.value?.checkValidity()) {
    await loginPost()
    console.log(email.value, password.value)
    router.push({ name: 'home' })
  } else {
    formRef.value?.reportValidity()
  }
}

</script>
<template>
  <div class="top-container">
    <h id="login-head">Login</h>
    <form class="login-form-container" @submit.prevent="submitForm" ref="formRef">
      <label>Email</label>
      <input type="email" id="email" size="30" v-model="email" required />
      <label>Password</label>
      <input type="password" id="password" size="30" v-model="password" required />
      <ButtonDefault class="btn-login" :typeButton="'submit'" :title="'LogIn'" />
    </form>
    <button @click="initLiff" class="btn-login linelogin"><font-awesome-icon size="xl" :icon="['fab', 'line']" />
      continue with Line</button>
  </div>
</template>
<style scope>
.linelogin {
  width: 100%;
  background-color: #06C755;
  height: 60px;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  font-weight: lighter;
  max-width: 500px;
  margin: 0px 30px;
}

.linelogin:hover {
  border: 1px solid #06C755;
  background-color: white;
  color: #06C755;
}

.top-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  max-width: 900px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0px 30px;
}

.login-form-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
}

.login-form-container>label {
  font-size: 14px;
  font-weight: lighter;
  color: var(--p6);
  margin-bottom: 4px;
  padding-left: 4px;
}

.login-form-container>input {
  height: 40px;
  border: 2px solid var(--p6);
  border-radius: 12px;
  margin-bottom: 16px;
  padding-left: 10px;
  padding-right: 10px;
}

.btn-login {
  margin-top: 20px;
}

#login-head {
  display: block;
  text-align: center;
  width: 100%;
  font-size: 30px;
  color: var(--primary);
  font-weight: bold;
}
</style>
