<template>
  <div id='app'>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: 0;;
}
#app {
  min-height: 100vh;
  display: flow-root;
  h1 {
    color: #333;
    border-bottom: dashed 1px #ff5d8f;
  }
  h2 {
    padding: 20px 0;
    color: #F67379;
  }
}
</style>
