import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//component
import ButtonCircle from '@/components/buttons/ButtonCircle.vue'
import ButtonDefault from '@/components/buttons/ButtonDefault.vue'
import NavBar from '@/components/NavBar.vue'
import TopNav from '@/components/TopNav.vue'
import HeadHomepage from '@/components/home/HeadHomepage.vue'
import SearchBar from '@/components/SearchBar.vue'
import ArtistCard from '@/components/hallOfFame/ArtistCard.vue'
import PaintingCard from '@/components/PaintingCard.vue'
import TimelineCard from './components/history/timelineCard.vue'
import EditProfileModal from '@/components/modals/EditProfileModal.vue'
import TinyArtistCard from './components/home/TinyArtistCard.vue'
import SwiperPainting from './components/home/SwiperPainting.vue'
import UpdatePutPatch from './components/modals/UpdatePutPatch.vue'

// FontAwesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faList , faStar , faImage , faSearch ,faGear , faArrowLeft ,faArrowRight,faPlus, faUser ,faCheckCircle ,faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { faLine } from '@fortawesome/free-brands-svg-icons'
library.add(faHouse, faList , faStar , faImage , faSearch ,faGear , faArrowLeft ,faArrowRight ,faPlus,faUser,faLine,faCheckCircle,faXmarkCircle)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

//component
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('ButtonCircle', ButtonCircle)
app.component('ButtonDefault', ButtonDefault)
app.component('NavBar', NavBar)
app.component('TopNav', TopNav)
app.component('HeadHomepage',HeadHomepage)
app.component('SearchBar',SearchBar)
app.component('ArtistCard',ArtistCard)
app.component('PaintingCard',PaintingCard)
app.component('TimelineCard',TimelineCard)
app.component('EditProfileModal',EditProfileModal)
app.component('TinyArtistCard',TinyArtistCard)
app.component('SwiperPainting',SwiperPainting)
app.component('UpdatePutPatch',UpdatePutPatch)

app.use(pinia)
app.use(router)
app.mount('#app')
