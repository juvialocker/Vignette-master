<template>
  <div class="modal">
    <Modal
      :title="title"
      :value="modalShow"
      :mask-closable="false"
      @on-visible-change="change"
      width="420"
    >
      <Form ref="form" :model="formItem" :rules="validtor" label-position="left" :label-width="100">
        <FormItem label="主题名称" prop="topicName">
          <Input v-model="formItem.topicName" :maxlength="20" type="text" placeholder="请输入名称" />
        </FormItem>
        <FormItem label="图片" prop="image">
          <div class="demo-upload-list">
            <template v-if="formItem.image">
              <img class="preview" :src="API_URL_IMG+formItem.image" />
            </template>
            <template v-else>
              <div></div>
            </template>
          </div>
          <Upload
            ref="upload"
            :show-upload-list="false"
            :headers="token"
            :on-success="handleSuccess"
            name="file"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="5120"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            :action="UPLOAD_URL_IMG"
          >
            <Button class="upLoad">上传图片</Button>
          </Upload>
          <p>建议上传小于5M的jpg、png图</p>
        </FormItem>
        <FormItem label="描述" prop="presentation">
          <Input
            v-model="formItem.presentation"
            :maxlength="100"
            type="textarea"
            placeholder="请添加描述(最多100字)"
          />
        </FormItem>
        <FormItem label="备注" prop="remark">
          <Input
            v-model="formItem.remark"
            :maxlength="20"
            type="textarea"
            placeholder="请添加备注(最多20字)"
          />
        </FormItem>
      </Form>
      <div slot="footer">
        <Button class="cancel" type="text" size="large" @click="cancel">取消</Button>
        <Button class="ok" type="info" size="large" @click="ok">确定</Button>
      </div>
    </Modal>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Emit, Prop } from "vue-property-decorator";
import { TOKEN_KEY, API_URL,API_URL_IMG,UPLOAD_URL_IMG } from "@/config";
import { Form } from "iview";
import * as service from "@/service";
@Component
export default class newMetterModal extends Vue {
  @Prop() private readonly title!: string;
  @Prop() private modalShow!: boolean;
  @Prop() private formData!: any;

  private validtor = {
    topicName: [{ required: true, message: "名称不能为空", trigger: "blur" }],
    image: [{ required: true, message: "名称不能为空", trigger: "blur" }],
    presentation: [
      { required: true, message: "描述不能为空", trigger: "blur" },
    ],
  };
  get formItem() {
    return this.formData;
  }
  private API_URL_IMG: string = API_URL_IMG;
  private uploadImage: string = "";
  private UPLOAD_URL_IMG: string = UPLOAD_URL_IMG;
  private handleSuccess(res, file) {
    if (res.code == 200) {
      this.formItem.image = res.data;
    } else {
      this.$Message.error(res.error)      
    }
  }

  private handleFormatError(file) {
    this.$Notice.warning({
      title: "文件格式不正确",
      desc: "文件 " + file.name + " 不符合上传要求, 请选择jpg或者png.",
    });
  }

  private handleBeforeUpload(file) {
    const read = new FileReader();
    if (file.size > 10000) {
      read.readAsDataURL(file);
      read.onload = (e: any) => {
        // this.uploadImage = e.currentTarget.result;
      };
    } else {
      this.$Message.error("图片太小了.");
      return false;
    }
  }

  private handleMaxSize(file) {
    this.$Notice.warning({
      title: "图片超出格式大小",
      desc: "图片  " + file.name + " 太大了，应小于5M.",
    });
  }
  get token() {
    return { acto: window.sessionStorage.getItem(TOKEN_KEY) };
  }
  get clear() {
    return this.modalShow;
  }
  @Watch("clear")
  private metter() {}
  @Emit()
  private change(v: boolean) {
    return v;
  }
  @Emit()
  cancel() {
    return false;
  }

  @Emit()
  ok() {
    if (
      this.formItem.image &&
      this.formItem.topicName &&
      this.formItem.presentation
    ) {
      return this.formItem;
    } else {
      return false;
    }
  }
}
</script>
<style lang="scss" scoped>
.demo-upload-list {
  width: 100px;
  height: 85px;
  float: left;
  img {
    width: 100%;
    height: 100%;
  }
  div {
    width: 100%;
    height: 100%;
    background: #ccc;
  }
}
.upLoad {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
  border: #cc302d 1px solid;
  color: #cc302d;
}
p {
  float: left;
  font-size: 14px;
  margin-left: 20px;
  margin-top: 20px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 14px;
}
</style>
