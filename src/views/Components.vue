<template>
  <div class='container'>
    <div class="nav">
      <h3>Component</h3>
      <div class='subtitle'>Basic</div>
      <router-link to='/components/button'>Button</router-link>
      <router-link to='/components/layout'>Layout</router-link>
      <router-link to='/components/icon'>Icon</router-link>
      <div class='subtitle'>Form</div>
    </div>
    <router-view></router-view>
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
  display: grid;
  grid-template-columns: 160px auto;
  .nav {
    transition: opacity .5s;
    padding: 50px 0 0 20px;
    opacity: .5;
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
      &:hover {
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
}
</style>