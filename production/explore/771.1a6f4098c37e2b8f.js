/*! For license information please see 771.1a6f4098c37e2b8f.js.LICENSE.txt */
(self.webpackChunkexplore=self.webpackChunkexplore||[]).push([[771,322,877],{3771:(e,n,l)=>{l.r(n),l.d(n,{AccordionComponent:()=>f,CardLayout:()=>j,DualSectionLayout:()=>u,DualSectionLayoutList:()=>y,Hero:()=>m,Navbar:()=>x,SectionLayout:()=>p,SharedSection:()=>g});var o=l(8529),a=l(607);const i={active:"navbar_active__CsDMv"},r=[{id:1,name:"Explore",path:"",type:"dropdown",subLinks:[{id:1,name:"All",path:"/explore"},{id:2,name:"3D",path:"/explore/3d"},{id:3,name:"Audio",path:"/explore/audio"},{id:4,name:"Business/Finance",path:"/explore/finance"},{id:5,name:"Comics",path:"/explore/comics"},{id:6,name:"Design",path:"/explore/design"},{id:7,name:"Drawing/Painting",path:"/explore/art"},{id:8,name:"Education",path:"/explore/education"}]},{id:2,name:"Features",path:"/features",type:"link"},{id:3,name:"Pricing",path:"/pricing",type:"link"}];var t=l(2901),h=l(2322);const s=({isScroll:e,link:n,linkColor:l})=>{var i;const r=null==(i=n.subLinks)?void 0:i.map((e=>(0,h.jsx)(a.NavLink,{to:e.path,children:(0,h.jsx)(o.MenuItem,{justifyContent:"start",fontSize:"sm",fontWeight:500,children:e.name})},e.id)));return(0,h.jsxs)(o.Menu,{children:[(0,h.jsx)(o.MenuButton,{_hover:{color:"red.100",bg:"transparent"},color:{base:l,xl:e?"black":l},fontWeight:"thin",bg:"transparent",as:o.Button,rightIcon:(0,h.jsx)(t.Icon,{icon:"mdi:chevron-down"}),children:(0,h.jsx)(o.Text,{fontSize:"16px",children:n.name})}),(0,h.jsx)(o.MenuList,{ml:-14,color:"black",children:r})]})},c=({isScroll:e,isMobile:n,linkColor:l})=>{const t=r.map((n=>"dropdown"===n.type?(0,h.jsx)(s,{linkColor:l,isScroll:e,link:n},n.id):(0,h.jsx)(a.NavLink,{to:n.path,className:({isActive:e})=>e?i.active:i.inactive,children:(0,h.jsx)(o.ListItem,{children:n.name})},n.id)));return(0,h.jsx)(o.OrderedList,{width:"fit-content",display:{base:n?"flex":"none",xl:"flex"},flexDir:n?"column":"row",color:n||e?"black":l,alignItems:{xl:"center"},m:"auto",gap:{base:10,xl:10},children:t})};var d=l(9562),b=l(9619);const x=({isAuth:e})=>{const[n,l]=(0,b.useState)(!1),[i,r]=(0,b.useState)("white"),{pathname:t}=(0,a.useLocation)(),s=(0,b.useCallback)((()=>{r("/"===t?"grey.100":"yellow.300")}),[t]);return(0,b.useEffect)((()=>{s()}),[s]),(0,b.useEffect)((()=>{const e=()=>{window.scrollY>=10?l(!0):0===window.scrollY&&l(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,h.jsxs)(o.Flex,{className:"cc-container",justifyContent:"space-between",alignItems:"center",height:"5rem",paddingInline:{base:4,xl:0},children:[(0,h.jsx)(o.Center,{children:(0,h.jsx)(o.Link,{as:a.Link,to:"/",children:(0,h.jsx)(o.Image,{alt:"logo",src:"https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png"})})}),(0,h.jsx)(c,{linkColor:i,isScroll:n,isMobile:!1}),(0,h.jsx)(o.Flex,{display:{base:"none",xl:"flex"},gap:2,children:e?(0,h.jsx)(d.AvatarComp,{linkColor:i,isScroll:n}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.Link,{as:a.Link,to:"/auth/login",children:(0,h.jsx)(d.SharedButton,{fontSize:{base:"sm",md:"md"},text:"Login",width:"160px",height:"48px",bgColor:"transparent",textColor:n?"black":i,borderRadius:"4px"})}),(0,h.jsx)(o.Link,{as:a.Link,to:"/auth",children:(0,h.jsx)(d.SharedButton,{fontSize:{base:"sm",md:"md"},text:"Get Started",width:"160px",height:"48px",bgColor:"yellow.200",textColor:n?"black":i,borderRadius:"4px"})})]})}),(0,h.jsx)(d.Sidenav,{links:(0,h.jsx)(c,{isMobile:!0})})]})},m=({children:e,height:n,bgImg:l,bgColor:a})=>(0,h.jsx)(o.Flex,{justifyContent:"center",top:0,height:n,width:"100%",bgImage:l,bgPosition:"bottom",bgSize:"contain",bgRepeat:"no-repeat",bgColor:a,children:e}),p=({children:e,height:n,bgColor:l,bgImg:a})=>(0,h.jsx)(o.Box,{height:n,bgColor:l,bgImage:a,children:e}),u=({children:e,img:n,flexDirection:l,textSectionBgColor:a,imgSectionBgColor:i,justifyContent:r,imgPosition:t,imgFit:s,height:c})=>(0,h.jsxs)(o.Flex,{height:c,flexDir:l,children:[(0,h.jsx)(o.Flex,{justifyContent:r,bgColor:a,flex:1,children:e}),(0,h.jsx)(o.Flex,{justifyContent:"flex-end",overflow:"hidden",bgColor:i,flex:1,children:(0,h.jsx)(o.Image,{objectFit:s,objectPosition:t,src:n,alt:"img"})})]}),y=({title:e,subTitle:n,listItems:l,iconColor:i,shouldShowButton:r})=>{const s=null==l?void 0:l.map(((e,n)=>(0,h.jsxs)(o.ListItem,{display:"flex",alignItems:"flex-start",gap:2,children:[(0,h.jsx)(t.Icon,{fontSize:"1.3rem",color:i,icon:"mdi:star-four-points"}),(0,h.jsx)(o.Text,{children:e})]},n)));return(0,h.jsxs)(o.Box,{children:[(0,h.jsx)(o.Text,{as:"h1",fontWeight:700,lineHeight:"shorter",children:e}),(0,h.jsx)(o.Text,{as:"h5",fontWeight:100,my:10,children:n}),(0,h.jsx)(o.List,{spacing:3,children:s}),(0,h.jsx)(o.Box,{mt:10,display:r?"block":"none",children:(0,h.jsx)(a.Link,{to:"/auth",children:(0,h.jsx)(d.SharedButton,{text:"Get Started",width:{base:"100%",xl:"22.5rem"},height:"48px",bgColor:"yellow.200",textColor:"white",borderRadius:"4px",fontSize:{base:"sm",md:"md"}})})})]})},g=()=>(0,h.jsx)(p,{height:"",bgColor:"purple.200",bgImg:"",children:(0,h.jsxs)(o.Container,{maxW:"70rem",textAlign:"center",py:20,color:"purple.100",children:[(0,h.jsx)(o.Text,{as:"h3",children:"Starting monetize on Productize"}),(0,h.jsx)(o.Text,{as:"h5",fontWeight:100,maxW:"35rem",m:"auto",my:5,children:"With Productize, turn your creativity into a lucrative business venture by showcasing and selling your work online."}),(0,h.jsx)(o.Link,{as:a.Link,to:"/auth",children:(0,h.jsx)(d.SharedButton,{text:"Create an Account",width:{base:"100%",xl:"307px"},height:"56px",bgColor:"yellow.200",textColor:"white",borderRadius:"4px",fontSize:{base:"sm",xl:"md"}})})]})}),j=({children:e,bgColor:n,width:l,height:a,borderRadius:i})=>(0,h.jsx)(o.Card,{boxShadow:"3.9034483432769775px 3.9034483432769775px 0px 0.9758620858192444px #0E0A2D;\n",bgColor:n,width:l,height:a,borderRadius:i,children:e}),f=()=>(0,h.jsxs)(o.Accordion,{allowMultiple:!0,children:[(0,h.jsxs)(o.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(o.AccordionButton,{children:[(0,h.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"Do I have to subscribe on productize? Receive money from anywhere, blah blah blah blah y"}),(0,h.jsx)(o.AccordionIcon,{})]})}),(0,h.jsx)(o.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,h.jsxs)(o.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(o.AccordionButton,{children:[(0,h.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"When can I withdraw from my wallet"}),(0,h.jsx)(o.AccordionIcon,{})]})}),(0,h.jsx)(o.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,h.jsxs)(o.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(o.AccordionButton,{children:[(0,h.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"What online payments are accepted?"}),(0,h.jsx)(o.AccordionIcon,{})]})}),(0,h.jsx)(o.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,h.jsxs)(o.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(o.AccordionButton,{children:[(0,h.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"Can I sell without creating an account?"}),(0,h.jsx)(o.AccordionIcon,{})]})}),(0,h.jsx)(o.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,h.jsxs)(o.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(o.AccordionButton,{children:[(0,h.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"Is Productize delivery standard?"}),(0,h.jsx)(o.AccordionIcon,{})]})}),(0,h.jsx)(o.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,h.jsxs)(o.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(o.AccordionButton,{children:[(0,h.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"When can I withdraw from my wallet"}),(0,h.jsx)(o.AccordionIcon,{})]})}),(0,h.jsx)(o.AccordionPanel,{pb:4,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})},1837:(e,n,l)=>{var o=l(9619),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,t=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,l){var o,i={},s=null,c=null;for(o in void 0!==l&&(s=""+l),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,o)&&!h.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:a,type:e,key:s,ref:c,props:i,_owner:t.current}}n.Fragment=i,n.jsx=s,n.jsxs=s},2322:(e,n,l)=>{e.exports=l(1837)}}]);