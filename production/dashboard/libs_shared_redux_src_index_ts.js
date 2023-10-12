(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["libs_shared_redux_src_index_ts"],{

/***/ "../../libs/shared/redux/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authApiSlice: () => (/* reexport safe */ _lib_auth_state_authApiSlice__WEBPACK_IMPORTED_MODULE_1__.authApiSlice),
/* harmony export */   logOut: () => (/* reexport safe */ _lib_auth_state_authSlice__WEBPACK_IMPORTED_MODULE_2__.logOut),
/* harmony export */   persistor: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.persistor),
/* harmony export */   resetUserStore: () => (/* reexport safe */ _lib_user_state_userSlice__WEBPACK_IMPORTED_MODULE_3__.resetUserStore),
/* harmony export */   selectCurrentToken: () => (/* reexport safe */ _lib_auth_state_authSlice__WEBPACK_IMPORTED_MODULE_2__.selectCurrentToken),
/* harmony export */   selectCurrentUser: () => (/* reexport safe */ _lib_user_state_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUser),
/* harmony export */   selectEmailConfirmation: () => (/* reexport safe */ _lib_auth_state_authSlice__WEBPACK_IMPORTED_MODULE_2__.selectEmailConfirmation),
/* harmony export */   selectTaskCompletedCount: () => (/* reexport safe */ _lib_user_state_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectTaskCompletedCount),
/* harmony export */   setCredentials: () => (/* reexport safe */ _lib_auth_state_authSlice__WEBPACK_IMPORTED_MODULE_2__.setCredentials),
/* harmony export */   setFPEmailConfirmation: () => (/* reexport safe */ _lib_auth_state_authSlice__WEBPACK_IMPORTED_MODULE_2__.setFPEmailConfirmation),
/* harmony export */   setTaskCount: () => (/* reexport safe */ _lib_user_state_userSlice__WEBPACK_IMPORTED_MODULE_3__.setTaskCount),
/* harmony export */   setUser: () => (/* reexport safe */ _lib_user_state_userSlice__WEBPACK_IMPORTED_MODULE_3__.setUser),
/* harmony export */   store: () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.store),
/* harmony export */   useForgotPasswordMutation: () => (/* reexport safe */ _lib_auth_state_authApiSlice__WEBPACK_IMPORTED_MODULE_1__.useForgotPasswordMutation),
/* harmony export */   useGoogleAuthCallbackMutation: () => (/* reexport safe */ _lib_auth_state_authApiSlice__WEBPACK_IMPORTED_MODULE_1__.useGoogleAuthCallbackMutation),
/* harmony export */   useGoogleAuthMutation: () => (/* reexport safe */ _lib_auth_state_authApiSlice__WEBPACK_IMPORTED_MODULE_1__.useGoogleAuthMutation),
/* harmony export */   useLoginMutation: () => (/* reexport safe */ _lib_auth_state_authApiSlice__WEBPACK_IMPORTED_MODULE_1__.useLoginMutation),
/* harmony export */   useLogoutMutation: () => (/* reexport safe */ _lib_auth_state_authApiSlice__WEBPACK_IMPORTED_MODULE_1__.useLogoutMutation),
/* harmony export */   useResetPasswordMutation: () => (/* reexport safe */ _lib_auth_state_authApiSlice__WEBPACK_IMPORTED_MODULE_1__.useResetPasswordMutation),
/* harmony export */   useSignupMutation: () => (/* reexport safe */ _lib_auth_state_authApiSlice__WEBPACK_IMPORTED_MODULE_1__.useSignupMutation),
/* harmony export */   useUpdateProfileMutation: () => (/* reexport safe */ _lib_user_state_userApiSlice__WEBPACK_IMPORTED_MODULE_4__.useUpdateProfileMutation),
/* harmony export */   useUpgradePlanMutation: () => (/* reexport safe */ _lib_user_state_userApiSlice__WEBPACK_IMPORTED_MODULE_4__.useUpgradePlanMutation),
/* harmony export */   useVerifyEmailMutation: () => (/* reexport safe */ _lib_user_state_userApiSlice__WEBPACK_IMPORTED_MODULE_4__.useVerifyEmailMutation),
/* harmony export */   userApiSlice: () => (/* reexport safe */ _lib_user_state_userApiSlice__WEBPACK_IMPORTED_MODULE_4__.userApiSlice)
/* harmony export */ });
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../libs/shared/redux/src/lib/store.ts");
/* harmony import */ var _lib_auth_state_authApiSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/shared/redux/src/lib/auth-state/authApiSlice.ts");
/* harmony import */ var _lib_auth_state_authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../libs/shared/redux/src/lib/auth-state/authSlice.ts");
/* harmony import */ var _lib_user_state_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../libs/shared/redux/src/lib/user-state/userSlice.ts");
/* harmony import */ var _lib_user_state_userApiSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../libs/shared/redux/src/lib/user-state/userApiSlice.ts");






/***/ }),

/***/ "../../libs/shared/redux/src/lib/apiSlice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiSlice: () => (/* binding */ apiSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");


