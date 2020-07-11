<template>
  <div class="s-container" :class='{ isVertical }'>
    <slot></slot>
  </div>
</template>

<script>

const checkC = c => ['s-header', 's-footer'].includes(c.$options.name);
export default {
  name: "s-container",
  data() {
    return {
      isVertical: true
    };
  },
  mounted() {
    this.isVertical = this.$children.some(checkC);
    console.log(this.isVertical)
  },
};
</script>

<style lang='scss'>
.s-container {
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  &.isVertical {
    flex-direction: column;
  }
}
</style>