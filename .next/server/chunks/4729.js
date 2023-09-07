"use strict";
exports.id = 4729;
exports.ids = [4729];
exports.modules = {

/***/ 4729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IP": () => (/* binding */ advancedNoticesListState),
/* harmony export */   "Jw": () => (/* binding */ siteThemeState),
/* harmony export */   "R6": () => (/* binding */ isUserLoggedInState),
/* harmony export */   "cG": () => (/* binding */ isLangBtnClosedState),
/* harmony export */   "vG": () => (/* binding */ isAppLoadedState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const siteThemeState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: `siteThemeState`,
    default: ``
});
const isLangBtnClosedState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: `isLangBtnClosedState`,
    default: false
});
const isUserLoggedInState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: `isUserLoggedInState`,
    default: false
});
const isAppLoadedState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: `isAppLoadedState`,
    default: false
});
const advancedNoticesListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: `advancedNoticesListState`,
    default: [
        {
            date: "",
            content: ""
        }
    ]
});



/***/ })

};
;