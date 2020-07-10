<template>
  <div id='app'>
    <h1>basic 基础组件</h1>
    <basic></basic>
  </div>
</template>

<script>
import Basic from './views/Basic';

export default {
  name: 'app',
  components: {
    Basic,
  }
};
</script>

<style lang="scss">
#app {
  padding: 20px;
  h1 {
    color: #ff5d8f;
    border-bottom: dashed 1px #ff5d8f;
  }
  h2 {
    padding: 20px 0;
    color: #F67379;
  }
  
}
</style>
