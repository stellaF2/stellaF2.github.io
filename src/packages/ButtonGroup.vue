<template>
  <div class='s-button-group'>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 's-button-group',
    mounted() {
        this.$el.children.forEach(child => console.assert(child.tagName === 'BUTTON', 'button-group 子节点必须是 button'));
    },
}
</script>

<style lang='scss' scoped>
@import '../styles/_var.scss';

.s-button-group {
    button {
        border-radius: 0;
        position: relative;
        &:not(:first-child) {
            margin-left: -1px;
        }
        &:first-child {
            border-radius: $border-radius 0 0 $border-radius;
        }
        &:last-child {
            border-radius: 0 $border-radius $border-radius 0;
        }
        &:hover, &:focus {
            z-index: 1;
        }
    }
}
</style>
