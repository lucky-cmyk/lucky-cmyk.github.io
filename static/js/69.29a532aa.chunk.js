(this.webpackJsonpruby_rummy_web=this.webpackJsonpruby_rummy_web||[]).push([[69],{1657:function(e,t,a){"use strict";a.r(t),a.d(t,"A",(function(){return g}));a(547);var n=a(546),r=a(3),l=a.n(r),o=a(605),u=a(72),i=a(9),c=a(84),s=a(0),m=a.n(s),d=a(10),f=a(111),p=(a(522),a(523)),b=(a(1351),a(1357)),v=(a(533),a(532)),O=a(85),y=a.n(O),E=a(280).a.RangePicker,h={200:"Key index",201:"Payment details",202:"Total prepaid",203:"Active user",204:"Users Retention",205:"Users Retention",206:"Users Retention",207:"Gameplay active",227:"Gameplay active",237:"Gameplay active",228:"Game rounds",208:"Game rounds",238:"Game rounds",209:"Daily Report",210:"Robot Key index",211:"Points \u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",230:"Pool \u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",231:"Pool \u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",232:"Pool \u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",233:"Pool \u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",234:"Pool \u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",235:"Pool \u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",236:"Pool \u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",215:"\u7528\u6237\u7559\u5b58\u7edf\u8ba1",216:"\u7528\u6237\u7559\u5b58\u7edf\u8ba1",217:"\u7528\u6237\u7559\u5b58\u7edf\u8ba1",218:"\u7528\u6237\u7559\u5b58\u7edf\u8ba1",219:"\u7528\u6237\u4ed8\u8d39",220:"\u7528\u6237\u4ed8\u8d39",221:"\u7528\u6237\u4ed8\u8d39",222:"\u7528\u6237\u4ed8\u8d39",223:"\u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",224:"\u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",225:"\u7528\u6237\u7559\u5b58\u7edf\u8ba1",226:"\u7528\u6237\u7559\u5b58\u7edf\u8ba1",239:"10 Card \u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",240:"10 Card \u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",241:"10 Card \u673a\u5668\u4eba\u5c40\u6570\u5206\u6790",242:"Robot Key index",243:"Robot Key index",244:"Robot Key index"},g=(t.default=function(e){var t=[y()().subtract(15,"day"),y()()],a=[t[0].format("YYYY-MM-DD"),t[1].format("YYYY-MM-DD")],r=e.match,u=Object(s.useState)(0|r.params.id),O=Object(c.a)(u,2),g=O[0],j=O[1],w=Object(s.useState)(!1),C=Object(c.a)(w,2),P=C[0],S=C[1],x=Object(s.useState)([]),R=Object(c.a)(x,2),I=R[0],Y=R[1],k=Object(s.useState)([]),V=Object(c.a)(k,2),D=V[0],F=V[1],K=Object(s.useState)(a),A=Object(c.a)(K,2),G=A[0],M=A[1],T=Object(s.useState)(t),_=Object(c.a)(T,2),U=_[0],J=_[1],z=Object(s.useState)(),q=Object(c.a)(z,2),B=q[0],H=(q[1],function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r,u,i,c,s,m,f=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.length>0&&void 0!==f[0]?f[0]:{},S(!0),e.next=4,d.a.get("/statistics/"+g,{params:t});case 4:a=e.sent,console.log(a),n=[],r=Object(o.a)(a.column);try{for(r.s();!(u=r.n()).done;)i=u.value,c={title:i.title,dataIndex:i.id,key:i.id},n.push(c)}catch(l){r.e(l)}finally{r.f()}for(m in Y([].concat([{title:"Time",dataIndex:"mdate",key:"mdate"}],n)),s=[],a.data)s.push(a.data[m]);s.sort((function(e,t){return t.mdate-e.mdate})),F(s),S(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(s.useEffect)((function(){H({startTime:G[0],endTime:G[1],appid:B})}),[g,G,B]),Object(s.useEffect)((function(){j(0|r.params.id)}),[r.params.id]);var L=[{value:"0",label:"\u5168\u90e8"},{value:"2",label:"2\u4eba"},{value:"6",label:"6\u4eba"}];return m.a.createElement(f.a,{title:h[g]},[215,216,217,218,225,226].includes(g)&&m.a.createElement(m.a.Fragment,null,"\u7528\u6237\u7c7b\u578b\uff1a",m.a.createElement(v.a,{defaultValue:215,style:{width:120},onChange:function(e){return j(parseInt(e))}},m.a.createElement(v.a.Option,{value:218},"\u5168\u90e8"),m.a.createElement(v.a.Option,{value:216},"\u8001\u7528\u6237"),m.a.createElement(v.a.Option,{value:215},"\u65b0\u7528\u6237"),m.a.createElement(v.a.Option,{value:217},"\u56de\u6d41\u7528\u6237"),m.a.createElement(v.a.Option,{value:225},"\u4ed8\u8d39\u7528\u6237"),m.a.createElement(v.a.Option,{value:226},"\u975e\u4ed8\u8d39\u7528\u6237")),"\xa0\xa0\xa0\xa0"),g>=219&&g<=222&&m.a.createElement(m.a.Fragment,null,"\u4ed8\u8d39\u7c7b\u578b\uff1a",m.a.createElement(v.a,{defaultValue:g||222,style:{width:150},onChange:function(e){return j(parseInt(e))}},m.a.createElement(v.a.Option,{value:222},"\u7528\u6237\u603b\u4ed8\u8d39"),m.a.createElement(v.a.Option,{value:221},"\u65b0\u8001\u7528\u6237\u4ed8\u8d39"),m.a.createElement(v.a.Option,{value:220},"\u9996\u6b21\u4ed8\u8d39\u7528\u6237"),m.a.createElement(v.a.Option,{value:219},"\u8ba2\u5355\u91d1\u989d\u5206\u5e03")),"\xa0\xa0\xa0\xa0"),[210,242,243,244].includes(0|g)&&m.a.createElement(m.a.Fragment,null,"\u7edf\u8ba1\u7c7b\u578b\uff1a",m.a.createElement(v.a,{defaultValue:g||244,style:{width:150},onChange:function(e){return j(parseInt(e))}},m.a.createElement(v.a.Option,{value:244},"\u6240\u6709"),m.a.createElement(v.a.Option,{value:210},"Points Rummy"),m.a.createElement(v.a.Option,{value:242},"Pool Rummy"),m.a.createElement(v.a.Option,{value:243},"10 Card")),"\xa0\xa0\xa0\xa0"),[227,207,237].includes(0|g)&&m.a.createElement(m.a.Fragment,null,"\u7edf\u8ba1\u7c7b\u578b\uff1a",m.a.createElement(v.a,{defaultValue:g||207,style:{width:150},onChange:function(e){return j(parseInt(e))}},m.a.createElement(v.a.Option,{value:207},"Points Rummy"),m.a.createElement(v.a.Option,{value:227},"Pool Rummy"),m.a.createElement(v.a.Option,{value:237},"10 Card")),"\xa0\xa0\xa0\xa0"),[228,208,238].includes(0|g)&&m.a.createElement(m.a.Fragment,null,"\u7edf\u8ba1\u7c7b\u578b\uff1a",m.a.createElement(v.a,{defaultValue:g||208,style:{width:150},onChange:function(e){return j(parseInt(e))}},m.a.createElement(v.a.Option,{value:208},"Points Rummy"),m.a.createElement(v.a.Option,{value:228},"Pool Rummy"),m.a.createElement(v.a.Option,{value:238},"10 Card")),"\xa0\xa0\xa0\xa0"),[230,231,232,233,234,235,236].includes(0|g)&&m.a.createElement(m.a.Fragment,null,"\u7edf\u8ba1\u7c7b\u578b\uff1a",m.a.createElement(b.a,{defaultValue:["0","0"],onChange:function(e){if(Array.isArray(e)&&!(e.length<2)){j({"0-0":230,"101-0":231,"201-0":233,"101-2":232,"101-6":234,"201-2":235,"201-6":236}[e[0]+"-"+e[1]])}},options:[{value:"0",label:"\u5168\u90e8",children:L},{value:"101",label:"101 Pool",children:L},{value:"201",label:"201 Pool",children:L}]}),"\xa0\xa0\xa0\xa0"),[211,223,224].includes(0|g)&&m.a.createElement(m.a.Fragment,null,"\u7edf\u8ba1\u7c7b\u578b\uff1a",m.a.createElement(v.a,{defaultValue:g||211,style:{width:150},onChange:function(e){return j(parseInt(e))}},m.a.createElement(v.a.Option,{value:211},"\u5168\u90e8"),m.a.createElement(v.a.Option,{value:223},"2\u4eba"),m.a.createElement(v.a.Option,{value:224},"6\u4eba")),"\xa0\xa0\xa0\xa0"),[239,240,241].includes(0|g)&&m.a.createElement(m.a.Fragment,null,"\u7edf\u8ba1\u7c7b\u578b\uff1a",m.a.createElement(v.a,{defaultValue:g||239,style:{width:150},onChange:function(e){return j(parseInt(e))}},m.a.createElement(v.a.Option,{value:239},"\u5168\u90e8"),m.a.createElement(v.a.Option,{value:240},"2\u4eba"),m.a.createElement(v.a.Option,{value:241},"6\u4eba")),"\xa0\xa0\xa0\xa0"),"\u65e5\u671f\uff1a",m.a.createElement(E,{disabledDate:function(e){if(!U||0===U.length)return!1;var t=U[0]&&e.diff(U[0],"days")>=31;return U[1]&&U[1].diff(e,"days")>=31||t},defaultValue:t,format:"YYYY-MM-DD",onChange:function(e,t){return M(t)},onCalendarChange:function(e){return J(e)}}),m.a.createElement(p.a,null),m.a.createElement(n.a,{bordered:!0,scroll:{x:!0},rowKey:function(e){return e},loading:P,pagination:!1,columns:I,dataSource:D}))},function(e){var t=e.match,a=Object(s.useState)({pagination:{current:1,pageSize:20,total:1e4},loading:!1}),r=Object(c.a)(a,2),p=r[0],b=r[1],v=Object(s.useState)([]),O=Object(c.a)(v,2),y=O[0],E=O[1],h=Object(s.useState)([]),g=Object(c.a)(h,2),j=g[0],w=g[1],C=function(){var e=Object(i.a)(l.a.mark((function e(){var a,n,r,i,c,s,m,f,v,O=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O.length>0&&void 0!==O[0]?O[0]:{},b(Object(u.a)(Object(u.a)({},p),{},{loading:!0})),e.next=4,d.a.get("/statistics/"+t.params.id);case 4:n=e.sent,console.log(n),r=[],i=Object(o.a)(n.column);try{for(i.s();!(c=i.n()).done;)s=c.value,m={title:s.title,dataIndex:s.id,key:s.id},r.push(m)}catch(l){i.e(l)}finally{i.f()}for(v in E([].concat([{title:"Time",dataIndex:"mdate",key:"mdate"}],r)),f=[],n.data)f.push(n.data[v]);f.sort((function(e,t){return t.mdate-e.mdate})),w(f),b(Object(u.a)(Object(u.a)({},p),{},{loading:!1,pagination:a.pagination}));case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(l.a.mark((function e(t,a,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C({pagination:t});case 1:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){P(p.pagination)}),[t.params.id]),m.a.createElement(f.a,{title:"Statistical data"},m.a.createElement(n.a,{scroll:{x:!0},rowKey:function(e){return e},loading:p.loading,pagination:p.pagination,columns:y,dataSource:j,onChange:P}))})},605:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(175);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,o=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){u=!0,l=e},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw l}}}}}}]);