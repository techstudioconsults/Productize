(self["webpackChunkauth"] = self["webpackChunkauth"] || []).push([["libs_auth-lib_ui_src_index_ts-_9ce91"],{

/***/ "../../libs/auth-lib/ui/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthBackground: () => (/* reexport safe */ _lib_Auth_background__WEBPACK_IMPORTED_MODULE_0__.AuthBackground),
/* harmony export */   AuthFormTemplateLogin: () => (/* reexport safe */ _lib_Auth_form_template__WEBPACK_IMPORTED_MODULE_1__.AuthFormTemplateLogin),
/* harmony export */   AuthFormTemplateSignup: () => (/* reexport safe */ _lib_Auth_form_template__WEBPACK_IMPORTED_MODULE_1__.AuthFormTemplateSignup),
/* harmony export */   VerifyEmailTemplate: () => (/* reexport safe */ _lib_VerifyEmailTemplate__WEBPACK_IMPORTED_MODULE_2__.VerifyEmailTemplate)
/* harmony export */ });
/* harmony import */ var _lib_Auth_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../libs/auth-lib/ui/src/lib/Auth-background.tsx");
/* harmony import */ var _lib_Auth_form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/auth-lib/ui/src/lib/Auth-form-template.tsx");
/* harmony import */ var _lib_VerifyEmailTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../libs/auth-lib/ui/src/lib/VerifyEmailTemplate.tsx");




/***/ }),

/***/ "../../libs/auth-lib/ui/src/lib/Auth-background.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthBackground: () => (/* binding */ AuthBackground)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\auth-lib\\ui\\src\\lib\\Auth-background.tsx";


/* eslint-disable-next-line */

function AuthBackground({
  children,
  isLogin
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
    pos: `relative`
    // zIndex={-1}
    ,
    padding: `1rem`,
    width: `100%`,
    height: `100vh`,
    overflow: `auto`,
    bgColor: isLogin ? `purple.300` : `white`,
    bgImg: isLogin ? `https://res.cloudinary.com/dkszgtapy/image/upload/v1696613891/productize/background_jg4qjv.png` : `https://res.cloudinary.com/kingsleysolomon/image/upload/v1694345357/productize/Lines_1_pa9lat.png`,
    bgRepeat: isLogin ? `no-repeat` : `repeat`,
    bgPosition: isLogin ? `` : `center`,
    bgSize: isLogin ? `cover` : ``
    // _after={{
    //   pos: `fixed`,
    //   content: "''",
    //   top: 0,
    //   left: 0,
    //   w: `100%`,
    //   h: `100vh`,
    //   bgColor: `purple.300`,
    //   filter: `opacity(0.5)`,
    //   // zIndex: 0,
    // }}
    ,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      pos: `relative`,
      zIndex: 1,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../../libs/auth-lib/ui/src/lib/Auth-form-template.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthFormTemplateLogin: () => (/* binding */ AuthFormTemplateLogin),
/* harmony export */   AuthFormTemplateSignup: () => (/* binding */ AuthFormTemplateSignup)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\auth-lib\\ui\\src\\lib\\Auth-form-template.tsx";




const AuthFormTemplateSignup = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Card, {
    mt: 40,
    py: 8,
    maxW: `547px`,
    w: `100%`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
      px: {
        lg: 12
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link,
          to: `/`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: `https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`,
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: `h5`,
        textAlign: `left`,
        my: 5,
        children: "Join creators today to sell your product and upskill your community."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
      px: {
        lg: 12
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};
const AuthFormTemplateLogin = ({
  children,
  title,
  subTitle
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Card, {
    bgColor: `transparent`,
    py: 8,
    maxW: `444px`,
    w: `100%`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
      p: 12,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link,
          to: `/`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: `https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`,
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
      borderRadius: `8px`,
      bgColor: `white`,
      px: {
        lg: 12
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.CardHeader, {
        color: `grey.600`,
        px: 0,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          as: `h4`,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          mt: 4,
          children: subTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/auth-lib/ui/src/lib/VerifyEmailTemplate.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyEmailTemplate: () => (/* binding */ VerifyEmailTemplate)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/ui/@productize/shared/ui");
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\auth-lib\\ui\\src\\lib\\VerifyEmailTemplate.tsx";






function VerifyEmailTemplate({
  text
}) {
  const emailConfirmation = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_4__.selectEmailConfirmation);
  const checkMail = () => {
    window.location.href = emailConfirmation.email;
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
      className: "small-text",
      color: `green.200`,
      mb: 2,
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_2__.SharedButton, {
      btnExtras: {
        onClick: checkMail
      },
      text: 'Open email',
      width: '100%',
      height: '48px',
      bgColor: 'purple.200',
      textColor: 'white',
      borderRadius: '4px',
      fontSize: {
        base: `sm`,
        md: `md`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
      my: 4,
      justifyContent: `space-between`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
        color: `purple.200`,
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
        fontSize: `sm`,
        children: "Try another email address"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
        color: `purple.200`,
        as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
        fontSize: `sm`,
        children: "Skip, i'll confirm later"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

/***/ })

}])
//# sourceMappingURL=libs_auth-lib_ui_src_index_ts-_9ce91.js.map