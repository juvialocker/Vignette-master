<template>
  <div class="word_container">
    <div class="word_box">
      <div
        class="box"
        v-for="(item, index) in word_data"
        :key="index"
        v-if="index == inx"
      >
        <div class="word" v-if="index == inx">
          <h1>{{ item.word }}</h1>
          <h1>{{ item.words }}</h1>
        </div>
        <div class="sp_list" v-if="index == inx">
          <div class="sp" v-for="(item_sp, index) in item.sp" :key="index">
            <span>{{ item_sp.speech }}</span>
            <span>{{ item_sp.explain }}</span>
          </div>
        </div>
        <div class="input" v-if="index == inx">
          <Input type="text" placeholder="单词拼写" style="width: 300px" />
        </div>
        <div class="btn">
          <Button v-if="index == inx" type="success" @click="btn_word('next')"
            >下一个单词</Button
          >
          <Button v-if="index == inx" type="success" @click="btn_word('prev')"
            >上一个单词</Button
          >
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
    });
  }
  public inx: number = 0;
  public btn_word(v: string) {
    if (v == "next" && this.inx < 15) {
      this.inx++;
      return;
    }
    if (v == "prev" && this.inx > 0) {
      this.inx--;
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
    .box {
      padding: 20px 0;
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
      }
    }
  }
}
</style>
