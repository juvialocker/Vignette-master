<template>
  <modal
    :value="visible"
    :title="title"
    :mask-closable="false"
    @on-visible-change="change"
    class-name="confirm"
    width="480"
  >
    <div class="container">
      <img class="warn" src="@/assets/warning.png" alt>
      <p class="content">{{content}}</p>
    </div>
    <div slot="footer">
      <Button class="cancel" type="text" size="large" @click="cancel">取消</Button>
      <Button class="ok" type="info" size="large" @click="ok">确定</Button>
    </div>
  </modal>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import * as service from '@/service';

@Component
export default class Confirm extends Vue {
  @Prop() public readonly visible!: boolean;
  @Prop() public readonly title!: string;
  @Prop() public readonly content!: string;
  @Prop() public readonly type!: string;

  @Emit()
  public change(v: boolean) {
    return v;
  }

  @Emit()
  public ok() {
    return this.type;
  }

  public cancel() {
    this.change(false);
  }
}
</script>

<style lang="scss" scoped>
.ivu-modal-content {
  border-radius: 10px;
  .ivu-icon-ios-close {
    color: #fff !important;
  }
}
.container {
  display: flex;
  .warn {
    width: 31px;
    height: 31px;
  }
  .content {
    // height: 14px;
    margin-left: 10px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 30px;
  }
}
</style>
