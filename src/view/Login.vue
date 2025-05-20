<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const formRef = ref<HTMLFormElement | null>(null)
const email = ref('')
const password = ref('')
const router = useRouter()

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
    router.push({name: 'home'})
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
  </div>

</template>
<style scope>
.top-container {
  position : absolute ;
  width: 100% ;
  max-width: 900px ;
  top : 50%;
  transform: translateY(-50%) ;
}
.login-form-container {
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
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
