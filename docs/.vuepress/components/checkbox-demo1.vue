<template>
	<div style="margin-top: 20px;">
		<ml-checkbox v-model="value" @input="input" :label="value"></ml-checkbox>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:true,
			}
		},
		methods:{
			input(e){
				//这个是toast组件的功能，可以自己console看看结果
				this.$toast({
					message:JSON.stringify(e),
				})
			}
		}
	}
</script>

<style>
</style>
