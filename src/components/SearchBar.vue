<script setup lang="ts">
import { computed, ref , watch } from 'vue';
const searchQuery = ref();

const props = defineProps<{
  type: 'white' | 'dark'
}>()

const styleBar = computed(() => {
  return props.type === 'white' ? 'whiteSearchBar' : 'darkSearchBar' ;
} )

const emit = defineEmits<{
  (e: 'query', searchQuery: string): void;
}>();

watch(searchQuery, (newValue) => {
  emit('query', newValue);
  console.log(searchQuery.value)
});
</script>
<template>
  <div class="search-container">
    <input :class="['searchbar',styleBar]" type="text" v-model="searchQuery" placeholder="Search .." />
  </div>

</template>
<style scope>


.search-container {
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
}
.searchbar {
  width: 900px ;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 100px;
  font-size: 16px;
  background-color: white;
  padding: 15px 15px;
  margin: 0px 0px ;
}

.whiteSearchBar {
  border: 2px solid var(--p6);
  background-color: white;
}

.darkSearchBar {
  border: 2px solid var(--primary);
  background-color: var(--p6);
}

input, select, textarea{
    color: white ;
}

input::placeholder {
  color: var(--primary);
}
</style>
