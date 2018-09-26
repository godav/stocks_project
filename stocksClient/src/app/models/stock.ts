export interface BaseStock {
    symbol: string;
    name: string;
    price: number;
    createdAt?: Date;
}

export interface Stock extends BaseStock {
    priceChangeDots: number;
    priceChangePercent: number;
}



export interface StockProtfolio extends Stock {
    amount: number;
    total: number;
    value: number;
}

export interface UserStocksOp extends BaseStock{
    amount: number;
    operation: number; 
}