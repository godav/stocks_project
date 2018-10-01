import { MarketHistory } from '../models/MarketHistory';
import { MarketOnline } from '../models/MarketOnline';
import { Param, Get, QueryParam, JsonController } from "routing-controllers";


@JsonController("/stocks")
export class stocksController {

    @Get("/")
    async getMarket() {
        return await MarketOnline.findAll({
            order: [['symbol', 'ASC']]
        });
    }

    @Get("/history/:symbol")
    async getOneStockHistory(@Param("symbol") symbol: string,
        @QueryParam("page") page_index: number,
        @QueryParam("size") page_size: number) {
        const MarketHistorySize = await MarketHistory.count({ where: { symbol: symbol } });
        const data = await MarketHistory.findAll({
            offset: page_index * page_size,
            limit: page_size,
            where: { symbol: symbol },
            order: [['createdAt', 'DESC']]
        });

        return [data, MarketHistorySize];
    }

    @Get("/history-chart/:symbol")
    async getDataHistoryPerSymbolForChart(@Param("symbol") symbol: string) {
        const history = await MarketHistory.findAll({
            where: { symbol: symbol },
            attributes: ['createdAt', 'price'],
            order: [['createdAt', 'ASC']]
        }).map((stock: MarketHistory) => {
            var myNewDate = new Date(stock.createdAt.getTime() + (60000 * 180));
            return [myNewDate.getTime(), stock.price]
        })

        const name = await MarketHistory.findOne({
            where: { symbol: symbol },
            attributes: ['name']
        });
        return [history, name!.name];
    }

    @Get("/history-charts")
    async getDataHistoryForAllSymbolsForChart() {

        let series: any = [];
        const stocks: any = await MarketHistory.aggregate('symbol', 'DISTINCT', { plain: false });

        for await (const value of Object.values(stocks)) {
            const history = await MarketHistory.findAll({
                where: { symbol: (value as any).DISTINCT },
                attributes: ['createdAt', 'price'],
                order: [['createdAt', 'ASC']]
            }).map((stock: MarketHistory) => {
                var myNewDate = new Date(stock.createdAt.getTime() + (60000 * 180));
                return [myNewDate.getTime(), stock.price]
            })
            const name = await MarketHistory.findOne({
                where: { symbol: (value as any).DISTINCT },
                attributes: ['name']
            });
            series.push({ showInLegend: true, name: name!.name, data: history });
        }

        return series;
    }
}

