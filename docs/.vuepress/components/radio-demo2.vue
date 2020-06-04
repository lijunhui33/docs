<template>
	<div style="margin-top: 20px;" @input="input">
		<ml-radio-group v-model="gender2">
			<ml-radio label="1"></ml-radio>
			<ml-radio label="0"></ml-radio>
		</ml-radio-group>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				gender2:1
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
