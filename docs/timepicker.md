### Form表单

### 固定时间点选择器 任意时间点选择器
::: tip
任意时间点选择器的点击选择功能还未加上去，暂时只能滑动选
:::

<ClientOnly>
  <timerpicker-demo1></timerpicker-demo1>
</ClientOnly>


::: details 点击查看代码
```js

<template>
	<div>
		<ml-time-picker v-model="value" placeholder="请选择时间" :picker-options="{
        start: '08:00',
		step:'00:30',
        end: '18:30',
      }"
		 @input="input"></ml-time-picker>
		<ml-time-picker v-model="value2" placeholder="请选择时间" :picker-options="{
		  selectableRange: '00:09:20 - 10:01:05'
		  
		}"
		 @input="input2"></ml-time-picker>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				value2: ''
			}
		},
		methods: {
			input(e) {
				console.log(e)
			},
			input2(e) {
				console.log(e)
			},

		}
	}
</script>




```
:::
### Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| v-model    | 时间值 | string |-- |-- |
|placeholder| 提示 | string |-- |-- |
|pickerOptions|事件选择范围，根据填入的默认值进行不同显示 | object |-- |-- |

### Events
| 参数          | 说明           | 
| -----------   |:-------------:| 
| @input      |值改变事件|