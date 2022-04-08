<template lang="pug">
  .toolBar
    //- .title {{title}}
    Row(:gutter="24")
      Col(span="6")
        Select(
          ref="excSe"
          placeholder="搜索快递公司"
          remote
          @on-query-change="excSearchData"
          v-model="exc"
          :filterable="true"
          :clearable="true"
          @on-change="exc_search"
        )
          Option(
            v-for="(item, index) in excList"
            :value="item.value"
            :key="index + 'exc'"
          ) {{item.value}}
      Col(span="6")
        Select(
          ref="awardSe"
          placeholder="奖项类型"
          v-model="award"
          @on-change="awardSearch"
        )
          Option(
            v-for="(item, index) in awardList"
            :value="item.value"
            :key="index + 'award'"
          ) {{item.label}}
      Col(span="6")
        DatePicker(
          type="daterange"
          split-panels
          style="width:100%"
          separator="至"
          placeholder="请选择时间区间"
          :editable="false"
          v-model="dates"
          @on-change="date_search"
        )
      Col(span="6" style="display:flex;justifyContent: space-between")
        Button(
          type="info"
          style="width:calc(50% - 10px);"
          shape="circle"
          @click="search_dealer"
        ) 筛&nbsp;&nbsp;选
        Button(
          type="info"
          style="width:calc(50% - 10px);"
          shape="circle"
          @click="export_code"
        ) 导&nbsp;&nbsp;出
  </div>
</template>
<script lang="ts">
import { Vue, Watch, Prop, Component, Emit } from "vue-property-decorator";
import * as service from "@/service";

@Component
export default class toolBar extends Vue {
  @Prop() public title!: string;
  // 筛选
  @Emit()
  public search_dealer() {
    let basic:object = {
      exc: this.exc,
      award: this.award,
      dates: this.dates,
    }
    return basic;
  }
  // 导出表格
  @Emit()
  public export_code(){
    let basic:object = {
      exc: this.exc,
      award: this.award,
      dates: this.dates,
    }
    return basic;
  }
  // 奖项-->
  public awardList: Array<any> = [
    {value:"现金",label:"现金"},
    {value:"实物",label:"实物"},
    {value:"积分",label:"积分"},
  ];
  public award: string = "现金";
  // 更换奖项
  public awardSearch(v:string){
    this.award = v;
    return this.award
  }
  // 奖项<--
  // 快递公司-->
  
  public excList: Array<any> = [
    {value:"juvia",label:"juvia"},
    {value:"wendy",label:"wendy"},
    {value:"vignette",label:"vignette"},];
  public exc: string = "";
  
   @Emit()
  public exc_search(v: any) {
    this.exc = v;
    return this.exc;
  }
  // 获取快递公司
  public excSearchData(query) {
    console.log(query);
  }
 
  // 快递公司<--
  // 时间区间-->
  public dates:Array<string> = ["",""];
  @Emit()
  public date_search(v:any){
    this.dates = v;
    return this.dates;
  }
  // 时间区间<--

  // 父组件中如何使用?
  // // 表头-->
  // // 筛选
  // public search_dealer(v: object) {
  //   console.log(v);
  // }
  // // 选择经销商
  // public agent: string = "";
  // public agent_search(v: string) {
  //   this.agent = v;
  //   console.log(this.agent);
  // }
  // // 选择时间区间
  // public dates: Array<string> = ["", ""];
  // public date_search(v: any) {
  //   this.dates = v;
  //   console.log(this.dates);
  // }
  // // 导出表格
  // public export_code(v: object) {
  //   console.log(v);
  // }
  // // 表头<--
}
</script>
<style lang="scss" scoped>
.toolbar {
  .title {
    font-size: 20px;
    font-family: PingFangSC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .tool {
    display: flex;
    justify-content: space-between;
    .select {
      width: 150px;
      border-radius: 18px;
    }
    .btn {
      width: 140px;
      margin: 0 20px;
      color: #cc302d;
      border-color: #cc302d;
    }
    .ivu-btn {
      height: 32px;
    }
  }
}
</style>
