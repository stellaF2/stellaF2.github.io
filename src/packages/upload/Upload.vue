<template>
  <div class='s-upload'>
    hello
      <slot></slot>
  </div>
</template>

<script>
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
    }
}
</script>

<style>

</style>