webpackJsonp([7],{hBLb:function(e,t){},oVIv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),s=n.n(r),a=n("NYxO"),o={data:function(){return{username:"",password:""}},methods:s()({},Object(a.b)(["register"]),{onRegister:function(){var e=this;this.register({username:this.username,password:this.password}).then(function(t){e.$router.push({path:"/login"})})}})},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"register"}},[n("h4",[e._v("用户名")]),e._v(" "),n("el-input",{attrs:{placeholder:"用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),n("h4",[e._v("密码")]),e._v(" "),n("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onRegister(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("el-button",{attrs:{size:"medium"},on:{click:e.onRegister}},[e._v("立即注册")]),e._v(" "),n("p",{staticClass:"notice"},[e._v("已有账号？"),n("router-link",{attrs:{to:"/login"}},[e._v("立即登录")])],1)],1)},staticRenderFns:[]};var u=n("VU/8")(o,i,!1,function(e){n("hBLb")},null,null);t.default=u.exports}});
//# sourceMappingURL=7.11aa87f2060b407a1b4a.js.map