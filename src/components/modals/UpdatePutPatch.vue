<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  responseStatus: number
}>()

const emit = defineEmits(['close'])

function handleClose() {
  emit('close');
}
</script>
<template>
  <div class="modal animate__animated animate__fadeIn ">
    <div v-if="responseStatus === 200 " class="head-status-container">
      <font-awesome-icon icon="circle-check" class="status-icon" size="5x" />
      <div class="modal-head">update success</div>
      <div class="btn-container">
        <ButtonDefault @click="handleClose" style="width: 100%;" :title="'close'" />
      </div>
    </div>

    <div v-else class="head-status-container">
      <font-awesome-icon icon="circle-xmark" class="status-icon error" size="5x" />
      <div class="modal-error"  > status : {{ responseStatus }}</div>
      <div class="btn-container">
        <ButtonDefault @click="handleClose" style="width: 100%;" :title="'close'" />
      </div>
    </div>


  </div>
</template>
<style scope>
.modal-error {
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
}
.head-status-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.response {
  font-size: 24px;
  font-weight: bold;
  color: green;
}

.status-icon {
  color: green;
}

.error {
  color: red ;
}

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
  margin: 20px;
}

.btn-container {
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
