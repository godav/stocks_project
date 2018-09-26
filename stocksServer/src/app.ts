
import { server } from './config/serverConfig';
import { syncDataBase } from './config/databaseConfig'
import { InitDataBase } from './init/initDataBase'

import "reflect-metadata";

(async () => {
    await syncDataBase()
    await InitDataBase();

    const app = server.getApp();

    server.startGenerating();

})()