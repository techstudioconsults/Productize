(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["libs_dashboard-lib_ui_src_index_ts"],{

/***/ "../../libs/dashboard-lib/ui/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardBanner: () => (/* reexport safe */ _lib_DashboardBanner__WEBPACK_IMPORTED_MODULE_1__.DashboardBanner),
/* harmony export */   DashboardEmptyState: () => (/* reexport safe */ _lib_empty_states_DashboardEmptyState__WEBPACK_IMPORTED_MODULE_8__.DashboardEmptyState),
/* harmony export */   DashboardNavbar: () => (/* reexport safe */ _lib_DashboardNavbar__WEBPACK_IMPORTED_MODULE_0__.DashboardNavbar),
/* harmony export */   DashboardRadioBtnComp: () => (/* reexport safe */ _lib_DashboardRadioBtnComp__WEBPACK_IMPORTED_MODULE_4__.DashboardRadioBtnComp),
/* harmony export */   DashboardTable: () => (/* reexport safe */ _lib_tables_DashboardTable__WEBPACK_IMPORTED_MODULE_10__.DashboardTable),
/* harmony export */   DataWidgetCard: () => (/* reexport safe */ _lib_DataWidgetCard__WEBPACK_IMPORTED_MODULE_9__.DataWidgetCard),
/* harmony export */   DropdownAction: () => (/* reexport safe */ _lib_DropdownAction__WEBPACK_IMPORTED_MODULE_12__.DropdownAction),
/* harmony export */   DropdownActionDelete: () => (/* reexport safe */ _lib_DropdownAction__WEBPACK_IMPORTED_MODULE_12__.DropdownActionDelete),
/* harmony export */   DropdownActionDraft: () => (/* reexport safe */ _lib_DropdownAction__WEBPACK_IMPORTED_MODULE_12__.DropdownActionDraft),
/* harmony export */   DropdownActionLive: () => (/* reexport safe */ _lib_DropdownAction__WEBPACK_IMPORTED_MODULE_12__.DropdownActionLive),
/* harmony export */   EmptyState: () => (/* reexport safe */ _lib_empty_states_EmptyState__WEBPACK_IMPORTED_MODULE_6__.EmptyState),
/* harmony export */   ProductCards: () => (/* reexport safe */ _lib_ProductCards__WEBPACK_IMPORTED_MODULE_5__.ProductCards),
/* harmony export */   ProductTable: () => (/* reexport safe */ _lib_tables_ProductTable__WEBPACK_IMPORTED_MODULE_11__.ProductTable),
/* harmony export */   ProfileForm: () => (/* reexport safe */ _lib_dashboard_profile_ProfileForm__WEBPACK_IMPORTED_MODULE_7__.ProfileForm),
/* harmony export */   ProgressBar: () => (/* reexport safe */ _lib_ProgressBar__WEBPACK_IMPORTED_MODULE_2__.ProgressBar),
/* harmony export */   TableControls: () => (/* reexport safe */ _lib_TableControls__WEBPACK_IMPORTED_MODULE_13__.TableControls),
/* harmony export */   useLinks: () => (/* reexport safe */ _lib_links__WEBPACK_IMPORTED_MODULE_3__.useLinks)
/* harmony export */ });
/* harmony import */ var _lib_DashboardNavbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/DashboardNavbar.tsx");
/* harmony import */ var _lib_DashboardBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/DashboardBanner.tsx");
/* harmony import */ var _lib_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/ProgressBar.tsx");
/* harmony import */ var _lib_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/links.ts");
/* harmony import */ var _lib_DashboardRadioBtnComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/DashboardRadioBtnComp.tsx");
/* harmony import */ var _lib_ProductCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/ProductCards.tsx");
/* harmony import */ var _lib_empty_states_EmptyState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/empty-states/EmptyState.tsx");
/* harmony import */ var _lib_dashboard_profile_ProfileForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/dashboard-profile/ProfileForm.tsx");
/* harmony import */ var _lib_empty_states_DashboardEmptyState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/empty-states/DashboardEmptyState.tsx");
/* harmony import */ var _lib_DataWidgetCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/DataWidgetCard.tsx");
/* harmony import */ var _lib_tables_DashboardTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/tables/DashboardTable.tsx");
/* harmony import */ var _lib_tables_ProductTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/tables/ProductTable.tsx");
/* harmony import */ var _lib_DropdownAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/DropdownAction.tsx");
/* harmony import */ var _lib_TableControls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/TableControls.tsx");















