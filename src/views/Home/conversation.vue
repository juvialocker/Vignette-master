<template>
  <div class="conversation_container">
    <div class="conversation">
      <div class="conversation_menu">
        <Menu
          :theme="theme2"
          mode="vertical"
          width="200px"
          @on-select="onSelect"
          active-name="1-1"
          :open-names="['1']"
          accordion
        >
          <Submenu
            :name="item.submenu"
            v-for="(item, index) in menu_list"
            :key="index"
          >
            <template slot="title">
              <Icon type="ios-paper" />
              {{ item.submenu_name }}
            </template>
            <MenuItem
              :name="item_menu.menuItem"
              v-for="(item_menu, indexs) in item.menuItem_list"
              :key="indexs"
              >{{ item_menu.menuItem_name }}</MenuItem
            >
          </Submenu>
        </Menu>
      </div>
      <div class="line"></div>
      <div class="conversation_content">
        <div class="btns">
          <div class="btn">
            <Button type="success" @click="btn_word('cn')">{{
              content_cn
            }}</Button>
            <Button type="success" @click="btn_word('en')">{{
              content_en
            }}</Button>
          </div>
        </div>
        <div class="content_box">
          <div class="box">
            <div
              class="boxs"
              v-for="(item, index) in conversation_content"
              :key="index"
            >
              <div>
                <img
                  v-if="index % 2 == 0"
                  src="@/assets/image/a_biaoqian.png"
                  alt=""
                  srcset=""
                />
                <img
                  v-else
                  src="@/assets/image/b_biaoqian.png"
                  alt=""
                  srcset=""
                />
                <div>
                  <div v-if="disblock_en">{{ item.en }}</div>
                  <div v-if="disblock_cn">{{ item.cn }}</div>
                </div>
              </div>
            </div>
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
  public menu_list: Array<any> = [
    {
      submenu: "1",
      submenu_name: "日常生活",
      menuItem_list: [
        {
          menuItem: "1-1",
          menuItem_name: "美食话题",
        },
        {
          menuItem: "1-2",
          menuItem_name: "日常话题",
        },
        {
          menuItem: "1-3",
          menuItem_name: "租房英语",
        },
        {
          menuItem: "1-4",
          menuItem_name: "购房英语",
        },
        {
          menuItem: "1-5",
          menuItem_name: "健康话题",
        },
        {
          menuItem: "1-5",
          menuItem_name: "家庭话题",
        },
        {
          menuItem: "1-5",
          menuItem_name: "接打电话",
        },
        {
          menuItem: "1-5",
          menuItem_name: "健康话题",
        },
      ],
    },
    {
      submenu: "2",
      submenu_name: "时尚购物",
      menuItem_list: [
        {
          menuItem: "2-1",
          menuItem_name: "购买鞋帽",
        },
        {
          menuItem: "2-2",
          menuItem_name: "购买衣服",
        },
        {
          menuItem: "2-3",
          menuItem_name: "购买食品",
        },
        {
          menuItem: "2-4",
          menuItem_name: "日化用品",
        },
        {
          menuItem: "2-5",
          menuItem_name: "电子产品",
        },
      ],
    },
    {
      submenu: "3",
      submenu_name: "文化教育",
      menuItem_list: [
        {
          menuItem: "3-1",
          menuItem_name: "校园英语",
        },
        {
          menuItem: "3-2",
          menuItem_name: "大学生活",
        },
        {
          menuItem: "3-3",
          menuItem_name: "借书话题",
        },
        {
          menuItem: "3-4",
          menuItem_name: "继续教育",
        },
      ],
    },
    {
      submenu: "4",
      submenu_name: "人际交往",
      menuItem_list: [
        {
          menuItem: "4-1",
          menuItem_name: "兴趣爱好",
        },
        {
          menuItem: "4-2",
          menuItem_name: "天气话题",
        },
        {
          menuItem: "4-3",
          menuItem_name: "家庭话题",
        },
        {
          menuItem: "4-4",
          menuItem_name: "节假日话题",
        },
      ],
    },
  ];
  public theme2: string = "light";
  public onSelect(v: string) {
    this.get_conversation(v);
  }
  public conversation_content: Array<any> = [];
  public get_conversation(v) {
    let url = `https://mock.mengxuegu.com/mock/6170092a4351af34a2ddf6a1/conversation_content${v}`;
    (this as any).$axios.post(url).then((res: any) => {
      this.conversation_content = res.data.data;
    });
  }
  public mounted() {
    this.get_conversation("1-1");
  }
  public disblock_en: boolean = true;
  public disblock_cn: boolean = true;
  public content_en: string = "隐藏英文";
  public content_cn: string = "隐藏中文";
  public btn_word(v: string) {
    if (v == "cn") {
      this.disblock_cn = !this.disblock_cn;
      if (this.content_cn == "显示中文") {
        this.content_cn = "隐藏中文";
      } else {
        this.content_cn = "显示中文";
      }
      return;
    }
    if (v == "en") {
      this.disblock_en = !this.disblock_en;
      if (this.content_en == "显示英文") {
        this.content_en = "隐藏英文";
      } else {
        this.content_en = "显示英文";
      }
      return;
    }
  }
}
</script>
<style lang="scss" scoped>
.conversation_container {
  margin: 20px;
  background-color: #fff;
  height: calc(100vh - 170px);

  .conversation {
    display: flex;
    justify-content: flex-start;
    // align-items: center;
    padding: 20px;
    height: calc(100vh - 170px);
  }
  .line {
    width: 20px;
    height: calc(100vh - 210px);
    background-color: #ddd;
  }
  .conversation_content {
    margin-left: 20px;
    background-color: #fff;
    .btn {
      width: 200px;
      padding-top: 20px;
      // text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .content_box {
      padding-top: 20px;
      .box {
        height: calc(100vh - 300px);
        overflow-y: auto;
        .boxs {
          border-bottom: 1px solid #ddd;
          & > div {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            & > div {
              padding-left: 10px;
              & > div {
                width: calc(100vw - 420px);
                text-align: left;
                font-size: 14px;
                padding-bottom: 10px;
              }
              & > div:first-child {
                padding-top: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
