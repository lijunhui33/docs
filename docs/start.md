
### 安装

``` js
yarn add mlioe-ui
```


### 引入

在main.js中
``` js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import mlUi from 'mlioe-ui'
import 'mlioe-ui/dist/mlioe-ui.css'
Vue.use(mlUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
```