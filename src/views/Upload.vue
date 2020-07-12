<template>
  <div class="s-upload">
    <h3>Upload 上传文件</h3>
    <s-upload
      name="avatar"
      action="http://localhost:3000/upload"
      :limit="3"
      :file-list='fileList'
      :multiple="true"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :on-success='handleSuccess'
      :on-error='handleError'
      :on-progress='handleProgress'
    ></s-upload>
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
    handleExceed() {},
    handleChange() {},
    handleSuccess() {},
    handleError() {},
    handleProgress() {},
  }
};
</script>

<style>
</style>