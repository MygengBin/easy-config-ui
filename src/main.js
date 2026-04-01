import { createApp, } from 'vue'
import App from './App.vue'
import EasyConfigUI from '../lib/index.umd.min.js';
import '../lib/index.css';
console.log(EasyConfigUI)

/* import 'element-plus/dist/index.css'
import EasyConfigUI from '../packages/index'
console.log(EasyConfigUI) */

const app = createApp(App);
app.use(EasyConfigUI);
app.mount('#app')
