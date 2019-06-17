<template>
  <div class="wrap">
    <div class="tit">欢迎来到星享俱乐部</div>
    <div class="con">
      <div class="con-top">
        <p>
          <input type="text" placeholder="手机号码" v-model="phone" class="phone">
        </p>
        <p>
          <input type="text" placeholder="验证码" v-model="pwd" class="pwd">
        </p>
        <button @click="handleLogin">登录 / 注册</button>
        <div class="accountLogin">使用账号密码登录</div>
      </div>
      <div class="con-bottom">
        <p>使用以下方式进行账户注册/登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import { mapState, mapMutations } from "vuex";
const phoneReg = /^1[3578]\d{9}$/;
export default {
  data() {
    return {
      phone: "",
      pwd: "",
      inp: ""
    };
  },
  created() {},
  computed: {
    num() {
      return this.$store.state.num;
    }
  },
  methods: {
    handleLogin() {
      if (phoneReg.test(this.phone) && this.pwd.trim() !== "") {
        api.userlogin({
            phone: this.phone,
            password: this.pwd
          })
          .then(res => {
            window.localStorage.setItem("token", res.token);
            this.$router.back();
          })
          .catch(error => {
            console.log(error.response.data.massage);
          });
      } else {
        alert("请输入正确的用户名或密码");
      }
    }
  }
};
</script>


<style lang="scss">
@import "@/static/scss/_minix.scss";
@import "@/static/scss/common.scss";

html,
body,
#app,
.wrap {
  width: 100%;
  height: 100%;
}
.wrap {
  @include box_flex;
  @include direction(column);
}
.tit {
  width: 100%;
  height: pxTorem(80px);
  background: white;
  font-size: pxTorem(28px);
  font-weight: 800;
  padding: pxTorem(10px);
  box-shadow: 0 pxTorem(5px) pxTorem(5px) rgb(231, 231, 231);
  line-height: pxTorem(60px);
  @include sizing;
}
.con {
  flex: 1;
  padding: pxTorem(10px) pxTorem(10px);
  @include sizing;
  background: rgb(248, 249, 246);
  margin-top: pxTorem(5px);
}
.con-top {
  width: 100%;
  height: pxTorem(450px);
  text-align: center;
  p {
    width: 100%;
    height: pxTorem(44px);
    border-bottom: pxTorem(1px) solid #ccc;
    line-height: pxTorem(44px);
    margin-top: pxTorem(20px);
    input {
      width: 100%;
      font-size: pxTorem(14px);
    }
  }
  button {
    margin-top: pxTorem(80px);
    width: 100%;
    height: pxTorem(44px);
    border: none;
    outline: none;
    background: rgb(212, 212, 212);
    font-size: pxTorem(18px);
    color: white;
    border-radius: pxTorem(25px);
  }
  .accountLogin {
    margin-top: pxTorem(38px);
    font-size: pxTorem(16px);
    color: rgb(1, 158, 88);
  }
}

.con-bottom {
  text-align: center;
}
</style>