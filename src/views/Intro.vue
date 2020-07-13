<template>
  <div class='demo-intro'>
      <h3>Introduction 简介</h3>

      <p>A simple and elegant component library based on Vue 2.x</p>

      <h4>Install 安装</h4>
      <pre v-highlight>
        <code>
          npm install @stella2/stella-ui --save
        </code>
      </pre>

      <h4>引入 StellaUI</h4>
      <p>完整引入 StellaUI，目前暂不支持按需引入。</p>
      
      <p>在 main.js 中引入以下内容：</p>

      <pre v-highlight>
        <code>
          import Vue from 'vue';
          import 'stella-ui/lib/theme-chalk/index.css';
          import StellaUI from '@stella2/stella-ui';
          import App from './App.vue';

          Vue.use(StellaUI);

          new Vue({
            el: '#app',
            render: h => h(App),
          });
        </code>
      </pre>
  </div>
</template>

<script>
export default {
  name: 'demo-intro'
}
</script>

<style lang='scss'>
@import '@/styles/_var.scss';

.demo-intro {
  p {
    color: #333;
    line-height: 40px;
  }
}
</style>