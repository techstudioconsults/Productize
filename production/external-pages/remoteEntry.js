var e,r,t,a,n,o,i,l,u,d,f,s,c,h,p,m,v,b,g,y={707:(e,r,t)=>{var a={"./Module":()=>Promise.all([t.e(619),t.e(775),t.e(85),t.e(178)]).then((()=>()=>t(178)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},w={};function k(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return y[e](t,t.exports,k),t.loaded=!0,t.exports}k.m=y,k.c=w,k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{85:"32eb011906d8b841",135:"8ac0e27d737e511c",178:"03c80fad4b540797",215:"7b2aee473941fbb6",274:"9ba7196f59a9776f",316:"125e51f1517d5d08",322:"e10e457aeed6909e",591:"1ba4968c7b05a97e",619:"e66d3fd095211147",669:"053c6277ecbcacb4",775:"f63b59cdb3ccd76f",784:"eab6d9b51f0e56a8",901:"4fb10242f4b58216",976:"b9dac3e9ab4c6f92"}[e]+".js",k.miniCssF=e=>e+"."+{178:"25eaad32a057b5bb",669:"1d82004afdf1c406",976:"1d82004afdf1c406"}[e]+".css",k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="external-pages:",k.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+n){i=f;break}}i||(l=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var s=(r,a)=>{i.onerror=i.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{k.S={};var e={},r={};k.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var o=k.S[t],i="external-pages",l=(e,r,t,a)=>{var n=o[e]=o[e]||{},l=n[r];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(n[r]={get:t,from:i,eager:!!a})},u=[];return"default"===t&&(l("@chakra-ui/react","2.8.0",(()=>Promise.all([k.e(215),k.e(619),k.e(135),k.e(322)]).then((()=>()=>k(215))))),l("@iconify/react","4.1.1",(()=>Promise.all([k.e(274),k.e(619)]).then((()=>()=>k(274))))),l("@productize/external-pages-lib/ui","0.0.0",(()=>Promise.all([k.e(619),k.e(775),k.e(901),k.e(976)]).then((()=>()=>k(669))))),l("react-dom","18.2.0",(()=>Promise.all([k.e(316),k.e(619)]).then((()=>()=>k(316))))),l("react-router-dom","6.11.2",(()=>Promise.all([k.e(591),k.e(619)]).then((()=>()=>k(591))))),l("react","18.2.0",(()=>k.e(784).then((()=>()=>k(784)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():n(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,l=1,u=!0;;l++,i++){var d,f,s=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(d=r[i]))[0]))return!u||("u"==s?l>a&&!n:""==s!=n);if("u"==f){if(!u||"u"!=s)return!1}else if(u)if(s==f)if(l<=a){if(d!=e[l])return!1}else{if(n?d>e[l]:d<e[l])return!1;d!=e[l]&&(u=!1)}else if("s"!=s&&"n"!=s){if(n||l<=a)return!1;u=!1,l--}else{if(l<=a||f<s!=n)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?o(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||a(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},u=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",d=(e,r,t,a)=>{var n=l(e,t);if(!o(a,n))throw new Error(u(e,t,n,a));return f(e[t][n])},f=e=>(e.loaded=1,e.get()),c=(s=e=>function(r,t,a,n){var o=k.I(r);return o&&o.then?o.then(e.bind(e,r,k.S[r],t,a,n)):e(r,k.S[r],t,a,n)})(((e,r,t,a)=>r&&k.o(r,t)?f(i(r,t)):a())),h=s(((e,r,t,a,n)=>r&&k.o(r,t)?d(r,0,t,a):n())),p={},m={619:()=>h("default","react",[4,18,2,0],(()=>k.e(784).then((()=>()=>k(784))))),135:()=>h("default","react-dom",[4,18,2,0],(()=>k.e(316).then((()=>()=>k(316))))),529:()=>h("default","@chakra-ui/react",[1,2,8,0],(()=>Promise.all([k.e(215),k.e(135)]).then((()=>()=>k(215))))),607:()=>h("default","react-router-dom",[4,6,11,2],(()=>k.e(591).then((()=>()=>k(591))))),901:()=>h("default","@iconify/react",[1,4,1,1],(()=>k.e(274).then((()=>()=>k(274))))),85:()=>c("default","@productize/external-pages-lib/ui",(()=>Promise.all([k.e(901),k.e(669)]).then((()=>()=>k(669)))))},v={85:[85],135:[135],619:[619],775:[529,607],901:[901]},k.f.consumes=(e,r)=>{k.o(v,e)&&v[e].forEach((e=>{if(k.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,k.m[e]=t=>{delete k.c[e],t.exports=r()}},a=r=>{delete p[e],k.m[e]=t=>{throw delete k.c[e],r}};try{var n=m[e]();n.then?r.push(p[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},b=e=>new Promise(((r,t)=>{var a=k.miniCssF(e),n=k.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var n=(i=t[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var i;if((n=(i=o[a]).getAttribute("data-href"))===e||n===r)return i}})(a,n))return r();((e,r,t,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,n.parentNode.removeChild(n),a(u)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),g={983:0},k.f.miniCss=(e,r)=>{g[e]?r.push(g[e]):0!==g[e]&&{178:1,669:1,976:1}[e]&&r.push(g[e]=b(e).then((()=>{g[e]=0}),(r=>{throw delete g[e],r})))},(()=>{var e={983:0};k.f.j=(r,t)=>{var a=k.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^((13|77|8)5|619|901)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=k.p+k.u(r),i=new Error;k.l(o,(t=>{if(k.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in i)k.o(i,a)&&(k.m[a]=i[a]);l&&l(k)}for(r&&r(t);u<o.length;u++)n=o[u],k.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkexternal_pages=self.webpackChunkexternal_pages||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),k.nc=void 0;var P=k(707),S=P.get,x=P.init;export{S as get,x as init};