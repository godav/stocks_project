"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
function syncDataBase() {
    return __awaiter(this, void 0, void 0, function* () {
        const sequelize = yield new sequelize_typescript_1.Sequelize({
            dialect: 'postgres',
            operatorsAliases: sequelize_typescript_1.Sequelize.Op,
            database: 'stockDB',
            username: 'avner',
            password: '1234',
            host: 'db_layer',
            port: 5432,
            // host: 'localhost',
            // port: 3706,
            logging: false,
            modelPaths: [__dirname + '/../models']
        });
        yield sequelize.sync({ force: false });
    });
}
exports.syncDataBase = syncDataBase;
;
