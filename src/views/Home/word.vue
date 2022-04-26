<template>
  <div class="word_container">
    <div class="word_box">
      <div class="box" v-for="(item, index) in word_data" :key="index">
        <div class="box_re" v-if="index == inx">
          <div class="word">
            <h1>{{ item.word }}</h1>
            <h1>{{ item.words }}</h1>
          </div>
          <div class="sp_list">
            <div class="sp" v-for="(item_sp, index) in item.sp" :key="index">
              <span>{{ item_sp.speech }}</span>
              <span>{{ item_sp.explain }}</span>
            </div>
          </div>
          <div class="input">
            <Input type="text" placeholder="单词拼写" style="width: 300px" />
          </div>
          <div class="btn">
            <Button type="success" @click="btn_word('prev')">上一个单词</Button>
            <div class="count">{{inx+1}}/{{word_data.length}}</div>
            <Button type="success" @click="btn_word('next')">下一个单词</Button>
          </div>
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
  public word_data: Array<any> = [];
  public mounted() {
    let url =
      "https://mock.mengxuegu.com/mock/6170092a4351af34a2ddf6a1/word_llst";
    (this as any).$axios.post(url).then((res) => {
      this.word_data = res.data.data;
      console.log(this.word_data);
    });
  }
  public inx: number = 0;
  public btn_word(v: string) {
    if (v == "next" && this.inx < 14) {
      this.inx++;
      return;
    }
    if (this.inx == this.word_data.length) {
      this.$Message.warning("目前是本组的最后一个单词!")
    }
    if (v == "prev" && this.inx > 0) {
      this.inx--;
      return
    }
    if (this.inx == 0) {
      this.$Message.warning("目前是本组的第一个单词!")
    }
  }
}
</script>
<style lang="scss" scoped>
.word_container {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: calc(100vh - 170px);
  .word_box {
    position: relative;
    width: calc(100vw - 80px);
    height: calc(100vh - 170px);
    .box {
      padding: 20px 0;
      position: absolute;
      left: 50%;
      top: 150px;
      transform: translate(-50%, -50%);
      .box_re {
        width: 300px;
        .word {
          display: flex;
          justify-content: flex-start;
          & > h1:first-child {
            padding-right: 10px;
            color: #333;
          }
          & > h1:last-child {
            color: #92df4b;
          }
        }
        .sp_list {
          padding-top: 20px;
          .sp {
            padding-bottom: 10px;
            text-align: left;
            color: #333;
          }
        }
        .btn {
          padding-top: 20px;
          // text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .count{
            font-size: 18px;
            width: 50px;
          }
        }
      }
    }
  }
}
</style>
