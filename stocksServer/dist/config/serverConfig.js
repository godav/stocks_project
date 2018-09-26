"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = __importDefault(require("socket.io"));
const stocksGenerator_1 = require("../init/stocksGenerator");
const routing_controllers_1 = require("routing-controllers");
const api_error_handler_1 = __importDefault(require("../middleware/api.error.handler"));
const browser_error_handler_1 = __importDefault(require("../middleware/browser.error.handler"));
const body_parser_1 = require("../middleware/body-parser");
class StocksServer {
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }
    createApp() {
        this.app = routing_controllers_1.createExpressServer({
            cors: true,
            defaultErrorHandler: false,
            defaults: { nullResultCode: 404 },
            routePrefix: "/api",
            classTransformer: false,
            controllers: [__dirname + '/../controllers/*.controller{.js,.ts}'],
            middlewares: [
                body_parser_1.BodyParserMiddleware,
                browser_error_handler_1.default,
                api_error_handler_1.default
            ]
        });
    }
    createServer() {
        this.server = http_1.createServer(this.app);
    }
    config() {
        this.port = process.env.PORT || 3002;
    }
    sockets() {
        this.io = socket_io_1.default(this.server);
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
        this.io.on('connect', (socket) => {
            console.log('Connected client on port %s.', this.port);
            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }
    getApp() {
        return this.app;
    }
    startGenerating() {
        this.generator = new stocksGenerator_1.stocksGenerator(this.io);
    }
    getSocket() {
        return this.io;
    }
}
StocksServer.PORT = 3002;
exports.server = new StocksServer();
