<template lang="pug">
  div(
  ) 故其疾如风，其徐如林，侵掠如火，不动如山，难知如阴，动如雷震。
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Emit } from "vue-property-decorator";
// import modal from "@/components/modal.vue"
import * as service from "@/service";
@Component({
  components: {
    // modal
  }
})
export default class module extends Vue {
  // 用于接收参数
  // @Prop() public readonly title!: string;
}
</script>
<style lang="scss" scoped>
</style>