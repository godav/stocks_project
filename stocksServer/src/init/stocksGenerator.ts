import { MarketHistory } from '../models/MarketHistory';
import { MarketOnline } from '../models/MarketOnline';
import { UserProtfolio } from '../models/UserProtfolio';


export class stocksGenerator {

    private MIN = -30;
    private MAX = 30;
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
            stocks.forEach(async (stock) => {

                do {
                    arbitrage = this.getRandomArbitrary();
                } while ((arbitrage + stock.price) < 0);

                stock.priceChangeDots = (stock.price + arbitrage) - stock.price;
                if (stock.price === 0)
                    stock.priceChangePercent = 0;
                else
                    stock.priceChangePercent = stock.priceChangeDots / stock.price;
                stock.price += arbitrage;

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
            })
            stocks = await MarketOnline.findAll({ order: [['symbol', 'ASC']] });
            this._io.emit('update', stocks);

            let protfolio = await UserProtfolio.findAll({ order: [['symbol', 'ASC']] });
            this._io.emit('protfolio', protfolio);
            setTimeout(() => { this.generateStockPrice() }, this.INTERVAL);

        } catch (err) {
            console.log('we have an error', err.message)
        }

    }

    private getRandomArbitrary(): number {
        return Math.random() * (this.MAX - this.MIN) + this.MIN;
    }



}
