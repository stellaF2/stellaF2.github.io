import Vue from 'vue';
import App from './App.vue';
import router from './router';
import StellaUI from './packages';

Vue.config.productionTip = false;

Vue.use(StellaUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
