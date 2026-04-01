import E_CustomTable from "./e-custom-table.vue"
/* 
2的版本
import { Table, TableColumn } from 'element-ui';
E_CustomTable.install = function (Vue) {
  [Table, TableColumn].forEach((item) => {
    Vue.use(item)
  })
  Vue.component(E_CustomTable.name, E_CustomTable)
} 
  */
import { ElTable, ElTableColumn, } from 'element-plus';
E_CustomTable.install = function (Vue) {
  
  [ElTable, ElTableColumn].forEach((item) => {
    // Vue.use(item)
    Vue.component(item.name,item)
  })
  Vue.component(E_CustomTable.name, E_CustomTable);
} 
export {
  E_CustomTable,
}