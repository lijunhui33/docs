(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{383:function(i,t,l){"use strict";l.r(t);var e={data:function(){return{visible:!1,visible2:!1,visible3:!1}},methods:{click:function(){this.visible=!this.visible},click2:function(){this.visible2=!this.visible2},click3:function(){this.visible3=!this.visible3},handleBtn:function(){alert("点击事件回调，可以通过该事件触发你想要的事件")}}},n=l(44),s=Object(n.a)(e,(function(){var i=this,t=i.$createElement,l=i._self._c||t;return l("div",{staticStyle:{"margin-top":"20px"}},[l("ml-button",{attrs:{type:"primary"},on:{click:i.click}},[i._v("打开")]),i._v(" "),l("ml-button",{attrs:{type:"primary"},on:{click:i.click2}},[i._v("自定义内容1,并且没有取消按钮的")]),i._v(" "),l("ml-button",{attrs:{type:"primary"},on:{click:i.click3}},[i._v("自定义内容2,并且没有按钮按钮的")]),i._v(" "),l("ml-dialog",{attrs:{visible:i.visible,title:"标题"},on:{"update:visible":function(t){i.visible=t},handleBtn:i.handleBtn}},[i._v("内容")]),i._v(" "),l("ml-dialog",{attrs:{visible:i.visible2,title:"标题",showClose:!1},on:{"update:visible":function(t){i.visible2=t},handleBtn:i.handleBtn}},[l("ul",[l("li",[i._v("1")]),i._v(" "),l("li",[i._v("2")]),i._v(" "),l("li",[i._v("3")])])]),i._v(" "),l("ml-dialog",{attrs:{visible:i.visible3,title:"带输入框的",showConfirm:!1},on:{"update:visible":function(t){i.visible3=t}}},[l("ml-input",{attrs:{placeholder:"请输入内容"}})],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);