"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(n,e,t){t.r(e);var r=t(9439),a=t(2791),c=t(6871),u=t(8183),o=t(8206),i=t(2347),s=t(4087),l=t(184);e.default=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],f=e[1],p=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.Jh)(p).then((function(n){return f(n)})).catch((function(n){return console.log(n)}))}),[p]),(0,l.jsx)(o.W,{children:0===t.length?(0,l.jsx)(i.x,{bgGradient:"linear(to-br, brand.500, brand.300)",bgClip:"text",fontSize:["16","24","24"],fontWeight:[400,500,700],marginBottom:"10px",marginTop:"10px",children:"We don't have any reviews for this movie."}):(0,l.jsx)(s.xu,{as:"ul",p:[15,null,30],children:t.map((function(n){return(0,l.jsxs)("li",{children:[(0,l.jsxs)(i.x,{bgGradient:"linear(to-br, brand.100, brand.200)",bgClip:"text",fontSize:[16,23,26],fontWeight:[400,null,600],letterSpacing:[1.1,null,1.3],marginTop:[12,null,26],children:["Author: ",n.author]}),(0,l.jsx)(i.x,{fontSize:[15,null,20],fontWeight:"400",pt:[10,null,20],children:n.content})]},n.id)}))})})}},8183:function(n,e,t){t.d(e,{IQ:function(){return p},JS:function(){return l},Jh:function(){return d},dR:function(){return f},xL:function(){return v}});var r=t(5861),a=t(4687),c=t.n(a),u=t(4569),o=t.n(u),i="https://api.themoviedb.org/3/",s="8e2fb907069148c42f6ab71ddac5af47",l=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(i,"/trending/movie/week?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(i,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("".concat(i,"search/movie"),{params:{api_key:s,query:e}}).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4087:function(n,e,t){t.d(e,{xu:function(){return l}});var r=t(1413),a=t(5987),c=t(8161),u=t(7872),o=t(184),i=["size","centerContent"],s=["size"],l=(0,c.m)("div");l.displayName="Box";var f=(0,u.G)((function(n,e){var t=n.size,c=n.centerContent,u=void 0===c||c,s=(0,a.Z)(n,i),f=u?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,o.jsx)(l,(0,r.Z)({ref:e,boxSize:t,__css:(0,r.Z)((0,r.Z)({},f),{},{flexShrink:0,flexGrow:0})},s))}));f.displayName="Square",(0,u.G)((function(n,e){var t=n.size,c=(0,a.Z)(n,s);return(0,o.jsx)(f,(0,r.Z)({size:t,ref:e,borderRadius:"9999px"},c))})).displayName="Circle"},8206:function(n,e,t){t.d(e,{W:function(){return p}});var r=t(1413),a=t(5987),c=t(7872),u=t(9592),o=t(9084),i=t(8161),s=t(6992),l=t(184),f=["className","centerContent"],p=(0,c.G)((function(n,e){var t=(0,u.Lr)(n),c=t.className,p=t.centerContent,d=(0,a.Z)(t,f),v=(0,o.mq)("Container",n);return(0,l.jsx)(i.m.div,(0,r.Z)((0,r.Z)({ref:e,className:(0,s.cx)("chakra-container",c)},d),{},{__css:(0,r.Z)((0,r.Z)({},v),p&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));p.displayName="Container"}}]);
//# sourceMappingURL=186.8139a1f6.chunk.js.map