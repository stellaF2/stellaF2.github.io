<template>
  <div class='container'>
    <div class="nav">
      <h3>Stella-UI</h3>
      <h3 class='subtitle'>Basic</h3>
      <router-link to='/components/layout'>Layout</router-link>
      <router-link to='/components/container'>Container 布局容器</router-link>
      <router-link to='/components/button'>Button</router-link>
      <router-link to='/components/icon'>Icon</router-link>
      <h3 class='subtitle'>Form</h3>
    </div>
    <div class='content'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "components"
};
</script>

<style lang='scss' scoped>
@import '../styles/_var.scss';

.container {
  display: flex;
  margin: 0 auto;
  width: 80%;
  h3 {
    font-size: 28px;
  }
  .nav {
    transition: opacity .5s;
    padding: 20px 0 0 20px;
    opacity: .5;
    flex: 0 0 200px;
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
      &:hover, &.router-link-active {
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
  .content {
    flex: 1 1 auto;
    padding: 10px;
  }
}
</style>