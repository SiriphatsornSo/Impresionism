<script setup lang="ts">
interface ArtistModel {
  id: number
  name: string
  profileSrc: string
  birthDate : Date
  yearBirth: number
  yearDeath?: number
  rank: string
}


const props = defineProps<{
  artist: ArtistModel
}>()
console.log(props)

</script>
<template>
  <div class="cardrelative">
    <img loading="lazy" :src="props.artist.profileSrc" />
    <div class="overlay"></div>

    <div class="cardabsolute">
      <h1 id="name"> {{ artist.name }}</h1>
      <h2 id="year">{{ artist.birthDate.getFullYear() }} </h2>
      <h3 id="rank">{{ artist.rank }}</h3>
    </div>
  </div>
</template>

<style scoped>
div.cardrelative {
  width: 90%;
  height: 150px;
  margin: auto;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  z-index: 1;
}

div.cardabsolute {
  padding-left: 10px;
  width: auto;
  height: 50%;
  position: absolute;
  bottom: 10px;
  z-index: 2;

}

.cardrelative img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: 0px 30%;
}

#name {
  font-size: 20px;
  margin: 0;
  padding: 0;
  color: white;
}

#year {
  font-size: 12px;
  margin: 0px;
  color: white;
}

#rank {
  font-size: 12px;
  margin: 0px;
  color: var(--accent)
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.6) 100%);
  z-index: 1;
}

@media (min-width : 768px) {
  div.cardrelative {
    width: 100%;
    height: 150px ;
  }
}
</style>
