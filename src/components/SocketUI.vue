<template>
<!--  <div>-->
<!--    <v-list>-->
<!--      <v-list-subheader>菜单栏</v-list-subheader>-->
<!--      <v-list-item-->
<!--          v-for="(message, i) in messages"-->
<!--          :key="i"-->
<!--          :value="message"-->
<!--          active-color="primary"-->
<!--      >-->
<!--        <v-list-item-title v-text="message"></v-list-item-title>-->
<!--      </v-list-item>-->
<!--    </v-list>-->
<!--  </div>-->
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
  name: "SocketUI",
  data() {
    return {
      websocket: null,
      messages: [],
      userId: '001'
    }
  },
  mounted() {
    if ('WebSocket' in window) {
      this.websocket = new WebSocket('ws://localhost:8080/websocket/' + this.userId)
      this.initWebSocket()
    } else {
      alert('当前浏览器 Not support websocket')
    }
  },
  methods: {
    initWebSocket () {
      // 连接错误
      this.websocket.onerror = this.setErrorMessage

      // 连接成功
      this.websocket.onopen = this.setOnopenMessage

      // 收到消息的回调
      this.websocket.onmessage = this.setOnmessageMessage

      // 连接关闭的回调
      this.websocket.onclose = this.setOncloseMessage

      // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = this.onbeforeunload
    },
    setErrorMessage () {
      console.log('WebSocket连接发生错误   状态码：' + this.websocket.readyState)
    },
    setOnopenMessage () {
      console.log('WebSocket连接成功    状态码：' + this.websocket.readyState)
    },
    setOnmessageMessage (event) {
      // 根据服务器推送的消息做自己的业务处理
      this.messages.push(event.data)
      console.log('服务端返回：' + event.data)
    },
    setOncloseMessage () {
      console.log('WebSocket连接关闭    状态码：' + this.websocket.readyState)
    },
    onbeforeunload () {
      this.closeWebSocket()
    },
    closeWebSocket () {
      this.websocket.close()
    }
  },
  beforeDestroy () {
    this.onbeforeunload()
  }

}
</script>

<style scoped>

</style>