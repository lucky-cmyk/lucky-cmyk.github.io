(this.webpackJsonpruby_rummy_web=this.webpackJsonpruby_rummy_web||[]).push([[63],{1655:function(e,t,a){"use strict";a.r(t);a(519);var n=a(518),r=(a(186),a(74)),c=(a(187),a(53)),l=(a(147),a(71)),i=(a(173),a(110)),o=a(3),s=a.n(o),u=a(9),m=a(84),d=a(0),f=a.n(d),p=a(111),b=a(10),v=(a(283),a(192)),E=a(605),y=a(72),g=(a(279),a(86)),h=(a(278),a(148)),O=(a(533),a(532)),x=a(253),w=a(254),j=O.a.Option,k=(h.a.TextArea,{labelCol:{span:6},wrapperCol:{span:18}}),S={labelCol:{span:24},wrapperCol:{span:24}};var C=function(e){var t=e.data,a=e.onOk,r=Object(d.useState)(!1),c=Object(m.a)(r,2),o=c[0],p=c[1],C=g.a.useForm(),I=Object(m.a)(C,1)[0];Object(d.useEffect)((function(){var e=Object(y.a)({},t);try{var a,n=JSON.parse(t.config),r=t.condition>2&&t.condition<8;12===t.condition?(a=n.config,e.white_list=n.uid.join(",")):a=n,e.conf=[];var c,l=Object(E.a)(a);try{for(l.s();!(c=l.n()).done;){var i=c.value,o={};o.start=i.scope?r?i.scope.gte/100:i.scope.gte:0,o.end=i.scope?r?i.scope.lt/100:i.scope.lt:0,o.score=i.score[13].eq,o.ten=i.score[10].eq,o.ratio=i.trigger.eq,e.conf.push(o)}}catch(s){l.e(s)}finally{l.f()}}catch(u){}I.setFieldsValue(Object(y.a)({},e)),p(12===e.condition)}),[t]);var N=function(){var e=Object(u.a)(s.a.mark((function e(){var n,r,c,l,o,u,m,d,f,p,v,y,g;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=I.getFieldsValue()).conf&&n.condition&&n.condition){e.next=3;break}return e.abrupt("return",i.b.error("\u8bf7\u586b\u5199\u5fc5\u586b\u5b57\u6bb5"));case 3:(r={}).condition=0|n.condition,r.plan=0|n.plan,r.times=0|n.times,r.enable=0|n.enable,c=r.condition>2&&r.condition<8,l=[],o=Object(E.a)(n.conf);try{for(o.s();!(u=o.n()).done;)m=u.value,d={},f=c?100*Number(m.start)|0:Number(m.start)||0,p=c?100*Number(m.end)|0:Number(m.end)||0,d.scope={gte:f,lt:p},d.score={10:{eq:Number(m.ten)||0},13:{eq:Number(m.score)||0}},d.trigger={eq:Number(m.ratio)||0},l.push(d)}catch(s){o.e(s)}finally{o.f()}if(12===r.condition?(v=n.white_list.split(","),y=v.map((function(e){return 0|e})),r.config=JSON.stringify({uid:y,config:l})):r.config=JSON.stringify(l),!t.id){e.next=20;break}return r.id=t.id,e.next=17,b.a.put("/balance/config",r);case 17:g=e.sent,e.next=23;break;case 20:return e.next=22,b.a.post("/balance/config",r);case 22:g=e.sent;case 23:0===g.code&&g.data?a():i.b.error("\u64cd\u4f5c\u5931\u8d25"),console.log(n,"submitData",r);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id){e.next=2;break}return e.abrupt("return",a());case 2:return e.next=4,b.a.delete("balance/config/".concat(t.id));case 4:0===(n=e.sent).code&&n.data?a():i.b.error("\u64cd\u4f5c\u5931\u8d25");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return f.a.createElement(v.a,{style:{margin:"10px 0"}},f.a.createElement(g.a,Object.assign({},k,{form:I,name:"form_in_modal"}),f.a.createElement(g.a.Item,{label:"\u6761\u4ef6",name:"condition",rules:[{required:!0,message:"Choose channel!"}]},f.a.createElement(O.a,{onChange:function(e){return p(12===e)}},f.a.createElement(j,{value:22},"cond 22 : \u7b2c7\u5929\u5145\u503c\u7528\u6237\uff08\u767e\u5206\u6bd4\uff09"),f.a.createElement(j,{value:21},"cond 21 : \u7b2c6\u5929\u5145\u503c\u7528\u6237\uff08\u767e\u5206\u6bd4\uff09"),f.a.createElement(j,{value:20},"cond 20 : \u7b2c5\u5929\u5145\u503c\u7528\u6237\uff08\u767e\u5206\u6bd4\uff09"),f.a.createElement(j,{value:19},"cond 19 : \u7b2c4\u5929\u5145\u503c\u7528\u6237\uff08\u767e\u5206\u6bd4\uff09"),f.a.createElement(j,{value:18},"cond 18 : \u7b2c3\u5929\u5145\u503c\u7528\u6237\uff08\u767e\u5206\u6bd4\uff09"),f.a.createElement(j,{value:17},"cond 17 : \u7b2c2\u5929\u5145\u503c\u7528\u6237\uff08\u767e\u5206\u6bd4\uff09"),f.a.createElement(j,{value:16},"cond 16 : \u7b2c1\u5929\u5145\u503c\u7528\u6237\uff08\u767e\u5206\u6bd4\uff09"),f.a.createElement(j,{value:15},"cond 15 : \u591a\u6b21\u5145\u503c\u7528\u6237\uff08\u767e\u5206\u6bd4\uff09"),f.a.createElement(j,{value:14},"cond 14 : \u9996\u6b21\u5145\u503c\u7528\u6237\uff08\u767e\u5206\u6bd4\uff09"),f.a.createElement(j,{value:13},"cond 13 : \u672a\u5145\u503c\u65b0\u7528\u6237\uff08\u5206\u6570\uff09"),f.a.createElement(j,{value:12},"cond 12 : \u767d\u540d\u5355"),f.a.createElement(j,{value:11},"cond 11 : \u5145\u503c\u63d0\u73b0\u6bd4"),f.a.createElement(j,{value:10},"cond 10 : \u63d0\u73b0\u5145\u503c\u6bd4"),f.a.createElement(j,{value:9},"cond 9 : \u8fde\u8f93\u5c40\u6570"),f.a.createElement(j,{value:8},"cond 8 : \u8fde\u8d62\u5c40\u6570"),f.a.createElement(j,{value:7},"cond 7 : \u7d2f\u79ef\u76c8\u4e8f\uff087\u5929\uff09"),f.a.createElement(j,{value:6},"cond 6 : \u7d2f\u79ef\u76c8\u4e8f\uff083\u5929\uff09"),f.a.createElement(j,{value:5},"cond 5 : \u7d2f\u79ef\u76c8\u4e8f\uff081\u5929\uff09"),f.a.createElement(j,{value:4},"cond 4 : \u7d2f\u79ef\u76c8\u4e8f\uff08\u6700\u8fd1100\u5c40\uff09"),f.a.createElement(j,{value:3},"cond 3 : \u7d2f\u79ef\u76c8\u4e8f\uff08\u6700\u8fd150\u5c40\uff09"),f.a.createElement(j,{value:2},"cond 2 : 6\u4eba\u573a\u80dc\u7387\uff08\u7edf\u8ba150\u5c40\uff09"),f.a.createElement(j,{value:1},"cond 1 : 2\u4eba\u573a\u80dc\u7387\uff08\u7edf\u8ba150\u5c40\uff09"))),f.a.createElement(g.a.Item,{label:"\u65b9\u6848",name:"plan",rules:[{required:!0,message:" "}]},f.a.createElement(O.a,null,f.a.createElement(j,{value:1},"\u7ed9\u76ee\u6807\u73a9\u5bb6\u914d\u724c"),f.a.createElement(j,{value:2},"\u7ed9\u76ee\u6807\u73a9\u5bb6\u7684\u5bf9\u624b\u914d\u724c"))),o&&f.a.createElement(g.a.Item,{label:"\u767d\u540d\u5355(,\u5206\u9694)",name:"white_list",rules:[{required:!0,message:"Choose Email type!"}]},f.a.createElement(h.a.TextArea,null)),f.a.createElement(g.a.Item,{label:"\u6709\u6548\u6b21\u6570",name:"times",rules:[{required:!0,message:" "}]},f.a.createElement(h.a,{style:{width:"60%"}})),f.a.createElement(g.a.Item,{label:"\u662f\u5426\u5f00\u542f",name:"enable",rules:[{required:!0,message:" "}]},f.a.createElement(O.a,{defaultValue:0},f.a.createElement(j,{value:0},"\u5f00\u542f"),f.a.createElement(j,{value:1},"\u5173\u95ed"))),f.a.createElement(g.a.List,{name:"conf"},(function(e,t){var a=t.add,r=t.remove;return f.a.createElement(f.a.Fragment,null,e.map((function(e){return f.a.createElement(n.b,{key:e.key,style:{display:"flex",marginBottom:8},align:"start"},f.a.createElement(g.a.Item,Object.assign({},S,{label:f.a.createElement("span",{style:{fontSize:"12px"}},"\u5f00\u59cb\u533a\u95f4")},e,{name:[e.name,"start"],fieldKey:[e.fieldKey,"start"],rules:[{required:!0,message:"Missing first name"}]}),f.a.createElement(h.a,{placeholder:"\u5f00\u59cb\u80dc\u7387\uff08\u5927\u4e8e\u7b49\u4e8e\uff09"})),f.a.createElement(g.a.Item,Object.assign({},S,{label:f.a.createElement("span",{style:{fontSize:"12px"}},"\u7ed3\u675f\u533a\u95f4")},e,{name:[e.name,"end"],fieldKey:[e.fieldKey,"end"],rules:[{required:!0,message:"Missing last name"}]}),f.a.createElement(h.a,{placeholder:"\u7ed3\u675f\u80dc\u7387\uff08\u5c0f\u4e8e\uff09"})),f.a.createElement(g.a.Item,Object.assign({},S,{label:"point\u5206\u6570"},e,{name:[e.name,"score"],fieldKey:[e.fieldKey,"score"],rules:[{required:!0,message:"Missing last name"}]}),f.a.createElement(h.a,{placeholder:"\u6700\u5927\u5206\u6570"})),f.a.createElement(g.a.Item,Object.assign({},S,{label:"10card\u5206\u6570"},e,{name:[e.name,"ten"],fieldKey:[e.fieldKey,"ten"],rules:[{required:!0,message:"Missing last name"}]}),f.a.createElement(h.a,{placeholder:"\u6700\u5927\u5206\u6570"})),f.a.createElement(g.a.Item,Object.assign({},S,{label:"\u63a7\u724c\u6982\u7387%"},e,{name:[e.name,"ratio"],fieldKey:[e.fieldKey,"ratio"],rules:[{required:!0,message:"Missing last name"}]}),f.a.createElement(h.a,{placeholder:"\u89e6\u53d1\u6982\u7387%"})),f.a.createElement(x.a,{onClick:function(){r(e.name)}}))})),f.a.createElement(g.a.Item,null,f.a.createElement(l.a,{type:"dashed",onClick:function(){a()},block:!0},f.a.createElement(w.a,null)," Add field")))})),f.a.createElement(g.a.Item,{style:{textAlign:"center"}},f.a.createElement(n.b,null,f.a.createElement(l.a,{type:"primary",onClick:N},"\u4fdd\u5b58"),f.a.createElement(l.a,{type:"primary",onClick:q,danger:!0},"\u5220\u9664")))))};t.default=function(e){var t=Object(d.useState)([]),a=Object(m.a)(t,2),o=a[0],v=a[1],E=function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/balance/config",{params:t});case 2:if(0===(a=e.sent).code){e.next=5;break}return e.abrupt("return");case 5:v(a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){E()}),[]);var y=function(){i.b.success("\u64cd\u4f5c\u6210\u529f"),E()};return f.a.createElement(p.a,{title:"\u73a9\u5bb6\u63a7\u724c\u914d\u7f6e"},f.a.createElement(n.b,{direction:"vertical",style:{width:"100%"}},f.a.createElement(l.a,{type:"primary",onClick:function(){if(o.length>0&&0===o[0].id)return i.b.error("\u4e00\u6b21\u53ea\u80fd\u6dfb\u52a0\u4e00\u6761");v([{id:0}].concat(o))}},"\u65b0\u589e"),f.a.createElement(r.a,{gutter:16,style:{background:"#ececec"}},o.map((function(e,t){return f.a.createElement(c.a,{key:e.id,span:12},f.a.createElement(C,{onOk:y,data:e}))})))))}},518:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(6),r=a.n(n),c=a(5),l=a.n(c),i=a(16),o=a.n(i),s=a(0),u=a(4),m=a.n(u),d=a(63),f=a(123);function p(e){var t=e.className,a=e.direction,n=e.index,c=e.marginDirection,i=e.children,o=e.split,u=e.wrap,m=s.useContext(v),d=m.horizontalSize,f=m.verticalSize,p=m.latestIndex,b={};return"vertical"===a?n<p&&(b={marginBottom:d/(o?2:1)}):b=r()(r()({},n<p&&l()({},c,d/(o?2:1))),u&&{paddingBottom:f}),null===i||void 0===i?null:s.createElement(s.Fragment,null,s.createElement("div",{className:t,style:b},i),n<p&&o&&s.createElement("span",{className:"".concat(t,"-split"),style:b},o))}var b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},v=s.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),E={small:8,middle:16,large:24};t.b=function(e){var t,a=s.useContext(f.b),n=a.getPrefixCls,c=a.space,i=a.direction,u=e.size,y=void 0===u?(null===c||void 0===c?void 0:c.size)||"small":u,g=e.align,h=e.className,O=e.children,x=e.direction,w=void 0===x?"horizontal":x,j=e.prefixCls,k=e.split,S=e.style,C=e.wrap,I=void 0!==C&&C,N=b(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),q=s.useMemo((function(){return(Array.isArray(y)?y:[y,y]).map((function(e){return function(e){return"string"===typeof e?E[e]:e||0}(e)}))}),[y]),z=o()(q,2),K=z[0],_=z[1],A=Object(d.a)(O,{keepEmpty:!0});if(0===A.length)return null;var M=void 0===g&&"horizontal"===w?"center":g,F=n("space",j),J=m()(F,"".concat(F,"-").concat(w),(t={},l()(t,"".concat(F,"-rtl"),"rtl"===i),l()(t,"".concat(F,"-align-").concat(M),M),t),h),P="".concat(F,"-item"),B="rtl"===i?"marginLeft":"marginRight",D=0,T=A.map((function(e,t){return null!==e&&void 0!==e&&(D=t),s.createElement(p,{className:P,key:"".concat(P,"-").concat(t),direction:w,index:t,marginDirection:B,split:k,wrap:I},e)}));return s.createElement("div",r()({className:J,style:r()(r()({},I&&{flexWrap:"wrap",marginBottom:-_}),S)},N),s.createElement(v.Provider,{value:{horizontalSize:K,verticalSize:_,latestIndex:D}},T))}},519:function(e,t,a){"use strict";a(55),a(599)},599:function(e,t,a){},605:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(175);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c,l=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,c=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw c}}}}}}]);