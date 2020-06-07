### Switch开关



### 基础使用
<ClientOnly>
  <switch-demo></switch-demo>
</ClientOnly>



::: details 点击查看代码
```js

<template>
	<div>
		<ml-switch  v-model="value"></ml-switch>
		<ml-switch  v-model="value" active-color="red" inactive-color="green" @input="input"></ml-switch>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:false,
			}
		},
		methods:{
			input(e){
				console.log(e)
			}
		}
	}
</script>

```
:::



### Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| v-model      | 绑定值 | string |-- |-- |
| name      | 原生属性 | string |-- |-- |
| active-color      | 开启的颜色 | string |-- |-- |
| inactive-color     | 关闭的颜色 | string |-- |-- |


### Events
| 参数          | 说明           | 
| -----------   |:-------------:| 
| @input      |值改变触发的事件|
