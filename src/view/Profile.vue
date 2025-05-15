<script setup lang="ts">
import { mockUsers } from '@/data/users';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import 'animate.css';

const route = useRoute()
const userId = Number(route.params.id)
const user = mockUsers.find((a) => a.id === userId)

const today = new Date().toISOString().split('T')[0]
const name = ref('')
const tel = ref('')
const email = ref('')
const birthDate = ref(today)
const gender = ref('')
const provinces = ref([])
const province = ref('')
const districts = ref([])
const district = ref('')
const subdistricts = ref([])
const subdistrict = ref('')
const zipCode = ref(null)
const openModal = ref(false)

const editProfileDetail = {
  newName: name,
  newTel: tel,
  newEmail: email,
  newBirthDate: birthDate,
  newGender: gender,
  newProvince: province.name_th,
  newDistirct: district.name_th,
  newSubdistirct: subdistrict.name_th,
  newZipCode: zipCode
}


const data = ref([])
const fetchdata = async () => {
  await axios.get('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json').then((response) => {
    provinces.value = response.data
  })

}
onMounted(async () => {
  fetchdata()
})

watch(province, async (newProvince, oldProvince) => {
  if (newProvince !== oldProvince) {
    districts.value = newProvince?.amphure
    subdistricts.value = district?.tambon
    zipCode.value = null
  }
})

watch(district, async (district) => {
  subdistricts.value = district.tambon
  zipCode.value = null
})

watch(subdistrict, async (subdistrict) => {
  zipCode.value = subdistrict.zip_code
})

const editProfile = () => {
  openModal.value = true
}
const confirmHandler = () => {
 openModal.value = false
 console.log('confirm')
}

</script>
<template>
  <div class="profile-relative">
    <img :src="user?.profileSrc" />
    <TopNav class="topnav" :page="'profile'" :style="'white'" />
  </div>
  <div class="profile-container">
    <div class="profile-detail-container">
      <div id="userName">{{ user?.name }}</div>
      <div id="userRank">{{ user?.rank }}</div>
      <div id="userBio">{{ user?.biography }}</div>
    </div>

    <div class="edit-profile">
      <div id="edit-profile-text">Edit Profile</div>
      <form class="form-edit" @submit.prevent>
        <label> name</label>
        <input v-model="name" />
        <label>tel</label>
        <input type="tel" pattern="[0-9]{10}" v-model="tel" />
        <label>email</label>
        <input type="email" id="email" size="30" v-model="email" />
        <label>birth date</label>
        <input type="date" v-model="birthDate" />
        <label>gender</label>
        <div class="radio-container">
          <label class="radio-input-label"><input class="radio-input" type="radio" v-model="gender" value="male" />
            male</label>
          <label class="radio-input-label"><input class="radio-input" type="radio" v-model="gender" value="female" />
            female</label>
          <label class="radio-input-label"><input class="radio-input" type="radio" v-model="gender" value="other" />
            other</label>
        </div>
        <label>Province</label>
        <select v-model="province">
          <option v-for="p in provinces" :key="p.id" :value="p" @change="">{{ p.name_th }}</option>
        </select>
        <label>Distirct</label>
        <select v-model="district">
          <option v-for="d in districts" :key="d.id" :value="d">{{ d.name_th }}</option>
        </select>
        <label >Subdistirct</label>
        <select v-model="subdistrict">
          <option v-for="s in subdistricts" :key="s.id" :value="s">{{ s.name_th }}</option>
        </select>
        <label>Zip Code : {{ zipCode }}</label>
        <ButtonDefault @click="openModal = !openModal" class="btn-edit" :title="'save'" :type="'submit'" />
      </form>
    </div>
  </div>
  <div v-if="openModal === true">
    <EditProfileModal @cancel="openModal = !openModal" @confirm="confirmHandler":editDetail="editProfileDetail" />
  </div>

</template>
<style scope>
.profile-relative {
  width: auto;
  height: 450px;
  overflow: hidden;
  border-radius: 0px;
  position: relative;
  z-index: 1;
  margin-bottom: 0px;
}

.topnav {
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 2;
}

.profile-relative>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  background-color: white;
  top: 400px;
  margin-top: 0px;
  z-index: 3;
  border-radius: 30px;
  height: 500px;
  max-width: 900px;
}

.profile-detail-container {
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
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
  .profile-relative>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 30%;
  }

  .edit-profile {
    width: 70%;
  }
}
</style>
