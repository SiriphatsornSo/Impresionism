<script setup lang="ts">
import { mockUsers } from '@/data/users';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import 'animate.css';
import { useUserStore } from '@/stores/user'

const route = useRoute()
const userId = Number(route.params.id)
const usertest: any = mockUsers.find((a) => a.id === 7)

const today = new Date().toISOString().split('T')[0]
const name = ref('')
const tel = ref('')
const email = ref('')
const birthDate = ref(today)
const gender = ref('')
const provinces: any = ref([])
const province: any = ref('')
const districts: any = ref([])
const district: any = ref('')
const subdistricts: any = ref([])
const subdistrict: any = ref('')
const zipCode = ref(null)
const openModalEdit = ref(false)
const openModalResult = ref(false)
const formRef = ref<HTMLFormElement | null>(null)
const responseStatus = ref()
const userAPI = ref({
  id: null,
  first_name: '',
  last_name: '',
  email: '',
  avatar: ''
});
const nametest = ref('')
const jobtest = ref('')

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

interface LINEProfile {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
}

const user = ref<LINEProfile | null>(null)
const storedUser = useUserStore()
user.value = storedUser.user


const data = ref([])
const fetchdata = async () => {
  await axios.get('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json').then((response) => {
    provinces.value = response.data
  })

}

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

const putUserData = async () => {
  await axios.put(`https://reqres.in/api/users/${userId}`, {
    "name": nametest.value,
    "job": jobtest.value
  }, {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  }).then(response => {
    console.log('Success Put:', response.data);
    responseStatus.value = response.status
    openModalResult.value = true
  }).catch(error => {
    console.error('Error:', error);
  });
}

const patchUserData = async () => {
  await axios.patch(`https://reqres.in/api/users/${userId}`, {
    "name": nametest.value,
    "job": jobtest.value
  }, {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  }).then(response => {
    console.log('Success Patch:', response.status);
    responseStatus.value = response.status
    openModalResult.value = true
  }).catch(error => {
    console.error('Error:', error);
  });
}

onMounted(async () => {
  fetchdata()
  fetchUserData()
})

watch(province, async (newProvince, oldProvince) => {
  if (newProvince !== oldProvince) {
    districts.value = newProvince?.amphure
    subdistricts.value = district?.tambon
    zipCode.value = null
    editProfileDetail.newProvince = newProvince.name_th
  }
})

watch(district, async (district) => {
  subdistricts.value = district.tambon
  zipCode.value = null
  editProfileDetail.newDistirct = district.name_th
})

watch(subdistrict, async (subdistrict) => {
  editProfileDetail.newSubdistirct = subdistrict.name_th
  zipCode.value = subdistrict.zip_code
})

const confirmHandler = () => {
  openModalEdit.value = false
  console.log('confirm')
}

const submitForm = () => {
  if (formRef.value?.checkValidity()) {
    openModalEdit.value = true
  } else {
    formRef.value?.reportValidity()
  }
}

const formatPhone = (event: Event) => {
  let rawValue = (event.target as HTMLInputElement).value
  rawValue = rawValue.replace(/\D/g, '')
  rawValue = rawValue.slice(0, 10)

  let formatted = rawValue
  if (rawValue.length > 3 && rawValue.length <= 6) {
    formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`
  } else if (rawValue.length > 6) {
    formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(3, 6)}-${rawValue.slice(6)}`
  }

  tel.value = formatted
}

</script>
<template>
  <TopNav class="topnav" :style="'light'" />
  <div class="edit-container">
    <div class="test-update">
      <div id="edit-profile-text">Test Update Data</div>
      <label>Name</label>
      <input v-model="nametest" />
      <label>Job</label>
      <input v-model="jobtest" />
      <ButtonDefault style=" height: auto; padding: 20px; margin: 5px ;" @click="putUserData" :title="'Put UserData'" />
      <ButtonDefault style=" height: auto; padding: 20px ; margin: 5px;" @click="patchUserData"
        :title="'Patch UserData'" />
    </div>
    <div class="edit-profile">
      <div id="edit-profile-text">Edit Profile</div>
      <form class="form-edit" @submit.prevent="submitForm" ref="formRef">
        <label>Name*</label>
        <input v-model="name" required />
        <label>Tel.*</label>
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="tel" inputmode="numeric" maxlength="12"
          @input="formatPhone" required />
        <label>Email*</label>
        <input type="email" id="email" size="30" v-model="email" required />
        <label>Birth Date*</label>
        <input type="date" v-model="birthDate" required />
        <label>Gender*</label>
        <div class="radio-container">
          <label class="radio-input-label"><input class="radio-input" type="radio" v-model="gender" value="male"
              required />
            Male</label>
          <label class="radio-input-label"><input class="radio-input" type="radio" v-model="gender" value="female" />
            Female</label>
          <label class="radio-input-label"><input class="radio-input" type="radio" v-model="gender" value="other" />
            Other</label>
        </div>
        <label>Province*</label>
        <select v-model="province" required>
          <option value="" disabled>Select province</option>
          <option v-for="p in provinces" :key="p.id" :value="p" @change="">{{ p.name_th }}</option>
        </select>
        <label>Distirct*</label>
        <select v-model="district" required>
          <option value="" disabled>Select district</option>
          <option v-for="d in districts" :key="d.id" :value="d">{{ d.name_th }}</option>
        </select>
        <label>Subdistirct*</label>

        <select v-model="subdistrict" required>
          <option value="" disabled>Select subdistrict</option>
          <option v-for="s in subdistricts" :key="s.id" :value="s">{{ s.name_th }}</option>
        </select>
        <label>Zip Code : {{ zipCode }}</label>
        <ButtonDefault class="btn-edit" :title="'save'" :type="'submit'" />
      </form>
    </div>
  </div>
  <div v-if="openModalEdit === true">
    <EditProfileModal @cancel="openModalEdit = !openModalEdit" @confirm="confirmHandler"
      :editDetail="editProfileDetail" />
  </div>
  <div v-if="openModalResult === true">
    <UpdatePutPatch @close="openModalResult = !openModalResult" :responseStatus="responseStatus" />
  </div>
</template>
<style scope>
.edit-container {
  margin-top: 100px;
  display : flex ;
  flex-direction: column ;
  justify-content: center ;
  align-items: center;
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
  margin-top: 0px;
  z-index: 3;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: auto;
  max-width: 900px;
  margin-top: -50px;
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
  .profile-relative>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 30%;
  }

  .edit-profile {
    width: 70%;
  }

  .test-update {
    width: 70%;
  }
}
</style>
