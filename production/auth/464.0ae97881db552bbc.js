(self.webpackChunkauth=self.webpackChunkauth||[]).push([[464,673],{5464:(e,t,u)=>{u.r(t),u.d(t,{usePlanUpgrade:()=>r,useSetPaymentPlan:()=>l,useTokenExists:()=>c});var n=u(1959),s=u(9619),a=u(1818);function c(){const[e,t]=(0,s.useState)(!1),u=(0,a.useSelector)(n.selectCurrentToken);return(0,s.useEffect)((()=>(t(!!u),()=>{})),[u]),e}const r=()=>{const[e]=(0,n.useUpgradePlanMutation)();return async()=>{try{await e(null).unwrap()}catch(e){console.log(e)}}},l=()=>{const e=(0,a.useSelector)(n.selectCurrentUser),[t,u]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{"premium"===(null==e?void 0:e.account_type)?u(!0):u(!1)}),[null==e?void 0:e.account_type]),t}}}]);