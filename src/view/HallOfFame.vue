<script setup lang="ts">
// import { mockArtists } from '@/data/artists';
import { mockUsers } from '@/data/users'
import { mockArtists } from '@/data/artists';
import { mockPaintings } from '@/data/painting';
import { ref } from 'vue';
import Painting from './Painting.vue';
const mockPainting = mockPaintings
const mockArtist = mockArtists
const mockUser = mockUsers
const artists = [...mockArtists, ...mockUsers]
const artistsSearch = ref([])

const handleSearch = (q : string) => {
  const artistsFilter = artists.filter(artist => artist.name.toLowerCase().includes(q.toLowerCase()))
  const paintingFilter = mockPainting.filter(painting => painting.name.toLowerCase().includes(q.toLowerCase()))
  console.log(artistsFilter)
  console.log(paintingFilter)
  artistsSearch.value = artistsFilter
}
</script>
<template>
  <NavBar />
  <div id="halloffame-bg">
    <TopNav :style="'white'" />
    <h1 class="hall-of-fame">Hall of Fame</h1>
    <SearchBar @query="handleSearch" style="margin-bottom: 20px;" type='dark' />
    <div v-if="artistsSearch.length !== 0" class="artist-container">
      <RouterLink class="artist-card" v-for="artist in artistsSearch" :key="artist.id" :to="{name:'artist' , params:{id: artist.id }}">
        <ArtistCard :artist="artist" :key="artist.id" :data="artist" />
      </RouterLink>
    </div>
    <div v-else class="artist-container">
       <RouterLink class="artist-card" v-for="artist in artists" :key="artist.id" :to="{name:'artist' , params:{id: artist.id }}">
        <ArtistCard :artist="artist" :key="artist.id" :data="artist" />
      </RouterLink>
    </div>


  </div>

</template>

<style scope>
#halloffame-bg {
  background-color: var(--p5);
  height: 100%;
  padding-bottom: 50px;
}

.hall-of-fame {
  display: block;
  color: var(--accent);
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 10px auto;
}

.artist-container {
  display: flex;
  flex-wrap: wrap;
  gap:auto ;
  justify-content: flex-start;
}
.artist-card {
  width: 100%;
  display: inline-block;
}


@media (min-width : 768px) {
  .artist-container {
    padding: 0px 30px;
    gap: 10px;
  }

  .artist-card {
    width: 32%;
    display: inline-block;
  }

}


</style>
