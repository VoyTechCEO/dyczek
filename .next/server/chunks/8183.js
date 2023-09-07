exports.id = 8183;
exports.ids = [8183];
exports.modules = {

/***/ 8178:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "footer_container__LsEE4",
	"socials": "footer_socials__lOtCw",
	"imo": "footer_imo___JFnF",
	"szla_zd": "footer_szla_zd__3v_nk",
	"aku_kos": "footer_aku_kos__XyyKF"
};


/***/ }),

/***/ 6477:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "langChangeBtn_container__ie515",
	"home_main": "langChangeBtn_home_main__rJ6Xw",
	"akademia_ch": "langChangeBtn_akademia_ch__pbTch",
	"aku_chiro": "langChangeBtn_aku_chiro___jUac",
	"close": "langChangeBtn_close__v4_tQ",
	"imo": "langChangeBtn_imo__8jvMl",
	"szla_zd": "langChangeBtn_szla_zd__vR1YJ",
	"aku_kos": "langChangeBtn_aku_kos___vC_Q"
};


/***/ }),

/***/ 1965:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "logoutBtn_container__xGoPL"
};


/***/ }),

/***/ 5754:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "mainNav_container__EJD1C",
	"link": "mainNav_link__ctEOw",
	"active": "mainNav_active__wQ_Jm",
	"underline": "mainNav_underline__oVDeT",
	"imo": "mainNav_imo__3mVvr",
	"szla_zd": "mainNav_szla_zd__qScfM",
	"aku_kos": "mainNav_aku_kos__tHR_u"
};


/***/ }),

/***/ 4705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recoilMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4729);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8178);
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useSetPageSpecs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8741);








