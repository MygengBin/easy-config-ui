import Vue from 'vue'
import App from './App.vue'
import VfUI from '../packages/index.js';
Vue.use(VfUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
