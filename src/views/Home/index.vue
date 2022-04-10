<template>
  <div class="index_container">
    111
    <div class="iframe">
      <!-- <iframe src="http://word.kekenet.com/" width="300" height="300" frameborder="0" scrolling="auto"></iframe> -->
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
  public theme: string = "light";
}
</script>
<style lang="scss" scoped>
.index_container{
  margin: 20px;
}
</style>
