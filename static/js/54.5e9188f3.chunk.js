(this.webpackJsonpruby_rummy_web=this.webpackJsonpruby_rummy_web||[]).push([[54],{1068:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return d}));var a=n(3),r=n.n(a),c=n(9),u=n(150),i=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.jpost("/user-web/create",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.get("/user-web/gets",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.put("/user-web/update-password",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.put("/user-web/update-block",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.put("/user-web/update-role",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.get("/component/gets-by-user-name",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1205:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return l}));var a=n(150),r=function(e){return a.a.get("/role/gets",e)},c=function(e){return a.a.delete("/role/delete",e)},u=function(e){return a.a.jpost("/role/create",e)},i=function(e){return a.a.put("/role/update",e)},s=function(e){return a.a.get("/permissions/gets",e)},o=function(e){return a.a.get("/role/get-permissions",e)},l=function(e){return a.a.get("/role/get-role-by-user",e)}},1361:function(e,t,n){"use strict";n(3),n(9),n(150)},1640:function(e,t,n){"use strict";n.r(t);n(522);var a=n(523),r=(n(519),n(518)),c=(n(147),n(71)),u=n(3),i=n.n(u),s=n(72),o=n(9),l=n(84),f=n(0),d=n.n(f),p=n(51),b=n(111),m=(n(85),n(542),n(543)),O=(n(1341),n(1348)),j=(n(173),n(110)),v=(n(279),n(86)),h=(n(278),n(148)),k=(n(533),n(532)),g=n(1068),y=n(1205),E=k.a.Option,w=h.a.TextArea,x=Object(f.memo)((function(e){var t=e.onCancel,n=e.visible,a=e.onOk,r=e.perms,c=e.users,u=v.a.useForm(),p=Object(l.a)(u,1)[0],b=Object(f.useState)([]),g=Object(l.a)(b,2),x=g[0],S=g[1],C=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{p.validateFields().then(Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)(Object(s.a)(Object(s.a)({},p.getFieldsValue()),{},{permissions_ids:x.toString(),user_ids:null===(t=p.getFieldValue("user_ids"))||void 0===t?void 0:t.toString()}));case 2:p.resetFields(),T([]),j.b.success("\u521b\u5efa\u6210\u529f"),a();case 6:case"end":return e.stop()}}),e)}))))}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=Object(f.useState)([]),F=Object(l.a)(_,2),I=F[0],P=F[1],V=Object(f.useState)([]),z=Object(l.a)(V,2),K=z[0],T=z[1],N=Object(f.useState)([]),q=Object(l.a)(N,2),D=q[0],R=q[1],A=Object(f.useState)(!0),B=Object(l.a)(A,2),J=B[0],M=B[1];return d.a.createElement(m.a,{title:"\u521b\u5efa\u89d2\u8272",visible:n,onCancel:function(){p.resetFields(),T([]),t()},onOk:C},d.a.createElement(v.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:18}},{form:p,name:"form_in_modal",hideRequiredMark:!0}),d.a.createElement(v.a.Item,{label:"\u89d2\u8272\u540d",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d"}]},d.a.createElement(h.a,{placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d"})),d.a.createElement(v.a.Item,{label:"\u5907\u6ce8",name:"remarks",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5907\u6ce8"}]},d.a.createElement(w,{placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8"})),d.a.createElement(v.a.Item,{label:"\u6743\u9650",name:"permissions_ids",rules:[function(e){e.getFieldValue;return{validator:function(e,t){return console.log(K),K.length>0?Promise.resolve():Promise.reject(new Error("\u8bf7\u9009\u62e9\u6743\u9650"))}}}]},d.a.createElement(O.a,{checkable:!0,onExpand:function(e){P(e),M(!1)},expandedKeys:I,autoExpandParent:J,onCheck:function(e,t){S(e.concat(t.halfCheckedKeys)),T(e)},checkedKeys:K,onSelect:function(e,t){R(e)},selectedKeys:D,treeData:r})),d.a.createElement(v.a.Item,{label:"\u6240\u5c5e\u7528\u6237",name:"user_ids"},d.a.createElement(k.a,{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u7528\u6237",mode:"multiple"},c.map((function(e){return d.a.createElement(E,{key:e.id,value:e.id},e.uname)}))))))})),S=n(89),C=k.a.Option,_=h.a.TextArea,F=Object(f.memo)((function(e){var t=e.onCancel,n=e.visible,a=e.onOk,r=e.perms,c=e.users,u=e.name,p=e.id,b=e.remarks,g=v.a.useForm(),E=Object(l.a)(g,1)[0],w=Object(f.useState)([]),x=Object(l.a)(w,2),F=x[0],I=x[1],P=Object(f.useState)([]),V=Object(l.a)(P,2),z=(V[0],V[1]),K=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{E.validateFields().then(Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.g)(Object(s.a)(Object(s.a)({},E.getFieldsValue()),{},{permissions_ids:F.toString(),user_ids:null===(t=E.getFieldValue("user_ids"))||void 0===t?void 0:t.toString(),id:p}));case 2:E.resetFields(),J([]),j.b.success("\u4fee\u6539\u6210\u529f"),a();case 6:case"end":return e.stop()}}),e)}))))}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=Object(f.useState)([]),N=Object(l.a)(T,2),q=N[0],D=N[1],R=Object(f.useState)([]),A=Object(l.a)(R,2),B=A[0],J=A[1],M=Object(f.useState)([]),H=Object(l.a)(M,2),L=H[0],Y=H[1],G=Object(f.useState)(!0),Q=Object(l.a)(G,2),U=Q[0],W=Q[1],X=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)({role_id:p});case 2:t=e.sent,z((n=t)||[]),E.setFieldsValue({user_ids:n||[]});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.c)({role_id:p});case 2:(t=e.sent)&&(n=Object(S.h)(t,{key:"id",title:"name",children:"child",check:"check",checkState:!0}),J(n),a=Object(S.g)(t,{key:"id",title:"name",children:"child",check:"check",checkState:!0}),I(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){n&&(E.setFieldsValue({name:u,remarks:b}),X(),Z())}),[n]),d.a.createElement(m.a,{title:"\u4fee\u6539\u89d2\u8272",visible:n,onCancel:function(){E.resetFields(),t()},onOk:K},d.a.createElement(v.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:18}},{form:E,name:"form_in_modal",hideRequiredMark:!0}),d.a.createElement(v.a.Item,{label:"\u89d2\u8272\u540d",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d"}]},d.a.createElement(h.a,{placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d"})),d.a.createElement(v.a.Item,{label:"\u5907\u6ce8",name:"remarks",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5907\u6ce8"}]},d.a.createElement(_,{placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8"})),d.a.createElement(v.a.Item,{label:"\u6743\u9650",name:"permissions_ids",rules:[function(e){e.getFieldValue;return{validator:function(e,t){return console.log(B),B.length>0?Promise.resolve():Promise.reject(new Error("\u8bf7\u9009\u62e9\u6743\u9650"))}}}]},d.a.createElement(O.a,{checkable:!0,onExpand:function(e){D(e),W(!1)},expandedKeys:q,autoExpandParent:U,onCheck:function(e,t){I(e.concat(t.halfCheckedKeys)),J(e)},checkedKeys:B,onSelect:function(e,t){Y(e)},selectedKeys:L,treeData:r})),d.a.createElement(v.a.Item,{label:"\u6240\u5c5e\u7528\u6237",name:"user_ids",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6240\u5c5e\u7528\u6237"}]},d.a.createElement(k.a,{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u7528\u6237",mode:"multiple"},c.map((function(e){return d.a.createElement(C,{key:e.id,value:e.id},e.uname)}))))))})),I=(n(547),n(546)),P=(n(550),n(551)),V=(n(1361),Object(f.forwardRef)((function(e,t){var n=e.handleEdit,a=Object(f.useState)(!1),c=Object(l.a)(a,2),u=c[0],p=c[1],b=Object(f.useState)([]),m=Object(l.a)(b,2),O=m[0],v=m[1],h=(e.modifypassword_h,e.modifyaccountRole_h,e.block_h,e.pageSize),k=void 0===h?10:h,E=e.total,w=void 0===E?20:E,x=(e.showTotal,Object(f.useState)({current:1,pageSize:k||10,total:w||0,showSizeChanger:!0})),C=Object(l.a)(x,2),_=C[0],F=C[1],V=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(y.e)({id:t});case 3:j.b.success("\u5220\u9664\u6210\u529f"),(_.total-1)/_.pageSize<_.current&&1!=_.current?F(Object(s.a)(Object(s.a)({},_),{},{current:_.current-1})):K(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),z=[{title:"\u89d2\u8272\u540d\u79f0",dataIndex:"name",key:"id"},{title:"\u89d2\u8272\u8bf4\u660e",dataIndex:"remarks"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created_at"},{title:"\u521b\u5efa\u4eba",dataIndex:"create_user_name"},{title:"\u64cd\u4f5c",dataIndex:"disabled",render:function(e,t){return d.a.createElement(r.b,{size:"middle"},d.a.createElement("a",{onClick:function(){return n(t.name,t.id,t.remarks)}},"\u7f16\u8f91"),d.a.createElement(P.a,{title:"\u786e\u5b9a\u5220\u9664\u8fd9\u6761\u6570\u636e?",onConfirm:function(){return V(t.id)},okText:"Yes",cancelText:"No"},d.a.createElement("a",null,"\u5220\u9664")))}}];Object(f.useImperativeHandle)(t,(function(){return{getData:function(e){K(e)}}}));var K=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,a,r,c,u,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},e.prev=1,p(!0),e.next=5,Object(y.f)(Object(s.a)({page:_.current,page_size:_.pageSize},t));case 5:if(!((null===(a=e.sent)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.length)>0)){e.next=12;break}return r=Object(S.b)(a.data,{key:"create_user"}),e.next=10,Object(g.c)({user_ids:r.toString()});case 10:(c=e.sent)&&(u=c.data,a.data=Object(S.d)(a.data,{key:"create_user",data:u,trans_key:"create_user_name"}));case 12:v(a.data),p(!1),F(Object(s.a)(Object(s.a)({},_),{},{total:a.total})),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),p(!1),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(){return e.apply(this,arguments)}}();Object(f.useEffect)((function(){K()}),[_.current,_.pageSize]);return d.a.createElement(d.a.Fragment,null,d.a.createElement(I.a,{rowKey:"id",bordered:!0,loading:u,columns:z,dataSource:O,pagination:_,onChange:function(e){F(Object(s.a)({},e))}}))})));t.default=function(e){var t=Object(f.useState)([]),n=Object(l.a)(t,2),u=(n[0],n[1],Object(f.useState)(!1)),s=Object(l.a)(u,2),m=(s[0],s[1],Object(f.useState)(!1)),O=Object(l.a)(m,2),j=(O[0],O[1],Object(f.useState)([])),v=Object(l.a)(j,2),h=(v[0],v[1],Object(f.useState)()),k=Object(l.a)(h,2),E=(k[0],k[1],Object(f.useState)(!1)),w=Object(l.a)(E,2),S=w[0],C=w[1],_=Object(f.useState)(!1),I=Object(l.a)(_,2),P=I[0],z=I[1],K=Object(f.useState)(""),T=Object(l.a)(K,2),N=T[0],q=T[1],D=Object(f.useState)(""),R=Object(l.a)(D,2),A=R[0],B=R[1],J=Object(f.useState)(""),M=Object(l.a)(J,2),H=M[0],L=M[1],Y=Object(f.useState)(""),G=Object(l.a)(Y,2),Q=G[0],U=G[1],W=Object(f.useState)([]),X=Object(l.a)(W,2),Z=X[0],$=X[1],ee=Object(f.useRef)(),te=Object(p.c)((function(e){return e.appids}));Object(f.useEffect)((function(){}),[te]);var ne=function e(t,n){var a=[],r=n.key,c=n.title,u=n.children;return t.map((function(t){a.push({key:t[r],title:t[c],children:t[u]?e(t[u],n):[]})})),a},ae=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.b)();case 2:t=e.sent,n=ne(t,{key:"id",title:"name",children:"child"}),U(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)({page:1,page_size:1e4});case 2:t=e.sent,$(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){ae(),re()}),[]),d.a.createElement(b.a,{title:e.route.title},d.a.createElement(r.b,null,d.a.createElement(c.a,{type:"primary",onClick:function(){C(!0)}},"\u521b\u5efa\u89d2\u8272")),d.a.createElement(a.a,{dashed:!0}),d.a.createElement(V,{ref:ee,handleEdit:function(e,t,n){!function(e,t,n){B(e),q(t),L(n)}(e,t,n),z(!0)}}),d.a.createElement(x,{onOk:function(){ee.current.getData(),C(!1)},visible:S,onCancel:function(){C(!1)},perms:Q,users:Z}),d.a.createElement(F,{perms:Q,users:Z,id:N,name:A,remarks:H,visible:P,onOk:function(){ee.current.getData(),z(!1)},onCancel:function(){z(!1)}}))}},544:function(e,t,n){"use strict";n(55),n(555)},549:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return e?"function"===typeof e?e():e:null}},550:function(e,t,n){"use strict";n(55),n(544),n(147),n(556)},551:function(e,t,n){"use strict";var a=n(6),r=n.n(a),c=n(16),u=n.n(c),i=n(0),s=n(4),o=n.n(s),l=n(100),f=n.n(l),d=n(14),p=n(113),b=n(71),m=n(176),O=n(112),j=n(114),v=n(123),h=n(549),k=n(26),g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},y=i.forwardRef((function(e,t){var n=i.useState(e.visible),a=u()(n,2),c=a[0],s=a[1];i.useEffect((function(){"visible"in e&&s(e.visible)}),[e.visible]),i.useEffect((function(){"defaultVisible"in e&&s(e.defaultVisible)}),[e.defaultVisible]);var l=function(t,n){"visible"in e||s(t),e.onVisibleChange&&e.onVisibleChange(t,n)},f=function(t){l(!1,t),e.onConfirm&&e.onConfirm.call(void 0,t)},y=function(t){l(!1,t),e.onCancel&&e.onCancel.call(void 0,t)},E=i.useContext(v.b).getPrefixCls,w=e.prefixCls,x=e.placement,S=e.children,C=e.overlayClassName,_=g(e,["prefixCls","placement","children","overlayClassName"]),F=E("popover",w),I=E("popconfirm",w),P=o()(I,C),V=i.createElement(O.a,{componentName:"Popconfirm",defaultLocale:j.a.Popconfirm},(function(t){return function(t,n){var a=e.okButtonProps,c=e.cancelButtonProps,u=e.title,s=e.cancelText,o=e.okText,l=e.okType,d=e.icon;return i.createElement("div",{className:"".concat(t,"-inner-content")},i.createElement("div",{className:"".concat(t,"-message")},d,i.createElement("div",{className:"".concat(t,"-message-title")},Object(h.a)(u))),i.createElement("div",{className:"".concat(t,"-buttons")},i.createElement(b.a,r()({onClick:y,size:"small"},c),s||n.cancelText),i.createElement(b.a,r()({onClick:f},Object(m.a)(l),{size:"small"},a),o||n.okText)))}(F,t)}));return i.createElement(p.a,r()({},_,{prefixCls:F,placement:x,onVisibleChange:function(t){e.disabled||l(t)},visible:c,overlay:V,overlayClassName:P,ref:t}),Object(k.a)(S,{onKeyDown:function(e){var t,n;i.isValidElement(S)&&(null===(n=null===S||void 0===S?void 0:(t=S.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===d.a.ESC&&c&&l(!1,e)}(e)}}))}));y.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:i.createElement(f.a,null),disabled:!1},t.a=y},555:function(e,t,n){},556:function(e,t,n){}}]);