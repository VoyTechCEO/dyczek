(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 3025:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "homeHeader_container__5J0fy",
	"banner": "homeHeader_banner__bKkdh",
	"head": "homeHeader_head__OSvtJ",
	"title": "homeHeader_title__Ycp8Z",
	"undertitle": "homeHeader_undertitle__31nmg"
};


/***/ }),

/***/ 8243:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "homeIntroduction_container__zTVIk",
	"profiles": "homeIntroduction_profiles__mIqoc",
	"invisible": "homeIntroduction_invisible__4qeiv",
	"visible": "homeIntroduction_visible__IBWVq",
	"showUp": "homeIntroduction_showUp__jxgkO",
	"previous": "homeIntroduction_previous__sqq_V"
};


/***/ }),

/***/ 4823:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "homeMainContent_container__JcIUA",
	"frame": "homeMainContent_frame__Mr_Fd",
	"edge": "homeMainContent_edge__Y6rjs"
};


/***/ }),

/***/ 8014:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "imoLogo_container__NNnp9"
};


/***/ }),

/***/ 5583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 3334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/headSet/HeadSet.tsx
var HeadSet = __webpack_require__(9414);
// EXTERNAL MODULE: ./components/mainNav/MainNav.tsx
var MainNav = __webpack_require__(48);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/homeHeader/homeHeader.module.css
var homeHeader_module = __webpack_require__(3025);
var homeHeader_module_default = /*#__PURE__*/__webpack_require__.n(homeHeader_module);
// EXTERNAL MODULE: ./components/homeIntroduction/homeIntroduction.module.css
var homeIntroduction_module = __webpack_require__(8243);
var homeIntroduction_module_default = /*#__PURE__*/__webpack_require__.n(homeIntroduction_module);
;// CONCATENATED MODULE: ./components/homeIntroduction/HomeIntroduction.tsx



const HomeIntroduction = ()=>{
    const profileImages = [
        "/img/dyczekHenryk.jpg",
        "/img/dyczekHenryk1.jpg",
        "/img/dyczekHenryk2.jpg",
        "/img/dyczekHenryk3.jpg"
    ];
    const [currentImg, setCurrentImg] = (0,external_react_.useState)(profileImages[0]);
    const [previousImg, setPreviousImg] = (0,external_react_.useState)(profileImages[profileImages.length - 1]);
    const changeImage = ()=>{
        setPreviousImg((previousImg)=>{
            const previous = profileImages.indexOf(previousImg);
            if (previous === profileImages.length - 1) {
                return profileImages[0];
            } else {
                return profileImages[previous + 1];
            }
        });
        setCurrentImg((currentImg)=>{
            const current = profileImages.indexOf(currentImg);
            if (current === profileImages.length - 1) {
                return profileImages[0];
            } else {
                return profileImages[current + 1];
            }
        });
    };
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(changeImage, 7000);
        return ()=>{
            clearInterval(interval);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
            className: `container ${(homeIntroduction_module_default()).container}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (homeIntroduction_module_default()).profiles,
                    children: profileImages.map((item, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: `${currentImg === item ? (homeIntroduction_module_default()).visible : previousImg === item ? (homeIntroduction_module_default()).previous : (homeIntroduction_module_default()).invisible}`,
                            src: item,
                            alt: "Dyczek Henryk"
                        }, `${item}homeProfilePic${index}`);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                "dr n. med. ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "HENRYK DYCZEK"
                                }),
                                ", D.C. (Diploma in Chiropractic), B. Sc. in Chiropractic (Bachelor of Sciences in Chiropractic), M.A. (Master of Arts), Ac. M. (Acupuncture Master)"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Uniwersytet Medyczny w Łodzi, studia doktoranckie (2009-2013)"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Uniwersytet Ł\xf3dzki (2003 – 2005)"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Lancaster University, U.K. (2003 – 2005)"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Oxford Brookes University, U. K. (1998 – 2002)"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Oxford College of Chiropractic, U.K. (1991 – 1995)"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "The College of Traditional Acupuncture, U.K. (1985 – 1994)"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const homeIntroduction_HomeIntroduction = (HomeIntroduction);

// EXTERNAL MODULE: ./components/iconNav/IconNav.tsx
var IconNav = __webpack_require__(4778);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/imoLogo/imoLogo.module.css
var imoLogo_module = __webpack_require__(8014);
var imoLogo_module_default = /*#__PURE__*/__webpack_require__.n(imoLogo_module);
;// CONCATENATED MODULE: ./components/imoLogo/ImoLogo.tsx




const ImoLogo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: "/instytut_medycyny_orientalnej",
            className: `container ${(imoLogo_module_default()).container}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/svg/instytut_medycyny_orientalnej_logo.svg",
                    alt: "Logo Instytutu Medycyny Orientalnej"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Instytut Medycyny Orientalnej"
                })
            ]
        })
    });
};
/* harmony default export */ const imoLogo_ImoLogo = (ImoLogo);

