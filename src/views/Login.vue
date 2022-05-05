<template>
  <div class="about">
    <!-- <div class="left" ref="background"></div> -->
    <div class="login">
      <div class="item">
        <Form
          class="form"
          ref="formInline"
          :model="formInline"
          :rules="ruleInline"
        >
          <FormItem prop="user" class="loginUser">
            <img src="@/assets/phone.png" width="100%" alt />
            <Input
              class="phone"
              type="text"
              v-model="formInline.user"
              autocomplete="new-password"
              placeholder="请输入帐号"
            />
          </FormItem>
          <FormItem prop="password" class="loginUser">
            <img src="@/assets/password.png" width="100%" alt />
            <Input
              type="password"
              password
              autocomplete="new-password"
              class="password"
              v-model="formInline.password"
              placeholder="请输入密码"
            />
            <!-- <span slot="append" class="get" v-if="getCode" @click="getLoginCode">{{getCodeText}}</span>
              <span slot="append" class="newGet" v-else>重新获取（{{time}}s）</span> -->
            <!-- </Input> -->
          </FormItem>
          <FormItem class="xieyi">
            <Checkbox v-model="single">网站使用协议</Checkbox>
          </FormItem>
          <FormItem>
            <div class="btns">
              <Button type="success" class="submit" @click="handleSubmit()"
                >登录</Button
              >
              <Button type="info" class="submit" @click="register()"
                >注册</Button
              >
            </div>
          </FormItem>
        </Form>
      </div>
    </div>
    <Modal title="提示" v-model="modal8" :mask-closable="false">
      <p>账号尚未使用，是否注册</p>
      <div slot="footer">
        <Button class="cancel" type="text" size="large" @click="cancel"
          >取消</Button
        >
        <Button class="ok" type="info" size="large" @click="ok">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
// import { Vue, Watch, Prop, Component } from "vue-property-decorator";
// import store from "@/store/store";
import { API_URL } from "../config";
// import * as service from "@/service";

export default {
  data() {
    return {
      formInline: {
        user: "juvia123",
        password: "123456",
      },
      ruleInline: {
        user: [{ required: true, message: "请输入帐号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      winH: "",
      time: 60,
      getCode: true,
      getCodeText: "获取验证码",
      modal8: false,
      single: true,
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
  },
  mounted() {
    // this.$refs["background"].style.height = this.winH;
  },
  methods: {
    getLoginCode() {
    },

    // 判断浏览器种类
    detectBrowser() {
    },
    // 注册
    register() {
      console.log(this.single);
      this.$refs.formInline.validate((valid) => {
        if (valid) {
          if (this.single) {
            let url = `${API_URL}/api/addUser`;
            this.axios({
              method: "post",
              url: url,
              data: {
                username: this.formInline.user,
                password: this.formInline.password,
              },
            })
              .then((res) => {
                console.log(res.data);
                if (res.data.code == 200) {
                  this.$Message.success("注册成功");
                  window.sessionStorage.setItem(
                    "username",
                    this.formInline.user
                  );
                  this.$router.push({
                    name: "home",
                  });
                } else if (res.data.code == 201) {
                  this.$Message.warning("账号已存在");
                
                } else if (res.data.code == 500) {
                  this.$Message.warning("注册失败");
                }
              })
              .catch((error) => {
                this.$Message.warning("提交失败,请刷新页面并重新提交");
              });
          } else {
            this.$Message.warning("请勾选网站使用协议");
          }
        } else {
          return false;
        }
      });
    },
    // 登录
    handleSubmit() {
      // this.$Message.error("你还没有创建新的页面哟!")
      this.$refs.formInline.validate((valid) => {
        if (valid) {
          if (this.single) {
            let url = `${API_URL}/api/login`;
            this.axios({
              method: "post",
              url: url,
              data: {
                username: this.formInline.user,
                password: this.formInline.password,
              },
            })
              .then((res) => {
                if (res.data.code == 200) {
                  this.$Message.success("登录成功");
                  this.$router.push({
                    name: "home",
                  });
                } else if (res.data.code == 500) {
                  this.$Message.warning("账号或密码错误");
                }
              })
              .catch((error) => {
                this.$Message.warning("提交失败,请刷新页面并重新提交");
              });
            window.sessionStorage.setItem("username", this.formInline.user);
          } else {
            this.$Message.warning("请勾选网站使用协议");
          }
        } else {
          return false;
        }
      });
    },
    cancel() {
      this.modal8 = false;
    },
    ok() {},
  },
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
  height: 100vh;
  font-size: 12px;
  position: relative;
  // background: url("../assets/login.png") no-repeat 100% 100%;
  background-color: #014e82;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .login {
    margin: auto 0;
    height: 314px !important;
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
        // width: 328px;
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
  .xieyi {
    color: #fff;
    font-size: 14px;
    text-align: left;
    // padding-left: 20px;
  }
  .btns {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .submit {
      width: 45%;
      height: 60px;
      border-radius: 50px;
      font-size: 20px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 30px;
      letter-spacing: 2px;
      // background: transparent;
    }
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
