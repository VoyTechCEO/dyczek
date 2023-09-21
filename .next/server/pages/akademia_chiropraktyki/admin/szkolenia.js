(() => {
var exports = {};
exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 489:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "akademiaAdminEditor_container__p2RGv",
	"preview": "akademiaAdminEditor_preview__uuAq2",
	"buttons": "akademiaAdminEditor_buttons__85Gwn",
	"normal": "akademiaAdminEditor_normal__RrEzP",
	"label": "akademiaAdminEditor_label__xh8d8",
	"advanced": "akademiaAdminEditor_advanced__gXHb2"
};


/***/ }),

/***/ 7244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AkademiaAdminEditor)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/akademiaAdminEditor/akademiaAdminEditor.module.css
var akademiaAdminEditor_module = __webpack_require__(489);
var akademiaAdminEditor_module_default = /*#__PURE__*/__webpack_require__.n(akademiaAdminEditor_module);
;// CONCATENATED MODULE: external "@tinymce/tinymce-react"
const tinymce_react_namespaceObject = require("@tinymce/tinymce-react");
// EXTERNAL MODULE: ./components/elementRef/ElementRef.tsx
var ElementRef = __webpack_require__(5583);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/akademiaWarningBtn/AkademiaWarningBtn.tsx
var AkademiaWarningBtn = __webpack_require__(5660);
;// CONCATENATED MODULE: ./components/akademiaAdminEditor/AkademiaAdminEditor.tsx







const AkademiaDocument = ()=>{
    const router = (0,router_.useRouter)();
    const editorRef = (0,external_react_.useRef)(null);
    const [content, setContent] = (0,external_react_.useState)("");
    const [title, setTitle] = (0,external_react_.useState)("");
    const [desc, setDesc] = (0,external_react_.useState)("");
    const [trainingType, setTrainingType] = (0,external_react_.useState)("basic");
    const viewContent = ()=>{
        if (editorRef.current) {
            setContent(editorRef.current.getContent());
        }
    };
    const postContent = async ()=>{
        if (editorRef.current) {
            try {
                if (trainingType === `basic`) {
                    const res = await fetch(`/api/notices/basic`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            content: editorRef.current.getContent()
                        })
                    });
                    const data = await res.json();
                    router.push("/akademia_chiropraktyki/szkolenie_podstawowe#startView");
                } else {
                    await fetch(`/api/notices/advanced`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title: title,
                            desc: desc,
                            content: editorRef.current.getContent()
                        })
                    });
                    router.push("/akademia_chiropraktyki/szkolenie_zaawansowane#startView");
                }
            } catch (err) {
                console.log(err);
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `container ${(akademiaAdminEditor_module_default()).container}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (akademiaAdminEditor_module_default()).label,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Wybierz rodzaj szkolenia:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            name: "trainingType",
                            id: "trainingType",
                            value: trainingType,
                            onChange: (e)=>setTrainingType(e.target.value),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "basic",
                                    children: "Podstawowe"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "advanced",
                                    children: "Zaawansowane"
                                })
                            ]
                        })
                    ]
                }),
                trainingType === `advanced` && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (akademiaAdminEditor_module_default()).label,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Wprowadź tytuł:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: (akademiaAdminEditor_module_default()).advanced,
                                    type: "text",
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (akademiaAdminEditor_module_default()).label,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Wprowadź opis:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: (akademiaAdminEditor_module_default()).advanced,
                                    type: "text",
                                    value: desc,
                                    onChange: (e)=>setDesc(e.target.value)
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (akademiaAdminEditor_module_default()).label,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Wprowadź treść komunikatu:"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(tinymce_react_namespaceObject.Editor, {
                            id: "EditorID",
                            tinymceScriptSrc: "https://dyczekpl.cfolks.pl/tinymce/tinymce.min.js",
                            onInit: (evt, editor)=>editorRef.current = editor,
                            initialValue: "<p>This is the initial content of the editor.</p>",
                            init: {
                                menubar: false,
                                plugins: [
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "preview",
                                    "help",
                                    "wordcount"
                                ],
                                toolbar: "undo redo | blocks | " + "bold italic forecolor | alignleft aligncenter " + "alignright alignjustify | bullist numlist outdent indent | " + "removeformat | help"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (akademiaAdminEditor_module_default()).buttons,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (akademiaAdminEditor_module_default()).normal,
                            onClick: viewContent,
                            children: "Wyświetl podgląd"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(AkademiaWarningBtn/* default */.Z, {
                            btnContent: "Zamieść komunikat",
                            func: postContent,
                            warning: "Po zamieszczeniu komunikatu, będzie on widoczny w sekcji szkoleń dla wszystkich użytkownik\xf3w strony."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ElementRef/* default */.Z, {
                    element: "section",
                    content: content,
                    className: (akademiaAdminEditor_module_default()).preview
                })
            ]
        })
    });
};
/* harmony default export */ const AkademiaAdminEditor = (AkademiaDocument);


/***/ }),

/***/ 7762:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4705);
/* harmony import */ var _components_headSet_HeadSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9414);
/* harmony import */ var _components_mainNav_MainNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _components_akademiaHeader_AkademiaHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6211);
/* harmony import */ var _components_standardMainContent_StandardMainContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2066);
/* harmony import */ var _components_akademiaTrainings_AkademiaTrainings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9095);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_akademiaAdminEditor_AkademiaAdminEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7244);
/* harmony import */ var _components_adminPassFrame_AdminPassFrame__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5297);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _recoilMain__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4729);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_akademiaHeader_AkademiaHeader__WEBPACK_IMPORTED_MODULE_5__]);
_components_akademiaHeader_AkademiaHeader__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_8__.serverSideTranslations)(locale, [
                "main",
                "akademiaChMain"
            ])
        }
    };
}
const Akademia = ()=>{
    const [isUserLoggedIn, setIsUserLoggedIn] = (0,recoil__WEBPACK_IMPORTED_MODULE_11__.useRecoilState)(_recoilMain__WEBPACK_IMPORTED_MODULE_12__/* .isUserLoggedInState */ .R6);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_headSet_HeadSet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main",
                className: "main-blur",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_akademiaHeader_AkademiaHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_mainNav_MainNav__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_akademiaTrainings_AkademiaTrainings__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    !isUserLoggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_adminPassFrame_AdminPassFrame__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_standardMainContent_StandardMainContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                            className: `container main-container akademiaCh-container trainings`,
                            children: isUserLoggedIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_akademiaAdminEditor_AkademiaAdminEditor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Brak dostępu do narzędzi administratora."
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Akademia);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 9996:
/***/ ((module) => {

"use strict";
module.exports = import("@react-spring/web");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,676,1664,4729,8183,2066,9243,571], () => (__webpack_exec__(7762)));
module.exports = __webpack_exports__;

})();