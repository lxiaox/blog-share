webpackJsonp([5],{"8LdO":function(t,e){},epW7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("ZYmg"),n={data:function(){return{blogs:[],page:1,total:0}},created:function(){this.page=parseInt(this.$route.query.page)||1,this.getBlogs(this.page)},methods:{getBlogs:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;s.a.getIndexBlogs({page:e}).then(function(e){console.log("blogs",e),t.blogs=e.data,t.page=e.page,t.total=e.total})},onPageChange:function(t){this.getBlogs(t),this.$router.push({path:"/",query:{page:t}})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("section",{staticClass:"blog-posts"},t._l(t.blogs,function(e){return a("div",{key:""+e.id,staticClass:"item"},[a("router-link",{attrs:{to:"/user/"+e.user.id}},[a("figure",{staticClass:"avatar"},[a("div",{staticClass:"img-wrapper"},[a("img",{attrs:{src:e.user.avatar,alt:"blog.user.username"}})]),t._v(" "),a("figcaption",[t._v(t._s(e.user.username))])])]),t._v(" "),a("router-link",{attrs:{to:"/detail/"+e.id}},[a("h3",{staticClass:"title"},[t._v("\n          "+t._s(e.title)+"\n          "),a("span",[t._v(t._s(t.friendlyDate(e.createdAt)))])]),t._v(" "),a("p",[t._v(t._s(e.description))])])],1)}),0),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"total,prev, pager, next, jumper",total:t.total,"current-page":t.page,"page-size":10,"pager-count":11},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var i=a("VU/8")(n,r,!1,function(t){a("8LdO")},"data-v-5767111b",null);e.default=i.exports}});
//# sourceMappingURL=5.fdda9fca47f79330ec6b.js.map