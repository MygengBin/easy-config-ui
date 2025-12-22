<template>
  <el-table :data="listComputed">
    <el-table-column label="123" prop="first"></el-table-column>
    <template v-for="(item, index) in listColumn">
      <el-table-column v-if="!item.custom" :key="index + ''" v-bind="item"></el-table-column>
      <el-table-column v-else :key="index + '2'" v-bind="item">
        <template #default="{ $index }">
          <slot :name="item.key" :index="$index"></slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>
<script>
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