const Footer = ()=>{
    const [siteTheme, setSiteTheme] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_recoilMain__WEBPACK_IMPORTED_MODULE_1__/* .siteThemeState */ .Jw);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { socialIcons , sinceYear  } = (0,_hooks_useSetPageSpecs__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: `container ${(_footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().container)} ${siteTheme === `imo` ? (_footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().imo) : siteTheme === `szlaZd` ? (_footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().szla_zd) : siteTheme === `akuKos` ? (_footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().aku_kos) : ``}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().socials),
                    children: socialIcons === null || socialIcons === void 0 ? void 0 : socialIcons.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: item.link,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: item.image,
                                    alt: item.name
                                })
                            })
                        }, `${item}${index}footer`);
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "\xa9 ",
                        sinceYear,
                        "-",
                        new Date().getFullYear(),
                        " ",
                        t("main:footerRights")
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        t("main:footerCredits"),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://github.com/VoyTechCEO",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "VoyTech"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 9414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useSetPageSpecs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8741);




const HeadSet = ()=>{
    const { title , description , keywords , favicon  } = (0,_hooks_useSetPageSpecs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "keywords",
                    content: keywords
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "icon",
                    href: favicon
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadSet);


/***/ }),

/***/ 5145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _langChangeBtn_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6477);
/* harmony import */ var _langChangeBtn_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_langChangeBtn_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _recoilMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4729);







const LangChangeBtn = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isLangBtnClosed, setIsLangBtnClosed] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_recoilMain__WEBPACK_IMPORTED_MODULE_5__/* .isLangBtnClosedState */ .cG);
    let pageClass = ``;
    if (router.pathname === `/`) {
        pageClass = (_langChangeBtn_module_css__WEBPACK_IMPORTED_MODULE_6___default().home_main);
    } else if (router.pathname.includes(`/akademia_chiropraktyki`)) {
        pageClass = (_langChangeBtn_module_css__WEBPACK_IMPORTED_MODULE_6___default().akademia_ch);
    } else if (router.pathname.includes(`/akupunktura_chiropraktyka`)) {
        pageClass = (_langChangeBtn_module_css__WEBPACK_IMPORTED_MODULE_6___default().aku_chiro);
    } else if (router.pathname.includes(`/instytut_medycyny_orientalnej`)) {
        pageClass = (_langChangeBtn_module_css__WEBPACK_IMPORTED_MODULE_6___default().imo);
    } else if (router.pathname.includes(`/szlachetne_zdrowie`)) {
        pageClass = (_langChangeBtn_module_css__WEBPACK_IMPORTED_MODULE_6___default().szla_zd);
    } else if (router.pathname.includes(`/akupunktura_kosmetyczna`)) {
        pageClass = (_langChangeBtn_module_css__WEBPACK_IMPORTED_MODULE_6___default().aku_kos);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `container ${(_langChangeBtn_module_css__WEBPACK_IMPORTED_MODULE_6___default().container)} ${pageClass}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_langChangeBtn_module_css__WEBPACK_IMPORTED_MODULE_6___default().close),
                    onClick: ()=>setIsLangBtnClosed(true),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        width: "10",
                        version: "1.1",
                        viewBox: "0 0 52.917 52.917",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "m16.734 43.194-9.7247 9.7221-7.0088-7.0088 19.444-19.449-19.444-19.449 7.0088-7.0088 19.449 19.444 19.449-19.444 7.0088 7.0088-19.444 19.449 19.444 19.449-7.0088 7.0088-19.449-19.444z",
                            strokeWidth: ".26458"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: router.pathname,
                    locale: router.locale !== `en` ? `en` : `pl`,
                    children: router.locale === `en` ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                width: "1e3",
                                height: "500",
                                version: "1.1",
                                viewBox: "0 0 264.58 132.29",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                        y: "-1.1102e-16",
                                        width: "264.58",
                                        height: "66.146",
                                        fill: "#fff"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                        y: "66.146",
                                        width: "264.58",
                                        height: "66.146",
                                        fill: "#c00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Polska wersja"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                version: "1.1",
                                viewBox: "0 0 1e3 500",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    transform: "scale(16.667)",
                                    strokeWidth: "1pt",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                            width: "60",
                                            height: "30",
                                            fill: "#006"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "m0 0v3.3541l53.292 26.646h6.708v-3.354l-53.292-26.646h-6.708zm60 0v3.354l-53.292 26.646h-6.708v-3.354l53.292-26.646h6.708z",
                                            fill: "#fff"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "m25 0v30h10v-30h-10zm-25 10v10h60v-10h-60z",
                                            fill: "#fff"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "m0 12v6h60v-6h-60zm27-12v30h6v-30h-6z",
                                            fill: "#c00"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "m0 30 20-10h4.472l-20 10h-4.472zm0-30 20 10h-4.472l-15.528-7.7639v-2.2361zm35.528 10 20-10h4.472l-20 10h-4.472zm24.472 20-20-10h4.472l15.528 7.764v2.236z",
                                            fill: "#c00"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "English version"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LangChangeBtn);


/***/ }),

/***/ 1882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logoutBtn_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1965);
/* harmony import */ var _logoutBtn_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_logoutBtn_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




const LogoutBtn = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const logOut = async ()=>{
        await fetch(`https://dyczek.netlify.app/api/user`, {
            method: `DELETE`
        });
        router.reload();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: `container ${(_logoutBtn_module_css__WEBPACK_IMPORTED_MODULE_3___default().container)}`,
            onClick: logOut,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    id: "Warstwa_1",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 154 224.34",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "m62.41,38.52L11,9v185.08c0,1.81.97,3.48,2.53,4.38l43.91,25.21c3.36,1.93,7.56-.5,7.56-4.38V42.98c0-1.84-.99-3.55-2.59-4.47Z"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "m151.88,95.87l-31.26-25.59c-3.78-3.09-9.45-.4-9.45,4.48v15.92h-34.01c-3.2,0-5.79,2.59-5.79,5.79v6.95c0,3.2,2.59,5.79,5.79,5.79h34.01v16.73c0,4.88,5.67,7.57,9.45,4.48l31.26-25.59c2.83-2.31,2.83-6.64,0-8.95Z"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "m122.56,137.42c-1.03.85-2.18,1.33-3.34,1.52-.71.12-1.22.76-1.22,1.48v44.06c0,1.94-1.57,3.52-3.52,3.52H15.52c-1.94,0-3.52-1.57-3.52-3.52V15.52c0-1.94,1.57-3.52,3.52-3.52h98.97c1.94,0,3.52,1.57,3.52,3.52v44.95c0,.72.51,1.37,1.22,1.48,1.16.19,2.31.68,3.34,1.52l4.97,4.06c.99.81,2.48.11,2.48-1.17V8.52c0-4.7-3.81-8.52-8.52-8.52H8.52C3.81,0,0,3.81,0,8.52v182.97c0,4.7,3.81,8.52,8.52,8.52h112.97c4.7,0,8.52-3.81,8.52-8.52v-56.96c0-1.28-1.49-1.98-2.48-1.17l-4.97,4.06Z"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Wyloguj się"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoutBtn);


