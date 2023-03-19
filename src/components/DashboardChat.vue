<template>
  <div class="chat_container">
    <ChatName v-for="(value, key) in topics" :key="key" :chat-topic="value" :chat-id="parseInt(key)"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ChatName from "@/components/ChatName.vue";
import { mapActions, mapState } from 'pinia';
import {useUserStore} from "@/Store/UserStore/UserStore";

export default defineComponent({
  name: "DashboardChat",
  components: {ChatName},
  data() {
    return {}
  },
  mounted() {
    this.getTopics()
  },
  computed: {
    ...mapState(useUserStore, ['topics'])
  },
  methods: {
    ...mapActions(useUserStore, ['getTopics'])
  },
})
</script>

<style lang="scss" scoped>
.chat_container {
  width: 100%;
}
</style>