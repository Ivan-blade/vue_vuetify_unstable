<template>
  <!-- nav标签内没有特殊效果，该标签只是表示包含内容是导航标签，一般内容为列表 -->
  <nav>
    <v-app-bar
        text
    >
      <v-app-bar-nav-icon @click="navShow = !navShow" ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Diary-cat 日记猫</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="logout">
        <span>sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="navShow">
      <v-list>
        <v-list-subheader>菜单栏</v-list-subheader>
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            active-color="primary"
        >
          <v-list-item-avatar start>
            <v-icon :icon="item.icon"></v-icon>
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { getRequest } from '../utils/api.js'
export default {
  name: 'NavBar',
  data() {
    return {
      navShow: false,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' , route: "/"},
        { text: 'Audience', icon: 'mdi-account', route: "/" },
        { text: 'Conversions', icon: 'mdi-flag', route: "/" },
      ]
    }
  },
  methods: {
    logout () {
      getRequest("/logout")
      this.$router.push({path: '/'});
    }
  },
}
</script>

<style>

</style>