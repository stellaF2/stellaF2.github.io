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
  box-sizing: border-box;
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
  pre {
    max-width: 800px;
    code {
      font-weight: 400;
      font-size: 16px;
      font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
      line-height: 26px;
      box-shadow: 6px 6px 10px 4px rgba(0,0,0,.1);
      border-radius: 6px;
    }
  }
}
</style>
