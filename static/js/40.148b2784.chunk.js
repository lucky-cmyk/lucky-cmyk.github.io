(this.webpackJsonpruby_rummy_web=this.webpackJsonpruby_rummy_web||[]).push([[40],{1551:function(e,t,n){"use strict";n.r(t);var r=n(62),a=n(4),c=n.n(a),o=n(8),i=n(79),s=n(0),u=n.n(s),l=n(116),f=n(545),d=n(546),p=n(9),m=n(86),b=n(605),g=n(578);t.default=function(e){var t=Object(s.useState)([]),n=Object(i.a)(t,2),a=n[0],y=n[1],O=Object(s.useState)(30),v=Object(i.a)(O,2),h=v[0],j=v[1],x=function(){var e=Object(o.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/user/getWithdrawRanking",{params:t});case 2:if(0!==(n=e.sent).data.total){e.next=5;break}return e.abrupt("return",y([]));case 5:n&&0===n.code&&(j(0|n.data.total),y(n.data.listdata));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=[Object(r.a)(Object(r.a)({title:"UID",dataIndex:"uid"},Object(b.a)("uid")),{},{render:function(e){return u.a.createElement(m.b,{to:"/user/userInfo?uid=".concat(e)},e)}}),{title:"totalAmount",dataIndex:"totalAmount",sorter:!0,render:function(e){return Object(g.a)(e)}}];return u.a.createElement(l.a,{title:"\u63d0\u73b0\u6392\u884c\u699c"},u.a.createElement(f.a,{rangeSearch:{showTime:!0,rangeDays:30,rangeTime:[Object(d.a)().startOf("day"),Object(d.a)().endOf("day")]},columns:S,fetchApi:x,data:a,total:h}))}},529:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(2),a=n(3),c=n(7),o=n(0),i=n(6),s=n.n(i),u=n(56),l=n(54);function f(e){var t=e.className,n=e.direction,c=e.index,i=e.marginDirection,s=e.children,u=e.split,l=e.wrap,f=o.useContext(p),d=f.horizontalSize,m=f.verticalSize,b=f.latestIndex,g={};return"vertical"===n?c<b&&(g={marginBottom:d/(u?2:1)}):g=Object(r.a)(Object(r.a)({},c<b&&Object(a.a)({},i,d/(u?2:1))),l&&{paddingBottom:m}),null===s||void 0===s?null:o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:g},s),c<b&&u&&o.createElement("span",{className:"".concat(t,"-split"),style:g},u))}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},p=o.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),m={small:8,middle:16,large:24};t.b=function(e){var t,n=o.useContext(l.b),i=n.getPrefixCls,b=n.space,g=n.direction,y=e.size,O=void 0===y?(null===b||void 0===b?void 0:b.size)||"small":y,v=e.align,h=e.className,j=e.children,x=e.direction,S=void 0===x?"horizontal":x,w=e.prefixCls,k=e.split,E=e.style,I=e.wrap,C=void 0!==I&&I,N=d(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),z=o.useMemo((function(){return(Array.isArray(O)?O:[O,O]).map((function(e){return function(e){return"string"===typeof e?m[e]:e||0}(e)}))}),[O]),K=Object(c.a)(z,2),T=K[0],D=K[1],P=Object(u.a)(j,{keepEmpty:!0});if(0===P.length)return null;var Y=void 0===v&&"horizontal"===S?"center":v,A=i("space",w),_=s()(A,"".concat(A,"-").concat(S),(t={},Object(a.a)(t,"".concat(A,"-rtl"),"rtl"===g),Object(a.a)(t,"".concat(A,"-align-").concat(Y),Y),t),h),R="".concat(A,"-item"),M="rtl"===g?"marginLeft":"marginRight",B=0,H=P.map((function(e,t){return null!==e&&void 0!==e&&(B=t),o.createElement(f,{className:R,key:"".concat(R,"-").concat(t),direction:S,index:t,marginDirection:M,split:k,wrap:C},e)}));return o.createElement("div",Object(r.a)({className:_,style:Object(r.a)(Object(r.a)({},C&&{flexWrap:"wrap",marginBottom:-D}),E)},N),o.createElement(p.Provider,{value:{horizontalSize:T,verticalSize:D,latestIndex:B}},H))}},530:function(e,t,n){"use strict";n(46),n(610)},533:function(e,t,n){"use strict";n(46),n(540)},534:function(e,t,n){"use strict";var r=n(2),a=n(3),c=n(0),o=n(6),i=n.n(o),s=n(54),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){return c.createElement(s.a,null,(function(t){var n,o=t.getPrefixCls,s=t.direction,l=e.prefixCls,f=e.type,d=void 0===f?"horizontal":f,p=e.orientation,m=void 0===p?"center":p,b=e.className,g=e.children,y=e.dashed,O=e.plain,v=u(e,["prefixCls","type","orientation","className","children","dashed","plain"]),h=o("divider",l),j=m.length>0?"-".concat(m):m,x=!!g,S=i()(h,"".concat(h,"-").concat(d),(n={},Object(a.a)(n,"".concat(h,"-with-text"),x),Object(a.a)(n,"".concat(h,"-with-text").concat(j),x),Object(a.a)(n,"".concat(h,"-dashed"),!!y),Object(a.a)(n,"".concat(h,"-plain"),!!O),Object(a.a)(n,"".concat(h,"-rtl"),"rtl"===s),n),b);return c.createElement("div",Object(r.a)({className:S},v,{role:"separator"}),g&&c.createElement("span",{className:"".concat(h,"-inner-text")},g))}))}},540:function(e,t,n){},545:function(e,t,n){"use strict";n(558);var r=n(557),a=(n(530),n(529)),c=(n(533),n(534)),o=(n(156),n(61)),i=n(4),s=n.n(i),u=n(8),l=n(62),f=n(79),d=n(0),p=n.n(d),m=n(306).a.RangePicker;t.a=Object(d.memo)((function(e){var t=e.fetchApi,n=e.columns,i=e.forceUpdate,b=e.data,g=e.rangeSearch,y=e.components,O=e.current,v=e.total,h=e.pageSize,j=e.showTotal,x=e.rowSelection,S=g&&g.rangeTime?[g.rangeTime[0].format(g.layout||"YYYY-MM-DD HH:mm:ss"),g.rangeTime[1].format(g.layout||"YYYY-MM-DD HH:mm:ss")]:null,w=Object(d.useState)(!1),k=Object(f.a)(w,2),E=k[0],I=k[1],C=Object(d.useState)({current:1,pageSize:h||20,total:v||1e5,showTotal:j}),N=Object(f.a)(C,2),z=N[0],K=N[1],T=Object(d.useState)({}),D=Object(f.a)(T,2),P=D[0],Y=D[1],A=Object(d.useState)([]),_=Object(f.a)(A,2),R=_[0],M=_[1],B=Object(d.useState)(S),H=Object(f.a)(B,2),J=H[0],U=H[1],F=Object(d.useState)(!J),W=Object(f.a)(F,2),G=W[0],L=W[1],V=Object(d.useState)(g?g.rangeTime||[]:null),q=Object(f.a)(V,2),Q=q[0],X=q[1],Z=b.map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{key:t+1})})),$=function(){var e=Object(u.a)(s.a.mark((function e(n,r,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),c={page:n.current,pageSize:n.pageSize,filters:r},J&&(c.startTime=J[0],c.endTime=J[1]),a.length>0&&(c.sorter=a[0]),console.log("rangeTime",J,c),e.next=7,t(c);case 7:I(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){K(Object(l.a)(Object(l.a)({},z),{},{total:v||1e4}))}),[v]),Object(d.useEffect)((function(){$(z,P,R),O&&O(z)}),[P,i,R,h,z.current]),p.a.createElement(p.a.Fragment,null,g&&p.a.createElement(a.b,null,p.a.createElement(m,{disabledDate:function(e){if(!Q||0===Q.length||!g||!g.rangeDays)return!1;var t=Q[0]&&e.diff(Q[0],"days")>=g.rangeDays;return Q[1]&&Q[1].diff(e,"days")>=g.rangeDays||t},defaultValue:g.rangeTime||null,format:g.layout||"YYYY-MM-DD HH:mm:ss",showTime:g.showTime||!1,onChange:function(e,t){U(t),L(!e)},onCalendarChange:function(e){return X(e)}}),p.a.createElement(o.a,{type:"primary",onClick:function(){return $(z,P,R)},disabled:G},"Inquire"),p.a.createElement(c.a,{dashed:!0})),p.a.createElement(r.a,{rowSelection:x,components:y,scroll:{x:!0},bordered:!0,loading:E,pagination:z,columns:n,dataSource:Z,onChange:function(e,t,n){console.log("handleTableChange:",e,t,n),K(e),Y(t),n.order?M([{key:n.columnKey,order:"ascend"===n.order?"asc":"desc"}]):M([])}}))}),(function(e,t){return JSON.stringify(e.data)===JSON.stringify(t.data)&&JSON.stringify(e.columns)===JSON.stringify(t.columns)&&e.forceUpdate==t.forceUpdate}))},546:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(81),a=n.n(r),c=n(559);a.a.extend(c);var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return a.a.unix(e).utc().utcOffset(330).format(t)};t.a=a.a},556:function(e,t){},563:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function e(t,n){var r,a=0,c=[],o=sessionStorage;for(r in o)0===r.indexOf("pic_")&&(c.push(r),a+=o.getItem(r).length);(a/1024).toFixed(2)>500&&c.length>0&&(sessionStorage.removeItem(c[0]),e(t,n)),sessionStorage.setItem("pic_"+t,n)},a=function(e){return sessionStorage.getItem("pic_"+e)}},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return b}));var r=n(4),a=n.n(r),c=n(8),o=n(609),i=n(580),s=(n(0),n(563)),u=n(47),l=u.a.getState().cdnUrl,f=u.a.getState().s3Enable,d=function(e){return e/100||0},p=function(e){return o.a[e]||""},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=Number(100*e).toFixed(t);return n+="%"},b=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o,u,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if("http"!==t.substr(0,4)){e.next=4;break}return e.abrupt("return",t);case 4:if(f){e.next=6;break}return e.abrupt("return",l+"/"+t);case 6:if(!(r=Object(s.b)(t))){e.next=9;break}return e.abrupt("return",r);case 9:return c=t,o=null,e.prev=11,e.next=14,Object(i.b)(c,n);case 14:o=e.sent,e.next=21;break;case 17:e.prev=17,e.t0=e.catch(11),o=null,console.error("download failed ,"+e.t0);case 21:if(null!=o){e.next=23;break}return e.abrupt("return","");case 23:return u=t.substr(t.lastIndexOf(".")+1),d="data:image/"+u+";base64,"+g(o),Object(s.a)(t,d),e.abrupt("return",d);case 27:case"end":return e.stop()}}),e,null,[[11,17]])})));return function(t,n){return e.apply(this,arguments)}}();function g(e){var t=e.reduce((function(e,t){return e+String.fromCharCode(t)}),"");return btoa(t).replace(/.{76}(?=.)/g,"$&\n")}},580:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return S}));n(182);var r=n(80),a=n(4),c=n.n(a),o=n(8),i=n(9),s=n(81),u=n.n(s),l=n(620),f=n.n(l);var d=function(e){return f.a.MD5(e).toString()},p=n(47),m=n(563),b=n(559);u.a.extend(b);var g=n(622),y=(n(623),p.a.getState().s3Enable);function O(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/user/awssts",{params:t});case 2:return n=e.sent,r=n.data,a={region:r.region,accessKeyId:r.access_key_id,secretAccessKey:r.secret_access_key,session_token:r.session_token,bucket:r.bucket,appName:r.app_name,acl:r.acl},e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g.config.update({region:"ap-southeast-1",accessKeyId:"ASIAS2REQI3OBOWXO6R2",secretAccessKey:"YKvObUARB+Ik4wcjmHYGn7M2PR/dV8RZ6/GoAIo8"});new g.S3;function h(e,t){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(c.a.mark((function e(t,n){var r,a,o,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.length>2&&void 0!==i[2]?i[2]:"",a=Object(m.b)("accessKeyId"),o=JSON.parse(a)){e.next=8;break}return e.next=6,O(n);case 6:o=e.sent,Object(m.a)("accessKeyId",JSON.stringify(o));case 8:return-1!==t.indexOf("poker")&&o.appName&&(t=o.appName+t),g.config.update({region:o.region,accessKeyId:o.accessKeyId,secretAccessKey:o.secretAccessKey}),g.config.credentials.sessionToken=o.session_token,e.abrupt("return",new Promise((function(e,n){var a={Bucket:o.bucket,Key:r+t};(new g.S3).getObject(a,(function(t,r){t&&n(t),r&&e(r.Body)}))})));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){var e=Object(o.a)(c.a.mark((function e(t,n,r){var a,o,i,s,l,f,p=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>3&&void 0!==p[3]?p[3]:"",e.next=3,O({appid:r});case 3:return o=e.sent,g.config.update({region:o.region,accessKeyId:o.accessKeyId,secretAccessKey:o.secretAccessKey}),i=n.lastIndexOf("."),s=n.substr(i),l=n.substr(0,i),f=o.appName+"/images/"+a+u.a.utc().unix()+d(l)+s,g.config.credentials.sessionToken=o.session_token,e.abrupt("return",new Promise((function(e,n){var r={Bucket:o.bucket,Key:f,Body:t,ACL:o.acl};(new g.S3).upload(r,null,(function(t,r){t?n(t):e(f)}))})));case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();function S(e,t,n){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(c.a.mark((function e(t,n,a){var o,i,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=s.length>3&&void 0!==s[3]?s[3]:"",y){e.next=3;break}return e.abrupt("return","false");case 3:return i=null,e.prev=4,e.next=7,x(t,n,a,o);case 7:i=e.sent,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(4),console.error(e.t0),r.b.error("upload failed");case 14:return e.prev=14,e.finish(14);case 16:return e.abrupt("return",i);case 17:case"end":return e.stop()}}),e,null,[[4,10,14,16]])})))).apply(this,arguments)}},605:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(530);var r=n(529),a=(n(156),n(61)),c=(n(304),n(157)),o=n(138),i=n(0),s=n.n(i),u=function(e,t,n){t(),n&&(console.log("handleSearch-dataIndex:",n),console.log("handleSearch-selectedKeys:",e))},l=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,i=t.selectedKeys,l=t.confirm,f=t.clearFilters;return s.a.createElement("div",{style:{padding:8}},s.a.createElement(c.a,{placeholder:"Search ".concat(e),value:i[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return u(i,l,e)},style:{width:188,marginBottom:8,display:"block"}}),s.a.createElement(r.b,null,s.a.createElement(a.a,{type:"primary",onClick:function(){return u(i,l,e)},icon:s.a.createElement(o.a,null),size:"small",style:{width:90}},"Search"),s.a.createElement(a.a,{onClick:function(){return f()},size:"small",style:{width:90}},"Reset")))},filterIcon:function(e){return s.a.createElement(o.a,{style:{color:e?"#1890ff":void 0}})}}}},609:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),t.a={1:"Points Rummy",2:"Pool Rummy",3:"Ten Cards"};var r=[{ttype:1,name:"Points Rummy"},{ttype:2,name:"Pool Rummy"},{ttype:3,name:"Ten Cards"}]},610:function(e,t,n){},621:function(e,t){}}]);