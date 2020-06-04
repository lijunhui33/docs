### Dialog对话框

### 普通对话框

::: tip
需要设置visible属性，它接收Boolean，当为true时显示 Dialog，Dialog 分为两个部分：body和footer。title用于自定义标题,默认文字是提示,我并未提供取消标题栏的属性,你可以使用body插入你想用的组件或者文字，footer插入你想自定义的底部按钮
:::

<ClientOnly>
  <dialog-demo1></dialog-demo1>
</ClientOnly>


::: details 点击查看代码
```js

<ml-dialog :visible.sync="visible" title="标题" @handleBtn="handleBtn">内容</ml-dialog>
<ml-dialog :visible.sync="visible2" title="标题" :showClose="false">
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
</ml-dialog>
<ml-dialog :visible.sync="visible3" title="带输入框的" :showConfirm="false">
	<ml-input placeholder="请输入内容"></ml-input>
</ml-dialog>

```
:::

### 自定义底部按钮的对话框

<ClientOnly>
  <dialog-demo2></dialog-demo2>
</ClientOnly>

::: details 点击查看代码
```js
<ml-dialog :visible.sync="visible2" title="标题" :showClose="false" @handleBtn="handleBtn">
	<template v-slot:footer>
		<ml-button>自定义</ml-button>
		<button>原生button按钮</button>
	</template>
</ml-dialog>
```
:::


### Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| visible      | 是否显示 Dialog，支持 .sync 修饰符 | boolean |-- |false |
| title      | 标题 | string |-- |提示 |
| width      | dialog框的宽 | string |-- |30% |
| top      | dialog框的高 | string |-- |15vh |
| showClose     | 是否显示取消按钮 | Boolean |-- |true |
| showConfirm     | 是否显示确认按钮 | Boolean |-- |true |

### Slot
| 参数          | 说明           | 
| -----------   |:-------------:| 
| footer      | Dialog 按钮操作区的内容 |

### Events
| 参数          | 说明           | 
| -----------   |:-------------:| 
| @handleBtn      |点击确认按钮的回调 |
| @opened      |对话框打开事件 |
| @closed      |对话框关闭事件 |