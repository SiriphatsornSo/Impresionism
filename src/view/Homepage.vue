<script setup lang="ts">
import { useRouter } from 'vue-router';
import { mockArtists } from '@/data/artists';

const mockTimelineData = {
  imgScr: 'https://placehold.co/600x400',
  imgDescription: 'The standard Lorem Ipsum passage, used since the 1500s',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  start: 1000,
  end: 2000,
}

interface mockArtistData {
  id: number
  profileSrc: string,
  name: string,
}

const mockArtistsData: mockArtistData[] = [
  {
    id: 1,
    profileSrc: 'https://placehold.co/600x400',
    name: '1st name surname',
  },
  {
    id: 1,
    profileSrc: 'https://placehold.co/600x400',
    name: '2st name surname',
  },
  {
    id: 1,
    profileSrc: 'https://placehold.co/600x400',
    name: '3st name surname',
  },
  {
    id: 1,
    profileSrc: 'https://placehold.co/600x400',
    name: '4st name surname',
  }
]

const router = useRouter()
const toHistoryPage = () => {
  router.push({ name: 'history' })
}
</script>
<template>

  <HeadHomepage />
  <NavBar />

  <div class="history-section">
    <h class="tl-head">Timeline 0f History</h>
    <div>
      <timelineCard v-for="i in 2" :timeline="mockTimelineData" />
    </div>
    <ButtonDefault class="btn-more" @click="toHistoryPage" :title="'more'" />
  </div>

  <div class="tiny-hall">
    <h1 class="hall-of-fame">Hall of Fame</h1>
    <div class="hall-bio">“Discover Your Ideal Artist in the Hall of Fame”</div>
    <TinyArtistCard :artists="mockArtists.slice(0, 4)" :rank="'The Legend'" />
    <TinyArtistCard :artists="mockArtistsData" :rank="'Adept Creator'" />
    <TinyArtistCard :artists="mockArtistsData" :rank="'Emerging Talent'" />
    <TinyArtistCard :artists="mockArtistsData" :rank="'Apprentice Artist'" />
  </div>
  <div class="carolsel">
  <div class="gallery-head">Gallery of Impression</div>
  <div class="gallery-bio">“Wander through the Gallery of Impression and discover the artist who leaves a mark on your imagination.”</div>
  <SwiperPainting />
  </div>

</template>
<style scope>
.gallery-bio {
  font-size: 12px ;
  margin: 0px 30px ;
  text-align: center;
}
.carolsel{
  padding-bottom: 100px ;
  height: auto ;
}
.gallery-head {
  text-align: center;
  font-size : 24px ;
  font-weight: bold ;
  margin : 30px 0px ;
   color : var(--primary)
}
.history-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  align-items: center;
}

.tl-containner {
  max-height: 400px;
}

.tl-head {
  display: block;
  color: black;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 10px auto;
}

.btn-more {
  margin-top: 20px;
  width: 80%;
  max-width: 400px;
  height: 60px;
}

.tiny-hall {
  margin-top: 30px;
  background-color: var(--p5);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.hall-bio {
  font-size: 16px;
  text-align: center;
  width: auto;
  color: white;
}
</style>
