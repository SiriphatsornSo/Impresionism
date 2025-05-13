<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  type: 'leftArrow' | 'rightArrow' | 'search' | 'profile'
  profilePicSrc?: string
  style?: 'white' | 'dark' | 'light'
}>()

const buttonClass = computed(() => {
  console.log(props.style)
  switch (props.style) {
    case 'white': console.log('white'); return 'btn-white'
    case 'dark': console.log('dark'); return 'btn-dark'
    default: return console.log('light'); 'btn-light'
  }

})

const iconName = computed(() => {
  switch (props.type) {
    case 'leftArrow': return 'arrow-left'
    case 'rightArrow': return 'arrow-right'
    case 'search': return 'search'
  }

})
</script>

<template>
  <button v-if="['leftArrow', 'rightArrow', 'search'].includes(type)" :class="buttonClass"><font-awesome-icon
      class="bnt-icon" :icon="iconName" /></button>
</template>

<style scoped>

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: var(--primary);
    border-radius: 50%;
    border: 0;
  }

  @media (min-width: 768px) {
  button {
    width: 60px;
    height: 60px;
  }
}

  button:hover {
    background-color: var(--p6);
  }

  .btn-white {
    background-color: white;
  }

  .btn-dark {
    background-color: black;
  }

  .btn-light {
    background-color: var(--primary);
  }</style>
