<template>
	<div style="margin-top: 20px;display: flex;align-items: center;">
		<ml-time-picker v-model="value" placeholder="请选择时间" :picker-options="{
        start: '08:00',
		step:'00:30',
        end: '18:30',
      }"
		 @input="input"></ml-time-picker>
		<ml-time-picker v-model="value2" placeholder="请选择时间" :picker-options="{
		  selectableRange: '00:09:20 - 10:01:05'
		  
		}"
		 @input="input2"></ml-time-picker>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				value2: ''
			}
		},
		methods: {
			input(e) {
				console.log(e)
			},
			input2(e) {
				console.log(e)
			},

		}
	}
</script>

<style>
</style>
