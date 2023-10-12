(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_bootstrap_tsx-src_layouts_navbar_module_scss-src_styles_scss"],{

/***/ "./src/bootstrap.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react-dom/client.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/app.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scss_globalTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../scss/globalTheme.ts");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rsuite_dist_rsuite_no_reset_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/rsuite/dist/rsuite-no-reset.min.css");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\apps\\dashboard\\src\\bootstrap.tsx";





// import theme from './theme';



// RSUITE STYLE


const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {
      theme: _scss_globalTheme__WEBPACK_IMPORTED_MODULE_5__["default"],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {
        store: _productize_shared_redux__WEBPACK_IMPORTED_MODULE_6__.store,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 19,
  columnNumber: 3
}, undefined));

/***/ }),

/***/ "../../scss/globalTheme.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    purple: {
      100: '#F7F2FB',
      200: '#6D5DD3',
      300: '#0E0A2D'
    },
    yellow: {
      100: '#FBE69A',
      200: '#F6C21C',
      300: '#39341F'
    },
    coral: {
      100: '#AEDEE0',
      200: '#17B6BA',
      300: '#1E2323'
    },
    green: {
      100: '#C9E7D3',
      200: '#11923D',
      300: '#161D18'
    },
    grey: {
      100: '#FAFAFA',
      200: '#F3F3F3',
      300: '#CFCFD0',
      400: '#878789',
      500: '#4C4C4F',
      600: '#28282B',
      700: '#1D1C20',
      800: '#111014'
    },
    red: {
      100: '#FDBDBD',
      200: '#DB3E3E',
      300: '#660909'
    }
  },
  breakpoints: {
    sm: '576px',
    //756px
    md: '768px',
    //768px
    lg: '992px',
    //960px
    xl: '1200px',
    //1200px
    xxl: '1400px',
    //1400
    '2xl': '1440px' //1440
  },

  fonts: {
    heading: 'Neurial Grotesk, sans-serif',
    body: 'Neurial Grotesk, sans-serif'
  },
  textStyles: {
    // h1: {
    //   // you can also use responsive styles
    //   // fontSize: ['48px', '72px'],
    //   fontSize: '64px',
    //   lineHeight: '72px',
    //   fontWeight: 'bold',
    // },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.5rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem'
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '3rem'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "../../node_modules/rsuite/dist/rsuite-no-reset.min.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../node_modules/react-dom/client.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__("webpack/sharing/consume/default/react-dom/react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ })

}])
//# sourceMappingURL=src_bootstrap_tsx-src_layouts_navbar_module_scss-src_styles_scss.js.map