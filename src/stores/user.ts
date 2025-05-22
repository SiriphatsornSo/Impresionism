import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<LINEProfile | null>(null)
  function setUser(profile: LINEProfile) {
    user.value = profile
    console.log(profile)
    // Object.assign(user,profile)
    console.log('f Store' +  user.value)
  }
  return { user , setUser  }
},{
  persist: true
})

interface LINEProfile {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
}
