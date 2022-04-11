<template>
  <div class="index_container">
    <div class="title">{{ content }}</div>
    <div class="box">
      <div
        class="word_box"
        v-for="(item, index) in type_list"
        :key="index"
        @click="btn"
      >
        <div class="left">
          <p>{{ item.name }}</p>
          <p>单词：{{ item.count }}</p>
        </div>
        <div class="right">
          <img src="@/assets/image/go_ioc.png" width="100%" mode="" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Emit } from "vue-property-decorator";
// import modal from "@/components/modal.vue"
import * as service from "@/service";
@Component({
  components: {
    // modal
  },
})
export default class module extends Vue {
  // 用于接收参数
  // @Prop() public readonly title!: string;
  public theme: string = "light";
  public type_list: Array<any> = [];
  public mounted() {
    let url =
      "https://mock.mengxuegu.com/mock/6170092a4351af34a2ddf6a1/get_word_type";
    (this as any).$axios.post(url).then((res) => {
      this.type_list = res.data.data;
    });
  }
  public content: string =
    "如果您未注册，请花一分钟时间免费注册可可英语用户。如感觉好可推荐给身边的朋友。";
  public btn() {
    this.$router.push({
      path: "/word",
    });
  }
}
</script>
<style lang="scss" scoped>
.index_container {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .box {
    width: 840px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .word_box {
      cursor: pointer;
      width: 170px;
      height: 58px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 5px;
      border: 1px solid #eee;
      border-radius: 10px;
      margin: 20px 20px;
      .left {
        & > p:first-child {
          color: #1770af;
          text-align: left;
          padding-bottom: 5px;
        }
        & > p:last-child {
          color: #999999;
          text-align: left;
        }
      }
    }
  }
  .title {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
