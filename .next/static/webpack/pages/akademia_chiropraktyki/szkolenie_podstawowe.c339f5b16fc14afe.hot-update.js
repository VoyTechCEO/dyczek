"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/akademia_chiropraktyki/szkolenie_podstawowe",{

/***/ "./components/logoutBtn/LogoutBtn.tsx":
/*!********************************************!*\
  !*** ./components/logoutBtn/LogoutBtn.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logoutBtn_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logoutBtn.module.css */ \"./components/logoutBtn/logoutBtn.module.css\");\n/* harmony import */ var _logoutBtn_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_logoutBtn_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst LogoutBtn = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const logOut = async ()=>{\n        await fetch(\"https://dyczek.netlify.app/api/user\", {\n            method: \"DELETE\"\n        });\n        router.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"container \".concat((_logoutBtn_module_css__WEBPACK_IMPORTED_MODULE_3___default().container)),\n            onClick: logOut,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    id: \"Warstwa_1\",\n                    \"data-name\": \"Warstwa 1\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    viewBox: \"0 0 154 224.34\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"m62.41,38.52L11,9v185.08c0,1.81.97,3.48,2.53,4.38l43.91,25.21c3.36,1.93,7.56-.5,7.56-4.38V42.98c0-1.84-.99-3.55-2.59-4.47Z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\programowansko\\\\praca\\\\henrykDyczek\\\\dyczek\\\\components\\\\logoutBtn\\\\LogoutBtn.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"m151.88,95.87l-31.26-25.59c-3.78-3.09-9.45-.4-9.45,4.48v15.92h-34.01c-3.2,0-5.79,2.59-5.79,5.79v6.95c0,3.2,2.59,5.79,5.79,5.79h34.01v16.73c0,4.88,5.67,7.57,9.45,4.48l31.26-25.59c2.83-2.31,2.83-6.64,0-8.95Z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\programowansko\\\\praca\\\\henrykDyczek\\\\dyczek\\\\components\\\\logoutBtn\\\\LogoutBtn.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"m122.56,137.42c-1.03.85-2.18,1.33-3.34,1.52-.71.12-1.22.76-1.22,1.48v44.06c0,1.94-1.57,3.52-3.52,3.52H15.52c-1.94,0-3.52-1.57-3.52-3.52V15.52c0-1.94,1.57-3.52,3.52-3.52h98.97c1.94,0,3.52,1.57,3.52,3.52v44.95c0,.72.51,1.37,1.22,1.48,1.16.19,2.31.68,3.34,1.52l4.97,4.06c.99.81,2.48.11,2.48-1.17V8.52c0-4.7-3.81-8.52-8.52-8.52H8.52C3.81,0,0,3.81,0,8.52v182.97c0,4.7,3.81,8.52,8.52,8.52h112.97c4.7,0,8.52-3.81,8.52-8.52v-56.96c0-1.28-1.49-1.98-2.48-1.17l-4.97,4.06Z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\programowansko\\\\praca\\\\henrykDyczek\\\\dyczek\\\\components\\\\logoutBtn\\\\LogoutBtn.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\programowansko\\\\praca\\\\henrykDyczek\\\\dyczek\\\\components\\\\logoutBtn\\\\LogoutBtn.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Wyloguj się\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\programowansko\\\\praca\\\\henrykDyczek\\\\dyczek\\\\components\\\\logoutBtn\\\\LogoutBtn.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\programowansko\\\\praca\\\\henrykDyczek\\\\dyczek\\\\components\\\\logoutBtn\\\\LogoutBtn.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(LogoutBtn, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LogoutBtn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogoutBtn);\nvar _c;\n$RefreshReg$(_c, \"LogoutBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ291dEJ0bi9Mb2dvdXRCdG4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzJCO0FBQ2I7QUFFeEMsTUFBTUcsWUFBWSxJQUFNOztJQUN0QixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEIsTUFBTUcsU0FBUyxVQUFZO1FBQ3pCLE1BQU1DLE1BQU8sdUNBQXNDO1lBQ2pEQyxRQUFTO1FBQ1g7UUFDQUgsT0FBT0ksTUFBTTtJQUNmO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQ0NDLFdBQVcsYUFBdUMsT0FBMUJULHdFQUF5QjtZQUNqRFcsU0FBU1A7OzhCQUVULDhEQUFDUTtvQkFDQ0MsSUFBRztvQkFDSEMsYUFBVTtvQkFDVkMsT0FBTTtvQkFDTkMsU0FBUTs7c0NBRVIsOERBQUNDOzRCQUFLQyxHQUFFOzs7Ozs7c0NBQ1IsOERBQUNEOzRCQUFLQyxHQUFFOzs7Ozs7c0NBQ1IsOERBQUNEOzRCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7OEJBRVYsOERBQUNDOzhCQUFLOzs7Ozs7Ozs7Ozs7O0FBSWQ7R0E5Qk1qQjs7UUFDV0Qsa0RBQVNBOzs7S0FEcEJDO0FBZ0NOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9nb3V0QnRuL0xvZ291dEJ0bi50c3g/Nzc3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGxvZ291dEJ0blN0eWxlcyBmcm9tICcuL2xvZ291dEJ0bi5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgTG9nb3V0QnRuID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBsb2dPdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vZHljemVrLm5ldGxpZnkuYXBwL2FwaS91c2VyYCwge1xuICAgICAgbWV0aG9kOiBgREVMRVRFYCxcbiAgICB9KTtcbiAgICByb3V0ZXIucmVsb2FkKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2Bjb250YWluZXIgJHtsb2dvdXRCdG5TdHlsZXMuY29udGFpbmVyfWB9XG4gICAgICAgIG9uQ2xpY2s9e2xvZ091dH1cbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGlkPSdXYXJzdHdhXzEnXG4gICAgICAgICAgZGF0YS1uYW1lPSdXYXJzdHdhIDEnXG4gICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgIHZpZXdCb3g9JzAgMCAxNTQgMjI0LjM0J1xuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggZD0nbTYyLjQxLDM4LjUyTDExLDl2MTg1LjA4YzAsMS44MS45NywzLjQ4LDIuNTMsNC4zOGw0My45MSwyNS4yMWMzLjM2LDEuOTMsNy41Ni0uNSw3LjU2LTQuMzhWNDIuOThjMC0xLjg0LS45OS0zLjU1LTIuNTktNC40N1onIC8+XG4gICAgICAgICAgPHBhdGggZD0nbTE1MS44OCw5NS44N2wtMzEuMjYtMjUuNTljLTMuNzgtMy4wOS05LjQ1LS40LTkuNDUsNC40OHYxNS45MmgtMzQuMDFjLTMuMiwwLTUuNzksMi41OS01Ljc5LDUuNzl2Ni45NWMwLDMuMiwyLjU5LDUuNzksNS43OSw1Ljc5aDM0LjAxdjE2LjczYzAsNC44OCw1LjY3LDcuNTcsOS40NSw0LjQ4bDMxLjI2LTI1LjU5YzIuODMtMi4zMSwyLjgzLTYuNjQsMC04Ljk1WicgLz5cbiAgICAgICAgICA8cGF0aCBkPSdtMTIyLjU2LDEzNy40MmMtMS4wMy44NS0yLjE4LDEuMzMtMy4zNCwxLjUyLS43MS4xMi0xLjIyLjc2LTEuMjIsMS40OHY0NC4wNmMwLDEuOTQtMS41NywzLjUyLTMuNTIsMy41MkgxNS41MmMtMS45NCwwLTMuNTItMS41Ny0zLjUyLTMuNTJWMTUuNTJjMC0xLjk0LDEuNTctMy41MiwzLjUyLTMuNTJoOTguOTdjMS45NCwwLDMuNTIsMS41NywzLjUyLDMuNTJ2NDQuOTVjMCwuNzIuNTEsMS4zNywxLjIyLDEuNDgsMS4xNi4xOSwyLjMxLjY4LDMuMzQsMS41Mmw0Ljk3LDQuMDZjLjk5LjgxLDIuNDguMTEsMi40OC0xLjE3VjguNTJjMC00LjctMy44MS04LjUyLTguNTItOC41Mkg4LjUyQzMuODEsMCwwLDMuODEsMCw4LjUydjE4Mi45N2MwLDQuNywzLjgxLDguNTIsOC41Miw4LjUyaDExMi45N2M0LjcsMCw4LjUyLTMuODEsOC41Mi04LjUydi01Ni45NmMwLTEuMjgtMS40OS0xLjk4LTIuNDgtMS4xN2wtNC45Nyw0LjA2WicgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzcGFuPld5bG9ndWogc2nEmTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0QnRuO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibG9nb3V0QnRuU3R5bGVzIiwidXNlUm91dGVyIiwiTG9nb3V0QnRuIiwicm91dGVyIiwibG9nT3V0IiwiZmV0Y2giLCJtZXRob2QiLCJyZWxvYWQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJvbkNsaWNrIiwic3ZnIiwiaWQiLCJkYXRhLW5hbWUiLCJ4bWxucyIsInZpZXdCb3giLCJwYXRoIiwiZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/logoutBtn/LogoutBtn.tsx\n"));

/***/ })

});