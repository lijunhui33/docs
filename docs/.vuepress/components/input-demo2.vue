<template>
	<div style="margin-top: 20px;">	
		<ml-input v-model="value" placeholder="请输入内容" type="text" name="inp" clearable ></ml-input>
		<ml-input v-model="value" placeholder="请输入内容" type="password" name="inp"  show-password ></ml-input>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:''
			}
		}
	}
</script>

<style>
</style>
