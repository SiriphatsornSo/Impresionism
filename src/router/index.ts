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
      path: '/painting/:id',
      name: 'painting',
      component: () => import('../view/Painting.vue'),
      meta : {
        backTo: "home"}
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('../view/Profile.vue'),
      meta : {
        backTo: "home" ,
        requiresAuth : true
      },
    },
    {
      path: '/login' ,
      name: 'login',
      component: () => import('../view/Login.vue'),
    },
    {
      path: '/editProfile/:id' ,
      name: 'editProfile',
      component: () => import('../view/EditProfile.vue'),
    },{
      path: '/:pathMatch(.*)*' ,
      name: 'not found',
      component: () => import('../view/NotFound404.vue'),
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },

})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  console.log('Navigating to:', to.fullPath)
  console.log('Token exists:', !!token)

  if (to.meta.requiresAuth && !token) {
    console.log('No token: redirecting to /login')
    next('/login')
  } else {
    console.log('Token found or no auth required: proceeding')
    console.log('token: ' ,token)
    next()
  }
})

export default router
