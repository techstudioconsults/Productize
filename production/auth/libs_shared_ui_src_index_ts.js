(self["webpackChunkauth"] = self["webpackChunkauth"] || []).push([["libs_shared_ui_src_index_ts"],{

/***/ "../../libs/shared/ui/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvatarComp: () => (/* reexport safe */ _lib_Avatar__WEBPACK_IMPORTED_MODULE_3__.AvatarComp),
/* harmony export */   ErrorText: () => (/* reexport safe */ _lib_ErrorText__WEBPACK_IMPORTED_MODULE_4__.ErrorText),
/* harmony export */   Footer: () => (/* reexport safe */ _lib_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer),
/* harmony export */   Icon: () => (/* reexport safe */ _lib_Icon__WEBPACK_IMPORTED_MODULE_10__.Icon),
/* harmony export */   ModalComp: () => (/* reexport safe */ _lib_Modal__WEBPACK_IMPORTED_MODULE_11__.ModalComp),
/* harmony export */   PaymentStatusTag: () => (/* reexport safe */ _lib_PaymentStatusTag__WEBPACK_IMPORTED_MODULE_6__.PaymentStatusTag),
/* harmony export */   PreLoader: () => (/* reexport safe */ _lib_PreLoader__WEBPACK_IMPORTED_MODULE_2__.PreLoader),
/* harmony export */   PricingCard: () => (/* reexport safe */ _lib_PricingCard__WEBPACK_IMPORTED_MODULE_9__.PricingCard),
/* harmony export */   SearchComp: () => (/* reexport safe */ _lib_SearchComp__WEBPACK_IMPORTED_MODULE_7__.SearchComp),
/* harmony export */   SharedButton: () => (/* reexport safe */ _lib_SharedButton__WEBPACK_IMPORTED_MODULE_0__.SharedButton),
/* harmony export */   Sidenav: () => (/* reexport safe */ _lib_SideNavigationbar__WEBPACK_IMPORTED_MODULE_5__.Sidenav),
/* harmony export */   UpgradePlanModal: () => (/* reexport safe */ _lib_UpgradePlanModal__WEBPACK_IMPORTED_MODULE_8__.UpgradePlanModal)
/* harmony export */ });
/* harmony import */ var _lib_SharedButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../libs/shared/ui/src/lib/SharedButton.tsx");
/* harmony import */ var _lib_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/shared/ui/src/lib/Footer.tsx");
/* harmony import */ var _lib_PreLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../libs/shared/ui/src/lib/PreLoader.tsx");
/* harmony import */ var _lib_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../libs/shared/ui/src/lib/Avatar.tsx");
/* harmony import */ var _lib_ErrorText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../libs/shared/ui/src/lib/ErrorText.tsx");
/* harmony import */ var _lib_SideNavigationbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../libs/shared/ui/src/lib/SideNavigationbar.tsx");
/* harmony import */ var _lib_PaymentStatusTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../libs/shared/ui/src/lib/PaymentStatusTag.tsx");
/* harmony import */ var _lib_SearchComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../libs/shared/ui/src/lib/SearchComp.tsx");
/* harmony import */ var _lib_UpgradePlanModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../libs/shared/ui/src/lib/UpgradePlanModal.tsx");
/* harmony import */ var _lib_PricingCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../libs/shared/ui/src/lib/PricingCard.tsx");
/* harmony import */ var _lib_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../libs/shared/ui/src/lib/Icon.tsx");
/* harmony import */ var _lib_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../libs/shared/ui/src/lib/Modal.tsx");














/***/ }),

/***/ "../../libs/shared/ui/src/lib/Avatar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvatarComp: () => (/* binding */ AvatarComp)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../libs/shared/ui/src/lib/Icon.tsx");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\Avatar.tsx";







