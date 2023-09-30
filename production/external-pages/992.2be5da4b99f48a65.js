/*! For license information please see 992.2be5da4b99f48a65.js.LICENSE.txt */
(self.webpackChunkexternal_pages=self.webpackChunkexternal_pages||[]).push([[992,322,73],{9073:(e,n,o)=>{o.r(n),o.d(n,{AccordionComponent:()=>f,CardLayout:()=>j,DualSectionLayout:()=>u,DualSectionLayoutList:()=>g,Hero:()=>m,Navbar:()=>x,PricingCard:()=>w,SectionLayout:()=>p,SharedSection:()=>y});var l=o(8529),i=o(607);const a={active:"navbar_active__CsDMv"},t=[{id:1,name:"Explore",path:"",type:"dropdown",subLinks:[{id:1,name:"All",path:"/explore"},{id:2,name:"3D",path:"/explore/3d"},{id:3,name:"Audio",path:"/explore/audio"},{id:4,name:"Business/Finance",path:"/explore/finance"},{id:5,name:"Comics",path:"/explore/comics"},{id:6,name:"Design",path:"/explore/design"},{id:7,name:"Drawing/Painting",path:"/explore/art"},{id:8,name:"Education",path:"/explore/education"}]},{id:2,name:"Features",path:"/features",type:"link"},{id:3,name:"Pricing",path:"/pricing",type:"link"}];var r=o(2901),h=o(2322);const s=({isScroll:e,link:n,linkColor:o})=>{var a;const t=null==(a=n.subLinks)?void 0:a.map((e=>(0,h.jsx)(i.NavLink,{to:e.path,children:(0,h.jsx)(l.MenuItem,{justifyContent:"start",fontSize:"sm",fontWeight:500,children:e.name})},e.id)));return(0,h.jsxs)(l.Menu,{children:[(0,h.jsx)(l.MenuButton,{_hover:{color:"red.100",bg:"transparent"},color:{base:o,xl:e?"black":o},fontWeight:"thin",bg:"transparent",as:l.Button,rightIcon:(0,h.jsx)(r.Icon,{icon:"mdi:chevron-down"}),children:(0,h.jsx)(l.Text,{fontSize:"16px",children:n.name})}),(0,h.jsx)(l.MenuList,{ml:-14,color:"black",children:t})]})},c=({isScroll:e,isMobile:n,linkColor:o})=>{const r=t.map((n=>"dropdown"===n.type?(0,h.jsx)(s,{linkColor:o,isScroll:e,link:n},n.id):(0,h.jsx)(i.NavLink,{to:n.path,className:({isActive:e})=>e?a.active:a.inactive,children:(0,h.jsx)(l.ListItem,{children:n.name})},n.id)));return(0,h.jsx)(l.OrderedList,{width:"fit-content",display:{base:n?"flex":"none",xl:"flex"},flexDir:n?"column":"row",color:n||e?"black":o,alignItems:{xl:"center"},m:"auto",gap:{base:10,xl:10},children:r})};var d=o(9562),b=o(9619);const x=({isAuth:e})=>{const[n,o]=(0,b.useState)(!1),[a,t]=(0,b.useState)("white"),{pathname:r}=(0,i.useLocation)(),s=(0,b.useCallback)((()=>{t("/"===r?"grey.100":"yellow.300")}),[r]);return(0,b.useEffect)((()=>{s()}),[s]),(0,b.useEffect)((()=>{const e=()=>{window.scrollY>=10?o(!0):0===window.scrollY&&o(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,h.jsxs)(l.Flex,{className:"cc-container",justifyContent:"space-between",alignItems:"center",height:"5rem",paddingInline:{base:4,xl:0},children:[(0,h.jsx)(l.Center,{children:(0,h.jsx)(l.Link,{as:i.Link,to:"/",children:(0,h.jsx)(l.Image,{alt:"logo",src:"https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png"})})}),(0,h.jsx)(c,{linkColor:a,isScroll:n,isMobile:!1}),(0,h.jsx)(l.Flex,{display:{base:"none",xl:"flex"},gap:2,children:e?(0,h.jsx)(d.AvatarComp,{linkColor:a,isScroll:n}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.Link,{as:i.Link,to:"/auth/login",children:(0,h.jsx)(d.SharedButton,{fontSize:{base:"sm",md:"md"},text:"Login",width:"160px",height:"48px",bgColor:"transparent",textColor:n?"black":a,borderRadius:"4px"})}),(0,h.jsx)(l.Link,{as:i.Link,to:"/auth",children:(0,h.jsx)(d.SharedButton,{fontSize:{base:"sm",md:"md"},text:"Get Started",width:"160px",height:"48px",bgColor:"yellow.200",textColor:n?"black":a,borderRadius:"4px"})})]})}),(0,h.jsx)(d.Sidenav,{links:(0,h.jsx)(c,{isMobile:!0})})]})},m=({children:e,height:n,bgImg:o,bgColor:i})=>(0,h.jsx)(l.Flex,{justifyContent:"center",top:0,height:n,width:"100%",bgImage:o,bgPosition:"bottom",bgSize:"contain",bgRepeat:"no-repeat",bgColor:i,children:e}),p=({children:e,height:n,bgColor:o,bgImg:i})=>(0,h.jsx)(l.Box,{height:n,bgColor:o,bgImage:i,children:e}),u=({children:e,img:n,flexDirection:o,textSectionBgColor:i,imgSectionBgColor:a,justifyContent:t,imgPosition:r,imgFit:s,height:c})=>(0,h.jsxs)(l.Flex,{height:c,flexDir:o,children:[(0,h.jsx)(l.Flex,{justifyContent:t,bgColor:i,flex:1,children:e}),(0,h.jsx)(l.Flex,{justifyContent:"flex-end",overflow:"hidden",bgColor:a,flex:1,children:(0,h.jsx)(l.Image,{objectFit:s,objectPosition:r,src:n,alt:"img"})})]}),g=({title:e,subTitle:n,listItems:o,iconColor:i,shouldShowButton:a})=>{const t=null==o?void 0:o.map(((e,n)=>(0,h.jsxs)(l.ListItem,{display:"flex",alignItems:"flex-start",gap:2,children:[(0,h.jsx)(r.Icon,{fontSize:"1.3rem",color:i,icon:"mdi:star-four-points"}),(0,h.jsx)(l.Text,{children:e})]},n)));return(0,h.jsxs)(l.Box,{children:[(0,h.jsx)(l.Text,{as:"h1",fontWeight:700,lineHeight:"shorter",children:e}),(0,h.jsx)(l.Text,{my:10,children:n}),(0,h.jsx)(l.List,{spacing:3,children:t}),(0,h.jsx)(l.Box,{mt:10,display:a?"block":"none",children:(0,h.jsx)(d.SharedButton,{text:"Get Started",width:{base:"100%",xl:"22.5rem"},height:"48px",bgColor:"yellow.200",textColor:"white",borderRadius:"4px",fontSize:{base:"sm",md:"md"}})})]})},y=()=>(0,h.jsx)(p,{height:"",bgColor:"purple.200",bgImg:"",children:(0,h.jsxs)(l.Container,{maxW:"70rem",textAlign:"center",py:20,color:"purple.100",children:[(0,h.jsx)(l.Text,{as:"h3",children:"Starting monetize on Productize"}),(0,h.jsx)(l.Text,{as:"h5",fontWeight:100,maxW:"35rem",m:"auto",my:5,children:"With Productize, turn your creativity into a lucrative business venture by showcasing and selling your work online."}),(0,h.jsx)(l.Link,{as:i.Link,to:"/auth",children:(0,h.jsx)(d.SharedButton,{text:"Create an Account",width:{base:"100%",xl:"307px"},height:"56px",bgColor:"yellow.200",textColor:"white",borderRadius:"4px",fontSize:{base:"sm",xl:"md"}})})]})}),j=({children:e,bgColor:n,width:o,height:i,borderRadius:a})=>(0,h.jsx)(l.Card,{boxShadow:"3.9034483432769775px 3.9034483432769775px 0px 0.9758620858192444px #0E0A2D;\n",bgColor:n,width:o,height:i,borderRadius:a,children:e}),f=()=>(0,h.jsxs)(l.Accordion,{allowMultiple:!0,children:[(0,h.jsxs)(l.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(l.AccordionButton,{children:[(0,h.jsx)(l.Box,{as:"span",flex:"1",textAlign:"left",children:"Do I have to subscribe on productize? Receive money from anywhere, blah blah blah blah y"}),(0,h.jsx)(l.AccordionIcon,{})]})}),(0,h.jsx)(l.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,h.jsxs)(l.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(l.AccordionButton,{children:[(0,h.jsx)(l.Box,{as:"span",flex:"1",textAlign:"left",children:"When can I withdraw from my wallet"}),(0,h.jsx)(l.AccordionIcon,{})]})}),(0,h.jsx)(l.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,h.jsxs)(l.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(l.AccordionButton,{children:[(0,h.jsx)(l.Box,{as:"span",flex:"1",textAlign:"left",children:"What online payments are accepted?"}),(0,h.jsx)(l.AccordionIcon,{})]})}),(0,h.jsx)(l.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,h.jsxs)(l.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(l.AccordionButton,{children:[(0,h.jsx)(l.Box,{as:"span",flex:"1",textAlign:"left",children:"Can I sell without creating an account?"}),(0,h.jsx)(l.AccordionIcon,{})]})}),(0,h.jsx)(l.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,h.jsxs)(l.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(l.AccordionButton,{children:[(0,h.jsx)(l.Box,{as:"span",flex:"1",textAlign:"left",children:"Is Productize delivery standard?"}),(0,h.jsx)(l.AccordionIcon,{})]})}),(0,h.jsx)(l.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,h.jsxs)(l.AccordionItem,{py:3,children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(l.AccordionButton,{children:[(0,h.jsx)(l.Box,{as:"span",flex:"1",textAlign:"left",children:"When can I withdraw from my wallet"}),(0,h.jsx)(l.AccordionIcon,{})]})}),(0,h.jsx)(l.AccordionPanel,{pb:4,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]}),w=({cardProps:e,listItems:n,iconColor:o,amount:i,status:a,textColor:t,statusColor:s})=>{const c=null==n?void 0:n.map(((e,n)=>(0,h.jsxs)(l.ListItem,{display:"flex",alignItems:"flex-start",gap:2,children:[(0,h.jsx)(r.Icon,{fontSize:"1.5rem",color:o,icon:"gg:check"}),(0,h.jsx)(l.Text,{color:t,children:e})]},n)));return(0,h.jsx)(j,{bgColor:e.bgColor,width:e.width,height:e.height,borderRadius:e.borderRadius,children:(0,h.jsxs)(l.Flex,{flexDir:"column",justifyContent:"space-between",height:"100%",p:"16px 36px",children:[(0,h.jsxs)(l.Box,{children:[(0,h.jsx)(l.Text,{as:"h6",fontWeight:500,color:s,children:a}),(0,h.jsxs)(l.Text,{as:"h3",color:t,fontWeight:700,children:["NGN ",i,(0,h.jsx)(l.Text,{fontSize:"18px",fontWeight:200,color:"grey.400",as:"span",children:"/Per Month"})]})]}),(0,h.jsx)(l.List,{spacing:3,children:c}),(0,h.jsx)(d.SharedButton,{text:"Start Creating",width:"100%",height:"56px",bgColor:"purple.200",textColor:"white",borderRadius:"4px",fontSize:{}})]})})}},1837:(e,n,o)=>{var l=o(9619),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,r=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,o){var l,a={},s=null,c=null;for(l in void 0!==o&&(s=""+o),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(c=n.ref),n)t.call(n,l)&&!h.hasOwnProperty(l)&&(a[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===a[l]&&(a[l]=n[l]);return{$$typeof:i,type:e,key:s,ref:c,props:a,_owner:r.current}}n.Fragment=a,n.jsx=s,n.jsxs=s},2322:(e,n,o)=>{e.exports=o(1837)}}]);