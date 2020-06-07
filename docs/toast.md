### Toast消息提示



### 基础使用
<ClientOnly>
  <toast-demo1></toast-demo1>
</ClientOnly>



::: details 点击查看代码
```js

<template>
	
	<div style="margin-top: 20px;">
		<ml-toast :visible.sync="type" position="top" type="info" :duration="3000">center</ml-toast>
		<ml-toast :visible.sync="type2" position="center" type="info">center</ml-toast>
		<ml-toast :visible.sync="type3" position="bottom" type="info" :duration="1000">bottom</ml-toast>
		<ml-toast :visible.sync="type4" position="top" type="success" :duration="3000">other</ml-toast>
		
		<ml-button @click="top">从顶部出现的默认按钮</ml-button>
		<ml-button @click="center">从中间出现的默认按钮</ml-button>
		<ml-button @click="bottom">从底部出现的默认按钮</ml-button>
		<ml-button @click="other">从顶部出现的别的类型按钮</ml-button>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				type:false,
				type2:false,
				type3:false,
				type4:false,
			}
		},
		methods:{
			top(){
				this.type = !this.type
			},
			center(){
				this.type2 = !this.type2
			},
			bottom(){
				this.type3 = !this.type3
			},
			other(){
				this.type4 = !this.type4
			}
		}
	}
</script>

<style>
</style>

```
:::


### this调用
<ClientOnly>
  <toast-demo2></toast-demo2>
</ClientOnly>

::: details 点击查看代码
```js

<template>
	
	<div>
		<ml-button @click="mr">默认</ml-button>
		<ml-button @click="success">成功</ml-button>
		<ml-button @click="waring">警告</ml-button>
		<ml-button @click="info">文本</ml-button>
		<ml-button @click="error">错误</ml-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{


			}
		},
		methods:{
			
			mr(){
				this.$toast({
					message:'默认文本',
				})
			},
			success(){
				this.$toast({
					message:'成功文本',
					position:'top',
					type:'success',
				})
			},
			waring(){
				this.$toast({
					message:'警告文本',
					position:'top',
					type:'waring',
					duration:1000
				})
			},
			info(){
				this.$toast({
					message:'普通文本',
					position:'top',
					type:'info',
					duration:1000
				})
			},
			error(){
				this.$toast({
					message:'错误文本',
					position:'top',
					type:'error',
					duration:1000
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
| type      | 绑定值 | string | success/waring/info/error |info |
| position      | 出现的位置 | string |-- |top |
| visible      | 是否出现（组件方式使用时才有效） | Boolean |-- |false |
| duration     | 多少秒后关闭 | number（毫秒） |-- |3000 |
| message     | 文本框内容 | string |-- |-- |


