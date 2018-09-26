
import { UserProtfolio } from '../models/UserProtfolio';
import { Controller, Get, QueryParam, JsonController } from "routing-controllers";
import { UserHistory } from '../models/UserHistory';

@JsonController("/user-info")
export class userinfoController {

    @Get("/transactions")
    async getUserTransactions(
        @QueryParam("page") page_index: number,
        @QueryParam("size") page_size: number) {
        const UserHistorySize = await UserHistory.count();
        const data = await UserHistory.findAll({
            offset: page_index * page_size,
            limit: page_size,
            order: [['createdAt', 'DESC']]
        });

        return [data, UserHistorySize];
    }

    @Get("/user-protfolio-chart")
    async getDataForUserProtfolioChart() {
       
        const sum = await UserProtfolio.sum('value');
        const stocks: any = await UserProtfolio.findAll({ attributes: ['name', 'value'] })
            .map((stock: UserProtfolio) => {
                return { name: stock.name, y: stock.value / sum }
            });
          
        return stocks;
    }

}