;// CONCATENATED MODULE: ./components/homeHeader/HomeHeader.tsx






const HomeHeader = ()=>{
    const navItems = [
        {
            name: `Akademia Chiropraktyki`,
            link: `/akademia_chiropraktyki`,
            src: `/svg/akademia_chiropraktyki_logo.svg`
        },
        {
            name: `Akupunktura Chiropraktyka`,
            link: `/akupunktura_chiropraktyka`,
            src: `/svg/akupunktura_chiropraktyka_logo.svg`
        },
        {
            component: /*#__PURE__*/ jsx_runtime_.jsx(imoLogo_ImoLogo, {})
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: `container ${(homeHeader_module_default()).container}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (homeHeader_module_default()).banner
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (homeHeader_module_default()).head,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (homeHeader_module_default()).title,
                            children: "HENRYK DYCZEK"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (homeHeader_module_default()).undertitle,
                            children: "Medycyna Niekonwencjonalna"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(homeIntroduction_HomeIntroduction, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(IconNav/* default */.Z, {
                    navItems: navItems
                })
            ]
        })
    });
};
/* harmony default export */ const homeHeader_HomeHeader = (HomeHeader);

// EXTERNAL MODULE: ./components/footer/Footer.tsx
var Footer = __webpack_require__(4705);
// EXTERNAL MODULE: ./components/homeMainContent/homeMainContent.module.css
var homeMainContent_module = __webpack_require__(4823);
var homeMainContent_module_default = /*#__PURE__*/__webpack_require__.n(homeMainContent_module);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./components/elementRef/ElementRef.tsx
var ElementRef = __webpack_require__(5583);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./recoilMain.ts
var recoilMain = __webpack_require__(4729);
// EXTERNAL MODULE: ./components/langChangeBtn/LangChangeBtn.tsx
var LangChangeBtn = __webpack_require__(5145);
// EXTERNAL MODULE: ./components/logoutBtn/LogoutBtn.tsx
var LogoutBtn = __webpack_require__(1882);
;// CONCATENATED MODULE: ./components/homeMainContent/HomeMainContent.tsx










const HomeMainContent = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const institutionsList = t("homeMain:institutionsList", {
        returnObjects: true
    });
    const schoolsList = t("homeMain:schoolsList", {
        returnObjects: true
    });
    const [isLangBtnClosed, setIsLangBtnClosed] = (0,external_recoil_.useRecoilState)(recoilMain/* isLangBtnClosedState */.cG);
    const [isUserLoggedIn, setIsUserLoggedIn] = (0,external_recoil_.useRecoilState)(recoilMain/* isUserLoggedInState */.R6);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `container ${(homeMainContent_module_default()).container}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                    className: (homeMainContent_module_default()).frame,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (homeMainContent_module_default()).edge
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ElementRef/* default */.Z, {
                            element: "p",
                            content: t("homeMain:intro")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: institutionsList.map((item, index)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: item.name
                                        }),
                                        ` `,
                                        item.text,
                                        ".",
                                        ` `,
                                        item.span ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: item.span
                                        }) : ``,
                                        ` `,
                                        item.link ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: item.link,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: t("homeMain:institutionButtonShow")
                                        }) : ``
                                    ]
                                }, `${item.name}homeMainInstitution${index}`);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("homeMain:header1")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: schoolsList.map((item, index)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: item.name
                                        }),
                                        " -",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: item.link,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: t("homeMain:schoolButtonShow")
                                        })
                                    ]
                                }, `${item.name}homeMainSchool${index}`);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ElementRef/* default */.Z, {
                            element: "p",
                            content: t("homeMain:imo")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/instytut_medycyny_orientalnej/publikacje",
                                target: "_blank",
                                rel: "noreferrer",
                                children: t("homeMain:publications")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (homeMainContent_module_default()).edge
                        })
                    ]
                })
            }),
            !isLangBtnClosed && /*#__PURE__*/ jsx_runtime_.jsx(LangChangeBtn/* default */.Z, {}),
            isUserLoggedIn && /*#__PURE__*/ jsx_runtime_.jsx(LogoutBtn/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const homeMainContent_HomeMainContent = (HomeMainContent);

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
;// CONCATENATED MODULE: ./pages/index.tsx







async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "main",
                "homeMain"
            ])
        }
    };
}
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeadSet/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(homeHeader_HomeHeader, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(MainNav/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(homeMainContent_HomeMainContent, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6666:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,676,1664,4729,8183,4778], () => (__webpack_exec__(3334)));
module.exports = __webpack_exports__;

})();