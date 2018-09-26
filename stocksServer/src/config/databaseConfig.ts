import { Sequelize } from 'sequelize-typescript';

export async function syncDataBase(): Promise<any> {
   const sequelize = await new Sequelize({
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op as any,
    database: 'stockDB',
    username: 'avner',
    password: '1234',
    host: 'db_layer',
    port: 5432,
    // host: 'localhost',
    // port: 3706,
    logging: false,
    modelPaths: [__dirname + '/../models']
  })

  await sequelize.sync({ force: false });
};


