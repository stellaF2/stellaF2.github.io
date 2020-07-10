<template>
    <button 
      class='s-button' 
      :class='btnClass' 
      :disabled='isDisabled' 
      @click='$emit("click", $event)'
    >
      <s-icon :icon='loading ? "loading": icon' v-if='icon' class='icon'></s-icon>
      <span v-if='this.$slots.default'>
        <slot></slot>
      </span>
    </button>
</template>

<script>
import SIcon from './Icon';
const btnTypes = ['warning', 'success', 'danger', 'info', 'primary', 'pink', 'purple'];

export default {
  props: {
    type: {
      type: String,
      default: '',
      validator(type) {
        if (type && !btnTypes.includes(type)) {
          console.error(`${type}类型必须是：${btnTypes.toString()}`);
        }
        return true;
      },
    },
    round: Boolean,
    icon: String,
    circle: Boolean,
    iconRight: Boolean,
    disabled: Boolean,
    loading: Boolean,
  },
  name: 's-button',
  computed: {
    btnClass() {
      const classes = [];
      if (this.type) {
        classes.push(`s-button-${this.type}`);
      }
      this.round && classes.push('round');
      this.circle && classes.push('circle');
      this.type.length && this.icon && classes.push('white');
      this.icon && this.type && this.iconRight && classes.push('icon-right');
      return classes;
    },
    isDisabled() {
      return this.loading || this.disabled || this.icon ==='loading';
    }
  },
  components: {
    SIcon,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #F0DCDA;
$background: #F7EAEA;
$hover-color: #F7EAEA;
$active-color: #F78989;

.s-button {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: $height;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  transition: color .15s linear;
  &.round {
    border-radius: $btn-round;
  }
  &.circle {
    border-radius: 100px;
    padding: 12px 10px ;
  }
  &:hover {
    border-color: $hover-color;
    background: $background;
  }
  &:focus, &:active {
    color: $active-color;
    border-color: $active-color;
    background-color: $background;
    outline: none;
  }
  @each $type, $color in (primary:$primary, success: $success, info: $info, danger: $danger, warning: $warning, purple: $purple) {
    &-#{$type} {
      background: #{$color};
      border: #{$color};
      color: #fff;
    }
  }
  @each $type, $color in (primary:$primary-hover, success: $success-hover, info: $info-hover, danger: $danger-hover, warning: $warning-hover, purple: $purple-hover) {
    &-#{$type}:hover {
      background: #{$color};
      border: #{$color};
      color: #fff;
    }
  }
  @each $type, $color in (primary:$primary-active, success: $success-active, info: $info-active, danger: $danger-active, warning: $warning-active, purple:$purple-active) {
    &-#{$type}:active, &-#{$type}:focus {
      background: #{$color};
      border: #{$color};
      color: #fff;
    }
  }
  svg {
    width: 22px;
    height: 20px;
  }
  &.white {
    svg{
      fill: #fff;
    }
  }
  &.icon-right {
    svg {
      order: 2;
    }
  }
  
}
[disabled] {
  &.s-button {
    cursor: not-allowed;
    opacity: .7;
    &:hover {
      background: none;
      border: 1px solid $border-color;
    }
    @each $type, $color in (primary:$primary, success: $success, info: $info, danger: $danger, warning: $warning, purple: $purple) {
      &-#{$type}:hover {
        background: #{$color};
        border: #{$color};
        color: #fff;
      }
    }
  }
}
</style>
