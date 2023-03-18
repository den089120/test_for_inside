<template>
  <div class="chat_container">
    <ItMessage/>
    <MyMessage/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ItMessage from "@/components/ItMessage.vue";
import MyMessage from "@/components/MyMessage.vue";

export default defineComponent({
  name: "ChatContent",
  components: {MyMessage, ItMessage}
})
</script>

<style lang="scss" scoped>

</style>