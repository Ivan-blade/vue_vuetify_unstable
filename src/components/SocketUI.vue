<template>
  <v-card>
    <v-tabs
        v-model="tab"
        centered
        stacked
    >
        <v-tab
            v-for="tabPage in tabPages"
            :key="tabPage"
            :value="tabPage"
            flat
        >
          {{ tabPage }}
        </v-tab>

    </v-tabs>
    <v-btn icon class="pos_abs_left" @click="viewMode = !viewMode">
      <v-icon>mdi-call-split</v-icon>
    </v-btn>
    <v-window v-model="tab">
      <v-window-item
          v-for="tabPage in tabPages"
          :key="tabPage"
          :value="tabPage"
      >
        <v-list-card :messages="messages" v-show="viewMode"/>
        <v-timeLine :messages="messages" v-show="!viewMode"/>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import TimeLine from "./TimeLine.vue";
import ListContent from "./ListContent.vue";
export default {
  name: "SocketUI",
  data() {
    return {
      websocket: null,
      messages: [],
      userId: '001',
      tab: null,
      tabPages: [
        'all','personal'
      ],
      viewMode: true
    }
  },
  components: {
    'v-timeLine': TimeLine,
    'v-list-card': ListContent
  },
  mounted() {
    if ('WebSocket' in window) {
      this.initWebSocket()
    } else {
      alert('当前浏览器 Not support websocket')
    }
  },
  methods: {
    initWebSocket () {
      this.websocket = new WebSocket('ws://localhost:8080/websocket/' + this.userId)
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
      this.initWebSocket()
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

<style scoped >
.pos_abs_left {
  position: absolute;
  top: 17px;
  right: 30px;
}
</style>