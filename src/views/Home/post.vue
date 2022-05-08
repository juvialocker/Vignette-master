<!--
 * @Author: juvia
 * @Date: 2022-04-13 13:54:01
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-13 14:02:05
 * @FilePath: \Vignette-master\src\views\Home\post.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
-->

<template>
  <div class="post_container">
    <div class="top">
      <div
        class="top_box"
        v-for="(item, index) in post_list"
        :key="index"
        @click="btn_box(item.id)"
      >
        <div class="title">
          <div>
            {{ item.article_title }}
          </div>
          <div style="color:#999">
            {{ item.article_time }}
          </div>
        </div>
        <div class="content">
          <div>
            {{ item.article_content }}
          </div>
          <div style="color:#999">
            {{ item.article_user }}
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_title">
        <Icon type="md-brush" color="#014E82" />

        发表新帖
      </div>
      <div class="input">
        <Input
          v-model="article_title"
          style="width: 900px"
          placeholder="请填写标题"
        ></Input>
      </div>
      <div class="input_textarea">
        <Input
          v-model="article_content"
          style="width: 900px"
          type="textarea"
          maxlength="200"
          placeholder="请填写内容"
        ></Input>
      </div>
      <div class="btn">
        <Button type="primary" :loading="loading" @click="publish">
          <span v-if="!loading">发表</span>
          <span v-else>Loading...</span>
        </Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Emit } from "vue-property-decorator";
// import modal from "@/components/modal.vue"
import * as service from "@/service";
import moment from "moment";
import { API_URL } from "../../config";
@Component({
  components: {
    // modal
  },
})
export default class module extends Vue {
  // 用于接收参数
  // @Prop() public readonly title!: string;
  public article_title: string = "";
  public article_content: string = "";
  public loading: boolean = false;
  public post_list: Array<any> = [];
  // 发表
  public publish() {
    if (this.loading == false) {
      this.loading = true;
      if (this.article_title && this.article_content) {
        let article_id = String(new Date().getTime());
        let article_time = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

        let data = {
          id: article_id,
          article_time: article_time,
          article_title: this.article_title,
          article_content: this.article_content,
          article_user: window.sessionStorage.getItem("username"),
          article_userid: window.sessionStorage.getItem("username"),
        };
        let url = `${API_URL}/api/post`;
        this.axios({
          method: "post",
          url: url,
          data,
        })
          .then((res) => {
            if (res.data.code == 200) {
              this.$Message.success("发布成功");
              setTimeout(() => {
                this.loading = false;
                this.article_title = "";
                this.article_content = "";
                this.get_post_list();
              }, 2000);
            } else if (res.data.code == 500) {
              this.$Message.warning("网络错误");
            }
          })
          .catch((error) => {
            this.$Message.warning("网络错误");
          });
      } else if (this.article_title == "") {
        this.$Message.warning("请填写标题");
        this.loading = false;
      } else if (this.article_content == "") {
        this.$Message.warning("请填写内容");
        this.loading = false;
      }
    }
  }
  public get_post_list() {
    let url = `${API_URL}/api/get_post`;
    this.axios({
      method: "post",
      url: url,
    })
      .then((res) => {
        if (res.data.code == 200) {
          this.post_list = res.data.data;
          this.$Message.success("查询成功");
        } else if (res.data.code == 500) {
          this.$Message.warning("网络错误");
        }
      })
      .catch((error) => {
        this.$Message.warning("网络错误");
      });
  }
  public mounted() {
    this.get_post_list();
  }
  public btn_box(id: any) {
    this.$router.push({
      path: `/post_detail?id=${id}`,
    });
  }
}
</script>
<style lang="scss" scoped>
.post_container {
  background-color: #fff;
  height: calc(100vh - 135px);
  padding: 20px;
  overflow-y: auto;
  font-size: 16px;
  .top {
    width: 1000px;
    margin: 0 auto;
    .top_box {
      border-bottom: 1px solid #ddd;
      padding: 20px;
      border: 1px solid #ddd;
      border-bottom: none;
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .title {
        color: blue;
        padding-bottom: 10px;
      }
      .content {
        color: 333;
        & > div:first-child {
          width: 700px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
          text-align: left;
        }
      }
    }
  }
  .bottom {
    background-color: #eee;
    width: 1000px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #bbb;
    img {
      width: 30px;
      height: 20px;
    }
    .bottom_title {
      width: 900px;
      text-align: left;
      line-height: 14px;
      font-size: 14px;
      font-family: "Microsoft Yahei", "ST Hei";
      cursor: pointer;
      color: #014e82;
    }
    .input {
      margin: 10px 0;
      text-align: left;
    }
    .input_textarea {
      margin-bottom: 20px;
      text-align: left;
    }
    .btn {
      width: 900px;
      text-align: left;
    }
  }
  .top_box:hover {
    background-color: #eee;
  }
}
</style>
