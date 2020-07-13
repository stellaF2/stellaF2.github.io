import Vue from 'vue';
import App from './App.vue';
import router from './router';
import StellaUI from './packages';
import Highlight from'./plugins/highlight';

Vue.config.productionTip = false;

Vue.use(Highlight);
Vue.use(StellaUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
