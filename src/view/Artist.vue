<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { mockArtists } from '@/data/artists';
import { mockPaintings } from '@/data/painting';
import { mockUsers } from '@/data/users';
// import type { Painting } from '@/types/painting';

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

interface Artist {
  id: number
  profileSrc : string
  name: string
  birthDate: Date
  deathDate: Date
  biography : string
  rank: 'The Legend'
  Paintings :Number[]
}

const mockPainting : Painting[] = mockPaintings

const artists : any = [...mockArtists, ...mockUsers]
const route = useRoute()
const artistId = Number(route.params.id)

const artist = artists.find((a: { id: number; }) => a.id === artistId) ?? artists[0]
const paintings : Painting[] = mockPainting.filter(p => artist.Paintings.includes(p.id))

const props = defineProps<{
  frompage : 'hall' | 'painting'
  paintingId? : number
}>()

</script>
<template>

  <div class="artistpic-relative">
    <img :src="artist?.profileSrc" />
    <TopNav :page="props.frompage" class="topnav" :style="'white'" />
    <div class="descript-background-absolute"></div>
    <div class="artist-description">
      <h1 id="name-artist">{{ artist?.name }}</h1>
      <p id="year">{{ artist?.birthDate.getFullYear() }}</p>
      <div id="biography"> {{ artist?.biography }}</div>
    </div>
  </div>

  <div id="album">Famous Artwork Album</div>

  <div class="album-container">
    <RouterLink class="painting-card" v-for="painting in paintings" :key="painting.id"
      :to="{ name: 'painting', params: { id: painting.id } }">
      <PaintingCard :painting="painting" :key="painting.id" :data="painting" />
    </RouterLink>
  </div>

</template>

<style scope>
.artistpic-relative {
  width: auto;
  height: 600px;
  overflow: hidden;
  border-radius: 0px;
  position: relative;
  z-index: 1;
  margin-bottom: 30px;
}

.artistpic-relative>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 30%;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;

}

.descript-background-absolute {
  width: 100%;
  height: 30%;
  z-index: 2;
  position: absolute;
  bottom: 0px;
  background-color: var(--primary);
  border-radius: 32px;
  opacity: 80%;
}

.artist-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  height: 30%;
  z-index: 2;
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: none;
  border-radius: 32px;
  margin: auto;
  padding: 15px;
  align-items: left;
  text-align: left;
  gap: 5px
}

.topnav {
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 2;
}

#name-artist {
  font-size: 24px;
  font-weight: bold;
}

#year {
  font-size: 16px;
  font-weight: bold;
}

#biography {
  width: 100%;
  max-height: 100%;
  font-size: 10px;
  font-weight: lighter;
  overflow: hidden;
}

#album {
  padding-left: 5%;
  font-size: 16px;
  font-weight: bold;
  color: var(--primary);
}

.album-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0px;
  margin-top: 30px;
  padding: 0px 5%;
}

.painting-card {
  width: 50%;
  display: inline-block;
  text-align: center;
  text-decoration: none;
}

@media (min-width : 768px) {
  .descript-background-absolute {
    height: 25%;
  }

  .artist-description {
    height: 25%;
  }

  .album-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0px;
  margin-top: 30px;
  padding: 0px 5%;
}

.painting-card {
  width: 32%;
}

}
</style>
