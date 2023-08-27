<template>
  <el-form :label-width="labelWidth" size="small">
    <el-form-item
      v-for="(item, index) in listData"
      :key="index"
      :label="item.title"
      :style="item.style ? item.style : 'width: 100%'"
    >
      <slot
        v-if="item.custom"
        :name="item.key"
        :index="index"
        :detail="item"
      ></slot>
      <template v-else>
        <template v-if="!item.type || item.type === FormResult.JUST_SHOW">
          {{ item.value }}
        </template>
        <el-input
          v-else-if="item.type === FormResult.INPUT"
          v-model="item.value"
          :readonly="item.readonly"
          :placeholder="item.placeholder ? item.placeholder : ''"
        ></el-input>
        <el-select
          v-else-if="item.type === FormResult.SELECT"
          v-model="item.value"
          :disabled="item.readonly"
          style="width: 100%"
        >
          <el-option
            v-for="(item2, indexSelect) in item.list"
            :key="indexSelect"
            :label="item2.label"
            :value="item2.value"
          ></el-option>
        </el-select>
        <el-input
          v-else-if="item.type === data.FormResult.TEXTAREA"
          v-model="item.value"
          :readonly="item.readonly"
          type="textarea"
          :placeholder="item.placeholder ? item.placeholder : ''"
        ></el-input>
        <el-date-picker
          v-else-if="item.type === data.FormResult.DATE"
          v-model="item.value"
          :readonly="item.readonly"
          style="width: 100%"
          :placeholder="item.placeholder ? item.placeholder : ''"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
        ></el-date-picker>
        <el-date-picker
          v-else-if="item.type === data.FormResult.DATERANGE"
          v-model="item.value"
          :readonly="item.readonly"
          style="width: 100%"
          type="daterange"
          range-separator="至"
          start-placeholder="起始时间"
          end-placeholder="截止时间"
          :size="size"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
        />
        <el-radio-group
          v-else-if="item.type === data.FormResult.RADIO"
          v-model="item.value"
          :disabled="item.readonly"
        >
          <el-radio
            v-for="(item, index) in item.list"
            :key="index"
            :label="item.value"
          >
            {{ item.label }}
          </el-radio>
        </el-radio-group>
        <wangEditor
          v-else-if="item.type === data.FormResult.WANG_EDITOR"
          :html-text="item.value"
          style="width: 100%"
          :show-toolbar="!item.readonly"
          :read-only="!!item.readonly"
          :style="item.readonly ? 'border: 1px solid #ccc;' : ''"
          @changeHTML="changeHTML.call({ key: item.key }, $event)"
        ></wangEditor>
      </template>
    </el-form-item>
    <el-form-item class="operate-custom">
      <slot name="operate" :info="getInfo"></slot>
    </el-form-item>
  </el-form>
</template>
<script>
  import Vue from 'vue'
  import { Form, FormItem, Input, Select, Option } from 'element-ui'
  ;[Form, FormItem, Input, Select, Option].forEach((item) => Vue.use(item))
  import wangEditor from '@/components/wangEditor/index.vue'
  import FormResult from '@/assets/result/FormResult'
  export default {
    name: 'FormContent',
    components: { wangEditor },
    props: {
      list: {
        /* 
      {
        title:'',
        value:'',
        key:'',
        type:0,
        custrom:false,
        style:null,
        readonly:flase
      }
      */
        type: Array,
        default: () => [],
      },
      labelWidth: {
        type: String,
        default: '80px',
      },
    },
    data: () => ({
      FormResult,
      listData: [],
    }),
    computed: {
      getInfo() {
        return this.listData.reduce((total, item) => {
          if (item['key'])
            total[item['key']] = item['value'] ? item['value'] : ''
          return total
        }, {})
      },
    },
    watch: {
      list() {
        this.listData = this.list
      },
    },
    methods: {
      changeHTML(html) {
        const result = this.listData.findIndex((i) => i.key === this.key)
        if (result < 0) return
        this.listData[result].value = html
      },
    },
  }
</script>
<style scoped lang="scss">
  :deep(.el-form-item__label) {
    padding-right: 5px;
    font-size: 13px;
  }
  :deep(.el-input__wrapper) {
    width: 100%;
  }
  :deep(.el-form-item) {
    display: inline-flex;
  }
</style>
