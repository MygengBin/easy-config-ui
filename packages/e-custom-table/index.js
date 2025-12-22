import E_CustomTable from "./e-custom-table.vue"
E_CustomTable.install = function(Vue){
  Vue.component(E_CustomTable.name, E_CustomTable)
}
export {
  E_CustomTable
}