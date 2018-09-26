"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
let BrowserErrorHandler = class BrowserErrorHandler {
    error(error, request, response, next) {
        //this error handler will not handle ajax requests
        //its response is meant for the browser
        if (request.xhr === true) {
            return next(error);
        }
        //The response to browser
        response.end(`<h1>Error: ${error.message}</h1>`);
    }
};
__decorate([
    routing_controllers_1.HttpCode(500),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Function]),
    __metadata("design:returntype", void 0)
], BrowserErrorHandler.prototype, "error", null);
BrowserErrorHandler = __decorate([
    routing_controllers_1.Middleware({ type: "after" })
], BrowserErrorHandler);
exports.default = BrowserErrorHandler;
