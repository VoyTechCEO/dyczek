exports.id = 6432;
exports.ids = [6432];
exports.modules = {

/***/ 6931:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "commonError_container__sRvHi"
};


/***/ }),

/***/ 9958:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "commonLoading_container__3bbGc",
	"spinner": "commonLoading_spinner__PSa8O"
};


/***/ }),

/***/ 4132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commonError_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6931);
/* harmony import */ var _commonError_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commonError_module_css__WEBPACK_IMPORTED_MODULE_2__);



const CommonError = ({ content  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `container ${(_commonError_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Wystąpił błąd."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: content
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonError);


/***/ }),

/***/ 5045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commonLoading_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9958);
/* harmony import */ var _commonLoading_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commonLoading_module_css__WEBPACK_IMPORTED_MODULE_2__);



const CommonLoading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `container ${(_commonLoading_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    className: (_commonLoading_module_css__WEBPACK_IMPORTED_MODULE_2___default().spinner),
                    width: "75",
                    version: "1.1",
                    viewBox: "0 0 52.832 52.832",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                        transform: "translate(4.6405 -125.3)",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            transform: "scale(.26458)",
                            d: "m82.301 473.56c-55.14-2e-4-99.84 44.7-99.84 99.84-.000201 55.14 44.7 99.84 99.84 99.84 55.14.00019 99.84-44.7 99.84-99.84-.002-4.7006-.33505-9.3952-.99804-14.049l-7.8496 1.6816c.56464 4.0983.85175 8.2301.85937 12.367.00066 50.729-41.123 91.853-91.852 91.854-50.73.00066-91.854-41.124-91.854-91.854.0004242-50.729 41.125-91.852 91.854-91.852.96699.001 1.9339.0173 2.9004.0488l.25391-7.9823c-1.0511-.0349-2.1026-.0531-3.1543-.0547z",
                            color: "#000000"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Ładowanie..."
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonLoading);


/***/ })

};
;