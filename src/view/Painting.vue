<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { mockPaintings } from '@/data/painting';
import { mockArtists } from '@/data/artists';
import { mockUsers } from '@/data/users';
import { ref } from 'vue';

const route = useRoute()
const paintId = Number(route.params.id)
const paint = mockPaintings.find((a) => a.id === paintId)
const artist = mockArtists.find((a) => a.name === paint?.artist)
const router = useRouter()

const goToArtistPage = () => {
  router.push({ name: 'artist', params: { id: artist?.id} })
}

</script>
<template>
  <div class="painting-relative">
    <img class="paint" :src="paint?.picScr" />

    <div class="painting-name-year-absolute">
      <div id="painting-name">{{ paint?.name }}</div>
      <div id="painting-year">{{ paint?.year.getFullYear() }}</div>
    </div>
    <div class="content">
      <div class="detail-contener">
        <img @click="goToArtistPage" class="artist-pic" :src="artist?.profileSrc" />
        <div class="paint-description">
          <div class="artist-name">{{ artist?.name }}</div>
          <div class="topic-description first">Technique</div>
          <div class="content-description">{{ paint?.tecnique }}</div>
          <div class="topic-description">Location</div>
          <div class="content-description">{{ paint?.location }}</div>
        </div>
      </div>
      <div class="narative">{{ paint?.description }}</div>
    </div>
    <TopNav class="topnav" :style="'white'" />
  </div>


</template>

<style scope>
.painting-relative {
  width: auto;
  height: auto;
  overflow: hidden;
  border-radius: 0px;
  position: relative;
  z-index: 1;
  margin-bottom: 0px;
}

.painting-relative>img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: top;
}

.topnav {
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 2;
}

.paint-description {
  height: auto;
  color: black;
  z-index: 3;
  background-color: var(--primary);
  padding: 10px 20px;
  width: 100%;
}

.topic-description {
  font-size: 12px;
  color: var(--accent)
}

.content-description {
  font-size: 10px;
  color: white;
}

.narative {
  margin-top: 20px;
  font-size: 10px;
  color: white;
  background-color: var(--secondary);
  padding: 15px;
  border-radius: 8px;
}

.painting-name-year-absolute {
  font-weight: bold;
  color: white;
  position: absolute;
  top: 400px;
  left: 20px;
}

#painting-name {
  font-size: 24px;
}

#painting-year {
  font-size: 20px;
}

.artist-pic {
  width: 50%;
  margin: 0;
  max-height: 150px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom: 4px solid #fff;
  object-fit: cover;
  object-position: top;

}

.artist-name {
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: 10px;
}

.detail-contener {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
}

.content {
  background-color: var(--primary);
  padding: 20px 20px;
}

@media (min-width : 768px) {
  .artist-pic {
    max-height: 200px;
  }

  .painting-name-year-absolute {
    top: 400px;
  }

  #painting-name {
    font-size: 34px;
  }

  #painting-year {
    font-size: 28px;
  }

  .topic-description {
    font-size: 20px;
  }

  .content-description {
    font-size: 14px;
  }

  .narative {
    font-size: 14px;
  }

  .artist-name {
    font-size: 30px;
  }
}
</style>
