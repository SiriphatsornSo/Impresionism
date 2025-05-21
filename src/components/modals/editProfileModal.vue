<script setup lang="ts">

import { defineProps } from 'vue';
const props = defineProps<{
  editDetail: editProfileDetail
  openModal: boolean
}>()

interface editProfileDetail  {
  newName: string ,
  newTel: string ,
  newEmail: string ,
  newBirthDate: string,
  newGender: string,
  newProvince: string,
  newDistirct: string,
  newSubdistirct: string,
  newZipCode: string
}

const emit = defineEmits(['confirm', 'cancel'])

function handleCancel() {
  emit('cancel');
}

function handleConfirm() {
  emit('confirm');
}

console.log(props.editDetail)

</script>

<template>
    <div class="modal animate__animated animate__fadeIn " >
      <div class="modal-head">edit your profile</div>
      <pre class="edit-detail">
    name : {{ editDetail.newName }}
    e-mail :{{ editDetail.newEmail }}
    tel : {{ editDetail.newTel }}
    birthDate : {{ editDetail.newBirthDate }}
    gender : {{ editDetail.newGender }}
    province : {{ editDetail.newProvince }}
    district : {{ editDetail.newDistirct }}
    subdistrict : {{ editDetail.newSubdistirct }}
    zip code : {{ editDetail.newZipCode }} </pre>
      <div class="btn-container">
        <ButtonDefault @click="handleConfirm" style="width: 100%;" :title="'confirm'" />
        <ButtonDefault @click="handleCancel" style="width: 100%;" :title="'cancel'" />
      </div>
    </div>
</template>
<style scope>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  background-color: white;
  border: 2px solid black;
  border-radius: 12px;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 14px;

}

.edit-detail {
  width: 100%;
  text-align: left;
  margin: 20px 0px;
}

.btn-close {
  width: 80%;
}

.modal-head {
  font-size: 20px;
  font-weight: bold;
}

.btn-container {
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

</style>
