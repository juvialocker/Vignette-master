<template lang="pug">
  div.home() 故上兵伐谋，其次伐交，其次伐兵，其下攻城。攻城之法为不得已。修橹轒辒，具器械，三月而后成，距堙，又三月而后已。将不胜其忿而蚁附之，杀士三分之一而城不拔者，此攻之灾也。
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Emit } from "vue-property-decorator";
// import toolBar from "@/components/toolBar.vue";
import * as service from "@/service";
@Component({
  components: {
    // toolBar,
  },
})
export default class module extends Vue {
  // 用于接收参数
  // @Prop() public readonly title!: string;
  
}
</script>
<style lang="scss" scoped>
.home {
  background-color: #fff;
  min-height: 100%;
  padding: 20px;
}
</style>
