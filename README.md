# easy-config-ui

简易配置划使用的表单和表格。

需要依赖sass sass-loader

## 安装element-plus命令

```
npm i element-plus --legacy-peer-deps
```

--legacy-peer-deps，这个是忽略element-plus对vue版本的判断，如果要开发，刚拉下来项目要安装依赖，可能也需要加上这个。

## 下一步开发计划

确保vue2和vue3引用该项目都可以兼容。

目前这个版本是vue2+element-ui和element-plus的，目前测试vue3无法使用。

准备接下来改成vue3+element-plus试试看可不可以兼容。

## 待定计划

GitHub Action自动化发布待定。

## 已经确定的事项

npm经典令牌过期，本地自动化以不能用。暂时用本地手动发布。

## 分支说明

vue2：基于vue2版本安装element-ui开发的，这个在vue3无法使用，备份一下，看看后续要不要继续基于这个开发。