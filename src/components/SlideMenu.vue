<template>
  <Sider hide-trigger :width="250">
    <Menu :active-name="activeName" width="auto">
      <MenuItem
        v-for="menu in menus"
        :key="menu.name"
        :name="menu.name"
        :to="{ name: rs.name + '-' + menu.path }"
      >
        <!-- <i :class="['icon', menu.name, activeName === menu.name? 'active' : '']"/>
        <img class="icon" :src="menu.icon" > -->
        <i class="iconfont icon" :class="menu.icon"></i>
        <p class="title">{{ menu.meta.txt }}</p>
      </MenuItem>
    </Menu>
  </Sider>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { CustomRC } from '@/helpers/interface';

@Component
export default class SlideMenu extends Vue {
    @Prop() public readonly rs!: CustomRC;

    get menus() {
      return this.rs.children.filter((c) => !(c.meta && c.meta.noMenu));
    }

    get activeName(): string {
        return this.$route.name!;
    }

}
</script>
<style lang="scss" scoped>
.ivu-layout-sider {
  background: transparent;
  position: relative;
}
.icon{
  width: 25px;
  height: 25px;
  position: absolute;
  top: 12px;
  left: 17%;
  margin: auto;
}
.title{
  width: 90px;
  text-align: left;
  margin: auto;
}
</style>
