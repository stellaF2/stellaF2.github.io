<template>
  <svg 
    class="s-icon" 
    aria-hidden="true" 
    :class='icon' 
    @click='$emit("click", $event)'
  >
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>

<script>
import "../assets/font";

export default {
  name: "s-icon",
  props: {
    icon: String
  },
};
</script>

<style lang="scss">
.s-icon {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  fill: #333;
  &.loading {
    animation: loading 2s linear infinite;
  }
}
@keyframes loading {
  0% { transform: rotateZ(0deg); }
  100% { transform: rotateZ(360deg); }
}
</style>
