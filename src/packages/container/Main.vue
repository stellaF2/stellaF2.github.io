<template>
  <div class='s-main'>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 's-main',
}
</script>

<style lang='scss'>
.s-main {
  flex: 1 1 auto;
}
</style>