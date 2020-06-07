### Select选择器

### 基础使用
<ClientOnly>
  <select-demo1></select-demo1>
</ClientOnly>

::: details 点击查看代码
```js

<template>
	<div>
		<ml-select v-model="value" @change="change" placeholder="请选择">
			<ml-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
			</ml-option>
		</ml-select>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				options: [{
				          value: '选项1',
				          label: '黄金糕'
				        },
						{
				          value: '选项2',
				          label: '双皮奶'
				        }, {
				          value: '选项3',
				          label: '蚵仔煎'
				        }, {
				          value: '选项4',
				          label: '龙须面'
				        },
						{
				          value: '选项5',
				          label: '北京烤鸭'
				        }],
				value: '',
			}
		},
		methods:{
			change(e){
				console.log(e)
			}
		}
	}
</script>

<style>
</style>


```
:::


### 可输入的
<ClientOnly>
  <select-demo2></select-demo2>
</ClientOnly>


::: details 点击查看代码
```js
<template>
	<div>
		<ml-select v-model="value" @change="change" placeholder="请选择" readonly>
			<ml-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
			</ml-option>
		</ml-select>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				options: [{
				          value: '选项1',
				          label: '黄金糕'
				        },
						{
				          value: '选项2',
				          label: '双皮奶'
				        }, {
				          value: '选项3',
				          label: '蚵仔煎'
				        }, {
				          value: '选项4',
				          label: '龙须面'
				        },
						{
				          value: '选项5',
				          label: '北京烤鸭'
				        }],
				value: '',
			}
		},
		methods:{
			change(e){
				console.log(e)
			}
		}
	}
</script>

<style>
</style>


```
:::

###  Select Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| value      | 绑定值 | boolean / string / number |-- |-- |
| placeholder      | 提示 | string |-- |-- |
| readonly      | 是否可以输入 | boolean |-- |false |


### Events
| 参数          | 说明           | 
| -----------   |:-------------:| 
| @change      |输入框改变的回调 |

###  Select-option Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| option      | 绑定值 | boolean / string / number |-- |-- |
| label      | label | -- |-- |-- |
| value      | 选项的值 | -- |-- |false |
