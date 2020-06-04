<template>
	<div style="margin-top: 20px;">
		<ml-button type="primary" @click="click">打开</ml-button>
		<ml-button type="primary" @click="click2">自定义内容1,并且没有取消按钮的</ml-button>
		<ml-button type="primary" @click="click3">自定义内容2,并且没有按钮按钮的</ml-button>
		<ml-dialog :visible.sync="visible" title="标题" @handleBtn="handleBtn">内容</ml-dialog>
		<ml-dialog :visible.sync="visible2" title="标题" :showClose="false" @handleBtn="handleBtn">
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>
		</ml-dialog>
		<ml-dialog :visible.sync="visible3" title="带输入框的" :showConfirm="false">
			<ml-input placeholder="请输入内容"></ml-input>
		</ml-dialog>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				visible:false,
				visible2:false,
				visible3:false
			}
		},
		methods:{
			click(){
				this.visible = !this.visible
			},
			click2(){
				this.visible2 = !this.visible2
			},
			click3(){
				this.visible3 = !this.visible3
			},
			handleBtn(){
				alert('点击事件回调，可以通过该事件触发你想要的事件')
			}
		}
	}
</script>

<style>
</style>
