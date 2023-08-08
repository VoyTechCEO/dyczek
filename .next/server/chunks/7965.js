exports.id = 7965;
exports.ids = [7965];
exports.modules = {

/***/ 7798:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "akuChiHeader_container__OJybf",
	"banner": "akuChiHeader_banner__fcJEa",
	"overlay": "akuChiHeader_overlay__s8gL_",
	"bg": "akuChiHeader_bg__ApEPc"
};


/***/ }),

/***/ 8427:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "akuKosLogo_container__bQvmJ"
};


/***/ }),

/***/ 7965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _akuChiHeader_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7798);
/* harmony import */ var _akuChiHeader_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_akuChiHeader_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconNav_IconNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4778);
/* harmony import */ var _akuKosLogo_AkuKosLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5716);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






const AkuChiHeader = ()=>{
    const navItems = [
        {
            name: `Szlachetne zdrowie`,
            link: `/szlachetne_zdrowie`,
            src: `/svg/szlachetne_zdrowie_logo.svg`
        },
        {
            component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_akuKosLogo_AkuKosLogo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `container ${(_akuChiHeader_module_css__WEBPACK_IMPORTED_MODULE_5___default().container)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_akuChiHeader_module_css__WEBPACK_IMPORTED_MODULE_5___default().banner)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_akuChiHeader_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: "/akupunktura_chiropraktyka",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/svg/akupunktura_chiropraktyka_logo.svg",
                            alt: "Akupunktura Chiropraktyka"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_akuChiHeader_module_css__WEBPACK_IMPORTED_MODULE_5___default().bg)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconNav_IconNav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                navItems: navItems
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AkuChiHeader);


/***/ }),

/***/ 5716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _akuKosLogo_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8427);
/* harmony import */ var _akuKosLogo_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_akuKosLogo_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);





const AkuKosLogo = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/akupunktura_kosmetyczna",
            target: "_blank",
            className: `container ${(_akuKosLogo_module_css__WEBPACK_IMPORTED_MODULE_4___default().container)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/svg/akupunktura_kosmetyczna_logo.svg",
                    alt: "Logo Akupunktury Kosmetycznej"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: "Akupunktura Kosmetyczna"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AkuKosLogo);


/***/ })

};
;