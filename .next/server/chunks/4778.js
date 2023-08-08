exports.id = 4778;
exports.ids = [4778];
exports.modules = {

/***/ 2026:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "iconNav_container__dV7gT",
	"aku_chi": "iconNav_aku_chi__AuZiK",
	"painter": "iconNav_painter__922vJ",
	"line": "iconNav_line__zOJd7",
	"icon": "iconNav_icon__eoD4d"
};


/***/ }),

/***/ 4778:
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
/* harmony import */ var _iconNav_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2026);
/* harmony import */ var _iconNav_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconNav_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recoilMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4729);






const IconNav = ({ navItems  })=>{
    const [siteTheme, setSiteTheme] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_recoilMain__WEBPACK_IMPORTED_MODULE_4__/* .siteThemeState */ .Jw);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: `container ${(_iconNav_module_css__WEBPACK_IMPORTED_MODULE_5___default().container)} ${siteTheme === `akuChi` && (_iconNav_module_css__WEBPACK_IMPORTED_MODULE_5___default().aku_chi)}`,
            children: navItems.map((item, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        item.component ? item.component : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: item.link,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: (_iconNav_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),
                                src: item.src,
                                alt: item.name
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_iconNav_module_css__WEBPACK_IMPORTED_MODULE_5___default().painter),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_iconNav_module_css__WEBPACK_IMPORTED_MODULE_5___default().line)
                            })
                        })
                    ]
                }, `${item}${index}`);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconNav);


/***/ })

};
;