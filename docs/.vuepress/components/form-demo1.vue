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

<style>
</style>
