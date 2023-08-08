exports.id = 2066;
exports.ids = [2066];
exports.modules = {

/***/ 8751:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "standardMainContent_container___JqUy",
	"akademia_ch": "standardMainContent_akademia_ch__F8Kp7"
};


/***/ }),

/***/ 4052:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "subNav_container__Dk4P8",
	"switch": "subNav_switch__rmwwn",
	"dropdown": "subNav_dropdown__N_fRS",
	"active": "subNav_active__vltJQ",
	"imo": "subNav_imo__0ssND",
	"szla_zd": "subNav_szla_zd__4i6F5",
	"aku_kos": "subNav_aku_kos__RLpTm",
	"aku_chi": "subNav_aku_chi__UxEBx",
	"shown": "subNav_shown__npcGG",
	"showNav": "subNav_showNav__T37kn",
	"hidden": "subNav_hidden__kUdws",
	"hideNav": "subNav_hideNav__CXIMG",
	"line": "subNav_line__2bIfw",
	"switchOn": "subNav_switchOn__EpYHi",
	"switchOff": "subNav_switchOff__h0i6u"
};


/***/ }),

/***/ 2066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ standardMainContent_StandardMainContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./recoilMain.ts
var recoilMain = __webpack_require__(4729);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./components/subNav/subNav.module.css
var subNav_module = __webpack_require__(4052);
var subNav_module_default = /*#__PURE__*/__webpack_require__.n(subNav_module);
// EXTERNAL MODULE: ./hooks/useSetPageSpecs.tsx + 1 modules
var useSetPageSpecs = __webpack_require__(8741);
;// CONCATENATED MODULE: ./components/subNav/SubNav.tsx








const SubNav = ()=>{
    const router = (0,router_.useRouter)();
    const { subNavContent  } = (0,useSetPageSpecs/* default */.Z)();
    const [isSubNavShown, setIsSubNavShown] = (0,external_react_.useState)("");
    const [siteTheme, setSiteTheme] = (0,external_recoil_.useRecoilState)(recoilMain/* siteThemeState */.Jw);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: `container ${(subNav_module_default()).container}
        ${isSubNavShown === "shown" ? (subNav_module_default()).shown : isSubNavShown === "hidden" ? (subNav_module_default()).hidden : ""}
        ${siteTheme === `imo` ? (subNav_module_default()).imo : siteTheme === `akuChi` ? (subNav_module_default()).aku_chi : siteTheme === `szlaZd` ? (subNav_module_default()).szla_zd : siteTheme === `akuKos` ? (subNav_module_default()).aku_kos : ``}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: (subNav_module_default())["switch"],
                    onClick: ()=>{
                        if (isSubNavShown === "" || isSubNavShown === "hidden") {
                            setIsSubNavShown("shown");
                        } else {
                            setIsSubNavShown("hidden");
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (subNav_module_default()).line
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (subNav_module_default()).line
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (subNav_module_default()).line
                        })
                    ]
                }),
                subNavContent.map((item, index)=>{
                    var _item_dropdown;
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: item.link ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `${item.link}#startView`,
                            className: router.pathname === item.link ? (subNav_module_default()).active : ``,
                            children: item.name
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: item.dropdown.find((dropdownItem, dropdownIndex)=>router.pathname === dropdownItem.link) ? `${(subNav_module_default()).dropdown} ${(subNav_module_default()).active}` : (subNav_module_default()).dropdown,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: item.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: (_item_dropdown = item.dropdown) === null || _item_dropdown === void 0 ? void 0 : _item_dropdown.map((dropdownItem, dropdownIndex)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `${dropdownItem.link}#startView`,
                                                className: router.pathname === dropdownItem.link ? (subNav_module_default()).active : ``,
                                                children: dropdownItem.name
                                            })
                                        }, `${dropdownItem.link}subNav${dropdownIndex}`);
                                    })
                                })
                            ]
                        })
                    }, `${item.name}${index}subNav`);
                })
            ]
        })
    });
};
/* harmony default export */ const subNav_SubNav = (SubNav);

// EXTERNAL MODULE: ./components/standardMainContent/standardMainContent.module.css
var standardMainContent_module = __webpack_require__(8751);
var standardMainContent_module_default = /*#__PURE__*/__webpack_require__.n(standardMainContent_module);
// EXTERNAL MODULE: ./components/langChangeBtn/LangChangeBtn.tsx
var LangChangeBtn = __webpack_require__(5145);
// EXTERNAL MODULE: ./components/logoutBtn/LogoutBtn.tsx
var LogoutBtn = __webpack_require__(1882);
;// CONCATENATED MODULE: ./components/standardMainContent/StandardMainContent.tsx









const StandardMainContent = ({ children  })=>{
    const [isLangBtnClosed, setIsLangBtnClosed] = (0,external_recoil_.useRecoilState)(recoilMain/* isLangBtnClosedState */.cG);
    const [isUserLoggedIn, setIsUserLoggedIn] = (0,external_recoil_.useRecoilState)(recoilMain/* isUserLoggedInState */.R6);
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: `container ${(standardMainContent_module_default()).container} ${router.pathname.includes(`/akademia_chiropraktyki`) && (standardMainContent_module_default()).akademia_ch}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(subNav_SubNav, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: children
                    })
                ]
            }),
            !isLangBtnClosed && !router.pathname.includes("[") && /*#__PURE__*/ jsx_runtime_.jsx(LangChangeBtn/* default */.Z, {}),
            isUserLoggedIn && /*#__PURE__*/ jsx_runtime_.jsx(LogoutBtn/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const standardMainContent_StandardMainContent = (StandardMainContent);


/***/ })

};
;