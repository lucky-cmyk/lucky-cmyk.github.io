(this.webpackJsonpruby_rummy_web=this.webpackJsonpruby_rummy_web||[]).push([[32],{1589:function(e,t,a){"use strict";a.r(t);a(561);var n=a(562),r=(a(156),a(61)),c=(a(182),a(80)),i=a(617),o=a(62),l=a(4),s=a.n(l),u=a(8),f=a(79),m=a(0),d=a.n(m),b=a(85),h=a(116),p=a(545),O=a(605),y=a(546),v=(a(553),a(554)),g=(a(530),a(529)),j=(a(305),a(82)),E=(a(544),a(543)),S=(a(304),a(157)),x=a(306);a(614);var C=function(e){S.a.TextArea,E.a.Option,x.a.RangePicker;var t=e.data,a=e.visible,n=e.onCancel,c=e.onOk,i=Object(m.useState)([]),l=Object(f.a)(i,2),s=l[0],u=l[1],b=j.a.useForm(),h=Object(f.a)(b,1)[0];return Object(m.useEffect)((function(){u(t)}),[t]),Object(m.useEffect)((function(){console.log("Form data initial",s),h.resetFields()}),[s]),d.a.createElement(v.a,{visible:a,title:"\u63d0\u6b3e\u81ea\u52a8\u5ba1\u6279\u5371\u9669\u533a\u57df",maskClosable:!1,closable:!1,getContainer:!1,footer:null},d.a.createElement(j.a,{form:h,name:"form_in_modal",initialValues:s},d.a.createElement(j.a.Item,{label:"\u90a6",name:"state",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90a6!"}]},d.a.createElement(S.a,{style:{width:"60%"}})),d.a.createElement(j.a.Item,{label:"\u57ce\u5e02",name:"city",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u57ce\u5e02"}]},d.a.createElement(S.a,{style:{width:"60%"}})),d.a.createElement(j.a.Item,null,d.a.createElement(g.b,null,d.a.createElement(r.a,{type:"primary",htmlType:"submit",onClick:function(){var e=h.getFieldsValue();console.log("submitData:",e);var a=Object(o.a)(Object(o.a)({},t),e);c(a)}},"\u786e\u5b9a"),d.a.createElement(r.a,{htmlType:"button",onClick:n},"\u53d6\u6d88")))))};t.default=function(){var e=Object(m.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],v=Object(m.useState)(!1),g=Object(f.a)(v,2),j=(g[0],g[1]),E=Object(m.useState)(!1),S=Object(f.a)(E,2),x=S[0],k=S[1],D=Object(m.useState)([]),T=Object(f.a)(D,2),w=T[0],$=T[1],P=function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.gb)(t);case 2:a=e.sent,console.log("list----\x3e",a),l(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e,t){$(e),k(!0)},M=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r,u,f,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(!0),!t.id){e.next=18;break}return e.next=4,Object(b.Gb)(t.id,Object(o.a)({},t));case 4:if(n=e.sent,j(!1),0!==n.code){e.next=14;break}r=Object(i.a)(a),u=r.findIndex((function(e){return t.id===e.id})),f=r[u],r.splice(u,1,Object(o.a)(Object(o.a)({},f),t)),l(r),e.next=16;break;case 14:return c.b.error(n.err),e.abrupt("return");case 16:e.next=28;break;case 18:return e.next=20,Object(b.t)(Object(o.a)({},t));case 20:if(m=e.sent,j(!1),0!==m.code){e.next=26;break}l([Object(o.a)(Object(o.a)({},t),{},{id:m.data.id,key:m.data.id,log_time:m.data.log_time})].concat(Object(i.a)(a))),e.next=28;break;case 26:return c.b.error(m.err),e.abrupt("return");case 28:k(!1);case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.K)(t.id,t);case 2:if(0===(n=e.sent).code){e.next=6;break}return c.b.error(n.err),e.abrupt("return");case 6:r=Object(i.a)(a),l(r.filter((function(e){return e.id!==t.id})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=[Object(o.a)({title:"ID",key:"id",dataIndex:"id"},Object(O.a)("id")),{title:"State",dataIndex:"state"},{title:"City",dataIndex:"city"},{title:"Operating time",dataIndex:"log_time",render:function(e){return y.a.unix(e).utc().utcOffset(330).format("YYYY-MM-DD HH:mm:ss")}},{title:"Operation",dataIndex:"operation",align:"center",render:function(e,t,a){return d.a.createElement("span",null,d.a.createElement(r.a,{type:"link",onClick:function(){return Y(t)}},"\u7f16\u8f91"),d.a.createElement(n.a,{title:"Sure to delete?",onConfirm:function(){return N(t)}},d.a.createElement(r.a,{type:"link"},"\u5220\u9664")))}}];return d.a.createElement(h.a,{title:"Auto Review Danger Area"},d.a.createElement(r.a,{type:"primary",onClick:function(){return Y()}},"\u65b0\u589e"),d.a.createElement(p.a,{columns:H,fetchApi:P,data:a}),d.a.createElement(C,{data:w,visible:x,onOk:M,onCancel:function(){k(!1)}}))}},533:function(e,t,a){"use strict";a(46),a(540)},534:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(0),i=a(6),o=a.n(i),l=a(54),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){return c.createElement(l.a,null,(function(t){var a,i=t.getPrefixCls,l=t.direction,u=e.prefixCls,f=e.type,m=void 0===f?"horizontal":f,d=e.orientation,b=void 0===d?"center":d,h=e.className,p=e.children,O=e.dashed,y=e.plain,v=s(e,["prefixCls","type","orientation","className","children","dashed","plain"]),g=i("divider",u),j=b.length>0?"-".concat(b):b,E=!!p,S=o()(g,"".concat(g,"-").concat(m),(a={},Object(r.a)(a,"".concat(g,"-with-text"),E),Object(r.a)(a,"".concat(g,"-with-text").concat(j),E),Object(r.a)(a,"".concat(g,"-dashed"),!!O),Object(r.a)(a,"".concat(g,"-plain"),!!y),Object(r.a)(a,"".concat(g,"-rtl"),"rtl"===l),a),h);return c.createElement("div",Object(n.a)({className:S},v,{role:"separator"}),p&&c.createElement("span",{className:"".concat(g,"-inner-text")},p))}))}},540:function(e,t,a){},545:function(e,t,a){"use strict";a(558);var n=a(557),r=(a(530),a(529)),c=(a(533),a(534)),i=(a(156),a(61)),o=a(4),l=a.n(o),s=a(8),u=a(62),f=a(79),m=a(0),d=a.n(m),b=a(306).a.RangePicker;t.a=Object(m.memo)((function(e){var t=e.fetchApi,a=e.columns,o=e.forceUpdate,h=e.data,p=e.rangeSearch,O=e.components,y=e.current,v=e.total,g=e.pageSize,j=e.showTotal,E=e.rowSelection,S=p&&p.rangeTime?[p.rangeTime[0].format(p.layout||"YYYY-MM-DD HH:mm:ss"),p.rangeTime[1].format(p.layout||"YYYY-MM-DD HH:mm:ss")]:null,x=Object(m.useState)(!1),C=Object(f.a)(x,2),k=C[0],D=C[1],T=Object(m.useState)({current:1,pageSize:g||20,total:v||1e5,showTotal:j}),w=Object(f.a)(T,2),$=w[0],P=w[1],Y=Object(m.useState)({}),M=Object(f.a)(Y,2),N=M[0],H=M[1],I=Object(m.useState)([]),U=Object(f.a)(I,2),A=U[0],K=U[1],z=Object(m.useState)(S),J=Object(f.a)(z,2),R=J[0],_=J[1],B=Object(m.useState)(!R),V=Object(f.a)(B,2),F=V[0],L=V[1],G=Object(m.useState)(p?p.rangeTime||[]:null),q=Object(f.a)(G,2),W=q[0],Z=q[1],Q=h.map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{key:t+1})})),X=function(){var e=Object(s.a)(l.a.mark((function e(a,n,r){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),c={page:a.current,pageSize:a.pageSize,filters:n},R&&(c.startTime=R[0],c.endTime=R[1]),r.length>0&&(c.sorter=r[0]),console.log("rangeTime",R,c),e.next=7,t(c);case 7:D(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){P(Object(u.a)(Object(u.a)({},$),{},{total:v||1e4}))}),[v]),Object(m.useEffect)((function(){X($,N,A),y&&y($)}),[N,o,A,g,$.current]),d.a.createElement(d.a.Fragment,null,p&&d.a.createElement(r.b,null,d.a.createElement(b,{disabledDate:function(e){if(!W||0===W.length||!p||!p.rangeDays)return!1;var t=W[0]&&e.diff(W[0],"days")>=p.rangeDays;return W[1]&&W[1].diff(e,"days")>=p.rangeDays||t},defaultValue:p.rangeTime||null,format:p.layout||"YYYY-MM-DD HH:mm:ss",showTime:p.showTime||!1,onChange:function(e,t){_(t),L(!e)},onCalendarChange:function(e){return Z(e)}}),d.a.createElement(i.a,{type:"primary",onClick:function(){return X($,N,A)},disabled:F},"Inquire"),d.a.createElement(c.a,{dashed:!0})),d.a.createElement(n.a,{rowSelection:E,components:O,scroll:{x:!0},bordered:!0,loading:k,pagination:$,columns:a,dataSource:Q,onChange:function(e,t,a){console.log("handleTableChange:",e,t,a),P(e),H(t),a.order?K([{key:a.columnKey,order:"ascend"===a.order?"asc":"desc"}]):K([])}}))}),(function(e,t){return JSON.stringify(e.data)===JSON.stringify(t.data)&&JSON.stringify(e.columns)===JSON.stringify(t.columns)&&e.forceUpdate==t.forceUpdate}))},546:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(81),r=a.n(n),c=a(559);r.a.extend(c);var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return r.a.unix(e).utc().utcOffset(330).format(t)};t.a=r.a},555:function(e,t,a){"use strict";a(46),a(566)},559:function(e,t,a){e.exports=function(){"use strict";return function(e,t,a){var n=t.prototype;a.utc=function(e){return new t({date:e,utc:!0,args:arguments})},n.utc=function(e){var t=a(this.toDate(),{locale:this.$L,utc:!0});return e?t.add(this.utcOffset(),"minute"):t},n.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var r=n.parse;n.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),r.call(this,e)};var c=n.init;n.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else c.call(this)};var i=n.utcOffset;n.utcOffset=function(e,t){var a=this.$utils().u;if(a(e))return this.$u?0:a(this.$offset)?i.call(this):this.$offset;var n=Math.abs(e)<=16?60*e:e,r=this;if(t)return r.$offset=n,r.$u=0===e,r;if(0!==e){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(r=this.local().add(n+c,"minute")).$offset=n,r.$x.$localOffset=c}else r=this.utc();return r};var o=n.format;n.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return o.call(this,t)},n.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*e},n.isUTC=function(){return!!this.$u},n.toISOString=function(){return this.toDate().toISOString()},n.toString=function(){return this.toDate().toUTCString()};var l=n.toDate;n.toDate=function(e){return"s"===e&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var s=n.diff;n.diff=function(e,t,n){if(e&&this.$u===e.$u)return s.call(this,e,t,n);var r=this.local(),c=a(e).local();return s.call(r,c,t,n)}}}()},560:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e?"function"===typeof e?e():e:null}},561:function(e,t,a){"use strict";a(46),a(555),a(156),a(567)},562:function(e,t,a){"use strict";var n=a(2),r=a(7),c=a(0),i=a(6),o=a.n(i),l=a(32),s=a(87),u=a(16),f=a(117),m=a(61),d=a(185),b=a(84),h=a(68),p=a(54),O=a(560),y=a(21),v=a(118),g=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},j=c.forwardRef((function(e,t){var a=Object(l.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),i=Object(r.a)(a,2),s=i[0],j=i[1],E=function(t,a){var n;j(t),null===(n=e.onVisibleChange)||void 0===n||n.call(e,t,a)},S=function(t){var a;E(!1,t),null===(a=e.onConfirm)||void 0===a||a.call(void 0,t)},x=function(t){var a;E(!1,t),null===(a=e.onCancel)||void 0===a||a.call(void 0,t)},C=c.useContext(p.b).getPrefixCls,k=e.prefixCls,D=e.placement,T=e.children,w=e.overlayClassName,$=g(e,["prefixCls","placement","children","overlayClassName"]),P=C("popover",k),Y=C("popconfirm",k),M=o()(Y,w),N=c.createElement(b.a,{componentName:"Popconfirm",defaultLocale:h.a.Popconfirm},(function(t){return function(t,a){var r=e.okButtonProps,i=e.cancelButtonProps,o=e.title,l=e.cancelText,s=e.okText,u=e.okType,f=e.icon;return c.createElement("div",{className:"".concat(t,"-inner-content")},c.createElement("div",{className:"".concat(t,"-message")},f,c.createElement("div",{className:"".concat(t,"-message-title")},Object(O.a)(o))),c.createElement("div",{className:"".concat(t,"-buttons")},c.createElement(m.a,Object(n.a)({onClick:x,size:"small"},i),l||a.cancelText),c.createElement(m.a,Object(n.a)({onClick:S},Object(d.a)(u),{size:"small"},r),s||a.okText)))}(P,t)})),H=C();return c.createElement(f.a,Object(n.a)({},$,{prefixCls:P,placement:D,onVisibleChange:function(t){e.disabled||E(t)},visible:s,overlay:N,overlayClassName:M,ref:t,transitionName:Object(v.b)(H,"zoom-big",e.transitionName)}),Object(y.a)(T,{onKeyDown:function(e){var t,a;c.isValidElement(T)&&(null===(a=null===T||void 0===T?void 0:(t=T.props).onKeyDown)||void 0===a||a.call(t,e)),function(e){e.keyCode===u.a.ESC&&s&&E(!1,e)}(e)}}))}));j.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:c.createElement(s.a,null),disabled:!1},t.a=j},566:function(e,t,a){},567:function(e,t,a){},605:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a(530);var n=a(529),r=(a(156),a(61)),c=(a(304),a(157)),i=a(138),o=a(0),l=a.n(o),s=function(e,t,a){t(),a&&(console.log("handleSearch-dataIndex:",a),console.log("handleSearch-selectedKeys:",e))},u=function(e){return{filterDropdown:function(t){var a=t.setSelectedKeys,o=t.selectedKeys,u=t.confirm,f=t.clearFilters;return l.a.createElement("div",{style:{padding:8}},l.a.createElement(c.a,{placeholder:"Search ".concat(e),value:o[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return s(o,u,e)},style:{width:188,marginBottom:8,display:"block"}}),l.a.createElement(n.b,null,l.a.createElement(r.a,{type:"primary",onClick:function(){return s(o,u,e)},icon:l.a.createElement(i.a,null),size:"small",style:{width:90}},"Search"),l.a.createElement(r.a,{onClick:function(){return f()},size:"small",style:{width:90}},"Reset")))},filterIcon:function(e){return l.a.createElement(i.a,{style:{color:e?"#1890ff":void 0}})}}}},614:function(e,t,a){"use strict";t.a=["Andhra Pradesh(AP)","Arunachal Pradesh(AR)","Assam(AS)","Bihar(BR)","Chandigarh","Chhattisgarh(CG)","Dadraand Nagar Haveli(DN)","Daman and Diu(DD)","Delhi(DL)","Goa(GA)","Gujarat(GJ)","Haryana(HR)","Himachal Pradesh(HP)","Jammu and Kashmir(JK)","Jharkhand(JH)","Karnataka(KA)","Kerala(KL)","Madhya Pradesh(MP)","Maharashtra(MH)","Manipur(MN)","Meghalaya(ML)","Nagaland(NL)","Orissa(OR)","Pondicherry(Puducherry)(PY)","Punjab(PB)","Rajasthan(RJ)","Sikkim(SK)","Tamil Nadu(TN)","Tripura(TR)","Telangana","Uttar Pradesh(UP)","Uttarakhand(UK)","West Bengal(WB)"]},617:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(160);var r=a(184);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);