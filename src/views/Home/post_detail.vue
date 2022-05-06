<template>
  <div class="post_detail_container">
    <div class="top">
      <div class="title">
        {{ post_list.article_title }}
      </div>
      <div class="box">
        <div class="floor">
          <div class="left">
            <div class="avator">
              <img src="@/assets/image/avator.png" alt="" srcset="" />
            </div>
            <div class="user">
              {{ post_list.article_user }}
            </div>
          </div>
          <div class="right">
            <div class="content">
              {{ post_list.article_content }}
            </div>
            <div
              class="delete_user"
              v-if="post_list.article_user == username"
              @click="delete_post(post_list.id)"
            >
              删除 |
            </div>
            <div class="info">1楼&nbsp;&nbsp;{{ post_list.article_time }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="box" v-for="(item, index) in review_all_list" :key="index">
        <div class="floor">
          <div class="left">
            <div class="avator">
              <img src="@/assets/image/avator.png" alt="" srcset="" />
            </div>
            <div class="user">
              {{ item.review_authorID }}
            </div>
          </div>
          <div class="right">
            <div class="content">
              {{ item.review_content }}
            </div>
            <div class="delete_box">
              <div
                class="deletes"
                v-if="item.review_authorID == username"
                @click="delete_review(item)"
              >
                删除 |
              </div>
              <div class="info">
                {{ index + 2 }}楼&nbsp;&nbsp;{{ item.review_sdTime }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_title">
        <Icon type="md-brush" color="#014E82" />

        发表回复
      </div>
      <div class="input_textarea">
        <Input
          v-model="review_content"
          style="width: 900px"
          type="textarea"
          maxlength="200"
          placeholder="请填写内容"
        ></Input>
      </div>
      <div class="btn">
        <Button type="primary" :loading="loading" @click="reply">
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
  public post_list: any = {};
  public review_all_list: Array<any> = [];
  public post_detail: any = {};
  public article_id: any = 0;
  private username: any = window.sessionStorage.getItem("username");
  public mounted() {
    this.article_id = this.$route.query.id;
    this.get_post_list();
    this.get_review_all_list();
  }
  // 查询文章
  public get_post_list() {
    let url = `${API_URL}/api/get_post_detail`;
    this.axios({
      method: "post",
      url: url,
      data: {
        id: this.article_id,
      },
    })
      .then((res) => {
        if (res.data.code == 200) {
          this.post_list = res.data.data;
        } else if (res.data.code == 500) {
          this.$Message.warning("网络错误");
        }
      })
      .catch((error) => {
        this.$Message.warning("网络错误");
      });
  }
  public review_content: string = "";
  public loading: boolean = false;
  // 回复
  public reply() {
    if (this.loading == false) {
      this.loading = true;
      if (this.review_content) {
        let id = String(new Date().getTime());
        let review_sdTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        let data = {
          id: id,
          review_articleID: this.article_id,
          review_masterID: this.post_list.article_user,
          review_content: this.review_content,
          review_sdTime: review_sdTime,
          review_authorID: window.sessionStorage.getItem("username"),
        };
        let url = `${API_URL}/api/post_review`;
        this.axios({
          method: "post",
          url: url,
          data,
        })
          .then((res) => {
            if (res.data.code == 200) {
              console.log(res.data.data);
            } else if (res.data.code == 500) {
              this.$Message.warning("网络错误");
            }
          })
          .catch((error) => {
            this.$Message.warning("网络错误");
          });
        setTimeout(() => {
          this.loading = false;
          this.$Message.success("回复成功");
          this.review_content = "";
          this.get_review_all_list();
        }, 1000);
      } else if (this.review_content == "") {
        this.$Message.warning("请填写内容");
        this.loading = false;
      }
    }
  }
  public get_review_all_list() {
    this.review_all_list = [];
    let url = `${API_URL}/api/get_post_review`;
    this.axios({
      method: "post",
      url: url,
      data: {
        review_articleID: this.article_id,
      },
    })
      .then((res) => {
        if (res.data.code == 200) {
          this.review_all_list = res.data.data;
        } else if (res.data.code == 500) {
          this.$Message.warning("网络错误");
        }
      })
      .catch((error) => {
        this.$Message.warning("网络错误");
      });
  }
  // 非作者删除评论
  public delete_review(item: any) {
    let url = `${API_URL}/api/delete_post_review`;
    this.axios({
      method: "post",
      url: url,
      data: {
        id: item.id,
        review_authorID: this.username,
      },
    })
      .then((res) => {
        if (res.data.code == 200) {
          this.$Message.success("删除完成");
          this.get_post_list();
          this.get_review_all_list();
        } else if (res.data.code == 500) {
          this.$Message.warning("网络错误");
        }
      })
      .catch((error) => {
        this.$Message.warning("网络错误");
      });
  }
  // 作者删除帖子
  public delete_post(id: any) {
    let url = `${API_URL}/api/delete_post`;
    this.axios({
      method: "post",
      url: url,
      data: {
        id: id,
        article_userid: this.username,
      },
    })
      .then((res) => {
        if (res.data.code == 200) {
          this.$Message.success("删除完成");
          this.$router.push({
            path: `/post`,
          });
        } else if (res.data.code == 500) {
          this.$Message.warning("网络错误");
        }
      })
      .catch((error) => {
        this.$Message.warning("网络错误");
      });
  }
}
</script>
<style lang="scss" scoped>
.post_detail_container {
  background-color: #fff;
  height: calc(100vh - 135px);
  padding: 20px;
  overflow-y: auto;
  .top {
    width: 1000px;
    margin: 0 auto;
    .title {
      padding: 20px;
      font-weight: 600;
      font-size: 20px;
      text-align: left;
    }
    .delete_user {
      color: rgb(101, 101, 214);
      position: absolute;
      bottom: 20px;
      right: 165px;
      cursor: pointer;
    }
    .floor {
      display: flex;
      justify-content: space-between;
      // align-items: center;
      border: 1px solid #ddd;
      border-bottom: none;
      & > div {
        min-height: 190px;
      }
      .left {
        width: 130px;
        background-color: #fbfbfd;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        .avator,
        .avator img {
          width: 80px !important;
          height: 80px !important;
        }
        .user {
          padding-top: 20px;
          font-size: 16px;
        }
      }
      .right {
        position: relative;
        .content {
          text-align: left;
          font-size: 16px;
        }
        .info {
          position: absolute;
          bottom: 20px;
          right: 20px;
          color: #999;
        }
        width: 870px;
        padding: 20px;
        .delete_box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .deletes {
            color: rgb(101, 101, 214);
            position: absolute;
            bottom: 20px;
            right: 165px;
            cursor: pointer;
          }
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
      padding-bottom: 20px;
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
}
</style>
