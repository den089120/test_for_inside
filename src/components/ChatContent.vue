<template>
  <div>
    <div v-for="el in messageChats" :key="el.id">
      <MyMessage v-if="el.login === loginUser" :message-my="el.message"/>
      <ItMessage v-else :name-it="el.login" :message-it="el.message"/>
    </div>
    <div class="chat_input">
      <input type="text" v-model="myMessage">
      <button @click="messageSend">ОТПРАВИТЬ</button>
    </div>

  </div>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import ItMessage from "@/components/ItMessage.vue";
import MyMessage from "@/components/MyMessage.vue";
import { mapState, mapActions } from 'pinia';
import {useUserStore} from "@/Store/UserStore/UserStore";

export default defineComponent({
  name: "ChatContent",
  components: {MyMessage, ItMessage},
  data() {
    return {
      loginUser: 'roma',
      tokenUser: '',
      messageChats: [
        {id: 1, login: 'roma', message: 'hello'},
        {id: 2, login: 'alesya', message: 'hi, my dear roma'},
        {id: 3, login: 'nikita', message: 'hello, welcome to hire'},
        {id: 4, login: 'roma', message: 'hello sdgrehgerh rgbnbnmfgnf hjgjhtrhj'},
        {id: 5, login: 'igor', message: 'hello rgrgergergrgr rgregfgdfgfger gregregr'}
      ],
      myMessage: '',
    }
  },
  created() {
    this.openSocket()
  },
  computed: {
    ...mapState(useUserStore, ['getLocaleStorage', 'chatId', "mySocket"])
  },
  methods: {
    ...mapActions(useUserStore, ['setSocket', 'closeSocket']),
    openSocket() {
      const {login, token} = this.getLocaleStorage()
      this.loginUser = login
      this.tokenUser = token

      const webConnect = new WebSocket('ws://chat')

      webConnect.onopen = () => {
        const regRequest = JSON.stringify({
          method: 'register',
          params: {
            token
          }
        })
        const data = JSON.stringify([regRequest])
        webConnect.send(data)
      }

      this.setSocket(webConnect)

      webConnect.send(JSON.stringify([{
        login,
        topics:this.chatId
      }]))

      webConnect.onmessage = (event) => {
        const data = JSON.parse(event.data)
        this.messageChats = data['result']
      }
    },

    messageSend() {
      if (this.mySocket) {
        this.mySocket.send(JSON.stringify({
          login: this.loginUser,
          message: this.myMessage
        }))
      }
    }
  },
  beforeUnmount() {
    this.closeSocket()
  }

})


</script>

<style lang="scss" scoped>
.chat_input {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 40px;
  gap: 10px;
  input {
    border: none;
    background: transparent;
    border-bottom: 2px solid $color-font;
    border-left: 1px solid $color-font;
    width: 92%;
    height: 80%;
  }
  button {
    margin-right: 20px;
  }
}
</style>