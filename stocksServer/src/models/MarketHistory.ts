

import { DataType,Table, Column, Model, PrimaryKey,CreatedAt } from 'sequelize-typescript';

@Table({timestamps: true})
export class MarketHistory extends Model<MarketHistory> {


    @Column(DataType.STRING)
    symbol!: string;

    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.FLOAT)
    price!: number;

    @CreatedAt
     createdAt!: Date

    // defaultValue: sequelize.literal('NOW()')

}

export default MarketHistory;