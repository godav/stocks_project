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
const MarketOnline_1 = require("../models/MarketOnline");
function InitDataBase() {
    return __awaiter(this, void 0, void 0, function* () {
        // initialize the first stocks in DB
        const countMarketOnline = yield MarketOnline_1.MarketOnline.count();
        if (countMarketOnline === 0) {
            yield MarketOnline_1.MarketOnline.sync({ force: false });
            yield MarketOnline_1.MarketOnline.bulkCreate([
                { symbol: 'APL', name: 'Apple', price: 0, priceChangeDots: 0, priceChangePercent: 0 },
                { symbol: 'TVA', name: 'Teva', price: 0, priceChangeDots: 0, priceChangePercent: 0 },
                { symbol: 'ISR', name: 'Isramco', price: 0, priceChangeDots: 0, priceChangePercent: 0 },
                { symbol: 'DLK', name: 'Delek', price: 0, priceChangeDots: 0, priceChangePercent: 0 },
                { symbol: 'ELA', name: 'El-Al', price: 0, priceChangeDots: 0, priceChangePercent: 0 },
            ]);
        }
    });
}
exports.InitDataBase = InitDataBase;
