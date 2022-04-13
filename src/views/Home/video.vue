<template>
  <div class="video_container">
    <div class="navigater">
      <div
        class="navigater_box"
        v-for="(item, index) in video_type"
        :key="index"
        @click="btn(item.type)"
      >
        <div
          :class="
            active == item.type ? 'select_charActive' : 'select_charNoactive'
          "
        >
          {{ item.type_info }}
        </div>
      </div>
    </div>
    <div class="video_box" v-if="video_list.length > 0">
      <div
        class="video"
        v-for="(item, index_video) in video_list"
        :key="index_video"
        @click="video_btn(item.video_link)"
      >
        <img
          style="width:205px;height:273px"
          :src="item.image"
          alt=""
          width="100%"
          srcset=""
        />
        <div class="detail">
          <div class="title">{{ item.video_title }}</div>
          <Poptip
            trigger="hover"
            title="剧情介绍"
            :content="item.video_desc"
            word-wrap
            width="200"
          >
            <div class="desc">{{ item.video_desc }}</div>
          </Poptip>
        </div>
      </div>
    </div>
    <div class="prompt" v-else>
      暂无数据
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
  public video_list: Array<any> = [];
  public video_type: Array<any> = [];
  public active: string = "";
  public get_video_list(v: string) {
    this.video_list = [];
    let url = `https://mock.mengxuegu.com/mock/6170092a4351af34a2ddf6a1/video_${v}`;
    (this as any).$axios.post(url).then((res: any) => {
      this.video_list = res.data.data;
    });
  }
  public get_video_type() {
    let url = `https://mock.mengxuegu.com/mock/6170092a4351af34a2ddf6a1/video_type`;
    (this as any).$axios.post(url).then((res: any) => {
      this.video_type = res.data.data;
      let v = this.video_type[0].type;
      this.active = v;

      this.get_video_list(v);
    });
  }
  public mounted() {
    this.get_video_type();
  }
  public btn(v: string) {
    this.active = v;
    this.get_video_list(v);
  }
  public video_btn(link: any) {
    window.open(link);
  }
}
</script>
<style lang="scss" scoped>
.video_container {
  // margin: 20px;
  background-color: #fff;
  height: calc(100vh - 135px);
  padding: 20px;
  overflow-y: auto;
  .navigater {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .navigater_box {
      & > div {
        font-size: 14px;
        padding: 10px;
        cursor: pointer;
      }
    }
  }
  .video_box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .video {
      width: 205px;
      margin: 20px;
    }
    .detail {
      .title {
        line-height: 23px;
        height: 23px;
        font-size: 15px;
        vertical-align: baseline;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .desc {
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
    .prompt {
      height: calc(100vh - 250px);
      line-height: calc(100vh - 250px);
      font-size: 32px;
      font-weight: bold;
    }
  .select_charActive {
    color: red;
  }
  .select_charNoactive {
    color: #333;
  }
}
</style>
