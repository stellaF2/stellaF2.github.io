<template>
  <div>
    <s-container class='demo-container'>
      <s-header>
        <img src="@/assets/logo.jpg" alt="logo"><h3>Stella-UI</h3>
      </s-header>
      <s-container>
        <s-aside width='150px'>
          <h3>Componnets</h3>
          <h3 class="subtitle">Basic</h3>
          <router-link to="/components/layout">Layout</router-link>
          <router-link to="/components/container">Container</router-link>
          <router-link to="/components/button">Button</router-link>
          <router-link to="/components/icon">Icon</router-link>
          <h3 class="subtitle">Form</h3>
        </s-aside>
        <s-main>
          <router-view></router-view>

        </s-main>
      </s-container>
    </s-container>
    <!-- <div class="container">
      <div class="nav">
        <h3>Stella-UI</h3>
        <h3 class="subtitle">Basic</h3>
        <router-link to="/components/layout">Layout</router-link>
        <router-link to="/components/container">Container</router-link>
        <router-link to="/components/button">Button</router-link>
        <router-link to="/components/icon">Icon</router-link>
        <h3 class="subtitle">Form</h3>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "components"
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
  .s-aside {
    @include scrollBarStyle;
    transition: opacity 0.5s;
    padding: 20px 0 0 20px;
    opacity: 0.5;
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
    padding: 10px;
    @include scrollBarStyleHide;
    width: calc(100% - 150px);
  }
}
</style>