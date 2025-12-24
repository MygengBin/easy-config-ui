import { E_CustomForm, } from './e-custom-form'
import { E_CustomTable, } from './e-custom-table'
import FormResult from './e-custom-form/FormResult';
import 'element-ui/lib/theme-chalk/index.css';
const components = [
  E_CustomForm,
  E_CustomTable,
]
/* 这里的Vue是引用组件，使用Vue.use使用该组件，对应的Vue版本 */
const install = Vue => components.forEach(component => Vue.use(component))
typeof window !== 'undefined' && window.Vue && install(window.Vue)

export {
  E_CustomForm,
  E_CustomTable,
  FormResult,
}

export default {
  install
}