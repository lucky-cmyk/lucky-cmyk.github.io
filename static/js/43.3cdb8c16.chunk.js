(this.webpackJsonpruby_rummy_web=this.webpackJsonpruby_rummy_web||[]).push([[43],{1617:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(9),o=n(84),s=n(0),i=n.n(s),u=n(535),l=n(10),d=n(111),p=n(534),f=n(567),m=n(88);t.default=function(){var e=Object(s.useState)({data:[],total:0}),t=Object(o.a)(e,2),n=t[0],r=t[1],b=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/user/getUserRank",{params:t});case 2:0===(n=e.sent).code&&r({total:n.data.total,data:n.data.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=[{title:"User ID",dataIndex:"uid",key:"uid",render:function(e){return i.a.createElement(m.b,{to:"/user/userInfo?uid=".concat(e)},e)}},{title:"User name",dataIndex:"uname"},{title:"\u6ce8\u518c\u65f6\u95f4",key:"reg_time",dataIndex:"reg_time",sorter:!0,render:function(e){return u.a.unix(e).utc().utcOffset(330).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u4f59\u989d",key:"balance",dataIndex:"balance",sorter:!0,render:function(e){return Object(f.a)(e)}},{title:"\u603b\u63d0\u73b0",key:"withdraw",dataIndex:"withdraw",sorter:!0,render:function(e){return Object(f.a)(e)}},{title:"\u603b\u5145\u503c",key:"recharge",dataIndex:"recharge",sorter:!0,render:function(e){return Object(f.a)(e)}},{title:"point\u603b\u5c40\u6570",key:"points",dataIndex:"points",sorter:!0},{title:"pool\u603b\u5c40\u6570",key:"pool",dataIndex:"pool",sorter:!0},{title:"10 card\u603b\u5c40\u6570",key:"ten",dataIndex:"ten",sorter:!0},{title:"\u533a\u95f4\u5145\u503c",key:"sec_recharge",dataIndex:"sec_recharge",sorter:!0,render:function(e){return Object(f.a)(e)}},{title:"\u533a\u95f4\u63d0\u73b0",key:"sec_withdraw",dataIndex:"sec_withdraw",sorter:!0,render:function(e){return Object(f.a)(e)}},{title:"point\u533a\u95f4\u5c40\u6570",key:"sec_points",sorter:!0,dataIndex:"sec_points"},{title:"point\u533a\u95f4\u80dc\u5c40",sorter:!0,key:"sec_points_victory",dataIndex:"sec_points_victory"},{title:"point\u533a\u95f4\u8d1f\u5c40",sorter:!0,key:"sec_points_defeat",dataIndex:"sec_points_defeat"},{title:"point\u533a\u95f4\u8d62\u94b1",sorter:!0,key:"sec_points_profit",dataIndex:"sec_points_profit",render:function(e){return Object(f.a)(e)}},{title:"point\u533a\u95f4\u8f93\u94b1",sorter:!0,key:"sec_points_loss",dataIndex:"sec_points_loss",render:function(e){return Object(f.a)(e)}},{title:"point\u533a\u95f4\u76c8\u4e8f",sorter:!0,key:"sec_points_profit_loss",dataIndex:"sec_points_profit_loss",render:function(e){return Object(f.a)(e)}},{title:"point\u533a\u95f4\u62bd\u6c34",sorter:!0,key:"sec_points_cut",dataIndex:"sec_points_cut",render:function(e){return Object(f.a)(e)}},{title:"pool\u533a\u95f4\u5c40\u6570",sorter:!0,key:"sec_pool",dataIndex:"sec_pool"},{title:"pool\u533a\u95f4\u80dc\u5c40",sorter:!0,key:"sec_pool_victory",dataIndex:"sec_pool_victory"},{title:"pool\u533a\u95f4\u8d1f\u5c40",sorter:!0,key:"sec_pool_defeat",dataIndex:"sec_pool_defeat"},{title:"pool\u533a\u95f4\u8d62\u94b1",sorter:!0,key:"sec_pool_profit",dataIndex:"sec_pool_profit",render:function(e){return Object(f.a)(e)}},{title:"pool\u533a\u95f4\u8f93\u94b1",sorter:!0,key:"sec_pool_loss",dataIndex:"sec_pool_loss",render:function(e){return Object(f.a)(e)}},{title:"pool\u533a\u95f4\u76c8\u4e8f",sorter:!0,key:"sec_pool_profit_loss",dataIndex:"sec_pool_profit_loss",render:function(e){return Object(f.a)(e)}},{title:"pool\u533a\u95f4\u62bd\u6c34",sorter:!0,key:"sec_pool_cut",dataIndex:"sec_pool_cut",render:function(e){return Object(f.a)(e)}},{title:"10 card\u533a\u95f4\u5c40\u6570",sorter:!0,key:"sec_ten",dataIndex:"sec_ten"},{title:"10 card\u533a\u95f4\u80dc\u5c40",sorter:!0,key:"sec_ten_victory",dataIndex:"sec_ten_victory"},{title:"10 card\u533a\u95f4\u8d1f\u5c40",sorter:!0,key:"sec_ten_defeat",dataIndex:"sec_ten_defeat"},{title:"10 card\u533a\u95f4\u8d62\u94b1",sorter:!0,key:"sec_ten_profit",dataIndex:"sec_ten_profit",render:function(e){return Object(f.a)(e)}},{title:"10 card\u533a\u95f4\u8f93\u94b1",sorter:!0,key:"sec_ten_loss",dataIndex:"sec_ten_loss",render:function(e){return Object(f.a)(e)}},{title:"10 card\u533a\u95f4\u76c8\u4e8f",sorter:!0,key:"sec_ten_profit_loss",dataIndex:"sec_ten_profit_loss",render:function(e){return Object(f.a)(e)}},{title:"10 card\u533a\u95f4\u62bd\u6c34",sorter:!0,key:"sec_ten_cut",dataIndex:"sec_ten_cut",render:function(e){return Object(f.a)(e)}},{title:"\u5176\u4ed6\u6536\u5165",key:"other",dataIndex:"other",render:function(e){return Object(f.a)(e)}}];return i.a.createElement(d.a,{title:"\u73a9\u5bb6\u6392\u884c\u699c"},i.a.createElement(p.a,{rangeSearch:{layout:"YYYY-MM-DD",rangeTime:[Object(u.a)(),Object(u.a)()],rangeDays:7},columns:y,fetchApi:b,data:n.data,total:n.total}))}},518:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(6),a=n.n(r),c=n(5),o=n.n(c),s=n(16),i=n.n(s),u=n(0),l=n(4),d=n.n(l),p=n(63),f=n(123);function m(e){var t=e.className,n=e.direction,r=e.index,c=e.marginDirection,s=e.children,i=e.split,l=e.wrap,d=u.useContext(y),p=d.horizontalSize,f=d.verticalSize,m=d.latestIndex,b={};return"vertical"===n?r<m&&(b={marginBottom:p/(i?2:1)}):b=a()(a()({},r<m&&o()({},c,p/(i?2:1))),l&&{paddingBottom:f}),null===s||void 0===s?null:u.createElement(u.Fragment,null,u.createElement("div",{className:t,style:b},s),r<m&&i&&u.createElement("span",{className:"".concat(t,"-split"),style:b},i))}var b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y=u.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),_={small:8,middle:16,large:24};t.b=function(e){var t,n=u.useContext(f.b),r=n.getPrefixCls,c=n.space,s=n.direction,l=e.size,g=void 0===l?(null===c||void 0===c?void 0:c.size)||"small":l,O=e.align,x=e.className,v=e.children,h=e.direction,k=void 0===h?"horizontal":h,j=e.prefixCls,I=e.split,w=e.style,S=e.wrap,E=void 0!==S&&S,Y=b(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),N=u.useMemo((function(){return(Array.isArray(g)?g:[g,g]).map((function(e){return function(e){return"string"===typeof e?_[e]:e||0}(e)}))}),[g]),D=i()(N,2),C=D[0],z=D[1],K=Object(p.a)(v,{keepEmpty:!0});if(0===K.length)return null;var T=void 0===O&&"horizontal"===k?"center":O,P=r("space",j),A=d()(P,"".concat(P,"-").concat(k),(t={},o()(t,"".concat(P,"-rtl"),"rtl"===s),o()(t,"".concat(P,"-align-").concat(T),T),t),x),M="".concat(P,"-item"),R="rtl"===s?"marginLeft":"marginRight",H=0,B=K.map((function(e,t){return null!==e&&void 0!==e&&(H=t),u.createElement(m,{className:M,key:"".concat(M,"-").concat(t),direction:k,index:t,marginDirection:R,split:I,wrap:E},e)}));return u.createElement("div",a()({className:A,style:a()(a()({},E&&{flexWrap:"wrap",marginBottom:-z}),w)},Y),u.createElement(y.Provider,{value:{horizontalSize:C,verticalSize:z,latestIndex:H}},B))}},519:function(e,t,n){"use strict";n(55),n(599)},522:function(e,t,n){"use strict";n(55),n(529)},523:function(e,t,n){"use strict";var r=n(6),a=n.n(r),c=n(5),o=n.n(c),s=n(0),i=n(4),u=n.n(i),l=n(123),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){return s.createElement(l.a,null,(function(t){var n,r=t.getPrefixCls,c=t.direction,i=e.prefixCls,l=e.type,p=void 0===l?"horizontal":l,f=e.orientation,m=void 0===f?"center":f,b=e.className,y=e.children,_=e.dashed,g=e.plain,O=d(e,["prefixCls","type","orientation","className","children","dashed","plain"]),x=r("divider",i),v=m.length>0?"-".concat(m):m,h=!!y,k=u()(x,"".concat(x,"-").concat(p),(n={},o()(n,"".concat(x,"-with-text"),h),o()(n,"".concat(x,"-with-text").concat(v),h),o()(n,"".concat(x,"-dashed"),!!_),o()(n,"".concat(x,"-plain"),!!g),o()(n,"".concat(x,"-rtl"),"rtl"===c),n),b);return s.createElement("div",a()({className:k},O,{role:"separator"}),y&&s.createElement("span",{className:"".concat(x,"-inner-text")},y))}))}},529:function(e,t,n){},534:function(e,t,n){"use strict";n(547);var r=n(546),a=(n(519),n(518)),c=(n(522),n(523)),o=(n(147),n(71)),s=n(3),i=n.n(s),u=n(9),l=n(72),d=n(84),p=n(0),f=n.n(p),m=n(280).a.RangePicker;t.a=Object(p.memo)((function(e){var t=e.fetchApi,n=e.columns,s=e.forceUpdate,b=e.data,y=e.rangeSearch,_=e.components,g=e.current,O=e.total,x=e.pageSize,v=e.showTotal,h=e.rowSelection,k=y&&y.rangeTime?[y.rangeTime[0].format(y.layout||"YYYY-MM-DD HH:mm:ss"),y.rangeTime[1].format(y.layout||"YYYY-MM-DD HH:mm:ss")]:null,j=Object(p.useState)(!1),I=Object(d.a)(j,2),w=I[0],S=I[1],E=Object(p.useState)({current:1,pageSize:x||20,total:O||1e5,showTotal:v}),Y=Object(d.a)(E,2),N=Y[0],D=Y[1],C=Object(p.useState)({}),z=Object(d.a)(C,2),K=z[0],T=z[1],P=Object(p.useState)([]),A=Object(d.a)(P,2),M=A[0],R=A[1],H=Object(p.useState)(k),B=Object(d.a)(H,2),J=B[0],U=B[1],F=Object(p.useState)(!J),G=Object(d.a)(F,2),L=G[0],V=G[1],W=Object(p.useState)(y?y.rangeTime||[]:null),q=Object(d.a)(W,2),Q=q[0],X=q[1],Z=b.map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{key:t+1})})),$=function(){var e=Object(u.a)(i.a.mark((function e(n,r,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),c={page:n.current,pageSize:n.pageSize,filters:r},J&&(c.startTime=J[0],c.endTime=J[1]),a.length>0&&(c.sorter=a[0]),console.log("rangeTime",J,c),e.next=7,t(c);case 7:S(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(p.useEffect)((function(){D(Object(l.a)(Object(l.a)({},N),{},{total:O||1e4}))}),[O]),Object(p.useEffect)((function(){$(N,K,M),g&&g(N)}),[K,s,M,x,N.current]),f.a.createElement(f.a.Fragment,null,y&&f.a.createElement(a.b,null,f.a.createElement(m,{disabledDate:function(e){if(!Q||0===Q.length||!y||!y.rangeDays)return!1;var t=Q[0]&&e.diff(Q[0],"days")>=y.rangeDays;return Q[1]&&Q[1].diff(e,"days")>=y.rangeDays||t},defaultValue:y.rangeTime||null,format:y.layout||"YYYY-MM-DD HH:mm:ss",showTime:y.showTime||!1,onChange:function(e,t){U(t),V(!e)},onCalendarChange:function(e){return X(e)}}),f.a.createElement(o.a,{type:"primary",onClick:function(){return $(N,K,M)},disabled:L},"Inquire"),f.a.createElement(c.a,{dashed:!0})),f.a.createElement(r.a,{rowSelection:h,components:_,scroll:{x:!0},bordered:!0,loading:w,pagination:N,columns:n,dataSource:Z,onChange:function(e,t,n){console.log("handleTableChange:",e,t,n),D(e),T(t),n.order?R([{key:n.columnKey,order:"ascend"===n.order?"asc":"desc"}]):R([])}}))}),(function(e,t){return JSON.stringify(e.data)===JSON.stringify(t.data)&&JSON.stringify(e.columns)===JSON.stringify(t.columns)&&e.forceUpdate==t.forceUpdate}))},535:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(85),a=n.n(r),c=n(548);a.a.extend(c);var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return a.a.unix(e).utc().utcOffset(330).format(t)};t.a=a.a},545:function(e,t){},552:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function e(t,n){var r,a=0,c=[],o=sessionStorage;for(r in o)0===r.indexOf("pic_")&&(c.push(r),a+=o.getItem(r).length);(a/1024).toFixed(2)>500&&c.length>0&&(sessionStorage.removeItem(c[0]),e(t,n)),sessionStorage.setItem("pic_"+t,n)},a=function(e){return sessionStorage.getItem("pic_"+e)}},567:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return b}));var r=n(3),a=n.n(r),c=n(9),o=n(598),s=n(569),i=(n(0),n(552)),u=n(56),l=u.a.getState().cdnUrl,d=u.a.getState().s3Enable,p=function(e){return e/100||0},f=function(e){return o.a[e]||""},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=Number(100*e).toFixed(t);return n+="%"},b=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o,u,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if("http"!==t.substr(0,4)){e.next=4;break}return e.abrupt("return",t);case 4:if(d){e.next=6;break}return e.abrupt("return",l+"/"+t);case 6:if(!(r=Object(i.b)(t))){e.next=9;break}return e.abrupt("return",r);case 9:return c=t,o=null,e.prev=11,e.next=14,Object(s.b)(c,n);case 14:o=e.sent,e.next=21;break;case 17:e.prev=17,e.t0=e.catch(11),o=null,console.error("download failed ,"+e.t0);case 21:if(null!=o){e.next=23;break}return e.abrupt("return","");case 23:return u=t.substr(t.lastIndexOf(".")+1),p="data:image/"+u+";base64,"+y(o),Object(i.a)(t,p),e.abrupt("return",p);case 27:case"end":return e.stop()}}),e,null,[[11,17]])})));return function(t,n){return e.apply(this,arguments)}}();function y(e){var t=e.reduce((function(e,t){return e+String.fromCharCode(t)}),"");return btoa(t).replace(/.{76}(?=.)/g,"$&\n")}},569:function(e,t,n){"use strict";n.d(t,"b",(function(){return x})),n.d(t,"a",(function(){return k}));n(173);var r=n(110),a=n(3),c=n.n(a),o=n(9),s=n(10),i=n(85),u=n.n(i),l=n(609),d=n.n(l);var p=function(e){return d.a.MD5(e).toString()},f=n(56),m=n(552),b=n(548);u.a.extend(b);var y=n(611),_=(n(612),f.a.getState().s3Enable);function g(e){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/user/awssts",{params:t});case 2:return n=e.sent,r=n.data,a={region:r.region,accessKeyId:r.access_key_id,secretAccessKey:r.secret_access_key,session_token:r.session_token,bucket:r.bucket,appName:r.app_name,acl:r.acl},e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}y.config.update({region:"ap-southeast-1",accessKeyId:"ASIAS2REQI3OBOWXO6R2",secretAccessKey:"YKvObUARB+Ik4wcjmHYGn7M2PR/dV8RZ6/GoAIo8"});new y.S3;function x(e,t){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(c.a.mark((function e(t,n){var r,a,o,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.length>2&&void 0!==s[2]?s[2]:"",a=Object(m.b)("accessKeyId"),o=JSON.parse(a)){e.next=8;break}return e.next=6,g(n);case 6:o=e.sent,Object(m.a)("accessKeyId",JSON.stringify(o));case 8:return-1!==t.indexOf("poker")&&o.appName&&(t=o.appName+t),y.config.update({region:o.region,accessKeyId:o.accessKeyId,secretAccessKey:o.secretAccessKey}),y.config.credentials.sessionToken=o.session_token,e.abrupt("return",new Promise((function(e,n){var a={Bucket:o.bucket,Key:r+t};(new y.S3).getObject(a,(function(t,r){t&&n(t),r&&e(r.Body)}))})));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(){var e=Object(o.a)(c.a.mark((function e(t,n,r){var a,o,s,i,l,d,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>3&&void 0!==f[3]?f[3]:"",e.next=3,g({appid:r});case 3:return o=e.sent,y.config.update({region:o.region,accessKeyId:o.accessKeyId,secretAccessKey:o.secretAccessKey}),s=n.lastIndexOf("."),i=n.substr(s),l=n.substr(0,s),d=o.appName+"/images/"+a+u.a.utc().unix()+p(l)+i,y.config.credentials.sessionToken=o.session_token,e.abrupt("return",new Promise((function(e,n){var r={Bucket:o.bucket,Key:d,Body:t,ACL:o.acl};(new y.S3).upload(r,null,(function(t,r){t?n(t):e(d)}))})));case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();function k(e,t,n){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(c.a.mark((function e(t,n,a){var o,s,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=i.length>3&&void 0!==i[3]?i[3]:"",_){e.next=3;break}return e.abrupt("return","false");case 3:return s=null,e.prev=4,e.next=7,h(t,n,a,o);case 7:s=e.sent,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(4),console.error(e.t0),r.b.error("upload failed");case 14:return e.prev=14,e.finish(14);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),e,null,[[4,10,14,16]])})))).apply(this,arguments)}},598:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),t.a={1:"Points Rummy",2:"Pool Rummy",3:"Ten Cards"};var r=[{ttype:1,name:"Points Rummy"},{ttype:2,name:"Pool Rummy"},{ttype:3,name:"Ten Cards"}]},599:function(e,t,n){},610:function(e,t){}}]);