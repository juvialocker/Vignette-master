<template>
  <Modal
    :value="winIsShow"
    :mask-closable="false"
    class-name="vertical-center-modal"
    class="screenCheck"
  >
    <div class="wrap">
      <img class="warn" src="@/assets/warning.png" alt>
      <p class="content">本机分辨率太低，可能会影响产品体验，建议使用1366*768或以上分辨率！</p>
    </div>
    <div slot="footer">
      <Button class="ok" type="info" size="large" @click="ok">确定</Button>
    </div>
  </Modal>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
@Component
export default class Confirm extends Vue {
    @Prop() public readonly winIsShow!: boolean;

    @Emit()
    public close(v: boolean) {
        return v;
    }

    public ok() {
      this.close(false);
    }
}
</script>


<style lang="scss" scoped>
.screenCheck {
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
  .ivu-modal-content {
    border-radius: 10px;

    .ivu-icon-ios-close {
      color: #fff !important;
    }
  }
}
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}
</style>
