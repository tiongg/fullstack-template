/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(2);
const server_status_module_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [server_status_module_1.ServerStatusModule],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerStatusModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(4);
const server_status_controller_1 = __webpack_require__(5);
const server_status_service_1 = __webpack_require__(6);
let ServerStatusModule = class ServerStatusModule {
};
ServerStatusModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [server_status_controller_1.ServerStatusController],
        providers: [server_status_service_1.ServerStatusService],
    })
], ServerStatusModule);
exports.ServerStatusModule = ServerStatusModule;


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerStatusController = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(4);
const server_status_service_1 = __webpack_require__(6);
let ServerStatusController = class ServerStatusController {
    constructor(serverStatusService) {
        this.serverStatusService = serverStatusService;
    }
    getStatus() {
        return this.serverStatusService.getServerStatus();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('status'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ServerStatusController.prototype, "getStatus", null);
ServerStatusController = tslib_1.__decorate([
    (0, common_1.Controller)('server-status'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof server_status_service_1.ServerStatusService !== "undefined" && server_status_service_1.ServerStatusService) === "function" ? _a : Object])
], ServerStatusController);
exports.ServerStatusController = ServerStatusController;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerStatusService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(4);
let ServerStatusService = class ServerStatusService {
    constructor() { }
    getServerStatus() {
        return {
            status: 'Alive!',
        };
    }
    getVersion() {
        return {
            version: '1.0.0',
        };
    }
};
ServerStatusService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], ServerStatusService);
exports.ServerStatusService = ServerStatusService;


/***/ }),
/* 7 */,
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.app = void 0;
const app_module_1 = __webpack_require__(1);
const core_1 = __webpack_require__(8);
const { SERVER_PORT } = process.env;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: process.env.FRONTEND_DOMAIN,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
    });
    await app.listen(SERVER_PORT ?? 2000);
    return app;
}
exports.app = bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map