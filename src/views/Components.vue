<template>
  <div>
    <s-container class='demo-container'>
      <s-header>
        <img 
          src="@/assets/logo.jpg" 
          alt="logo" 
        >
        <h3 @click='$router.push("/")' style='cursor: pointer;'>Stella-UI</h3>
      </s-header>
      <s-container>
        <s-aside :class='{isShowAside}' ref='aside' width='150px' class='demo-contaiener-aside' v-click-outside='handleClickOutside'>
          <h3>Componnets</h3>
          <a @click='handleJump("/components/intro")'>Introduction</a>
          <h3 class="subtitle">Basic</h3>
          <a @click='handleJump("/components/layout")'>Layout</a>
          <a @click='handleJump("/components/container")'>Container</a>
          <a @click='handleJump("/components/button")'>Button</a>
          <a @click='handleJump("/components/icon")'>Icon</a>
          <h3 class="subtitle">Form</h3>
          <a @click='handleJump("/components/input")'>Input</a>
          <a @click='handleJump("/components/upload")'>Upload</a>
          <a @click='handleJump("/components/datePicker")'>DatePicker</a>
        </s-aside>
        <s-main>
          <s-icon @click="toggleAside" icon='more' class='demo-container_more' ref='icon'></s-icon>
          <transition>
            <router-view></router-view>
          </transition>
        </s-main>
      </s-container>
    </s-container>
  </div>
</template>

<script>
export default {
  name: "components",
  data() {
    return {
      isShowAside: false,
    }
  },
  methods: {
    toggleAside() {
      console.log(this.isShowAside);
      this.isShowAside = !this.isShowAside;
    },
    handleClickOutside(target) {
      if (target !== this.$refs.icon.$el) this.isShowAside = false;
    },
    handleJump(path) {
      path !== this.$route.path && this.$router.push(path);
      this.isShowAside = false;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../styles/_var.scss";

.demo-container {
  margin: 0 auto;
  max-width: 1200px;
  .s-container {
    height: calc(100vh - 60px);
  }
  .s-header {
    padding: 0 0 10px 6px;
    font-size: 28px;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 10;
    border-bottom: 1px solid $lightPink;
    line-height: 60px;
    h3 {
      color: $primary;
      display: inline-block;
    }
    img {
      height: 100%;
      float: left;
      margin-right: 10px;
    }
  }
  .s-aside, .s-main {
    max-height: 100%;
    overflow-y: scroll;
  }
  .demo-container_more {
    margin-right: -100px;
    transition: opacity, margin .5s linear;
    float: right;
    cursor: pointer;
    opacity: .5;
    z-index: 2;
    position: relative;
    &:hover {
      opacity: 1;
    }
  }
  .s-aside {
    @include scrollBarStyle;
    transition: opacity, margin 0.5s linear;
    padding: 20px 0 0 20px;
    opacity: 0.5;
    &.isShowAside {
      margin-left: 0 !important;
    }
    h2 {
      color: #333 !important;
    }
    &:hover {
      opacity: 1;
    }
    h5 {
      padding: 10px 0;
    }
    .subtitle {
      color: #999;
      font-size: 14px;
      padding: 20px 0 10px;
    }
    a {
      display: block;
      text-decoration: none;
      padding: 10px 0 0;
      color: #333;
      cursor: pointer;
      &:hover,
      &.router-link-active {
        color: $primary;
        opacity: 0.7;
      }
      &:active,
      &:visited {
        opacity: 1;
        svg {
          transform: rotate(180deg);
          transition: all 0.15s linear;
        }
      }
    }
  }
  .s-main {
    padding: 10px 10px 10px 30px;
    @include scrollBarStyleHide;
    width: calc(100% - 150px);
  }
}
@media only screen and (max-width: 768px) {
    .demo-container {
      .s-container {
        .s-aside.demo-contaiener-aside {
          margin-left: -150px;
          position: absolute;
          background: #fff;
          height: calc(100vh - 60px);
          z-index: 2;
          opacity: .9;
        }
        .demo-container_more {
          margin-right: 0;
        }
      }
    }
  }
</style>