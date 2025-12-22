<template>
  <div id="app">
    <h1>E_CustomForm</h1>
    <E_CustomForm :list="formList" />
    <h1>E_CustomTable</h1>
    <E_CustomTable :list="tableList" :listColumn="tableListColumn" />
  </div>
</template>

<script>
import FormResult from '../packages/e-custom-form/FormResult.js';

export default {
  name: 'App',
  data() {
    return {
      formList: [
        {
          key: 'ee',
          title: '标题',
          type: FormResult.INPUT,
        },
      ],
      tableList: [
        { first: '111', second: '122', },
        { first: '222', second: '222', },
      ],
      tableListColumn: [
        { label: '第一列', prop: 'first', },
        { label: '第2列', prop: 'second', },
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
