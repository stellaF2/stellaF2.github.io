<template>
  <div 
    class='s-upload-dragger'
    @drop.prevent='onDrop'
    @dragover.prevent
    @dragleave.prevent
  >
      <s-icon icon='upload' class='s-upload-dragger_inner'></s-icon>
      <p> 可拖拽添加图片</p>
  </div>
</template>

<script>
export default {
    name: 's-upload-dragger',
    props: {
        accpet: String,
    },
    methods: {
        onDrop(e) {
            if (!this.accpet) {
                this.$emit('uploadFiles', e.dataTransfer.files);
            } else {
                this.$emit('file',e.dataTransfer.files )
            }
        }
    }
}
</script>

<style lang='scss'>
@import '@/styles/_var.scss';

.s-upload-dragger {
    .s-upload-dragger_inner{
        width: 100px;
        height: 100px;
        border-radius: 10px;
        box-shadow: $box-shadow;
        text-align: center;
        padding: 20px;
        fill: #ccc;
        color: #333;
        cursor: pointer;
        opacity: .8;
        &:hover {
            opacity: 1;
        }
    }
    
}
</style>