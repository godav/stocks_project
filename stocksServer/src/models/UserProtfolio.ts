import { DataType,Table, Column, Model, PrimaryKey,CreatedAt } from 'sequelize-typescript';

@Table
export class UserProtfolio extends Model<UserProtfolio> {

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
  
    @Column(DataType.INTEGER)
    amount!: number;

    @Column(DataType.FLOAT)
    total!: number;

    @Column(DataType.FLOAT)
    value!: number;

    @CreatedAt
    createdAt!: Date;

}

export default UserProtfolio;