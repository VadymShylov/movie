"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(n,r,e){e.r(r);var t=e(9439),a=e(2791),c=e(8183),o=e(6871),i=e(9683),u=e(2899),s=e(3303),l=e(182),f=e(5946),d=e(2347),p=e(184);r.default=function(){var n=(0,a.useState)([]),r=(0,t.Z)(n,2),e=r[0],m=r[1],g=(0,o.UO)().movieId;return(0,a.useEffect)((function(){(0,c.IQ)(g).then((function(n){return m(n)})).catch((function(n){return console.log(n)}))}),[g]),(0,p.jsx)(p.Fragment,{children:0!==e.length&&(0,p.jsx)(i.M,{columns:[1,2,3,4],spacing:[4,null,6],py:"4",children:e.map((function(n){return n.profile_path&&(0,p.jsx)(u.Z,{maxW:"sm",bgGradient:"linear(to-br, brand.100, brand.200)",children:(0,p.jsxs)(s.e,{children:[n.profile_path&&(0,p.jsx)(l.E,{src:"https://image.tmdb.org/t/p/w500".concat(n.profile_path),alt:n.name,objectFit:"cover",maxW:{base:"100%"}}),(0,p.jsx)(f.X,{size:"md",mt:"10",mb:"10",children:n.name}),(0,p.jsxs)(d.x,{fontSize:"md",children:["Character: ",n.character]})]})},n.credit_id)}))})})}},8183:function(n,r,e){e.d(r,{IQ:function(){return d},JS:function(){return l},Jh:function(){return p},dR:function(){return f},xL:function(){return m}});var t=e(5861),a=e(4687),c=e.n(a),o=e(4569),i=e.n(o),u="https://api.themoviedb.org/3/",s="8e2fb907069148c42f6ab71ddac5af47",l=function(){var n=(0,t.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(u,"/trending/movie/week?api_key=").concat(s));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(u,"movie/").concat(r,"?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(u,"movie/").concat(r,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(u,"movie/").concat(r,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),m=function(){var n=(0,t.Z)(c().mark((function n(r){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("".concat(u,"search/movie"),{params:{api_key:s,query:r}}).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},2625:function(n,r,e){e.d(r,{XQ:function(){return a}});var t=e(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function a(n,r){return Array.isArray(n)?n.map((function(n){return null===n?null:r(n)})):(0,t.Kn)(n)?Object.keys(n).reduce((function(e,t){return e[t]=r(n[t]),e}),{}):null!=n?r(n):null}},4390:function(n,r,e){e.d(r,{Y:function(){return o},v:function(){return i}});var t=e(9439),a=(0,e(5084).eC)("Card"),c=(0,t.Z)(a,2),o=c[0],i=c[1]},3303:function(n,r,e){e.d(r,{e:function(){return f}});var t=e(1413),a=e(5987),c=e(4390),o=e(6992),i=e(7872),u=e(8161),s=e(184),l=["className"],f=(0,i.G)((function(n,r){var e=n.className,i=(0,a.Z)(n,l),f=(0,c.v)();return(0,s.jsx)(u.m.div,(0,t.Z)({ref:r,className:(0,o.cx)("chakra-card__body",e),__css:f.body},i))}))},2899:function(n,r,e){e.d(r,{Z:function(){return p}});var t=e(1413),a=e(5987),c=e(4390),o=e(6992),i=e(7872),u=e(9592),s=e(9084),l=e(8161),f=e(184),d=["className","children","direction","justify","align"],p=(0,i.G)((function(n,r){var e=(0,u.Lr)(n),i=e.className,p=e.children,m=e.direction,g=void 0===m?"column":m,v=e.justify,h=e.align,b=(0,a.Z)(e,d),x=(0,s.jC)("Card",n);return(0,f.jsx)(l.m.div,(0,t.Z)((0,t.Z)({ref:r,className:(0,o.cx)("chakra-card",i),__css:(0,t.Z)({display:"flex",flexDirection:g,justifyContent:v,alignItems:h,position:"relative",minWidth:0,wordWrap:"break-word"},x.container)},b),{},{children:(0,f.jsx)(c.Y,{value:x,children:p})}))}))},182:function(n,r,e){e.d(r,{E:function(){return g}});var t=e(1413),a=e(5987),c=e(7762),o=e(7872),i=e(184),u=["htmlWidth","htmlHeight","alt"],s=(0,o.G)((function(n,r){var e=n.htmlWidth,c=n.htmlHeight,o=n.alt,s=(0,a.Z)(n,u);return(0,i.jsx)("img",(0,t.Z)({width:e,height:c,ref:r,alt:o},s))}));s.displayName="NativeImage";var l=e(9439),f=e(9205),d=e(2791);var p=e(8161),m=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var g=(0,o.G)((function(n,r){var e=n.fallbackSrc,o=n.fallback,u=n.src,g=n.srcSet,v=n.align,h=n.fit,b=n.loading,x=n.ignoreFallback,w=n.crossOrigin,k=n.fallbackStrategy,y=void 0===k?"beforeLoadOrError":k,Z=n.referrerPolicy,j=(0,a.Z)(n,m),_=null!=b||x||!(void 0!==e||void 0!==o),C=function(n){var r=n.loading,e=n.src,t=n.srcSet,a=n.onLoad,c=n.onError,o=n.crossOrigin,i=n.sizes,u=n.ignoreFallback,s=(0,d.useState)("pending"),p=(0,l.Z)(s,2),m=p[0],g=p[1];(0,d.useEffect)((function(){g(e?"loading":"pending")}),[e]);var v=(0,d.useRef)(),h=(0,d.useCallback)((function(){if(e){b();var n=new Image;n.src=e,o&&(n.crossOrigin=o),t&&(n.srcset=t),i&&(n.sizes=i),r&&(n.loading=r),n.onload=function(n){b(),g("loaded"),null==a||a(n)},n.onerror=function(n){b(),g("failed"),null==c||c(n)},v.current=n}}),[e,o,t,i,a,c,r]),b=function(){v.current&&(v.current.onload=null,v.current.onerror=null,v.current=null)};return(0,f.G)((function(){if(!u)return"loading"===m&&h(),function(){b()}}),[m,h,u]),u?"loaded":m}((0,t.Z)((0,t.Z)({},n),{},{crossOrigin:w,ignoreFallback:_})),G=function(n,r){return"loaded"!==n&&"beforeLoadOrError"===r||"failed"===n&&"onError"===r}(C,y),N=(0,t.Z)({ref:r,objectFit:h,objectPosition:v},_?j:function(n){var r,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object.assign({},n),a=(0,c.Z)(e);try{for(a.s();!(r=a.n()).done;){var o=r.value;o in t&&delete t[o]}}catch(i){a.e(i)}finally{a.f()}return t}(j,["onError","onLoad"]));return G?o||(0,i.jsx)(p.m.img,(0,t.Z)({as:s,className:"chakra-image__placeholder",src:e},N)):(0,i.jsx)(p.m.img,(0,t.Z)({as:s,src:u,srcSet:g,crossOrigin:w,loading:b,referrerPolicy:Z,className:"chakra-image"},N))}));g.displayName="Image"},5946:function(n,r,e){e.d(r,{X:function(){return d}});var t=e(1413),a=e(5987),c=e(7872),o=e(9084),i=e(9592),u=e(8161),s=e(6992),l=e(184),f=["className"],d=(0,c.G)((function(n,r){var e=(0,o.mq)("Heading",n),c=(0,i.Lr)(n),d=(c.className,(0,a.Z)(c,f));return(0,l.jsx)(u.m.h2,(0,t.Z)((0,t.Z)({ref:r,className:(0,s.cx)("chakra-heading",n.className)},d),{},{__css:e}))}));d.displayName="Heading"},9683:function(n,r,e){e.d(r,{M:function(){return m}});var t=e(1413),a=e(5987),c=e(7872),o=e(8161),i=e(184),u=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],s=(0,c.G)((function(n,r){var e=n.templateAreas,c=n.gap,s=n.rowGap,l=n.columnGap,f=n.column,d=n.row,p=n.autoFlow,m=n.autoRows,g=n.templateRows,v=n.autoColumns,h=n.templateColumns,b=(0,a.Z)(n,u),x={display:"grid",gridTemplateAreas:e,gridGap:c,gridRowGap:s,gridColumnGap:l,gridAutoColumns:v,gridColumn:f,gridRow:d,gridAutoFlow:p,gridAutoRows:m,gridTemplateRows:g,gridTemplateColumns:h};return(0,i.jsx)(o.m.div,(0,t.Z)({ref:r,__css:x},b))}));s.displayName="Grid";var l=e(5310),f=e(3142),d=e(2625),p=["columns","spacingX","spacingY","spacing","minChildWidth"],m=(0,c.G)((function(n,r){var e,c=n.columns,o=n.spacingX,u=n.spacingY,m=n.spacing,g=n.minChildWidth,v=(0,a.Z)(n,p),h=(0,l.F)(),b=g?function(n,r){return(0,d.XQ)(n,(function(n){var e,t=(0,f.LP)("sizes",n,"number"===typeof(e=n)?"".concat(e,"px"):e)(r);return null===n?null:"repeat(auto-fit, minmax(".concat(t,", 1fr))")}))}(g,h):(e=c,(0,d.XQ)(e,(function(n){return null===n?null:"repeat(".concat(n,", minmax(0, 1fr))")})));return(0,i.jsx)(s,(0,t.Z)({ref:r,gap:m,columnGap:o,rowGap:u,templateColumns:b},v))}));m.displayName="SimpleGrid"}}]);
//# sourceMappingURL=247.14ef8973.chunk.js.map