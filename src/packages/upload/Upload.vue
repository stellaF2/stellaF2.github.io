<template>
  <div class='s-upload'>
    <s-dragger v-if='drag' :accpet='accept' @file='uploadFiles'></s-dragger>
    <template v-else>
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
    </template>

    <div>
      <slot name='tip'></slot>
    </div>
    <ul v-if='files.length'>
      <li v-for='file in files' :key='file.uid' >
        hello
        <div class='list-item'>
          <s-icon icon='img'></s-icon>
          {{ file.name }}
          {{ file.status }}
          <s-progress v-if='file.status === "uploading"' :percentage='file.percentage'></s-progress>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ajax from './ajax';
import SIcon from '../Icon';
import SProgress from './Progress';
import SDragger from './UploadDragger';

export default {
    name: 's-upload',
    components: {
      SIcon,
      SProgress,
      SDragger,
    },
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
      drag: {
        type: Boolean,
        default: false,
      }
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
          action: this.action,
          onProgress: env => {
            this.handleProgress(env, rawFile);
          },
          onSuccess: env => {
            this.handleSuccess(env, rawFile);
          },
          onError: error => {
            this.handleError(error, rawFile);
          },
        }
        let req = this.httpRequest(options);
        this.reqs[uid]   = req;
        if (req && req.then) {
          req.then(options.onSuccess, options.onError);
        }
      },
      uploadFile(rawFile) {
        if(!this.beforeUpload) {
          return this.post(rawFile);
        }
        this.post(rawFile);
      },
      // 获取源文件
      getFile(rawFile) {
        return this.files.find(file => file.uid == rawFile.uid);
      },
      handleProgress(env, rawFile) {
        let file = this.getFile(rawFile);
        file.status = 'uploading';
        file.percentage = env.percent || 0;
        this.onProgress(env, rawFile);
      },
      handleSuccess(env, rawFile) {
        let file = this.getFile(rawFile);
        file.status = 'success';
        this.onSuccess(env, rawFile);
        this.onChange(file);
      },
      handleError(err, rawFile) {
        let file = this.getFile(rawFile);
        file.status = 'fail';
        this.onError(err, rawFile);
        this.onChange(file);
        delete this.reqs[file.uid];
      },
      uploadFiles(files){
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
        this.uploadFiles(files);
      },
    }
}
</script>

<style lang='scss'>
.s-upload {
  .s-upload__btn {
    display: inline-block;
  }
  .s-upload__btn_inner {
    display: none;
  }
  ul {
    list-style: none;
  }
  
}
</style>