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
const MarketOnline_1 = require("../models/MarketOnline");
const routing_controllers_1 = require("routing-controllers");
const UserHistory_1 = require("../models/UserHistory");
const serverConfig_1 = require("../config/serverConfig");
let protfolioController = class protfolioController {
    getUserProtfolio() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserProtfolio_1.UserProtfolio.findAll({ order: [['createdAt', 'DESC']] });
        });
    }
    getUserStockFromProtfolio(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserProtfolio_1.UserProtfolio.findAll({
                where: { symbol: symbol },
                order: [['createdAt', 'DESC']]
            });
        });
    }
    buyStocks(stock) {
        return __awaiter(this, void 0, void 0, function* () {
            let ans;
            const isStockInProtfolio = yield UserProtfolio_1.UserProtfolio.findOne({
                where: { symbol: stock.symbol }
            });
            if (isStockInProtfolio) { // if user own this stock need to make avg price
                const currentStock = yield MarketOnline_1.MarketOnline.findOne({
                    where: { symbol: stock.symbol }
                });
                const newPrice = ((isStockInProtfolio.price * isStockInProtfolio.amount) +
                    (stock.price * stock.amount)) / (stock.amount + isStockInProtfolio.amount);
                isStockInProtfolio.price = newPrice;
                isStockInProtfolio.amount += stock.amount;
                isStockInProtfolio.priceChangeDots = newPrice - currentStock.price;
                isStockInProtfolio.priceChangePercent = (newPrice - currentStock.price) / currentStock.price;
                isStockInProtfolio.value = newPrice * isStockInProtfolio.amount;
                isStockInProtfolio.total = isStockInProtfolio.priceChangeDots * isStockInProtfolio.amount;
                ans = yield isStockInProtfolio.save();
            }
            else { // if user don't own this stock make new buy
                const newStock = {
                    symbol: stock.symbol, name: stock.name,
                    price: stock.price, priceChangeDots: 0,
                    priceChangePercent: 0, amount: stock.amount,
                    total: 0, value: stock.price * stock.amount
                };
                ans = yield UserProtfolio_1.UserProtfolio.create(newStock);
            }
            yield UserHistory_1.UserHistory.create(stock); // saved to history
            serverConfig_1.server.getSocket().emit('protfolio', yield UserProtfolio_1.UserProtfolio.findAll({ order: [['symbol', 'ASC']] }));
            return ans;
        });
    }
    sellStocks(stock) {
        return __awaiter(this, void 0, void 0, function* () {
            const isStockInProtfolio = yield UserProtfolio_1.UserProtfolio.findOne({
                where: { symbol: stock.symbol }
            });
            if (isStockInProtfolio) {
                isStockInProtfolio.amount -= stock.amount;
                if (isStockInProtfolio.amount === 0) {
                    yield UserHistory_1.UserHistory.create(stock);
                    return isStockInProtfolio.destroy();
                }
                isStockInProtfolio.total = isStockInProtfolio.price * isStockInProtfolio.amount;
                yield UserHistory_1.UserHistory.create(stock);
                return yield isStockInProtfolio.save();
            }
        });
    }
};
__decorate([
    routing_controllers_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], protfolioController.prototype, "getUserProtfolio", null);
__decorate([
    routing_controllers_1.Get("/:symbol"),
    __param(0, routing_controllers_1.Param("symbol")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], protfolioController.prototype, "getUserStockFromProtfolio", null);
__decorate([
    routing_controllers_1.Post("/buy"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserProtfolio_1.UserProtfolio]),
    __metadata("design:returntype", Promise)
], protfolioController.prototype, "buyStocks", null);
__decorate([
    routing_controllers_1.Post("/sell"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserProtfolio_1.UserProtfolio]),
    __metadata("design:returntype", Promise)
], protfolioController.prototype, "sellStocks", null);
protfolioController = __decorate([
    routing_controllers_1.JsonController("/protfolio")
], protfolioController);
exports.protfolioController = protfolioController;
