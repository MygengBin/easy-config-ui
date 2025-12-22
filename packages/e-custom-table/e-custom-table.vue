<template>
  <el-table :data="listComputed">
    <template v-for="(item, index) in listColumn">
      <el-table-column
        v-if="!item.custom"
        :key="index + ''"
        :fixed="item.fixed"
        :width="item.width"
        v-bind="item"
      ></el-table-column>
      <el-table-column
        v-else
        :key="index + '2'"
        :fixed="item.fixed"
        :width="item.width"
        v-bind="item"
      >
        <template #default="{ $index }">
          <slot :name="item.key" :index="$index"></slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>
<script>
import Vue from 'vue'
import { Table, TableColumn } from 'element-ui'
Object.entries({ Table, TableColumn }).forEach(item=>{
  Vue.use(item[1])
})
  export default {
    name: 'E_CustomTable',
    props: {
      list: {
        type: Array,
        default: () => [],
      },
      listColumn: {
        type: Array,
        default: () => [],
        /**
         * custom
         * key
         * name
         */
      },
    },
    computed: {
      listComputed() {
        return this.list
      },
    },
  }
</script>
<style lang="scss" scoped></style>
