<script setup lang="ts">
import { useRoute } from 'vue-router'
import { mockArtists } from '@/data/artists';
import type { Artist } from '@/types/artist'
import PaintingCard from '@/components/PaintingCard.vue';

const mockArtist = mockArtists
const route = useRoute()
const artistId = Number(route.params.id)

const artist = mockArtist.find((a) => a.id === artistId )
console.log(artist)
console.log(artistId)

</script>
<template>

  <div class="artistpic-relative">
    <img :src="artist.profileSrc" />
    <TopNav class="topnav" :style="'white'" />
    <div class="descript-background-absolute">
    </div>
    <div class="artist-description">
      <h1 id="name-artist">{{ artist.name }}</h1>
      <p id="year">{{ artist.birthDate.getFullYear() }}</p>
      <div id="biography"> {{ artist?.biography }}</div>
    </div>
  </div>

  <div id="album">Famous Artwork Album</div>

  <div id="painting-container">
    <PaintingCard/>
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
  margin-bottom: 30px ;
}

.artistpic-relative>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;

}

.descript-background-absolute {
  width: 100%;
  height: 35%;
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
  width: 100%;
  height: 35%;
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
color : var(--primary);
}
</style>
