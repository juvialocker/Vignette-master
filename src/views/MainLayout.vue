<template lang="pug">
  <Layout>
    <Header>
      <Menu mode="horizontal" :active-name="activeName">
        <div class="layout-logo">
          img.logo(src="@/assets/image/logo1.png")
        </div>
        <div class="layout-nav">
          <MenuItem name="home" to="/home">
              | 背单词
          </MenuItem>
          <MenuItem name="conversation" to="/conversation">
              | 情景会话
          </MenuItem>
          <MenuItem name="post" to="/post">
              | 论坛
          </MenuItem>
          <MenuItem name="video" to="/video">
              | 视频鉴赏
          </MenuItem>
        </div>
        <div class="avatar">
          <Dropdown placement="bottom-end">
            <Avatar icon="ios-person" size="small" /> &nbsp;&nbsp;{{username}}
            <Icon type="ios-arrow-down"></Icon>
            <DropdownMenu slot="list">
              <DropdownItem>
                <div  @click="logOut">
                  <i class="iconfont icontuichu" ></i>
                  <span >退出</span>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Menu>
    </Header>
    <Content class="layoutContent" :style="{paddingTop: '15px', minHeight: '280px', background: 'rgba(242,242,242,1);', height: 'calc(100vh - 80px)',overflowY:'auto',overflowX:'hiddle'}">
      <router-view />
      screenCheck(
        :winIsShow="winIsShow"
        @close="(v)=>{ winIsShow=v }"
      )
    </Content>
    <Modal :value="visible" width="420" :mask-closable="false" @on-visible-change="change">
        <p slot="header">
          <span>确认退出</span>
        </p>
        <div class="wrap">
          <img class="warn" src="@/assets/warning.png" alt>
          <p class="content">退出后将无法查看管理数据，确认退出当前账户吗？</p>
        </div>
        <div slot="footer">
          <Button class="cancel" type="text" size="large" @click="cancel">取消</Button>
          <Button class="ok" type="info" size="large" @click="ok">确定</Button>
        </div>
    </Modal>
  </Layout> 
</template>
<script lang="ts">
import { TOKEN_KEY } from '../config';
import { Vue, Component, Watch } from 'vue-property-decorator';
import screenCheck from '@/components/screenCheck.vue';
import smoothScroll from 'smooth-scrollbar';
import * as service from "@/service";

@Component({
  components: {
    screenCheck, 
  },
})
export default class MainLayout extends Vue {
  public username = window.sessionStorage.getItem('username');
  public winIsShow = false;
  public screenWidth = window.screen.width;
  public screenHight = window.screen.height;
  public visible:boolean=false;
  public logOut(){
    this.visible=true;
  }
  public cancel() {
    this.visible=false;
  }
  public ok() {
    this.visible=false;
    this.$router.push({
      name: 'login',
    });
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem('username');
    
  }
  public change(v:boolean) {
    this.visible=v;
  }
  get activeName() {
    return (this.$route.name || '').split('-').shift();
  }

  public mounted() {
    if (this.screenWidth < 1366) {
      this.winIsShow = true;
    }
    window.onresize = () => {
      if (window.screen.width < 1366) {
        this.winIsShow = true;
      }
    };
    
  }
}
</script>

<style lang="scss" scoped>
.ivu-layout-header {
  background: transparent;
  height: 80px;
  padding: 0;

  .ivu-menu-horizontal {
    line-height: 80px;
    height: 80px;
    display: flex;
    padding: 0 30px;
  }
}

.layout-logo {
  padding: 20px 0;
  box-sizing: border-box;
  min-width: 230px;
}

img.logo {
  width: 107px;
  height: 50px;
  display: block;
}

.avatar {
  position: absolute;
  right: 60px;
  cursor: pointer;
}
.wrap {
    display: flex;
    align-items: center;
    .content {
      height: 30px;
      margin-left: 10px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 30px;
    }
  }
.iconfont{
  vertical-align: middle;
  padding-right: 5px;
}
</style>
