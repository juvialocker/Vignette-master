<template lang="pug">
.toolHeader
  .left {{ title }}
  .right
    .dateRange
      DatePicker(
        v-if="date_vis"
        :transfer="true",
        :editable="false"
        type="daterange",
        placeholder="请选择时间区间",
        separator=" 至 ",
        style="width: 300px;",
        v-model="dates",
        @on-change="date_change",
      )
    Input.inputs(
      v-model="info",
      clearable,
      @on-change="change_input",
      :placeholder="placeholder",
      suffix="ios-search"
    )
    Button.btn(type="info", shape="circle", @click="search") 搜索
    Button.btn(v-if="add", type="info", shape="circle", @click="add_ok") 新增
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Emit } from "vue-property-decorator";
@Component({
  components: {
  },
})
export default class module extends Vue {
  // 用于接收参数
  @Prop() public readonly title!: string;
  @Prop() public readonly placeholder!: string;
  @Prop() public readonly add!: boolean;
  @Prop() public readonly date_vis!: boolean;
  private dates: Array<any> = [];
  private info: string = "";
  @Emit()
  private date_change(v: any) {
    if (v[0] && v[1]) {
      this.dates = v;
    } else {
      this.dates = ["", ""];
    }
    return this.dates;
  }
  @Emit()
  private change_input() {
    return this.info;
  }
  @Emit()
  private search() {
    return true;
  }
  @Emit()
  private add_ok() {
    return true;
  }

}
</script>
<style lang="scss" scoped>
.toolHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  .left {
    font-size: 18px;
    font-weight: bold;
    width: 30%;
    text-align: left;
  }
  .right {
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .dateRange {
      margin-right: 10px;
    }
    .inputs {
      width: 300px;
    }
    .btn {
      width: 80px;
      margin-left: 10px;
      height: 36px;
    }
  }
}
</style>