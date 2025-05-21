<script setup lang="ts">
import paintingA11 from '@/assets/img/painting/paintingA11.jpg'
import paintingA12 from '@/assets/img/painting/paintingA12.jpg'
import paintingA13 from '@/assets/img/painting/paintingA13.jpg'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { mockPaintings } from '@/data/painting'
import { useRouter } from 'vue-router';

const router = useRouter()
const gotoPaintingPage = (paintingid: number) => {
  router.push({ name: 'painting', params: { id: paintingid } })
}

</script>
<template>
  <Swiper
  :modules="[Navigation, Pagination]"
  :loop="true" navigation pagination class="my-swiper"
  data-swiper-autoplay="2000" >
    <SwiperSlide  v-for="painting in mockPaintings">
      <div  class="slide-painting">
        <img @click="gotoPaintingPage(painting.id)" :src="painting.picScr" />
        <div class="slide-detail">
          <div id="slide-detail-name">{{ painting.name }}</div>
          <div id="slide-detail-artist-year">{{ painting.artist }} , {{ painting.year.getFullYear() }}</div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<style scope>
#slide-detail-name {
  font-size: 14px;
  font-weight: bolder;
}

#slide-detail-artist-year {
  border-radius: 15px;
  color : var(--accent);
  padding: 5px 20px;
  background-color: var(--secondary);
  font-size: 12px;
  font-weight: lighter;
}

.slide-detail {
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 20% ;
  gap : 5px ;
}
.slide-painting {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
}

.slide-painting>img {
  width: 70%;
  height: 70%;
  object-fit: cover;
  object-position: top;
  border-radius: 20px;
}

.swiper-button-next,
.swiper-button-prev {
  color: var(--accent);
  font-size: 10px;
}

.swiper-pagination-bullet {
  background: var(--p6);
}
</style>
