<template>
  <v-navbar/>
  <v-content>
    <router-view></router-view>
  </v-content>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SocketUI from "../components/SocketUI.vue";
export default {
  name: "Home",
  components: {
    'v-navbar': NavBar
  }
}
</script>

<style scoped>

</style>