<template>
  <div class='s-aside' :style='{width}'>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 's-aside',
    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
}
</script>

<style>

</style>