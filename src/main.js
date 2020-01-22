import Vue from 'vue';
import App from './App.vue';
import { router, VueRouter } from './router';
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-exp.min.css';
import 'spectre.css/dist/spectre-icons.min.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
