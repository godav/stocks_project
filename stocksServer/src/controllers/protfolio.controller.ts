
import { UserProtfolio } from '../models/UserProtfolio';
import { MarketOnline } from '../models/MarketOnline';
import { Param, Body, Get, Post, JsonController } from "routing-controllers";
import { UserHistory } from '../models/UserHistory';
import { server } from '../config/serverConfig';

@JsonController("/protfolio")
export class protfolioController {

    @Get("/")
    async getUserProtfolio() {
        return await UserProtfolio.findAll({order: [['createdAt', 'DESC']]});
    }

    @Get("/:symbol")
    async getUserStockFromProtfolio(@Param("symbol") symbol: string) {
        return await UserProtfolio.findAll({
            where: { symbol: symbol },
            order: [['createdAt', 'DESC']]
        });
    }

    @Post("/buy")
    async buyStocks(@Body() stock: UserProtfolio) {
        let ans: any;
        const isStockInProtfolio = await UserProtfolio.findOne({
            where: { symbol: stock.symbol }
        });

        if (isStockInProtfolio) { // if user own this stock need to make avg price
            const currentStock = await MarketOnline.findOne({
                where: { symbol: stock.symbol }
            });

            const newPrice = ((isStockInProtfolio.price * isStockInProtfolio.amount) +
                (stock.price * stock.amount)) / (stock.amount + isStockInProtfolio.amount);
            isStockInProtfolio.price = newPrice;
            isStockInProtfolio.amount += stock.amount;
            isStockInProtfolio.priceChangeDots = newPrice - currentStock!.price;
            isStockInProtfolio.priceChangePercent = (newPrice - currentStock!.price) / currentStock!.price;
            isStockInProtfolio.value = newPrice * isStockInProtfolio.amount;
            isStockInProtfolio.total = isStockInProtfolio.priceChangeDots * isStockInProtfolio.amount;
            ans = await isStockInProtfolio.save();
        } else { // if user don't own this stock make new buy
            const newStock = {
                symbol: stock.symbol,
                name: stock.name,
                price: stock.price,
                priceChangeDots: 0,
                priceChangePercent: 0,
                amount: stock.amount,
                total: 0,
                value: stock.price * stock.amount
            };

            ans = await UserProtfolio.create(newStock);
        }

        await UserHistory.create(stock); // saved to history
        server.getSocket().emit('protfolio', 
            await UserProtfolio.findAll({ order: [['symbol', 'ASC']] }));

        return ans;
    }

    @Post("/sell")
    async sellStocks(@Body() stock: UserProtfolio) {
        const isStockInProtfolio = await UserProtfolio.findOne({
            where: { symbol: stock.symbol }
        });

        if (isStockInProtfolio) {
            isStockInProtfolio.amount -= stock.amount;
            if (isStockInProtfolio.amount === 0) {
                await UserHistory.create(stock);
                return isStockInProtfolio.destroy();
            }
            isStockInProtfolio.total = isStockInProtfolio.price * isStockInProtfolio.amount;
            await UserHistory.create(stock);
            return await isStockInProtfolio.save();
        }
    }

}