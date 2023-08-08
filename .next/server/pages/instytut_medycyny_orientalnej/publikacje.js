"use strict";
(() => {
var exports = {};
exports.id = 9004;
exports.ids = [9004];
exports.modules = {

/***/ 5583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ElementRef = ({ element , content , className  })=>{
    const refText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (refText.current) {
            refText.current.innerHTML = content;
        }
    });
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(element, {
        ref: refText,
        className: className && className
    }, content);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementRef);


/***/ }),

/***/ 8118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ publikacje),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/footer/Footer.tsx
var Footer = __webpack_require__(4705);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/headSet/HeadSet.tsx
var HeadSet = __webpack_require__(9414);
// EXTERNAL MODULE: ./components/mainNav/MainNav.tsx
var MainNav = __webpack_require__(48);
// EXTERNAL MODULE: ./components/standardMainContent/StandardMainContent.tsx + 1 modules
var StandardMainContent = __webpack_require__(2066);
// EXTERNAL MODULE: ./components/imoHeader/ImoHeader.tsx
var ImoHeader = __webpack_require__(4416);
// EXTERNAL MODULE: ./components/smallerInfo/SmallerInfo.tsx
var SmallerInfo = __webpack_require__(2185);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/elementRef/ElementRef.tsx
var ElementRef = __webpack_require__(5583);
;// CONCATENATED MODULE: ./utils/imoPublicsList.tsx


const imoPublicsList = (t)=>{
    const publicsListTrans = t("imoPublikacje:publicsList", {
        returnObjects: true
    });
    const newPublicsList = publicsListTrans.map((article)=>{
        const newPublics = article.publics.map((item)=>{
            let newItem = {
                header: item.header,
                author: item.author,
                short: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                doc: item.doc,
                english: item.english
            };
            newItem.short = /*#__PURE__*/ jsx_runtime_.jsx(ElementRef/* default */.Z, {
                element: "div",
                content: item.short
            });
            if (!item.short) {
                newItem = {
                    header: item.header,
                    author: item.author,
                    doc: item.doc,
                    english: item.english
                };
            }
            return newItem;
        });
        return {
            year: article.year,
            publics: newPublics
        };
    });
    const imoPublicsList = newPublicsList;
    return imoPublicsList;
};
/* harmony default export */ const utils_imoPublicsList = (imoPublicsList);

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
;// CONCATENATED MODULE: ./pages/instytut_medycyny_orientalnej/publikacje/index.tsx













async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "main",
                "imoMain",
                "imoPublikacje"
            ])
        }
    };
}
const IMO = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    // --- responsive design START --- //
    const isSmallerScreen = (0,external_react_responsive_.useMediaQuery)({
        maxWidth: 900
    });
    // --- responsive design END --- //
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeadSet/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main",
                className: "main-yellow",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ImoHeader/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(MainNav/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(StandardMainContent/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                            className: "container main-container imo-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: t("imoPublikacje:head")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: utils_imoPublicsList(t).map((sector, sectorIdx)=>{
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "public-sector",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: sector.year
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: sector.publics.map((item)=>{
                                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "post",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "align-left",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: item.header
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                    children: [
                                                                        t("imoPublikacje:author"),
                                                                        ":"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "align-left",
                                                                    children: item.author
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                    children: [
                                                                        t("imoPublikacje:summaryHead"),
                                                                        ":"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                                    children: item.short && item.short
                                                                }),
                                                                !isSmallerScreen ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                    href: `/docs/imo/${item.doc}`,
                                                                    children: [
                                                                        t("imoPublikacje:download"),
                                                                        " (",
                                                                        item.doc,
                                                                        ")",
                                                                        item.english ? ` - ${t("imoPublikacje:enVersion")}` : ` - ${t("imoPublikacje:plVersion")}`
                                                                    ]
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: `/docs/imo/${item.doc}`,
                                                                    children: t("imoPublikacje:download")
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "line"
                                                                })
                                                            ]
                                                        }, `${item}publics`);
                                                    })
                                                })
                                            ]
                                        }, `${sector}publicsSectors${sectorIdx}`);
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SmallerInfo/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const publikacje = (IMO);


/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,676,1664,4729,8183,2066,2250], () => (__webpack_exec__(8118)));
module.exports = __webpack_exports__;

})();