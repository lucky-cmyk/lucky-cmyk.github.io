(this.webpackJsonpruby_rummy_web=this.webpackJsonpruby_rummy_web||[]).push([[51],{1347:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(605),r={},i=function(e){var t,n=Object(a.a)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;r[i.appid.toString()]=i.appName}}catch(o){n.e(o)}finally{n.f()}},o=function(e){return r[e.toString()]}},1662:function(e,t,n){"use strict";n.r(t);n(547);var a=n(546),r=(n(519),n(518)),i=(n(550),n(551)),o=(n(147),n(71)),c=n(606),l=(n(173),n(110)),u=n(3),s=n.n(u),m=n(72),d=n(9),f=n(84),b=n(0),p=n.n(b),v=n(51),y=n(111),E=n(87),O=n(1347),j=n(614),h=n(85),x=n.n(h),I=(n(542),n(543)),g=(n(279),n(86)),k=(n(278),n(148)),C=(n(533),n(532)),S=C.a.Option,w=k.a.TextArea;var T=function(e){var t=e.data,n=e.visible,a=e.onCancel,i=e.onOk,c=Object(b.useState)([]),l=Object(f.a)(c,2),u=l[0],s=l[1],d=g.a.useForm(),v=Object(f.a)(d,1)[0];return Object(b.useEffect)((function(){s(t)}),[t]),Object(b.useEffect)((function(){console.log("Form data initial",u),v.resetFields()}),[u]),p.a.createElement(I.a,{visible:n,title:"Add Update Config",maskClosable:!1,closable:!1,getContainer:!1,footer:null},p.a.createElement(g.a,{form:v,name:"form_in_modal",initialValues:u},p.a.createElement(g.a.Item,{label:"Status",name:"status"},p.a.createElement(C.a,{style:{width:120}},p.a.createElement(S,{value:"0"},"Enable"),p.a.createElement(S,{value:"1"},"Disable"))),p.a.createElement(g.a.Item,{label:"Is Compulsory",name:"iscompulsory"},p.a.createElement(C.a,{style:{width:120}},p.a.createElement(S,{value:"1"},"Yes"),p.a.createElement(S,{value:"0"},"No"))),p.a.createElement(g.a.Item,{label:"Is Test",name:"istest"},p.a.createElement(C.a,{style:{width:120}},p.a.createElement(S,{value:"1"},"Yes"),p.a.createElement(S,{value:"0"},"No"))),p.a.createElement(g.a.Item,{label:"Test Uid",name:"userids"},p.a.createElement(k.a,{placeholder:"Multiple uid are separated by commas"})),p.a.createElement(g.a.Item,{label:"Version",name:"version",rules:[{required:!0,message:"Input version!"}]},p.a.createElement(k.a,null)),p.a.createElement(g.a.Item,{label:"Versioncode",name:"versioncode",rules:[{required:!0,message:"Input versioncode!"}]},p.a.createElement(k.a,null)),p.a.createElement(g.a.Item,{label:"Url",name:"url",rules:[{required:!0,message:"Input url!"}]},p.a.createElement(k.a,null)),p.a.createElement(g.a.Item,{label:"Remark",name:"remark",rules:[{required:!0,message:"Input remark!"}]},p.a.createElement(w,null)),p.a.createElement(g.a.Item,null,p.a.createElement(r.b,null,p.a.createElement(o.a,{type:"primary",htmlType:"submit",onClick:function(){var e=v.getFieldsValue(),n=Object(m.a)(Object(m.a)({},t),e);i(n)}},"Submit"),p.a.createElement(o.a,{htmlType:"button",onClick:a},"Cannel")))))};t.default=function(){var e=Object(b.useState)([]),t=Object(f.a)(e,2),n=t[0],u=t[1],h=Object(b.useState)(),I=Object(f.a)(h,2),g=I[0],k=I[1],C=Object(b.useState)(!1),S=Object(f.a)(C,2),w=S[0],N=S[1],V=Object(b.useState)([]),A=Object(f.a)(V,2),P=A[0],D=A[1],Y=Object(v.c)((function(e){return e.appids})),U=function(){var e=Object(d.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(t),e.next=3,Object(E.Ab)({appid:t});case 3:n=e.sent,console.log("\u7248\u672c\u66f4\u65b0\u6570\u636e\uff1a",n),a=n.map((function(e,t){return Object(m.a)(Object(m.a)({},e),{},{key:e.id})})),u(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){Object(O.b)(Y)}),[Y]);var _=function(){var e=Object(d.a)(s.a.mark((function e(t){var a,r,i,o,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.appid=g,t.iscompulsory=parseInt(t.iscompulsory),t.status=parseInt(t.status),t.istest=parseInt(t.istest),t.versioncode=parseInt(t.versioncode),t.datetime=x()().unix(),!t.id){e.next=22;break}return e.next=9,Object(E.Z)(t);case 9:if(0!==(a=e.sent).code){e.next=18;break}r=Object(c.a)(n),i=r.findIndex((function(e){return t.id===e.id})),o=r[i],r.splice(i,1,Object(m.a)(Object(m.a)({},o),t)),u(r),e.next=20;break;case 18:return l.b.error(a.err),e.abrupt("return");case 20:e.next=31;break;case 22:return e.next=24,Object(E.I)(t);case 24:if(0!==(d=e.sent).code){e.next=29;break}u([].concat(Object(c.a)(n),[Object(m.a)(Object(m.a)({},t),{},{id:d.id,key:d.id})])),e.next=31;break;case 29:return l.b.error(d.err),e.abrupt("return");case 31:N(!1);case 32:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.T)({id:t});case 2:if(0===(a=e.sent).code){e.next=6;break}return l.b.error(a.err),e.abrupt("return");case 6:r=Object(c.a)(n),u(r.filter((function(e){return e.id!==t})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=[{title:"ID",dataIndex:"id"},{title:"Appid",dataIndex:"appid",render:function(e){return Object(O.a)(e)}},{title:"Status",dataIndex:"status",render:function(e){return"0"===e.toString()?"Enable":"Disable"}},{title:"Is Compulsory",dataIndex:"iscompulsory",render:function(e){return"0"===e.toString()?"No":"Yes"}},{title:"Version",dataIndex:"version"},{title:"Versioncode",dataIndex:"versioncode"},{title:"Add Time",dataIndex:"datetime",render:function(e){return x.a.unix(e).format("YYYY-MM-DD HH:mm:ss")}},{title:"Url",dataIndex:"url"},{title:"Is Test",dataIndex:"istest",render:function(e){return"0"===e.toString()?"No":"Yes"}},{title:"Test Uid",dataIndex:"userids"},{title:"Remark",dataIndex:"remark"},{title:"Operation",dataIndex:"operation",align:"center",render:function(e,t,n){return p.a.createElement("span",null,p.a.createElement(o.a,{type:"link",onClick:function(){return function(e,t){e.status=e.status.toString(),e.iscompulsory=e.iscompulsory.toString(),e.istest=e.istest.toString(),D(e),N(!0)}(t)}},"Edit"),p.a.createElement(i.a,{title:"Sure to delete?",onConfirm:function(){return q(t.id)}},p.a.createElement(o.a,{type:"link"},"Delete")))}}];return p.a.createElement(y.a,{title:"Version Update"},p.a.createElement(r.b,{direction:"vertical"},p.a.createElement(r.b,null,p.a.createElement(j.a,{handleChange:function(e){return U(e)}}),p.a.createElement(o.a,{type:"primary",onClick:function(){null!=g?(D({status:"0",iscompulsory:"0",istest:"0"}),N(!0)):l.b.error("Please choose channel")}},"Add Config")),p.a.createElement(a.a,{columns:F,dataSource:n,bordered:!0})),p.a.createElement(T,{data:P,visible:w,onOk:_,onCancel:function(){N(!1)}}))}},544:function(e,t,n){"use strict";n(55),n(555)},549:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return e?"function"===typeof e?e():e:null}},550:function(e,t,n){"use strict";n(55),n(544),n(147),n(556)},551:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(16),o=n.n(i),c=n(0),l=n(4),u=n.n(l),s=n(100),m=n.n(s),d=n(14),f=n(113),b=n(71),p=n(176),v=n(112),y=n(114),E=n(123),O=n(549),j=n(26),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},x=c.forwardRef((function(e,t){var n=c.useState(e.visible),a=o()(n,2),i=a[0],l=a[1];c.useEffect((function(){"visible"in e&&l(e.visible)}),[e.visible]),c.useEffect((function(){"defaultVisible"in e&&l(e.defaultVisible)}),[e.defaultVisible]);var s=function(t,n){"visible"in e||l(t),e.onVisibleChange&&e.onVisibleChange(t,n)},m=function(t){s(!1,t),e.onConfirm&&e.onConfirm.call(void 0,t)},x=function(t){s(!1,t),e.onCancel&&e.onCancel.call(void 0,t)},I=c.useContext(E.b).getPrefixCls,g=e.prefixCls,k=e.placement,C=e.children,S=e.overlayClassName,w=h(e,["prefixCls","placement","children","overlayClassName"]),T=I("popover",g),N=I("popconfirm",g),V=u()(N,S),A=c.createElement(v.a,{componentName:"Popconfirm",defaultLocale:y.a.Popconfirm},(function(t){return function(t,n){var a=e.okButtonProps,i=e.cancelButtonProps,o=e.title,l=e.cancelText,u=e.okText,s=e.okType,d=e.icon;return c.createElement("div",{className:"".concat(t,"-inner-content")},c.createElement("div",{className:"".concat(t,"-message")},d,c.createElement("div",{className:"".concat(t,"-message-title")},Object(O.a)(o))),c.createElement("div",{className:"".concat(t,"-buttons")},c.createElement(b.a,r()({onClick:x,size:"small"},i),l||n.cancelText),c.createElement(b.a,r()({onClick:m},Object(p.a)(s),{size:"small"},a),u||n.okText)))}(T,t)}));return c.createElement(f.a,r()({},w,{prefixCls:T,placement:k,onVisibleChange:function(t){e.disabled||s(t)},visible:i,overlay:A,overlayClassName:V,ref:t}),Object(j.a)(C,{onKeyDown:function(e){var t,n;c.isValidElement(C)&&(null===(n=null===C||void 0===C?void 0:(t=C.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===d.a.ESC&&i&&s(!1,e)}(e)}}))}));x.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:c.createElement(m.a,null),disabled:!1},t.a=x},555:function(e,t,n){},556:function(e,t,n){},605:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(175);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw i}}}}},606:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(151);var r=n(175);function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},614:function(e,t,n){"use strict";n(533);var a=n(532),r=n(0),i=n.n(r),o=n(51),c=a.a.Option;t.a=function(e){var t=e.handleChange,n=Object(o.c)((function(e){return e.appids}));return i.a.createElement("div",{style:{padding:"10px 0"}},i.a.createElement(a.a,{defaultValue:"Choose a channel...",style:{width:300},onChange:t,loading:n.length<1},n.map((function(e){return i.a.createElement(c,{key:e.id,value:e.appid},e.appName)}))))}}}]);