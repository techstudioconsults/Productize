var e,r,t,a,o,n,i,l,d,u,s,f,c,h,p,m,b,v,g,y={8707:(e,r,t)=>{var a={"./Module":()=>Promise.all([t.e(619),t.e(262),t.e(562),t.e(852),t.e(813)]).then((()=>()=>t(1813)))},o=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),n=(e,r)=>{if(t.S){var a="default",o=t.S[a];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>o,init:()=>n})}},P={};function w(e){var r=P[e];if(void 0!==r)return r.exports;var t=P[e]={id:e,loaded:!1,exports:{}};return y[e](t,t.exports,w),t.loaded=!0,t.exports}w.m=y,w.c=P,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{31:"8e2cf57a496bf613",35:"4d23a399f82b863d",73:"195eee97e4637f1a",135:"86f26e56fcd71c8d",205:"337d6eb6045cc521",262:"137739323f1cf674",269:"ba6fc74d5f5629a1",274:"f09b12a12e38e8ef",316:"138bfc16c182c549",322:"9d90691593a2cda7",330:"4ae1aec7d6b455c3",399:"9ac417802eb10f4d",454:"000f5b0e546214b1",562:"88885756f02c9a64",580:"cf68d7eb16f6f97f",591:"c46bdf1bf722a167",619:"766e932161053454",662:"3ba3a7e26d264971",751:"d1a93a69478cb8e6",784:"3b4a93260d7f6556",813:"798cf40cb1b2b444",818:"6152fa6cc8953c09",852:"4493953c8e9712f3",898:"adbb78dd8ec7d9dd",924:"5af6210db9151261",959:"18ac02e7d083ba47",985:"10c6b04058217707"}[e]+".js",w.miniCssF=e=>e+".8635c6989c85292c.css",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="dashboard:",w.l=(t,a,o,n)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var s=d[u];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){i=s;break}}i||(l=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[a];var f=(r,a)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(a))),r)return r(a)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{w.S={};var e={},r={};w.I=(t,a)=>{a||(a=[]);var o=r[t];if(o||(o=r[t]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var n=w.S[t],i="dashboard",l=(e,r,t,a)=>{var o=n[e]=n[e]||{},l=o[r];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(o[r]={get:t,from:i,eager:!!a})},d=[];return"default"===t&&(l("@chakra-ui/react","2.8.1",(()=>Promise.all([w.e(454),w.e(619),w.e(135),w.e(322)]).then((()=>()=>w(3454))))),l("@iconify/react","4.1.1",(()=>Promise.all([w.e(274),w.e(619)]).then((()=>()=>w(274))))),l("@productize/dashboard-lib/ui","0.0.0",(()=>Promise.all([w.e(619),w.e(262),w.e(562),w.e(924)]).then((()=>()=>w(8898))))),l("@productize/shared/redux","0.0.0",(()=>Promise.all([w.e(269),w.e(205),w.e(619),w.e(818),w.e(35),w.e(73)]).then((()=>()=>w(5073))))),l("@productize/shared/ui","0.0.0",(()=>Promise.all([w.e(619),w.e(262),w.e(818),w.e(959),w.e(399)]).then((()=>()=>w(2399))))),l("@reduxjs/toolkit","1.9.5",(()=>Promise.all([w.e(31),w.e(269),w.e(751)]).then((()=>()=>w(5751))))),l("react-dom","18.2.0",(()=>Promise.all([w.e(316),w.e(619)]).then((()=>()=>w(8316))))),l("react-redux","8.1.2",(()=>Promise.all([w.e(580),w.e(619),w.e(135)]).then((()=>()=>w(6580))))),l("react-router-dom","6.11.2",(()=>Promise.all([w.e(591),w.e(619)]).then((()=>()=>w(6591))))),l("react","18.2.0",(()=>w.e(784).then((()=>()=>w(2784))))),l("redux-persist","6.0.0",(()=>Promise.all([w.e(31),w.e(330)]).then((()=>()=>w(1330)))))),e[t]=d.length?Promise.all(d).then((()=>e[t]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var o=e[a],n=(typeof o)[0];if(a>=r.length)return"u"==n;var i=r[a],l=(typeof i)[0];if(n!=l)return"o"==n&&"n"==l||"s"==l||"u"==n;if("o"!=n&&"u"!=n&&o!=i)return o<i;a++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,t+="u"==(typeof(l=e[n]))[0]?"-":(a>0?".":"")+(a=2,l);return t}var i=[];for(n=1;n<e.length;n++){var l=e[n];i.push(0===l?"not("+d()+")":1===l?"("+d()+" || "+d()+")":2===l?i.pop()+" "+i.pop():o(l))}return d();function d(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(e,r)=>{if(0 in e){r=t(r);var a=e[0],o=a<0;o&&(a=-a-1);for(var i=0,l=1,d=!0;;l++,i++){var u,s,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(u=r[i]))[0]))return!d||("u"==f?l>a&&!o:""==f!=o);if("u"==s){if(!d||"u"!=f)return!1}else if(d)if(f==s)if(l<=a){if(u!=e[l])return!1}else{if(o?u>e[l]:u<e[l])return!1;u!=e[l]&&(d=!1)}else if("s"!=f&&"n"!=f){if(o||l<=a)return!1;d=!1,l--}else{if(l<=a||s<f!=o)return!1;d=!1}else"s"!=f&&"n"!=f&&(d=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?n(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||a(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},d=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(a)+")",u=(e,r,t,a)=>{var o=l(e,t);if(!n(a,o))throw new Error(d(e,t,o,a));return s(e[t][o])},s=e=>(e.loaded=1,e.get()),c=(f=e=>function(r,t,a,o){var n=w.I(r);return n&&n.then?n.then(e.bind(e,r,w.S[r],t,a,o)):e(r,w.S[r],t,a,o)})(((e,r,t,a)=>r&&w.o(r,t)?s(i(r,t)):a())),h=f(((e,r,t,a,o)=>r&&w.o(r,t)?u(r,0,t,a):o())),p={},m={9619:()=>h("default","react",[4,18,2,0],(()=>w.e(784).then((()=>()=>w(2784))))),1135:()=>h("default","react-dom",[4,18,2,0],(()=>w.e(316).then((()=>()=>w(8316))))),8529:()=>h("default","@chakra-ui/react",[1,2,8,0],(()=>Promise.all([w.e(454),w.e(135)]).then((()=>()=>w(3454))))),2901:()=>h("default","@iconify/react",[1,4,1,1],(()=>w.e(274).then((()=>()=>w(274))))),607:()=>h("default","react-router-dom",[4,6,11,2],(()=>w.e(591).then((()=>()=>w(6591))))),9562:()=>c("default","@productize/shared/ui",(()=>Promise.all([w.e(818),w.e(959),w.e(985)]).then((()=>()=>w(2399))))),1818:()=>h("default","react-redux",[1,8,1,2],(()=>Promise.all([w.e(580),w.e(135)]).then((()=>()=>w(6580))))),3514:()=>h("default","@reduxjs/toolkit",[1,1,9,5],(()=>Promise.all([w.e(31),w.e(751)]).then((()=>()=>w(5751))))),7345:()=>h("default","redux-persist",[1,6,0,0],(()=>Promise.all([w.e(31),w.e(330)]).then((()=>()=>w(1330))))),1959:()=>c("default","@productize/shared/redux",(()=>Promise.all([w.e(269),w.e(205),w.e(35),w.e(662)]).then((()=>()=>w(5073))))),3852:()=>c("default","@productize/dashboard-lib/ui",(()=>w.e(898).then((()=>()=>w(8898)))))},b={35:[3514,7345],135:[1135],262:[8529,2901,607],562:[9562],619:[9619],818:[1818],852:[3852],959:[1959]},w.f.consumes=(e,r)=>{w.o(b,e)&&b[e].forEach((e=>{if(w.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}},a=r=>{delete p[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var o=m[e]();o.then?r.push(p[e]=o.then(t).catch(a)):t(o)}catch(e){a(e)}}))},v=e=>new Promise(((r,t)=>{var a=w.miniCssF(e),o=w.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var o=(i=t[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){var i;if((o=(i=n[a]).getAttribute("data-href"))===e||o===r)return i}})(a,o))return r();((e,r,t,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)t();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=l,o.parentNode.removeChild(o),a(d)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),g={966:0},w.f.miniCss=(e,r)=>{g[e]?r.push(g[e]):0!==g[e]&&{813:1}[e]&&r.push(g[e]=v(e).then((()=>{g[e]=0}),(r=>{throw delete g[e],r})))},(()=>{var e={966:0};w.f.j=(r,t)=>{var a=w.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^((|1)35|(26|56|85)2|619|818|959)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=w.p+w.u(r),i=new Error;w.l(n,(t=>{if(w.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,o,[n,i,l]=t,d=0;if(n.some((r=>0!==e[r]))){for(a in i)w.o(i,a)&&(w.m[a]=i[a]);l&&l(w)}for(r&&r(t);d<n.length;d++)o=n[d],w.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkdashboard=self.webpackChunkdashboard||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),w.nc=void 0;var k=w(8707),x=k.get,S=k.init;export{x as get,S as init};