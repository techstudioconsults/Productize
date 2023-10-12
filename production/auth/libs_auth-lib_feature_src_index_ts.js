(self["webpackChunkauth"] = self["webpackChunkauth"] || []).push([["libs_auth-lib_feature_src_index_ts"],{

/***/ "../../libs/auth-lib/feature/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPassowrdForm: () => (/* reexport safe */ _lib_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__.ForgotPassowrdForm),
/* harmony export */   LoginForm: () => (/* reexport safe */ _lib_LogininForm__WEBPACK_IMPORTED_MODULE_1__.LoginForm),
/* harmony export */   ResetPassword: () => (/* reexport safe */ _lib_ResetPassword__WEBPACK_IMPORTED_MODULE_3__.ResetPassword),
/* harmony export */   SignupForm: () => (/* reexport safe */ _lib_SignupForm__WEBPACK_IMPORTED_MODULE_0__.SignupForm)
/* harmony export */ });
/* harmony import */ var _lib_SignupForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../libs/auth-lib/feature/src/lib/SignupForm.tsx");
/* harmony import */ var _lib_LogininForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/auth-lib/feature/src/lib/LogininForm.tsx");
/* harmony import */ var _lib_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../libs/auth-lib/feature/src/lib/ForgotPassword.tsx");
/* harmony import */ var _lib_ResetPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../libs/auth-lib/feature/src/lib/ResetPassword.tsx");





/***/ }),

/***/ "../../libs/auth-lib/feature/src/lib/ForgotPassword.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPassowrdForm: () => (/* binding */ ForgotPassowrdForm)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/ui/@productize/shared/ui");
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/react-hook-form/react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\auth-lib\\feature\\src\\lib\\ForgotPassword.tsx";







const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters'
  }
};

/* eslint-disable-next-line */

