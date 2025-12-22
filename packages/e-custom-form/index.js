import E_CustomForm from "./e-custom-form.vue"
import { Form, FormItem, Input, Select, Option } from 'element-ui';
E_CustomForm.install = function(Vue){
  [Form, FormItem, Input, Select, Option].forEach((item) => Vue.use(item))
  Vue.component(E_CustomForm.name, E_CustomForm)
}
export {
  E_CustomForm,
}