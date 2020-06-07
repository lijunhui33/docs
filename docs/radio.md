### Radio单选按钮



### 基础使用

<ClientOnly>
  <radio-demo1></radio-demo1>
</ClientOnly>



::: details 点击查看代码
```js

<ml-radio label="1" v-model="gender">男</ml-radio>
<ml-radio label="0"  v-model="gender">女</ml-radio>

```
:::

### 单选框组

<ClientOnly>
  <radio-demo2></radio-demo2>
</ClientOnly>



::: details 点击查看代码
```js

<ml-radio-group v-model="gender2">
	<ml-radio label="1"></ml-radio>
	<ml-radio label="0"></ml-radio>
</ml-radio-group>

```
:::

### Radio Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| label      | Radio 的 value | String,Number,Boolean |-- |-- |
| v-model      | 绑定值 | string |-- |-- |



### Radio Events
| 参数          | 说明           | 
| -----------   |:-------------:| 
| @change      |值改变触发的事件|


### Radio-group
 | 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| v-model      | 绑定值 | string |-- |-- |

### Radio-group Events
| 参数          | 说明           | 
| -----------   |:-------------:| 
| @change      |值改变触发的事件|
