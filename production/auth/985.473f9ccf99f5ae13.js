(self.webpackChunkauth=self.webpackChunkauth||[]).push([[985],{2399:(e,n,o)=>{o.r(n),o.d(n,{AvatarComp:()=>g,ErrorText:()=>u,Footer:()=>a,PaymentStatusTag:()=>m,PreLoader:()=>x,SearchComp:()=>j,SharedButton:()=>i,Sidenav:()=>p});var r=o(8529),t=o(2901),s=o(2322);function i({text:e,width:n,height:o,bgColor:i,textColor:l,borderRadius:a,fontSize:c,border:d,leftIcon:x,rightIcon:h,type:g,loadingText:u,isLoading:p,onClick:m}){return(0,s.jsx)(r.Button,{onClick:m,loadingText:u,isLoading:p,leftIcon:(0,s.jsx)(t.Icon,{fontSize:"1.5rem",icon:x}),rightIcon:(0,s.jsx)(t.Icon,{fontSize:"1.5rem",icon:h}),fontWeight:500,fontSize:c,w:n,h:o,bgColor:i,color:l,borderRadius:a,border:d,type:g,children:e})}var l=o(9619);const a=()=>(0,s.jsx)(r.Box,{background:"purple.100",display:"flex",flexDirection:"column",paddingTop:"1rem",children:(0,s.jsxs)(r.Container,{maxW:"70rem",children:[(0,s.jsxs)(r.SimpleGrid,{fontWeight:"bold",spacing:10,columns:{base:1,lg:4},marginTop:"1rem",children:[(0,s.jsx)(r.Flex,{alignItems:"start",justifyContent:{base:"center",lg:"initial"},children:(0,s.jsx)("img",{src:"https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png",alt:"Logo"})}),(0,s.jsxs)(r.Flex,{flexDir:"column",fontSize:"md",fontWeight:"medium",lineHeight:"base",cursor:"pointer",gap:2,my:{base:8,lg:0},textAlign:{base:"center",lg:"initial"},children:[(0,s.jsx)(r.Text,{children:"Privacy Policy"}),(0,s.jsx)(r.Text,{children:"Cookie settings"}),(0,s.jsx)(r.Text,{children:"Sitemap"}),(0,s.jsx)(r.Text,{children:"Become a creator"})]}),(0,s.jsxs)(r.Box,{fontSize:"md",fontWeight:"medium",lineHeight:"base",cursor:"pointer",textAlign:"start",display:{base:"none",lg:"block"},children:[(0,s.jsx)("p",{children:"Blog"}),(0,s.jsx)("p",{children:"Help and support"}),(0,s.jsx)("p",{children:"Terms"})]}),(0,s.jsxs)(r.Box,{fontSize:"md",fontWeight:"medium",lineHeight:"base",cursor:"pointer",textAlign:"start",display:{base:"none",lg:"block"},children:[(0,s.jsx)("p",{children:"About us"}),(0,s.jsx)("p",{children:"Contact us"})]})]}),(0,s.jsxs)(r.Flex,{flexDir:{base:"column-reverse",lg:"row"},justify:{base:"center",lg:"space-between"},align:"center",paddingBottom:"2.5rem",paddingTop:".6rem",gap:5,children:[(0,s.jsx)(r.Box,{children:(0,s.jsx)("span",{children:"2023"})}),(0,s.jsxs)(r.Flex,{fontSize:"1.5rem",color:"black",align:"center",gap:"1.4rem",cursor:"pointer",children:[(0,s.jsx)(t.Icon,{icon:"ic:baseline-facebook"}),(0,s.jsx)(t.Icon,{icon:"formkit:twitter"}),(0,s.jsx)(t.Icon,{icon:"ant-design:dribbble-circle-filled"}),(0,s.jsx)(t.Icon,{icon:"mdi:pinterest"})]})]})]})});var c=o(1959),d=o(607);const x=()=>{const[e,n]=(0,l.useState)(""),o=(0,d.useNavigate)(),[t]=(0,c.useGoogleAuthCallbackMutation)(),i=(0,l.useCallback)((async e=>{const r={provider:"google",code:e};try{(await t(r).unwrap()).token&&o("/dashboard/home")}catch(e){n(e.data.message)}}),[t,o]);return(0,l.useEffect)((()=>{const e=window.location.href,n=new URLSearchParams(new URL(e).search).get("code");n?(console.log("Code parameter:",n),i(n)):console.log("Code parameter not found in the URL.")}),[i]),(0,s.jsx)(r.Center,{h:"100vh",children:(0,s.jsxs)(r.Center,{children:[(0,s.jsx)(r.Image,{w:"3rem",src:"https://res.cloudinary.com/kingsleysolomon/image/upload/v1694900245/hng/Gear-0.2s-200px_1_xye3wd.svg",alt:"spinner"}),(0,s.jsx)(r.Text,{as:"h6",children:"Please wait..."})]})})};var h=o(1818);const g=({isScroll:e,linkColor:n})=>{const[o]=(0,c.useLogoutMutation)(),i=(0,d.useNavigate)(),l=(0,h.useSelector)(c.selectCurrentuser);return(0,s.jsxs)(r.Menu,{children:[(0,s.jsx)(r.MenuButton,{transition:"all 0.2s",borderRadius:"md",borderWidth:"1px",_hover:{bg:"transparent"},_expanded:{bg:"transparent"},_focus:{boxShadow:"none"},children:(0,s.jsxs)(r.Center,{gap:4,children:[(0,s.jsx)(r.Avatar,{size:"sm",name:"Kent Dodds",src:"https://bit.ly/kent-c-dodds"}),(0,s.jsx)(r.Text,{color:e?"black":n,children:null==l?void 0:l.name}),(0,s.jsx)(t.Icon,{icon:"eva:chevron-down-outline"})]})}),(0,s.jsxs)(r.MenuList,{textAlign:"start",children:[(0,s.jsx)(r.MenuItem,{justifyContent:"flex-start",color:"grey.400",children:(0,s.jsxs)(d.Link,{to:"/dashboard/home",children:[(0,s.jsx)(t.Icon,{fontSize:"1.3rem",icon:"ep:menu"}),(0,s.jsx)(r.Text,{ml:3,children:"Dashboard"})]})}),(0,s.jsxs)(r.MenuItem,{justifyContent:"flex-start",color:"red.200",onClick:async()=>{try{(await o(null).unwrap()).message&&i("/auth/login")}catch(e){console.log(e)}},children:[(0,s.jsx)(t.Icon,{fontSize:"1.3rem",icon:"basil:logout-solid"}),(0,s.jsx)(r.Text,{ml:3,children:"Log out"})]})]})]})},u=({error:e})=>(0,s.jsx)(r.Text,{mb:4,className:"small-text",color:"red.200",children:e}),p=({links:e})=>{const[n,o]=(0,l.useState)("white"),{isOpen:a,onOpen:c,onClose:x}=(0,r.useDisclosure)(),{pathname:h}=(0,d.useLocation)(),g=(0,l.useCallback)((()=>{o("/"===h?"grey.100":"yellow.300")}),[h]);return(0,l.useEffect)((()=>{g()}),[g]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Center,{color:n,cursor:"pointer",display:{xl:"none"},children:(0,s.jsx)(t.Icon,{fontSize:"2rem",onClick:c,icon:"ci:hamburger-md"})}),(0,s.jsxs)(r.Drawer,{size:{base:"sm"},isOpen:a,placement:"left",onClose:x,children:[(0,s.jsx)(r.DrawerOverlay,{}),(0,s.jsxs)(r.DrawerContent,{px:10,children:[(0,s.jsx)(r.DrawerCloseButton,{my:2}),(0,s.jsx)(r.DrawerHeader,{py:5,children:(0,s.jsx)(r.Link,{as:d.Link,to:"/",children:(0,s.jsx)(r.Image,{w:"60%",cursor:"pointer",src:"https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png",alt:"metabnb"})})}),(0,s.jsx)(r.DrawerBody,{py:10,children:e}),(0,s.jsx)(r.DrawerFooter,{children:(0,s.jsxs)(r.Stack,{w:"100%",gap:4,children:[(0,s.jsx)(r.Link,{as:d.Link,to:"/auth/login",children:(0,s.jsx)(i,{fontSize:{base:"sm",md:"md"},text:"Login",width:"100%",height:"48px",bgColor:"transparent",textColor:"grey",borderRadius:"4px"})}),(0,s.jsx)(r.Link,{as:d.Link,to:"/auth",children:(0,s.jsx)(i,{fontSize:{base:"sm",md:"md"},text:"Get Started",width:"100%",height:"48px",bgColor:"yellow.200",textColor:"white",borderRadius:"4px"})})]})})]})]})]})},m=()=>(0,s.jsx)(r.Tag,{size:"sm",fontSize:"xs",bgColor:"coral.100",border:"1px solid #17B6BA",color:"coral.300",children:"Free"}),j=({color:e,width:n,size:o})=>(0,s.jsxs)(r.InputGroup,{size:o,children:[(0,s.jsx)(r.InputLeftElement,{pointerEvents:"none",fontSize:"1.2em",children:(0,s.jsx)(t.Icon,{icon:"majesticons:search-line"})}),(0,s.jsx)(r.Input,{border:"none",placeholder:"Search",_placeholder:{color:"#01010140"},w:n,bgColor:e})]})}}]);