"use strict";
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
const UserProtfolio_1 = require("../models/UserProtfolio");
class stocksGenerator {
    constructor(io) {
        this.MIN = -0.3;
        this.MAX = 0.3;
        this.INTERVAL = 30000;
        this._io = io;
        this.generateStockPrice();
    }
    generateStockPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            var e_1, _a;
            try {
                let stocks = yield MarketOnline_1.MarketOnline.findAll();
                let arbitrage;
                try {
                    for (var _b = __asyncValues(Object.values(stocks)), _c; _c = yield _b.next(), !_c.done;) {
                        const stock = _c.value;
                        arbitrage = this.getRandomArbitrary();
                        stock.priceChangeDots = (stock.price * arbitrage) - stock.price;
                        stock.price === 0 ? stock.priceChangePercent = 0 :
                            stock.priceChangePercent = stock.priceChangeDots / stock.price;
                        stock.price *= arbitrage;
                        yield stock.save();
                        yield MarketHistory_1.MarketHistory.create({ symbol: stock.symbol, name: stock.name, price: stock.price });
                        const userStockBeforeUpdate = yield UserProtfolio_1.UserProtfolio.findOne({
                            where: { symbol: stock.symbol }
                        });
                        if (userStockBeforeUpdate) {
                            yield userStockBeforeUpdate.update({
                                priceChangeDots: stock.price - userStockBeforeUpdate.price,
                                priceChangePercent: (stock.price - userStockBeforeUpdate.price) / userStockBeforeUpdate.price,
                                total: (stock.price - userStockBeforeUpdate.price) * userStockBeforeUpdate.amount,
                                value: stock.price * userStockBeforeUpdate.amount
                            });
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                this._io.emit('update', yield MarketOnline_1.MarketOnline.findAll({ order: [['symbol', 'ASC']] }));
                this._io.emit('protfolio', yield UserProtfolio_1.UserProtfolio.findAll({ order: [['symbol', 'ASC']] }));
                setTimeout(() => { this.generateStockPrice(); }, this.INTERVAL);
            }
            catch (err) {
                console.log('we have an error', err.message);
            }
        });
    }
    getRandomArbitrary() {
        return Math.random() * (this.MAX - this.MIN) + this.MIN + 1;
    }
}
exports.stocksGenerator = stocksGenerator;
