<script setup lang="ts">
import type { Painting } from '@/types/painting'
import { mockPaintings } from '@/data/painting'
import { mockArtists } from '@/data/artists'
import { mockUsers } from '@/data/users'
import { ref } from 'vue'

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
  <TopNav :style="'light'" />
  <h1 class="gallery-of-impression">Gallery of Impression</h1>
  <SearchBar @query="handleSearch" style="margin-bottom: 20px;" type='white' />

  <div v-if="paintingSearch.length !== 0 && searching" class="painting-container">
    <RouterLink class="painting-card" v-for="painting in paintingSearch" :key="painting.id"
      :to="{ name: 'painting', params: { id: painting.id } }">
      <PaintingCard :painting="painting" :key="painting.id" :data="painting" />
    </RouterLink>
  </div>
  <div v-else-if="artistsSearch.length !== 0 && searching">
      <div class="not-found">Painting not found — maybe you're looking for artists instead?</div>
      <div class="artist-container">
        <RouterLink class="artist-card" v-for="artist in artistsSearch" :key="artist.id"
        :to="{ name: 'artist', params: { id: artist.id } }">
        <ArtistCard :artist="artist" :key="artist.id" :data="artist" />
      </RouterLink>
      </div>
    </div>
  <div v-else-if="searching" class="artist-container not-found">Artist not found</div>
  <div v-else class="painting-container">
    <RouterLink class="painting-card" v-for="painting in mockPaintings" :key="painting.id"
      :to="{ name: 'painting', params: { id: painting.id } }">
      <PaintingCard :painting="painting" :key="painting.id" :data="painting" />
    </RouterLink>
  </div>


</template>

<style scope>
.not-found {
  font-size: 16px;
  color: black ;
  max-width: 100%;
  padding: 30px;
  text-align: center;
}

.gallery-of-impression {
  display: block;
  color: var(--primary);
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 10px auto;
}

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
  text-decoration: none;
}

@media (min-width : 768px) {

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