/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/DashboardBanner.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardBanner: () => (/* binding */ DashboardBanner)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\DashboardBanner.tsx";


const DashboardBanner = ({
  bgImg,
  img,
  title,
  desc,
  padding,
  py,
  px,
  height,
  alignContent
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    flexDir: {
      base: `column`,
      md: `row`
    },
    alignItems: {
      base: `center`,
      md: alignContent || `flex-start`
    },
    bgColor: `purple.200`,
    justifyContent: `space-between`,
    gap: 4,
    bgImg: bgImg,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `right center`,
    backgroundSize: `cover`,
    borderRadius: `9px`,
    py: py,
    px: px,
    color: `purple.100`,
    h: height,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      padding: padding,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: `h4`,
        textAlign: 'start',
        lineHeight: 10,
        maxW: `35rem`,
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        fontSize: `sm`,
        textAlign: 'start',
        maxW: `35rem`,
        mt: 4,
        children: desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      w: `263px`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
        src: img,
        alt: "img"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/DashboardNavbar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardNavbar: () => (/* binding */ DashboardNavbar)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/ui/@productize/shared/ui");
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\DashboardNavbar.tsx";





const DashboardNavbar = () => {
  const [header, setHeader] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const switchHeader = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setHeader(state);
  }, [state]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    switchHeader();
  }, [switchHeader]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
    borderBottom: `1px solid grey.300`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      as: "nav",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          as: `h5`,
          color: `grey.500`,
          fontWeight: 400,
          children: header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        justify: {
          lg: 'center'
        },
        align: {
          lg: 'center'
        },
        gap: "1.5rem",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          display: {
            base: `none`,
            md: `block`
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SearchComp, {
            width: `17rem`,
            color: `grey.200`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          display: {
            base: `none`,
            xl: `initial`
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
            to: `cart`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696087936/productize/Productize-iconset/Property_2_Notifications_1_w4v7g4.svg`,
              name: 'notification'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__.AvatarComp, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__.Sidenav, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/DashboardRadioBtnComp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRadioBtnComp: () => (/* binding */ DashboardRadioBtnComp)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/ui/@productize/shared/ui");
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\DashboardRadioBtnComp.tsx";





const DashboardRadioBtnComp = ({
  title,
  subTitle,
  image,
  btn,
  isChecked,
  btnText
}) => {
  const checkboxRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var _checkboxRef$current;
    if ((_checkboxRef$current = checkboxRef.current) != null && _checkboxRef$current.checked) {
      dispatch({
        type: `User/setTaskCount`,
        payload: true
      });
    }
  }, [dispatch]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    p: 4,
    gap: 4,
    alignItems: `flex-start`,
    border: `1px solid #F3F3F3`,
    borderRadius: `8px`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
      p: 0,
      boxSize: 6,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
        ref: checkboxRef,
        isChecked: isChecked,
        colorScheme: "purple",
        checked: true,
        size: "lg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      w: `100%`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "small-text",
        fontWeight: 600,
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        flexDir: {
          base: `column`,
          md: `row`
        },
        gap: 4,
        hidden: isChecked,
        justifyContent: `space-between`,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            mb: 5,
            className: "small-text",
            fontWeight: 100,
            children: subTitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SharedButton, {
            btnExtras: {
              isLoading: btn.isLoading,
              loadingText: btn.loadingText,
              onClick: btn.onClick
            },
            text: btnText,
            width: '',
            height: '36px',
            bgColor: 'purple.200',
            textColor: 'white',
            borderRadius: '4px',
            fontSize: {
              base: `sm`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          w: `178px`,
          h: `82px`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
            w: `100%`,
            h: `100%`,
            src: image,
            alt: "img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/DataWidgetCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataWidgetCard: () => (/* binding */ DataWidgetCard)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\DataWidgetCard.tsx";



const DataWidgetCard = ({
  title,
  value,
  bgImg,
  showIcon,
  bmt,
  tmy
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Card, {
    borderRadius: `8px`
    // border={`1px solid #F3F3F3`}
    ,
    variant: `outline`,
    bgImage: bgImg,
    bgPosition: `right`,
    bgSize: `cover`,
    bgRepeat: `no-repeat`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        display: showIcon ? `block` : `none`,
        fontSize: `32px`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          icon: `mdi:naira`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        mt: bmt,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          my: tmy,
          as: `h5`,
          children: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/DropdownAction.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownAction: () => (/* binding */ DropdownAction),
/* harmony export */   DropdownActionDelete: () => (/* binding */ DropdownActionDelete),
/* harmony export */   DropdownActionDraft: () => (/* binding */ DropdownActionDraft),
/* harmony export */   DropdownActionLive: () => (/* binding */ DropdownActionLive)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\DropdownAction.tsx";



const DropdownAction = ({
  icon
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Menu, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuButton, {
      onClick: e => e.stopPropagation(),
      border: `none`,
      as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.IconButton,
      "aria-label": "Options",
      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }, undefined),
      variant: "outlined"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuList, {
      zIndex: 999,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "Export data as"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "CSV"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "PDF"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};
const DropdownActionDraft = ({
  icon
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Menu, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuButton, {
      onClick: e => e.stopPropagation(),
      border: `none`,
      as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.IconButton,
      "aria-label": "Options",
      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }, undefined),
      variant: "outlined"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuList, {
      zIndex: 999,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "Preview"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};
const DropdownActionLive = ({
  icon
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Menu, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuButton, {
      onClick: e => e.stopPropagation(),
      border: `none`,
      as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.IconButton,
      "aria-label": "Options",
      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }, undefined),
      variant: "outlined"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuList, {
      zIndex: 999,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "Unpublish to drafts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "Preview"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, undefined);
};
const DropdownActionDelete = ({
  icon
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Menu, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuButton, {
      onClick: e => e.stopPropagation(),
      border: `none`,
      as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.IconButton,
      "aria-label": "Options",
      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }, undefined),
      variant: "outlined"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuList, {
      zIndex: 999,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "Recover to draft"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "Delete permanently"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        justifyContent: `flex-start`,
        children: "Preview"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/ProductCards.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCards: () => (/* binding */ ProductCards)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\ProductCards.tsx";


const ProductCards = ({
  img,
  bgColor,
  bgImg,
  padding,
  bgPos
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Card, {
    variant: `unstyled`,
    bgRepeat: `no-repeat`,
    bgImage: bgImg,
    bgPos: bgPos,
    bgColor: bgColor,
    width: `100%`,
    h: `13.8rem`,
    p: padding,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
      objectFit: `contain`,
      w: `100%`,
      h: `100%`,
      src: img,
      alt: `img`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/ProgressBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBar: () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\ProgressBar.tsx";





const ProgressBar = () => {
  const taskCompletedCount = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__.selectTaskCompletedCount);
  // const user = useSelector(selectCurrentUser);
  // const count = taskCompletedCount || user?.email_verified ? 1 : 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
      color: `grey.300`,
      textAlign: `end`,
      fontSize: `xs`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        color: `grey.500`,
        as: `span`,
        fontSize: `xs`,
        children: taskCompletedCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), ' ', "of 5 tasks completed"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Progress, {
      max: 5,
      width: `13rem`,
      value: taskCompletedCount,
      size: "xs",
      colorScheme: `green`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/TableControls.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableControls: () => (/* binding */ TableControls)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/ui/@productize/shared/ui");
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rsuite_esm_DateRangePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/rsuite/esm/DateRangePicker/index.js");
/* harmony import */ var rsuite_esm_SelectPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/rsuite/esm/SelectPicker/index.js");
/* harmony import */ var _DropdownAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/DropdownAction.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\TableControls.tsx";






const TableControls = ({
  showRefreshBtn
}) => {
  const data = [`All Products`, `UX Design Fundamentals`, `Practical UI - User interface design book`, `The Future of Design Systems Conference 2023`, `Graphics Guide to Residential Design`].map(item => ({
    label: item,
    value: item
  }));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    alignItems: {
      md: `center`
    },
    justifyContent: `space-between`,
    gap: 4,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
      w: {
        base: `100%`,
        md: `fit-content`
      },
      flexDir: {
        base: `column`,
        md: `row`
      },
      gap: 4,
      alignItems: {
        base: `flex-start`,
        md: `center`
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        w: `100%`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(rsuite_esm_DateRangePicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
          placeholder: `15 Feb, 2023 - 22 Feb, 2023`,
          size: "lg",
          character: "-",
          style: {
            width: `100%`
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        w: `100%`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(rsuite_esm_SelectPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
          style: {
            width: `100%`
          },
          placeholder: `All Products`,
          size: "lg",
          data: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        display: {
          base: `none`,
          md: `flex`
        },
        gap: 4,
        alignItems: `center`,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          hidden: showRefreshBtn ? false : true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SharedButton, {
            text: 'Refresh',
            width: 'fit-content',
            height: '40px',
            bgColor: 'transparent',
            textColor: 'purple.200',
            borderRadius: '4px',
            fontSize: {
              base: `sm`,
              md: `md`
            },
            btnExtras: {
              border: `1px solid #6D5DD3`,
              leftIcon: `basil:refresh-outline`
              // onClick: () => setEmptyState((prevState) => !prevState),
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SharedButton, {
            text: 'Export',
            width: 'fit-content',
            height: '40px',
            bgColor: 'transparent',
            textColor: 'purple.200',
            borderRadius: '4px',
            fontSize: {
              base: `sm`,
              md: `md`
            },
            btnExtras: {
              border: `1px solid #6D5DD3`,
              leftIcon: `solar:export-line-duotone`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        display: {
          md: `none`
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_DropdownAction__WEBPACK_IMPORTED_MODULE_2__.DropdownAction, {
          icon: `zondicons:dots-horizontal-triple`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/dashboard-profile/ProfileForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileForm: () => (/* binding */ ProfileForm)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productize_shared_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/hooks/@productize/shared/hooks");
/* harmony import */ var _productize_shared_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/ui/@productize/shared/ui");
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("webpack/sharing/consume/default/react-hook-form/react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\dashboard-profile\\ProfileForm.tsx";









const ProfileForm = () => {
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUser);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const {
    query,
    isLoading
  } = (0,_productize_shared_hooks__WEBPACK_IMPORTED_MODULE_2__.useAxiosInstance)();
  // const [updateProfile, profileStatus] = useUpdateProfileMutation();
  const fileInput = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const {
    register,
    handleSubmit,
    control
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
    criteriaMode: 'all'
  });
  const onSubmit = async data => {
    // const profileData = {
    //   ...data,
    //   logo: data.logo,
    // };
    // try {
    //   await updateProfile(data).unwrap();
    // } catch (error) {
    //   console.log(error);
    // }
    const res = await query(`post`, `/users/me`, data);
    if ((res == null ? void 0 : res.status) === 200) {
      dispatch({
        type: 'User/setUser',
        payload: {
          user: res.data.data
        }
      });
    }
  };
  const previewImg = files => {
    if (files && imgRef.current) {
      imgRef.current.src = URL.createObjectURL(files == null ? void 0 : files[0]) || `https://res.cloudinary.com/dkszgtapy/image/upload/v1696084137/productize/Star_6_alusuk.png`;
    }
  };

  // function previewImg(e: any) {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const objectURL = URL.createObjectURL(file);
  //     URL.revokeObjectURL(objectURL);
  //   }
  // }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
    as: `form`,
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Grid, {
      templateColumns: "repeat(12, 1fr)",
      gap: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: {
          base: 12,
          md: 5
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          textAlign: {
            base: `center`,
            md: `initial`
          },
          color: `purple.300`,
          as: `h5`,
          children: "Profile Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: {
          base: 12,
          md: 7
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          mb: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
              color: `purple.300`,
              fontWeight: 600,
              children: "Full name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input
            // required
            , Object.assign({
              defaultValue: user == null ? void 0 : user.name,
              bgColor: `grey.200`,
              _focus: {
                bgColor: `grey.300`,
                color: `grey.800`
              },
              _placeholder: {
                color: `grey.400`
              },
              placeholder: "Enter Your Name",
              variant: `filled`,
              size: `lg`
            }, register('full_name')), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          mb: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
              color: `purple.300`,
              fontWeight: 600,
              children: "Username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input
            // required
            , Object.assign({
              defaultValue: user == null ? void 0 : user.username,
              bgColor: `grey.200`,
              _focus: {
                bgColor: `grey.300`,
                color: `grey.800`
              },
              _placeholder: {
                color: `grey.400`
              },
              placeholder: "Enter Username",
              variant: `filled`,
              size: `lg`
            }, register('username')), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          mb: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
              color: `purple.300`,
              fontWeight: 600,
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
              mb: 1,
              justifyContent: `space-between`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                color: `grey.400`,
                className: "tiny-text",
                children: "This email is linked to your account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                color: `purple.200`,
                className: "tiny-text",
                children: "Change Account Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, {
              readOnly: true,
              defaultValue: user == null ? void 0 : user.email,
              type: "email",
              bgColor: `grey.200`,
              _focus: {
                bgColor: `grey.300`,
                color: `grey.800`
              },
              _placeholder: {
                color: `grey.400`
              },
              placeholder: "example@gmail.com",
              variant: `filled`,
              size: `lg`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          mb: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
              color: `purple.300`,
              fontWeight: 600,
              children: "Contact number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputGroup, {
              size: `lg`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputLeftElement, {
                color: `green`,
                pointerEvents: "none",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  icon: `material-symbols:check`
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input
              // required
              , Object.assign({
                defaultValue: user == null ? void 0 : user.phone_number,
                bgColor: `grey.200`,
                _focus: {
                  bgColor: `grey.300`,
                  color: `grey.800`
                },
                _placeholder: {
                  color: `grey.400`
                },
                variant: `filled`,
                type: "tel",
                placeholder: "Enter number"
              }, register('phone_number')), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          mb: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
              color: `purple.300`,
              fontWeight: 600,
              children: "Bio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Textarea
            // required
            , Object.assign({
              defaultValue: user == null ? void 0 : user.bio,
              bgColor: `grey.200`,
              _focus: {
                bgColor: `grey.300`,
                color: `grey.800`
              },
              _placeholder: {
                color: `grey.400`
              },
              variant: `filled`,
              placeholder: "Follow me to unlock your potential with my products."
            }, register('bio')), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Divider, {
          mb: 8
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Grid, {
      templateColumns: "repeat(12, 1fr)",
      gap: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: {
          base: 12,
          md: 5
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          textAlign: {
            base: `center`,
            md: `initial`
          },
          color: `purple.300`,
          as: `h5`,
          children: "Upload Logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: {
          base: 12,
          md: 7
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          mb: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
              color: `purple.300`,
              fontWeight: 600,
              children: "Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
                overflow: `hidden`,
                borderRadius: `4px`,
                bgColor: `yellow.100`,
                boxSize: `120px`,
                onClick: () => {
                  var _fileInput$current;
                  return (_fileInput$current = fileInput.current) == null ? void 0 : _fileInput$current.click();
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
                  ref: imgRef,
                  objectFit: `contain`,
                  src: (user == null ? void 0 : user.logo) || `https://res.cloudinary.com/dkszgtapy/image/upload/v1696084137/productize/Star_6_alusuk.png`,
                  alt: `img`
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.Controller, {
                  name: "logo",
                  control: control,
                  defaultValue: null,
                  render: ({
                    field
                  }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input, {
                    hidden: true,
                    ref: fileInput,
                    onChange: e => {
                      var _e$target$files;
                      field.onChange((_e$target$files = e.target.files) == null ? void 0 : _e$target$files[0]);
                      previewImg(e.target.files);
                    },
                    type: "file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
              className: "small-text",
              color: `grey.400`,
              children: "Your logo will be visible next to your name in your Productize profile and product pages. Your image should be at least 200x200px and must be in JPG or PNG format."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Divider, {
          mb: 8
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Grid, {
      templateColumns: "repeat(12, 1fr)",
      gap: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: {
          base: 12,
          md: 5
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          textAlign: {
            base: `center`,
            md: `initial`
          },
          color: `purple.300`,
          as: `h5`,
          children: "Social Links"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.GridItem, {
        colSpan: {
          base: 12,
          md: 5
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          mb: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
              color: `purple.300`,
              fontWeight: 600,
              children: "X"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputGroup, {
              size: "lg",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input
              // required
              , Object.assign({
                defaultValue: user == null ? void 0 : user.twitter_account,
                pr: "4.5rem",
                bgColor: `grey.200`,
                _focus: {
                  bgColor: `grey.200`,
                  color: `grey.800`
                },
                _placeholder: {
                  color: `grey.400`
                },
                placeholder: "Enter username",
                variant: `filled`
              }, register('twitter_account')), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputRightElement, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
                  cursor: `pointer`,
                  bgColor: `grey.300`,
                  borderRadius: `100%`,
                  boxSize: `1rem`,
                  color: `grey.100`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: `system-uicons:close`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          mb: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
              color: `purple.300`,
              fontWeight: 600,
              children: "Facebook"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputGroup, {
              size: "lg",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input
              // required
              , Object.assign({
                defaultValue: user == null ? void 0 : user.facebook_account,
                pr: "4.5rem",
                bgColor: `grey.200`,
                _focus: {
                  bgColor: `grey.200`,
                  color: `grey.800`
                },
                _placeholder: {
                  color: `grey.400`
                },
                placeholder: "Enter username",
                variant: `filled`
              }, register('facebook_account')), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputRightElement, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
                  cursor: `pointer`,
                  bgColor: `grey.300`,
                  borderRadius: `100%`,
                  boxSize: `1rem`,
                  color: `grey.100`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: `system-uicons:close`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 320,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          mb: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormControl, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.FormLabel, {
              color: `purple.300`,
              fontWeight: 600,
              children: "Youtube"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputGroup, {
              size: "lg",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Input
              // required
              , Object.assign({
                defaultValue: user == null ? void 0 : user.youtube_account,
                pr: "4.5rem",
                bgColor: `grey.200`,
                _focus: {
                  bgColor: `grey.200`,
                  color: `grey.800`
                },
                _placeholder: {
                  color: `grey.400`
                },
                placeholder: "Enter username",
                variant: `filled`
              }, register('youtube_account')), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.InputRightElement, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Center, {
                  cursor: `pointer`,
                  bgColor: `grey.300`,
                  borderRadius: `100%`,
                  boxSize: `1rem`,
                  color: `grey.100`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: `system-uicons:close`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 358,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 351,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          gap: 4,
          mt: 12,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_4__.SharedButton, {
            btnExtras: {
              border: '1px solid #6D5DD3'
            },
            text: 'Cancel',
            width: 'fit-content',
            height: '40px',
            bgColor: 'transparent',
            textColor: 'purple.200',
            borderRadius: '4px',
            fontSize: {
              base: `sm`,
              md: `md`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_4__.SharedButton, {
            btnExtras: {
              // isLoading: profileStatus.isLoading,
              isLoading: isLoading,
              loadingText: `Saving Profile...`,
              type: `submit`
            },
            text: 'Save Changes',
            width: 'fit-content',
            height: '40px',
            bgColor: 'purple.200',
            textColor: 'grey.100',
            borderRadius: '4px',
            fontSize: {
              base: `sm`,
              md: `md`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/empty-states/DashboardEmptyState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardEmptyState: () => (/* binding */ DashboardEmptyState)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/ui/@productize/shared/ui");
/* harmony import */ var _productize_shared_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\empty-states\\DashboardEmptyState.tsx";



const DashboardEmptyState = ({
  maxW,
  content,
  showImage,
  textAlign
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
    p: {
      base: 4,
      md: 8
    },
    borderRadius: `10px`,
    bgColor: `grey.200`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack, {
      p: 0,
      alignItems: `center`,
      justifyContent: `center`,
      maxW: maxW,
      m: `0 auto`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        display: showImage ? {
          base: `none`,
          md: `initial`
        } : `none`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
          src: content.img,
          alt: "img"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        textAlign: textAlign,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          fontWeight: 400,
          color: `purple.200`,
          children: content.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          as: `h6`,
          my: 4,
          color: `purple.300`,
          children: content.desc
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_productize_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SharedButton, {
          text: 'Create your first product',
          width: 'fit-content',
          height: '48px',
          bgColor: 'purple.200',
          textColor: 'purple.100',
          borderRadius: '4px',
          fontSize: {
            base: `sm`,
            md: `md`
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/empty-states/EmptyState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyState: () => (/* binding */ EmptyState)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\empty-states\\EmptyState.tsx";


const EmptyState = ({
  content,
  textAlign,
  maxW,
  showImage,
  children,
  hasBorder
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
    textAlign: textAlign,
    p: {
      base: 4,
      md: 8
    },
    borderRadius: `10px`,
    border: hasBorder ? `1px solid #F3F2FB` : `none`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
      p: 0,
      alignItems: `center`,
      justifyContent: showImage ? `space-between` : `center`,
      maxW: maxW,
      m: `auto`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          as: `h5`,
          fontWeight: 400,
          color: `purple.200`,
          children: content.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Container, {
          p: 0,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            my: 4,
            color: `grey.400`,
            children: content.desc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        display: showImage ? {
          base: `none`,
          md: `initial`
        } : `none`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
          src: content.img,
          alt: "img"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/links.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLinks: () => (/* binding */ useLinks)
/* harmony export */ });
/* harmony import */ var _productize_shared_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/hooks/@productize/shared/hooks");
/* harmony import */ var _productize_shared_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@productize/shared/redux/@productize/shared/redux");
/* harmony import */ var _productize_shared_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




const useLinks = () => {
  const isPremium = (0,_productize_shared_hooks__WEBPACK_IMPORTED_MODULE_0__.useSetPaymentPlan)();
  const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_productize_shared_redux__WEBPACK_IMPORTED_MODULE_1__.selectCurrentUser);
  const [links1, setLinks1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [links2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{
    id: 1,
    name: `Downloads`,
    path: `downloads`,
    type: `free`,
    icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696087433/productize/Productize-iconset/Property_2_Downloads-folder_zb8tdq.svg`
  }, {
    id: 2,
    name: `Explore`,
    path: `/explore`,
    type: `free`,
    icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696087384/productize/Productize-iconset/Property_2_Compass_jfe95t.svg`
  }]);
  const [links3] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{
    id: 1,
    name: `Help`,
    path: `help`,
    type: `free`,
    icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696086859/productize/Productize-iconset/Property_2_Chat_6_qlrj4q.svg`
  }, {
    id: 2,
    name: `Settings`,
    path: `settings`,
    type: `free`,
    icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088273/productize/Productize-iconset/Property_2_Settings_4_tm54pe.svg`
  }, {
    id: 3,
    name: `Profile`,
    path: `profile/${user == null ? void 0 : user.id}`,
    type: `free`,
    icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088480/productize/Productize-iconset/Property_2_User_iiqfxz.svg`
  }]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setLinks1([{
      id: 2,
      name: `Products`,
      path: `products`,
      type: isPremium,
      icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088139/productize/Productize-iconset/Property_2_Price_2_ugwdhq.svg`
    }, {
      id: 3,
      name: `Orders`,
      path: `orders`,
      type: isPremium,
      icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696086838/productize/Productize-iconset/Property_2_Cart_1_ubt3so.svg`
    }, {
      id: 4,
      name: `Analytics`,
      path: `analytics`,
      type: isPremium,
      icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696086853/productize/Productize-iconset/Property_2_Chart-pie_bygfly.svg`
    }, {
      id: 5,
      name: `Customers`,
      path: `customers`,
      type: isPremium,
      icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088479/productize/Productize-iconset/Property_2_User-folder_n4spfl.svg`
    }, {
      id: 6,
      name: `Payouts`,
      path: `payouts`,
      type: isPremium,
      icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088492/productize/Productize-iconset/Property_2_Wallet_3_teopvy.svg`
    }]);
  }, [isPremium]);
  return {
    links1,
    links2,
    links3
  };
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/tables/DashboardTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardTable: () => (/* binding */ DashboardTable)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\tables\\DashboardTable.tsx";


const DashboardTable = () => {
  const tableHeader = [`Product`, `Price`, `Customer's Email`, `Date`].map(title => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Th, {
      py: 3,
      children: title
    }, title, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined);
  });
  const tableContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(content => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tr, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Td, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          gap: 2,
          alignItems: `center`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Avatar, {
            zIndex: -1,
            bgColor: `yellow.100`,
            src: "https://res.cloudinary.com/dkszgtapy/image/upload/v1692269980/learning_atvahc.gif",
            borderRadius: `4px`,
            boxSize: `44px`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            children: "UX Design Fundamentals"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Td, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          children: "NGN 5.500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Td, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          children: "example@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Td, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          children: "15 May 2023 8:00 am"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined)]
    }, content, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.TableContainer, {
    maxH: `25rem`,
    overflowY: `auto`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Table, {
      size: `sm`,
      variant: "simple",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Thead, {
        pos: `sticky`,
        top: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tr, {
          bgColor: `purple.100`,
          color: `grey.300`,
          children: tableHeader
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tbody, {
        color: `purple.300`,
        children: tableContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../libs/dashboard-lib/ui/src/lib/tables/ProductTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductTable: () => (/* binding */ ProductTable)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@chakra-ui/react/@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@iconify/react/@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DropdownAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../libs/dashboard-lib/ui/src/lib/DropdownAction.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\razer\\Documents\\Studio\\Organisations\\TSAcademy\\productize\\libs\\dashboard-lib\\ui\\src\\lib\\tables\\ProductTable.tsx";





const ProductTable = ({
  draft,
  live,
  deleted
}) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const showDropDown = draft ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_DropdownAction__WEBPACK_IMPORTED_MODULE_2__.DropdownActionDraft, {
    icon: `tabler:dots`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined) : live ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_DropdownAction__WEBPACK_IMPORTED_MODULE_2__.DropdownActionLive, {
    icon: `tabler:dots`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_DropdownAction__WEBPACK_IMPORTED_MODULE_2__.DropdownActionDelete, {
    icon: `tabler:dots`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
  const tableHeader = [`Product`, `Price`, `Sales`, `Type`, `Status`, ''].map(title => {
    if (deleted && title === `Status`) {
      title = `.`;
    }
    if (title === `Product`) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Th, {
        alignItems: `center`,
        py: 3,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          gap: 4,
          alignItems: `center`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
            size: `lg`,
            colorScheme: "purple",
            defaultChecked: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, undefined), title]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, undefined)
      }, title, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Th, {
        py: 3,
        children: title
      }, title, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined);
    }
  });
  const tableContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(content => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tr, {
      _hover: {
        bgColor: `purple.100`,
        cursor: `pointer`
      },
      onClick: () => navigate(`/dashboard/products/282387989839753`),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Td, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          gap: 2,
          alignItems: `center`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
            onClick: e => e.stopPropagation(),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
              size: `lg`,
              colorScheme: "purple"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Avatar, {
            bgColor: `yellow.100`,
            src: "https://res.cloudinary.com/dkszgtapy/image/upload/v1692269980/learning_atvahc.gif",
            borderRadius: `8px`,
            w: `100px`,
            h: `64px`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
              children: "UX Design Fundamentals"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
              alignItems: `center`,
              color: `grey.400`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                className: "tiny-text",
                children: "PDF - 5.5MB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                className: "large-text",
                icon: `mdi:dot`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                className: "tiny-text",
                children: "18 Mar, 2023"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                className: "large-text",
                icon: `mdi:dot`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                className: "tiny-text",
                children: "11:09AM"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Td, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          children: "N 5.500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Td, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          children: "5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Td, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          children: "Digital Products"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Td, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          hidden: deleted,
          children: draft ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tag, {
            size: `lg`,
            colorScheme: "yellow",
            children: "Draft"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tag, {
            size: `lg`,
            colorScheme: "green",
            children: "Live"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Td, {
        children: showDropDown
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined)]
    }, content, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.TableContainer, {
    maxH: `40rem`,
    overflowY: `auto`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Table, {
      size: `sm`,
      variant: "simple",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Thead, {
        zIndex: 1,
        pos: `sticky`,
        top: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tr, {
          bgColor: `purple.100`,
          color: `grey.300`,
          children: tableHeader
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tbody, {
        color: `purple.300`,
        children: tableContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 5
  }, undefined);
};

/***/ })

}])
//# sourceMappingURL=libs_dashboard-lib_ui_src_index_ts.js.map