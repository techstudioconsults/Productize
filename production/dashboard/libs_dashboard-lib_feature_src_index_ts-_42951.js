(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["libs_dashboard-lib_feature_src_index_ts-_42951"],{

/***/ "../../libs/dashboard-lib/feature/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetNewProductForm: () => (/* reexport safe */ _lib_SetNewProductForm__WEBPACK_IMPORTED_MODULE_1__.SetNewProductForm),
/* harmony export */   checkUserProfileValidity: () => (/* reexport safe */ _lib_checkUserProfileValidity__WEBPACK_IMPORTED_MODULE_0__.checkUserProfileValidity)
/* harmony export */ });
/* harmony import */ var _lib_checkUserProfileValidity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../libs/dashboard-lib/feature/src/lib/checkUserProfileValidity.ts");
/* harmony import */ var _lib_SetNewProductForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/dashboard-lib/feature/src/lib/SetNewProductForm.tsx");



/***/ }),

/***/ "../../libs/dashboard-lib/feature/src/lib/SetNewProductForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetNewProductForm: () => (/* binding */ SetNewProductForm)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\feature\\src\\lib\\SetNewProductForm.tsx";



const SetNewProductForm = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.SimpleGrid, {
    gap: 4,
    columns: 2,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
        children: "Email address"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, {
        type: "email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
        children: "Email address"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, {
        type: "email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/feature/src/lib/checkUserProfileValidity.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkUserProfileValidity: () => (/* binding */ checkUserProfileValidity)
/* harmony export */ });
function checkUserProfileValidity(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (key !== 'logo' && obj[key] === null) {
        return false;
      }
    }
  }
  return true;
}

/***/ })

}])
//# sourceMappingURL=libs_dashboard-lib_feature_src_index_ts-_42951.js.map