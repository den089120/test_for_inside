<template>
  <div class="message_it">
    <div class="name">{{nameIt}}</div>
    <div class="text">{{messageIt}}</div>
    <div class="time">12:32</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ItMessage",
  props: {
    messageIt: String,
    nameIt: String,
  },
})
</script>

<style lang="scss" scoped>
.message_it {
  position: relative;
  margin-left: 15px;
  border-radius: 5px;
  margin-top: 6px;
  width: 65%;
  background: rgb(243, 243, 243);
  max-width: 540px;
  padding: 10px;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.1);
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
.message_it:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -10px;
  width: 13px;
  height: 17px;
  background: linear-gradient(325deg, rgb(243, 243, 243) 0%, rgb(243, 243, 243) 50%, transparent 50%, transparent);
}
</style>