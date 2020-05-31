### input输入框


### 基础使用
<ClientOnly>
  <input-demo1></input-demo1>
</ClientOnly>



::: details 点击查看代码
```js

<ml-input v-model="value" placeholder="请输入内容" type="text" name="inp">

```
:::


### 清空输入框和密码输入框
<ClientOnly>
  <input-demo2></input-demo2>
</ClientOnly>

::: details 点击查看代码
```js
<ml-input v-model="value" placeholder="请输入内容" type="text" name="inp" clearable ></ml-input>
<ml-input v-model="value" placeholder="请输入内容" type="password" name="inp"  show-password ></ml-input>

```
:::


### Attributes
| 参数          | 说明           | 类型  |可选值  |默认值  |
| -----------   |:-------------:| -----:|-----:|-----:|
| type      | 类型 | string |除了textarea |text |
| v-model      | 绑定值 | string |-- |-- |
| name      | 原生属性 | string |-- |-- |
| clearable      | 清空图标 | Boolean |-- |false |
| show-password     | 是否显示密码 | Boolean |-- |false |