<template>
<div class="status-bar" v-if="isAuthenticated">
  <p>done</p>
<ul>
  <li v-for="(todo,id) in doneTodos" :key="todo.id">
    {{todo.title}}
  </li>

</ul>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "StatusBar",
  computed: mapGetters(['doneTodos', 'isAuthenticated', 'todos'])
}
</script>

<style scoped>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>
