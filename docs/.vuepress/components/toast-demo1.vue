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
