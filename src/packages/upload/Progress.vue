<template>
  <div class='s-progress'>
      <div class='s-progress_bar'>
          <div class='s-progress_bar-outer' :style="{ height: strokWidth + 'px'}">
              <div class='s-progress_bar-inner' :style="barStyle"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 's-progress',
    props: {
        strokWidth: {
            type: Number,
            default: 6,
        },
        percentage: {
            type: Number,
            default:0,
            required: true,
        },
        color: {
            type: String,
            default: '#f9b',
        }
    },
    computed: {
        barStyle() {
            const style= {};
            style.width = this.percentage + '%';
            style.background = this.color;
            return style;
        }
    }
}
</script>

<style lang='scss'>
.s-progress {
    .s-progress_bar-outer {
        border-radius: 50px;
        background: #e5e5e5;
        position: relative;
        vertical-align: middle;
    }
    .s-progress_bar-inner {
        transition: width .6s linear;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 50px;
        opacity: .5;
    }
}
</style>