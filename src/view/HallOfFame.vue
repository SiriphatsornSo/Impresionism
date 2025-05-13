<script setup lang="ts">
// import { mockArtists } from '@/data/artists';
import { mockUsers } from '@/data/users'
import { mockArtists } from '@/data/artists';
const mockArtist = mockArtists
const mockUser = mockUsers

const artists = [...mockArtists, ...mockUsers]

</script>
<template>
  <NavBar />
  <div id="halloffame-bg">
    <TopNav :style="'white'" />
    <h1 class="hall-of-fame">Hall of Fame</h1>
    <SearchBar style="margin-bottom: 20px;" type='dark' />
    <div class="artist-container">
      <!-- <ArtistCard v-for="artist in artists" :artist="artist" :key="artist.id" :data="artist" /> -->

      <RouterLink class="artist-card" v-for="artist in artists" :key="artist.id" :to="{name:'artist' , params:{id: artist.id}}">
        <ArtistCard :artist="artist" :key="artist.id" :data="artist" />
      </RouterLink>

      <!-- { name: 'movie', params: { id: item.id } } -->

    </div>


  </div>

</template>

<style scope>
#halloffame-bg {
  background-color: var(--p5);
  max-height: auto;
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
  gap: 20px;
  justify-content: space-evenly;
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
