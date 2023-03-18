<template>
  <div class="login_container">
    <div class="box">
      <div class="cover"></div>
      <div class="shadow"></div>
      <div class="content">
        <div class="form">
          <h2>Sing in</h2>
          <div class="input_box">
            <input v-model="userName" type="text" required>
            <span>Логин</span>
          </div>
          <div class="input_box">
            <input v-model="userPassword" type="password" required>
            <span>Пароль</span>
          </div>
          <div class="input_box">
            <input class="input_submit" @click="registrationUser(userName, userPassword)" type="submit" value="Войти">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { mapActions } from 'pinia';
import {useUserStore} from "@/Store/UserStore/UserStore";

export default defineComponent({
  name: "LoginUser",
  data() {
    return {
      userName: '',
      userPassword: '',
    }
  },
  methods: {
    ...mapActions(useUserStore, ['registrationUser'])
  },
})
</script>

<style lang="scss" scoped>
.login_container {
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    position: relative;
    width: 400px;
    height: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
    .cover {
      position: absolute;
      top: 0;
      left: -100px;
      width: 100px;
      height: 100px;
      background: $color-back;
      z-index: 10;
    }
    .shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #eee;
    }
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
      .form {
        position: relative;
        width: 260px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
          font-size: 2em;
          color: $color-font;
          margin-bottom: 20px;
        }
        .input_box {
          position: relative;
          width: 100%;
          margin-top: 30px;
          input {
            position: relative;
            width: 100%;
            padding: 10px 0 10px 25px;
            font-size: 1.25em;
            background: transparent;
            box-shadow: none;
            border: none;
            border-bottom: 3px solid $color-font;
            outline: none;
            color: $color-font;
          }
          input:focus ~ span,
          input:valid ~ span {
            transform: translateY(-20px);
            font-size: 0.9em;
            background: $color-font;
            color: #fff;
            padding: 2px 4px;
          }
          .input_submit {
            background: $color-font;
            color: #fff;
            cursor: pointer;
            padding: 10px;
          }
          .input_submit:hover {
            background: $color-hover;
          }
          span {
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px 0 10px 25px;
            font-size: 1.25em;
            pointer-events: none;
            color: $color-font;
            transition: 0.5s;
          }
        }
      }
    }
  }
  .box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
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
    width: 25px;
    height: 100%;
    background: #9d9d9d;
    filter: blur(1px);
    z-index: 1;
  }
}
</style>