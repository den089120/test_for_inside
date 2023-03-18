<template>
  <NavBar/>
  <RouterView class="container"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent( {
  name: "App",
  components: {
    NavBar,
  },
})
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Consolas;
  background: $color-back;
}
a {
  text-decoration: none;
  color: inherit;
}
.container {
  margin-top: 70px;
}
</style>
