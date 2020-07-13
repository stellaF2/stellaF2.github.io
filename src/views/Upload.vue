<template>
  <div class="demo-upload">
    <h3>Upload 上传文件</h3>
    <s-upload
      name="avatar"
      action="http://localhost:3000/upload"
      :limit="3"
      :file-list='fileList'
      :multiple="true"
      accept='image/jpeg'
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :on-success='handleSuccess'
      :on-error='handleError'
      :on-progress='handleProgress'
      :beforeUpload='beforeUpload'
    >
      <s-button v-slot:default icon='upload' type='primary'>点击上传</s-button>
      <template #tip>
        <p>只能上传 jpg/png 文件，且不超过 500kb</p>
      </template>
    </s-upload>
  </div>
</template>

<script>
export default {
  name: "form-upload",
  data() {
    return {
      fileList: [],
    }
  },
  methods: {
    handleExceed(f1, f2) {
      console.log('超限了', f1, f2);
    },
    handleChange(file) {
      console.log(file);
    },
    handleSuccess() {},
    handleError() {},
    handleProgress() {},
    beforeUpload() {
      return false;
    },
  }
};
</script>

<style lang='scss'>
.demo-upload {
  p {
    color: #333;
    line-height: 36px;
  }
}
</style>