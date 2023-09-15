"use strict";
(() => {
var exports = {};
exports.id = 5541;
exports.ids = [5541];
exports.modules = {

/***/ 38:
/***/ ((module) => {

module.exports = require("argon2");

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 6167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "loginCookie",
    cookieOptions: {
        secure: "production" === "production",
        maxAge: 21600
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionOptions);


/***/ }),

/***/ 5042:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(argon2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8534);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6167);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_1__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
    let status;
    let data = {
        comment: "unsupported method"
    };
    switch(req.method){
        case "GET":
            if (req.session.user) {
                data.response = {
                    isLoggedIn: true
                };
                data.comment = "Logged in";
            } else {
                data.response = {
                    isLoggedIn: false
                };
                data.comment = "Not logged in";
            }
            status = 200;
            break;
        case "POST":
            console.log("s1");
            try {
                console.log("s2");
                if (await argon2__WEBPACK_IMPORTED_MODULE_0___default().verify(process.env.ADMIN_PASSWORD, req.body.password)) {
                    console.log("s3");
                    console.log(process.env.ADMIN_PASSWORD);
                    req.session.user = {
                        isLoggedIn: true
                    };
                    console.log("s4");
                    await req.session.save();
                    console.log("s5");
                    data.response = {
                        isPasswordCorrect: true
                    };
                    console.log("s6");
                    data.comment = "Correct password";
                    console.log("s7");
                    status = 200;
                    console.log("s8");
                } else {
                    console.log("s9");
                    data.response = {
                        isPasswordCorrect: false
                    };
                    data.comment = "Incorrect password";
                    status = 401;
                }
            } catch (err) {
                console.log("s11");
                console.log(err);
                status = 500;
                data.comment = `Failed to post: ${err}`;
            }
            break;
        case "DELETE":
            console.log("s12");
            req.session.destroy();
            console.log("s13");
            data.response = {
                isLoggedIn: false
            };
            status = 200;
            data.comment = "Logged out";
            break;
        case "OPTIONS":
            status = 200;
            data.comment = "CORS policy passed";
            break;
        default:
            status = 405;
            break;
    }
    console.log("s14");
    res.status(status).json(data);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_1__/* .withIronSessionApiRoute */ .n)(handler, _lib_session__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8534], () => (__webpack_exec__(5042)));
module.exports = __webpack_exports__;

})();