import tButton from "./t-button.vue"
tButton.install = function(Vue){
  Vue.component(tButton.name, tButton)
}
export default tButton