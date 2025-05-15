<script setup lang="ts">
import { type Painting } from '@/types/painting';
// import type {Painting} from '@/types/painting'

const props = defineProps<{
  painting: Painting
}>()

</script>
<template>
  <div class="painting-container-card">
    <img class="painting-img" :src="props.painting.picScr" />
    <div class="painting-name">{{ props.painting.name }}</div>
  </div>
</template>

<style scope>
.painting-container-card {
  width: 100%;
  height: 220px;
  text-align: center;
}

.painting-img {
  margin-bottom: 4px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 80%;
  border-radius: 8px;
  object-fit: cover;
  object-position: 50% 50%;

}

.painting-name {
  margin-top: 0;
  font-size: 10px;
  color: var(--primary);
  text-decoration: none;
}

</style>
