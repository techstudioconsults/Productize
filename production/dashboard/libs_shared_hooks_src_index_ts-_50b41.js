(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["libs_shared_hooks_src_index_ts-_50b41"],{

/***/ "../../libs/shared/hooks/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAxiosInstance: () => (/* reexport safe */ _lib_useAxiosInstance__WEBPACK_IMPORTED_MODULE_3__.useAxiosInstance),
/* harmony export */   usePlanUpgrade: () => (/* reexport safe */ _lib_usePlanUpgrade__WEBPACK_IMPORTED_MODULE_1__.usePlanUpgrade),
/* harmony export */   useSetPaymentPlan: () => (/* reexport safe */ _lib_useSetPaymentPlan__WEBPACK_IMPORTED_MODULE_2__.useSetPaymentPlan),
/* harmony export */   useTokenExists: () => (/* reexport safe */ _lib_useToken__WEBPACK_IMPORTED_MODULE_0__.useTokenExists)
/* harmony export */ });
/* harmony import */ var _lib_useToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../libs/shared/hooks/src/lib/useToken.ts");
/* harmony import */ var _lib_usePlanUpgrade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/shared/hooks/src/lib/usePlanUpgrade.ts");
/* harmony import */ var _lib_useSetPaymentPlan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../libs/shared/hooks/src/lib/useSetPaymentPlan.ts");
/* harmony import */ var _lib_useAxiosInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../libs/shared/hooks/src/lib/useAxiosInstance.ts");





/***/ }),

/***/ "../../libs/shared/hooks/src/lib/useAxiosInstance.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAxiosInstance: () => (/* binding */ useAxiosInstance)
/* harmony export */ });
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/axios/axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




const BASE_URL = "https://productize-api.techstudio.academy/api";
const useAxiosInstance = () => {
  const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__.selectCurrentToken);
  const headersCredentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  };
  const query = async (method, endPoint, content) => {
    // console.log(content);
    setLoading(true);
    try {
      const res = await (axios__WEBPACK_IMPORTED_MODULE_3___default())[method](`${BASE_URL}${endPoint}`, content, headersCredentials);
      if (res.status === 200) {
        setLoading(false);
        return res;
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return {
    query,
    isLoading
  };
};

/***/ }),

/***/ "../../libs/shared/hooks/src/lib/usePlanUpgrade.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePlanUpgrade: () => (/* binding */ usePlanUpgrade)
/* harmony export */ });
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__);

const usePlanUpgrade = () => {
  // mutations
  const [upgradePlan, upgradeStatus] = (0,_productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__.useUpgradePlanMutation)();
  const upgrade = async () => {
    try {
      await upgradePlan(null).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  return {
    upgrade,
    upgradeStatus
  };
};

/***/ }),

/***/ "../../libs/shared/hooks/src/lib/useSetPaymentPlan.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSetPaymentPlan: () => (/* binding */ useSetPaymentPlan)
/* harmony export */ });
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



const useSetPaymentPlan = () => {
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__.selectCurrentUser);
  const [isPremium, setPremium] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if ((user == null ? void 0 : user.account_type) === `premium`) {
      setPremium(true);
    } else {
      setPremium(false);
    }
  }, [user == null ? void 0 : user.account_type]);
  return isPremium;
};

/***/ }),

/***/ "../../libs/shared/hooks/src/lib/useToken.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTokenExists: () => (/* binding */ useTokenExists)
/* harmony export */ });
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



function useTokenExists() {
  // Initialize state with false since we assume the token doesn't exist initially
  const [tokenExists, setTokenExists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_0__.selectCurrentToken);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Check if a token exists in localStorage when the component mounts
    // const token = token;

    // Update the state based on whether the token exists
    setTokenExists(!!token);

    // You can also add additional logic here, like checking the token's validity
    // or refreshing it if it's expired.

    // This effect will run once when the component mounts and whenever the token in localStorage changes.

    // Clean up the effect when the component unmounts
    return () => {
      // Add any cleanup logic here if needed
    };
  }, [token]); // Empty dependency array to run this effect only once

  return tokenExists;
}

/***/ })

}])
//# sourceMappingURL=libs_shared_hooks_src_index_ts-_50b41.js.map