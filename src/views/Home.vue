<template>
  <v-navbar/>
  <v-main>
    <v-card-text>
      <v-socket></v-socket>
    </v-card-text>
  </v-main>
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