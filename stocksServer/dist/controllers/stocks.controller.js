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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const MarketHistory_1 = require("../models/MarketHistory");
const MarketOnline_1 = require("../models/MarketOnline");
const routing_controllers_1 = require("routing-controllers");
let stocksController = class stocksController {
    getMarket() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MarketOnline_1.MarketOnline.findAll({
                order: [['symbol', 'ASC']]
            });
        });
    }
    getOneStockHistory(symbol, page_index, page_size) {
        return __awaiter(this, void 0, void 0, function* () {
            const MarketHistorySize = yield MarketHistory_1.MarketHistory.count({ where: { symbol: symbol } });
            const data = yield MarketHistory_1.MarketHistory.findAll({
                offset: page_index * page_size,
                limit: page_size,
                where: { symbol: symbol },
                order: [['createdAt', 'DESC']]
            });
            return [data, MarketHistorySize];
        });
    }
    getDataHistoryPerSymbolForChart(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            const history = yield MarketHistory_1.MarketHistory.findAll({
                where: { symbol: symbol },
                attributes: ['createdAt', 'price'],
                order: [['createdAt', 'ASC']]
            }).map((stock) => {
                var myNewDate = new Date(stock.createdAt.getTime() + (60000 * 180));
                return [myNewDate.getTime(), stock.price];
            });
            const name = yield MarketHistory_1.MarketHistory.findOne({
                where: { symbol: symbol },
                attributes: ['name']
            });
            return [history, name.name];
        });
    }
    getDataHistoryForAllSymbolsForChart() {
        return __awaiter(this, void 0, void 0, function* () {
            var e_1, _a;
            let series = [];
            const stocks = yield MarketHistory_1.MarketHistory.aggregate('symbol', 'DISTINCT', { plain: false });
            try {
                for (var _b = __asyncValues(Object.values(stocks)), _c; _c = yield _b.next(), !_c.done;) {
                    const value = _c.value;
                    const history = yield MarketHistory_1.MarketHistory.findAll({
                        where: { symbol: value.DISTINCT },
                        attributes: ['createdAt', 'price'],
                        order: [['createdAt', 'ASC']]
                    }).map((stock) => {
                        var myNewDate = new Date(stock.createdAt.getTime() + (60000 * 180));
                        return [myNewDate.getTime(), stock.price];
                    });
                    const name = yield MarketHistory_1.MarketHistory.findOne({
                        where: { symbol: value.DISTINCT },
                        attributes: ['name']
                    });
                    series.push({ showInLegend: true, name: name.name, data: history });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return series;
        });
    }
};
__decorate([
    routing_controllers_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], stocksController.prototype, "getMarket", null);
__decorate([
    routing_controllers_1.Get("/history/:symbol"),
    __param(0, routing_controllers_1.Param("symbol")),
    __param(1, routing_controllers_1.QueryParam("page")),
    __param(2, routing_controllers_1.QueryParam("size")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], stocksController.prototype, "getOneStockHistory", null);
__decorate([
    routing_controllers_1.Get("/history-chart/:symbol"),
    __param(0, routing_controllers_1.Param("symbol")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], stocksController.prototype, "getDataHistoryPerSymbolForChart", null);
__decorate([
    routing_controllers_1.Get("/history-charts"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], stocksController.prototype, "getDataHistoryForAllSymbolsForChart", null);
stocksController = __decorate([
    routing_controllers_1.JsonController("/stocks")
], stocksController);
exports.stocksController = stocksController;
