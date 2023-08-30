(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 7316:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "mainError_container__jcY_I",
	"error": "mainError_error__wJgXD"
};


/***/ }),

/***/ 3212:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "mainLoading_container__U9Q_F",
	"loading": "mainLoading_loading__0_s2Y",
	"spinner": "mainLoading_spinner__t_STX"
};


/***/ }),

/***/ 5476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./styles/akademiaChiropraktykiStyles.css
var akademiaChiropraktykiStyles = __webpack_require__(7218);
// EXTERNAL MODULE: ./styles/akupunkturaChiropraktykaStyles.css
var akupunkturaChiropraktykaStyles = __webpack_require__(3301);
// EXTERNAL MODULE: ./styles/instytutMedycynyOrientalnejStyles.css
var instytutMedycynyOrientalnejStyles = __webpack_require__(9071);
// EXTERNAL MODULE: ./styles/szlachetneZdrowieStyles.css
var szlachetneZdrowieStyles = __webpack_require__(137);
// EXTERNAL MODULE: ./styles/akupunkturaKosmetycznaStyles.css
var akupunkturaKosmetycznaStyles = __webpack_require__(6087);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./recoilMain.ts
var recoilMain = __webpack_require__(4729);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./components/mainLoading/mainLoading.module.css
var mainLoading_module = __webpack_require__(3212);
var mainLoading_module_default = /*#__PURE__*/__webpack_require__.n(mainLoading_module);
;// CONCATENATED MODULE: ./components/mainLoading/MainLoading.tsx



const MainLoading = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `container ${(mainLoading_module_default()).container}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (mainLoading_module_default()).loading,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: (mainLoading_module_default()).spinner,
                        width: "75",
                        version: "1.1",
                        viewBox: "0 0 52.832 52.832",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                            transform: "translate(4.6405 -125.3)",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                transform: "scale(.26458)",
                                d: "m82.301 473.56c-55.14-2e-4-99.84 44.7-99.84 99.84-.000201 55.14 44.7 99.84 99.84 99.84 55.14.00019 99.84-44.7 99.84-99.84-.002-4.7006-.33505-9.3952-.99804-14.049l-7.8496 1.6816c.56464 4.0983.85175 8.2301.85937 12.367.00066 50.729-41.123 91.853-91.852 91.854-50.73.00066-91.854-41.124-91.854-91.854.0004242-50.729 41.125-91.852 91.854-91.852.96699.001 1.9339.0173 2.9004.0488l.25391-7.9823c-1.0511-.0349-2.1026-.0531-3.1543-.0547z",
                                color: "#000000"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Ładowanie..."
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const mainLoading_MainLoading = (MainLoading);

// EXTERNAL MODULE: ./components/mainError/mainError.module.css
var mainError_module = __webpack_require__(7316);
var mainError_module_default = /*#__PURE__*/__webpack_require__.n(mainError_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/mainError/MainError.tsx




const MainError = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `container ${(mainError_module_default()).container}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (mainError_module_default()).error,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: `:(`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Wystąpił błąd."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Wr\xf3ć do strony gł\xf3wnej."
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const mainError_MainError = (MainError);

;// CONCATENATED MODULE: ./components/appWrapper/AppWrapper.tsx








const AppWrapper = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const [siteTheme, setSiteTheme] = (0,external_recoil_.useRecoilState)(recoilMain/* siteThemeState */.Jw);
    const [isUserLoggedIn, setIsUserLoggedIn] = (0,external_recoil_.useRecoilState)(recoilMain/* isUserLoggedInState */.R6);
    const [isAppLoaded, setIsAppLoaded] = (0,external_recoil_.useRecoilState)(recoilMain/* isAppLoadedState */.vG);
    (0,external_react_.useEffect)(()=>{
        if (router.pathname.includes(`/instytut_medycyny_orientalnej`)) {
            setSiteTheme(`imo`);
        } else if (router.pathname.includes(`/akupunktura_chiropraktyka`)) {
            setSiteTheme(`akuChi`);
        } else if (router.pathname.includes(`/szlachetne_zdrowie`)) {
            setSiteTheme(`szlaZd`);
        } else if (router.pathname.includes(`/akupunktura_kosmetyczna`)) {
            setSiteTheme(`akuKos`);
        } else {
            setSiteTheme(``);
        }
    });
    const getUserData = async ()=>{
        console.log(`user1`);
        try {
            console.log(`user2`);
            const res = await fetch(`/api/user`, {
                method: `GET`,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(`user3`);
            const data = await res.json();
            console.log(`user4`);
            setIsUserLoggedIn(data.response.isLoggedIn);
            setIsAppLoaded(true);
        } catch (err) {
            console.log(err);
        }
    };
    const { isLoading , error  } = (0,external_react_query_.useQuery)(`userData`, async ()=>{
        await getUserData();
    });
    if (!isAppLoaded) {
        return /*#__PURE__*/ jsx_runtime_.jsx(mainLoading_MainLoading, {});
    }
    if (error) {
        return /*#__PURE__*/ jsx_runtime_.jsx(mainError_MainError, {});
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: children
    });
};
/* harmony default export */ const appWrapper_AppWrapper = (AppWrapper);

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./pages/_app.tsx











const queryClient = new external_react_query_.QueryClient();
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_recoil_.RecoilRoot, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
            client: queryClient,
            children: /*#__PURE__*/ jsx_runtime_.jsx(appWrapper_AppWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(App));


/***/ }),

/***/ 7218:
/***/ (() => {



/***/ }),

/***/ 3301:
/***/ (() => {



/***/ }),

/***/ 6087:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 9071:
/***/ (() => {



/***/ }),

/***/ 137:
/***/ (() => {



/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

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

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

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
var __webpack_exports__ = __webpack_require__.X(0, [9210,676,1664,4729], () => (__webpack_exec__(5476)));
module.exports = __webpack_exports__;

})();