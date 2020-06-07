<template>
	
	<div style="margin-top: 20px;">
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

<style>
</style>
