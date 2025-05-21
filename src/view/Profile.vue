<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import 'animate.css';
import { useUserStore } from '@/stores/user'
import { mockPaintings } from '@/data/painting'

const route = useRoute()
const userId = Number(route.params.id)
const userAPI = ref({
  id: null,
  first_name: '',
  last_name: '',
  email: '',
  avatar: ''
});


interface LINEProfile {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
}

const user = ref<LINEProfile | null>(null)
const storedUser = useUserStore()
user.value = storedUser.user

const fetchUserData = async () => {
  await axios.get(`https://reqres.in/api/users/${userId}`, {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  }).then((response) => {
    console.log('Success:', response.data);
    userAPI.value = response.data.data;
    console.log(userAPI.value.id)
  }).catch(error => {
    console.error('Error:', error);
  });
}

onMounted(async () => {
  fetchUserData()
})

</script>
<template>
  <div class="container">
    <div class="profile-relative">
      <img v-if="user" :src="user.pictureUrl" />
      <img v-else :src="userAPI.avatar" />

      <TopNav class="topnav" :page="'profile'" :style="'white'" />
    </div>
    <div class="profile-container">
      <div v-if="user" class="profile-detail-container">
        <div id="userName">{{ user.displayName }} </div>
        <div id="userRank">{{ user.statusMessage }}</div>
        <div id="userBio">{{ userAPI.email }}</div>
      </div>
      <div v-else class="profile-detail-container">
        <div id="userName">{{ userAPI.first_name }} </div>
        <div id="userRank">{{ userAPI.last_name }}</div>
        <div id="userBio">{{ userAPI.email }}</div>
      </div>
      <div v-if="user" class="album">
        <div class="head-album">{{ user.displayName }} 's Artwork Album </div>
        <div class="painting-container">
          <RouterLink class="painting-card" v-for="painting in mockPaintings" :key="painting.id"
            :to="{ name: 'painting', params: { id: painting.id } }">
            <PaintingCard :painting="painting" :key="painting.id" :data="painting" />
          </RouterLink>
        </div>
      </div>
      <div v-else class="album">
        <div class="head-album">{{ userAPI.first_name }}'s Artwork Album</div>
        <div class="painting-container">
          <RouterLink class="painting-card" v-for="painting in mockPaintings" :key="painting.id"
            :to="{ name: 'painting', params: { id: painting.id } }">
            <PaintingCard :painting="painting" :key="painting.id" :data="painting" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

</template>
<style scope>
.album {
  padding: 0px 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: left;
}

.head-album {
  font-size: 16px;
  font-weight: bold;
  color: var(--secondary);
  margin-bottom: 20px;
  padding: 0px;
}

.painting-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0px;
}

.painting-card {
  width: 50%;
  display: inline-block;
  text-align: center;
  text-decoration: none;
}

.test-update {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 30px;
}

.test-update>label {
  font-size: 14px;
  font-weight: lighter;
  color: var(--p6);
  margin-bottom: 4px;
  padding-left: 4px;
}

.test-update>input {
  height: 40px;
  border: 2px solid var(--p6);
  border-radius: 12px;
  margin-bottom: 16px;
  padding-left: 10px;
  padding-right: 10px;
}

.container {
  position: relative;
}

.profile-relative {
  width: auto;
  height: 450px;
  overflow: hidden;
  border-radius: 0px;
  margin-bottom: 0px;
}

.profile-relative>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.topnav {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 10;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  top: 400px;
  margin-top: 0px;
  z-index: 3;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: auto;
  max-width: 900px;
  margin-top: -50px;
  position: absolute;
}

.profile-detail-container {
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: auto;
}

.profile-detail-container>div {
  text-align: center;
}

#userName {
  font-size: 30px;
  color: var(--primary);
  font-weight: bold;
}

#userRank {
  font-size: 14px;
  color: var(--accent);
  font-weight: lighter;
  padding-bottom: 4px;
}

#userBio {
  font-size: 12px;
  color: black;
  font-weight: lighter;
}

.edit-profile {

  padding: 10px 30px;
  width: 100%;

}

.form-edit {
  display: flex;
  flex-direction: column;
}

#edit-profile-text {
  font-size: 16px;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 20px;
}

.form-edit>label {
  font-size: 14px;
  font-weight: lighter;
  color: var(--p6);
  margin-bottom: 4px;
  padding-left: 4px;
}

.form-edit>input {
  height: 40px;
  border: 2px solid var(--p6);
  border-radius: 12px;
  margin-bottom: 16px;
  padding-left: 10px;
  padding-right: 10px;
}

.radio-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
}

.radio-input-label {
  display: inline-block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.radio-input {
  margin-right: 10 px;
  height: 100%;
}

.form-edit>select {
  height: 40px;
  border: 2px solid var(--p6);
  border-radius: 12px;
  margin-bottom: 16px;
  padding-left: 10px;
  padding-right: 10px;
}

.btn-edit {
  margin-top: 20px;
}

@media (min-width : 768px) {

  .edit-profile {
    width: 70%;
  }

  .test-update {
    width: 70%;
  }
}
</style>
