<script setup lang="ts">

const props = defineProps<{
  timeline: object
}>()

</script>
<template>
  <div class="tl-container">
    <div class="tl-line">
        <pre class="year-time">
          {{ timeline.start }}
          -
         {{ timeline.end }}
      </pre>
      <div class="line"></div>
    </div>

    <div class="tl-card">
      <div class="tl-img">
        <img :src="timeline.imgScr" />
        <div class="tl-img-description">{{ timeline.imgDescription }}</div>
      </div>
      <div class="tl-content">{{ timeline.content }}</div>
    </div>

  </div>
</template>
<style scope>
.tl-card {
  width: 80%;
  height: auto;
  background-color: var(--p1);
  padding: 20px;
  border-radius: 12px;
  margin: 20px 20px 0px 20px;
}

.tl-img>img {
  width: 100%;
}

.tl-img-description {
  font-size: 12px;
  text-align: center;
  margin: 10px;
  font-weight: lighter;

}

.tl-content {
  font-size: 14px;
  text-align: left;
  font-weight: lighter;
}

.tl-container {
  display: flex;
  flex-direction: row;
  justify-content: center ;
}

.tl-line {
  width: auto;
  margin-top : 20px;
  margin-left: 20px;
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.line {
  width: 5px;
  border-left: 6px solid black;
  height: 100%;
}

.year-time {
  white-space: pre-line;
  text-align: center;
  font-weight: bold;
}
</style>
