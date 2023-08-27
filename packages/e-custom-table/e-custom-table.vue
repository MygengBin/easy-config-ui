<template>
  <el-table :data="listComputed">
    <template v-for="(item, index) in listColumn">
      <el-table-column
        v-if="!item.custom"
        :key="index + ''"
        :prop="item.key"
        :label="item.name"
        :fixed="item.fixed"
        :width="item.width"
      ></el-table-column>
      <el-table-column
        v-else
        :key="index + '2'"
        :prop="item.key"
        :label="item.name"
        :fixed="item.fixed"
        :width="item.width"
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
