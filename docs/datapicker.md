### Datapicker日期选择器

### 基础使用
<ClientOnly>
  <datapicker-demo></datapicker-demo>
</ClientOnly>

::: details 点击查看代码
```js
<template>
	
	<div>
		<ml-data-picker placeholder="选择日期时间" v-model="value" @change="change"></ml-data-picker>
		<br>
		<ml-button @click="set">改变值</ml-button>
		<br>
		<ml-button @click="alerts">输出里面的值</ml-button>

	</div>
</template>
<script>
	export default{
		data(){
			return{
				// value:new Date()
				value:''
			}
		},
		methods:{
			set(){
				this.value = '2020-06-06'
			},
			change(e){
				this.$toast({
					message:e,
				})
			},
			alerts(){
				this.$toast({
					message:this.value,
				})
			}
		}
	}
</script>


```
:::

### Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| value      | 绑定值 | string |-- |-- |
| readonly      | 是否可以输入 | Boolean |-- |false |
| disabled      | 是否禁用 | Boolean |-- |false |
| placeholder     | 文本提示 | string |-- |-- |


### Events
| 参数          | 说明           | 
| -----------   |:-------------:| 
| @change     |值改变事件 |
