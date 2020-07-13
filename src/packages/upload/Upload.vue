<template>
  <div class='s-upload'>
    <div @click="handleClick" class='s-upload__btn'>
      <slot></slot>
      <input 
        type="file"
        :dname='name'
        :accept="accept"
        :multiple='multiple'
        :action='action'
        @change="handleChange"
        ref='input'
        class='s-upload__btn_inner'
      >
    </div>
    <div>
      <slot name='tip'></slot>
    </div>
  </div>
</template>

<script>
import ajax from './ajax';

export default {
    name: 's-upload',
    props: {
      name: {
        type: String,
        default: 'file',
      },
      action: {
        type: String,
        required: true,
      },
      fileList: {
        type: Array,
        default: () => [],
      },
      limit: Number,
      multiple: Boolean,
      onExceed: Function,
      onChange: Function,
      onSuccess: Function,
      onError: Function,
      onProgress: Function,
      accept: String,
      beforeUpload: Function,
      httpRequest: {
        type: Function,
        default: ajax,
      },
    },
    data() {
      return {
        tempIndex: 0,
        files: [],
        reqs: {},
      }
    },
    watch: {
      fileList: {
        handler(fileList) {
          this.files = fileList.map(item => {
            item.uid = Date.now() + this.tempIndex++;
            item.status = 'success';
            return item;
          })
        }
      }
    },
    methods: {
      handleClick() {
        this.$refs.input.value = '';
        this.$refs.input.click();
      },
      formatFile(rawFile) {
        rawFile.uid = Math.random() + this.tempIndex ++;
        const file = {
          status: 'ready',
          uid: rawFile.uid,
          size: rawFile.size,
          name: rawFile.name,
          percentage: 0,
          raw: rawFile,
        };
        this.files.push(file);
        this.onChange && this.onChange(file);
      },
      post(rawFile) {
        const uid = rawFile.uid;
        const options = {
          file: rawFile,
          filename: this.name,
          aciton: this.action,
          onProgress: env => {},
          onSuccess: env => {},
          onError: error => {},
        }
        let req = this.httpRequest(options);
        this.reqs[uid]   = req;
        if (req && req.then) {
          req.then(options.onSuccess, options.onError);
        }
      },
      uploadFile(rawFile) {
        if(!this.beforeUpload) {
          
        }
        this.post(rawFile);
      },
      handleFiles(files){
        if (this.limit && this.fileList.length + files.length > this.limit) {
          this.onExceed && this.onExceed(files, this.fileList);
          return;
        }
        // 文件格式化
        [...files].forEach(rawFile => {
          this.formatFile(rawFile);
          this.uploadFile(rawFile);
        })
      },
      handleChange(e) {
        const files = e.target.files;
        // 多文件上传，并发上传（创建多个 ajax）
        this.handleFiles(files);
      },
    }
}
</script>

<style lang='scss'>
.s-upload {
  .s-upload__btn {
    display: inline-block;
  .s-upload__btn_inner {
    display: none;
  }
  }
}
</style>