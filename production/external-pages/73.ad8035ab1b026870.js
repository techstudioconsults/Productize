(self.webpackChunkexternal_pages=self.webpackChunkexternal_pages||[]).push([[73],{9073:(e,n,l)=>{l.r(n),l.d(n,{AccordionComponent:()=>y,CardLayout:()=>j,DualSectionLayout:()=>p,DualSectionLayoutList:()=>g,Hero:()=>x,Navbar:()=>b,PricingCard:()=>f,SectionLayout:()=>m,SharedSection:()=>u});var o=l(8529),a=l(607);const i={active:"navbar_active__CsDMv"},t=[{id:1,name:"Explore",path:"",type:"dropdown",subLinks:[{id:1,name:"All",path:"/explore"},{id:2,name:"3D",path:"/explore/3d"},{id:3,name:"Audio",path:"/explore/audio"},{id:4,name:"Business/Finance",path:"/explore/finance"},{id:5,name:"Comics",path:"/explore/comics"},{id:6,name:"Design",path:"/explore/design"},{id:7,name:"Drawing/Painting",path:"/explore/art"},{id:8,name:"Education",path:"/explore/education"}]},{id:2,name:"Features",path:"/features",type:"link"},{id:3,name:"Pricing",path:"/pricing",type:"link"}];var h=l(2901),r=l(2322);const s=({link:e})=>{var n;const l=null==(n=e.subLinks)?void 0:n.map((e=>(0,r.jsx)(a.NavLink,{to:e.path,children:(0,r.jsx)(o.MenuItem,{justifyContent:"start",fontSize:"sm",fontWeight:500,children:e.name})},e.id)));return(0,r.jsxs)(o.Menu,{children:[(0,r.jsx)(o.MenuButton,{_hover:{color:"red.100",bg:"transparent"},color:{base:"black",xl:"white"},fontWeight:"thin",bg:"transparent",as:o.Button,rightIcon:(0,r.jsx)(h.Icon,{icon:"mdi:chevron-down"}),children:(0,r.jsx)(o.Text,{fontSize:"16px",children:e.name})}),(0,r.jsx)(o.MenuList,{color:"black",children:l})]})},c=({isMobile:e})=>{const n=t.map((e=>"dropdown"===e.type?(0,r.jsx)(s,{link:e},e.id):(0,r.jsx)(a.NavLink,{to:e.path,className:({isActive:e})=>e?i.active:i.inactive,children:(0,r.jsx)(o.ListItem,{children:e.name})},e.id)));return(0,r.jsx)(o.OrderedList,{width:"fit-content",display:{base:e?"flex":"none",xl:"flex"},flexDir:e?"column":"row",color:e?"black":"white",alignItems:{xl:"center"},m:"auto",gap:{base:10,xl:10},children:n})};var d=l(9562);const b=({isAuth:e})=>(0,r.jsxs)(o.Flex,{className:"cc-container",justifyContent:"space-between",alignItems:"center",height:"5rem",paddingInline:{base:4,xl:0},children:[(0,r.jsx)(o.Center,{children:(0,r.jsx)(o.Link,{as:a.Link,to:"/",children:(0,r.jsx)(o.Image,{alt:"logo",src:"https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png"})})}),(0,r.jsx)(c,{isMobile:!1}),(0,r.jsx)(o.Flex,{display:{base:"none",xl:"flex"},gap:2,children:e?(0,r.jsx)(d.AvatarComp,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Link,{as:a.Link,to:"/auth/login",children:(0,r.jsx)(d.SharedButton,{fontSize:{base:"sm",md:"md"},text:"Login",width:"160px",height:"48px",bgColor:"transparent",textColor:"white",borderRadius:"4px"})}),(0,r.jsx)(o.Link,{as:a.Link,to:"/auth",children:(0,r.jsx)(d.SharedButton,{fontSize:{base:"sm",md:"md"},text:"Get Started",width:"160px",height:"48px",bgColor:"yellow.200",textColor:"white",borderRadius:"4px"})})]})}),(0,r.jsx)(d.Sidenav,{links:(0,r.jsx)(c,{isMobile:!1})})]});l(9619);const x=({children:e,height:n,bgImg:l,bgColor:a})=>(0,r.jsx)(o.Flex,{justifyContent:"center",top:0,height:n,width:"100%",bgImage:l,bgPosition:"bottom",bgSize:"contain",bgRepeat:"no-repeat",bgColor:a,children:e}),m=({children:e,height:n,bgColor:l,bgImg:a})=>(0,r.jsx)(o.Box,{height:n,bgColor:l,bgImage:a,children:e}),p=({children:e,img:n,flexDirection:l,textSectionBgColor:a,imgSectionBgColor:i,justifyContent:t,imgPosition:h,imgFit:s,height:c})=>(0,r.jsxs)(o.Flex,{height:c,flexDir:l,children:[(0,r.jsx)(o.Flex,{justifyContent:t,bgColor:a,flex:1,children:e}),(0,r.jsx)(o.Flex,{justifyContent:"flex-end",overflow:"hidden",bgColor:i,flex:1,children:(0,r.jsx)(o.Image,{objectFit:s,objectPosition:h,src:n,alt:"img"})})]}),g=({title:e,subTitle:n,listItems:l,iconColor:a,shouldShowButton:i})=>{const t=null==l?void 0:l.map(((e,n)=>(0,r.jsxs)(o.ListItem,{display:"flex",alignItems:"flex-start",gap:2,children:[(0,r.jsx)(h.Icon,{fontSize:"1.3rem",color:a,icon:"mdi:star-four-points"}),(0,r.jsx)(o.Text,{children:e})]},n)));return(0,r.jsxs)(o.Box,{children:[(0,r.jsx)(o.Text,{as:"h1",fontWeight:700,lineHeight:"shorter",children:e}),(0,r.jsx)(o.Text,{my:10,children:n}),(0,r.jsx)(o.List,{spacing:3,children:t}),(0,r.jsx)(o.Box,{mt:10,display:i?"block":"none",children:(0,r.jsx)(d.SharedButton,{text:"Get Started",width:{base:"100%",xl:"22.5rem"},height:"48px",bgColor:"yellow.200",textColor:"white",borderRadius:"4px",fontSize:{base:"sm",md:"md"}})})]})},u=()=>(0,r.jsx)(m,{height:"",bgColor:"purple.200",bgImg:"",children:(0,r.jsxs)(o.Container,{maxW:"70rem",textAlign:"center",py:20,color:"purple.100",children:[(0,r.jsx)(o.Text,{as:"h3",children:"Starting monetize on Productize"}),(0,r.jsx)(o.Text,{maxW:"35rem",m:"auto",my:5,children:"With Productize, turn your creativity into a lucrative business venture by showcasing and selling your work online."}),(0,r.jsx)(d.SharedButton,{text:"Create an Account",width:{base:"100%",xl:"307px"},height:"56px",bgColor:"yellow.200",textColor:"white",borderRadius:"4px",fontSize:{base:"sm",xl:"md"}})]})}),j=({children:e,bgColor:n,width:l,height:a,borderRadius:i})=>(0,r.jsx)(o.Card,{boxShadow:"3.9034483432769775px 3.9034483432769775px 0px 0.9758620858192444px #0E0A2D;\n",bgColor:n,width:l,height:a,borderRadius:i,children:e}),y=()=>(0,r.jsxs)(o.Accordion,{allowMultiple:!0,children:[(0,r.jsxs)(o.AccordionItem,{py:3,children:[(0,r.jsx)("h2",{children:(0,r.jsxs)(o.AccordionButton,{children:[(0,r.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"Do I have to subscribe on productize? Receive money from anywhere, blah blah blah blah y"}),(0,r.jsx)(o.AccordionIcon,{})]})}),(0,r.jsx)(o.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,r.jsxs)(o.AccordionItem,{py:3,children:[(0,r.jsx)("h2",{children:(0,r.jsxs)(o.AccordionButton,{children:[(0,r.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"When can I withdraw from my wallet"}),(0,r.jsx)(o.AccordionIcon,{})]})}),(0,r.jsx)(o.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,r.jsxs)(o.AccordionItem,{py:3,children:[(0,r.jsx)("h2",{children:(0,r.jsxs)(o.AccordionButton,{children:[(0,r.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"What online payments are accepted?"}),(0,r.jsx)(o.AccordionIcon,{})]})}),(0,r.jsx)(o.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,r.jsxs)(o.AccordionItem,{py:3,children:[(0,r.jsx)("h2",{children:(0,r.jsxs)(o.AccordionButton,{children:[(0,r.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"Can I sell without creating an account?"}),(0,r.jsx)(o.AccordionIcon,{})]})}),(0,r.jsx)(o.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,r.jsxs)(o.AccordionItem,{py:3,children:[(0,r.jsx)("h2",{children:(0,r.jsxs)(o.AccordionButton,{children:[(0,r.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"Is Productize delivery standard?"}),(0,r.jsx)(o.AccordionIcon,{})]})}),(0,r.jsx)(o.AccordionPanel,{pb:4,children:"Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah.Receive money from anywhere, blah blah blah blah blah."})]}),(0,r.jsxs)(o.AccordionItem,{py:3,children:[(0,r.jsx)("h2",{children:(0,r.jsxs)(o.AccordionButton,{children:[(0,r.jsx)(o.Box,{as:"span",flex:"1",textAlign:"left",children:"When can I withdraw from my wallet"}),(0,r.jsx)(o.AccordionIcon,{})]})}),(0,r.jsx)(o.AccordionPanel,{pb:4,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]}),f=({cardProps:e,listItems:n,iconColor:l,amount:a,status:i,textColor:t,statusColor:s})=>{const c=null==n?void 0:n.map(((e,n)=>(0,r.jsxs)(o.ListItem,{display:"flex",alignItems:"flex-start",gap:2,children:[(0,r.jsx)(h.Icon,{fontSize:"1.5rem",color:l,icon:"gg:check"}),(0,r.jsx)(o.Text,{color:t,children:e})]},n)));return(0,r.jsx)(j,{bgColor:e.bgColor,width:e.width,height:e.height,borderRadius:e.borderRadius,children:(0,r.jsxs)(o.Flex,{flexDir:"column",justifyContent:"space-between",height:"100%",p:"16px 36px",children:[(0,r.jsxs)(o.Box,{children:[(0,r.jsx)(o.Text,{as:"h6",fontWeight:500,color:s,children:i}),(0,r.jsxs)(o.Text,{as:"h3",color:t,fontWeight:700,children:["NGN ",a,(0,r.jsx)(o.Text,{fontSize:"18px",fontWeight:200,color:"grey.400",as:"span",children:"/Per Month"})]})]}),(0,r.jsx)(o.List,{spacing:3,children:c}),(0,r.jsx)(d.SharedButton,{text:"Start Creating",width:"100%",height:"56px",bgColor:"purple.200",textColor:"white",borderRadius:"4px",fontSize:{}})]})})}}}]);