// console.log('test', process.env['NX_BASE_URL']);

const baseQuery = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
  baseUrl: "https://productize-api.techstudio.academy/api",
  prepareHeaders: (headers, {
    getState
  }) => {
    const token = getState().Auth.token;
    // if we have a token, set the auth header value
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
      // headers.set('Content-Type', `multipart/form-data`);
    }

    return headers;
  }
});
const apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.createApi)({
  baseQuery,
  tagTypes: ['', ''],
  endpoints: () => ({})
});

/***/ }),

/***/ "../../libs/shared/redux/src/lib/auth-state/authApiSlice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authApiSlice: () => (/* binding */ authApiSlice),
/* harmony export */   useForgotPasswordMutation: () => (/* binding */ useForgotPasswordMutation),
/* harmony export */   useGoogleAuthCallbackMutation: () => (/* binding */ useGoogleAuthCallbackMutation),
/* harmony export */   useGoogleAuthMutation: () => (/* binding */ useGoogleAuthMutation),
/* harmony export */   useLoginMutation: () => (/* binding */ useLoginMutation),
/* harmony export */   useLogoutMutation: () => (/* binding */ useLogoutMutation),
/* harmony export */   useResetPasswordMutation: () => (/* binding */ useResetPasswordMutation),
/* harmony export */   useSignupMutation: () => (/* binding */ useSignupMutation)
/* harmony export */ });
/* harmony import */ var _apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../libs/shared/redux/src/lib/apiSlice.ts");
/* harmony import */ var _user_state_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/shared/redux/src/lib/user-state/userSlice.ts");
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../libs/shared/redux/src/lib/auth-state/authSlice.ts");



const authApiSlice = _apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: Object.assign({}, credentials)
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_2__.setCredentials)({
            accessToken: data.token
          }));
          dispatch((0,_user_state_userSlice__WEBPACK_IMPORTED_MODULE_1__.setUser)({
            user: data.user
          }));
        } catch (err) {
          console.log(err);
        }
      }
    }),
    signup: builder.mutation({
      query: credentials => ({
        url: '/auth/register',
        method: 'POST',
        body: Object.assign({}, credentials)
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_2__.setCredentials)({
            accessToken: data.token
          }));
          dispatch((0,_user_state_userSlice__WEBPACK_IMPORTED_MODULE_1__.setUser)({
            user: data.user
          }));
        } catch (err) {
          console.log(err);
        }
      }
    }),
    googleAuth: builder.mutation({
      query: () => ({
        url: `/auth/oauth/redirect?provider=google`,
        method: 'GET'
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          if (data.redirect_url) {
            // Redirect the user to the obtained OAuth provider URL
            window.location.href = data.redirect_url;
          } else {
            // Handle error or unsupported provider
            console.error(`Failed to obtain redirect URL for google`);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }),
    googleAuthCallback: builder.mutation({
      query: credentials => ({
        url: `/auth/oauth/callback`,
        method: 'POST',
        body: Object.assign({}, credentials)
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_2__.setCredentials)({
            accessToken: data.token
          }));
          dispatch((0,_user_state_userSlice__WEBPACK_IMPORTED_MODULE_1__.setUser)({
            user: data.user
          }));
        } catch (err) {
          console.log(err);
        }
      }
    }),
    forgotPassword: builder.mutation({
      query: credentials => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: Object.assign({}, credentials)
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          console.log(data);
          dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_2__.setFPEmailConfirmation)({
            emailSent: true,
            email: arg.email
          }));
        } catch (err) {
          console.log(err);
        }
      }
    }),
    resetPassword: builder.mutation({
      query: credentials => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: Object.assign({}, credentials)
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          console.log(data);
          dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_2__.setFPEmailConfirmation)({
            emailSent: false,
            email: null
          }));
        } catch (err) {
          console.log(err);
        }
      }
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST'
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          console.log(data);
          dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_2__.logOut)());
          dispatch((0,_user_state_userSlice__WEBPACK_IMPORTED_MODULE_1__.resetUserStore)());
        } catch (err) {
          console.log(err);
        }
      }
    })
  })
});
const {
  useLoginMutation,
  useSignupMutation,
  useGoogleAuthMutation,
  useGoogleAuthCallbackMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLogoutMutation
} = authApiSlice;

/***/ }),

/***/ "../../libs/shared/redux/src/lib/auth-state/authSlice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   logOut: () => (/* binding */ logOut),
/* harmony export */   selectCurrentToken: () => (/* binding */ selectCurrentToken),
/* harmony export */   selectEmailConfirmation: () => (/* binding */ selectEmailConfirmation),
/* harmony export */   setCredentials: () => (/* binding */ setCredentials),
/* harmony export */   setFPEmailConfirmation: () => (/* binding */ setFPEmailConfirmation)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  token: null,
  forgotPasswordEmailConfirmation: {
    emailSent: false,
    email: null
  }
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'Auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const {
        accessToken
      } = action.payload;
      state.token = accessToken;
    },
    setFPEmailConfirmation: (state, action) => {
      // FP - Forgot Password
      state.forgotPasswordEmailConfirmation = action.payload;
    },
    logOut: state => {
      Object.assign(state, initialState);
    }
  }
});
const {
  setCredentials,
  logOut,
  setFPEmailConfirmation
} = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);
const selectCurrentToken = state => state.Auth.token;
const selectEmailConfirmation = state => state.Auth.forgotPasswordEmailConfirmation;

