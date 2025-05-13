import { createRouter, createWebHistory } from 'vue-router'
import '@/assets/main.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../view/Homepage.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../view/History.vue'),
    },
    {
      path: '/hallOfFame',
      name: 'hallOfFame',
      component: () => import('../view/HallOfFame.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../view/Gallery.vue'),
    },
    {
      path: '/artist/:id',
      name: 'artist',
      component: () => import('../view/Artist.vue'),
    },
    {
      path: '/artists/:id',
      name: 'artist',
      component: () => import('../view/Artist.vue'),
    }
  ],
})

export default router
