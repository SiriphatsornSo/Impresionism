<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>

  <ul class="Nav-container">

    <li class="Nav-item">
      <RouterLink to="/">
        <font-awesome-icon icon="house" class="custom-icon" />
      </RouterLink>
    </li>
    <li class="Nav-item">
      <RouterLink to="/history">
        <font-awesome-icon icon="list" class="custom-icon" />
      </RouterLink>
    </li>
    <li class="Nav-item">
      <RouterLink to="/hallOfFame">
        <font-awesome-icon icon="star" class="custom-icon" />
      </RouterLink>
    </li>
    <li class="Nav-item">
      <RouterLink to="/gallery">
        <font-awesome-icon icon="image" class="custom-icon" />
      </RouterLink>
    </li>
  </ul>
</template>

<style scope>
@media (min-width: 768px) {
  .Nav-item {
    max-width: 40px;
  }

  .Nav-container {
    max-width: 840px;
  }
}

.Nav-container {
  background-color: var(--primary);
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
  align-content: center;
  padding: 15px 40px;
  border-radius: 50px;
  margin: 0px 0px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  width: 90%;
  max-height: 60px;
  z-index: 5;
}

.Nav-item {
  max-width: 40px;
  height: 40px;
  text-align: center;

}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.custom-icon {
  width: 75%;
  height: 75%;
  color: white;
  transition: color 0.3s ease;

}

.custom-icon:hover {
  color: var(--accent)
}
</style>
