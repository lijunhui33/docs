<template>
	<div style="margin-top: 20px;">
		<ml-radio label="1" v-model="gender"  @input="input">男</ml-radio>
		<ml-radio label="0"  v-model="gender"  @input="input">女</ml-radio>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				gender:0
			}
		},
		methods:{
			input(e){
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
