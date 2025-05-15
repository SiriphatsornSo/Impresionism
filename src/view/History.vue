<script setup lang="ts">

const mockTimelineData = {
  imgScr: 'https://placehold.co/600x400' ,
  imgDescription: 'The standard Lorem Ipsum passage, used since the 1500s',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  start : 1000,
  end : 2000,
}
console.log(mockTimelineData)

</script>
<template>
    <NavBar/>
  <TopNav :style="'light'" />
  <h class="tl-head">Timeline 0f History</h>
  <timelineCard v-for=" i in 10 " :timeline="mockTimelineData" />
</template>

<style scope>
.tl-head {
  display: block;
  color: black ;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 10px auto;
}

</style>
