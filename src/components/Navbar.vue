<template>
<div class="navbar">
  <h1>My vuex app to do</h1>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li v-if="isAuthenticated">
      to do : {{todos.length}}
      <button @click="TOGGLE_AUTH">logout</button>
    </li>
    <li v-else @click="TOGGLE_AUTH"> login</li>
  </ul>
</div>
</template>

<script>
import {mapMutations,mapGetters} from "vuex";

export default {
  name: "Navbar",
  computed:mapGetters(['isAuthenticated', 'todos']),
  methods: mapMutations(['TOGGLE_AUTH'])

}
</script>

<style scoped>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
