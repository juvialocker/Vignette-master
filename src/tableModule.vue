<template lang="pug">
.home
  toolHeader(
    title="首页主题列表",
    @date="date",
    @change_input="change_input",
    @search="search",
    @add_ok="add_ok",
    placeholder="请输入主题名称",
    :add="true",
    :date_vis="false"
  )
  .table
    Table(:data="tableData", :columns="col", :loading="loading", stripe)
    Page(
      ref="pageRef",
      v-if="total > 0",
      :total="total",
      :page-size="pageSize",
      prev-text="上一页",
      next-text="下一页",
      @on-change="pageChange"
    )
  newHomeModal(
    :title="home_title",
    :formData="formData",
    :modalShow="homeShow",
    @change="homeChange",
    @cancel="homeCancel",
    @ok="homeOk"
  )
  hintModal(
    title="提示",
    :type="type",
    :visible="deleteShow",
    :content="content_modal",
    @change="deleteChange",
    @ok="delete_ok"
  )
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Emit } from "vue-property-decorator";
import toolHeader from "@/components/toolHeader.vue";
import hintModal from "@/components/hintModal.vue";
import newHomeModal from "@/components/newHomeModal.vue";
import * as service from "@/service";
import { API_URL_IMG } from "@/config";
@Component({
  components: {
    hintModal,
    toolHeader,
    newHomeModal,
  },
})
export default class module extends Vue {
  // 用于接收参数
  // @Prop() public readonly title!: string;
  // 表头显示省略号
  public tableHeader(h: any, params: any) {
    let text = params.column.title;
    return h(
      "div",
      {
        style: {
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        },
        attrs: {
          title: text,
        },
      },
      text
    );
  }
  // 表格-->
  private loading: boolean = false;
  private tableData: Array<any> = [
    {index:1},
    {index:1},
  ];
  private col: any[] = [
    {
      title: "序号",
      type: "index",
      width: "80",
      indexMethod: (row: any) => {
        return this.pageNum * this.pageSize + row._index + 1;
      },
    },
    {
      title: "经销商编号",
      key: "index",
      tooltip: true,
    },
    {
      title: "经销商名称",
      key: "index",
      tooltip: true,
    },
    {
      title: "奖项编号",
      key: "index",
      tooltip: true,
    },
    {
      title: "奖项名称",
      key: "index",
      tooltip: true,
    },
    {
      title: "奖项类型",
      key: "index",
      tooltip: true,
    },
    {
      title: "奖项数量",
      key: "index",
      tooltip: true,
    },
    {
      title: "总兑付金额（元）",
      key: "index",
      tooltip: true,
      renderHeader: (h, params) => {
        return this.tableHeader(h, params);
      },
    },
  ];
  // 分页
  private total: number = 1;
  private pageSize: number = 10;
  private pageNum: number = 0;
  private pageChange(c: number) {
    this.pageNum = c - 1;
    // this.search_home();
  }
  // 表格<--

  // 搜索-->
  // 日期
  private dateRange: Array<any> = ["", ""];
  private date(v: Array<any>) {
    this.dateRange = v;
  }
  // 输入框
  private content: string = "";
  private change_input(v: string) {
    this.content = v;
  }
  private search() {
    this.pageNum = 0;
    this.search_home();
  }
  // 搜索列表
  private search_home() {
    let params: any = {
      pageSize: this.pageSize,
      pageNum: this.pageNum,
    };
    if (this.content) {
      params.name = this.content;
    }
    service.searchTable(params).then(({ data }) => {
      if (data.code == 200) {
        this.tableData = data.data.results;
        this.total = data.data.total;
      } else if (data.code == 500) {
        this.$Message.error(data.msg);
        this.tableData = [];
        this.total = 0;
      } else {
        this.$Message.error("后台网络错误");
        this.tableData = [];
        this.total = 0;
      }
    });
  }
  // 搜索<--
  // 弹窗-->
  private home_title: string = "新增主题";
  private check(v: object) {
    this.home_title = "修改主题";
    this.formData = v;
    this.homeShow = true;
  }
  private formData: any = {
    id: "",
    topicName: "",
    image: "",
    presentation: "",
    remark: "",
  };
  private homeShow: boolean = false;
  private homeChange(v: boolean) {
    if (!v) {
      this.homeShow = false;
    }
  }
  private homeCancel() {
    this.homeShow = false;
  }
  private homeOk(v: any) {
    let params: any = {
      ...v,
    };
    service
      .saveTable(params)
      .then(({ data }) => {
        if (data.code == 200) {
          this.search_home();
          this.homeShow = false;
        } else if (data.code == 500) {
          this.$Message.error(data.msg);
        } else {
          this.$Message.error("后台网络错误");
        }
      })
      .catch((error) => {
        this.$Message.error("捕获到未知错误,请刷新页面");
      });
  }
  private add_ok() {
    this.homeShow = true;
    this.formData = {
      id: "",
      topicName: "",
      image: "",
      presentation: "",
      remark: "",
    };
  }
  // 弹窗<--
  // 删除和启动-->
  private deleteShow: boolean = false;
  private content_modal: string = "删除后将无法恢复！";
  private type: string = "del";
  private delete_id: string = "";
  private dele_home(v: any) {
    this.content_modal = "删除后将无法恢复！";
    this.delete_id = v.id;
    this.deleteShow = true;
    this.type = "del";
  }
  private deleteChange(v) {
    if (!v) {
      this.deleteShow = false;
    }
  }
  private delete_ok(v: string) {
    let params: any = {
      id: this.delete_id,
    };
    if (this.type === "del") {
      service.removeTable(params).then(({ data }) => {
        if (data.code == 200) {
          //计算是否删除的是表格最后一页的最后一条数据
          if (this.total % this.pageSize === 1 && this.pageNum !== 0) {
            this.pageNum = this.pageNum - 1;
          }
          this.search_home();
        } else if (data.code == 500) {
          this.$Message.error(data.msg);
        } else {
          this.$Message.error("后台网络错误");
        }
      });
    } else {
      service.startTable(params).then(({ data }) => {
        if (data.code == 200) {
          this.$Message.success("应用主题成功");
          this.pageNum = 0;
          (this as any).$refs.pageRef.currentPage = 1;
          this.search_home();
        } else if (data.code == 500) {
          this.$Message.error(data.msg);
        } else {
          this.$Message.error("后台网络错误");
        }
      });
    }
    this.deleteShow = false;
  }
  // 删除和启动<--
  // 启动-->
  private start_home(v: any) {
    this.deleteShow = true;
    this.delete_id = v.id;
    this.type = "start";
    this.content_modal = "是否应用该图片和描述？";
  }
  // 启动<--
  private created() {
    this.search_home();
  }
}
</script>
<style lang="scss" scoped>
.home {
  min-height: 100%;
  padding: 20px 20px 30px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
