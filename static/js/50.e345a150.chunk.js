(this.webpackJsonpruby_rummy_web=this.webpackJsonpruby_rummy_web||[]).push([[50],{1056:function(e,t,a){"use strict";a.d(t,"u",(function(){return r})),a.d(t,"o",(function(){return c})),a.d(t,"C",(function(){return l})),a.d(t,"t",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return f})),a.d(t,"q",(function(){return p})),a.d(t,"r",(function(){return b})),a.d(t,"p",(function(){return g})),a.d(t,"s",(function(){return E})),a.d(t,"y",(function(){return v})),a.d(t,"B",(function(){return h})),a.d(t,"z",(function(){return j})),a.d(t,"A",(function(){return O})),a.d(t,"v",(function(){return x})),a.d(t,"w",(function(){return y})),a.d(t,"x",(function(){return I})),a.d(t,"i",(function(){return _})),a.d(t,"j",(function(){return w})),a.d(t,"g",(function(){return k})),a.d(t,"h",(function(){return C})),a.d(t,"k",(function(){return q})),a.d(t,"n",(function(){return S})),a.d(t,"m",(function(){return P})),a.d(t,"l",(function(){return N}));var n=a(150),r=function(e){return n.a.get("/room-list",e)},c=function(e){return n.a.jpost("/room-list",e)},l=function(e){return n.a.put("/room-list",e)},o=function(e){return n.a.delete("/room-list",e)},i=function(e){return n.a.jpost("/wingman-discard-config",e)},u=function(e){return n.a.get("/wingman-discard-config",e)},s=function(e){return n.a.put("/wingman-discard-config",e)},m=function(e){return n.a.jpost("/wingman-drop-config",e)},d=function(e){return n.a.get("/wingman-drop-config",e)},f=function(e){return n.a.put("/wingman-drop-config",e)},p=function(e){return n.a.get("/wingman-room-config",e)},b=function(e){return n.a.put("/wingman-room-config/set-status",e)},g=function(e){return n.a.jpost("/wingman-room-config",e)},E=function(e){return n.a.put("/wingman-room-config",e)},v=function(e){return n.a.jpost("/room-money-pool-rules-config",e)},h=function(e){return n.a.put("/room-money-pool-rules-config",e)},j=function(e){return n.a.get("/room-money-pool-rules-config",e)},O=function(e){return n.a.put("/room-money-pool-rules-config/set-status",e)},x=function(e){return n.a.jpost("/room-money-pool-config",e)},y=function(e){return n.a.get("/room-money-pool-config",e)},I=function(e){return n.a.put("/room-money-pool-config",e)},_=function(e){return n.a.jpost("/personal-adjust-cond-config",e)},w=function(e){return n.a.get("/personal-adjust-cond-config",e)},k=function(e){return n.a.jpost("/personal-adjust-cd-config",e)},C=function(e){return n.a.get("/personal-adjust-cd-config",e)},q=function(e){return n.a.jpost("/personal-adjust-rules-config",e)},S=function(e){return n.a.put("/personal-adjust-rules-config",e)},P=function(e){return n.a.put("/room-money-pool-config/set-status",e)},N=function(e){return n.a.get("/personal-adjust-rules-config",e)}},1636:function(e,t,a){"use strict";a.r(t);a(522);var n=a(523),r=(a(519),a(518)),c=(a(147),a(71)),l=a(84),o=a(0),i=a.n(o),u=a(51),s=a(111),m=(a(85),a(547),a(546)),d=a(3),f=a.n(d),p=a(72),b=(a(173),a(110)),g=a(9),E=(a(550),a(551)),v=a(1056),h=Object(o.forwardRef)((function(e,t){Object(o.useImperativeHandle)(t,(function(){return{getData:function(e){N(e)}}}));var a=e.update_room_h,n=e.pageSize,c=void 0===n?5:n,u=e.total,s=void 0===u?20:u,d=(e.showTotal,Object(o.useState)(!1)),h=Object(l.a)(d,2),j=h[0],O=h[1],x=Object(o.useState)([]),y=Object(l.a)(x,2),I=y[0],_=y[1],w=Object(o.useState)({current:1,pageSize:c||20,total:s||0}),k=Object(l.a)(w,2),C=k[0],q=k[1],S=[{title:"\u623f\u95f4id",dataIndex:"rid",key:"rid",fixed:"left",width:100},{title:"\u73a9\u6cd5\u7c7b\u578b\u8bf4\u660e",dataIndex:"game_type"},{title:"\u8d44\u6e90\u7c7b\u578b",dataIndex:"asset_type"},{title:"\u6700\u5927\u73a9\u5bb6\u6570",dataIndex:"max_player"},{title:"\u5e95\u6ce8",dataIndex:"ante"},{title:"\u5206\u6570\u9650\u5236",dataIndex:"score_limit"},{title:"\u8986\u76d6\u533a\u57df",dataIndex:"regions"},{title:"\u73a9\u5bb6\u6700\u4f4e\u5e26\u5165",dataIndex:"min_wealth"},{title:"\u73a9\u5bb6\u6700\u9ad8\u5e26\u5165",dataIndex:"max_wealth"},{title:"\u521d\u59cb\u5f03\u724c\u5206\u6570",dataIndex:"virgin_drop_score"},{title:"\u4e2d\u9014\u5f03\u724c\u5206\u6570",dataIndex:"drop_score"},{title:"\u6263\u5206\u4e0b\u9650",dataIndex:"min_score"},{title:"\u6263\u5206\u4e0a\u9650",dataIndex:"max_score"},{title:"\u6700\u5927\u8d85\u65f6\u5f03\u724c\u6b21\u6570",dataIndex:"max_timeout_count"},{title:"\u724c\u526f\u6570",dataIndex:"decks"},{title:"\u6bcf\u526f\u724c\u4f7f\u7528Joker\u6570\u91cf",dataIndex:"jokers"},{title:"\u624b\u724c\u5f20\u6570",dataIndex:"hands"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"create_time"},{title:"\u72b6\u6001",dataIndex:"status",render:function(e,t){return i.a.createElement("span",null,0==t.status?"\u5f00\u542f":"\u5173\u95ed")}},{title:"\u64cd\u4f5c",dataIndex:"action_remarks",fixed:"right",width:150,render:function(e,t){return i.a.createElement(r.b,{size:"middle"},i.a.createElement("a",{onClick:function(){a(t)}},"\u7f16\u8f91"),i.a.createElement(E.a,{title:"\u786e\u5b9a\u5220\u9664\u8fd9\u6761\u6570\u636e?",onConfirm:function(){P(t.rid)},okText:"Yes",cancelText:"No"},i.a.createElement("a",{onClick:function(){}},"\u5220\u9664")))}}],P=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.t)({id:t});case 3:b.b.success("\u5220\u9664\u6210\u529f"),(C.total-1)/C.pageSize<C.current&&1!=C.current?q(Object(p.a)(Object(p.a)({},C),{},{current:C.current-1})):N(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(g.a)(f.a.mark((function e(){var t,a,n=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},e.prev=1,O(!0),e.next=5,Object(v.u)(Object(p.a)({page:C.current,page_size:C.pageSize},t));case 5:a=e.sent,_(a.data),q(Object(p.a)(Object(p.a)({},C),{},{total:a.page.count,pageSize:a.page.page_size})),O(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),O(!1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){N()}),[C.current]),i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{bordered:!0,loading:j,columns:S,dataSource:I,scroll:{x:3300},rowKey:"id",pagination:C,onChange:function(e){q(Object(p.a)({},e))}}))})),j=(a(542),a(543)),O=(a(600),a(604)),x=(a(279),a(86)),y=(a(278),a(148)),I=(a(533),a(532)),_=a(150),w=function(e){return _.a.get("/regions",e)},k=I.a.Option,C=y.a.TextArea,q=Object(o.memo)((function(e){var t=e.onCancel,a=e.visible,n=e.onOk,r=x.a.useForm(),c=Object(l.a)(r,1)[0],u=Object(o.useState)([]),s=Object(l.a)(u,2),m=s[0],d=s[1],E=function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{c.validateFields().then(Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.o)(Object(p.a)({},c.getFieldsValue()));case 2:c.resetFields(),b.b.success("\u521b\u5efa\u6210\u529f"),n();case 5:case"end":return e.stop()}}),e)}))))}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(g.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w({});case 3:(t=e.sent)&&(a=null===t||void 0===t?void 0:t.map((function(e){return{title:e.region,value:e.appid}})),d(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){a&&h()}),[a]),i.a.createElement(j.a,{title:"\u521b\u5efa\u623f\u95f4",visible:a,onCancel:function(){c.resetFields(),t()},onOk:E},i.a.createElement(x.a,Object.assign({},{labelCol:{span:7},wrapperCol:{span:17}},{form:c,name:"form_in_modal",hideRequiredMark:!0}),i.a.createElement(x.a.Item,{label:"\u623f\u95f4id",name:"rid",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u623f\u95f4id"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u623f\u95f4id"})),i.a.createElement(x.a.Item,{label:"\u8d44\u6e90\u7c7b\u578b",name:"asset_type",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d44\u6e90\u7c7b\u578b"}]},i.a.createElement(I.a,{placeholder:"\u8bf7\u9009\u62e9\u8d44\u6e90\u7c7b\u578b"},i.a.createElement(k,{value:1},"1-Cash"),i.a.createElement(k,{value:99},"99-\u7ec3\u4e60\u5e01"))),i.a.createElement(x.a.Item,{label:"\u73a9\u6cd5\u7c7b\u578b",name:"room_type",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u73a9\u6cd5\u7c7b\u578b"}]},i.a.createElement(I.a,{placeholder:"\u8bf7\u9009\u62e9\u73a9\u6cd5\u7c7b\u578b"},i.a.createElement(k,{value:1},"13 Points"),i.a.createElement(k,{value:2},"10 Card"),i.a.createElement(k,{value:3},"Pool"))),i.a.createElement(x.a.Item,{label:"\u5206\u6570\u9650\u5236",name:"score_limit",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5206\u6570\u9650\u5236"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u5206\u6570\u9650\u5236"})),i.a.createElement(x.a.Item,{label:"\u6700\u5927\u73a9\u5bb6\u4eba\u6570",name:"max_player",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6700\u5927\u73a9\u5bb6\u4eba\u6570"}]},i.a.createElement(I.a,{placeholder:"\u8bf7\u9009\u62e9\u6700\u5927\u73a9\u5bb6\u4eba\u6570"},i.a.createElement(k,{value:2},"2"),i.a.createElement(k,{value:6},"6"))),i.a.createElement(x.a.Item,{label:"\u5e95\u6ce8(\u5206)",name:"ante",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e95\u6ce8"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u5e95\u6ce8"})),i.a.createElement(x.a.Item,{label:"\u73a9\u5bb6\u6700\u4f4e\u5e26\u5165",name:"min_wealth",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u73a9\u5bb6\u6700\u4f4e\u5e26\u5165"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u73a9\u5bb6\u6700\u4f4e\u5e26\u5165"})),i.a.createElement(x.a.Item,{label:"\u73a9\u5bb6\u6700\u9ad8\u5e26\u5165",name:"max_wealth",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u73a9\u5bb6\u6700\u9ad8\u5e26\u5165"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u73a9\u5bb6\u6700\u9ad8\u5e26\u5165"})),i.a.createElement(x.a.Item,{label:"\u8986\u76d6\u533a\u57df",name:"regions",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8986\u76d6\u533a\u57df"}]},i.a.createElement(I.a,{placeholder:"\u8bf7\u9009\u62e9\u8986\u76d6\u533a\u57df"},m.map((function(e){return i.a.createElement(k,{key:e.value,value:e.value},e.title)})))),i.a.createElement(x.a.Item,{label:"\u521d\u59cb\u5f03\u724c\u5206\u6570",name:"virgin_drop_score",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u521d\u59cb\u5f03\u724c\u5206\u6570"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u521d\u59cb\u5f03\u724c\u5206\u6570"})),i.a.createElement(x.a.Item,{label:"\u4e2d\u9014\u5f03\u724c\u5206\u6570",name:"drop_score",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4e2d\u9014\u5f03\u724c\u5206\u6570"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u4e2d\u9014\u5f03\u724c\u5206\u6570"})),i.a.createElement(x.a.Item,{label:"\u6263\u5206\u4e0b\u9650",name:"min_score",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6263\u5206\u4e0b\u9650"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u8bf7\u8f93\u5165\u6263\u5206\u4e0b\u9650"})),i.a.createElement(x.a.Item,{label:"\u6263\u5206\u4e0a\u9650",name:"max_score",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6263\u5206\u4e0a\u9650"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u6263\u5206\u4e0a\u9650"})),i.a.createElement(x.a.Item,{label:"\u6700\u5927\u8d85\u65f6\u5f03\u724c\u6b21\u6570",name:"max_timeout_count",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6700\u5927\u8d85\u65f6\u5f03\u724c\u6b21\u6570"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u6700\u5927\u8d85\u65f6\u5f03\u724c\u6b21\u6570"})),i.a.createElement(x.a.Item,{label:"\u724c\u526f\u6570",name:"decks",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u724c\u526f\u6570"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u724c\u526f\u6570"})),i.a.createElement(x.a.Item,{label:"\u6bcf\u526f\u724c\u4f7f\u7528Joker\u6570\u91cf",name:"jokers",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6bcf\u526f\u724c\u4f7f\u7528Joker\u6570\u91cf"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u6bcf\u526f\u724c\u4f7f\u7528Joker\u6570\u91cf"})),i.a.createElement(x.a.Item,{label:"\u624b\u724c\u5f20\u6570",name:"hands",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u724c\u5f20\u6570"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u624b\u724c\u5f20\u6570"})),i.a.createElement(x.a.Item,{label:"\u72b6\u6001",name:"status",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u72b6\u6001"}]},i.a.createElement(I.a,{placeholder:"\u8bf7\u9009\u62e9\u72b6\u6001"},i.a.createElement(k,{value:0},"\u5f00\u542f"),i.a.createElement(k,{value:1},"\u5173\u95ed"))),i.a.createElement(x.a.Item,{label:"\u73a9\u6cd5\u7c7b\u578b\u63cf\u8ff0",name:"game_type",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u73a9\u6cd5\u7c7b\u578b\u63cf\u8ff0"}]},i.a.createElement(C,{placeholder:"\u8bf7\u8f93\u5165\u73a9\u6cd5\u7c7b\u578b\u63cf\u8ff0"}))))})),S=I.a.Option,P=y.a.TextArea,N=Object(o.memo)((function(e){var t=e.onCancel,a=e.visible,n=e.onOk,r=e.info,c=x.a.useForm(),u=Object(l.a)(c,1)[0],s=Object(o.useState)([]),m=Object(l.a)(s,2),d=m[0],E=m[1],h=function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{u.validateFields().then(Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.C)(Object(p.a)({},u.getFieldsValue()));case 2:u.resetFields(),b.b.success("\u4fee\u6539\u6210\u529f"),n();case 5:case"end":return e.stop()}}),e)}))))}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(g.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w({});case 3:(t=e.sent)&&(a=null===t||void 0===t?void 0:t.map((function(e){return{title:e.region,value:e.appid}})),E(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){a&&(u.setFieldsValue(Object(p.a)({},r)),y())}),[a]),i.a.createElement(j.a,{title:"\u4fee\u6539\u623f\u95f4",visible:a,onCancel:function(){u.resetFields(),t()},onOk:h},i.a.createElement(x.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{form:u,name:"form_in_modal",hideRequiredMark:!0}),i.a.createElement(x.a.Item,{label:"\u623f\u95f4id",name:"rid",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u623f\u95f4id"}]},i.a.createElement(O.a,{disabled:!0,min:0,placeholder:"\u8bf7\u8f93\u5165\u623f\u95f4id"})),i.a.createElement(x.a.Item,{label:"\u8d44\u6e90\u7c7b\u578b",name:"asset_type",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d44\u6e90\u7c7b\u578b"}]},i.a.createElement(I.a,{placeholder:"\u8bf7\u9009\u62e9\u8d44\u6e90\u7c7b\u578b"},i.a.createElement(S,{value:1},"1-Cash"),i.a.createElement(S,{value:99},"99-\u7ec3\u4e60\u5e01"))),i.a.createElement(x.a.Item,{label:"\u73a9\u6cd5\u7c7b\u578b",name:"room_type",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u73a9\u6cd5\u7c7b\u578b"}]},i.a.createElement(I.a,{placeholder:"\u8bf7\u9009\u62e9\u73a9\u6cd5\u7c7b\u578b"},i.a.createElement(S,{value:1},"13 Points"),i.a.createElement(S,{value:2},"10 Card"),i.a.createElement(S,{value:3},"Pool"))),i.a.createElement(x.a.Item,{label:"\u5206\u6570\u9650\u5236",name:"score_limit",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5206\u6570\u9650\u5236"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u5206\u6570\u9650\u5236"})),i.a.createElement(x.a.Item,{label:"\u6700\u5927\u73a9\u5bb6\u4eba\u6570",name:"max_player",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6700\u5927\u73a9\u5bb6\u4eba\u6570"}]},i.a.createElement(I.a,{placeholder:"\u8bf7\u9009\u62e9\u6700\u5927\u73a9\u5bb6\u4eba\u6570"},i.a.createElement(S,{value:2},"2"),i.a.createElement(S,{value:6},"6"))),i.a.createElement(x.a.Item,{label:"\u5e95\u6ce8(\u5206)",name:"ante",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e95\u6ce8"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u5e95\u6ce8"})),i.a.createElement(x.a.Item,{label:"\u73a9\u5bb6\u6700\u4f4e\u5e26\u5165",name:"min_wealth",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u73a9\u5bb6\u6700\u4f4e\u5e26\u5165"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u73a9\u5bb6\u6700\u4f4e\u5e26\u5165"})),i.a.createElement(x.a.Item,{label:"\u73a9\u5bb6\u6700\u9ad8\u5e26\u5165",name:"max_wealth",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u73a9\u5bb6\u6700\u9ad8\u5e26\u5165"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u73a9\u5bb6\u6700\u9ad8\u5e26\u5165"})),i.a.createElement(x.a.Item,{label:"\u8986\u76d6\u533a\u57df",name:"regions",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8986\u76d6\u533a\u57df"}]},i.a.createElement(I.a,{placeholder:"\u8bf7\u9009\u62e9\u8986\u76d6\u533a\u57df"},d.map((function(e){return i.a.createElement(S,{key:e.value,value:e.value},e.title)})))),i.a.createElement(x.a.Item,{label:"\u521d\u59cb\u5f03\u724c\u5206\u6570",name:"virgin_drop_score",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u521d\u59cb\u5f03\u724c\u5206\u6570"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u521d\u59cb\u5f03\u724c\u5206\u6570"})),i.a.createElement(x.a.Item,{label:"\u4e2d\u9014\u5f03\u724c\u5206\u6570",name:"drop_score",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4e2d\u9014\u5f03\u724c\u5206\u6570"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u4e2d\u9014\u5f03\u724c\u5206\u6570"})),i.a.createElement(x.a.Item,{label:"\u6263\u5206\u4e0b\u9650",name:"min_score",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6263\u5206\u4e0b\u9650"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u8bf7\u8f93\u5165\u6263\u5206\u4e0b\u9650"})),i.a.createElement(x.a.Item,{label:"\u6263\u5206\u4e0a\u9650",name:"max_score",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6263\u5206\u4e0a\u9650"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u6263\u5206\u4e0a\u9650"})),i.a.createElement(x.a.Item,{label:"\u6700\u5927\u8d85\u65f6\u5f03\u724c\u6b21\u6570",name:"max_timeout_count",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6700\u5927\u8d85\u65f6\u5f03\u724c\u6b21\u6570"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u6700\u5927\u8d85\u65f6\u5f03\u724c\u6b21\u6570"})),i.a.createElement(x.a.Item,{label:"\u724c\u526f\u6570",name:"decks",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u724c\u526f\u6570"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u724c\u526f\u6570"})),i.a.createElement(x.a.Item,{label:"\u6bcf\u526f\u724c\u4f7f\u7528Joker\u6570\u91cf",name:"jokers",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6bcf\u526f\u724c\u4f7f\u7528Joker\u6570\u91cf"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u6bcf\u526f\u724c\u4f7f\u7528Joker\u6570\u91cf"})),i.a.createElement(x.a.Item,{label:"\u624b\u724c\u5f20\u6570",name:"hands",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u724c\u5f20\u6570"}]},i.a.createElement(O.a,{min:0,placeholder:"\u8bf7\u8f93\u5165\u624b\u724c\u5f20\u6570"})),i.a.createElement(x.a.Item,{label:"\u72b6\u6001",name:"status",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u72b6\u6001"}]},i.a.createElement(I.a,{placeholder:"\u8bf7\u9009\u62e9\u72b6\u6001"},i.a.createElement(S,{value:0},"\u5f00\u542f"),i.a.createElement(S,{value:1},"\u5173\u95ed"))),i.a.createElement(x.a.Item,{label:"\u73a9\u6cd5\u7c7b\u578b\u63cf\u8ff0",name:"game_type",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u73a9\u6cd5\u7c7b\u578b\u63cf\u8ff0"}]},i.a.createElement(P,{placeholder:"\u8bf7\u8f93\u5165\u73a9\u6cd5\u7c7b\u578b\u63cf\u8ff0"}))))}));t.default=function(e){var t=Object(u.c)((function(e){return e.appids})),a=Object(o.useState)(!1),m=Object(l.a)(a,2),d=m[0],f=m[1],p=Object(o.useState)(!1),b=Object(l.a)(p,2),g=b[0],E=b[1],v=Object(o.useState)({}),j=Object(l.a)(v,2),O=j[0],x=j[1],y=Object(o.useRef)();return Object(o.useEffect)((function(){}),[t]),i.a.createElement(s.a,{title:e.route.title},i.a.createElement(r.b,null,i.a.createElement(c.a,{type:"primary",onClick:function(){f(!0)}},"\u6dfb\u52a0\u623f\u95f4")),i.a.createElement(n.a,{dashed:!0}),i.a.createElement(h,{ref:y,update_room_h:function(e){x(e),E(!0)}}),i.a.createElement(q,{visible:d,onOk:function(){return f(!1),void y.current.getData()},onCancel:function(){f(!1)}}),i.a.createElement(N,{info:O,visible:g,onOk:function(){return E(!1),void y.current.getData()},onCancel:function(){E(!1)}}))}},522:function(e,t,a){"use strict";a(55),a(529)},523:function(e,t,a){"use strict";var n=a(6),r=a.n(n),c=a(5),l=a.n(c),o=a(0),i=a(4),u=a.n(i),s=a(123),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){return o.createElement(s.a,null,(function(t){var a,n=t.getPrefixCls,c=t.direction,i=e.prefixCls,s=e.type,d=void 0===s?"horizontal":s,f=e.orientation,p=void 0===f?"center":f,b=e.className,g=e.children,E=e.dashed,v=e.plain,h=m(e,["prefixCls","type","orientation","className","children","dashed","plain"]),j=n("divider",i),O=p.length>0?"-".concat(p):p,x=!!g,y=u()(j,"".concat(j,"-").concat(d),(a={},l()(a,"".concat(j,"-with-text"),x),l()(a,"".concat(j,"-with-text").concat(O),x),l()(a,"".concat(j,"-dashed"),!!E),l()(a,"".concat(j,"-plain"),!!v),l()(a,"".concat(j,"-rtl"),"rtl"===c),a),b);return o.createElement("div",r()({className:y},h,{role:"separator"}),g&&o.createElement("span",{className:"".concat(j,"-inner-text")},g))}))}},529:function(e,t,a){},544:function(e,t,a){"use strict";a(55),a(555)},549:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e?"function"===typeof e?e():e:null}},550:function(e,t,a){"use strict";a(55),a(544),a(147),a(556)},551:function(e,t,a){"use strict";var n=a(6),r=a.n(n),c=a(16),l=a.n(c),o=a(0),i=a(4),u=a.n(i),s=a(100),m=a.n(s),d=a(14),f=a(113),p=a(71),b=a(176),g=a(112),E=a(114),v=a(123),h=a(549),j=a(26),O=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},x=o.forwardRef((function(e,t){var a=o.useState(e.visible),n=l()(a,2),c=n[0],i=n[1];o.useEffect((function(){"visible"in e&&i(e.visible)}),[e.visible]),o.useEffect((function(){"defaultVisible"in e&&i(e.defaultVisible)}),[e.defaultVisible]);var s=function(t,a){"visible"in e||i(t),e.onVisibleChange&&e.onVisibleChange(t,a)},m=function(t){s(!1,t),e.onConfirm&&e.onConfirm.call(void 0,t)},x=function(t){s(!1,t),e.onCancel&&e.onCancel.call(void 0,t)},y=o.useContext(v.b).getPrefixCls,I=e.prefixCls,_=e.placement,w=e.children,k=e.overlayClassName,C=O(e,["prefixCls","placement","children","overlayClassName"]),q=y("popover",I),S=y("popconfirm",I),P=u()(S,k),N=o.createElement(g.a,{componentName:"Popconfirm",defaultLocale:E.a.Popconfirm},(function(t){return function(t,a){var n=e.okButtonProps,c=e.cancelButtonProps,l=e.title,i=e.cancelText,u=e.okText,s=e.okType,d=e.icon;return o.createElement("div",{className:"".concat(t,"-inner-content")},o.createElement("div",{className:"".concat(t,"-message")},d,o.createElement("div",{className:"".concat(t,"-message-title")},Object(h.a)(l))),o.createElement("div",{className:"".concat(t,"-buttons")},o.createElement(p.a,r()({onClick:x,size:"small"},c),i||a.cancelText),o.createElement(p.a,r()({onClick:m},Object(b.a)(s),{size:"small"},n),u||a.okText)))}(q,t)}));return o.createElement(f.a,r()({},C,{prefixCls:q,placement:_,onVisibleChange:function(t){e.disabled||s(t)},visible:c,overlay:N,overlayClassName:P,ref:t}),Object(j.a)(w,{onKeyDown:function(e){var t,a;o.isValidElement(w)&&(null===(a=null===w||void 0===w?void 0:(t=w.props).onKeyDown)||void 0===a||a.call(t,e)),function(e){e.keyCode===d.a.ESC&&c&&s(!1,e)}(e)}}))}));x.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:o.createElement(m.a,null),disabled:!1},t.a=x},555:function(e,t,a){},556:function(e,t,a){}}]);