/***/ }),

/***/ "../../libs/shared/redux/src/lib/store.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   persistor: () => (/* binding */ persistor),
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _auth_state_authSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../libs/shared/redux/src/lib/auth-state/authSlice.ts");
/* harmony import */ var _user_state_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/shared/redux/src/lib/user-state/userSlice.ts");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/redux-persist/redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var _apiSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../libs/shared/redux/src/lib/apiSlice.ts");
// app/store.ts







const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__["default"]
};
const userPersistConfig = {
  key: 'user',
  version: 1,
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__["default"]
};
const authPersistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistReducer)(authPersistConfig, _auth_state_authSlice__WEBPACK_IMPORTED_MODULE_0__["default"]);
const userPersistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistReducer)(userPersistConfig, _user_state_userSlice__WEBPACK_IMPORTED_MODULE_1__["default"]);
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
  reducer: {
    [_apiSlice__WEBPACK_IMPORTED_MODULE_5__.apiSlice.reducerPath]: _apiSlice__WEBPACK_IMPORTED_MODULE_5__.apiSlice.reducer,
    Auth: authPersistedReducer,
    User: userPersistedReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }).concat(_apiSlice__WEBPACK_IMPORTED_MODULE_5__.apiSlice.middleware)
  // devTools: process.env.NODE_ENV !== 'production',
});

(0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_6__.setupListeners)(store.dispatch);
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistStore)(store);

/***/ }),

/***/ "../../libs/shared/redux/src/lib/user-state/userApiSlice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUpdateProfileMutation: () => (/* binding */ useUpdateProfileMutation),
/* harmony export */   useUpgradePlanMutation: () => (/* binding */ useUpgradePlanMutation),
/* harmony export */   useVerifyEmailMutation: () => (/* binding */ useVerifyEmailMutation),
/* harmony export */   userApiSlice: () => (/* binding */ userApiSlice)
/* harmony export */ });
/* harmony import */ var _apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../libs/shared/redux/src/lib/apiSlice.ts");
/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/shared/redux/src/lib/user-state/userSlice.ts");


const userApiSlice = _apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.mutation({
      query: () => ({
        url: `/users/me`,
        method: 'GET'
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          dispatch((0,_userSlice__WEBPACK_IMPORTED_MODULE_1__.setUser)({
            user: data.data
          }));
        } catch (err) {
          console.log(err);
        }
      }
    }),
    verifyEmail: builder.mutation({
      query: () => ({
        url: `/auth/email/resend`,
        method: 'GET'
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      }
    }),
    upgradePlan: builder.mutation({
      query: () => ({
        url: `/payments/subscription`,
        method: 'POST'
      }),
      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        try {
          const {
            data
          } = await queryFulfilled;
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      }
    }),
    updateProfile: builder.mutation({
      query: credentials => ({
        url: `/users/me`,
        method: 'POST',
        body: Object.assign({}, credentials)
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
      }),

      async onQueryStarted(arg, {
        dispatch,
        queryFulfilled
      }) {
        console.log(arg);
        try {
          const {
            data
          } = await queryFulfilled;
          console.log(data);
          dispatch((0,_userSlice__WEBPACK_IMPORTED_MODULE_1__.setUser)({
            user: data.data
          }));
        } catch (err) {
          console.log(err);
        }
      }
    })
  })
});
const {
  useUpgradePlanMutation,
  useVerifyEmailMutation,
  useUpdateProfileMutation
} = userApiSlice;

/***/ }),

/***/ "../../libs/shared/redux/src/lib/user-state/userSlice.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   resetUserStore: () => (/* binding */ resetUserStore),
/* harmony export */   selectCurrentUser: () => (/* binding */ selectCurrentUser),
/* harmony export */   selectTaskCompletedCount: () => (/* binding */ selectTaskCompletedCount),
/* harmony export */   setTaskCount: () => (/* binding */ setTaskCount),
/* harmony export */   setUser: () => (/* binding */ setUser)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  profile: null,
  guideTaskCompleted: 0
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {
        user
      } = action.payload;
      state.profile = user;
    },
    setTaskCount: (state, action) => {
      if (action.payload) {
        if (state.guideTaskCompleted !== 5) {
          state.guideTaskCompleted++;
        }
      } else {
        state.guideTaskCompleted = 0;
      }
    },
    resetUserStore: state => {
      Object.assign(state, initialState);
    }
  }
});
const {
  setUser,
  setTaskCount,
  resetUserStore
} = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);
const selectCurrentUser = state => state.User.profile;
const selectTaskCompletedCount = state => state.User.guideTaskCompleted;

/***/ })

}])
//# sourceMappingURL=libs_shared_redux_src_index_ts.js.map