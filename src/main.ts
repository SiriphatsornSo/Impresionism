import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



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
import EditProfileModal from '@/components/modals/editProfileModal.vue'

// FontAwesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faList , faStar , faImage , faSearch ,faGear , faArrowLeft ,faArrowRight } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faList , faStar , faImage , faSearch ,faGear , faArrowLeft ,faArrowRight)

const app = createApp(App)

//cooponent
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

app.use(router)
app.mount('#app')




