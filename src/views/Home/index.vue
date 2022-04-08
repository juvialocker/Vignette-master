<!--
 * @Author: juvia
 * @Date: 2022-04-07 11:03:50
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-08 17:35:41
 * @FilePath: \Vignette-master\src\views\Home\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
-->
<template>
  <div class="index_container">
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
  public theme: string = "light";
}
</script>
<style lang="scss" scoped>
.index_container{
  margin: 20px;
}
</style>
