<script setup lang="ts">
const props = defineProps<{
  title: string
  typeButton: "button" | "submit" | "reset" | undefined
}>()
</script>
<template>
  <button class="btn-default" :type="props.typeButton">{{ title }}</button>
</template>
<style scoped>
button {
  background-color: var(--primary);
  height: 60px;
  border: none ;
  border-radius: 12px ;
  color : white ;
  font-size : 14px ;
  font-weight: lighter ;
}

button:hover {
  background-color: var(--p6);
}

</style>
