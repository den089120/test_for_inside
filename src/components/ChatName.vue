<template>
  <div class="chat_name">
    <div class="box">
      <div class="content">
        <RouterLink :to="{name: 'ChatContent'}" class="chat_href">тема чата: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quam!</RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ChatName"
})
</script>

<style lang="scss" scoped>
.chat_name {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .box {
    position: relative;
    width: 70%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      position: relative;
      width: 100%;
      height: 100%;
      background: linear-gradient(#dbdae1, #a3aaba);
      box-shadow: 5px 5px 5px rgba(0,0,0,0.1),
      15px 15px 15px rgba(0,0,0,0.1),
      20px 10px 20px rgba(0,0,0,0.1),
      50px 50px 80px rgba(0,0,0,0.1),
      inset 3px 3px 2px #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .chat_href {
        font-weight: bold;
        color: $color-font;
      }
      .chat_href:hover {
        color: $color-hover;
        text-shadow: 0 0 5px $color-hover;
      }
    }
  }
  .box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 100%;
    background: linear-gradient(#fff, #fff, #e3e3e3);
    filter: blur(1px);
    z-index: 1;
  }
  .box::after {
    content: '';
    position: absolute;
    top: 1px;
    right: -1px;
    width: 15px;
    height: 100%;
    background: #9d9d9d;
    filter: blur(1px);
    z-index: 1;
  }
}
</style>