/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recoilMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4729);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mainNav_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5754);
/* harmony import */ var _mainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mainNav_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_7__);









const MainNav = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [siteTheme, setSiteTheme] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_recoilMain__WEBPACK_IMPORTED_MODULE_1__/* .siteThemeState */ .Jw);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const navList = t("main:mainNav", {
        returnObjects: true
    });
    const navItems = navList;
    // --- responsive design START --- //
    const isSmallerScreen = (0,react_responsive__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)({
        maxWidth: 1400
    });
    const responsiveNavItems = [
        {
            logo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/svg/henryk_dyczek_favicon.svg",
                alt: "henryk dyczek"
            })
        },
        {
            logo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/svg/akademia_chiropraktyki_logo.svg",
                alt: "akademia chiropraktyki"
            })
        },
        {
            logo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/svg/akupunktura_chiropraktyka_logo.svg",
                alt: "akupunktura chiropraktyka"
            })
        },
        {
            logo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/svg/instytut_medycyny_orientalnej_logo.svg",
                alt: "instytut medycyny orientalnej"
            })
        },
        {
            logo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/svg/szlachetne_zdrowie_logo.svg",
                alt: "szlachetne zdrowie"
            })
        },
        {
            logo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/svg/akupunktura_kosmetyczna_logo.svg",
                alt: "akupunktura kosmetyczna"
            })
        }
    ];
    // --- responsive design END --- //
    const currentPath = navItems.reverse().find((item)=>{
        return router.pathname.includes(item.link);
    });
    navItems.reverse();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            id: "startView",
            className: `container ${(_mainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default().container)}`,
            children: navItems.map((item, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: siteTheme === `imo` ? (_mainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default().imo) : siteTheme === `szlaZd` ? (_mainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default().szla_zd) : siteTheme === `akuKos` ? (_mainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default().aku_kos) : ``,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: item.link,
                            className: // extract the current route
                            currentPath === item ? `${(_mainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default().link)} ${(_mainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default().active)}` : (_mainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default().link),
                            children: isSmallerScreen ? responsiveNavItems[index].logo : item.name
                        }),
                        currentPath === item && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_mainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default().underline)
                        })
                    ]
                }, `${item}${index}`);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainNav);


/***/ }),

