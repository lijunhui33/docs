<template>
	
	<div style="margin-top: 20px;">
		<ml-data-picker placeholder="选择日期时间" v-model="value" @change="change"></ml-data-picker>
		<br>
		<ml-button @click="set">改变值</ml-button>
		<br>
		<ml-button @click="alerts">输出里面的值</ml-button>

	</div>
</template>
<script>
	/*
	* placeholder  v-model 
	*@change
	*/
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

<style>
</style>
