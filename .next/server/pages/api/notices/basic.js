"use strict";
(() => {
var exports = {};
exports.id = 5275;
exports.ids = [5275];
exports.modules = {

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 9476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prismaClient.ts

const prisma = global.prisma || new client_namespaceObject.PrismaClient();
if (false) {}


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

/***/ 8621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8534);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6167);
/* harmony import */ var _lib_prismaClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9476);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
    let status;
    let data = {
        comment: "unsupported method"
    };
    console.log(`s1`);
    switch(req.method){
        case "GET":
            console.log(`s2`);
            try {
                console.log(`s3`);
                const basicTraining = await _lib_prismaClient__WEBPACK_IMPORTED_MODULE_2__/* .prisma.noticeBasic.findMany */ ._.noticeBasic.findMany();
                console.log(`s4`);
                console.log(basicTraining);
                status = 200;
                data.comment = "Got";
                data.response = basicTraining[0];
            } catch (err) {
                console.log(err);
                console.log(`s5`);
                data.comment = `Error: ${err}`;
                status = 500;
            }
            break;
        case "PUT":
            if (!req.session.user) {
                status = 403;
                data.comment = "User does not have access to this method without admin permissions.";
                break;
            }
            const getDate = new Date();
            const currentDate = `${getDate.getFullYear()}-${getDate.getMonth() + 1 < 10 ? "0" + (getDate.getMonth() + 1) : getDate.getMonth() + 1}-${getDate.getDate() < 10 ? "0" + getDate.getDate() : getDate.getDate()}`;
            try {
                const basicTraining = await _lib_prismaClient__WEBPACK_IMPORTED_MODULE_2__/* .prisma.noticeBasic.findMany */ ._.noticeBasic.findMany();
                await _lib_prismaClient__WEBPACK_IMPORTED_MODULE_2__/* .prisma.noticeBasic.update */ ._.noticeBasic.update({
                    where: {
                        id: basicTraining[0].id
                    },
                    data: {
                        date: currentDate,
                        content: req.body.content
                    }
                });
            } catch (err) {
                console.log(err);
                status = 500;
                data.comment = `Failed to post: ${err}`;
                break;
            }
            status = 201;
            data.comment = "Put";
            break;
        default:
            status = 405;
            break;
    }
    console.log(`s6`);
    console.log(data);
    res.status(status).json(data);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(handler, _lib_session__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8534], () => (__webpack_exec__(8621)));
module.exports = __webpack_exports__;

})();