import Vue from 'vue';
import App from './App.vue';
import StellaUI from './packages';

Vue.config.productionTip = false;

Vue.use(StellaUI);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