const AvatarComp = ({
  isScroll,
  linkColor
}) => {
  const [logout] = (0,_productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__.useLogoutMutation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__.selectCurrentUser);
  const logOut = async () => {
    try {
      const res = await logout(null).unwrap();
      if (res.message) {
        navigate(`/auth/login`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Menu, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuButton, {
      transition: "all 0.2s",
      borderRadius: "md",
      borderWidth: "1px",
      _hover: {
        bg: 'transparent'
      },
      _expanded: {
        bg: 'transparent'
      },
      _focus: {
        boxShadow: 'none'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
        gap: 4,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Avatar, {
          size: "sm",
          name: user == null ? void 0 : user.name,
          src: user == null ? void 0 : user.logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          color: isScroll ? `black` : linkColor,
          children: user == null ? void 0 : user.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
          icon: 'eva:chevron-down-outline'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuList, {
      textAlign: `start`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        color: `grey.400`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          to: `/dashboard/home`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {
            name: "menu",
            icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088709/Stockholm-icons_kizeoq.svg`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            ml: 3,
            children: "Dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        color: `red.200`,
        onClick: logOut,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
          fontSize: `1.3rem`,
          icon: `basil:logout-solid`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          ml: 3,
          children: "Log out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/shared/ui/src/lib/ErrorText.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorText: () => (/* binding */ ErrorText)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\ErrorText.tsx";



const ErrorText = ({
  error
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
    mb: 4,
    className: "small-text",
    color: `red.200`,
    children: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

// export default ErrorText;

/***/ }),

/***/ "../../libs/shared/ui/src/lib/Footer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\Footer.tsx";




const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
    background: `purple.100`,
    display: "flex",
    flexDirection: "column",
    paddingTop: "1rem"
    // w={'100%'}
    ,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Container, {
      maxW: `70rem`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.SimpleGrid, {
        fontWeight: `bold`,
        spacing: 10,
        columns: {
          base: 1,
          lg: 4
        },
        marginTop: "1rem",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          alignItems: `start`,
          justifyContent: {
            base: `center`,
            lg: `initial`
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: `https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`,
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          flexDir: `column`,
          fontSize: "md",
          fontWeight: "medium",
          lineHeight: "base",
          cursor: 'pointer',
          gap: 2,
          my: {
            base: 8,
            lg: 0
          },
          textAlign: {
            base: `center`,
            lg: `initial`
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            children: "Cookie settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            children: "Sitemap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            children: "Become a creator"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          fontSize: "md",
          fontWeight: "medium",
          lineHeight: "base",
          cursor: 'pointer',
          textAlign: 'start',
          display: {
            base: `none`,
            lg: `block`
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: "Help and support"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: "Terms"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          fontSize: "md",
          fontWeight: "medium",
          lineHeight: "base",
          cursor: 'pointer',
          textAlign: 'start',
          display: {
            base: `none`,
            lg: `block`
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: "About us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: "Contact us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        flexDir: {
          base: `column-reverse`,
          lg: `row`
        },
        justify: {
          base: `center`,
          lg: `space-between`
        },
        align: "center",
        paddingBottom: "2.5rem",
        paddingTop: ".6rem",
        gap: 5,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            children: "2023"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          fontSize: `1.5rem`,
          color: `black`,
          align: "center",
          gap: "1.4rem",
          cursor: 'pointer',
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ic:baseline-facebook`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `formkit:twitter`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `ant-design:dribbble-circle-filled`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: `mdi:pinterest`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/shared/ui/src/lib/Icon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icon: () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\Icon.tsx";


const Icon = ({
  icon,
  name,
  size
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
    boxSize: size || `24px`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
      boxSize: size || `24px`,
      src: icon,
      alt: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/shared/ui/src/lib/Modal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalComp: () => (/* binding */ ModalComp)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\Modal.tsx";


const ModalComp = ({
  children,
  modalSize,
  openModal,
  closeModal
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    isCentered: true,
    size: {
      base: `full`,
      md: modalSize
    },
    isOpen: openModal,
    onClose: closeModal,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalOverlay, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalContent, {
      borderRadius: `1rem`,
      py: 10,
      px: {
        base: 4,
        md: 10
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/shared/ui/src/lib/PaymentStatusTag.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentStatusTag: () => (/* binding */ PaymentStatusTag)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productize_shared_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/hooks/@productize/shared/hooks");
/* harmony import */ var _productize_shared_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\PaymentStatusTag.tsx";



const PaymentStatusTag = () => {
  const isPremium = (0,_productize_shared_hooks__WEBPACK_IMPORTED_MODULE_1__.useSetPaymentPlan)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tag, {
    size: `sm`,
    fontSize: `xs`,
    bgColor: isPremium ? `yellow.100` : `coral.100`,
    border: isPremium ? `1px solid #F6C21C` : `1px solid #17B6BA`,
    color: `coral.300`,
    children: isPremium ? `Premium` : `Free`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/shared/ui/src/lib/PreLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreLoader: () => (/* binding */ PreLoader)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\PreLoader.tsx";





const PreLoader = () => {
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  // mutation
  const [googleAuthCallback] = (0,_productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__.useGoogleAuthCallbackMutation)();
  const googleRedirect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async code => {
    const data = {
      provider: 'google',
      code: code
    };
    try {
      const res = await googleAuthCallback(data).unwrap();
      if (res.token) {
        navigate(`/dashboard/home`);
      }
    } catch (error) {
      setError(error.data.message);
    }
  }, [googleAuthCallback, navigate]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // Get the URL from the browser's address bar
    const url = window.location.href;
    // Use the URLSearchParams API to parse the query string
    const queryParams = new URLSearchParams(new URL(url).search);
    // Get the value of the 'code' parameter
    const code = queryParams.get('code');
    // Check if 'code' parameter exists and has a value
    if (code) {
      console.log('Code parameter:', code);
      // setCodeParams(code);
      googleRedirect(code);
    } else {
      console.log('Code parameter not found in the URL.');
    }
  }, [googleRedirect]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
    h: `100vh`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
        w: "3rem",
        src: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1694900245/hng/Gear-0.2s-200px_1_xye3wd.svg`,
        alt: `spinner`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: `h6`,
        children: "Please wait..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/shared/ui/src/lib/PricingCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingCard: () => (/* binding */ PricingCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _productize_external_pages_lib_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/@productize/external-pages-lib/ui/@productize/external-pages-lib/ui");
/* harmony import */ var _productize_external_pages_lib_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_productize_external_pages_lib_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SharedButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../libs/shared/ui/src/lib/SharedButton.tsx");
/* harmony import */ var _productize_shared_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/hooks/@productize/shared/hooks");
/* harmony import */ var _productize_shared_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\PricingCard.tsx";



// eslint-disable-next-line @nx/enforce-module-boundaries




const PricingCard = ({
  cardProps,
  listItems,
  iconColor,
  amount,
  status,
  textColor,
  statusColor,
  tagProps,
  showButton
}) => {
  const {
    upgrade,
    upgradeStatus
  } = (0,_productize_shared_hooks__WEBPACK_IMPORTED_MODULE_5__.usePlanUpgrade)();
  const isPremium = (0,_productize_shared_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetPaymentPlan)();
  const lists = listItems == null ? void 0 : listItems.map((list, index) => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
      display: `flex`,
      alignItems: `flex-start`,
      gap: 2,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        fontSize: `1.5rem`,
        color: iconColor,
        icon: `gg:check`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        className: "small-text",
        color: textColor,
        children: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_productize_external_pages_lib_ui__WEBPACK_IMPORTED_MODULE_3__.CardLayout, {
    bgColor: cardProps.bgColor,
    width: cardProps.width,
    height: cardProps.height,
    borderRadius: cardProps.borderRadius,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      flexDir: `column`,
      justifyContent: `space-between`,
      height: `100%`,
      p: `36px`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          mb: 8,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            alignItems: `center`,
            justifyContent: `space-between`,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontWeight: 500,
              color: statusColor,
              children: status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {
              fontWeight: 600,
              color: isPremium && cardProps.bgColor === `purple.300` ? `grey.100` : tagProps.color,
              bgColor: isPremium && cardProps.bgColor === `purple.300` ? `green.200` : tagProps.bgColor,
              size: `lg`,
              children: isPremium && cardProps.bgColor === `purple.300` ? `Current Plan` : isPremium ? `casual` : tagProps.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mt: 4,
            as: `h3`,
            color: textColor,
            fontWeight: 700,
            children: ["NGN ", amount, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontSize: `18px`,
              fontWeight: 200,
              color: `grey.400`,
              as: `span`,
              children: "/Per Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
          spacing: 3,
          children: lists
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        hidden: !showButton || isPremium,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_SharedButton__WEBPACK_IMPORTED_MODULE_4__.SharedButton, {
          text: 'Upgrade Plan',
          width: '100%',
          height: '56px',
          bgColor: 'purple.200',
          textColor: 'white',
          borderRadius: '4px',
          fontSize: {},
          btnExtras: {
            isLoading: upgradeStatus.isLoading,
            onClick: () => upgrade()
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/shared/ui/src/lib/SearchComp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComp: () => (/* binding */ SearchComp)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/shared/ui/src/lib/Icon.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\SearchComp.tsx";



const SearchComp = ({
  color,
  width,
  size
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputGroup, {
    size: size,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputLeftElement, {
      pointerEvents: "none",
      fontSize: "1.2em",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088263/productize/Productize-iconset/Property_2_Search_vjopxj.svg`,
        name: 'search'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, {
      border: `none`,
      placeholder: 'Search',
      _placeholder: {
        color: '#01010140'
      },
      w: width,
      bgColor: color
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/shared/ui/src/lib/SharedButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedButton: () => (/* binding */ SharedButton)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\SharedButton.tsx";



/* eslint-disable-next-line */

function SharedButton({
  text,
  width,
  height,
  bgColor,
  textColor,
  borderRadius,
  fontSize,
  btnExtras
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: btnExtras == null ? void 0 : btnExtras.onClick,
    loadingText: btnExtras == null ? void 0 : btnExtras.loadingText,
    isLoading: btnExtras == null ? void 0 : btnExtras.isLoading,
    leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      fontSize: `1rem`,
      icon: btnExtras == null ? void 0 : btnExtras.leftIcon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }, this),
    rightIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      fontSize: `1rem`,
      icon: btnExtras == null ? void 0 : btnExtras.rightIcon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 18
    }, this),
    fontWeight: 500,
    fontSize: fontSize,
    w: width,
    h: height,
    bgColor: bgColor,
    color: textColor,
    borderRadius: borderRadius,
    border: btnExtras == null ? void 0 : btnExtras.border,
    type: btnExtras == null ? void 0 : btnExtras.type,
    disabled: btnExtras == null ? void 0 : btnExtras.disabled,
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// export default SharedButton;

/***/ }),

/***/ "../../libs/shared/ui/src/lib/SideNavigationbar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidenav: () => (/* binding */ Sidenav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SharedButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../libs/shared/ui/src/lib/SharedButton.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\SideNavigationbar.tsx";







const Sidenav = ({
  links
}) => {
  const [menuColor, setMenuColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(`white`);
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  const switchMenuColor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    switch (pathname) {
      case `/`:
        setMenuColor(`grey.100`);
        break;
      default:
        setMenuColor(`yellow.300`);
        break;
    }
  }, [pathname]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    switchMenuColor();
  }, [switchMenuColor]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
      color: menuColor,
      cursor: `pointer`,
      display: {
        xl: `none`
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        fontSize: `2rem`,
        onClick: onOpen,
        icon: `ci:hamburger-md`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
      size: {
        base: `sm`
      },
      isOpen: isOpen,
      placement: "left",
      onClose: onClose,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerOverlay, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerContent, {
        px: 10,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerCloseButton, {
          my: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerHeader, {
          py: 5,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link,
            to: `/`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
              w: `60%`,
              cursor: `pointer`,
              src: `https://res.cloudinary.com/dkszgtapy/image/upload/v1693034778/productize/Frame_14220_ogchl8.png`,
              alt: "metabnb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerBody, {
          py: 10,
          children: links
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerFooter, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            w: `100%`,
            gap: 4,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link,
              to: `/auth/login`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SharedButton__WEBPACK_IMPORTED_MODULE_4__.SharedButton, {
                fontSize: {
                  base: `sm`,
                  md: `md`
                },
                text: 'Login',
                width: '100%',
                height: '48px',
                bgColor: 'transparent',
                textColor: 'grey',
                borderRadius: '4px'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link,
              to: `/auth`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SharedButton__WEBPACK_IMPORTED_MODULE_4__.SharedButton, {
                fontSize: {
                  base: `sm`,
                  md: `md`
                },
                text: 'Get Started',
                width: '100%',
                height: '48px',
                bgColor: 'yellow.200',
                textColor: 'white',
                borderRadius: '4px'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

// export default Sidenav;

/***/ }),

/***/ "../../libs/shared/ui/src/lib/UpgradePlanModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpgradePlanModal: () => (/* binding */ UpgradePlanModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SharedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../libs/shared/ui/src/lib/SharedButton.tsx");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PricingCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../libs/shared/ui/src/lib/PricingCard.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\shared\\ui\\src\\lib\\UpgradePlanModal.tsx";






// interface modalProps {
//   children: ReactNode;
// }


const UpgradePlanModal = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SharedButton__WEBPACK_IMPORTED_MODULE_2__.SharedButton, {
      text: 'Upgrade Plan',
      btnExtras: {
        onClick: onOpen
      },
      width: 'fit-content',
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      size: {
        base: `full`,
        md: `5xl`
      },
      isOpen: isOpen,
      onClose: onClose,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
        borderRadius: `1rem`,
        py: 10,
        px: {
          base: 4,
          md: 20
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          flexDir: {
            base: `column`,
            md: `row`
          },
          justifyContent: `space-between`,
          alignItems: `center`,
          gap: `10`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingCard__WEBPACK_IMPORTED_MODULE_4__.PricingCard, {
            cardProps: {
              bgColor: `purple.100`,
              width: {
                base: `100%`,
                xl: `25rem`
              },
              height: `556px`,
              borderRadius: `8px`
            },
            listItems: [`lorem lorem lorem lorem lorem lorem lorem lorem lorem`, `lorem lorem lorem lorem lorem lorem lorem lorem lorem`, `lorem lorem lorem lorem lorem lorem lorem lorem lorem`, `lorem lorem lorem lorem lorem lorem lorem lorem lorem`, `lorem lorem lorem lorem lorem lorem lorem lorem lorem`],
            iconColor: 'black',
            amount: 0,
            status: 'Free',
            textColor: 'yellow.300',
            statusColor: 'yellow.300',
            tagProps: {
              title: 'Current Plan',
              bgColor: 'grey.800',
              color: `white`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PricingCard__WEBPACK_IMPORTED_MODULE_4__.PricingCard, {
            showButton: true,
            cardProps: {
              bgColor: `purple.300`,
              width: {
                base: `100%`,
                xl: `25rem`
              },
              height: `556px`,
              borderRadius: `8px`
            },
            listItems: [`lorem lorem lorem lorem lorem lorem lorem lorem lorem`, `lorem lorem lorem lorem lorem lorem lorem lorem lorem`, `lorem lorem lorem lorem lorem lorem lorem lorem lorem`, `lorem lorem lorem lorem lorem lorem lorem lorem lorem`, `lorem lorem lorem lorem lorem lorem lorem lorem lorem`],
            iconColor: 'gold',
            amount: 5000,
            status: 'premium',
            textColor: 'purple.100',
            statusColor: 'yellow.100',
            tagProps: {
              title: 'Best Value',
              bgColor: 'yellow.100',
              color: `yellow.300`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          p: 5,
          justifyContent: `center`,
          alignItems: `center`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
            cursor: `pointer`,
            onClick: onClose,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              fontSize: `2rem`,
              icon: 'system-uicons:chevron-left'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontWeight: 600,
              children: "Go Back"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/***/ })

}])
//# sourceMappingURL=libs_shared_ui_src_index_ts.js.map