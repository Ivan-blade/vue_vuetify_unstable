<template>
  <v-card flat>
    <v-card-text v-for="message in messages"  >{{ message }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ListContent",
  props: ['messages']
}
</script>

<style scoped>
.v-card-text{
  text-align: center
}
</style>