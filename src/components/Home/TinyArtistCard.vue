<script setup lang="ts">
import { useRouter } from 'vue-router';

interface mockArtistData {
  id: number
  profileSrc: string,
  name: string,
}
const props = defineProps<{
  artists: mockArtistData[]
  rank: string
}>()

const router = useRouter()
const gotoArtistPage = (artistid: number) => {
  router.push({ name: 'artist', params: { id: artistid } })
}
const gotoHall = () => {
  router.push({ name: 'hallOfFame' })
}

</script>
<template>
  <h class="rank-label">{{ rank }}</h>
  <div class="tiny-artist-container">
    <div v-for="artist in artists.slice(0, 3)" class="tiny-card">
      <img @click="gotoArtistPage(artist.id)" :src="artist.profileSrc">
      <div class="name-card">{{ artist.name }}</div>
    </div>
    <div @click="gotoHall" class="tiny-card last">
      <font-awesome-icon icon="plus" class="custom-plus" />
      <img :src="artists[3].profileSrc">
      <div class="name-card">{{ artists[3].name }}</div>
    </div>

  </div>
</template>

<style scope>
.last {
  position: relative;
}

.last > img {
  filter: opacity(60%);
}


.custom-plus {
  color: white;
  width: 100%;
  position : absolute ;
  top : 50% ;
  transform: translateY(-50%);;
  z-index: 4 ;
  font-size: 50px ;
}
.rank-label {
  color: var(--accent);
}

.tiny-artist-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tiny-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
}

.tiny-card>img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: top ;
}

.name-card {
  max-width: 100%;
  font-size: 10px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
