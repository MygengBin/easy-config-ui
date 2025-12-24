import Vue from 'vue'
import App from './App.vue'
import EasyConfigUI from '../packages/index.js';
Vue.use(EasyConfigUI);
/* 这里的只是当前环境测试 */
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
