<script setup lang="ts">
// import { type Painting } from '@/types/painting';
interface Painting {
  id : number
  name : string
  artist : string
  year : Date
  picScr : string
  tecnique? : string
  location? : string
  description :string
}

const props = defineProps<{
  painting: Painting
  nameColor? : string
}>()

</script>
<template>
  <div class="painting-container-card">
    <img loading="lazy" class="painting-img" :src="props.painting.picScr" />
    <div :class="['painting-name' , nameColor ]">{{ props.painting.name }}</div>
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
  object-position: top ;

}

.painting-name {
  margin-top: 0;
  font-size: 10px;
  color: var(--primary);
  text-decoration: none;
}

.white-name {
  color : white
}

@media(min-width : 768px){
  .painting-name {
    font-size: 20px;
  }
}

</style>
