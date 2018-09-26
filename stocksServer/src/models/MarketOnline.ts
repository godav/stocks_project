import { DataType,Table, Column, Model, PrimaryKey,CreatedAt } from 'sequelize-typescript';

@Table
export class MarketOnline extends Model<MarketOnline> {

    @PrimaryKey
    @Column(DataType.STRING)
    symbol!: string;

    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.FLOAT)
    price!: number;

    @Column(DataType.FLOAT)
    priceChangeDots!: number;

    @Column(DataType.FLOAT)
    priceChangePercent!: number;
    
    @CreatedAt
    createdAt!: Date;

}

export default MarketOnline;