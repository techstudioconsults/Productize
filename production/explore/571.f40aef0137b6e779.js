/*! For license information please see 571.f40aef0137b6e779.js.LICENSE.txt */
(self.webpackChunkexplore=self.webpackChunkexplore||[]).push([[571,322],{728:(e,t,i)=>{i.d(t,{Z:()=>N});var r=i(607),n=i(619),s=i(529);const l=i.p+"Group 1.24bbdbb92cb237dc.png";var o=i(322);const a=e=>(0,o.jsx)(s.Box,{w:"100%",maxW:"1440px",m:"0 auto",textAlign:"center",padding:"1rem 10rem",children:e.children}),c=()=>(0,o.jsxs)(s.Box,{as:"section",pos:"relative",children:[(0,o.jsxs)(a,{children:[(0,o.jsx)(s.Box,{display:"flex",justifyContent:"center",alignItems:"center",mt:"5.7rem"}),(0,o.jsxs)(s.Box,{bgColor:"#FBE69A",borderRadius:"8px",pos:"relative",height:"9rem",pl:"2rem",pt:"1.5rem",pb:"2.5rem",children:[(0,o.jsx)(s.Text,{textAlign:"start",color:"#0E0A2D",fontSize:"2rem",fontWeight:"bold",lineHeight:10,w:"25.4375rem",children:"Unlock your potential with creator’s curated course."}),(0,o.jsx)(s.Image,{src:l,pos:"absolute",right:"1rem",top:"-.1rem"})]})]}),(0,o.jsx)(s.Box,{as:"section"})]}),d=i.p+"forward-icon.adbf02744d257f98be9e006ce9217c8e.svg",x=({image:e,heading:t,rate:i,count:r,price:n})=>(0,o.jsxs)(s.Box,{display:"flex",flexDir:"column",justifyContent:"start",alignItems:"flex-start",border:"1px solid #F3F2FB",p:".625rem",w:"14.0625rem",h:"19.8125rem",cursor:"pointer",_hover:{boxShadow:"5px 5px 5px #000",transform:"scale(1.01)"},children:[(0,o.jsx)(s.Box,{display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center",mb:".75rem",children:(0,o.jsx)(s.Image,{src:e,alt:t,w:"100%",h:"12.063rem",objectFit:"contain"})}),(0,o.jsx)(s.Heading,{fontSize:"sm",fontWeight:"bold",lineHeight:5,color:"hsla(248, 11%, 7%, 1)",textAlign:"start",children:t}),(0,o.jsxs)(s.Box,{mt:".625rem",children:[(0,o.jsx)(s.Text,{as:"span",fontSize:"xs",lineHeight:4,pr:".625rem",textAlign:"left",children:"By Temilade Openiyi"}),(0,o.jsx)(s.Text,{as:"span",fontSize:"xs",lineHeight:4,ml:"0.5rem",pr:".625rem",children:i}),(0,o.jsx)(s.Text,{as:"span",fontSize:"xs",lineHeight:4,children:r})]}),(0,o.jsxs)(s.Text,{display:"flex",justifyContent:"start",alignSelf:"flex-start",fontSize:"sm",fontWeight:"bold",lineHeight:5,color:"#6D5DD3",textAlign:"start",children:["$",n]})]});var g=i(658),h=i.n(g);const m=()=>{const[e,t]=(0,n.useState)([]),[i,r]=(0,n.useState)(null);(0,n.useEffect)((()=>{l()}),[]);const l=async()=>{try{const e=await h().get("https://fakestoreapi.com/products?limit=4");200!==e.status&&r("Network response was not okay"),t(e.data),r(null)}catch(e){console.error(e),r("Failed to fetch data from the API")}};return(0,o.jsx)(s.Box,{as:"section",children:(0,o.jsxs)(a,{children:[(0,o.jsxs)(s.Flex,{justify:{lg:"space-between"},align:{lg:"center"},mt:{lg:"3rem"},mb:{lg:"1rem"},children:[(0,o.jsx)(s.Heading,{fontSize:{lg:"2xl"},fontWeight:{lg:"bold"},lineHeight:{lg:8},children:"Featured"}),(0,o.jsx)(s.Flex,{children:(0,o.jsx)(s.Image,{src:d,alt:"forward-icon",w:"2rem",h:"2rem",mr:{lg:".5rem"}})})]}),i?(0,o.jsxs)(s.Box,{children:["Error: ",i]}):(0,o.jsx)(s.Grid,{templateColumns:"repeat(4, 1fr)",justifyContent:"space-between",alignItems:"center",gap:"1.64rem",children:e.map((e=>(0,o.jsx)(x,{image:e.image,heading:e.title,rate:e.rating.rate,count:e.rating.count,price:e.price},e.id)))})]})})},p=()=>{const[e,t]=(0,n.useState)([]),[i,r]=(0,n.useState)(null);(0,n.useEffect)((()=>{l()}),[]);const l=async()=>{try{const e=await h().get("https://fakestoreapi.com/products?limit=4");if(200!==e.status)throw new Error("Network response was not okay");t(e.data),r(null)}catch(e){console.error(e),r("Failed to fetch data from the API")}};return(0,o.jsx)(s.Box,{as:"section",children:(0,o.jsxs)(a,{children:[(0,o.jsxs)(s.Flex,{justify:{lg:"space-between"},align:{lg:"center"},mt:{lg:"3rem"},mb:{lg:"1rem"},children:[(0,o.jsx)(s.Heading,{fontSize:{lg:"2xl"},fontWeight:{lg:"bold"},lineHeight:{lg:8},children:"Based on your recent search"}),(0,o.jsx)(s.Flex,{children:(0,o.jsx)(s.Image,{src:d,alt:"forward-icon",w:"2rem",h:"2rem",mr:{lg:".5rem"}})})]}),i?(0,o.jsxs)(s.Box,{children:["Error: ",i]}):(0,o.jsx)(s.Grid,{templateColumns:"repeat(4, 1fr)",justifyContent:"center",gap:"1.64rem",children:e.map((e=>(0,o.jsx)(x,{image:e.image,heading:e.title,rate:e.rating.rate,count:e.rating.count,price:e.price},e.id)))})]})})},j=()=>{const[e,t]=(0,n.useState)([]),[i,r]=(0,n.useState)(null);(0,n.useEffect)((()=>{l()}),[]);const l=async()=>{try{const e=await h().get("https://fakestoreapi.com/products?limit=4");if(200!==e.status)throw new Error("Network response was not okay");console.log(e.data),t(e.data),r(null)}catch(e){console.error(e),r("Failed to fetch data from the API")}};return(0,o.jsx)(s.Box,{as:"section",children:(0,o.jsxs)(a,{children:[(0,o.jsxs)(s.Flex,{justify:{lg:"space-between"},align:{lg:"center"},mt:{lg:"3rem"},mb:{lg:"1rem"},children:[(0,o.jsx)(s.Heading,{fontSize:{lg:"2xl"},fontWeight:"bold",lineHeight:{lg:8},children:"Most downloaded"}),(0,o.jsx)(s.Flex,{children:(0,o.jsx)(s.Image,{src:d,alt:"forward-icon",w:"2rem",h:"2rem",mr:{lg:".5rem"}})})]}),i?(0,o.jsxs)(s.Box,{children:["Error: ",i]}):(0,o.jsx)(s.Grid,{templateColumns:{lg:"repeat(4, 1fr)"},justifyContent:{lg:"center"},alignItems:{lg:"center"},gap:{lg:"1.64rem"},children:e.map((e=>(0,o.jsx)(x,{image:e.image,heading:e.title,rate:e.rating.rate,count:e.rating.count,price:e.price},e.id)))})]})})},u=i.p+"logo.bbbf150d133d182c64b8e344fb87d378.svg",f=i.p+"search.545990f88aed5fa71c2df5d1d7e2901f.svg",b=[{id:1,li:"All",path:"/all"},{id:2,li:"3D",path:"/3d"},{id:3,li:"Audio",path:"/audio"},{id:4,li:"Business/Finance",path:"/business"},{id:5,li:"Comics",path:"/comics"},{id:6,li:"Design",path:"/design"},{id:7,li:"Design/painting",path:"/painting"},{id:8,li:"Education",path:"/education"},{id:9,li:"Fiction books",path:"/fiction"},{id:10,li:"Motion assets",path:"/motionAssets"},{id:11,li:"Printing",path:"/printing"}],w=()=>{const e=b.map((e=>(0,o.jsx)(s.Box,{children:(0,o.jsx)(r.NavLink,{to:e.path,children:e.li})},e.id)));return(0,o.jsx)(s.Flex,{align:{lg:"center"},justify:{lg:"space-between"},fontSize:{lg:"sm"},fontWeight:{lg:"medium"},lineHeight:{lg:5},whiteSpace:"nowrap",gap:{lg:"2.47rem"},mt:{lg:"2.38rem"},mb:{lg:".75rem"},children:e})},y=()=>(0,o.jsx)(s.Box,{background:"#17B6BA",h:"9rem",children:(0,o.jsxs)(a,{children:[(0,o.jsxs)(s.Box,{as:"nav",display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,o.jsx)(s.Flex,{align:{lg:"center"},children:(0,o.jsx)("img",{src:u,alt:"Website logo",width:"100%"})}),(0,o.jsxs)(s.Flex,{justify:{lg:"center"},align:{lg:"center"},gap:"1.5rem",position:"relative",children:[(0,o.jsx)(s.Image,{src:f,alt:"Search icon",pos:"absolute",left:"1rem",zIndex:1e3}),(0,o.jsx)(s.Input,{type:"text",placeholder:"Search",_placeholder:{color:"#fff"},display:"flex",flex:"1 0 0",fontSize:"md",fontWeight:"normal",lineHeight:6,textIndent:"2rem",w:"12.875rem",h:"3rem",p:".75rem",borderRadius:"4px",bgColor:"#aedee0"}),(0,o.jsx)(r.Link,{to:"cart",children:(0,o.jsx)(s.Image,{alt:"cart icon",height:"32px",width:"32px"})}),(0,o.jsx)(s.Flex,{as:"button",justify:{lg:"center"},align:{lg:"center"},fontSize:{lg:"md"},w:{lg:"11.94rem"},h:{lg:"3rem"},p:{lg:".75rem 2.25rem"},color:"#f3f2fb",_hover:{bgColor:"#f6c21c",opacity:"0.7"},bgColor:"#f6c21c",fontWeight:{lg:"medium"},lineHeight:{lg:6},borderRadius:"4px",children:"Create Account"})]})]}),(0,o.jsx)(w,{})]})}),A=i.p+"facebook.a7ce43546cfe70a341cecc723b4587e6.svg",F=i.p+"pinterest.6bcb8f2089f6884be3a88cdaeb4d8ab8.svg",B=i.p+"twitter.c9ff35978c7ac2f573f60d6b77f77bc0.svg",v=i.p+"dribble.a793d0e718eb34173bd491646c704973.svg",S=()=>(0,o.jsxs)(s.Box,{background:"#F3F2FB",display:"flex",flexDirection:"column",marginTop:"9.625rem",paddingTop:"1rem",children:[(0,o.jsx)(a,{children:(0,o.jsxs)(s.Flex,{justifyContent:{lg:"space-between"},alignItems:"center",children:[(0,o.jsxs)(s.Box,{children:[(0,o.jsx)(s.Heading,{fontSize:"2xl",fontWeight:"medium",lineHeight:"tall",textAlign:"start",children:"Share knowledge online"}),(0,o.jsx)(s.Text,{fontSize:{lg:"md"},fontWeight:{lg:"medium"},lineHeight:{lg:"base"},children:"Create an online video course, reach your community, and earn money"})]}),(0,o.jsx)(s.Flex,{as:"button",justify:"center",align:"center",fontSize:"md",fontWeight:500,lineHeight:"base",padding:".8rem 1.6rem",background:"#6D5DD3",color:"hsla(248, 53%, 97%, 1)",_hover:{bgColor:"#6D5DD3",opacity:.9},borderRadius:"4px",children:"Create Product"})]})}),(0,o.jsx)(s.Box,{border:"1px solid #cfcfd0"}),(0,o.jsxs)(a,{children:[(0,o.jsxs)(s.Flex,{gap:"4.125rem",marginTop:"1rem",children:[(0,o.jsx)(s.Box,{children:(0,o.jsx)("img",{src:u,alt:"Logo"})}),(0,o.jsxs)(s.Box,{fontSize:"md",fontWeight:"medium",lineHeight:"base",cursor:"pointer",textAlign:"start",children:[(0,o.jsx)("p",{children:"Privacy Policy"}),(0,o.jsx)("p",{children:"Cookie settings"}),(0,o.jsx)("p",{children:"Sitemap"}),(0,o.jsx)("p",{children:"Become a creator"})]}),(0,o.jsxs)(s.Box,{fontSize:"md",fontWeight:"medium",lineHeight:"base",cursor:"pointer",textAlign:"start",children:[(0,o.jsx)("p",{children:"Blog"}),(0,o.jsx)("p",{children:"Help and support"}),(0,o.jsx)("p",{children:"Terms"})]}),(0,o.jsxs)(s.Box,{fontSize:"md",fontWeight:"medium",lineHeight:"base",cursor:"pointer",textAlign:"start",children:[(0,o.jsx)("p",{children:"About us"}),(0,o.jsx)("p",{children:"Contact us"})]})]}),(0,o.jsxs)(s.Flex,{justify:"space-between",align:"center",paddingBottom:"2.5rem",paddingTop:".6rem",children:[(0,o.jsx)(s.Box,{children:(0,o.jsx)("span",{children:"2023"})}),(0,o.jsxs)(s.Flex,{align:"center",gap:"1.4rem",cursor:"pointer",children:[(0,o.jsx)("img",{src:A,alt:"Facebook"}),(0,o.jsx)("img",{src:F,alt:"Pinterest"}),(0,o.jsx)("img",{src:B,alt:"Twitter"}),(0,o.jsx)("img",{src:v,alt:"Dribble"})]})]})]})]}),I=e=>(0,o.jsxs)("div",{children:[(0,o.jsx)(y,{}),e.children,(0,o.jsx)(S,{})]}),C=()=>(0,o.jsxs)(I,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{}),(0,o.jsx)(p,{}),(0,o.jsx)(j,{})]}),D=e=>(0,o.jsx)(s.Box,{children:e.children}),k="data:image/png;base64,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",T=i.p+"card.125d09a2486a3640.png",E=i.p+"trash.01da4481e8dfdc1835ff45331d3cfcb9.svg",P=[{id:1,image:T,heading:"UI Design Systems Mastery",avatar:k,text:"Temilade Openiyi",qty:"Qty: 1",price:"₦3,000",delete:E},{id:2,image:T,heading:"UI Design Systems Mastery",avatar:k,text:"Temilade Openiyi",qty:"Qty: 1",price:"₦3,000",delete:E},{id:3,image:T,heading:"UI Design Systems Mastery",avatar:k,text:"Temilade Openiyi",qty:"Qty: 1",price:"₦3,000",delete:E},{id:4,total:"Total",totalPrice:"₦9,000"}],H=()=>{const e=()=>{alert("Clicked"),console.log("I was clicked1")},t=P.map(((t,i)=>(0,o.jsxs)(s.Box,{as:"section",p:"1rem",children:[(0,o.jsxs)(s.Flex,{justify:"space-between",align:"flex-start",p:"1rem 0",borderBottom:"1px solid blue",children:[(0,o.jsxs)(s.Box,{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.75rem",children:[(0,o.jsx)(s.Box,{children:(0,o.jsx)(s.Image,{src:t.image})}),(0,o.jsx)(s.Box,{display:"flex",flexDir:"column",justifyContent:"center",alignItems:"start"})]}),(0,o.jsxs)(s.Box,{children:[(0,o.jsx)(s.Text,{children:t.price}),(0,o.jsx)(s.Image,{src:t.delete,onClick:e})]})]}),(0,o.jsxs)(s.Box,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,o.jsx)(s.Text,{children:t.total}),(0,o.jsx)(s.Text,{children:t.totalPrice})]})]},i)));return(0,o.jsx)(D,{children:(0,o.jsx)(a,{children:(0,o.jsx)(s.Box,{w:"52.25rem",borderRadius:"8px",border:"1px solid #cfcfd0",mt:"2rem",children:t})})})},R=()=>(0,o.jsx)(I,{children:(0,o.jsx)(H,{})}),W=i.p+"lock-icon.7f70ef7995d36fadbac574ea92887c3d.svg",z=()=>(0,o.jsx)(s.Box,{background:"#F3F3F3",h:{lg:"5rem"},children:(0,o.jsx)(a,{children:(0,o.jsxs)(s.Box,{as:"nav",display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,o.jsx)(s.Flex,{align:{lg:"center"},children:(0,o.jsx)("img",{src:u,alt:"Website logo",width:"100%"})}),(0,o.jsxs)(s.Flex,{justify:{lg:"center"},align:{lg:"center"},gap:"1.5rem",position:"relative",children:[(0,o.jsx)(s.Image,{src:f,alt:"Search icon",pos:"absolute",left:"1rem",zIndex:1e3}),(0,o.jsx)(s.Input,{type:"text",placeholder:"Search",_placeholder:{color:"#fff"},display:"flex",flex:"1 0 0",fontSize:"md",fontWeight:"normal",lineHeight:6,textIndent:"2rem",w:"12.875rem",h:"3rem",p:".75rem",borderRadius:"4px",bgColor:"#F3F3F3"}),(0,o.jsx)(s.Image,{src:W,alt:"Lock icon",height:"32px",width:"32px"}),(0,o.jsx)(s.Flex,{as:"button",justify:{lg:"center"},align:{lg:"center"},fontSize:{lg:"md"},w:{lg:"11.94rem"},h:{lg:"3rem"},p:{lg:".75rem 2.25rem"},color:"#f3f2fb",_hover:{bgColor:"#f6c21c",opacity:"0.7"},bgColor:"#f6c21c",fontWeight:{lg:"medium"},lineHeight:{lg:6},borderRadius:"4px",children:"Create Account"})]})]})})}),U=e=>(0,o.jsxs)("div",{children:[(0,o.jsx)(z,{}),e.children,(0,o.jsx)(S,{})]}),O=()=>(0,o.jsxs)(s.Box,{mt:{lg:"3rem"},children:[(0,o.jsxs)(s.Flex,{justify:"space-between",align:"center",children:[(0,o.jsx)(s.Heading,{children:"Filter"}),(0,o.jsx)(s.Text,{mr:{lg:"1.71rem"},children:"Clear"})]}),(0,o.jsx)(s.Flex,{children:(0,o.jsxs)("select",{name:"show",children:[(0,o.jsx)("option",{value:"show",children:"Showing"}),(0,o.jsx)("option",{value:"show",children:"Design"}),(0,o.jsx)("option",{value:"show",children:"Autobus"}),(0,o.jsx)("option",{value:"show",children:"Painting"})]})}),(0,o.jsx)(s.Flex,{m:{lg:"1.43rem 0"},children:(0,o.jsxs)("select",{name:"sort",children:[(0,o.jsx)("option",{value:"show",children:"Sort by"}),(0,o.jsx)("option",{value:"show",children:"Design"}),(0,o.jsx)("option",{value:"show",children:"Autobus"}),(0,o.jsx)("option",{value:"show",children:"Painting"})]})}),(0,o.jsx)(s.Flex,{children:(0,o.jsxs)("select",{name:"rating",children:[(0,o.jsx)("option",{value:"show",children:"Rating"}),(0,o.jsx)("option",{value:"show",children:"Design"}),(0,o.jsx)("option",{value:"show",children:"Autobus"}),(0,o.jsx)("option",{value:"show",children:"Painting"})]})}),(0,o.jsx)(s.Flex,{mt:{lg:"1.43rem"},children:(0,o.jsxs)("select",{name:"show",children:[(0,o.jsx)("option",{value:"show",children:"Price"}),(0,o.jsx)("option",{value:"show",children:"Design"}),(0,o.jsx)("option",{value:"show",children:"Autobus"}),(0,o.jsx)("option",{value:"show",children:"Painting"})]})})]}),M=()=>{const[e,t]=(0,n.useState)([]),[i,r]=(0,n.useState)(null);(0,n.useEffect)((()=>{l()}),[]);const l=async()=>{try{const e=await h().get("https://fakestoreapi.com/products");200!==e.status&&r("Network response was not okay"),t(e.data),r(null)}catch(e){console.error(e),r("Failed to fetch data from the API")}};return(0,o.jsx)(s.Box,{as:"section",children:(0,o.jsx)(a,{children:(0,o.jsxs)(s.Grid,{templateColumns:{lg:"repeat(2,1fr)"},alignItems:{lg:"flex-start"},children:[(0,o.jsx)(s.GridItem,{children:(0,o.jsx)(O,{})}),(0,o.jsxs)(s.GridItem,{children:[(0,o.jsxs)(s.Flex,{justify:{lg:"space-between"},align:{lg:"center"},mt:{lg:"3rem"},mb:{lg:"1rem"},children:[(0,o.jsx)(s.Heading,{fontSize:{lg:"2xl"},fontWeight:{lg:"bold"},lineHeight:{lg:8},children:"All Design Products"}),(0,o.jsx)(s.Flex,{children:(0,o.jsx)(s.Image,{src:d,alt:"forward-icon",w:"2rem",h:"2rem",mr:{lg:".5rem"}})})]}),i?(0,o.jsxs)(s.Box,{children:["Error: ",i]}):(0,o.jsx)(s.Grid,{templateColumns:"repeat(3, auto)",justifyContent:"space-between",alignItems:"center",gap:"1.64rem",children:e.map((e=>(0,o.jsx)(x,{image:e.image,heading:e.title.slice(0,36),rate:e.rating.rate,count:e.rating.count,price:e.price},e.id)))})]})]})})})},q=()=>(0,o.jsx)(U,{children:(0,o.jsx)(M,{})}),N=function(){const e=(0,r.useLocation)();return console.log(e),(0,o.jsxs)(r.Routes,{children:[(0,o.jsx)(r.Route,{index:!0,element:(0,o.jsx)(C,{})}),(0,o.jsx)(r.Route,{path:"/design",element:(0,o.jsx)(q,{})}),(0,o.jsx)(r.Route,{path:"/cart",element:(0,o.jsx)(R,{})})]})}},837:(e,t,i)=>{var r=i(619),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,i){var r,s={},c=null,d=null;for(r in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},322:(e,t,i)=>{e.exports=i(837)}}]);