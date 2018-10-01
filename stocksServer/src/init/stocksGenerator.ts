import { MarketHistory } from '../models/MarketHistory';
import { MarketOnline } from '../models/MarketOnline';
import { UserProtfolio } from '../models/UserProtfolio';


export class stocksGenerator {

    private MIN = -0.3;
    private MAX = 0.3;
    private INTERVAL = 30000;
    private _io!: SocketIO.Server;

    constructor(io: SocketIO.Server) {
        this._io = io;
        this.generateStockPrice();
    }

    private async generateStockPrice(): Promise<any> {
        try {
            let stocks = await MarketOnline.findAll()
            let arbitrage: number;

            for await (const stock of Object.values(stocks)) {

                arbitrage = this.getRandomArbitrary();
                stock.priceChangeDots = (stock.price * arbitrage) - stock.price;
                stock.price === 0 ? stock.priceChangePercent = 0 :
                    stock.priceChangePercent = stock.priceChangeDots / stock.price;
                stock.price *= arbitrage;

                await stock.save();
                await MarketHistory.create({ symbol: stock.symbol, name: stock.name, price: stock.price })

                const userStockBeforeUpdate = await UserProtfolio.findOne({
                    where: { symbol: stock.symbol }
                });
                if (userStockBeforeUpdate) {
                    await userStockBeforeUpdate.update({
                        priceChangeDots: stock.price - userStockBeforeUpdate.price,
                        priceChangePercent: (stock.price - userStockBeforeUpdate.price) / userStockBeforeUpdate.price,
                        total: (stock.price - userStockBeforeUpdate.price) * userStockBeforeUpdate.amount,
                        value: stock.price * userStockBeforeUpdate.amount
                    })
                }
            }

            this._io.emit('update', await MarketOnline.findAll({ order: [['symbol', 'ASC']] }));
            this._io.emit('protfolio', await UserProtfolio.findAll({ order: [['symbol', 'ASC']] }));

            setTimeout(() => { this.generateStockPrice() }, this.INTERVAL);

        } catch (err) {
            console.log('we have an error', err.message)
        }
    }

    private getRandomArbitrary(): number {
        return Math.random() * (this.MAX - this.MIN) + this.MIN + 1;
    }
}
