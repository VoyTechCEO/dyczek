"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/appWrapper/AppWrapper.tsx":
/*!**********************************************!*\
  !*** ./components/appWrapper/AppWrapper.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _recoilMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/recoilMain */ \"./recoilMain.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _mainLoading_MainLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mainLoading/MainLoading */ \"./components/mainLoading/MainLoading.tsx\");\n/* harmony import */ var _mainError_MainError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mainError/MainError */ \"./components/mainError/MainError.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AppWrapper = (param)=>{\n    let { children  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [siteTheme, setSiteTheme] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_recoilMain__WEBPACK_IMPORTED_MODULE_1__.siteThemeState);\n    const [isUserLoggedIn, setIsUserLoggedIn] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_recoilMain__WEBPACK_IMPORTED_MODULE_1__.isUserLoggedInState);\n    const [isAppLoaded, setIsAppLoaded] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_recoilMain__WEBPACK_IMPORTED_MODULE_1__.isAppLoadedState);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (router.pathname.includes(\"/instytut_medycyny_orientalnej\")) {\n            setSiteTheme(\"imo\");\n        } else if (router.pathname.includes(\"/akupunktura_chiropraktyka\")) {\n            setSiteTheme(\"akuChi\");\n        } else if (router.pathname.includes(\"/szlachetne_zdrowie\")) {\n            setSiteTheme(\"szlaZd\");\n        } else if (router.pathname.includes(\"/akupunktura_kosmetyczna\")) {\n            setSiteTheme(\"akuKos\");\n        } else {\n            setSiteTheme(\"\");\n        }\n    });\n    const getUserData = async ()=>{\n        try {\n            const res = await fetch(\"https://dyczek.netlify.app/api/user\", {\n                method: \"GET\",\n                mode: \"cors\",\n                credentials: \"omit\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await res.json();\n            setIsUserLoggedIn(data.response.isLoggedIn);\n            setIsAppLoaded(true);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const { isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)(\"userData\", async ()=>{\n        await getUserData();\n    });\n    if (!isAppLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mainLoading_MainLoading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\programowansko\\\\praca\\\\henrykDyczek\\\\dyczek\\\\components\\\\appWrapper\\\\AppWrapper.tsx\",\n            lineNumber: 61,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mainError_MainError__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\programowansko\\\\praca\\\\henrykDyczek\\\\dyczek\\\\components\\\\appWrapper\\\\AppWrapper.tsx\",\n            lineNumber: 65,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\programowansko\\\\praca\\\\henrykDyczek\\\\dyczek\\\\components\\\\appWrapper\\\\AppWrapper.tsx\",\n        lineNumber: 68,\n        columnNumber: 10\n    }, undefined);\n};\n_s(AppWrapper, \"m0z/kzT4vna4MmhQwzqJDi2Ag6o=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState,\n        react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = AppWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppWrapper);\nvar _c;\n$RefreshReg$(_c, \"AppWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FwcFdyYXBwZXIvQXBwV3JhcHBlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJc0I7QUFDa0I7QUFDQztBQUNEO0FBQ0Q7QUFDYztBQUNOO0FBTS9DLE1BQU1VLGFBQWEsU0FBeUI7UUFBeEIsRUFBRUMsU0FBUSxFQUFTOztJQUNyQyxNQUFNQyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdSLHNEQUFjQSxDQUFDSix1REFBY0E7SUFDL0QsTUFBTSxDQUFDYSxnQkFBZ0JDLGtCQUFrQixHQUN2Q1Ysc0RBQWNBLENBQUNMLDREQUFtQkE7SUFDcEMsTUFBTSxDQUFDZ0IsYUFBYUMsZUFBZSxHQUFHWixzREFBY0EsQ0FBQ04seURBQWdCQTtJQUVyRUssZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlPLE9BQU9PLFFBQVEsQ0FBQ0MsUUFBUSxDQUFFLG1DQUFrQztZQUM5RE4sYUFBYztRQUNoQixPQUFPLElBQUlGLE9BQU9PLFFBQVEsQ0FBQ0MsUUFBUSxDQUFFLCtCQUE4QjtZQUNqRU4sYUFBYztRQUNoQixPQUFPLElBQUlGLE9BQU9PLFFBQVEsQ0FBQ0MsUUFBUSxDQUFFLHdCQUF1QjtZQUMxRE4sYUFBYztRQUNoQixPQUFPLElBQUlGLE9BQU9PLFFBQVEsQ0FBQ0MsUUFBUSxDQUFFLDZCQUE0QjtZQUMvRE4sYUFBYztRQUNoQixPQUFPO1lBQ0xBLGFBQWM7UUFDaEIsQ0FBQztJQUNIO0lBRUEsTUFBTU8sY0FBYyxVQUFZO1FBQzlCLElBQUk7WUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQU8sdUNBQXNDO2dCQUM3REMsUUFBUztnQkFDVEMsTUFBTTtnQkFDTkMsYUFBYTtnQkFDYkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFDQSxNQUFNQyxPQUFPLE1BQU1OLElBQUlPLElBQUk7WUFDM0JiLGtCQUFrQlksS0FBS0UsUUFBUSxDQUFDQyxVQUFVO1lBQzFDYixlQUFlLElBQUk7UUFDckIsRUFBRSxPQUFPYyxLQUFLO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEsTUFBTSxFQUFFRyxVQUFTLEVBQUVDLE1BQUssRUFBRSxHQUFHN0IscURBQVFBLENBQUUsWUFBVyxVQUFZO1FBQzVELE1BQU1jO0lBQ1I7SUFFQSxJQUFJLENBQUNKLGFBQWE7UUFDaEIscUJBQU8sOERBQUNULGdFQUFXQTs7Ozs7SUFDckIsQ0FBQztJQUVELElBQUk0QixPQUFPO1FBQ1QscUJBQU8sOERBQUMzQiw0REFBU0E7Ozs7O0lBQ25CLENBQUM7SUFFRCxxQkFBTyw4REFBQzRCO2tCQUFLMUI7Ozs7OztBQUNmO0dBcERNRDs7UUFDV1Asa0RBQVNBO1FBQ1VHLGtEQUFjQTtRQUU5Q0Esa0RBQWNBO1FBQ3NCQSxrREFBY0E7UUFrQ3ZCQyxpREFBUUE7OztLQXZDakNHO0FBc0ROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXBwV3JhcHBlci9BcHBXcmFwcGVyLnRzeD9jZGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGlzQXBwTG9hZGVkU3RhdGUsXG4gIGlzVXNlckxvZ2dlZEluU3RhdGUsXG4gIHNpdGVUaGVtZVN0YXRlLFxufSBmcm9tICdAL3JlY29pbE1haW4nO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IE1haW5Mb2FkaW5nIGZyb20gJy4uL21haW5Mb2FkaW5nL01haW5Mb2FkaW5nJztcbmltcG9ydCBNYWluRXJyb3IgZnJvbSAnLi4vbWFpbkVycm9yL01haW5FcnJvcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbn1cblxuY29uc3QgQXBwV3JhcHBlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc2l0ZVRoZW1lLCBzZXRTaXRlVGhlbWVdID0gdXNlUmVjb2lsU3RhdGUoc2l0ZVRoZW1lU3RhdGUpO1xuICBjb25zdCBbaXNVc2VyTG9nZ2VkSW4sIHNldElzVXNlckxvZ2dlZEluXSA9XG4gICAgdXNlUmVjb2lsU3RhdGUoaXNVc2VyTG9nZ2VkSW5TdGF0ZSk7XG4gIGNvbnN0IFtpc0FwcExvYWRlZCwgc2V0SXNBcHBMb2FkZWRdID0gdXNlUmVjb2lsU3RhdGUoaXNBcHBMb2FkZWRTdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKGAvaW5zdHl0dXRfbWVkeWN5bnlfb3JpZW50YWxuZWpgKSkge1xuICAgICAgc2V0U2l0ZVRoZW1lKGBpbW9gKTtcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhgL2FrdXB1bmt0dXJhX2NoaXJvcHJha3R5a2FgKSkge1xuICAgICAgc2V0U2l0ZVRoZW1lKGBha3VDaGlgKTtcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhgL3N6bGFjaGV0bmVfemRyb3dpZWApKSB7XG4gICAgICBzZXRTaXRlVGhlbWUoYHN6bGFaZGApO1xuICAgIH0gZWxzZSBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKGAvYWt1cHVua3R1cmFfa29zbWV0eWN6bmFgKSkge1xuICAgICAgc2V0U2l0ZVRoZW1lKGBha3VLb3NgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2l0ZVRoZW1lKGBgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGdldFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9keWN6ZWsubmV0bGlmeS5hcHAvYXBpL3VzZXJgLCB7XG4gICAgICAgIG1ldGhvZDogYEdFVGAsXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0SXNVc2VyTG9nZ2VkSW4oZGF0YS5yZXNwb25zZS5pc0xvZ2dlZEluKTtcbiAgICAgIHNldElzQXBwTG9hZGVkKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShgdXNlckRhdGFgLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZ2V0VXNlckRhdGEoKTtcbiAgfSk7XG5cbiAgaWYgKCFpc0FwcExvYWRlZCkge1xuICAgIHJldHVybiA8TWFpbkxvYWRpbmcgLz47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPE1haW5FcnJvciAvPjtcbiAgfVxuXG4gIHJldHVybiA8ZGl2PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBXcmFwcGVyO1xuIl0sIm5hbWVzIjpbImlzQXBwTG9hZGVkU3RhdGUiLCJpc1VzZXJMb2dnZWRJblN0YXRlIiwic2l0ZVRoZW1lU3RhdGUiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlY29pbFN0YXRlIiwidXNlUXVlcnkiLCJNYWluTG9hZGluZyIsIk1haW5FcnJvciIsIkFwcFdyYXBwZXIiLCJjaGlsZHJlbiIsInJvdXRlciIsInNpdGVUaGVtZSIsInNldFNpdGVUaGVtZSIsImlzVXNlckxvZ2dlZEluIiwic2V0SXNVc2VyTG9nZ2VkSW4iLCJpc0FwcExvYWRlZCIsInNldElzQXBwTG9hZGVkIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImdldFVzZXJEYXRhIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJyZXNwb25zZSIsImlzTG9nZ2VkSW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/appWrapper/AppWrapper.tsx\n"));

/***/ })

});