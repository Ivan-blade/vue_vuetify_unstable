<template>
  <v-timeline side="end" align="start">
    <v-timeline-item
        dot-color="pink"
        size="small"
        v-for="(message, i) in messages"
        :key="i"
        :value="message"
    >
      <div class="d-flex">
        <strong class="mr-4">5pm</strong>
        <div>
          <strong>New Icon</strong>
          <div class="text-caption">
            {{ message }}
          </div>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "TimeLine",
  props: ['messages']
}
</script>

<style scoped>

</style>