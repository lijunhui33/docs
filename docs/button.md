### Button按钮

### 普通按钮

<ClientOnly>
  <button-demo1></button-demo1>
</ClientOnly>



::: details 点击查看代码
```js

<ml-button>普通按钮</ml-button>
<ml-button type="primary">primary</ml-button>
<ml-button type="success">success</ml-button>
<ml-button type="info">info</ml-button>
<ml-button type="warning">warning</ml-button>
<ml-button type="danger">danger</ml-button>

```
:::

### 基础用法

<ClientOnly>
  <button-demo2></button-demo2>
</ClientOnly>



::: details 点击查看代码
```js

<div>
	<div>
	  	<ml-button circle >圆形</ml-button>
	  	<ml-button circle  type="primary">1</ml-button>
	  	<ml-button circle  type="success">1</ml-button>
	  	<ml-button circle  type="info">1</ml-button>
	  	<ml-button circle  type="warning">1</ml-button>
	  	<ml-button circle  type="danger">1</ml-button>
	  </div>
	<div>
		<ml-button>普通按钮</ml-button>
		<ml-button type="primary">primary</ml-button>
		<ml-button type="success">success</ml-button>
		<ml-button type="info">info</ml-button>
		<ml-button type="warning">warning</ml-button>
		<ml-button type="danger">danger</ml-button>
	</div>
	<div>
		<ml-button plain>朴素按钮</ml-button>
		<ml-button plain type="primary">primary</ml-button>
		<ml-button plain type="success">success</ml-button>
		<ml-button plain type="warning">warning</ml-button>
		<ml-button plain type="info">info</ml-button>
		<ml-button plain type="danger">danger</ml-button>
	</div>
	<div">
		<ml-button plain round>圆角</ml-button>
		<ml-button plain round type="primary">primary</ml-button>
		<ml-button plain round type="success">success</ml-button>
		<ml-button plain round type="warning">warning</ml-button>
		<ml-button plain round type="info">info</ml-button>
		<ml-button plain round type="danger">danger</ml-button>
	</div>
	<div>
		<ml-button  round disabled>普通禁用按钮</ml-button>
		<ml-button  round disabled type="primary">primary</ml-button>
		<ml-button  round disabled type="success">success</ml-button>
		<ml-button  round disabled type="info">info</ml-button>
		<ml-button  round disabled type="warning">warning</ml-button>
		<ml-button  round disabled type="danger">danger</ml-button>
	</div>
	<div>
		<ml-button plain round disabled>普通禁用按钮</ml-button>
		<ml-button plain round disabled type="primary">primary</ml-button>
		<ml-button plain round disabled type="success">success</ml-button>
		<ml-button plain round disabled type="info">info</ml-button>
		<ml-button plain round disabled type="warning">warning</ml-button>
		<ml-button plain round disabled type="danger">danger</ml-button>
	</div>
	<div>
		<ml-button icon="icon-region">带图标的按钮</ml-button>
		<ml-button circle icon="icon-region"></ml-button>
		<ml-button type="primary"  :loading="true">加载中</ml-button>
	</div>
</div>

```
:::



### 按钮组

<ClientOnly>
  <button-demo3></button-demo3>
</ClientOnly>



::: details 点击查看代码
```js

<div">
	<div>
		<ml-button-group>
			<ml-button icon="icon-remen" type="primary"></ml-button>
			<ml-button>普通按钮</ml-button>
			<ml-button icon="icon-movie" type="primary"></ml-button>
		</ml-button-group>
	</div>
	<div>
		<ml-button-group>
			<ml-button icon="icon-arrow-left" type="primary"></ml-button>
			<ml-button type="primary">1</ml-button>
			<ml-button icon="icon-arrow-right" type="primary"></ml-button>
		</ml-button-group>
	</div>
</div>

```
:::


### 加载中

<ClientOnly>
  <button-demo4></button-demo4>
</ClientOnly>



::: details 点击查看代码
```js

<ml-button type="primary"  :loading="true">加载中</ml-button>

```
:::

### Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| type      | 按钮类型 | string |primary / success / warning / danger / info |-- |
| plain      | 是否朴素按钮 |Boolean |-- |false |
| round      | 是否圆角按钮 | Boolean |-- |false |
| circle      | 是否圆型按钮 | Boolean |-- |false |
| loading      | 是否加载中| Boolean |-- |false |
| disabled      | 是否禁用| Boolean |-- |false |
| icon      | 图标类名| string |具体看图标库 |-- |

### Events
| 参数          | 说明           | 
| -----------   |:-------------:| 
| @clcik      |点击事件|