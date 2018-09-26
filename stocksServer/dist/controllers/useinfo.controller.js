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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserProtfolio_1 = require("../models/UserProtfolio");
const routing_controllers_1 = require("routing-controllers");
const UserHistory_1 = require("../models/UserHistory");
let userinfoController = class userinfoController {
    getUserTransactions(page_index, page_size) {
        return __awaiter(this, void 0, void 0, function* () {
            const UserHistorySize = yield UserHistory_1.UserHistory.count();
            const data = yield UserHistory_1.UserHistory.findAll({
                offset: page_index * page_size,
                limit: page_size,
                order: [['createdAt', 'DESC']]
            });
            return [data, UserHistorySize];
        });
    }
    getDataForUserProtfolioChart() {
        return __awaiter(this, void 0, void 0, function* () {
            const sum = yield UserProtfolio_1.UserProtfolio.sum('value');
            const stocks = yield UserProtfolio_1.UserProtfolio.findAll({ attributes: ['name', 'value'] })
                .map((stock) => {
                return { name: stock.name, y: stock.value / sum };
            });
            return stocks;
        });
    }
};
__decorate([
    routing_controllers_1.Get("/transactions"),
    __param(0, routing_controllers_1.QueryParam("page")),
    __param(1, routing_controllers_1.QueryParam("size")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], userinfoController.prototype, "getUserTransactions", null);
__decorate([
    routing_controllers_1.Get("/user-protfolio-chart"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], userinfoController.prototype, "getDataForUserProtfolioChart", null);
userinfoController = __decorate([
    routing_controllers_1.JsonController("/user-info")
], userinfoController);
exports.userinfoController = userinfoController;
