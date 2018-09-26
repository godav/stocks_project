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
const serverConfig_1 = require("./config/serverConfig");
const databaseConfig_1 = require("./config/databaseConfig");
const initDataBase_1 = require("./init/initDataBase");
require("reflect-metadata");
(() => __awaiter(this, void 0, void 0, function* () {
    yield databaseConfig_1.syncDataBase();
    yield initDataBase_1.InitDataBase();
    const app = serverConfig_1.server.getApp();
    serverConfig_1.server.startGenerating();
}))();
