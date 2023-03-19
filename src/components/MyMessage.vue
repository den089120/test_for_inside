<template>
  <div class="message_my">
    <div class="name">Я</div>
    <div class="text">{{messageMy}}</div>
    <div class="time">12:32</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "MyMessage",
  props: {
    messageMy: String,
  },
})
</script>

<style lang="scss" scoped>
.message_my {
  position: relative;
  margin-left: auto;
  margin-right: 15px;
  border-radius: 5px;
  margin-top: 6px;
  width: 65%;
  background: rgb(229, 229, 229);
  max-width: 540px;
  padding: 10px;
  box-shadow: -10px 10px 15px rgba(0,0,0,0.1);
  .name {
    text-align: left;
    font-weight: bold;
  }
  .text {
    text-align: right;
    margin-top: 6px;
  }
  .time {
    margin-top: 6px;
    text-align: right;
    font-size: 0.7em;
  }
}
.message_my:before {
  content: '';
  position: absolute;
  bottom: 0;
  right: -10px;
  width: 13px;
  height: 17px;
  background: linear-gradient(45deg, rgb(229, 229, 229) 0%, rgb(229, 229, 229) 50%, transparent 50%, transparent);
}
</style>