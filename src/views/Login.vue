<template>
  <div class="about">
    <div class="left" ref="background">
    </div>
    <div class="login">
      <div class="item">
        <Form class="form" ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user" class="loginUser">
            <img src="@/assets/phone.png" width="100%" alt />
            <Input
              class="phone"
              type="text"
              v-model="formInline.user"
              autocomplete="new-password"
              placeholder="请输入手机号"
            />
          </FormItem>
          <FormItem prop="password" class="loginPwd">
            <img src="@/assets/password.png" width="100%" alt />
            <Input
              autocomplete="new-password"
              class="password"
              v-model="formInline.password"
              placeholder="请输入验证码"
            >
              <span slot="append" class="get" v-if="getCode" @click="getLoginCode">{{getCodeText}}</span>
              <span slot="append" class="newGet" v-else>重新获取（{{time}}s）</span>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" class="submit" @click="handleSubmit()">登录</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Watch, Prop, Component } from "vue-property-decorator";
import store from "@/store/store";
import { TOKEN_KEY } from "../config";
import * as service from "@/service";

export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        password: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      winH: "",
      time: 60,
      getCode: true,
      getCodeText: "获取验证码"
    };
  },
  // beforeRouteLeave(to, from, next) {
  //   if (window.sessionStorage.getItem(TOKEN_KEY)) {
  //     next();
  //   } else {
  //     next({ path: "/login" });
  //   }
  // },
  created() {
    this.winH = window.innerHeight + "px";
    window.sessionStorage.clear();
    // this.detectBrowser();
  },
  mounted() {
    this.$refs["background"].style.height = this.winH;
  },
  methods: {
    getLoginCode() {
      console.log("验证码");
      let params = {};
      params.phone = this.formInline.user;
      if (/^1[3456789]\d{9}$/.test(this.formInline.user)) {
        service.sendMessage(params).then(({ data }) => {
          if (data.status == 200) {
            console.log(data);
          } else {
            this.$Message.warning(data.error);
          }
        });
        this.getCode = false;
        let timer = setInterval(() => {
          this.time--;
          if (this.time == 0) {
            this.time = 60;
            this.getCode = true;
            this.getCodeText = "重新获取验证码";
            window.clearInterval(timer);
          }
        }, 1000);
      } else {
        this.$Message.error("手机号错误");
      }
    },
    // 判断浏览器种类
    detectBrowser() {
      // var Sys = {};
      // var ua = navigator.userAgent.toLowerCase();
      // var s;
      // (s = ua.match(/firefox\/([\d.]+)/))
      //   ? (Sys.firefox = s[1])
      //   : (s = ua.match(/chrome\/([\d.]+)/))
      //   ? (Sys.chrome = s[1])
      //   : (s = ua.match(/opera.([\d.]+)/))
      //   ? (Sys.opera = s[1])
      //   : (s = ua.match(/rv:([\d.]+)/))
      //   ? (Sys.ie = s[1])
      //   : (s = ua.match(/msie ([\d.]+)/))
      //   ? (Sys.ie = s[1])
      //   : (s = ua.match(/version\/([\d.]+).*safari/))
      //   ? (Sys.safari = s[1])
      //   : 0;
      // if (Sys.chrome === undefined) {
      //   this.$Message.error("该网站在谷歌浏览器上体验效果最佳");
      // }
    },
    handleSubmit() {
      // this.$Message.error("你还没有创建新的页面哟!")
      this.$router.push({
        name: "home"
      });
      // this.$refs.formInline.validate(valid => {
      //   if (valid) {
      //     let params = {};
      //     params.phone = this.formInline.user;
      //     params.code = this.formInline.password;
      //     service
      //       .login(params)
      //       .then(res => {
      //         let status = res.status;
      //         let type = res.message.Jurisdiction.type;
      //         if (status == 200 && type === "admin") {
      //           // this.$Message.success("登录成功");
      //           window.sessionStorage.setItem("username", res.message.userName);
      //           setTimeout(() => {
      //             this.$Message.warning("还没有页面可以调整哟");
      //             // this.$router.push({
      //             //   name: "home"
      //             // }),
      //           }, 2000);
      //         } else if (status == 200 && type !== "admin") {
      //           this.$Message.error("您非当前系统管理员，请重新登录");
      //         } else {
      //           this.$Message.error("用户名或验证码错误");
      //         }
      //       })
      //       .catch(error => {
      //         this.$Message.error("用户名或验证码错误");
      //       });
      //   } else {
      //     return false;
      //   }
      // });
    }
  }
};
</script>

<style lang="scss">
/* 自动填充样式修改 */
:-webkit-autofill {
  // -webkit-text-fill-color: #ddd !important;
  background: none !important;
}
.about {
  width: 100%;
  height: 100%;
  font-size: 12px;
  position: relative;
  background: url("../assets/login.png") no-repeat 100% 100%;
  background-size: cover;
  .login {
    position: absolute;
    right: 40%;
    top: 53%;
  }
  #logo {
    width: 189px;
    // height: 88px;
  }
  .item {
    width: 440px;
  }
  .item h2 {
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 1.4rem;
    font-family: MicrosoftYaHei;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
    text-align: center;
  }
  .item h3 {
    font-size: 1.3vw;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 24px;
    letter-spacing: 1px;
  }
  .form {
    position: relative;
    .loginUser {
      position: relative;
      img {
        position: absolute;
        top: 16px;
        left: 21px;
        width: 16px;
        height: 16px;
        z-index: 2;
      }
    }
    .loginPwd {
      position: relative;
      img {
        position: absolute;
        top: 16px;
        left: 21px;
        width: 16px;
        height: 16px;
        z-index: 3;
      }
    }
    .phone {
      .ivu-input {
        height: 50px;
        border-radius: 50px;
        padding-left: 50px;
        background: url("../assets/phone.png") no-repeat;
        background-repeat: no-repeat;
        background-position: 20px 15px;
        font-size: 14px;
        color: #fff;
      }
    }
    .icon {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 7.5%;
      margin: auto;
    }
    .password {
      .ivu-input {
        height: 50px;
        padding-left: 50px;
        border-radius: 50px;
        background: url("../assets/password.png");
        background-repeat: no-repeat;
        background-position: 20px 15px;
        font-size: 14px;
        width: 328px;
        color: #fff;
      }
      .get {
        color: #cc302d;
        cursor: pointer;
      }
      .newGet {
        color: #fff;
      }
      .ivu-input-group-append {
        background: transparent;
        border: none;
        color: #fff;
        font-size: 14px;
      }
    }
    .ivu-form-item-error-tip {
      margin-left: 30px;
    }
  }

  .left img {
    width: 100%;
    height: 100%;
    max-height: 965px;
    min-height: 655px;
  }
  .left p {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 25px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
  }
  .form {
    margin-top: 6%;
  }
  .submit {
    width: 100%;
    height: 60px;
    border-radius: 50px;
    font-size: 20px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
    letter-spacing: 2px;
    background: transparent;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px rgba(201, 167, 92, 1) inset !important;
    box-shadow: inset 0 0 6px rgba(201, 167, 92, 1);
  }
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
