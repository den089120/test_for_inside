<template>
  <div class="chat_container">
    <ChatName/>
    <ChatName/>
    <ChatName/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ChatName from "@/components/ChatName.vue";

export default defineComponent({
  name: "DashboardChat",
  components: {ChatName}
})
</script>

<style lang="scss" scoped>
.chat_container {
  width: 100%;
  //display: flex;
  //flex-direction: column;
  //justify-content: space-around;
  //align-items: center;
}
</style>