(self.webpackChunkexplore=self.webpackChunkexplore||[]).push([[673,464],{5464:(e,t,n)=>{n.r(t),n.d(t,{usePlanUpgrade:()=>a,useSetPaymentPlan:()=>l,useTokenExists:()=>c});var u=n(1959),s=n(9619),r=n(1818);function c(){const[e,t]=(0,s.useState)(!1),n=(0,r.useSelector)(u.selectCurrentToken);return(0,s.useEffect)((()=>(t(!!n),()=>{})),[n]),e}const a=()=>{const[e]=(0,u.useUpgradePlanMutation)();return async()=>{try{await e(null).unwrap()}catch(e){console.log(e)}}},l=()=>{const e=(0,r.useSelector)(u.selectCurrentUser),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{"premium"===(null==e?void 0:e.account_type)?n(!0):n(!1)}),[null==e?void 0:e.account_type]),t}}}]);