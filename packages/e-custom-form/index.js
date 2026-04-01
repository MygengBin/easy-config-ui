import E_CustomForm from "./e-custom-form.vue"
/* 
2的版本
import { Form, FormItem, Input, Select, Option } from 'element-ui';
E_CustomForm.install = function(Vue){
  [Form, FormItem, Input, Select, Option].forEach((item) => Vue.use(item))
  Vue.component(E_CustomForm.name, E_CustomForm)
} 
  */
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption } from 'element-plus';
E_CustomForm.install = function(Vue){
  [ElForm, ElFormItem, ElInput, ElSelect, ElOption].forEach((item) => Vue.use(item))
  Vue.component(E_CustomForm.name, E_CustomForm)
} 
export {
  E_CustomForm,
}