(self.webpackChunkexternal_pages=self.webpackChunkexternal_pages||[]).push([[982],{4065:(e,o,n)=>{n.r(o),n.d(o,{AvatarComp:()=>p,ErrorText:()=>u,Footer:()=>a,Icon:()=>g,ModalComp:()=>C,PaymentStatusTag:()=>j,PreLoader:()=>x,PricingCard:()=>w,SearchComp:()=>b,SharedButton:()=>i,Sidenav:()=>m});var r=n(8529),t=n(2901),s=n(2322);function i({text:e,width:o,height:n,bgColor:i,textColor:l,borderRadius:a,fontSize:c,border:d,leftIcon:x,rightIcon:h,type:g,loadingText:p,isLoading:u,onClick:m}){return(0,s.jsx)(r.Button,{onClick:m,loadingText:p,isLoading:u,leftIcon:(0,s.jsx)(t.Icon,{fontSize:"1.5rem",icon:x}),rightIcon:(0,s.jsx)(t.Icon,{fontSize:"1.5rem",icon:h}),fontWeight:500,fontSize:c,w:o,h:n,bgColor:i,color:l,borderRadius:a,border:d,type:g,children:e})}var l=n(9619);const a=()=>(0,s.jsx)(r.Box,{background:"purple.100",display:"flex",flexDirection:"column",paddingTop:"1rem",children:(0,s.jsxs)(r.Container,{maxW:"70rem",children:[(0,s.jsxs)(r.SimpleGrid,{fontWeight:"bold",spacing:10,columns:{base:1,lg:4},marginTop:"1rem",children:[(0,s.jsx)(r.Flex,{alignItems:"start",justifyContent:{base:"center",lg:"initial"},children:(0,s.jsx)("img",{src:"https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png",alt:"Logo"})}),(0,s.jsxs)(r.Flex,{flexDir:"column",fontSize:"md",fontWeight:"medium",lineHeight:"base",cursor:"pointer",gap:2,my:{base:8,lg:0},textAlign:{base:"center",lg:"initial"},children:[(0,s.jsx)(r.Text,{children:"Privacy Policy"}),(0,s.jsx)(r.Text,{children:"Cookie settings"}),(0,s.jsx)(r.Text,{children:"Sitemap"}),(0,s.jsx)(r.Text,{children:"Become a creator"})]}),(0,s.jsxs)(r.Box,{fontSize:"md",fontWeight:"medium",lineHeight:"base",cursor:"pointer",textAlign:"start",display:{base:"none",lg:"block"},children:[(0,s.jsx)("p",{children:"Blog"}),(0,s.jsx)("p",{children:"Help and support"}),(0,s.jsx)("p",{children:"Terms"})]}),(0,s.jsxs)(r.Box,{fontSize:"md",fontWeight:"medium",lineHeight:"base",cursor:"pointer",textAlign:"start",display:{base:"none",lg:"block"},children:[(0,s.jsx)("p",{children:"About us"}),(0,s.jsx)("p",{children:"Contact us"})]})]}),(0,s.jsxs)(r.Flex,{flexDir:{base:"column-reverse",lg:"row"},justify:{base:"center",lg:"space-between"},align:"center",paddingBottom:"2.5rem",paddingTop:".6rem",gap:5,children:[(0,s.jsx)(r.Box,{children:(0,s.jsx)("span",{children:"2023"})}),(0,s.jsxs)(r.Flex,{fontSize:"1.5rem",color:"black",align:"center",gap:"1.4rem",cursor:"pointer",children:[(0,s.jsx)(t.Icon,{icon:"ic:baseline-facebook"}),(0,s.jsx)(t.Icon,{icon:"formkit:twitter"}),(0,s.jsx)(t.Icon,{icon:"ant-design:dribbble-circle-filled"}),(0,s.jsx)(t.Icon,{icon:"mdi:pinterest"})]})]})]})});var c=n(1959),d=n(607);const x=()=>{const[e,o]=(0,l.useState)(""),n=(0,d.useNavigate)(),[t]=(0,c.useGoogleAuthCallbackMutation)(),i=(0,l.useCallback)((async e=>{const r={provider:"google",code:e};try{(await t(r).unwrap()).token&&n("/dashboard/home")}catch(e){o(e.data.message)}}),[t,n]);return(0,l.useEffect)((()=>{const e=window.location.href,o=new URLSearchParams(new URL(e).search).get("code");o?(console.log("Code parameter:",o),i(o)):console.log("Code parameter not found in the URL.")}),[i]),(0,s.jsx)(r.Center,{h:"100vh",children:(0,s.jsxs)(r.Center,{children:[(0,s.jsx)(r.Image,{w:"3rem",src:"https://res.cloudinary.com/kingsleysolomon/image/upload/v1694900245/hng/Gear-0.2s-200px_1_xye3wd.svg",alt:"spinner"}),(0,s.jsx)(r.Text,{as:"h6",children:"Please wait..."})]})})};var h=n(1818);const g=({icon:e,name:o,size:n})=>(0,s.jsx)(r.Center,{boxSize:n||"24px",children:(0,s.jsx)(r.Image,{boxSize:n||"24px",src:e,alt:o})}),p=({isScroll:e,linkColor:o})=>{const[n]=(0,c.useLogoutMutation)(),i=(0,d.useNavigate)(),l=(0,h.useSelector)(c.selectCurrentUser);return(0,s.jsxs)(r.Menu,{children:[(0,s.jsx)(r.MenuButton,{transition:"all 0.2s",borderRadius:"md",borderWidth:"1px",_hover:{bg:"transparent"},_expanded:{bg:"transparent"},_focus:{boxShadow:"none"},children:(0,s.jsxs)(r.Center,{gap:4,children:[(0,s.jsx)(r.Avatar,{size:"sm",name:"Kent Dodds",src:"https://bit.ly/kent-c-dodds"}),(0,s.jsx)(r.Text,{color:e?"black":o,children:null==l?void 0:l.name}),(0,s.jsx)(t.Icon,{icon:"eva:chevron-down-outline"})]})}),(0,s.jsxs)(r.MenuList,{textAlign:"start",children:[(0,s.jsx)(r.MenuItem,{justifyContent:"flex-start",color:"grey.400",children:(0,s.jsxs)(d.Link,{to:"/dashboard/home",children:[(0,s.jsx)(g,{name:"menu",icon:"https://res.cloudinary.com/dkszgtapy/image/upload/v1696088709/Stockholm-icons_kizeoq.svg"}),(0,s.jsx)(r.Text,{ml:3,children:"Dashboard"})]})}),(0,s.jsxs)(r.MenuItem,{justifyContent:"flex-start",color:"red.200",onClick:async()=>{try{(await n(null).unwrap()).message&&i("/auth/login")}catch(e){console.log(e)}},children:[(0,s.jsx)(t.Icon,{fontSize:"1.3rem",icon:"basil:logout-solid"}),(0,s.jsx)(r.Text,{ml:3,children:"Log out"})]})]})]})},u=({error:e})=>(0,s.jsx)(r.Text,{mb:4,className:"small-text",color:"red.200",children:e}),m=({links:e})=>{const[o,n]=(0,l.useState)("white"),{isOpen:a,onOpen:c,onClose:x}=(0,r.useDisclosure)(),{pathname:h}=(0,d.useLocation)(),g=(0,l.useCallback)((()=>{n("/"===h?"grey.100":"yellow.300")}),[h]);return(0,l.useEffect)((()=>{g()}),[g]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Center,{color:o,cursor:"pointer",display:{xl:"none"},children:(0,s.jsx)(t.Icon,{fontSize:"2rem",onClick:c,icon:"ci:hamburger-md"})}),(0,s.jsxs)(r.Drawer,{size:{base:"sm"},isOpen:a,placement:"left",onClose:x,children:[(0,s.jsx)(r.DrawerOverlay,{}),(0,s.jsxs)(r.DrawerContent,{px:10,children:[(0,s.jsx)(r.DrawerCloseButton,{my:2}),(0,s.jsx)(r.DrawerHeader,{py:5,children:(0,s.jsx)(r.Link,{as:d.Link,to:"/",children:(0,s.jsx)(r.Image,{w:"60%",cursor:"pointer",src:"https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png",alt:"metabnb"})})}),(0,s.jsx)(r.DrawerBody,{py:10,children:e}),(0,s.jsx)(r.DrawerFooter,{children:(0,s.jsxs)(r.Stack,{w:"100%",gap:4,children:[(0,s.jsx)(r.Link,{as:d.Link,to:"/auth/login",children:(0,s.jsx)(i,{fontSize:{base:"sm",md:"md"},text:"Login",width:"100%",height:"48px",bgColor:"transparent",textColor:"grey",borderRadius:"4px"})}),(0,s.jsx)(r.Link,{as:d.Link,to:"/auth",children:(0,s.jsx)(i,{fontSize:{base:"sm",md:"md"},text:"Get Started",width:"100%",height:"48px",bgColor:"yellow.200",textColor:"white",borderRadius:"4px"})})]})})]})]})]})},j=()=>(0,s.jsx)(r.Tag,{size:"sm",fontSize:"xs",bgColor:"coral.100",border:"1px solid #17B6BA",color:"coral.300",children:"Free"}),b=({color:e,width:o,size:n})=>(0,s.jsxs)(r.InputGroup,{size:n,children:[(0,s.jsx)(r.InputLeftElement,{pointerEvents:"none",fontSize:"1.2em",children:(0,s.jsx)(g,{icon:"https://res.cloudinary.com/dkszgtapy/image/upload/v1696088263/productize/Productize-iconset/Property_2_Search_vjopxj.svg",name:"search"})}),(0,s.jsx)(r.Input,{border:"none",placeholder:"Search",_placeholder:{color:"#01010140"},w:o,bgColor:e})]}),C=({children:e})=>{const{isOpen:o,onOpen:n,onClose:l}=(0,r.useDisclosure)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{text:"Upgrade Plan",onClick:n,width:"fit-content",height:"48px",bgColor:"purple.200",textColor:"white",borderRadius:"4px",fontSize:{base:"sm",md:"md"}}),(0,s.jsxs)(r.Modal,{size:{base:"full",md:"5xl"},isOpen:o,onClose:l,children:[(0,s.jsx)(r.ModalOverlay,{}),(0,s.jsxs)(r.ModalContent,{borderRadius:"1rem",py:10,px:{base:4,md:20},children:[e,(0,s.jsx)(r.Flex,{p:5,justifyContent:"center",alignItems:"center",children:(0,s.jsxs)(r.Center,{cursor:"pointer",onClick:l,children:[(0,s.jsx)(t.Icon,{fontSize:"2rem",icon:"system-uicons:chevron-left"}),(0,s.jsx)(r.Text,{fontWeight:600,children:"Go Back"})]})})]})]})]})};var f=n(85),y=n(8115);const w=({cardProps:e,listItems:o,iconColor:n,amount:l,status:a,textColor:c,statusColor:d,tagProps:x,showButton:h})=>{const g=(0,y.usePlanUpgrade)(),p=(0,y.useSetPaymentPlan)(),u=null==o?void 0:o.map(((e,o)=>(0,s.jsxs)(r.ListItem,{display:"flex",alignItems:"flex-start",gap:2,children:[(0,s.jsx)(t.Icon,{fontSize:"1.5rem",color:n,icon:"gg:check"}),(0,s.jsx)(r.Text,{className:"small-text",color:c,children:e})]},o)));return(0,s.jsx)(f.CardLayout,{bgColor:e.bgColor,width:e.width,height:e.height,borderRadius:e.borderRadius,children:(0,s.jsxs)(r.Flex,{flexDir:"column",justifyContent:"space-between",height:"100%",p:"36px",children:[(0,s.jsxs)(r.Box,{children:[(0,s.jsxs)(r.Box,{mb:8,children:[(0,s.jsxs)(r.Flex,{alignItems:"center",justifyContent:"space-between",children:[(0,s.jsx)(r.Text,{fontWeight:500,color:d,children:a}),(0,s.jsx)(r.Tag,{fontWeight:600,color:p&&"purple.300"===e.bgColor?"grey.100":x.color,bgColor:p&&"purple.300"===e.bgColor?"green.200":x.bgColor,size:"lg",children:p&&"purple.300"===e.bgColor?"Current Plan":p?"casual":x.title})]}),(0,s.jsxs)(r.Text,{mt:4,as:"h3",color:c,fontWeight:700,children:["NGN ",l,(0,s.jsx)(r.Text,{fontSize:"18px",fontWeight:200,color:"grey.400",as:"span",children:"/Per Month"})]})]}),(0,s.jsx)(r.List,{spacing:3,children:u})]}),(0,s.jsx)(r.Box,{hidden:!h||p,children:(0,s.jsx)(i,{text:"Upgrade Plan",width:"100%",height:"56px",bgColor:"purple.200",textColor:"white",borderRadius:"4px",fontSize:{},onClick:()=>g()})})]})})}}}]);