/***/ 8741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hooks_useSetPageSpecs)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./utils/pageSpecsList.ts
const pageSpecsList = (t)=>{
    const homeDyczekSpecs = t("main:homeDyczekSpecs", {
        returnObjects: true
    });
    const akademiaChSpecs = t("main:akademiaChSpecs", {
        returnObjects: true
    });
    const akuChiroSpecs = t("main:akuChiroSpecs", {
        returnObjects: true
    });
    const imoSpecs = t("main:imoSpecs", {
        returnObjects: true
    });
    const szlaZdSpecs = t("main:szlaZdSpecs", {
        returnObjects: true
    });
    const akuKosSpecs = t("main:akuKosSpecs", {
        returnObjects: true
    });
    const pageSpecsList = [
        {
            name: `homeDyczek`,
            subNavContent: homeDyczekSpecs.nav,
            title: homeDyczekSpecs.title,
            keywords: `henryk dyczek, dyczek, medycyna niekonwencjonalna, akupunktura, chiropraktyka`,
            description: homeDyczekSpecs.description,
            favicon: `/svg/henryk_dyczek_favicon.svg`,
            sinceYear: 2008
        },
        {
            name: `akademiaCh`,
            subNavContent: akademiaChSpecs.nav,
            title: akademiaChSpecs.title,
            keywords: `akademia chiropraktyki, chiropraktyka, henryk dyczek, chiropraktycy, chiropraktyk`,
            description: akademiaChSpecs.description,
            favicon: `/svg/akademia_chiropraktyki_favicon.svg`,
            sinceYear: 1999,
            socialIcons: [
                {
                    name: `Facebook Akademia Chiropraktyki`,
                    image: `/img/facebook.webp`,
                    link: `https://fb.watch/iUeTioOtwn/`
                }
            ]
        },
        {
            name: `akuChiro`,
            subNavContent: akuChiroSpecs.nav,
            title: akuChiroSpecs.title,
            keywords: `akupunktura, chiropraktyka, henryk dyczek, medycyna niekonwencjonalna`,
            description: akuChiroSpecs.description,
            favicon: `/img/akupunktura_chiropraktyka_favicon.png`,
            sinceYear: 1999
        },
        {
            name: `imo`,
            subNavContent: imoSpecs.nav,
            title: imoSpecs.title,
            keywords: `instytut medycyny orientalnej, imo, medycyna orientalna, henryk dyczek`,
            description: imoSpecs.description,
            favicon: `/img/instytutMedycynyOrientalnej.png`,
            sinceYear: 1999
        },
        {
            name: `szlaZd`,
            subNavContent: szlaZdSpecs.nav,
            title: szlaZdSpecs.title,
            keywords: `szlachetne zdrowie, zdrowie, health, noble health, henryk dyczek`,
            description: szlaZdSpecs.description,
            favicon: `/svg/szlachetne_zdrowie_favicon.svg`,
            sinceYear: 2009
        },
        {
            name: `akuKos`,
            subNavContent: akuKosSpecs.nav,
            title: akuKosSpecs.title,
            keywords: `henryk dyczek, akupunktura, akupunktura kosmetyczna, kosmetologia`,
            description: akuKosSpecs.description,
            favicon: `/svg/akupunktura_kosmetyczna_logo.svg`,
            sinceYear: 2008
        }
    ];
    return pageSpecsList;
};
/* harmony default export */ const utils_pageSpecsList = (pageSpecsList);

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./hooks/useSetPageSpecs.tsx



const useSetPageSpecs = ()=>{
    const router = (0,router_.useRouter)();
    const { t  } = (0,external_next_i18next_.useTranslation)();
    let pageSpecs;
    if (router.pathname === `/`) {
        pageSpecs = utils_pageSpecsList(t).find((item)=>item.name === `homeDyczek`);
    } else if (router.pathname.includes(`/akademia_chiropraktyki`)) {
        pageSpecs = utils_pageSpecsList(t).find((item)=>item.name === `akademiaCh`);
    } else if (router.pathname.includes(`/akupunktura_chiropraktyka`)) {
        pageSpecs = utils_pageSpecsList(t).find((item)=>item.name === `akuChiro`);
    } else if (router.pathname.includes(`/instytut_medycyny_orientalnej`)) {
        pageSpecs = utils_pageSpecsList(t).find((item)=>item.name === `imo`);
    } else if (router.pathname.includes(`/szlachetne_zdrowie`)) {
        pageSpecs = utils_pageSpecsList(t).find((item)=>item.name === `szlaZd`);
    } else if (router.pathname.includes(`/akupunktura_kosmetyczna`)) {
        pageSpecs = utils_pageSpecsList(t).find((item)=>item.name === `akuKos`);
    }
    return pageSpecs;
};
/* harmony default export */ const hooks_useSetPageSpecs = (useSetPageSpecs);


/***/ })

};
;