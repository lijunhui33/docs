<template>
	<div style="margin-top: 20px;">
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
