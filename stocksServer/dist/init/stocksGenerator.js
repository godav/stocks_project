"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MarketHistory_1 = require("../models/MarketHistory");
const MarketOnline_1 = require("../models/MarketOnline");
const UserProtfolio_1 = require("../models/UserProtfolio");
class stocksGenerator {
    constructor(io) {
        this.MIN = -30;
        this.MAX = 30;
        this.INTERVAL = 30000;
        this._io = io;
        this.generateStockPrice();
    }
    generateStockPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let stocks = yield MarketOnline_1.MarketOnline.findAll();
                let arbitrage;
                stocks.forEach((stock) => __awaiter(this, void 0, void 0, function* () {
                    do {
                        arbitrage = this.getRandomArbitrary();
                    } while ((arbitrage + stock.price) < 0);
                    stock.priceChangeDots = (stock.price + arbitrage) - stock.price;
                    if (stock.price === 0)
                        stock.priceChangePercent = 0;
                    else
                        stock.priceChangePercent = stock.priceChangeDots / stock.price;
                    stock.price += arbitrage;
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
                }));
                stocks = yield MarketOnline_1.MarketOnline.findAll({ order: [['symbol', 'ASC']] });
                this._io.emit('update', stocks);
                let protfolio = yield UserProtfolio_1.UserProtfolio.findAll({ order: [['symbol', 'ASC']] });
                this._io.emit('protfolio', protfolio);
                setTimeout(() => { this.generateStockPrice(); }, this.INTERVAL);
            }
            catch (err) {
                console.log('we have an error', err.message);
            }
        });
    }
    getRandomArbitrary() {
        return Math.random() * (this.MAX - this.MIN) + this.MIN;
    }
}
exports.stocksGenerator = stocksGenerator;
