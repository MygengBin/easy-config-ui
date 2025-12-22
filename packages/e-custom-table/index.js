import E_CustomTable from "./e-custom-table.vue"
import { Table, TableColumn } from 'element-ui';
E_CustomTable.install = function (Vue) {
  [Table, TableColumn].forEach((item) => {
    Vue.use(item)
  })
  Vue.component(E_CustomTable.name, E_CustomTable)
}
export {
  E_CustomTable,
}