// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import mlUi from 'mlioe-ui'
console.log(mlUi)
import 'mlioe-ui/dist/mlioe-ui.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数

}) => {
  // ...做一些其他的应用级别的优化
  // Vue.use(ElementUI)/
  Vue.use(mlUi)
}