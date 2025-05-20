<script setup lang="ts">
import { mockUsers } from '@/data/users'
import { mockArtists } from '@/data/artists';
import { mockPaintings } from '@/data/painting';
import { ref } from 'vue';

const mockPainting = mockPaintings
const artists = [...mockArtists, ...mockUsers]
const artistsSearch : any = ref([])
const searching = ref(false)
const paintingSearch : any = ref([])


const handleSearch = (q: string) => {
  const artistsFilter = artists.filter(artist => artist.name.toLowerCase().includes(q.toLowerCase()))
  const paintingFilter = mockPainting.filter(painting => painting.name.toLowerCase().includes(q.toLowerCase()))
  console.log(artistsFilter)
  console.log(paintingFilter)
  searching.value = (q.length !== 0) ? true : false
  artistsSearch.value = artistsFilter
  paintingSearch.value = paintingFilter
}
</script>
<template>
  <NavBar />
  <div id="halloffame-bg">
    <TopNav :style="'white'" />
    <h1 class="hall-of-fame">Hall of Fame</h1>
    <SearchBar @query="handleSearch" style="margin-bottom: 20px;" type='dark' />
    <div v-if="artistsSearch.length !== 0 && searching" class="artist-container">
      <RouterLink class="artist-card" v-for="artist in artistsSearch" :key="artist.id"
        :to="{ name: 'artist', params: { id: artist.id } }">
        <ArtistCard :artist="artist" :key="artist.id" :data="artist" />
      </RouterLink>
    </div>
    <div v-else-if="paintingSearch.length !== 0 && searching">
      <div class="not-found">Artist not found — maybe you're looking for paintings instead?</div>
      <div class="painting-container">
        <RouterLink class="painting-card" v-for="painting in paintingSearch" :key="painting.id"
          :to="{ name: 'painting', params: { id: painting.id } }">
          <PaintingCard :painting="painting" :nameColor="'white-name'" :key="painting.id" :data="painting" />
        </RouterLink>
      </div>
    </div>
    <div v-else-if="searching" class="artist-container not-found">Artist not found</div>
    <div v-else class="artist-container">
      <RouterLink class="artist-card" v-for="artist in artists" :key="artist.id"
        :to="{ name: 'artist', params: { id: artist.id } }">
        <ArtistCard :artist="artist" :key="artist.id" :data="artist" />
      </RouterLink>
    </div>


  </div>

</template>

<style scope>
.painting-container {
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
}

.not-found {
  font-size: 16px;
  color: white;
  max-width: 100%;
  padding: 30px;
  text-align: center;
}

#halloffame-bg {
  background-color: var(--p5);
  height: auto;
  min-height: 100hv ;
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
  gap: 10px;
  justify-content: center;
}

.artist-card {
  width: 100%;
  display: inline-block;
}


@media (min-width : 768px) {
  #halloffame-bg {
    background-color: var(--p5);
    height: 100vh;
    padding-bottom: 50px;
  }

  .artist-container {
    display: flex;
    flex-wrap: wrap;
    gap: auto;
    justify-content: flex-start;
  }

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
