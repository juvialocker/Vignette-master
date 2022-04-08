<!--
 * @Author: juvia
 * @Date: 2022-04-07 10:47:04
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-08 17:37:13
 * @FilePath: \Vignette-master\src\views\Home\container.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
-->
<template lang="pug">
  <Layout style="flex-direction: row">
    //- 不需要侧边栏可注释掉SlideMenu
    //- SlideMenu(
    //-     :rs="rs"
    //-   )
    <Content class="container-content-keep">
      <router-view />
    </Content>
  </layout>
</template>
<script lang="ts">
import rs from "./router";
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
// import SlideMenu from "@/components/SlideMenu.vue";

@Component({
  components: {
    // SlideMenu,
  },
})
export default class Container extends Vue {
  private rs = rs;
}
</script>
<style lang="scss" scoped>
.container-content-keep {
  width: 100vw;
  padding: 20px;
  background-color: #014E82;
}
</style>
