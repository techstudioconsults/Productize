(self.webpackChunkexplore=self.webpackChunkexplore||[]).push([[890,826],{890:(e,t,o)=>{o.r(t),o.d(t,{authApiSlice:()=>F,logOut:()=>n,persistor:()=>E,selectCurrentToken:()=>l,selectCurrentUser:()=>h,selectEmailConfirmation:()=>c,setCredentials:()=>s,setFPEmailConfirmation:()=>i,setUser:()=>g,store:()=>M,useForgotPasswordMutation:()=>Q,useGoogleAuthCallbackMutation:()=>U,useGoogleAuthMutation:()=>A,useLoginMutation:()=>O,useLogoutMutation:()=>v,useResetPasswordMutation:()=>j,useSignupMutation:()=>T,useUpgradePlanMutation:()=>L,useVerifyEmailMutation:()=>R,userApiSlice:()=>G});var a=o(3514);const r=(0,a.createSlice)({name:"Auth",initialState:{token:null,forgotPasswordEmailConfirmation:{emailSent:!1,email:null}},reducers:{setCredentials:(e,t)=>{const{accessToken:o}=t.payload;e.token=o},setFPEmailConfirmation:(e,t)=>{e.forgotPasswordEmailConfirmation=t.payload},logOut:e=>{e.token=null,e.forgotPasswordEmailConfirmation={emailSent:!1,email:null}}}}),{setCredentials:s,logOut:n,setFPEmailConfirmation:i}=r.actions,u=r.reducer,l=e=>e.Auth.token,c=e=>e.Auth.forgotPasswordEmailConfirmation,d=(0,a.createSlice)({name:"User",initialState:{profile:null},reducers:{setUser:(e,t)=>{const{user:o}=t.payload;e.profile=o}}}),{setUser:g}=d.actions,y=d.reducer,h=e=>e.User.profile;var m=o(3850),p=o(7345),f=o(4549),S=o(1598);console.log("test","https://productize-api.techstudio.academy/api");const w=(0,m.ni)({baseUrl:"https://productize-api.techstudio.academy/api",prepareHeaders:(e,{getState:t})=>{const o=t().Auth.token;return o&&e.set("Authorization",`Bearer ${o}`),e}}),k=(0,S.LC)({baseQuery:w,tagTypes:["",""],endpoints:()=>({})}),P={key:"auth",version:1,storage:f.Z},b={key:"user",version:1,storage:f.Z},C=(0,p.persistReducer)(P,u),q=(0,p.persistReducer)(b,y),M=(0,a.configureStore)({reducer:{[k.reducerPath]:k.reducer,Auth:C,User:q},middleware:e=>e({serializableCheck:!1}).concat(k.middleware)});(0,m.sj)(M.dispatch);const E=(0,p.persistStore)(M),F=k.injectEndpoints({endpoints:e=>({login:e.mutation({query:e=>({url:"/auth/login",method:"POST",body:Object.assign({},e)}),async onQueryStarted(e,{dispatch:t,queryFulfilled:o}){try{const{data:e}=await o;t(s({accessToken:e.token})),t(g({user:e.user}))}catch(e){console.log(e)}}}),signup:e.mutation({query:e=>({url:"/auth/register",method:"POST",body:Object.assign({},e)}),async onQueryStarted(e,{dispatch:t,queryFulfilled:o}){try{const{data:e}=await o;t(s({accessToken:e.token})),t(g({user:e.user}))}catch(e){console.log(e)}}}),googleAuth:e.mutation({query:()=>({url:"/auth/oauth/redirect?provider=google",method:"GET"}),async onQueryStarted(e,{dispatch:t,queryFulfilled:o}){try{const{data:e}=await o;e.redirect_url?window.location.href=e.redirect_url:console.error("Failed to obtain redirect URL for google")}catch(e){console.log(e)}}}),googleAuthCallback:e.mutation({query:e=>({url:"/auth/oauth/callback",method:"POST",body:Object.assign({},e)}),async onQueryStarted(e,{dispatch:t,queryFulfilled:o}){try{const{data:e}=await o;t(s({accessToken:e.token})),t(g({user:e.user}))}catch(e){console.log(e)}}}),forgotPassword:e.mutation({query:e=>({url:"/auth/forgot-password",method:"POST",body:Object.assign({},e)}),async onQueryStarted(e,{dispatch:t,queryFulfilled:o}){try{const{data:a}=await o;console.log(a),t(i({emailSent:!0,email:e.email}))}catch(e){console.log(e)}}}),resetPassword:e.mutation({query:e=>({url:"/auth/reset-password",method:"POST",body:Object.assign({},e)}),async onQueryStarted(e,{dispatch:t,queryFulfilled:o}){try{const{data:e}=await o;console.log(e),t(i({emailSent:!1,email:null}))}catch(e){console.log(e)}}}),logout:e.mutation({query:()=>({url:"/auth/logout",method:"POST"}),async onQueryStarted(e,{dispatch:t,queryFulfilled:o}){try{const{data:e}=await o;console.log(e),t(n()),t(g({user:null}))}catch(e){console.log(e)}}})})}),{useLoginMutation:O,useSignupMutation:T,useGoogleAuthMutation:A,useGoogleAuthCallbackMutation:U,useForgotPasswordMutation:Q,useResetPasswordMutation:j,useLogoutMutation:v}=F,G=k.injectEndpoints({endpoints:e=>({verifyEmail:e.mutation({query:()=>({url:"/auth/email/resend",method:"GET"}),async onQueryStarted(e,{dispatch:t,queryFulfilled:o}){try{const{data:e}=await o;console.log(e)}catch(e){console.log(e)}}}),upgradePlan:e.mutation({query:()=>({url:"/payments/subscription",method:"POST"}),async onQueryStarted(e,{dispatch:t,queryFulfilled:o}){try{const{data:e}=await o;console.log(e)}catch(e){console.log(e)}}})})}),{useUpgradePlanMutation:L,useVerifyEmailMutation:R}=G}}]);