<script setup lang="ts">
import type { Painting } from '@/types/painting'
import { mockPaintings } from '@/data/painting'
import { mockArtists } from '@/data/artists'
import { mockUsers } from '@/data/users'
import { ref } from 'vue'

const mockPainting = mockPaintings
const mockArtist = mockArtists
const mockUser = mockUsers
const artists = [...mockArtists, ...mockUsers]
const paintingSearch = ref([])

const handleSearch = (q : string) => {
  const artistsFilter = artists.filter(artist => artist.name.toLowerCase().includes(q.toLowerCase()))
  const paintingFilter = mockPainting.filter(painting => painting.name.toLowerCase().includes(q.toLowerCase()))
  console.log(artistsFilter)
  console.log(paintingFilter)
  paintingSearch.value = paintingFilter
}

</script>
<template>
  <NavBar />
  <TopNav :style="'light'" />
  <h1 class="gallery-of-impression">Gallery of Impression</h1>
  <SearchBar @query="handleSearch" style="margin-bottom: 20px;" type='white' />

  <div v-if="paintingSearch.length !== 0" class="painting-container">
    <RouterLink class="painting-card" v-for="painting in paintingSearch" :key="painting.id"
      :to="{ name: 'painting', params: { id: painting.id } }">
      <PaintingCard :painting="painting" :key="painting.id" :data="painting" />
    </RouterLink>
  </div>
  <div v-else class="painting-container">
    <RouterLink class="painting-card" v-for="painting in mockPaintings" :key="painting.id"
      :to="{ name: 'painting', params: { id: painting.id } }">
      <PaintingCard :painting="painting" :key="painting.id" :data="painting" />
    </RouterLink>
  </div>


</template>

<style scope>
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
}
</style>
