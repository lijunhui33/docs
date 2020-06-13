### Form表单

### 基本使用

::: tip
form表单只是完成了他ui的部分
:::

<ClientOnly>
  <form-demo1></form-demo1>
</ClientOnly>


::: details 点击查看代码
```js

<template>
	<div style="margin-top: 20px;">
		<ml-form :model="model" label-width="80px">
			<ml-form-item label="用户名">
				<ml-input placeholder="请输入名字" style="width: 200px;" v-model="name"></ml-input>
			</ml-form-item>
			<ml-form-item label="显示资料">
				<ml-switch v-model="value" :value.sync="value"></ml-switch>
			</ml-form-item>

			<ml-form-item>
				<ml-button type="primary" @click="btn">立即创建</ml-button>
			</ml-form-item>
		</ml-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				model: {
				},
				value: false,
				name: ''
			}
		},
		methods: {
			btn() {
				this.$toast({
					message:'是否显示资料：'+ this.value+'--姓名：'+this.name,
				})
			}
		}
	}
</script>

```
:::
### Form Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| label-width    | 标题栏宽度 | string |-- |-- |

### FormItem Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| label      | 功能标题 | string |-- |-- |
