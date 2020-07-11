<template>
  <div
    class="s-col"
    :class="[spanClass, offSetClass, xsClass, smClass, mdClass, lgClass, xlClass]"
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "s-col",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    spanClass() {
      return `s-col-${this.span}`;
    },
    xsClass() {
      return this.xs && `s-col-xs-${this.xs}`;
    },
    smClass() {
      return this.sm && `s-col-sm-${this.sm}`;
    },
    mdClass() {
      return this.md && `s-col-md-${this.md}`;
    },
    lgClass() {
      return this.lg && `s-col-lg-${this.lg}`;
    },
    xlClass() {
      return this.xl && `s-col-xl-${this.xl}`;
    },
    offSetClass() {
      return this.offset && `s-col-offset-${this.offset}`;
    },
    colStyle() {
      return (
        this.gutter && {
          paddingLeft: this.gutter / 2 + "px",
          paddingRight: this.gutter / 2 + "px"
        }
      );
    }
  }
};
</script>

<style lang='scss'>
.s-col {
  box-sizing: border-box;
}
@for $i from 1 through 24 {
  .s-col-#{$i} {
    width: $i / 24 * 100%;
  }
  .s-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
}
@for $i from 1 through 24 {
  /* media xs sm md lg xl*/
  @media only screen and (max-width: 768px) {
    .s-col-xs-#{$i} {
      width: $i / 24 * 100%;
    }
  }
}
@for $i from 1 through 24 {
  @media only screen and (min-width: 768px) {
    .s-col-sm-#{$i} {
      width: $i / 24 * 100%;
    }
  }
}
@for $i from 1 through 24 {
  @media only screen and (min-width: 992px) {
    .s-col-md-#{$i} {
      width: $i / 24 * 100%;
    }
  }
}
@for $i from 1 through 24 {
  @media only screen and (min-width: 1200px) {
    .s-col-lg-#{$i} {
      width: $i / 24 * 100%;
    }
  }
}
@for $i from 1 through 24 {
  @media only screen and (min-width: 1920px) {
    .s-col-xl-#{$i} {
      width: $i / 24 * 100%;
    }
  }
}
</style>