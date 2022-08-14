<template>
<div  v-if="isAuthenticated">
  <p class="progress-bar">
    progress: {{progress}}%</p>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Progressbar",
  computed: mapGetters(['progress', 'isAuthenticated']),
}
</script>

<style scoped>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>
