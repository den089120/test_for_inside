<template>
  <div class="navbar_container">
    <div class="menu">
      <RouterLink :to="{name: 'DashboardChat'}" :disabled="User.isAuth"  class="menu_item">Список чатов</RouterLink>
    </div>
    <div class="user_name">
      <div>Здравствуйте {{User.userName}}</div>
    </div>
    <div class="navbar_login">
      <div class="menu_item" @click="logOutUser">Выйти</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { mapState, mapActions } from 'pinia';
import {useUserStore} from "@/Store/UserStore/UserStore";

export default defineComponent({
  name: "NavBar",
  data() {
    return {}
  },
  computed: {
    ...mapState(useUserStore, ['User'])
  },
  methods: {
    ...mapActions(useUserStore, ['logOutUser'])
  },
})
</script>

<style lang="scss" scoped>
.navbar_container {
  width: 95%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background:   transparent;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  margin: 0 2.5%;
  color: $color-font;
  .menu {}
}
.menu_item {
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
}
.menu_item:hover {
  color: $color-hover;
  text-shadow: 0 0 5px $color-hover;
}

</style>