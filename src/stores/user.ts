import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<LINEProfile | null>(null)
  function setUser(profile: LINEProfile) {
    user.value = profile
  }

  return { user , setUser }
},{
  persist: true
})

interface LINEProfile {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
}
