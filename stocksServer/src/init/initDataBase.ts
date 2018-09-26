
import { MarketOnline } from '../models/MarketOnline';

export async function InitDataBase():Promise<any> {

    // initialize the first stocks in DB
    const countMarketOnline = await MarketOnline.count();
    if (countMarketOnline === 0) {
        await MarketOnline.sync({ force: false });
        await MarketOnline.bulkCreate([
            { symbol: 'APL', name: 'Apple', price: 0, priceChangeDots: 0, priceChangePercent: 0 },
            { symbol: 'TVA', name: 'Teva', price: 0, priceChangeDots: 0, priceChangePercent: 0 },
            { symbol: 'ISR', name: 'Isramco', price: 0, priceChangeDots: 0, priceChangePercent: 0 },
            { symbol: 'DLK', name: 'Delek', price: 0, priceChangeDots: 0, priceChangePercent: 0 },
            { symbol: 'ELA', name: 'El-Al', price: 0, priceChangeDots: 0, priceChangePercent: 0 },
        ])

    }

}

