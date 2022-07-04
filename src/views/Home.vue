<template>
  <v-navbar/>
  <v-socket></v-socket>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SocketUI from "../components/SocketUI.vue";
export default {
  name: "Home",
  components: {
    'v-navbar': NavBar,
    'v-socket': SocketUI
  }
}
</script>

<style scoped>

</style>