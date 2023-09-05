exports.id = 7393;
exports.ids = [7393];
exports.modules = {

/***/ 7043:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "smallerInfo_container__wUeQi",
	"imo": "smallerInfo_imo__x_MyX"
};


/***/ }),

/***/ 8120:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "szlaZdHeader_container__cshRO",
	"signature": "szlaZdHeader_signature__mUTC7",
	"introduction": "szlaZdHeader_introduction__Kp9of"
};


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


/***/ }),

/***/ 4569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _szlaZdHeader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8120);
/* harmony import */ var _szlaZdHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_szlaZdHeader_module_css__WEBPACK_IMPORTED_MODULE_2__);



const SzlaZdHeader = ()=>{
    let imgList = [];
    for(let i = 1; i <= 6; i++){
        imgList = [
            ...imgList,
            `/img/szlachetneZdrowieHeadImg${i}.jpg`
        ];
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: `container ${(_szlaZdHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_szlaZdHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default().signature),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/svg/szlachetne_zdrowie_logo.svg",
                        alt: "szlachetne zdrowie logo"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_szlaZdHeader_module_css__WEBPACK_IMPORTED_MODULE_2___default().introduction),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "...to starzeć się nie będąc ciężarem dla innych."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            children: imgList.map((img, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: img,
                                        alt: "intro image"
                                    })
                                }, `${img}szlachetneZdrowie${index}`);
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SzlaZdHeader);


/***/ })

};
;