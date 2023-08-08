exports.id = 2250;
exports.ids = [2250];
exports.modules = {

/***/ 9359:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "imoHeader_container__fF6Y_",
	"banner": "imoHeader_banner__QWJlY",
	"blur": "imoHeader_blur__VeLng",
	"signature": "imoHeader_signature__TTge6",
	"icon": "imoHeader_icon__FuxDl"
};


/***/ }),

/***/ 7043:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "smallerInfo_container__wUeQi",
	"imo": "smallerInfo_imo__x_MyX"
};


/***/ }),

/***/ 4416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _imoHeader_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9359);
/* harmony import */ var _imoHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imoHeader_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);




const ImoHeader = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: `container ${(_imoHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default().container)}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_imoHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default().banner),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_imoHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default().blur)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_imoHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default().signature),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_imoHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/svg/instytut_medycyny_orientalnej_logo.svg",
                                    alt: "Instytut Medycyny Orientalnej"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: t("imoMain:pageName")
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImoHeader);


/***/ }),

/***/ 2185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smallerInfo_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7043);
/* harmony import */ var _smallerInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smallerInfo_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





const SmallerInfo = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `container ${(_smallerInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().container)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: router.pathname.includes(`instytut_medycyny_orientalnej`) ? (_smallerInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().imo) : ``,
            children: router.pathname.includes(`instytut_medycyny_orientalnej`) ? t("imoMain:smallerInfo") : router.pathname.includes(`szlachetne_zdrowie`) ? t("szlaZdMain:smallerInfo") : ``
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmallerInfo);


/***/ })

};
;