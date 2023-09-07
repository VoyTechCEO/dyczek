exports.id = 571;
exports.ids = [571];
exports.modules = {

/***/ 2413:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "adminPassFrame_container__wJ2fd",
	"frame": "adminPassFrame_frame__Bu4Ai",
	"back": "adminPassFrame_back__HoOdy",
	"wrong": "adminPassFrame_wrong__kfYv7",
	"confirm": "adminPassFrame_confirm__hR8kD"
};


/***/ }),

/***/ 3722:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "akademiaWarningBtn_container__3AbFh",
	"warning": "akademiaWarningBtn_warning__VwuOk"
};


/***/ }),

/***/ 5297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adminPassFrame_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2413);
/* harmony import */ var _adminPassFrame_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_adminPassFrame_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




const AdminPassFrame = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loginStatus, setLoginStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const onSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch(`https://dyczek.netlify.app/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password: password
                })
            });
            const data = await res.json();
            setLoginStatus(data.response.isPasswordCorrect);
            if (data.response.isPasswordCorrect) {
                router.reload();
            }
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `container ${(_adminPassFrame_module_css__WEBPACK_IMPORTED_MODULE_3___default().container)}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_adminPassFrame_module_css__WEBPACK_IMPORTED_MODULE_3___default().frame),
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_adminPassFrame_module_css__WEBPACK_IMPORTED_MODULE_3___default().back),
                        onClick: ()=>router.back(),
                        children: `< Wróć`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Wprowadź hasło:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        required: true
                    }),
                    !loginStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_adminPassFrame_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrong),
                        children: "Nieprawidłowe hasło"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_adminPassFrame_module_css__WEBPACK_IMPORTED_MODULE_3___default().confirm),
                        type: "submit",
                        children: "Zatwierdź"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPassFrame);


/***/ }),

/***/ 5660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _akademiaWarningBtn_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3722);
/* harmony import */ var _akademiaWarningBtn_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_akademiaWarningBtn_module_css__WEBPACK_IMPORTED_MODULE_2__);



const AkademiaWarningBtn = ({ btnContent , func , warning  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `container ${(_akademiaWarningBtn_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: func,
                    children: btnContent
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    id: "Warstwa_1",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 56 56",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    cx: "28",
                                    cy: "46",
                                    r: "6"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                    points: "24.21 36 31.95 36 35 5 21 5"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                            cx: "28",
                            cy: "28",
                            r: "27.5",
                            fill: "none",
                            stroke: "#000",
                            strokeMiterlimit: "10"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_akademiaWarningBtn_module_css__WEBPACK_IMPORTED_MODULE_2___default().warning),
                    children: warning
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AkademiaWarningBtn);


/***/ })

};
;