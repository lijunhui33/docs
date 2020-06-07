### Checkbox 多选框



### 基础使用

<ClientOnly>
  <checkbox-demo1></checkbox-demo1>
</ClientOnly>



::: details 点击查看代码
```js

<template>
	<div style="margin-top: 20px;">
		<ml-checkbox v-model="value" @input="input" :label="value"></ml-checkbox>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:true,
			}
		},
		methods:{
			input(e){
				//这个是toast组件的功能，可以自己console看看结果
				this.$toast({
					message:JSON.stringify(e),
				})
			}
		}
	}
</script>




```
:::

### 多选按钮框组

<ClientOnly>
  <checkbox-demo2></checkbox-demo2>
</ClientOnly>



::: details 点击查看代码
```js

<template>
	<div>
		<ml-checkbox-group v-model="data" @input="input">
			<ml-checkbox label="你好"></ml-checkbox>
			<ml-checkbox label="再见"></ml-checkbox>
		</ml-checkbox-group>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:[
					'你好','再见'
				]
			}
		},
		methods:{
			input(e){
				this.$toast({
					message:e,
				})
			}
		}
	}
</script>

<style>
</style>


```
:::

### Radio Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| label      | chenckbox 绑定的 value | String,Number,Boolean |-- |-- |
| v-model      | 绑定值 | string |-- |-- |



### Radio Events
| 参数          | 说明           | 
| -----------   |:-------------:| 
| @input      |值改变触发的事件|


### Radio-group
 | 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| label      | chenckbox 绑定的 value | String,Number,Boolean |-- |-- |
| v-model      | 绑定值 | string |-- |-- |

### Radio-group Events
| 参数          | 说明           | 
| -----------   |:-------------:| 
| @input      |值改变触发的事件|
