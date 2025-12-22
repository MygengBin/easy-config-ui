import E_CustomForm from "./e-custom-form.vue"
E_CustomForm.install = function(Vue){
  Vue.component(E_CustomForm.name, E_CustomForm)
}
export {
  E_CustomForm,
}