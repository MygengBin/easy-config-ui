import { tButton } from './t-button/index'
import 'element-ui/lib/theme-chalk/index.css';
const components = [
  tButton
]
const install = Vue => components.forEach(component => Vue.use(component))
typeof window !== 'undefined' && window.Vue && install(window.Vue)

export {
  tButton
}

export default{
  install
}