function ForgotPassowrdForm(props) {
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [forgotPassword, forgotPasswordStatus] = (0,_productize_shared_redux__WEBPACK_IMPORTED_MODULE_5__.useForgotPasswordMutation)();
  const {
    register,
    handleSubmit
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    criteriaMode: 'all'
  });
  const onSubmit = async data => {
    try {
      const res = await forgotPassword(data).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
      setError(error.data.message);
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
    as: `form`,
    onSubmit: handleSubmit(onSubmit),
    children: [forgotPasswordStatus.isError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_2__.ErrorText, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 40
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      mb: 5,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
        fontWeight: 600,
        className: "btn-text",
        children: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, Object.assign({
        type: "email",
        bgColor: `grey.200`,
        variant: `filled`,
        placeholder: "Enter email",
        _placeholder: {
          fontSize: {
            base: `xs`,
            lg: `sm`
          }
        }
      }, register('email', validation)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        my: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_2__.SharedButton, {
          text: 'Reset Password',
          width: `100%`,
          height: '48px',
          bgColor: 'purple.200',
          textColor: 'white',
          borderRadius: '4px',
          fontSize: {
            base: `sm`,
            lg: `md`
          },
          btnExtras: {
            loadingText: 'Loading...',
            type: `submit`,
            isLoading: forgotPasswordStatus.isLoading
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
        my: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
          w: `100%`,
          to: `/auth/login`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_2__.SharedButton, {
            text: 'Back to Sign In',
            width: `100%`,
            height: '48px',
            bgColor: 'white',
            textColor: 'purple.200',
            borderRadius: '4px',
            fontSize: {
              base: `sm`
            },
            btnExtras: {
              leftIcon: `solar:arrow-left-line-duotone`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../../libs/auth-lib/feature/src/lib/LogininForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginForm: () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/ui/@productize/shared/ui");
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/react-hook-form/react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\auth-lib\\feature\\src\\lib\\LogininForm.tsx";





// import { ErrorMessage } from '@hookform/error-message';



/* eslint-disable-next-line */
// export interface LoginFormProps {}

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters'
  }
};
function LoginForm() {
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const handleClick = () => setShow(!show);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();

  // mutations
  const [login, loginStatus] = (0,_productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__.useLoginMutation)();
  const [googleAuth, googleLoginStatus] = (0,_productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__.useGoogleAuthMutation)();
  const {
    register,
    handleSubmit
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    criteriaMode: 'all'
  });
  const onSubmit = async data => {
    try {
      const res = await login(data).unwrap();
      if (res.token) {
        navigate(`/dashboard/home`);
      }
    } catch (error) {
      setError(error.data.message);
    }
  };
  const onGoogleButtonClick = async () => {
    try {
      const res = await googleAuth(null).unwrap();
      console.log(res);
    } catch (error) {
      setError(error.data.message);
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
    as: `form`,
    onSubmit: handleSubmit(onSubmit),
    children: [(loginStatus.isError || googleLoginStatus.isError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__.ErrorText, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      mb: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
        fontWeight: 600,
        className: "btn-text",
        children: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, Object.assign({
        type: "email",
        id: "email",
        size: `lg`,
        bgColor: `grey.200`,
        variant: `filled`,
        placeholder: "Enter email",
        _placeholder: {
          fontSize: {
            base: `xs`,
            lg: `sm`
          }
        }
      }, register('email', validation)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      my: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        mb: 2,
        justifyContent: `space-between`,
        alignItems: `center`,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
          m: 0,
          fontWeight: 600,
          className: "btn-text",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          to: `/auth/forgot-password`,
          as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
          color: `purple.200`,
          fontSize: `12px`,
          children: "Forgot Password ?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputGroup, {
        size: "lg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, Object.assign({
          id: "password",
          bgColor: `grey.200`,
          variant: `filled`,
          pr: "4.5rem",
          type: show ? 'text' : 'password',
          placeholder: "Enter password",
          _placeholder: {
            fontSize: {
              base: `xs`,
              lg: `sm`
            }
          }
        }, register('password', validation)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputRightElement, {
          onClick: handleClick,
          width: "2.5rem",
          children: !show ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ant-design:eye-twotone`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ant-design:eye-invisible-twotone`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        my: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__.SharedButton, {
          btnExtras: {
            loadingText: 'Logging in...',
            isLoading: loginStatus.isLoading,
            type: `submit`
          },
          text: 'Sign In',
          width: `100%`,
          height: '48px',
          bgColor: 'purple.200',
          textColor: 'white',
          borderRadius: '4px',
          fontSize: {
            base: `sm`,
            lg: `md`
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          color: `grey.300`,
          children: "--------- Or ---------"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        my: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__.SharedButton, {
          btnExtras: {
            loadingText: 'Logging in...',
            isLoading: googleLoginStatus.isLoading,
            onClick: onGoogleButtonClick,
            rightIcon: `flat-color-icons:google`,
            border: `1px solid #6D5DD3`
          },
          text: 'Continue with Google',
          width: `100%`,
          height: '48px',
          bgColor: 'white',
          textColor: 'purple.200',
          borderRadius: '4px',
          fontSize: {
            base: `sm`,
            lg: `md`
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        mb: 4,
        color: `grey.400`,
        className: "small-text",
        textAlign: `center`,
        children: ["Don\u2019t have an account ?", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          display: `inline`,
          to: `/auth`,
          as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
          color: `purple.200`,
          children: "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../../libs/auth-lib/feature/src/lib/ResetPassword.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPassword: () => (/* binding */ ResetPassword)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/ui/@productize/shared/ui");
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/react-hook-form/react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\auth-lib\\feature\\src\\lib\\ResetPassword.tsx";








/* eslint-disable-next-line */
// export interface LoginFormProps {}

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters'
  }
};
function ResetPassword({
  email,
  token
}) {
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [showPasswordConfirmation, setShowPasswordConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const handlePasswordClick = () => setShowPassword(!showPassword);
  const handlePasswordConfirmationClick = () => setShowPasswordConfirmation(!showPasswordConfirmation);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useToast)();

  // mutation
  const [resetPassword, resetPasswordStatus] = (0,_productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__.useResetPasswordMutation)();
  const {
    register,
    handleSubmit
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    criteriaMode: 'all'
  });
  const onSubmit = async data => {
    console.log(data);
    const formData = Object.assign({
      token,
      email
    }, data);
    try {
      const res = await resetPassword(formData).unwrap();
      console.log(res);
      if (res.message) {
        toast({
          title: 'Successful',
          description: res.message,
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top',
          variant: 'top-accent'
        });
        navigate(`/auth/login`);
      }
    } catch (error) {
      setError(error.data.message);
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
    as: `form`,
    onSubmit: handleSubmit(onSubmit),
    children: [resetPasswordStatus.isError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__.ErrorText, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 39
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      my: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
        fontWeight: 600,
        className: "btn-text",
        children: "New Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputGroup, {
        size: "lg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, Object.assign({
          id: "password",
          bgColor: `grey.200`,
          variant: `filled`,
          pr: "4.5rem",
          type: showPassword ? 'text' : 'password',
          placeholder: "Enter password",
          _placeholder: {
            fontSize: {
              base: `xs`,
              lg: `sm`
            }
          }
        }, register('password', validation)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputRightElement, {
          onClick: handlePasswordClick,
          width: "2.5rem",
          children: !showPassword ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ant-design:eye-twotone`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ant-design:eye-invisible-twotone`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      my: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
        fontWeight: 600,
        className: "btn-text",
        children: "Confirm New Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputGroup, {
        size: "lg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, Object.assign({
          id: "password_confirmation",
          bgColor: `grey.200`,
          variant: `filled`,
          pr: "4.5rem",
          type: showPasswordConfirmation ? 'text' : 'password',
          placeholder: "Enter password confirmation",
          _placeholder: {
            fontSize: {
              base: `xs`,
              lg: `sm`
            }
          }
        }, register('password_confirmation', validation)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputRightElement, {
          onClick: handlePasswordConfirmationClick,
          width: "2.5rem",
          children: !showPasswordConfirmation ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ant-design:eye-twotone`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ant-design:eye-invisible-twotone`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        my: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__.SharedButton, {
          btnExtras: {
            loadingText: 'Changing Password...',
            isLoading: resetPasswordStatus.isLoading,
            type: `submit`
          },
          text: 'Reset password',
          width: `100%`,
          height: '48px',
          bgColor: 'purple.200',
          textColor: 'white',
          borderRadius: '4px',
          fontSize: {
            base: `sm`,
            lg: `md`
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../../libs/auth-lib/feature/src/lib/SignupForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupForm: () => (/* binding */ SignupForm)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/ui/@productize/shared/ui");
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/react-hook-form/react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\auth-lib\\feature\\src\\lib\\SignupForm.tsx";








/* eslint-disable-next-line */

const validation = {
  required: 'This input is required.',
  minLength: {
    value: 4,
    message: 'This input must exceed 3 characters'
  }
};
function SignupForm(props) {
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const handlePasswordClick = () => setShowPassword(!showPassword);
  const handlePasswordConfirmationClick = () => setShowPasswordConfirmation(!showPasswordConfirmation);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();

  // mutations
  const [signup, signupStatus] = (0,_productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__.useSignupMutation)();
  const [googleAuth, googleSiginStatus] = (0,_productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__.useGoogleAuthMutation)();
  const {
    register,
    handleSubmit
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    criteriaMode: 'all'
  });
  const onSubmit = async data => {
    try {
      const res = await signup(data).unwrap();
      if (res.token) {
        navigate(`/dashboard/home`);
      }
    } catch (error) {
      setError(error.data.message);
      console.log(error);
    }
  };
  const onGoogleButtonClick = async () => {
    try {
      const res = await googleAuth(null).unwrap();
      console.log(res);
    } catch (error) {
      setError(error.data.message);
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
    as: `form`,
    onSubmit: handleSubmit(onSubmit),
    children: [(signupStatus.isError || googleSiginStatus.isError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__.ErrorText, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      mb: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
        fontWeight: 600,
        className: "btn-text",
        children: "First Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, Object.assign({
        size: `lg`,
        bgColor: `grey.200`,
        variant: `filled`,
        id: "fullName",
        placeholder: "Enter full name",
        _placeholder: {
          fontSize: {
            base: `xs`,
            lg: `sm`
          }
        }
      }, register('full_name', validation)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      my: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
        fontWeight: 600,
        className: "btn-text",
        children: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, Object.assign({
        type: "email",
        id: "email",
        size: `lg`,
        bgColor: `grey.200`,
        variant: `filled`,
        placeholder: "Enter email",
        _placeholder: {
          fontSize: {
            base: `xs`,
            lg: `sm`
          }
        }
      }, register('email', validation)), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      my: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
        fontWeight: 600,
        className: "btn-text",
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputGroup, {
        size: "lg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, Object.assign({
          id: "password",
          bgColor: `grey.200`,
          variant: `filled`,
          pr: "4.5rem",
          type: showPassword ? 'text' : 'password',
          placeholder: "Enter password",
          _placeholder: {
            fontSize: {
              base: `xs`,
              lg: `sm`
            }
          }
        }, register('password', validation)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputRightElement, {
          onClick: handlePasswordClick,
          width: "2.5rem",
          children: !showPassword ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ant-design:eye-twotone`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ant-design:eye-invisible-twotone`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      my: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
        fontWeight: 600,
        className: "btn-text",
        children: "Confirm Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputGroup, {
        size: "lg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, Object.assign({
          id: "password_confirmation",
          bgColor: `grey.200`,
          variant: `filled`,
          pr: "4.5rem",
          type: showPasswordConfirmation ? 'text' : 'password',
          placeholder: "Enter password confirmation",
          _placeholder: {
            fontSize: {
              base: `xs`,
              lg: `sm`
            }
          }
        }, register('password_confirmation', validation)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputRightElement, {
          onClick: handlePasswordConfirmationClick,
          width: "2.5rem",
          children: !showPasswordConfirmation ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ant-design:eye-twotone`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ant-design:eye-invisible-twotone`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "small-text",
        textAlign: `center`,
        children: ["You agree to our", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          color: `purple.200`,
          as: `span`,
          children: "Terms Of Use"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this), ' ', "and", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          color: `purple.200`,
          as: `span`,
          children: "Privacy Policy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        my: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__.SharedButton, {
          btnExtras: {
            loadingText: 'Creating Account...',
            isLoading: signupStatus.isLoading,
            type: `submit`
          },
          text: 'Create Account',
          width: `100%`,
          height: '46px',
          bgColor: 'purple.200',
          textColor: 'white',
          borderRadius: '4px',
          fontSize: {
            base: `sm`,
            lg: `md`
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          color: `grey.300`,
          children: "--------- Or ---------"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        my: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_3__.SharedButton, {
          btnExtras: {
            rightIcon: `flat-color-icons:google`,
            loadingText: 'Creating Account...',
            isLoading: googleSiginStatus.isLoading,
            onClick: onGoogleButtonClick,
            border: `1px solid #6D5DD3`
          },
          text: 'Continue with Google',
          width: `100%`,
          height: '46px',
          bgColor: 'white',
          textColor: 'purple.200',
          borderRadius: '4px',
          fontSize: {
            base: `sm`,
            lg: `md`
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "small-text",
        textAlign: `center`,
        children: ["Have an account already ?", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          display: `inline`,
          to: `/auth/login`,
          color: `purple.200`,
          as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

/***/ })

}])
//# sourceMappingURL=libs_auth-lib_feature_src_index_ts.js.map