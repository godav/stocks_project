import { DataType,Table, Column, Model, PrimaryKey,CreatedAt } from 'sequelize-typescript';

@Table
export class UserHistory extends Model<UserHistory> {

    @Column(DataType.STRING)
    symbol!: string;

    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.FLOAT)
    price!: number;

    @Column(DataType.INTEGER)
    amount!: number;

    @Column(DataType.INTEGER)
    operation!: number;

    @CreatedAt
    createdAt!: Date;

}

export default UserHistory;